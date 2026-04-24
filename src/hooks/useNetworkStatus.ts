import { useEffect, useState, useCallback } from 'react';
import { offlineQueue } from '@/lib/offlineQueue';
import { offlineStorage } from '@/lib/offlineStorage';

interface NetworkStatus {
  isOnline: boolean;
  isOffline: boolean;
  effectiveType: string | null;
  downlink: number | null;
  rtt: number | null;
  saveData: boolean;
  pendingMutations: number;
}

export const useNetworkStatus = (): NetworkStatus => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [effectiveType, setEffectiveType] = useState<string | null>(null);
  const [downlink, setDownlink] = useState<number | null>(null);
  const [rtt, setRtt] = useState<number | null>(null);
  const [saveData, setSaveData] = useState(false);
  const [pendingMutations, setPendingMutations] = useState(0);

  const updatePendingCount = useCallback(() => {
    setPendingMutations(offlineQueue.getQueueSize());
  }, []);

  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true);
      // Clear expired offline storage
      await offlineStorage.clearExpired();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check for Network Information API
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const updateConnectionInfo = () => {
        setEffectiveType(connection.effectiveType || null);
        setDownlink(connection.downlink || null);
        setRtt(connection.rtt || null);
        setSaveData(connection.saveData || false);
      };

      updateConnectionInfo();
      connection.addEventListener('change', updateConnectionInfo);
      
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        connection.removeEventListener('change', updateConnectionInfo);
      };
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Update pending mutations count periodically
  useEffect(() => {
    updatePendingCount();
    const interval = setInterval(updatePendingCount, 5000);
    return () => clearInterval(interval);
  }, [updatePendingCount]);

  return {
    isOnline,
    isOffline: !isOnline,
    effectiveType,
    downlink,
    rtt,
    saveData,
    pendingMutations,
  };
};
