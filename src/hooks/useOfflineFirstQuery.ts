import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useNetworkStatus } from './useNetworkStatus';
import { offlineStorage } from '@/lib/offlineStorage';

interface OfflineFirstQueryOptions<TData, TError> extends Omit<UseQueryOptions<TData, TError>, 'queryFn'> {
  queryKey: unknown[];
  queryFn: () => Promise<TData>;
  cacheKey?: string;
  cacheTTL?: number;
}

export const useOfflineFirstQuery = <TData, TError = unknown>({
  queryKey,
  queryFn,
  cacheKey,
  cacheTTL = 24 * 60 * 60 * 1000, // 24 hours default
  ...options
}: OfflineFirstQueryOptions<TData, TError>) => {
  const { isOnline } = useNetworkStatus();
  const key = cacheKey || (typeof queryKey[0] === 'string' ? queryKey[0] : JSON.stringify(queryKey));

  return useQuery({
    queryKey,
    queryFn: async () => {
      if (isOnline) {
        try {
          const data = await queryFn();
          // Cache the successful response
          await offlineStorage.set(key, data, cacheTTL);
          return data;
        } catch (error) {
          // If online request fails, try to serve from cache
          console.warn('Online request failed, trying cache:', error);
          const cached = await offlineStorage.get(key);
          if (cached) {
            return cached as TData;
          }
          throw error;
        }
      } else {
        // Offline: serve from cache
        const cached = await offlineStorage.get(key);
        if (cached) {
          return cached as TData;
        }
        throw new Error('No cached data available offline');
      }
    },
    staleTime: cacheTTL,
    gcTime: cacheTTL * 2,
    retry: (failureCount, error) => {
      // Don't retry if offline
      if (!isOnline) return false;
      return failureCount < 2;
    },
    ...options,
  });
};

// Hook for prefetching data when online
export const usePrefetchOfflineData = () => {
  const { isOnline } = useNetworkStatus();

  const prefetch = async <TData>(
    key: string,
    data: TData,
    ttl?: number
  ): Promise<void> => {
    if (isOnline) {
      await offlineStorage.set(key, data, ttl);
    }
  };

  return { prefetch, isOnline };
};
