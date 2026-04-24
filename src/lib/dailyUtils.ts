// Daily.co room management utilities
// For production, room creation should be done server-side with proper authentication

const DAILY_API_KEY = import.meta.env.VITE_DAILY_API_KEY;

export const createDailyRoom = async (roomName: string): Promise<string> => {
  if (!DAILY_API_KEY || DAILY_API_KEY === 'your-daily-co-api-key') {
    // For demo purposes without API key, return a mock room URL
    // In production, you must use the Daily API to create rooms
    console.warn('Daily.co API key not configured. Using demo mode.');
    return `https://your-domain.daily.co/${roomName}`;
  }

  try {
    const response = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DAILY_API_KEY}`,
      },
      body: JSON.stringify({
        name: roomName,
        properties: {
          enable_chat: true,
          enable_screen_sharing: true,
          enable_recording: false,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create Daily room');
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error creating Daily room:', error);
    throw error;
  }
};

export const getDailyRoomUrl = async (sessionCode: string): Promise<string> => {
  const DAILY_API_KEY = import.meta.env.VITE_DAILY_API_KEY;
  
  if (!DAILY_API_KEY || DAILY_API_KEY === 'your-daily-co-api-key') {
    console.warn('Daily.co API key not configured. Using demo mode.');
    return `https://your-domain.daily.co/${sessionCode}`;
  }

  try {
    // Try to create or get the room
    const response = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DAILY_API_KEY}`,
      },
      body: JSON.stringify({
        name: sessionCode,
        properties: {
          enable_chat: true,
          enable_screen_sharing: true,
          enable_recording: false,
        },
      }),
    });

    if (!response.ok) {
      // If room already exists, try to get it
      const getResponse = await fetch(`https://api.daily.co/v1/rooms/${sessionCode}`, {
        headers: {
          'Authorization': `Bearer ${DAILY_API_KEY}`,
        },
      });
      
      if (getResponse.ok) {
        const data = await getResponse.json();
        return data.url;
      }
      
      throw new Error('Failed to get or create Daily room');
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error getting Daily room:', error);
    // Fallback to constructed URL
    return `https://your-domain.daily.co/${sessionCode}`;
  }
};
