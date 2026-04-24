import { useEffect, useRef, useState } from 'react';
import Daily from '@daily-co/daily-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Video, VideoOff, Mic, MicOff, PhoneOff, Maximize2, Minimize2 } from 'lucide-react';

// @ts-ignore - Daily.js types may not be fully available
const DailyJS: any = Daily;

interface DailyVideoCallProps {
  roomUrl: string;
  token?: string;
  onLeave?: () => void;
}

const DailyVideoCall = ({ roomUrl, token, onLeave }: DailyVideoCallProps) => {
  const callFrameRef = useRef<HTMLDivElement>(null);
  const dailyRef = useRef<any>(null);
  
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [callState, setCallState] = useState<'joining' | 'joined' | 'left' | 'error'>('joining');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let callObject: any = null;

    const initializeCall = async () => {
      try {
        callObject = DailyJS.createCallObject({
          videoSource: true,
          audioSource: true,
        });

        dailyRef.current = callObject;

        callObject.on('joined-meeting', () => {
          setCallState('joined');
        });

        callObject.on('left-meeting', () => {
          setCallState('left');
        });

        callObject.on('error', (e) => {
          console.error('Daily error:', e);
          setError(e?.error?.message || 'An error occurred');
          setCallState('error');
        });

        const joinOptions: any = { url: roomUrl };
        if (token && typeof token === 'string') {
          joinOptions.token = token;
        }
        
        await callObject.join(joinOptions);

        if (callFrameRef.current) {
          callFrameRef.current.appendChild(callObject.iframe());
        }
      } catch (err) {
        console.error('Error initializing Daily call:', err);
        setError('Failed to join call');
        setCallState('error');
      }
    };

    initializeCall();

    return () => {
      if (callObject) {
        callObject.destroy();
      }
    };
  }, [roomUrl, token]);

  const toggleVideo = async () => {
    const call = dailyRef.current;
    if (!call) return;

    if (isVideoEnabled) {
      await call.updateParticipants({
        local: {
          video: false,
        },
      });
    } else {
      await call.updateParticipants({
        local: {
          video: true,
        },
      });
    }
    setIsVideoEnabled(!isVideoEnabled);
  };

  const toggleAudio = async () => {
    const call = dailyRef.current;
    if (!call) return;

    if (isAudioEnabled) {
      await call.updateParticipants({
        local: {
          audio: false,
        },
      });
    } else {
      await call.updateParticipants({
        local: {
          audio: true,
        },
      });
    }
    setIsAudioEnabled(!isAudioEnabled);
  };

  const leaveCall = async () => {
    const call = dailyRef.current;
    if (call) {
      await call.leave();
    }
    onLeave?.();
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (callFrameRef.current?.requestFullscreen) {
        callFrameRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  if (callState === 'error') {
    return (
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6 text-center">
          <p className="text-white mb-4">{error || 'Failed to join call'}</p>
          <Button onClick={leaveCall} className="bg-red-500 hover:bg-red-600">
            Close
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (callState === 'left') {
    return (
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6 text-center">
          <p className="text-white mb-4">Call ended</p>
          <Button onClick={leaveCall} className="bg-red-500 hover:bg-red-600">
            Close
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-white/10 backdrop-blur-md border-white/20 ${isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : ''}`}>
      <CardContent className="p-4">
        <div 
          ref={callFrameRef} 
          className="aspect-video bg-black rounded-lg overflow-hidden mb-4"
          style={{ minHeight: '400px' }}
        />

        <div className="flex justify-center gap-2">
          <Button
            onClick={toggleVideo}
            variant={isVideoEnabled ? 'default' : 'destructive'}
            size="icon"
            className="rounded-full"
          >
            {isVideoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
          </Button>
          <Button
            onClick={toggleAudio}
            variant={isAudioEnabled ? 'default' : 'destructive'}
            size="icon"
            className="rounded-full"
          >
            {isAudioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>
          <Button
            onClick={toggleFullscreen}
            variant="secondary"
            size="icon"
            className="rounded-full"
          >
            {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          </Button>
          <Button
            onClick={leaveCall}
            variant="destructive"
            size="icon"
            className="rounded-full"
          >
            <PhoneOff className="h-5 w-5" />
          </Button>
        </div>

        {callState === 'joining' && (
          <p className="text-center text-white/60 text-sm mt-2">Joining call...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyVideoCall;
