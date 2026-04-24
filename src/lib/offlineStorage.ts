const DB_NAME = 'simple-road-offline-db';
const DB_VERSION = 1;
const STORE_NAME = 'offline-data';

interface OfflineData {
  key: string;
  value: unknown;
  timestamp: number;
  ttl?: number; // Time to live in milliseconds
}

class OfflineStorage {
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'key' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  }

  async set(key: string, value: unknown, ttl?: number): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const data: OfflineData = {
        key,
        value,
        timestamp: Date.now(),
        ttl,
      };

      const request = store.put(data);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async get(key: string): Promise<unknown | null> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result;
        
        if (!result) {
          resolve(null);
          return;
        }

        // Check if data has expired
        if (result.ttl && Date.now() - result.timestamp > result.ttl) {
          this.remove(key).catch(console.error);
          resolve(null);
          return;
        }

        resolve(result.value);
      };
    });
  }

  async remove(key: string): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async clear(): Promise<void> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getAllKeys(): Promise<string[]> {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAllKeys();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        resolve(request.result as string[]);
      };
    });
  }

  async clearExpired(): Promise<void> {
    const keys = await this.getAllKeys();
    const now = Date.now();

    for (const key of keys) {
      const data = await this.get(key) as OfflineData | null;
      if (data?.ttl && now - data.timestamp > data.ttl) {
        await this.remove(key);
      }
    }
  }
}

export const offlineStorage = new OfflineStorage();

// Helper functions for common use cases
export const cacheQuizResults = async (quizId: string, results: unknown): Promise<void> => {
  await offlineStorage.set(`quiz-${quizId}`, results, 24 * 60 * 60 * 1000); // 24 hours TTL
};

export const getCachedQuizResults = async (quizId: string): Promise<unknown | null> => {
  return offlineStorage.get(`quiz-${quizId}`);
};

export const cacheUserData = async (userId: string, data: unknown): Promise<void> => {
  await offlineStorage.set(`user-${userId}`, data, 7 * 24 * 60 * 60 * 1000); // 7 days TTL
};

export const getCachedUserData = async (userId: string): Promise<unknown | null> => {
  return offlineStorage.get(`user-${userId}`);
};

export const cacheContent = async (contentType: string, contentId: string, data: unknown): Promise<void> => {
  await offlineStorage.set(`${contentType}-${contentId}`, data, 30 * 24 * 60 * 60 * 1000); // 30 days TTL
};

export const getCachedContent = async (contentType: string, contentId: string): Promise<unknown | null> => {
  return offlineStorage.get(`${contentType}-${contentId}`);
};
