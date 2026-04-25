import { useEffect, useState, useCallback } from "react";
import StarField from '@/components/StarField';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Copy, Play, Users, Video, VideoOff, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  getSession, 
  getSessionParticipants, 
  startSession, 
  endSession, 
  nextQuestion, 
  updateQuestionIndex,
  submitAnswer,
  type Session,
  type Question 
} from "@/lib/sessionUtils";
import { getMatricQuestions } from "@/lib/matricUtils";
import DailyVideoCall from "@/components/DailyVideoCall";
import { getDailyRoomUrl } from "@/lib/dailyUtils";

type SessionStatus = 'waiting' | 'in_progress' | 'completed';

interface Participant {
  id: string;
  session_id: string;
  player_name: string;
  score: number;
  is_host: boolean;
  joined_at: string;
}

const ExamTogetherSession = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const hostName = searchParams.get('hostName') || '';
  const year = searchParams.get('year') || '';
  const subject = searchParams.get('subject') || '';
  
  const [session, setSession] = useState<Session | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isHost, setIsHost] = useState(false);
  const [participantId, setParticipantId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [dailyRoomUrl, setDailyRoomUrl] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [localQuestionIndex, setLocalQuestionIndex] = useState(0);

  const refreshData = useCallback(() => {
    const sessionCode = searchParams.get('sessionCode');
    if (!sessionCode) return;
    
    const currentSession = getSession(sessionCode);
    if (currentSession) {
      setSession(currentSession);
      setParticipants(getSessionParticipants(currentSession.id));
    }
  }, [searchParams]);

  useEffect(() => {
    const sessionCode = searchParams.get('sessionCode');
    const playerName = searchParams.get('playerName');
    const storedParticipantId = sessionStorage.getItem('examTogetherParticipantId');
    const storedIsHost = sessionStorage.getItem('examTogetherIsHost') === 'true';
    
    if (sessionCode && playerName) {
      // Join existing session
      joinExistingSession(sessionCode, playerName);
    } else if (sessionCode) {
      // Already in session, load data
      setParticipantId(storedParticipantId);
      setIsHost(storedIsHost);
      
      const currentSession = getSession(sessionCode);
      if (currentSession) {
        setSession(currentSession);
        setParticipants(getSessionParticipants(currentSession.id));
      }
      
      const interval = setInterval(() => {
        const updatedSession = getSession(sessionCode);
        if (updatedSession) {
          setSession(updatedSession);
          setParticipants(getSessionParticipants(updatedSession.id));
        }
      }, 1000);
      
      // Store interval ID for cleanup
      (window as any).examTogetherInterval = interval;
      
      return () => {
        clearInterval(interval);
        delete (window as any).examTogetherInterval;
      };
    } else {
      // Create new session
      createNewSession();
    }
    
    // Cleanup on unmount
    return () => {
      if ((window as any).examTogetherInterval) {
        clearInterval((window as any).examTogetherInterval);
        delete (window as any).examTogetherInterval;
      }
    };
  }, [searchParams]);

  const createNewSession = async () => {
    const { createSession } = await import('@/lib/sessionUtils');
    const { session: newSession, participant } = await createSession(
      hostName,
      '12',
      subject,
      year,
      'medium',
      'exam_together',
      year
    );
    
    sessionStorage.setItem('examTogetherParticipantId', participant.id);
    sessionStorage.setItem('examTogetherIsHost', 'true');
    
    const url = new URL(window.location.href);
    url.searchParams.set('sessionCode', newSession.session_code);
    window.history.replaceState({}, '', url);
    
    setSession(newSession);
    setParticipants([participant]);
    setParticipantId(participant.id);
    setIsHost(true);
    
    // Start polling for session updates
    const interval = setInterval(() => {
      const updatedSession = getSession(newSession.session_code);
      if (updatedSession) {
        setSession(updatedSession);
        setParticipants(getSessionParticipants(updatedSession.id));
      }
    }, 1000);
    
    // Store interval ID for cleanup
    (window as any).examTogetherInterval = interval;
  };

  const joinExistingSession = async (sessionCode: string, playerName: string) => {
    const { joinSession } = await import('@/lib/sessionUtils');
    try {
      const { session: existingSession, participant } = await joinSession(sessionCode, playerName);
      
      sessionStorage.setItem('examTogetherParticipantId', participant.id);
      sessionStorage.setItem('examTogetherIsHost', 'false');
      
      setSession(existingSession);
      setParticipantId(participant.id);
      setIsHost(false);
      setParticipants(getSessionParticipants(existingSession.id));
      
      // Update URL to include session code
      const url = new URL(window.location.href);
      url.searchParams.set('sessionCode', sessionCode);
      url.searchParams.delete('playerName');
      window.history.replaceState({}, '', url);
      
      // Start polling for session updates
      const interval = setInterval(() => {
        const updatedSession = getSession(sessionCode);
        if (updatedSession) {
          setSession(updatedSession);
          setParticipants(getSessionParticipants(updatedSession.id));
        }
      }, 1000);
      
      // Store interval ID for cleanup
      (window as any).examTogetherInterval = interval;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join session",
        variant: "destructive"
      });
      navigate('/exam-together');
    }
  };

  useEffect(() => {
    if (session?.status === 'in_progress' && questions.length === 0) {
      loadQuestions();
    }
  }, [session?.status]);

  useEffect(() => {
    setHasAnswered(false);
  }, [session?.current_question_index, localQuestionIndex]);

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isTimerActive) {
      setIsTimerActive(false);
      // Auto-advance to next question if host
      if (isHost && session) {
        handleNextQuestion();
      }
    }
  }, [timeLeft, isTimerActive]);

  useEffect(() => {
    if (session?.status === 'in_progress' && questions.length > 0) {
      setTimeLeft(20);
      setIsTimerActive(true);
    }
  }, [session?.current_question_index]);

  const loadQuestions = () => {
    if (!session) return;
    // Use questions stored in session if available, otherwise generate them
    if (session.questions && session.questions.length > 0) {
      setQuestions(session.questions);
    } else {
      const matricQuestions = getMatricQuestions(parseInt(session.year), session.subject, session.session_code);
      setQuestions(matricQuestions.slice(0, 10));
    }
  };

  const handleStartSession = async () => {
    if (!session) return;
    // Generate questions with seeded random for consistency
    const matricQuestions = getMatricQuestions(parseInt(session.year), session.subject, session.session_code);
    const selectedQuestions = matricQuestions.slice(0, 10);
    await startSession(session.id, selectedQuestions);
    refreshData();
  };

  const handleNextQuestion = async () => {
    if (!session) return;
    if (isHost) {
      // Host updates the session's question index
      await nextQuestion(session.id, session.current_question_index);
      refreshData();
    } else {
      // Non-host only updates their local view
      if (localQuestionIndex < questions.length - 1) {
        setLocalQuestionIndex(localQuestionIndex + 1);
      }
    }
  };

  const handleEndSession = async () => {
    if (!session) return;
    await endSession(session.id);
    refreshData();
  };

  const handleAnswerSubmit = async (selectedAnswer: string, isCorrect: boolean) => {
    if (!session || !participantId || hasAnswered) return;
    setHasAnswered(true);
    await submitAnswer(session.id, participantId, session.current_question_index, selectedAnswer, isCorrect);
    refreshData();
  };

  const copyCode = () => {
    const sessionCode = searchParams.get('sessionCode');
    navigator.clipboard.writeText(sessionCode || '');
    toast({ title: 'Code copied!' });
  };

  const handleToggleVideoCall = async () => {
    const sessionCode = searchParams.get('sessionCode');
    if (!showVideoCall && !dailyRoomUrl && sessionCode) {
      try {
        const url = await getDailyRoomUrl(sessionCode);
        setDailyRoomUrl(url);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to create video room",
          variant: "destructive"
        });
        return;
      }
    }
    setShowVideoCall(!showVideoCall);
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 flex items-center justify-center overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (session.status === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white">Exam Complete!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {participants.map((p) => (
                  <div key={p.id} className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                    <span className="text-white">{p.player_name}</span>
                    <span className="text-amber-300 font-bold">{p.score} points</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => navigate('/')}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500"
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (session.status === 'in_progress' && questions.length > 0) {
    // Host uses session index, non-host uses local index
    const currentIndex = isHost ? session.current_question_index : localQuestionIndex;
    const currentQuestion = questions[currentIndex];
    const isLastQuestion = currentIndex >= questions.length - 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
        <StarField starCount={30} shootingCount={2} />
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white">
              Question {currentIndex + 1} / {questions.length}
            </div>
            <div className="text-white flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4" />
                <span className={timeLeft <= 5 ? "text-red-400 font-bold" : ""}>{timeLeft}s</span>
              </div>
              <Button
                onClick={handleToggleVideoCall}
                variant={showVideoCall ? "default" : "outline"}
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {showVideoCall ? <VideoOff className="h-4 w-4 mr-2" /> : <Video className="h-4 w-4 mr-2" />}
                {showVideoCall ? 'Hide Video' : 'Video Call'}
              </Button>
              <Users className="h-4 w-4" />
              {participants.length} players
            </div>
          </div>

          {showVideoCall && dailyRoomUrl && (
            <div className="mb-4">
              <DailyVideoCall
                roomUrl={dailyRoomUrl}
                onLeave={() => setShowVideoCall(false)}
              />
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl text-white mb-6">{currentQuestion.question}</h3>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSubmit(option, option === currentQuestion.correctAnswer)}
                        disabled={hasAnswered}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          hasAnswered
                            ? option === currentQuestion.correctAnswer
                              ? 'bg-green-500/30 border-green-500 text-white'
                              : 'bg-white/5 border-white/20 text-white/50'
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-4 flex gap-2">
                {currentIndex > 0 && (
                  <Button 
                    onClick={() => {
                      if (isHost && session) {
                        updateQuestionIndex(session.id, session.current_question_index - 1);
                        refreshData();
                      } else {
                        setLocalQuestionIndex(localQuestionIndex - 1);
                      }
                    }}
                    className="flex-1 bg-gray-500 hover:bg-gray-600"
                  >
                    Previous
                  </Button>
                )}
                {!isLastQuestion ? (
                  <Button onClick={handleNextQuestion} className="flex-1 bg-blue-500 hover:bg-blue-600">
                    Next Question
                  </Button>
                ) : (
                  isHost && (
                    <Button onClick={handleEndSession} className="flex-1 bg-green-500 hover:bg-green-600">
                      End Exam
                    </Button>
                  )
                )}
              </div>
            </div>

            <div>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Players ({participants.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {participants.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between bg-white/10 rounded-lg p-3"
                      >
                        <span className="text-white">{p.player_name}</span>
                        <span className="text-amber-300 font-bold">{p.score}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Waiting room
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
      <StarField starCount={30} shootingCount={2} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-white hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Leave Session
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-4">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-white">Session Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              onClick={copyCode}
              className="bg-white/20 rounded-lg p-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-white/30 transition-colors"
            >
              <span className="text-4xl font-mono font-bold text-white tracking-widest">
                {session.session_code}
              </span>
              <Copy className="h-5 w-5 text-white/70" />
            </div>
            <p className="text-center text-white/60 text-sm mt-2">Click to copy</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-4">
          <CardHeader>
            <CardTitle className="text-lg text-white flex items-center gap-2">
              <Users className="h-5 w-5" />
              Players ({participants.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {participants.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-white/10 rounded-lg p-3"
                >
                  <span className="text-white">{p.player_name}</span>
                  {p.is_host && (
                    <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Host</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-4">
          <CardContent className="pt-4">
            <div className="text-white/80 text-sm space-y-1">
              <p>Year: {session.year}</p>
              <p>Subject: {session.subject}</p>
            </div>
          </CardContent>
        </Card>

        {showVideoCall && dailyRoomUrl && (
          <div className="mb-4">
            <DailyVideoCall
              roomUrl={dailyRoomUrl}
              onLeave={() => setShowVideoCall(false)}
            />
          </div>
        )}

        <Button
          onClick={handleToggleVideoCall}
          variant={showVideoCall ? "default" : "outline"}
          className="w-full mb-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          {showVideoCall ? <VideoOff className="h-4 w-4 mr-2" /> : <Video className="h-4 w-4 mr-2" />}
          {showVideoCall ? 'Hide Video' : 'Start Video Call'}
        </Button>

        {isHost ? (
          <Button
            onClick={handleStartSession}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Exam
          </Button>
        ) : (
          <div className="text-center text-white/60">
            Waiting for host to start the exam...
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamTogetherSession;
