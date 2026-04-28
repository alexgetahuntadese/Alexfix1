import { useEffect, useState, useCallback } from "react";
import StarField from '@/components/StarField';
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Copy, Play, Users, Video, VideoOff, Trophy, Medal, Star, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  getSession, 
  getSessionParticipants, 
  startSession, 
  endSession, 
  nextQuestion, 
  submitAnswer,
  type Session,
  type Question 
} from "@/lib/sessionUtils";
import { getMatricQuestions } from "@/lib/matricUtils";
import { getQuestionsForQuiz } from "@/lib/quizUtils";
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
  const mode = searchParams.get('mode') || 'matric';
  const year = searchParams.get('year') || '';
  const grade = searchParams.get('grade') || '';
  const subject = searchParams.get('subject') || '';
  const questionCount = parseInt(searchParams.get('questionCount') || '10');
  
  const [session, setSession] = useState<Session | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isHost, setIsHost] = useState(false);
  const [participantId, setParticipantId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [dailyRoomUrl, setDailyRoomUrl] = useState<string | null>(null);
  const [localQuestionIndex, setLocalQuestionIndex] = useState(0);
  const [isCreating, setIsCreating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

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
    
    setIsInitialized(true);
    
    // Check if we have creation parameters (hostName, mode, etc.)
    const hasCreationParams = hostName && mode && (year || grade) && subject;
    
    if (sessionCode && playerName) {
      // Join existing session
      joinExistingSession(sessionCode, playerName);
    } else if (sessionCode && !hasCreationParams) {
      // Only sessionCode, no creation params - try to load existing session
      const currentSession = getSession(sessionCode);
      if (currentSession) {
        setParticipantId(storedParticipantId);
        setIsHost(storedIsHost);
        setSession(currentSession);
        setParticipants(getSessionParticipants(currentSession.id));
        
        const interval = setInterval(() => {
          const updatedSession = getSession(sessionCode);
          if (updatedSession) {
            setSession(updatedSession);
            setParticipants(getSessionParticipants(updatedSession.id));
          }
        }, 1000);
        
        (window as any).examTogetherInterval = interval;
        
        return () => {
          clearInterval(interval);
          delete (window as any).examTogetherInterval;
        };
      } else {
        // Session doesn't exist - redirect to join page with the code
        navigate(`/exam-together-join?sessionCode=${sessionCode}`);
      }
    } else {
      // Either no session code or has creation params - create new session
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
    try {
      setIsCreating(true);
      const { createSession } = await import('@/lib/sessionUtils');
      const { session: newSession, participant } = await createSession(
        hostName,
        mode === 'grade' ? grade : '12',
        subject,
        mode === 'grade' ? 'all' : year,
        'medium',
        'exam_together',
        mode === 'grade' ? undefined : year
      );
      
      sessionStorage.setItem('examTogetherParticipantId', participant.id);
      sessionStorage.setItem('examTogetherIsHost', 'true');
      
      // Update URL with the new session code (replaces any existing sessionCode)
      const url = new URL(window.location.href);
      url.searchParams.set('sessionCode', newSession.session_code);
      window.history.replaceState({}, '', url);
      
      setSession(newSession);
      setParticipants([participant]);
      setParticipantId(participant.id);
      setIsHost(true);
      setIsCreating(false);
      
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
    } catch (error) {
      console.error('Error creating session:', error);
      setIsCreating(false);
      toast({
        title: "Error",
        description: "Failed to create session. Please try again.",
        variant: "destructive"
      });
      navigate('/exam-together');
    }
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

  const loadQuestions = () => {
    if (!session) return;
    // Use questions stored in session if available, otherwise generate them
    if (session.questions && session.questions.length > 0) {
      setQuestions(session.questions);
    } else {
      let questionsList;
      if (session.year) {
        // Matric mode
        questionsList = getMatricQuestions(parseInt(session.year), session.subject, session.session_code);
      } else {
        // Grade mode
        questionsList = getQuestionsForQuiz(parseInt(session.grade), session.subject, 'all', 'medium', session.session_code);
      }
      setQuestions(questionsList.slice(0, questionCount));
    }
  };

  const handleStartSession = async () => {
    if (!session) return;
    try {
      // Generate questions with seeded random for consistency
      let questionsList;
      if (session.year) {
        // Matric mode
        questionsList = getMatricQuestions(parseInt(session.year), session.subject, session.session_code);
      } else {
        // Grade mode
        questionsList = getQuestionsForQuiz(parseInt(session.grade), session.subject, 'all', 'medium', session.session_code);
      }
      const selectedQuestions = questionsList.slice(0, questionCount);
      await startSession(session.id, selectedQuestions);
      refreshData();
    } catch (error) {
      console.error('Error starting session:', error);
      toast({
        title: "Error",
        description: "Failed to start exam. Please try again.",
        variant: "destructive"
      });
    }
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
    
    // Auto-advance to next question after showing feedback
    const currentIndex = isHost ? session.current_question_index : localQuestionIndex;
    const isLastQuestion = currentIndex >= questions.length - 1;
    
    if (!isLastQuestion) {
      setTimeout(() => {
        handleNextQuestion();
      }, 1500); // 1.5 second delay to show answer feedback
    }
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
        <div className="text-center">
          <div className="text-white text-xl">
            {isCreating ? 'Creating session...' : 'Loading...'}
          </div>
        </div>
      </div>
    );
  }

  if (session.status === 'completed') {
    const winner = participants.length > 0 ? participants[0] : null;
    const isWinner = winner && participantId === winner.id;
    const [showAnswers, setShowAnswers] = useState(false);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
        <StarField starCount={50} shootingCount={5} />
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
            <CardHeader className="text-center">
              {isWinner ? (
                <>
                  <div className="mx-auto mb-4 animate-bounce">
                    <Trophy className="h-24 w-24 text-yellow-400 mx-auto" />
                  </div>
                  <CardTitle className="text-4xl text-white mb-2">🎉 Congratulations! 🎉</CardTitle>
                  <p className="text-2xl text-yellow-300 font-bold">You are the Champion!</p>
                </>
              ) : (
                <>
                  <div className="mx-auto mb-4">
                    <Medal className="h-20 w-20 text-amber-400 mx-auto" />
                  </div>
                  <CardTitle className="text-3xl text-white mb-2">Exam Complete!</CardTitle>
                  <p className="text-xl text-white/80">
                    {winner ? `${winner.player_name} wins with ${winner.score} points!` : 'Great effort everyone!'}
                  </p>
                </>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                {participants.map((p, index) => (
                  <div 
                    key={p.id} 
                    className={`flex justify-between items-center rounded-lg p-4 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-yellow-500/30 to-amber-500/30 border-2 border-yellow-400' 
                        : index === 1 
                        ? 'bg-gradient-to-r from-gray-400/30 to-slate-400/30 border-2 border-gray-300'
                        : index === 2
                        ? 'bg-gradient-to-r from-orange-600/30 to-amber-700/30 border-2 border-orange-500'
                        : 'bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {index === 0 && <Trophy className="h-6 w-6 text-yellow-400" />}
                      {index === 1 && <Medal className="h-6 w-6 text-gray-300" />}
                      {index === 2 && <Star className="h-6 w-6 text-orange-400" />}
                      <span className={`text-white font-semibold ${index === 0 ? 'text-lg' : ''}`}>
                        {p.player_name}
                      </span>
                    </div>
                    <span className={`font-bold ${index === 0 ? 'text-yellow-300 text-xl' : 'text-amber-300'}`}>
                      {p.score} points
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mb-4">
                <Button
                  onClick={() => setShowAnswers(!showAnswers)}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3"
                >
                  {showAnswers ? 'Hide Answers' : 'Show Answers'}
                </Button>
                <Button
                  onClick={() => navigate('/')}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>

          {showAnswers && questions.length > 0 && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Exam Answers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {questions.map((question, qIndex) => (
                    <div key={qIndex} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-white font-semibold mb-3">
                        Question {qIndex + 1}: {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <div
                            key={oIndex}
                            className={`p-3 rounded-lg border ${
                              oIndex === question.correctAnswer
                                ? 'bg-green-500/30 border-green-500 text-white'
                                : 'bg-white/5 border-white/20 text-white/70'
                            }`}
                          >
                            <span className="font-bold mr-2">
                              {String.fromCharCode(65 + oIndex)}.
                            </span>
                            {option}
                            {oIndex === question.correctAnswer && (
                              <span className="ml-2 text-green-400 font-bold">✓ Correct</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
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
              <Button
                onClick={handleToggleVideoCall}
                variant={showVideoCall ? "default" : "outline"}
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold"
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
                        onClick={() => handleAnswerSubmit(option, index === currentQuestion.correctAnswer)}
                        disabled={hasAnswered}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          hasAnswered
                            ? index === currentQuestion.correctAnswer
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
                {isLastQuestion && isHost && (
                  <Button onClick={handleEndSession} className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold">
                    End Exam
                  </Button>
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
      <StarField starCount={50} shootingCount={3} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-white hover:bg-white/10 mb-6 transition-all hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Leave Session
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 animate-pulse">
              <Users className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-white font-bold mb-2">Waiting Room</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Share the code with friends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              onClick={copyCode}
              className="bg-white/20 rounded-2xl p-6 flex items-center justify-center gap-3 cursor-pointer hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/20 hover:border-purple-400"
            >
              <span className="text-5xl font-mono font-bold text-white tracking-widest">
                {session.session_code}
              </span>
              <Copy className="h-6 w-6 text-white/70" />
            </div>
            <p className="text-center text-white/60 text-sm mt-3 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4" />
              Click to copy code
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-400" />
              Players ({participants.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {participants.length === 0 ? (
                <div className="text-center py-8 text-white/60">
                  <Users className="h-12 w-12 mx-auto mb-2 opacity-30" />
                  <p>Waiting for players to join...</p>
                </div>
              ) : (
                participants.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between bg-white/10 rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{p.player_name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-white font-medium">{p.player_name}</span>
                        {p.is_host && (
                          <span className="ml-2 text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded-full">Host</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/60 text-sm">Ready</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {isHost && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mt-6">
            <CardContent className="pt-6">
              <Button
                onClick={handleStartSession}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={participants.length < 1}
              >
                <Play className="mr-2 h-5 w-5" />
                Start Exam
              </Button>
              {participants.length < 1 && (
                <p className="text-center text-white/60 text-sm mt-2">
                  Wait for at least 1 player to join
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ExamTogetherSession;
