interface QueuedMutation {
  id: string;
  timestamp: number;
  mutationKey: unknown[];
  variables: unknown;
  retryCount: number;
}

const QUEUE_KEY = 'offline-mutation-queue';
const MAX_RETRIES = 3;

export const offlineQueue = {
  getQueue: (): QueuedMutation[] => {
    try {
      const queue = localStorage.getItem(QUEUE_KEY);
      return queue ? JSON.parse(queue) : [];
    } catch (error) {
      console.error('Error reading offline queue:', error);
      return [];
    }
  },

  addToQueue: (mutationKey: unknown[], variables: unknown): void => {
    try {
      const queue = offlineQueue.getQueue();
      const mutation: QueuedMutation = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
        mutationKey,
        variables,
        retryCount: 0,
      };
      queue.push(mutation);
      localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    } catch (error) {
      console.error('Error adding to offline queue:', error);
    }
  },

  removeFromQueue: (id: string): void => {
    try {
      const queue = offlineQueue.getQueue();
      const filtered = queue.filter(m => m.id !== id);
      localStorage.setItem(QUEUE_KEY, JSON.stringify(filtered));
    } catch (error) {
      console.error('Error removing from offline queue:', error);
    }
  },

  updateRetryCount: (id: string, retryCount: number): void => {
    try {
      const queue = offlineQueue.getQueue();
      const updated = queue.map(m => 
        m.id === id ? { ...m, retryCount } : m
      );
      localStorage.setItem(QUEUE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error updating retry count:', error);
    }
  },

  clearQueue: (): void => {
    try {
      localStorage.removeItem(QUEUE_KEY);
    } catch (error) {
      console.error('Error clearing offline queue:', error);
    }
  },

  getQueueSize: (): number => {
    return offlineQueue.getQueue().length;
  },
};

export const shouldQueueOffline = (isOffline: boolean): boolean => {
  return isOffline;
};

export const processQueue = async (
  executeMutation: (mutationKey: unknown[], variables: unknown) => Promise<void>
): Promise<void> => {
  const queue = offlineQueue.getQueue();
  
  for (const mutation of queue) {
    try {
      await executeMutation(mutation.mutationKey, mutation.variables);
      offlineQueue.removeFromQueue(mutation.id);
    } catch (error) {
      console.error('Error processing queued mutation:', error);
      
      if (mutation.retryCount >= MAX_RETRIES) {
        // Remove if max retries exceeded
        offlineQueue.removeFromQueue(mutation.id);
      } else {
        offlineQueue.updateRetryCount(mutation.id, mutation.retryCount + 1);
      }
    }
  }
};
