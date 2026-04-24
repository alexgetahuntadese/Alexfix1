# Offline-First Architecture Guide

## Overview

This app has been enhanced to be fully offline-first, allowing users to access quizzes, notes, and other content without an internet connection. Changes are automatically synced when the device comes back online.

## Architecture Components

### 1. Service Worker (`public/sw.js`)

The service worker implements two caching strategies:

- **Network-First Strategy**: For API requests (Supabase, custom APIs)
  - Tries network first
  - Falls back to cache if offline
  - Updates cache on successful network requests

- **Stale-While-Revalidate Strategy**: For static assets
  - Serves from cache immediately
  - Updates cache in background
  - Ensures fast load times

### 2. Offline Storage (`src/lib/offlineStorage.ts`)

IndexedDB-based storage for offline data with:
- Time-to-live (TTL) support
- Automatic expiration of stale data
- Type-safe storage interface

### 3. Offline Queue (`src/lib/offlineQueue.ts`)

LocalStorage-based mutation queue for:
- Queuing mutations when offline
- Automatic retry with exponential backoff
- Maximum retry limit (3 attempts)

### 4. Offline Sync (`src/lib/offlineSync.ts`)

Conflict resolution strategies:
- `local-wins`: Local data takes precedence
- `remote-wins`: Remote data takes precedence
- `manual`: Requires user intervention
- `merge`: Simple merge strategy

### 5. React Hooks

#### `useOfflineStorage` Hook

Cache data offline with automatic expiration:

```typescript
import { useOfflineStorage } from '@/hooks/useOfflineStorage';

const { data, setData, isLoading, isCached, clearData } = useOfflineStorage({
  key: 'my-data',
  defaultValue: null,
  ttl: 24 * 60 * 60 * 1000 // 24 hours
});
```

#### `useOfflineMutation` Hook

Execute mutations that queue when offline:

```typescript
import { useOfflineMutation } from '@/hooks/useOfflineMutation';

const mutation = useOfflineMutation({
  mutationFn: async (variables) => {
    // Your API call
    return await api.saveData(variables);
  },
  mutationKey: ['saveData'],
  onSuccess: (data) => {
    console.log('Data saved:', data);
  }
});

mutation.mutate({ name: 'John' });
```

#### Specialized Hooks

- `useQuizCache(quizId)`: Cache quiz results for 24 hours
- `useUserCache(userId)`: Cache user data for 7 days
- `useContentCache(type, id)`: Cache content for 30 days

### 6. Network Status Hook (`src/hooks/useNetworkStatus.ts`)

Monitors network status and provides:
- `isOnline`: Current online status
- `isOffline`: Current offline status
- `effectiveType`: Network type (4g, 3g, 2g, slow-2g)
- `pendingMutations`: Number of queued mutations
- Automatic sync when coming back online

### 7. UI Components

#### NetworkStatusIndicator

Shows offline/online banner:
- Amber banner when offline
- Green banner when back online (auto-hides after 3 seconds)

#### OfflineBadge

Shows offline status with pending mutation count.

#### SlowConnectionWarning

Warns users on slow connections (2g, slow-2g).

## Usage Examples

### Caching Quiz Results

```typescript
import { useQuizCache } from '@/hooks/useOfflineStorage';

function QuizComponent({ quizId }) {
  const { data, setData } = useQuizCache(quizId);
  
  const handleComplete = async (results) => {
    // Save to offline storage
    await setData(results);
    
    // Also sync with server if online
    if (navigator.onLine) {
      await api.saveQuizResults(quizId, results);
    }
  };
  
  return <Quiz onComplete={handleComplete} />;
}
```

### Offline-Safe Mutation

```typescript
import { useOfflineMutation } from '@/hooks/useOfflineMutation';

function ProfileForm() {
  const mutation = useOfflineMutation({
    mutationFn: async (profile) => {
      return await supabase.from('profiles').upsert(profile);
    },
    mutationKey: ['updateProfile'],
    onSuccess: () => {
      toast.success('Profile saved');
    }
  });
  
  const handleSubmit = (data) => {
    mutation.mutate(data);
  };
  
  return <Form onSubmit={handleSubmit} />;
}
```

### Checking Network Status

```typescript
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

function MyComponent() {
  const { isOnline, pendingMutations } = useNetworkStatus();
  
  return (
    <div>
      {isOnline ? (
        <p>You're online</p>
      ) : (
        <p>You're offline. Changes will sync later.</p>
      )}
      {pendingMutations > 0 && (
        <p>{pendingMutations} changes pending sync</p>
      )}
    </div>
  );
}
```

## PWA Installation

The app can be installed as a PWA:

1. Open the app in a supported browser (Chrome, Edge, Safari)
2. Look for the install icon in the address bar
3. Click to install

### PWA Features

- **Offline Access**: Works without internet
- **App Shortcuts**: Quick access to Quiz and Notes
- **Standalone Display**: Full-screen app experience
- **Theme Colors**: Consistent branding

## Service Worker Updates

When updating the service worker:

1. Increment version numbers in `public/sw.js`:
   ```javascript
   const STATIC_CACHE = "simple-road-static-v7";
   const RUNTIME_CACHE = "simple-road-runtime-v7";
   ```

2. The old cache will be automatically cleared on activation.

## Testing Offline Functionality

### Manual Testing

1. Open Chrome DevTools
2. Go to Network tab
3. Select "Offline" from throttling dropdown
4. Refresh the page
5. Verify the app loads and functions
6. Make changes while offline
7. Go back online
8. Verify changes sync automatically

### Chrome DevTools

1. Open Application tab
2. Check Service Workers section
3. Check Cache Storage
4. Check IndexedDB

## Data Caching Strategy

### Static Data (Quiz Questions)

- Cached in service worker
- Available offline immediately
- Updated on app reload

### Dynamic Data (User Progress)

- Cached in IndexedDB with TTL
- Synced with server when online
- Conflict resolution on sync

### API Responses

- Network-first strategy
- Cache fallback when offline
- Automatic cache updates

## Performance Considerations

- Cache size is managed automatically
- Expired data is cleared on load
- IndexedDB has generous storage limits
- Service worker cache is limited by browser quota

## Troubleshooting

### Service Worker Not Registering

- Check browser console for errors
- Verify `sw.js` is in `public/` folder
- Check HTTPS requirement (required for service workers)

### Data Not Syncing

- Check network status
- Verify pending mutations count
- Check browser console for sync errors
- Clear cache if needed

### Cache Issues

- Clear browser cache
- Unregister service worker in DevTools
- Hard refresh the page

## Future Enhancements

- Background sync API support
- Push notifications for sync status
- Selective sync (user chooses what to sync)
- Data compression for offline storage
- Offline-first analytics
