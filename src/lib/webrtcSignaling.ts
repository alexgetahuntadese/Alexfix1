// WebRTC signaling using localStorage events for peer-to-peer communication
// This allows signaling between tabs/windows on the same browser

interface SignalingMessage {
  type: 'offer' | 'answer' | 'ice-candidate' | 'join' | 'leave';
  sessionId: string;
  senderId: string;
  data?: RTCSessionDescriptionInit | RTCIceCandidate;
  timestamp: number;
}

const SIGNALING_KEY = 'webrtc_signaling';

export const sendSignalingMessage = (message: SignalingMessage) => {
  const messages = getSignalingMessages();
  messages.push(message);
  // Keep only last 100 messages to prevent localStorage bloat
  if (messages.length > 100) {
    messages.shift();
  }
  localStorage.setItem(SIGNALING_KEY, JSON.stringify(messages));
  // Trigger storage event for other tabs
  window.dispatchEvent(new StorageEvent('storage', {
    key: SIGNALING_KEY,
    newValue: JSON.stringify(messages),
  }));
};

const getSignalingMessages = (): SignalingMessage[] => {
  const data = localStorage.getItem(SIGNALING_KEY);
  return data ? JSON.parse(data) : [];
};

export const getSessionMessages = (sessionId: string, excludeSenderId: string): SignalingMessage[] => {
  const messages = getSignalingMessages();
  return messages.filter(
    m => m.sessionId === sessionId && m.senderId !== excludeSenderId
  );
};

export const clearSessionMessages = (sessionId: string) => {
  const messages = getSignalingMessages();
  const filtered = messages.filter(m => m.sessionId !== sessionId);
  localStorage.setItem(SIGNALING_KEY, JSON.stringify(filtered));
};

export const onSignalingMessage = (
  sessionId: string,
  mySenderId: string,
  callback: (message: SignalingMessage) => void
) => {
  const handler = (e: StorageEvent) => {
    if (e.key === SIGNALING_KEY && e.newValue) {
      const messages = JSON.parse(e.newValue) as SignalingMessage[];
      const newMessages = messages.filter(
        m => m.sessionId === sessionId && m.senderId !== mySenderId
      );
      newMessages.forEach(callback);
    }
  };
  
  window.addEventListener('storage', handler);
  return () => window.removeEventListener('storage', handler);
};
