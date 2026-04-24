import { useState } from 'react';
import StarField from '@/components/StarField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, Loader2, ChevronRight, RotateCcw, GraduationCap, Banknote, Brain, TrendingUp } from 'lucide-react';
import { simulatorCareers, SimulatorCareer } from '@/lib/careerSimulatorData';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/i18n/LanguageContext';
import TopBar from "@/components/TopBar";

type Stage = 'select' | 'loading' | 'intro' | 'scenario' | 'final';

interface Choice {
  id: string;
  text: string;
  consequence: string;
}

const CareerSimulatorPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [stage, setStage] = useState<Stage>('select');
  const [selectedCareer, setSelectedCareer] = useState<SimulatorCareer | null>(null);
  const [introData, setIntroData] = useState<any>(null);
  const [scenarioData, setScenarioData] = useState<any>(null);
  const [finalData, setFinalData] = useState<any>(null);
  const [previousChoices, setPreviousChoices] = useState<string[]>([]);
  const [scenarioCount, setScenarioCount] = useState(0);

  const callSimulator = async (stageType: string, career: SimulatorCareer, choices: string[] = []) => {
    // Use local fallback instead of calling Supabase function
    return getLocalSimulatorData(stageType, career, choices);
  };

  const getLocalSimulatorData = (stageType: string, career: SimulatorCareer, choices: string[]) => {
    const localData: Record<string, any> = {
      doctor: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: `You arrive at Addis Ababa University Hospital at 7:00 AM. The morning rounds are about to begin, and the emergency department is already bustling with patients.`,
          scenario: "A patient comes in with severe chest pain and difficulty breathing. The nurse hands you their vitals: BP 90/60, HR 120, O2 sat 88%. What's your first action?",
          careerInfo: {
            salaryRange: "ETB 30,000 - 80,000 per month",
            universities: ["Addis Ababa University", "University of Gondar", "Jimma University", "St. Paul's Hospital"],
            requiredSkills: ["Medical diagnosis", "Patient care", "Emergency response", "Communication"],
            growthOutlook: "High demand in Ethiopia's growing healthcare sector"
          },
          choices: [
            { id: "1", text: "Order immediate ECG and cardiac enzymes", consequence: "Good call - you identify a potential heart attack quickly" },
            { id: "2", text: "Start oxygen and stabilize vitals first", consequence: "Smart prioritization - patient stability comes first" },
            { id: "3", text: "Call cardiology for immediate consult", consequence: "Proactive teamwork - getting specialists involved early" }
          ]
        },
        consequence: {
          outcome: "Your quick thinking helped stabilize the patient. The cardiology team praises your decision-making.",
          progressNote: "You're demonstrating strong emergency medicine skills.",
          newScenario: "Now you have 5 patients waiting: a routine checkup, a suspected fracture, a fever case, a medication refill, and a follow-up. How do you prioritize?",
          skillsUsed: ["Emergency assessment", "Decision making"]
        },
        final: {
          summary: "You've completed a day as a doctor in Ethiopia. You handled emergencies, managed patient flow, and collaborated with specialists.",
          fitScore: 85,
          strengths: ["Quick decision-making under pressure", "Strong patient communication", "Team collaboration"],
          areasToImprove: ["Time management with multiple patients", "Documentation efficiency"],
          advice: "Consider specializing in emergency medicine or cardiology given your strong performance in acute care scenarios.",
          nextSteps: ["Complete medical residency at AAU", "Get specialized training in emergency medicine", "Join the Ethiopian Medical Association"]
        }
      },
      "software-engineer": {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're working at a tech startup in Addis Ababa. The team is preparing to launch a new mobile app for Ethiopian farmers.",
          scenario: "The lead developer tells you the app is crashing on older Android devices. You have 2 hours before the demo to investors. What do you do?",
          careerInfo: {
            salaryRange: "ETB 25,000 - 70,000 per month",
            universities: ["Addis Ababa University (Institute of Technology)", "ASTU", "Mekelle University", "EiABC"],
            requiredSkills: ["Programming", "Problem-solving", "System design", "Debugging"],
            growthOutlook: "Excellent - Ethiopia's tech sector is rapidly expanding"
          },
          choices: [
            { id: "1", text: "Debug the crash logs and fix the specific issue", consequence: "Focused approach - you identify the memory leak" },
            { id: "2", text: "Implement a fallback for older devices", consequence: "Pragmatic solution - ensures demo works for everyone" },
            { id: "3", text: "Optimize the entire app for performance", consequence: "Comprehensive fix - improves overall experience" }
          ]
        },
        consequence: {
          outcome: "The demo went smoothly! The investors were impressed with the app's performance.",
          progressNote: "Your technical problem-solving is excellent.",
          newScenario: "The product manager wants to add a new feature: offline mode for farmers with poor internet. The deadline is tight. How do you approach this?",
          skillsUsed: ["Debugging", "Performance optimization"]
        },
        final: {
          summary: "You've experienced software engineering in Ethiopia's growing tech ecosystem. You solved critical bugs and planned new features.",
          fitScore: 90,
          strengths: ["Technical debugging skills", "Pragmatic problem-solving", "Meeting deadlines"],
          areasToImprove: ["Balancing feature requests with technical debt", "Team communication on complex issues"],
          advice: "Your skills are well-suited for full-stack development. Consider learning cloud technologies for scaling applications.",
          nextSteps: ["Build a portfolio of projects", "Learn cloud platforms (AWS/Azure)", "Contribute to open-source Ethiopian tech projects"]
        }
      },
      "civil-engineer": {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're at a construction site for a new bridge project in the Amhara region. The project is behind schedule due to recent rains.",
          scenario: "Your site supervisor reports that the soil testing shows unexpected soft spots in the foundation area. The client wants to speed up construction. What's your decision?",
          careerInfo: {
            salaryRange: "ETB 20,000 - 60,000 per month",
            universities: ["Addis Ababa University", "ASTU", "Arba Minch University", "Jimma University"],
            requiredSkills: ["Structural analysis", "Project management", "Safety compliance", "Technical drawing"],
            growthOutlook: "Steady - Ethiopia's infrastructure development continues"
          },
          choices: [
            { id: "1", text: "Stop work and redesign the foundation", consequence: "Safety first - you prevent potential structural failure" },
            { id: "2", text: "Add reinforcement and continue with modified plan", consequence: "Balanced approach - safety with some progress" },
            { id: "3", text: "Proceed with original plan and monitor closely", consequence: "Risky decision - could lead to long-term issues" }
          ]
        },
        consequence: {
          outcome: "Your decision ensured the bridge's safety. The client appreciated your professional integrity despite the delay.",
          progressNote: "You're showing strong engineering ethics and safety consciousness.",
          newScenario: "A supplier delivers substandard steel beams. They offer a discount if you accept them. The project budget is tight. What do you do?",
          skillsUsed: ["Safety compliance", "Client communication"]
        },
        final: {
          summary: "You've navigated the challenges of civil engineering in Ethiopia. You prioritized safety while managing project constraints.",
          fitScore: 82,
          strengths: ["Safety consciousness", "Professional ethics", "Problem-solving under pressure"],
          areasToImprove: ["Budget optimization without compromising quality", "Advanced structural analysis techniques"],
          advice: "Consider specializing in structural engineering or construction management. Your ethical approach is highly valued.",
          nextSteps: ["Get licensed as a professional engineer", "Learn advanced structural analysis software", "Join the Ethiopian Construction Association"]
        }
      },
      journalist: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're a reporter for a major Ethiopian newspaper. Today you're covering a story about a new government policy affecting small businesses.",
          scenario: "Your source tells you about potential corruption in the policy implementation, but provides no evidence. You have a deadline in 4 hours. What do you do?",
          careerInfo: {
            salaryRange: "ETB 15,000 - 45,000 per month",
            universities: ["Addis Ababa University", "AAU School of Journalism", "University of Gondar"],
            requiredSkills: ["Investigative research", "Writing", "Interviewing", "Ethics"],
            growthOutlook: "Evolving with digital media transformation"
          },
          choices: [
            { id: "1", text: "Publish with source protection, note unverified claims", consequence: "Ethical reporting - transparency with readers" },
            { id: "2", text: "Delay publication to gather more evidence", consequence: "Responsible journalism - accuracy over speed" },
            { id: "3", text: "Seek official comment before publishing", consequence: "Balanced reporting - giving all sides a voice" }
          ]
        },
        consequence: {
          outcome: "Your balanced approach earned respect from both the public and officials. The story sparked important discussions.",
          progressNote: "You're demonstrating strong journalistic ethics and balance.",
          newScenario: "A major company offers you exclusive access if you write a positive story about them. Your editor is pressuring for content. How do you respond?",
          skillsUsed: ["Ethical decision-making", "Source verification"]
        },
        final: {
          summary: "You've practiced ethical journalism in Ethiopia's complex media landscape. You balanced speed with accuracy and maintained integrity.",
          fitScore: 88,
          strengths: ["Ethical judgment", "Balanced reporting", "Source verification"],
          areasToImprove: ["Building diverse source networks", "Multimedia storytelling skills"],
          advice: "Your commitment to ethics is admirable. Consider specializing in investigative journalism or digital media to expand your impact.",
          nextSteps: ["Build a portfolio of investigative pieces", "Learn data journalism techniques", "Join the Ethiopian Journalists Association"]
        }
      },
      agronomist: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're visiting farms in the Oromia region. Farmers are reporting poor yields despite using recommended fertilizers.",
          scenario: "You notice the soil pH is higher than expected, and there are signs of nutrient lockup. The farmers have limited budget for solutions. What's your recommendation?",
          careerInfo: {
            salaryRange: "ETB 18,000 - 50,000 per month",
            universities: ["Haramaya University", "Jimma University", "Haromaya University of Agriculture", "Wollo University"],
            requiredSkills: ["Soil analysis", "Crop management", "Sustainable practices", "Farmer education"],
            growthOutlook: "Critical for Ethiopia's food security goals"
          },
          choices: [
            { id: "1", text: "Recommend organic amendments to lower pH naturally", consequence: "Sustainable solution - works with farmers' budget" },
            { id: "2", text: "Suggest crop rotation with acid-tolerant varieties", consequence: "Long-term strategy - builds soil health gradually" },
            { id: "3", text: "Propose targeted lime application in problem areas", consequence: "Precision approach - maximizes impact of limited resources" }
          ]
        },
        consequence: {
          outcome: "Your recommendation improved yields by 30% within one season. Farmers are now adopting your methods across the region.",
          progressNote: "You're effectively translating scientific knowledge into practical solutions.",
          newScenario: "A new pest is threatening teff crops. Chemical pesticides are expensive and potentially harmful. Farmers need immediate help. What's your approach?",
          skillsUsed: ["Soil science", "Farmer education"]
        },
        final: {
          summary: "You've helped Ethiopian farmers improve their livelihoods through sustainable agricultural practices. You bridged science and practical application.",
          fitScore: 86,
          strengths: ["Practical problem-solving", "Farmer communication", "Sustainable approach"],
          areasToImprove: ["Pest management expertise", "Climate adaptation strategies"],
          advice: "Your work directly impacts food security. Consider specializing in sustainable agriculture or climate-smart farming.",
          nextSteps: ["Research integrated pest management", "Get certified in organic farming", "Work with agricultural extension programs"]
        }
      },
      lawyer: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're at your law firm in Addis Ababa. A client comes to you with a case: their small business is being sued by a larger corporation for alleged trademark infringement.",
          scenario: "The corporation is offering a quick settlement that would bankrupt your client. Your client wants to fight but has limited resources. What's your strategy?",
          careerInfo: {
            salaryRange: "ETB 25,000 - 80,000 per month",
            universities: ["Addis Ababa University (Law School)", "St. Mary's University", "Ethiopian Civil Service University"],
            requiredSkills: ["Legal research", "Negotiation", "Court advocacy", "Contract law"],
            growthOutlook: "Steady with Ethiopia's developing business sector"
          },
          choices: [
            { id: "1", text: "Negotiate a better settlement with payment terms", consequence: "Pragmatic approach - protects client from bankruptcy" },
            { id: "2", text: "Fight the case pro bono and seek media attention", consequence: "Bold strategy - public pressure may help" },
            { id: "3", text: "Find legal precedents to counter the claim", consequence: "Legal expertise - building a strong defense" }
          ]
        },
        consequence: {
          outcome: "Your negotiation skills secured a manageable settlement. The client can continue operating and the corporation respected your professionalism.",
          progressNote: "You're showing excellent negotiation and client advocacy skills.",
          newScenario: "A government official approaches you about a case that could expose corruption but would put you at personal risk. How do you handle this ethical dilemma?",
          skillsUsed: ["Negotiation", "Client advocacy"]
        },
        final: {
          summary: "You've navigated complex legal challenges while protecting your clients' interests. You balanced advocacy with practical realities.",
          fitScore: 84,
          strengths: ["Negotiation skills", "Client advocacy", "Legal research"],
          areasToImprove: ["High-stakes litigation experience", "Specialized knowledge in emerging areas"],
          advice: "Your negotiation skills are exceptional. Consider specializing in commercial law or human rights advocacy.",
          nextSteps: ["Specialize in commercial or corporate law", "Get experience in international arbitration", "Join the Ethiopian Bar Association committees"]
        }
      },
      teacher: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're teaching grade 10 physics at a high school in Addis Ababa. Your class has 60 students with varying levels of preparation.",
          scenario: "You're introducing electricity concepts. Half the class is engaged, but the other half is clearly lost. You have 40 minutes left. What do you do?",
          careerInfo: {
            salaryRange: "ETB 12,000 - 35,000 per month",
            universities: ["Addis Ababa University", "Kotebe University", "Bahir Dar University", "Dilla University"],
            requiredSkills: ["Subject knowledge", "Classroom management", "Communication", "Patience"],
            growthOutlook: "Essential - Ethiopia is investing heavily in education"
          },
          choices: [
            { id: "1", text: "Pause and use a hands-on demonstration", consequence: "Engaging approach - helps visual learners catch up" },
            { id: "2", text: "Break into small groups with peer teaching", consequence: "Collaborative learning - stronger students help others" },
            { id: "3", text: "Continue with the lesson and offer extra help later", consequence: "Traditional approach - may leave some students behind" }
          ]
        },
        consequence: {
          outcome: "Your interactive approach helped more students understand. The class average improved on the next assessment.",
          progressNote: "You're adapting your teaching to meet diverse learning needs.",
          newScenario: "A student is consistently disruptive but shows great potential when engaged. Other students are complaining. How do you handle this?",
          skillsUsed: ["Differentiated instruction", "Student engagement"]
        },
        final: {
          summary: "You've made a difference in students' lives through adaptive teaching. You managed diverse classrooms and inspired learning.",
          fitScore: 89,
          strengths: ["Adaptive teaching methods", "Student engagement", "Patience and empathy"],
          areasToImprove: ["Advanced classroom management techniques", "Integration of technology in teaching"],
          advice: "Your passion for teaching is evident. Consider specializing in science education or educational leadership.",
          nextSteps: ["Pursue a master's in education", "Learn educational technology tools", "Mentor new teachers"]
        }
      },
      architect: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're at your firm in Addis Ababa working on a design for a new community center. The client wants it to be modern but also culturally appropriate.",
          scenario: "Your initial design uses glass and steel, but the client feels it doesn't reflect Ethiopian architectural heritage. You have a presentation tomorrow. How do you revise?",
          careerInfo: {
            salaryRange: "ETB 20,000 - 60,000 per month",
            universities: ["EiABC (Addis Ababa)", "AAU Architecture", "University of Gondar", "Jimma University"],
            requiredSkills: ["Design", "Technical drawing", "Cultural sensitivity", "Project management"],
            growthOutlook: "Growing with Ethiopia's urban development"
          },
          choices: [
            { id: "1", text: "Incorporate traditional Ethiopian patterns and materials", consequence: "Cultural integration - honors heritage while modernizing" },
            { id: "2", text: "Blend modern forms with traditional building techniques", consequence: "Fusion approach - best of both worlds" },
            { id: "3", text: "Present both options and let client choose direction", consequence: "Collaborative process - involves client in decision" }
          ]
        },
        consequence: {
          outcome: "The client loved the cultural elements. The design was approved and praised for respecting Ethiopian heritage.",
          progressNote: "You're successfully balancing modern design with cultural context.",
          newScenario: "The construction team reports that a traditional material you specified is unavailable. You need a quick alternative that maintains the design intent. What's your solution?",
          skillsUsed: ["Cultural design", "Client communication"]
        },
        final: {
          summary: "You've created designs that honor Ethiopian culture while meeting modern needs. You balanced aesthetics with practicality.",
          fitScore: 87,
          strengths: ["Cultural sensitivity in design", "Client collaboration", "Creative problem-solving"],
          areasToImprove: ["Technical construction knowledge", "Sustainable design practices"],
          advice: "Your ability to blend tradition with modernity is valuable. Consider specializing in cultural heritage preservation or sustainable architecture.",
          nextSteps: ["Study sustainable building practices", "Get certified in green architecture", "Document traditional Ethiopian architecture"]
        }
      },
      pharmacist: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're working at a hospital pharmacy in Addis Ababa. It's a busy morning with many patients waiting for prescriptions.",
          scenario: "An elderly patient brings in a prescription from a doctor you don't know. The dosage seems unusually high for their age and condition. What do you do?",
          careerInfo: {
            salaryRange: "ETB 15,000 - 45,000 per month",
            universities: ["Addis Ababa University", "University of Gondar", "Jimma University", "Haramaya University"],
            requiredSkills: ["Pharmacology", "Patient counseling", "Attention to detail", "Drug interactions"],
            growthOutlook: "Steady - healthcare sector expansion"
          },
          choices: [
            { id: "1", text: "Contact the prescribing doctor to verify", consequence: "Professional verification - ensures patient safety" },
            { id: "2", text: "Consult with a senior pharmacist first", consequence: "Collaborative approach - uses team expertise" },
            { id: "3", text: "Counsel the patient and adjust based on guidelines", consequence: "Independent judgment - uses professional knowledge" }
          ]
        },
        consequence: {
          outcome: "The doctor had made an error and thanked you for catching it. Your vigilance prevented a potential adverse reaction.",
          progressNote: "You're demonstrating excellent pharmaceutical care and patient safety focus.",
          newScenario: "A patient can't afford their prescribed medication. They ask if there's a cheaper alternative. The hospital has a limited formulary. How do you help?",
          skillsUsed: ["Patient safety", "Professional communication"]
        },
        final: {
          summary: "You've ensured patient safety through careful medication review. You balanced professional judgment with patient advocacy.",
          fitScore: 91,
          strengths: ["Attention to detail", "Patient safety focus", "Professional communication"],
          areasToImprove: ["Formulary management", "Pharmacoeconomics"],
          advice: "Your commitment to patient safety is exemplary. Consider specializing in clinical pharmacy or pharmacotherapy.",
          nextSteps: ["Get clinical pharmacy certification", "Learn about pharmacoeconomics", "Join the Ethiopian Pharmaceutical Association"]
        }
      },
      "data-scientist": {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're working for a bank in Addis Ababa. They want to use data analytics to improve their loan approval process and reduce defaults.",
          scenario: "Your initial analysis shows that the current approval algorithm has bias against certain geographic regions. The management wants quick results. How do you proceed?",
          careerInfo: {
            salaryRange: "ETB 30,000 - 90,000 per month",
            universities: ["Addis Ababa University", "ASTU", "University of Gondar", "International training programs"],
            requiredSkills: ["Statistics", "Programming", "Machine learning", "Data visualization"],
            growthOutlook: "Excellent - data-driven decision making is growing"
          },
          choices: [
            { id: "1", text: "Document the bias and propose ethical improvements", consequence: "Ethical approach - addresses fairness concerns" },
            { id: "2", text: "Build a new unbiased algorithm from scratch", consequence: "Comprehensive solution - but takes more time" },
            { id: "3", text: "Optimize current algorithm for accuracy first", consequence: "Pragmatic approach - quick wins but may not fix bias" }
          ]
        },
        consequence: {
          outcome: "Your ethical approach led to a fairer algorithm that still maintained good accuracy. Management appreciated the long-term thinking.",
          progressNote: "You're balancing technical excellence with ethical considerations.",
          newScenario: "The marketing team wants to use customer data for targeted advertising. Some customers might feel this is invasive. How do you approach this?",
          skillsUsed: ["Ethical AI", "Data analysis"]
        },
        final: {
          summary: "You've applied data science to solve real business problems while maintaining ethical standards. You balanced technical and social considerations.",
          fitScore: 88,
          strengths: ["Ethical data practices", "Technical analysis", "Communication of complex concepts"],
          areasToImprove: ["Advanced machine learning techniques", "Big data infrastructure"],
          advice: "Your ethical approach to data science is valuable. Consider specializing in AI ethics or financial analytics.",
          nextSteps: ["Learn advanced ML frameworks", "Get certified in data ethics", "Build a portfolio of ethical AI projects"]
        }
      },
      veterinarian: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're at a veterinary clinic in rural Ethiopia. A farmer brings in a cow that's not eating and has a swollen udder.",
          scenario: "The farmer needs the cow for milk production and can't afford expensive treatments. You suspect mastitis but need to confirm. What's your approach?",
          careerInfo: {
            salaryRange: "ETB 15,000 - 45,000 per month",
            universities: ["University of Gondar", "Debre Birhan University", "Haramaya University", "Jimma University"],
            requiredSkills: ["Animal diagnosis", "Treatment", "Farmer education", "Disease prevention"],
            growthOutlook: "Important for Ethiopia's livestock sector"
          },
          choices: [
            { id: "1", text: "Perform a simple field test and provide affordable treatment", consequence: "Practical care - works within farmer's constraints" },
            { id: "2", text: "Teach the farmer prevention techniques while treating", consequence: "Education focus - long-term herd health" },
            { id: "3", text: "Refer to a specialist if condition is severe", consequence: "Specialized care - ensures best outcome" }
          ]
        },
        consequence: {
          outcome: "The cow recovered with your treatment. The farmer now implements prevention practices you taught, improving the whole herd's health.",
          progressNote: "You're providing effective care while educating for long-term impact.",
          newScenario: "An outbreak of a contagious disease is reported in nearby livestock. Farmers are panicked. How do you help contain it?",
          skillsUsed: ["Clinical diagnosis", "Farmer education"]
        },
        final: {
          summary: "You've provided essential veterinary care to Ethiopia's livestock sector. You balanced immediate treatment with long-term prevention education.",
          fitScore: 85,
          strengths: ["Practical veterinary skills", "Farmer education", "Disease prevention"],
          areasToImprove: ["Advanced diagnostic techniques", "Epidemiology knowledge"],
          advice: "Your work directly impacts food security. Consider specializing in livestock health or disease control.",
          nextSteps: ["Get certified in livestock health", "Learn about disease outbreak management", "Work with agricultural extension programs"]
        }
      },
      accountant: {
        intro: {
          title: `A Day as a ${career.name}`,
          setting: "You're at an accounting firm in Addis Ababa. A client company is being audited and their previous records are disorganized.",
          scenario: "You discover discrepancies in the past three years' financial statements. The client's management insists these are minor errors. What's your professional responsibility?",
          careerInfo: {
            salaryRange: "ETB 18,000 - 55,000 per month",
            universities: ["Addis Ababa University", "St. Mary's University", "Ethiopian Civil Service University", "Alpha University"],
            requiredSkills: ["Financial analysis", "Regulatory knowledge", "Attention to detail", "Ethics"],
            growthOutlook: "Steady with Ethiopia's formalizing economy"
          },
          choices: [
            { id: "1", text: "Document all discrepancies and recommend corrections", consequence: "Professional integrity - ensures compliance" },
            { id: "2", text: "Work with management to understand and fix issues", consequence: "Collaborative approach - builds trust while ensuring accuracy" },
            { id: "3", text: "Report to regulatory authorities if material", consequence: "Strict compliance - follows legal requirements" }
          ]
        },
        consequence: {
          outcome: "Your thorough documentation helped the client correct issues before the audit. The auditor appreciated the transparency.",
          progressNote: "You're maintaining professional standards while helping clients succeed.",
          newScenario: "A startup client wants to minimize taxes legally but is pushing aggressive strategies. Some approaches are in a gray area. How do you advise?",
          skillsUsed: ["Professional ethics", "Financial compliance"]
        },
        final: {
          summary: "You've maintained high ethical standards while helping clients navigate complex financial regulations. You balanced compliance with practical business needs.",
          fitScore: 83,
          strengths: ["Ethical judgment", "Attention to detail", "Regulatory knowledge"],
          areasToImprove: ["Tax planning strategies", "Financial advisory skills"],
          advice: "Your ethical approach is valuable. Consider specializing in forensic accounting or tax advisory.",
          nextSteps: ["Get CPA certification", "Specialize in Ethiopian tax law", "Join the Ethiopian Accounting Association"]
        }
      }
    };

    const careerData = localData[career.id];
    if (!careerData) {
      throw new Error(`Career data not found for ${career.id}`);
    }

    switch (stageType) {
      case 'intro':
        return careerData.intro;
      case 'consequence':
        return careerData.consequence;
      case 'final':
        return careerData.final;
      default:
        throw new Error(`Unknown stage: ${stageType}`);
    }
  };

  const handleSelectCareer = async (career: SimulatorCareer) => {
    setSelectedCareer(career);
    setStage('loading');
    setPreviousChoices([]);
    setScenarioCount(0);
    try {
      const data = await callSimulator('intro', career);
      setIntroData(data);
      setStage('intro');
    } catch (e: any) {
      toast({ title: 'Error', description: e.message || 'Failed to start simulation', variant: 'destructive' });
      setStage('select');
    }
  };

  const handleChoice = async (choice: Choice) => {
    const newChoices = [...previousChoices, `${choice.text}`];
    setPreviousChoices(newChoices);
    const newCount = scenarioCount + 1;
    setScenarioCount(newCount);
    setStage('loading');

    try {
      if (newCount >= 3) {
        const data = await callSimulator('final', selectedCareer!, newChoices);
        setFinalData(data);
        setStage('final');
      } else {
        const data = await callSimulator('consequence', selectedCareer!, newChoices);
        setScenarioData(data);
        setStage('scenario');
      }
    } catch (e: any) {
      toast({ title: 'Error', description: e.message || 'Failed to continue simulation', variant: 'destructive' });
      setStage('select');
    }
  };

  const handleRestart = () => {
    setStage('select');
    setSelectedCareer(null);
    setIntroData(null);
    setScenarioData(null);
    setFinalData(null);
    setPreviousChoices([]);
    setScenarioCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 pt-14 px-4 pb-4 overflow-hidden relative">
      <StarField starCount={40} shootingCount={2} />
      <TopBar />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white hover:bg-white/10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-yellow-400" />
              Future Me Mode
            </h1>
            <p className="text-pwwwhite/5sm">AI-Powered Career Simulator</p>
          </div>
        </div>

        {/* Career Selection */}
        {stage === 'select' && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-purwhiwhite/6enter text-lg mb-6">Choose a career to experience a day in their life ✨</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {simulatorCareers.map((career) => (
                <Card
                  key={career.id}
                  className="bg-white/5 border-white/10 hover:bg-white/15 cursor-pointer transition-all hover:scale-105 group"
                  onClick={() => handleSelectCareer(career)}
                >
                  <CardContent className="p-4 text-center">
                    <span className="text-4xl block mb-2">{career.icon}</span>
                    <h3 className="text-white font-semibold text-sm">{career.name}</h3>
                    <Badge variant="outline" className="mt-1 text-[10px] border-white/[0.08] text-white/40">{career.field}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Loading */}
        {stage === 'loading' && (
          <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
            <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
            <p className="text-white/60 text-lg">Generating your scenario...</p>
            <p className="text-white/30 text-sm mt-1">AI is crafting a unique experience for you</p>
          </div>
        )}

        {/* Intro Scene */}
        {stage === 'intro' && introData && selectedCareer && (
          <div className="space-y-6 animate-fade-in">
            <Card className={`bg-gradient-to-br ${selectedCareer.color} border-0 shadow-2xl`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <span className="text-4xl">{selectedCareer.icon}</span>
                  {introData.title || `A Day as a ${selectedCareer.name}`}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-3">
                <p className="text-lg leading-relaxed">{introData.setting}</p>
                <div className="bg-black/20 rounded-lg p-4 mt-4">
                  <p className="font-semibold mb-1">⚡ Scenario:</p>
                  <p>{introData.scenario}</p>
                </div>
              </CardContent>
            </Card>

            {/* Career Info Panel */}
            {introData.careerInfo && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-yellow-400"><Banknote className="h-5 w-5" /><span className="font-semibold text-white">Salary</span></div>
                    <p className="text-white/60 text-sm">{introData.careerInfo.salaryRange}</p>
                    <div className="flex items-center gap-2 text-blue-400 mt-3"><GraduationCap className="h-5 w-5" /><span className="font-semibold text-white">Universities</span></div>
                    <div className="flex flex-wrap gap-1">
                      {introData.careerInfo.universities?.map((u: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs border-white/[0.08] text-white/60">{u}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-green-400"><Brain className="h-5 w-5" /><span className="font-semibold text-white">Key Skills</span></div>
                    <div className="flex flex-wrap gap-1">
                      {introData.careerInfo.requiredSkills?.map((s: string, i: number) => (
                        <Badge key={i} className="bg-white/[0.08] text-white/60 text-xs">{s}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 mt-3"><TrendingUp className="h-5 w-5" /><span className="font-semibold text-white">Growth</span></div>
                    <p className="text-white/60 text-sm">{introData.careerInfo.growthOutlook}</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Choices */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg">What do you do?</h3>
              {introData.choices?.map((choice: Choice) => (
                <Button
                  key={choice.id}
                  variant="outline"
                  className="w-full justify-between text-left h-auto py-4 px-5 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-400 transition-all"
                  onClick={() => handleChoice(choice)}
                >
                  <span>{choice.text}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 ml-2" />
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Consequence / Next Scenario */}
        {stage === 'scenario' && scenarioData && selectedCareer && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-purple-500/30 text-purple-200">Round {scenarioCount} of 3</Badge>
            </div>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6 space-y-4">
                {scenarioData.outcome && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-300 text-sm font-medium mb-1">📌 What happened:</p>
                    <p className="text-white/70">{scenarioData.outcome}</p>
                  </div>
                )}
                {scenarioData.progressNote && (
                   <p className="text-violet-300 text-sm italic">💡 {scenarioData.progressNote}</p>
                )}
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="font-semibold text-white mb-1">⚡ New Challenge:</p>
                  <p className="text-white/70">{scenarioData.newScenario}</p>
                </div>
                {scenarioData.skillsUsed && (
                  <div className="flex gap-2 items-center">
                    <span className="text-white/40 text-sm">Skills used:</span>
                    {scenarioData.skillsUsed.map((s: string, i: number) => (
                      <Badge key={i} className="bg-blue-500/20 text-blue-300 text-xs">{s}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg">What do you do next?</h3>
              {scenarioData.choices?.map((choice: Choice) => (
                <Button
                  key={choice.id}
                  variant="outline"
                  className="w-full justify-between text-left h-auto py-4 px-5 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-400 transition-all"
                  onClick={() => handleChoice(choice)}
                >
                  <span>{choice.text}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 ml-2" />
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Final Summary */}
        {stage === 'final' && finalData && selectedCareer && (
          <div className="space-y-6 animate-fade-in">
            <Card className={`bg-gradient-to-br ${selectedCareer.color} border-0 shadow-2xl`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl">🎯 Simulation Complete!</CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-4">
                <p className="text-lg">{finalData.summary}</p>
                {finalData.fitScore && (
                  <div className="bg-black/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-white/70 mb-1">Career Fit Score</p>
                    <p className="text-5xl font-bold text-white">{finalData.fitScore}%</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-green-400 font-semibold mb-3">💪 Your Strengths</h3>
                  <ul className="space-y-2">
                    {finalData.strengths?.map((s: string, i: number) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-orange-400 font-semibold mb-3">📈 Areas to Improve</h3>
                  <ul className="space-y-2">
                    {finalData.areasToImprove?.map((s: string, i: number) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-orange-400 mt-0.5">→</span> {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {finalData.advice && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-purple-400 font-semibold mb-2">🎓 Advice</h3>
                  <p className="text-white/60">{finalData.advice}</p>
                </CardContent>
              </Card>
            )}

            {finalData.nextSteps && (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-5">
                  <h3 className="text-blue-400 font-semibold mb-3">🚀 Next Steps</h3>
                  <ol className="space-y-2">
                    {finalData.nextSteps.map((step: string, i: number) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-blue-400 font-bold">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            )}

            <div className="flex gap-3 justify-center pt-4">
              <Button onClick={handleRestart} className="bg-white/10 hover:bg-white/20 text-white">
                <RotateCcw className="h-4 w-4 mr-2" /> Try Another Career
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerSimulatorPage;
