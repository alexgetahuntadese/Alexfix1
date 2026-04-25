import { useState, useEffect } from "react";
import StarField from '@/components/StarField';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Users, Calendar, Plus, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getExamTogetherSessions, getSessionParticipants, clearOldSessions } from "@/lib/sessionUtils";

const ExamTogether = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [view, setView] = useState<'list' | 'create'>('list');
  const [hostName, setHostName] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [step, setStep] = useState<'name' | 'year' | 'subject'>('name');
  const [availableRooms, setAvailableRooms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const years = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography", "Civics", "IT"];

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
    setStep('year');
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

  const handleSubjectSubmit = () => {
    if (!subject) {
      toast({
        title: "Error",
        description: "Please select a subject",
        variant: "destructive"
      });
      return;
    }
    // Navigate to session creation with matric data
    navigate(`/exam-together-session?hostName=${encodeURIComponent(hostName)}&year=${year}&subject=${subject}`);
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
        <StarField starCount={30} shootingCount={2} />
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Exam Together</CardTitle>
              <CardDescription className="text-blue-100">
                Take Matric exams together with friends
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="mb-6">
            <div className="flex gap-4 mb-4">
              <input
                placeholder="Enter your name to join"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md px-3 py-2"
              />
              <Button
                onClick={() => setView('create')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create Room
              </Button>
            </div>
            <div className="flex gap-4">
              <Button
                onClick={loadRooms}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
              <Button
                onClick={() => navigate('/exam-together-join')}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Join with Code
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableRooms.length === 0 ? (
              <div className="col-span-full text-center text-white/60 py-8">
                No active rooms. Create one to get started!
              </div>
            ) : (
              availableRooms.map((room) => (
                <Card key={room.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{room.subject}</CardTitle>
                    <CardDescription className="text-blue-100">
                      {room.year} Matric Exam
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Host:</span>
                        <span className="text-white">{room.host_name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Players:</span>
                        <span className="text-white">{room.participantCount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">Code:</span>
                        <span className="text-white font-mono">{room.session_code}</span>
                      </div>
                      <Button
                        onClick={() => handleJoinRoom(room.session_code)}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
                      >
                        Join Room
                      </Button>
                    </div>
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
      <StarField starCount={30} shootingCount={2} />
      <div className="max-w-md mx-auto">
        <Button
          variant="ghost"
          onClick={() => setView('list')}
          className="text-white hover:bg-white/10 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Rooms
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Create Room</CardTitle>
            <CardDescription className="text-blue-100">
              Set up a new exam session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {step === 'name' && (
              <>
                <div>
                  <label className="text-sm text-white/80 mb-2 block">Your Name</label>
                  <input
                    placeholder="Enter your name"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md px-3 py-2"
                  />
                </div>
                <Button
                  onClick={handleNameSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                >
                  Continue
                </Button>
              </>
            )}

            {step === 'year' && (
              <>
                <div>
                  <label className="text-sm text-white/80 mb-2 block flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Select Matric Year
                  </label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={y}>{y}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleYearSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                >
                  Continue
                </Button>
              </>
            )}

            {step === 'subject' && (
              <>
                <div>
                  <label className="text-sm text-white/80 mb-2 block">Select Subject</label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleSubjectSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                >
                  Create Room
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExamTogether;
