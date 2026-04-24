import { useState, useEffect, useCallback } from 'react';
import { offlineStorage } from '@/lib/offlineStorage';

interface UseOfflineStorageOptions<T> {
  key: string;
  defaultValue: T;
  ttl?: number; // Time to live in milliseconds
}

export const useOfflineStorage = <T>({
  key,
  defaultValue,
  ttl
}: UseOfflineStorageOptions<T>) => {
  const [data, setData] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);

  // Load data from offline storage on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const cached = await offlineStorage.get(key);
        if (cached !== null) {
          setData(cached as T);
          setIsCached(true);
        }
      } catch (error) {
        console.error('Error loading from offline storage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [key]);

  // Save data to offline storage
  const saveData = useCallback(async (value: T) => {
    try {
      await offlineStorage.set(key, value, ttl);
      setData(value);
      setIsCached(true);
    } catch (error) {
      console.error('Error saving to offline storage:', error);
    }
  }, [key, ttl]);

  // Clear data from offline storage
  const clearData = useCallback(async () => {
    try {
      await offlineStorage.remove(key);
      setData(defaultValue);
      setIsCached(false);
    } catch (error) {
      console.error('Error clearing from offline storage:', error);
    }
  }, [key, defaultValue]);

  return {
    data,
    setData: saveData,
    isLoading,
    isCached,
    clearData
  };
};

// Hook for caching quiz data
export const useQuizCache = (quizId: string) => {
  return useOfflineStorage({
    key: `quiz-${quizId}`,
    defaultValue: null,
    ttl: 24 * 60 * 60 * 1000 // 24 hours
  });
};

// Hook for caching user data
export const useUserCache = (userId: string) => {
  return useOfflineStorage({
    key: `user-${userId}`,
    defaultValue: null,
    ttl: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};

// Hook for caching content
export const useContentCache = (contentType: string, contentId: string) => {
  return useOfflineStorage({
    key: `${contentType}-${contentId}`,
    defaultValue: null,
    ttl: 30 * 24 * 60 * 60 * 1000 // 30 days
  });
};
