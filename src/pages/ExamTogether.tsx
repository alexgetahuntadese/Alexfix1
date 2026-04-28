import { useState, useEffect } from "react";
import StarField from '@/components/StarField';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Users, Calendar, Plus, RefreshCw, GraduationCap, BookOpen, Sparkles, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getExamTogetherSessions, getSessionParticipants, clearOldSessions } from "@/lib/sessionUtils";

const ExamTogether = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [view, setView] = useState<'list' | 'create'>('list');
  const [hostName, setHostName] = useState("");
  const [mode, setMode] = useState<'grade' | 'matric'>('matric');
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [questionCount, setQuestionCount] = useState("10");
  const [step, setStep] = useState<'name' | 'mode' | 'year' | 'grade' | 'subject' | 'questions' | 'summary'>('name');
  const [isCreating, setIsCreating] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
  const grades = ["10", "11", "12"];
  
  // Subjects available for each grade (from quizUtils.ts)
  const gradeSubjects: Record<string, string[]> = {
    "10": ["Mathematics", "Physics", "Chemistry", "English", "Civic Education", "Geography", "History"],
    "11": ["Agriculture", "Biology", "Chemistry", "Physics", "English", "Geography", "History", "Amharic", "Civics"],
    "12": ["Agriculture", "Biology", "Chemistry", "Civics", "English", "Geography", "History", "IT", "Mathematics", "Physics"],
  };
  
  // Subjects available for Matric (from matricUtils.ts - Grade 12)
  const matricSubjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography", "Civics", "IT"];
  
  // Get available subjects based on current mode and grade
  const getAvailableSubjects = () => {
    if (mode === 'matric') {
      return matricSubjects;
    }
    return gradeSubjects[grade] || [];
  };

  const loadRooms = () => {
    setIsLoading(true);
    const rooms = getExamTogetherSessions();
    const roomsWithParticipants = rooms.map(room => ({
      ...room,
      participantCount: getSessionParticipants(room.id).length
    }));
    setAvailableRooms(roomsWithParticipants);
    setIsLoading(false);
  };

  useEffect(() => {
    // Clear old completed sessions on page load
    clearOldSessions();
    loadRooms();
    const interval = setInterval(loadRooms, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNameSubmit = () => {
    if (!hostName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }
    setStep('mode');
  };

  const handleModeSubmit = () => {
    if (!mode) {
      toast({
        title: "Error",
        description: "Please select a mode",
        variant: "destructive"
      });
      return;
    }
    if (mode === 'matric') {
      setStep('year');
    } else {
      setStep('grade');
    }
  };

  const handleYearSubmit = () => {
    if (!year) {
      toast({
        title: "Error",
        description: "Please select a year",
        variant: "destructive"
      });
      return;
    }
    setStep('subject');
  };

  const handleGradeSubmit = () => {
    if (!grade) {
      toast({
        title: "Error",
        description: "Please select a grade",
        variant: "destructive"
      });
      return;
    }
    setStep('subject');
  };

  const handleSubjectSubmit = () => {
    if (!subject) {
      toast({
        title: "Error",
        description: "Please select a subject",
        variant: "destructive"
      });
      return;
    }
    setStep('questions');
  };

  const handleQuestionsSubmit = () => {
    if (!questionCount) {
      toast({
        title: "Error",
        description: "Please select number of questions",
        variant: "destructive"
      });
      return;
    }
    setStep('summary');
  };

  const handleCreateRoom = async () => {
    setIsCreating(true);
    try {
      // Navigate to session creation with mode-specific data
      if (mode === 'matric') {
        navigate(`/exam-together-session?hostName=${encodeURIComponent(hostName)}&mode=matric&year=${year}&subject=${subject}&questionCount=${questionCount}`);
      } else {
        navigate(`/exam-together-session?hostName=${encodeURIComponent(hostName)}&mode=grade&grade=${grade}&subject=${subject}&questionCount=${questionCount}`);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create room. Please try again.",
        variant: "destructive"
      });
      setIsCreating(false);
    }
  };

  const handleJoinRoom = (sessionCode: string) => {
    if (!hostName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name first",
        variant: "destructive"
      });
      return;
    }
    navigate(`/exam-together-session?sessionCode=${sessionCode}&playerName=${encodeURIComponent(hostName)}`);
  };

  if (view === 'list') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
        <StarField starCount={50} shootingCount={3} />
        <div className="max-w-5xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10 mb-6 transition-all hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 animate-pulse">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-white font-bold mb-2">Exam Together</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Take exams together with friends in real-time
              </CardDescription>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  <span>Synchronized Questions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Zap className="h-4 w-4 text-orange-400" />
                  <span>Live Competition</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <input
                    placeholder="Enter your name to join"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    className="w-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all"
                  />
                  <Users className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                </div>
                <Button
                  onClick={() => setView('create')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Create Room
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={loadRooms}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-purple-400 transition-all"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button
                  onClick={() => navigate('/exam-together-join')}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-purple-400 transition-all"
                >
                  Join with Code
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-400" />
              Active Rooms
            </h2>
            <span className="text-white/60 text-sm">{availableRooms.length} room{availableRooms.length !== 1 ? 's' : ''} available</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {availableRooms.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <div className="mx-auto w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-white/30" />
                </div>
                <p className="text-white/60 text-lg mb-2">No active rooms</p>
                <p className="text-white/40">Create a room to get started!</p>
              </div>
            ) : (
              availableRooms.map((room) => (
                <Card key={room.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white font-bold mb-1">{room.subject}</CardTitle>
                        <CardDescription className="text-blue-100 flex items-center gap-2">
                          {room.year ? (
                            <>
                              <Calendar className="h-3 w-3" />
                              {room.year} Matric
                            </>
                          ) : (
                            <>
                              <GraduationCap className="h-3 w-3" />
                              Grade {room.grade}
                            </>
                          )}
                        </CardDescription>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/70 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Host
                        </span>
                        <span className="text-white font-medium">{room.host_name}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/70 flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          Players
                        </span>
                        <span className="text-white font-medium">{room.participantCount}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/70 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Code
                        </span>
                        <span className="text-white font-mono font-bold bg-white/10 px-2 py-1 rounded">{room.session_code}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleJoinRoom(room.session_code)}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all group-hover:shadow-lg"
                    >
                      Join Room
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4 overflow-hidden relative">
      <StarField starCount={50} shootingCount={3} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => setView('list')}
          className="text-white hover:bg-white/10 mb-6 transition-all hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Rooms
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 animate-pulse">
              <Plus className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-white font-bold mb-2">Create Room</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Set up a new exam session
            </CardDescription>
            <div className="flex justify-center gap-2 mt-4">
              <div className={`h-2 w-2 rounded-full ${step === 'name' ? 'bg-purple-400' : 'bg-white/30'}`}></div>
              <div className={`h-2 w-2 rounded-full ${step === 'mode' ? 'bg-purple-400' : 'bg-white/30'}`}></div>
              <div className={`h-2 w-2 rounded-full ${step === 'year' || step === 'grade' ? 'bg-purple-400' : 'bg-white/30'}`}></div>
              <div className={`h-2 w-2 rounded-full ${step === 'subject' ? 'bg-purple-400' : 'bg-white/30'}`}></div>
              <div className={`h-2 w-2 rounded-full ${step === 'questions' ? 'bg-purple-400' : 'bg-white/30'}`}></div>
              <div className={`h-2 w-2 rounded-full ${step === 'summary' ? 'bg-purple-400' : 'bg-white/30'}`}></div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {step === 'name' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Your Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    className="w-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all"
                  />
                </div>
                <Button
                  onClick={handleNameSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 'mode' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Select Exam Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setMode('matric')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        mode === 'matric'
                          ? 'border-purple-400 bg-purple-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                    >
                      <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                      <div className="text-white font-semibold">Matric Exam</div>
                      <div className="text-white/60 text-xs mt-1">Grade 12 Past Papers</div>
                    </button>
                    <button
                      onClick={() => setMode('grade')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        mode === 'grade'
                          ? 'border-purple-400 bg-purple-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                    >
                      <GraduationCap className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                      <div className="text-white font-semibold">Grade Level</div>
                      <div className="text-white/60 text-xs mt-1">Grades 10-12</div>
                    </button>
                  </div>
                </div>
                <Button
                  onClick={handleModeSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 'year' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Select Matric Year
                  </label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="bg-white/10 border-2 border-white/20 text-white rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={y} className="cursor-pointer">{y}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleYearSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 'grade' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Select Grade Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {grades.map((g) => (
                      <button
                        key={g}
                        onClick={() => setGrade(g)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          grade === g
                            ? 'border-purple-400 bg-purple-500/20'
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}
                      >
                        <div className="text-white font-bold text-xl">{g}</div>
                        <div className="text-white/60 text-xs mt-1">Grade</div>
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={handleGradeSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 'subject' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Select Subject
                  </label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="bg-white/10 border-2 border-white/20 text-white rounded-xl px-4 py-3 focus:border-purple-400 focus:outline-none transition-all">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableSubjects().map((s) => (
                        <SelectItem key={s} value={s} className="cursor-pointer">{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleSubjectSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 'questions' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Number of Questions
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["5", "10", "15", "20", "25", "30"].map((count) => (
                      <button
                        key={count}
                        onClick={() => setQuestionCount(count)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          questionCount === count
                            ? 'border-purple-400 bg-purple-500/20'
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}
                      >
                        <div className="text-white font-bold text-xl">{count}</div>
                        <div className="text-white/60 text-xs mt-1">Questions</div>
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={handleQuestionsSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 'summary' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <label className="text-sm text-white/80 mb-3 block flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Review Your Session
                  </label>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/20 space-y-3">
                    <div className="flex justify-between text-white">
                      <span className="text-white/60">Your Name:</span>
                      <span className="font-medium">{hostName}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span className="text-white/60">Mode:</span>
                      <span className="font-medium capitalize">{mode}</span>
                    </div>
                    {mode === 'matric' && (
                      <div className="flex justify-between text-white">
                        <span className="text-white/60">Year:</span>
                        <span className="font-medium">{year}</span>
                      </div>
                    )}
                    {mode === 'grade' && (
                      <div className="flex justify-between text-white">
                        <span className="text-white/60">Grade:</span>
                        <span className="font-medium">Grade {grade}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-white">
                      <span className="text-white/60">Subject:</span>
                      <span className="font-medium">{subject}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span className="text-white/60">Questions:</span>
                      <span className="font-medium">{questionCount}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setStep('questions')}
                    variant="outline"
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleCreateRoom}
                    disabled={isCreating}
                    className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCreating ? 'Creating...' : <><Sparkles className="mr-2 h-5 w-5" /> Create Room</>}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamTogether;
