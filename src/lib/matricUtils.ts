// Matric exam question utilities
import { matric2013MathQuestions } from "@/data/matric2013MathQuestions";
import { matric2013PhysicsQuestions } from "@/data/matric2013PhysicsQuestions";
import { matric2013ChemistryQuestions } from "@/data/matric2013ChemistryQuestions";
import { matric2013BiologyQuestions } from "@/data/matric2013BiologyQuestions";
import { matric2013EnglishQuestions } from "@/data/matric2013EnglishQuestions";
import { matric2013CivicsQuestions } from "@/data/matric2013CivicsQuestions";
import { matric2014MathQuestions } from "@/data/matric2014MathQuestions";
import { matric2014PhysicsQuestions } from "@/data/matric2014PhysicsQuestions";
import { matric2014ChemistryQuestions } from "@/data/matric2014ChemistryQuestions";
import { matric2014BiologyQuestions } from "@/data/matric2014BiologyQuestions";
import { matric2014EnglishQuestions } from "@/data/matric2014EnglishQuestions";
import { matric2014CivicsQuestions } from "@/data/matric2014CivicsQuestions";
import { matric2015MathQuestions } from "@/data/matric2015MathQuestions";
import { matric2015PhysicsQuestions } from "@/data/matric2015PhysicsQuestions";
import { matric2015ChemistryQuestions } from "@/data/matric2015ChemistryQuestions";
import { matric2015BiologyQuestions } from "@/data/matric2015BiologyQuestions";
import { matric2015EnglishQuestions } from "@/data/matric2015EnglishQuestions";
import { matric2015CivicsQuestions } from "@/data/matric2015CivicsQuestions";
import { matric2016MathQuestions } from "@/data/matric2016MathQuestions";
import { matric2016PhysicsQuestions } from "@/data/matric2016PhysicsQuestions";
import { matric2016ChemistryQuestions } from "@/data/matric2016ChemistryQuestions";
import { matric2016EnglishQuestions } from "@/data/matric2016EnglishQuestions";
import { matric2016SocialCivicsQuestions } from "@/data/matric2016SocialCivicsQuestions";
import { matric2016SocialEconomicsQuestions } from "@/data/matric2016SocialEconomicsQuestions";
import { matric2016SocialEnglishQuestions } from "@/data/matric2016SocialEnglishQuestions";
import { matric2016SocialGeographyQuestions } from "@/data/matric2016SocialGeographyQuestions";
import { matric2016SocialHistoryQuestions } from "@/data/matric2016SocialHistoryQuestions";
import { matric2016SocialMathQuestions } from "@/data/matric2016SocialMathQuestions";
import { matric2017BiologyQuestions } from "@/data/matric2017BiologyQuestions";
import { matric2017ChemistryQuestions } from "@/data/matric2017ChemistryQuestions";
import { matric2017EnglishQuestions } from "@/data/matric2017EnglishQuestions";
import { matric2017MathQuestions } from "@/data/matric2017MathQuestions";
import { matric2017PhysicsQuestions } from "@/data/matric2017PhysicsQuestions";
import { matric2017SocialCivicsQuestions } from "@/data/matric2017SocialCivicsQuestions";
import { matric2017SocialEconomicsQuestions } from "@/data/matric2017SocialEconomicsQuestions";
import { matric2017SocialEnglishQuestions } from "@/data/matric2017SocialEnglishQuestions";
import { matric2017SocialGeographyQuestions } from "@/data/matric2017SocialGeographyQuestions";
import { matric2017SocialHistoryQuestions } from "@/data/matric2017SocialHistoryQuestions";
import { matric2017SocialMathQuestions } from "@/data/matric2017SocialMathQuestions";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

// Normalize matric question format (correctAnswer is an index, convert to actual answer)
const normalizeMatricQuestion = (q: any): Question => {
  const correctIndex = q.correctAnswer;
  const correctAnswer = q.options[correctIndex] || q.options[correctIndex];
  return {
    question: q.question,
    options: q.options,
    correctAnswer: correctAnswer,
    explanation: q.explanation,
  };
};

// Matric question sets organized by year and subject
const matricQuestionSets: Record<string, Record<string, any[]>> = {
  "2013": {
    "Mathematics": matric2013MathQuestions,
    "Physics": matric2013PhysicsQuestions,
    "Chemistry": matric2013ChemistryQuestions,
    "Biology": matric2013BiologyQuestions,
    "English": matric2013EnglishQuestions,
    "Civics": matric2013CivicsQuestions,
  },
  "2014": {
    "Mathematics": matric2014MathQuestions,
    "Physics": matric2014PhysicsQuestions,
    "Chemistry": matric2014ChemistryQuestions,
    "Biology": matric2014BiologyQuestions,
    "English": matric2014EnglishQuestions,
    "Civics": matric2014CivicsQuestions,
  },
  "2015": {
    "Mathematics": matric2015MathQuestions,
    "Physics": matric2015PhysicsQuestions,
    "Chemistry": matric2015ChemistryQuestions,
    "Biology": matric2015BiologyQuestions,
    "English": matric2015EnglishQuestions,
    "Civics": matric2015CivicsQuestions,
  },
  "2016": {
    "Mathematics": matric2016MathQuestions,
    "Physics": matric2016PhysicsQuestions,
    "Chemistry": matric2016ChemistryQuestions,
    "English": matric2016EnglishQuestions,
    "Civics": matric2016SocialCivicsQuestions,
    "Economics": matric2016SocialEconomicsQuestions,
    "Geography": matric2016SocialGeographyQuestions,
    "History": matric2016SocialHistoryQuestions,
  },
  "2017": {
    "Mathematics": matric2017MathQuestions,
    "Physics": matric2017PhysicsQuestions,
    "Chemistry": matric2017ChemistryQuestions,
    "Biology": matric2017BiologyQuestions,
    "English": matric2017EnglishQuestions,
    "Civics": matric2017SocialCivicsQuestions,
    "Economics": matric2017SocialEconomicsQuestions,
    "Geography": matric2017SocialGeographyQuestions,
    "History": matric2017SocialHistoryQuestions,
  },
};

// Seeded random number generator for consistent question order across participants
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash;
  }
  return () => {
    const x = Math.sin(hash++) * 10000;
    return x - Math.floor(x);
  };
};

export const getMatricQuestions = (
  year: number,
  subject: string,
  sessionCode?: string
): Question[] => {
  const yearKey = year.toString();
  const subjectData = matricQuestionSets[yearKey]?.[subject];
  
  if (!subjectData) {
    console.log(`No matric questions found for year ${year} and subject ${subject}`);
    return [];
  }

  // Normalize questions (convert index-based correctAnswer to actual answer)
  let normalized = subjectData.map(normalizeMatricQuestion);

  // Use seeded random if session code is provided for consistent order across participants
  if (sessionCode) {
    const random = seededRandom(sessionCode);
    return normalized.sort(() => random() - 0.5);
  }

  // Shuffle and return
  return normalized.sort(() => Math.random() - 0.5);
};
