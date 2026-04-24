import { Fragment, useState, useEffect, memo, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle2, XCircle, ChevronRight, Clock, Target, Brain, Lightbulb, RotateCcw, Eye, Sparkles } from 'lucide-react';
import { MatricExamQuestion } from '@/data/matricExams';
import TopBar from '@/components/TopBar';
import StarField from '@/components/StarField';

// Lazy load question data to reduce initial bundle size
const getPredictedQuestions = async (stream: string, subject: string): Promise<MatricExamQuestion[]> => {
  const module = await import('@/data/predicted2018MatricQuestions');
  const streamKey = stream.toLowerCase();
  const subjectLower = subject.toLowerCase();

  if (streamKey === 'natural') {
    switch (subjectLower) {
      case 'mathematics':
        return module.predicted2018NaturalMathQuestions;
      case 'physics':
        return module.predicted2018NaturalPhysicsQuestions;
      case 'chemistry':
        return module.predicted2018NaturalChemistryQuestions;
      case 'biology':
        return module.predicted2018NaturalBiologyQuestions;
      case 'english':
        return module.predicted2018NaturalEnglishQuestions;
      case 'civics':
        return module.predicted2018NaturalCivicsQuestions;
      case 'scholastic aptitude test':
        return module.predicted2018NaturalScholasticAptitudeQuestions;
      default:
        return [];
    }
  } else if (streamKey === 'social') {
    switch (subjectLower) {
      case 'mathematics':
        return module.predicted2018SocialMathQuestions;
      case 'english':
        return module.predicted2018SocialEnglishQuestions;
      case 'history':
        return module.predicted2018SocialHistoryQuestions;
      case 'geography':
        return module.predicted2018SocialGeographyQuestions;
      case 'economics':
        return module.predicted2018SocialEconomicsQuestions;
      case 'civics':
        return module.predicted2018SocialCivicsQuestions;
      case 'scholastic aptitude test':
        return module.predicted2018SocialScholasticAptitudeQuestions;
      default:
        return [];
    }
  }
  return [];
};

const PredictedMatricQuizPage = () => {
  const { stream, subject } = useParams<{ stream: string; subject: string }>();
  const navigate = useNavigate();
  const streamKey = stream ?? 'natural';
  const streamLabel = streamKey === 'social' ? 'Social Science' : 'Natural Science';
  const isSocialStream = streamKey === 'social';
  
  // Color theme based on stream
  const theme = {
    primary: isSocialStream ? 'purple' : 'emerald',
    secondary: isSocialStream ? 'pink' : 'teal',
    bgGradient: isSocialStream 
      ? 'from-purple-950 via-pink-900 to-purple-950' 
      : 'from-emerald-950 via-teal-900 to-emerald-950',
    gradient: isSocialStream 
      ? 'from-purple-500 via-pink-500 to-purple-600' 
      : 'from-emerald-500 via-teal-500 to-emerald-600',
    gradientHover: isSocialStream 
      ? 'from-purple-600 via-pink-600 to-purple-700' 
      : 'from-emerald-600 via-teal-600 to-emerald-700',
    bgTint: isSocialStream ? 'purple' : 'emerald',
    borderTint: isSocialStream ? 'purple' : 'emerald',
    iconColor: isSocialStream ? 'text-purple-400' : 'text-emerald-400',
    glowColor: isSocialStream ? 'shadow-purple-500/50' : 'shadow-emerald-500/50',
  };
  
  const [questions, setQuestions] = useState<MatricExamQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPredictedQuestions(streamKey, subject ?? '').then(data => {
      setQuestions(data);
      setLoading(false);
    });
  }, [streamKey, subject]);

  const scoreableQuestions = useMemo(() => questions.filter((question) => question.correctAnswer >= 0).length, [questions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const answeredCount = useMemo(() => answers.filter(a => a !== null).length, [answers]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // Reset answers when questions change
  useEffect(() => {
    setAnswers(new Array(questions.length).fill(null));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  }, [questions]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} pt-14 px-4 pb-4 overflow-hidden relative flex items-center justify-center`}>
        <StarField />
        <TopBar />
        <div className="text-center text-white relative z-10">
          <p className="text-xl">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} pt-14 px-4 pb-4 overflow-hidden relative flex items-center justify-center`}>
        <StarField />
        <TopBar />
        <div className="text-center text-white relative z-10">
          <p className="text-xl mb-4">No predicted questions available for {subject} ({streamLabel})</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate('/predicted-matric')}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion: MatricExamQuestion = questions[currentIndex];

  const renderRichText = (text: string, keyPrefix: string) => {
    const parts = text.split(/(\[Image:\s*[^\]]+\])/g).filter(Boolean);

    return parts.map((part, index) => {
      const match = part.match(/^\[Image:\s*([^\]]+)\]$/);
      if (!match) {
        return (
          <span key={`${keyPrefix}-text-${index}`} className="whitespace-pre-line">
            {part}
          </span>
        );
      }

      const source = match[1].trim();
      if (!/^https?:\/\//i.test(source)) {
        return (
          <span key={`${keyPrefix}-placeholder-${index}`} className="text-white/45 text-sm italic">
            {part}
          </span>
        );
      }

      return (
        <img
          key={`${keyPrefix}-image-${index}`}
          src={source}
          alt="Exam diagram"
          loading="lazy"
          className="w-full max-h-72 object-contain rounded-xl border border-white/10 bg-white p-2"
        />
      );
    });
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    
    if (currentQuestion.correctAnswer >= 0 && index === currentQuestion.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowCorrectAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(answers[currentIndex - 1]);
      setShowExplanation(false);
      setShowCorrectAnswer(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
    setAnswers(new Array(questions.length).fill(null));
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setSelectedAnswer(answers[index]);
    setShowExplanation(false);
    setShowCorrectAnswer(false);
  };

  const percentage = scoreableQuestions > 0 ? Math.round((score / scoreableQuestions) * 100) : 0;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (finished) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} pt-14 px-4 pb-4 overflow-hidden relative`}>
        <StarField starCount={40} shootingCount={2} />
        <TopBar />

        <div className="max-w-3xl mx-auto relative z-10 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/predicted-matric')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Card className={`bg-white/[0.04] backdrop-blur-xl border-white/[0.08] ${theme.glowColor}`}>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-lg ${theme.glowColor} animate-pulse`}>
                  <Target className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
                <p className="text-white/50">{subject} - {streamLabel}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className={`text-center p-4 rounded-xl bg-${theme.bgTint}-500/10 border border-${theme.borderTint}-500/30 ${theme.glowColor}`}>
                  <div className={`text-3xl font-bold text-${theme.primary}-400 mb-1`}>{score}</div>
                  <div className="text-xs text-white/50">Correct</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">{scoreableQuestions - score}</div>
                  <div className="text-xs text-white/50">Incorrect</div>
                </div>
                <div className={`text-center p-4 rounded-xl bg-${theme.secondary}-500/10 border border-${theme.secondary}-500/30 ${theme.glowColor}`}>
                  <div className={`text-3xl font-bold text-${theme.secondary}-400 mb-1`}>{percentage}%</div>
                  <div className="text-xs text-white/50">Score</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Progress</span>
                  <span className="text-white font-medium">{answeredCount}/{questions.length} answered</span>
                </div>
                <Progress value={progress} className={`h-2 bg-white/10 [&>div]:bg-gradient-to-r ${theme.gradient}`} />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button
                  onClick={() => navigate('/predicted-matric')}
                  className={`flex-1 bg-gradient-to-r ${theme.gradient} hover:${theme.gradientHover} text-white shadow-lg ${theme.glowColor} transition-all duration-200`}
                >
                  Back to Subjects
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className={`mt-6 p-4 rounded-xl bg-${theme.bgTint}-500/10 border border-${theme.borderTint}-500/30 ${theme.glowColor}`}>
            <div className="flex items-start gap-3">
              <Sparkles className={`h-5 w-5 ${theme.iconColor} mt-0.5`} />
              <div className="flex-1">
                <h3 className={`text-${theme.primary}-300 font-semibold mb-1`}>90% Probability Questions</h3>
                <p className={`text-${theme.primary}-200/70 text-sm`}>
                  These questions have a 90% probability of appearing in the next matric exam. Review your answers and focus on areas where you need improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} pt-14 px-4 pb-4 overflow-hidden relative`}>
      <StarField starCount={40} shootingCount={2} />
      <TopBar />

      <div className="max-w-3xl mx-auto relative z-10 mt-8">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/predicted-matric')}
            className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <Badge className={`bg-gradient-to-r ${theme.gradient} text-white border-0`}>
              <Sparkles className="h-3 w-3 mr-1" />
              90% Predicted
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white/60">
              {currentIndex + 1} / {questions.length}
            </Badge>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-white/50">Progress</span>
            <span className="text-white font-medium">{answeredCount} answered</span>
          </div>
          <Progress value={progress} className={`h-2 bg-white/10 [&>div]:bg-gradient-to-r ${theme.gradient}`} />
        </div>

        <Card className={`bg-white/[0.04] backdrop-blur-xl border-white/[0.08] mb-6 ${theme.glowColor}`}>
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${theme.bgTint}-500/20 border border-${theme.borderTint}-500/30 ${theme.glowColor}`}>
                  <Brain className={`h-5 w-5 ${theme.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">Question {currentIndex + 1}</h3>
                  <p className="text-white/50 text-sm">{subject} - {streamLabel}</p>
                </div>
              </div>
              <div className="text-white text-lg leading-relaxed">
                {renderRichText(currentQuestion.question, 'question')}
              </div>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showResult = showExplanation || showCorrectAnswer;

                let variant: 'default' | 'correct' | 'incorrect' = 'default';
                if (showResult) {
                  if (isCorrect) variant = 'correct';
                  else if (isSelected && !isCorrect) variant = 'incorrect';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                      variant === 'correct'
                        ? `bg-${theme.primary}-500/20 border-${theme.primary}-500 text-${theme.primary}-300 ${theme.glowColor} shadow-lg`
                        : variant === 'incorrect'
                        ? 'bg-red-500/20 border-red-500 text-red-300 shadow-red-500/30 shadow-lg'
                        : isSelected
                        ? 'bg-white/10 border-white/20 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                    } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        variant === 'correct'
                          ? `border-${theme.primary}-500 bg-gradient-to-br ${theme.gradient} text-white shadow-lg`
                          : variant === 'incorrect'
                          ? 'border-red-500 bg-red-500 text-white shadow-lg'
                          : isSelected
                          ? 'border-white/40 bg-white/20 text-white'
                          : 'border-white/20'
                      }`}>
                        {variant === 'correct' && <CheckCircle2 className="h-4 w-4" />}
                        {variant === 'incorrect' && <XCircle className="h-4 w-4" />}
                      </div>
                      <span className="flex-1">{renderRichText(option, `option-${index}`)}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && currentQuestion.explanation && (
              <div className={`mt-6 p-4 rounded-xl bg-${theme.bgTint}-500/10 border border-${theme.borderTint}-500/30 ${theme.glowColor}`}>
                <div className="flex items-start gap-3">
                  <Lightbulb className={`h-5 w-5 ${theme.iconColor} mt-0.5 flex-shrink-0`} />
                  <div className="flex-1">
                    <h4 className={`text-${theme.primary}-300 font-semibold mb-2`}>Explanation</h4>
                    <p className={`text-${theme.primary}-200/80 text-sm leading-relaxed`}>
                      {renderRichText(currentQuestion.explanation, 'explanation')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="outline"
            className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Previous
          </Button>
          {selectedAnswer !== null ? (
            <Button
              onClick={handleNext}
              className={`flex-1 bg-gradient-to-r ${theme.gradient} hover:${theme.gradientHover} text-white shadow-lg ${theme.glowColor} transition-all duration-200`}
            >
              {currentIndex + 1 === questions.length ? 'Finish' : 'Next'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setShowCorrectAnswer(true);
                setShowExplanation(true);
              }}
              variant="outline"
              className="flex-1 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <Eye className="h-4 w-4 mr-2" />
              Show Answer
            </Button>
          )}
        </div>

        <div className={`mt-6 p-4 rounded-xl bg-${theme.bgTint}-500/10 border border-${theme.borderTint}-500/30 ${theme.glowColor}`}>
          <div className="flex items-start gap-3">
            <Clock className={`h-5 w-5 ${theme.iconColor} mt-0.5`} />
            <div className="flex-1">
              <h3 className={`text-${theme.primary}-300 font-semibold mb-1`}>90% Probability</h3>
              <p className={`text-${theme.primary}-200/70 text-sm`}>
                This question has a 90% probability of appearing in the next matric exam based on analysis of previous years' patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PredictedMatricQuizPage);
