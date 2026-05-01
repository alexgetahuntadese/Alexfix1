// Matric exam question utilities
import { grade12Mathematics } from "@/data/grade12Mathematics";
import { grade12PhysicsQuestions } from "@/data/grade12PhysicsQuestions";
import { grade12ChemistryQuestions } from "@/data/grade12ChemistryQuestions";
import { grade12BiologyQuestions } from "@/data/grade12BiologyQuestions";
import { grade12EnglishQuestions } from "@/data/grade12EnglishQuestions";
import { grade12HistoryQuestions } from "@/data/grade12HistoryQuestions";
import { grade12GeographyQuestions } from "@/data/grade12GeographyQuestions";
import { grade12CivicsQuestions } from "@/data/grade12CivicsQuestions";
import { grade12ITQuestions } from "@/data/grade12ITQuestions";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

// Flatten questions from nested objects to flat arrays
const flattenQuestions = (questionsObj: Record<string, any[]>): any[] => {
  const result: any[] = [];
  Object.values(questionsObj).forEach(chapterQuestions => {
    if (Array.isArray(chapterQuestions)) {
      result.push(...chapterQuestions);
    }
  });
  return result;
};

// Normalize different question formats to a standard format
const normalizeQuestion = (q: any): Question => {
  const rawCorrectAnswer = q.correct ?? q.correctAnswer;
  const correctAnswer = typeof rawCorrectAnswer === 'number'
    ? q.options?.[rawCorrectAnswer]
    : rawCorrectAnswer;

  return {
    question: q.question,
    options: q.options,
    correctAnswer,
    explanation: q.explanation,
  };
};

const matricQuestionSets: Record<string, Record<string, any>> = {
  "12": {
    "Mathematics": grade12Mathematics,
    "Physics": grade12PhysicsQuestions,
    "Chemistry": grade12ChemistryQuestions,
    "Biology": grade12BiologyQuestions,
    "English": grade12EnglishQuestions,
    "History": grade12HistoryQuestions,
    "Geography": grade12GeographyQuestions,
    "Civics": grade12CivicsQuestions,
    "IT": grade12ITQuestions,
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
  const gradeKey = "12"; // Matric is always grade 12
  const subjectData = matricQuestionSets[gradeKey]?.[subject];
  
  if (!subjectData) return [];

  // Flatten the questions object to an array
  const allQuestions = flattenQuestions(subjectData);
  
  // Normalize questions
  let normalized = allQuestions.map(normalizeQuestion);

  // Use seeded random if session code is provided for consistent order across participants
  if (sessionCode) {
    const random = seededRandom(sessionCode);
    return normalized.sort(() => random() - 0.5);
  }

  // Shuffle and return
  return normalized.sort(() => Math.random() - 0.5);
};
