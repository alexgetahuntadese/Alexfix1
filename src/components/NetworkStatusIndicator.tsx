import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { Wifi, WifiOff, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

export const NetworkStatusIndicator = () => {
  const { isOnline, isOffline, effectiveType } = useNetworkStatus();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (isOffline) {
      setShowBanner(true);
    } else {
      // Hide banner after 3 seconds when coming back online
      const timer = setTimeout(() => setShowBanner(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOffline]);

  if (!showBanner) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 text-center font-medium transition-all ${
      isOffline 
        ? "bg-amber-500 text-white" 
        : "bg-green-500 text-white"
    }`}>
      <div className="flex items-center justify-center gap-2">
        {isOffline ? (
          <>
            <WifiOff className="h-4 w-4" />
            <span>You're offline. Some features may not be available.</span>
          </>
        ) : (
          <>
            <Wifi className="h-4 w-4" />
            <span>You're back online!</span>
          </>
        )}
      </div>
    </div>
  );
};

export const OfflineBadge = () => {
  const { isOffline, pendingMutations } = useNetworkStatus();

  if (!isOffline && pendingMutations === 0) return null;

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 text-amber-500 rounded-md text-xs font-medium">
      <WifiOff className="h-3 w-3" />
      <span>{isOffline ? 'Offline' : 'Syncing...'}</span>
      {pendingMutations > 0 && (
        <span className="ml-1 px-1.5 py-0.5 bg-amber-500 text-white rounded-full text-[10px]">
          {pendingMutations}
        </span>
      )}
    </div>
  );
};

export const SlowConnectionWarning = () => {
  const { effectiveType, isOnline } = useNetworkStatus();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (isOnline && (effectiveType === 'slow-2g' || effectiveType === '2g')) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [effectiveType, isOnline]);

  if (!showWarning) return null;

  return (
    <div className="flex items-center gap-1.5 px-3 py-2 bg-amber-500/10 text-amber-500 rounded-md text-sm">
      <AlertTriangle className="h-4 w-4" />
      <span>Slow connection detected. Some features may be slower.</span>
    </div>
  );
};
