import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNetworkStatus } from './useNetworkStatus';
import { offlineQueue, processQueue, shouldQueueOffline } from '@/lib/offlineQueue';
import { useState, useCallback } from 'react';

interface UseOfflineMutationOptions<TData, TVariables, TError> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  mutationKey: unknown[];
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
}

export const useOfflineMutation = <TData = unknown, TVariables = void, TError = unknown>({
  mutationFn,
  mutationKey,
  onSuccess,
  onError
}: UseOfflineMutationOptions<TData, TVariables, TError>) => {
  const queryClient = useQueryClient();
  const { isOnline } = useNetworkStatus();
  const [isPending, setIsPending] = useState(false);
  const [pendingMutations, setPendingMutations] = useState(offlineQueue.getQueueSize());

  const executeMutation = useCallback(async (variables: TVariables) => {
    try {
      const result = await mutationFn(variables);
      onSuccess?.(result, variables);
      return result;
    } catch (error) {
      onError?.(error as TError, variables);
      throw error;
    }
  }, [mutationFn, onSuccess, onError]);

  const mutation = useMutation({
    mutationFn: async (variables: TVariables) => {
      if (shouldQueueOffline(!isOnline)) {
        // Queue the mutation for later
        offlineQueue.addToQueue(mutationKey, variables);
        setPendingMutations(offlineQueue.getQueueSize());
        return null as TData; // Return null for queued mutations
      }

      return executeMutation(variables);
    },
    mutationKey,
    onMutate: async (variables) => {
      setIsPending(true);
      return variables;
    },
    onSuccess: (data, variables) => {
      setIsPending(false);
      onSuccess?.(data, variables);
    },
    onError: (error, variables) => {
      setIsPending(false);
      // If offline, queue the mutation
      if (!isOnline) {
        offlineQueue.addToQueue(mutationKey, variables);
        setPendingMutations(offlineQueue.getQueueSize());
      }
      onError?.(error as TError, variables);
    },
  });

  // Process queued mutations when coming back online
  const syncMutations = useCallback(async () => {
    if (isOnline && pendingMutations > 0) {
      try {
        await processQueue(async (key, vars) => {
          await executeMutation(vars as TVariables);
        });
        setPendingMutations(offlineQueue.getQueueSize());
        // Invalidate related queries to refresh data
        queryClient.invalidateQueries({ mutationKey });
      } catch (error) {
        console.error('Error syncing mutations:', error);
      }
    }
  }, [isOnline, pendingMutations, executeMutation, mutationKey, queryClient]);

  // Auto-sync when coming back online
  if (isOnline && pendingMutations > 0) {
    syncMutations();
  }

  return {
    ...mutation,
    isPending: mutation.isPending || isPending,
    pendingMutations,
    syncMutations
  };
};

// Hook to manage offline state and sync
export const useOfflineSync = () => {
  const { isOnline, isOffline } = useNetworkStatus();
  const [pendingMutations, setPendingMutations] = useState(offlineQueue.getQueueSize());

  const syncAll = useCallback(async () => {
    if (isOnline) {
      try {
        // Process all queued mutations
        const queue = offlineQueue.getQueue();
        for (const item of queue) {
          // Execute each mutation
          // This would need to be integrated with your actual mutation functions
          console.log('Processing mutation:', item);
        }
        offlineQueue.clearQueue();
        setPendingMutations(0);
      } catch (error) {
        console.error('Error syncing all mutations:', error);
      }
    }
  }, [isOnline]);

  // Update pending mutations count
  const updatePendingCount = useCallback(() => {
    setPendingMutations(offlineQueue.getQueueSize());
  }, []);

  return {
    isOnline,
    isOffline,
    pendingMutations,
    syncAll,
    updatePendingCount
  };
};
