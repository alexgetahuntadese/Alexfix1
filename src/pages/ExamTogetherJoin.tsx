import { useState, useEffect } from "react";
import StarField from '@/components/StarField';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, LogIn, Users, Sparkles, CheckCircle2, XCircle, Copy } from "lucide-react";
import { joinSession, getSession } from "@/lib/sessionUtils";
import { useToast } from "@/hooks/use-toast";

const ExamTogetherJoin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const initialSessionCode = searchParams.get('code') || searchParams.get('sessionCode') || "";
  const [sessionCode, setSessionCode] = useState(initialSessionCode);
  const [playerName, setPlayerName] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [sessionInfo, setSessionInfo] = useState<any>(null);

  const validateSession = async (code: string) => {
    if (code.length !== 6) {
      setSessionInfo(null);
      return;
    }
    setIsValidating(true);
    const session = getSession(code.toUpperCase());
    setSessionInfo(session);
    setIsValidating(false);
  };

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

  const copyCode = () => {
    navigator.clipboard.writeText(sessionCode);
    toast({ title: 'Code copied!' });
  };

  useEffect(() => {
    const code = searchParams.get('code') || searchParams.get('sessionCode');
    if (code) {
      setSessionCode(code);
      validateSession(code);
    }
  }, [searchParams]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setSessionCode(value);
    validateSession(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
      <StarField starCount={50} shootingCount={3} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/exam-together")}
          className="text-white hover:bg-white/10 mb-6 transition-all hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-green-500"></div>
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 animate-pulse">
              <LogIn className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-white font-bold mb-2">Join Exam Session</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Enter the session code to join
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Session Code
              </label>
              <div className="relative">
                <input
                  placeholder="Enter 6-character code"
                  value={sessionCode}
                  onChange={handleCodeChange}
                  maxLength={6}
                  className="w-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 text-center text-2xl tracking-widest font-mono rounded-xl px-3 py-3 focus:border-green-400 focus:outline-none transition-all"
                />
                {sessionCode && (
                  <button
                    onClick={copyCode}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                )}
              </div>
              {sessionCode.length === 6 && (
                <div className="mt-2 flex items-center gap-2">
                  {sessionInfo ? (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Session found</span>
                    </div>
                  ) : !isValidating && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <XCircle className="h-4 w-4" />
                      <span>Session not found</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {sessionInfo && (
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                  <Users className="h-4 w-4" />
                  <span>Session Details</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white">
                    <span className="text-white/60">Subject:</span>
                    <span className="font-medium">{sessionInfo.subject}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/60">Host:</span>
                    <span className="font-medium">{sessionInfo.host_name}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="text-white/60">Status:</span>
                    <span className={`font-medium ${
                      sessionInfo.status === 'waiting' ? 'text-green-400' :
                      sessionInfo.status === 'in_progress' ? 'text-yellow-400' :
                      'text-gray-400'
                    }`}>
                      {sessionInfo.status === 'waiting' ? 'Waiting' :
                       sessionInfo.status === 'in_progress' ? 'In Progress' :
                       'Completed'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="text-sm text-white/80 mb-2 block">Your Name</label>
              <input
                placeholder="Enter your name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 focus:border-green-400 focus:outline-none transition-all"
              />
            </div>

            <Button
              onClick={handleJoinSession}
              disabled={isJoining || !sessionInfo || sessionInfo.status === 'completed'}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
