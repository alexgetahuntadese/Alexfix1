import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Video, VideoOff, Mic, MicOff, Phone, PhoneOff, Maximize2, Minimize2 } from 'lucide-react';
import {
  sendSignalingMessage,
  onSignalingMessage,
  clearSessionMessages,
  type SignalingMessage
} from '@/lib/webrtcSignaling';

interface VideoCallProps {
  sessionId: string;
  mySenderId: string;
  isHost: boolean;
  onEndCall?: () => void;
}

const VideoCall = ({ sessionId, mySenderId, isHost, onEndCall }: VideoCallProps) => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');

  const servers = {
    iceServers: [
      { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] }
    ]
  };

  useEffect(() => {
    if (callStatus === 'idle') {
      initializeCall();
    }
    return () => cleanup();
  }, []);

  const initializeCall = async () => {
    setCallStatus('connecting');
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      localStreamRef.current = stream;
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const pc = new RTCPeerConnection(servers);
      peerConnectionRef.current = pc;

      stream.getTracks().forEach(track => {
        pc.addTrack(track, stream);
      });

      pc.ontrack = (event) => {
        if (remoteVideoRef.current && event.streams[0]) {
          remoteVideoRef.current.srcObject = event.streams[0];
          setIsConnected(true);
          setCallStatus('connected');
        }
      };

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          sendSignalingMessage({
            type: 'ice-candidate',
            sessionId,
            senderId: mySenderId,
            data: event.candidate,
            timestamp: Date.now()
          });
        }
      };

      pc.onconnectionstatechange = () => {
        if (pc.connectionState === 'disconnected' || pc.connectionState === 'failed') {
          setIsConnected(false);
          setCallStatus('ended');
        }
      };

      // Start signaling
      if (isHost) {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        
        sendSignalingMessage({
          type: 'offer',
          sessionId,
          senderId: mySenderId,
          data: offer,
          timestamp: Date.now()
        });
      }

      // Listen for signaling messages
      const unsubscribe = onSignalingMessage(sessionId, mySenderId, handleSignalingMessage);
      
      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error('Error initializing call:', error);
      setCallStatus('ended');
    }
  };

  const handleSignalingMessage = async (message: SignalingMessage) => {
    const pc = peerConnectionRef.current;
    if (!pc) return;

    switch (message.type) {
      case 'offer':
        if (!isHost) {
          await pc.setRemoteDescription(new RTCSessionDescription(message.data as RTCSessionDescriptionInit));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          
          sendSignalingMessage({
            type: 'answer',
            sessionId,
            senderId: mySenderId,
            data: answer,
            timestamp: Date.now()
          });
        }
        break;

      case 'answer':
        if (isHost) {
          await pc.setRemoteDescription(new RTCSessionDescription(message.data as RTCSessionDescriptionInit));
        }
        break;

      case 'ice-candidate':
        await pc.addIceCandidate(new RTCIceCandidate(message.data as RTCIceCandidate));
        break;

      case 'leave':
        setIsConnected(false);
        setCallStatus('ended');
        break;
    }
  };

  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoEnabled(videoTrack.enabled);
      }
    }
  };

  const toggleAudio = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioEnabled(audioTrack.enabled);
      }
    }
  };

  const endCall = () => {
    sendSignalingMessage({
      type: 'leave',
      sessionId,
      senderId: mySenderId,
      timestamp: Date.now()
    });
    cleanup();
    onEndCall?.();
  };

  const cleanup = () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
    }
    clearSessionMessages(sessionId);
    setCallStatus('ended');
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (remoteVideoRef.current?.requestFullscreen) {
        remoteVideoRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  if (callStatus === 'ended') {
    return (
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardContent className="p-6 text-center">
          <p className="text-white mb-4">Call ended</p>
          <Button onClick={initializeCall} className="bg-green-500 hover:bg-green-600">
            Rejoin Call
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-white/10 backdrop-blur-md border-white/20 ${isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : ''}`}>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-white text-xs">
              You
            </div>
          </div>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-white text-xs">
              {isConnected ? 'Connected' : 'Waiting...'}
            </div>
          </div>
        </div>

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
            onClick={endCall}
            variant="destructive"
            size="icon"
            className="rounded-full"
          >
            <PhoneOff className="h-5 w-5" />
          </Button>
        </div>

        {callStatus === 'connecting' && (
          <p className="text-center text-white/60 text-sm mt-2">Connecting...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoCall;
