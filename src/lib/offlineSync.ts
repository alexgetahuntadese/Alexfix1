interface SyncConflict {
  localData: unknown;
  remoteData: unknown;
  timestamp: number;
  resolved: boolean;
}

export type ConflictResolutionStrategy = 'local-wins' | 'remote-wins' | 'manual' | 'merge';

export const resolveConflict = (
  localData: unknown,
  remoteData: unknown,
  strategy: ConflictResolutionStrategy
): unknown => {
  switch (strategy) {
    case 'local-wins':
      return localData;
    case 'remote-wins':
      return remoteData;
    case 'manual':
      // Return both for manual resolution
      return { local: localData, remote: remoteData, needsResolution: true };
    case 'merge':
      // Simple merge strategy - can be enhanced based on data structure
      if (typeof localData === 'object' && typeof remoteData === 'object' && localData && remoteData) {
        return { ...remoteData as object, ...localData as object };
      }
      return remoteData; // Default to remote if can't merge
    default:
      return remoteData;
  }
};

export const detectConflict = (
  localData: { timestamp?: number } | null,
  remoteData: { timestamp?: number } | null
): boolean => {
  if (!localData || !remoteData) return false;
  
  const localTimestamp = localData.timestamp || 0;
  const remoteTimestamp = remoteData.timestamp || 0;
  
  // If timestamps differ significantly, there might be a conflict
  return Math.abs(localTimestamp - remoteTimestamp) > 1000; // 1 second threshold
};

export const syncWithConflictResolution = async <T>(
  localData: T | null,
  remoteData: T | null,
  strategy: ConflictResolutionStrategy = 'remote-wins',
  onUpdate?: (resolvedData: T) => Promise<void>
): Promise<T | null> => {
  if (!remoteData) return localData;
  if (!localData) return remoteData;

  const hasConflict = detectConflict(
    localData as { timestamp?: number },
    remoteData as { timestamp?: number }
  );

  if (!hasConflict) {
    // No conflict, use remote data (more recent)
    return remoteData;
  }

  const resolved = resolveConflict(localData, remoteData, strategy);

  if (onUpdate && typeof resolved === 'object' && resolved !== null && !('needsResolution' in resolved)) {
    await onUpdate(resolved as T);
  }

  return resolved as T;
};

// For quiz results specifically
export const syncQuizResults = async (
  quizId: string,
  localResults: unknown,
  remoteResults: unknown
): Promise<unknown> => {
  // For quiz results, we typically want to merge or prefer remote
  // This can be customized based on business logic
  return syncWithConflictResolution(
    localResults,
    remoteResults,
    'merge'
  );
};

// For user profile data
export const syncUserProfile = async (
  localProfile: unknown,
  remoteProfile: unknown
): Promise<unknown> => {
  // For user profiles, remote usually wins (server is source of truth)
  return syncWithConflictResolution(
    localProfile,
    remoteProfile,
    'remote-wins'
  );
};
