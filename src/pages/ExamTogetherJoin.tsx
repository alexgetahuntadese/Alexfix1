import { useState } from "react";
import StarField from '@/components/StarField';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, LogIn } from "lucide-react";
import { joinSession } from "@/lib/sessionUtils";
import { useToast } from "@/hooks/use-toast";

const ExamTogetherJoin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [sessionCode, setSessionCode] = useState(searchParams.get('code') || "");
  const [playerName, setPlayerName] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinSession = async () => {
    if (!sessionCode.trim() || !playerName.trim()) {
      toast({
        title: "Missing fields",
        description: "Please enter both session code and your name",
        variant: "destructive"
      });
      return;
    }

    setIsJoining(true);
    try {
      const { session, participant } = await joinSession(
        sessionCode.trim(),
        playerName.trim()
      );
      
      // Check if it's an exam together session
      if (session.session_type !== 'exam_together') {
        toast({
          title: "Invalid Session",
          description: "This is not an Exam Together session",
          variant: "destructive"
        });
        setIsJoining(false);
        return;
      }
      
      sessionStorage.setItem('examTogetherParticipantId', participant.id);
      sessionStorage.setItem('examTogetherIsHost', 'false');
      
      navigate(`/exam-together-session?sessionCode=${session.session_code}`);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to join session. Please check the code and try again.",
        variant: "destructive"
      });
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
      <StarField starCount={30} shootingCount={2} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/exam-together")}
          className="text-white hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Join Exam Session</CardTitle>
            <CardDescription className="text-blue-100">
              Enter the session code to join an exam
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-white/80 mb-2 block">Session Code</label>
              <input
                placeholder="Enter 6-character code"
                value={sessionCode}
                onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                maxLength={6}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-center text-2xl tracking-widest font-mono rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm text-white/80 mb-2 block">Your Name</label>
              <input
                placeholder="Enter your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md px-3 py-2"
              />
            </div>

            <Button
              onClick={handleJoinSession}
              disabled={isJoining}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3"
            >
              {isJoining ? 'Joining...' : 'Join Session'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamTogetherJoin;
