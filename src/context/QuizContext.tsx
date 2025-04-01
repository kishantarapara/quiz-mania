import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import type { QuizCategory, QuizAnswer, QuizResult } from "../types/quiz";
import { quizCategories } from "../data/quizData";

interface QuizContextType {
  userName: string;
  setUserName: (name: string) => void;
  selectedCategory: QuizCategory | null;
  selectCategory: (categoryId: string) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: QuizAnswer[];
  setAnswer: (questionId: string, answer: string | null) => void;
  calculateResult: () => QuizResult;
  resetQuiz: () => void;
  isQuizStarted: boolean;
  startQuiz: () => void;
  isQuizFinished: boolean;
  finishQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(
    null
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  // Load state from localStorage on initial render
  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    const savedCategoryId = localStorage.getItem("selectedCategoryId");
    const savedQuizStarted = localStorage.getItem("quizStarted") === "true";
    const savedQuizFinished = localStorage.getItem("quizFinished") === "true";

    if (savedUserName) setUserName(savedUserName);
    if (savedCategoryId) {
      const category =
        quizCategories.find((cat) => cat.id === savedCategoryId) || null;
      setSelectedCategory(category);
    }
    if (savedQuizStarted) setIsQuizStarted(true);
    if (savedQuizFinished) setIsQuizFinished(true);

    // Try to load answers
    const savedAnswers = localStorage.getItem("quizAnswers");
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch (e) {
        console.error("Failed to parse saved answers", e);
      }
    }

    // Try to load current question index
    const savedIndex = localStorage.getItem("currentQuestionIndex");
    if (savedIndex) {
      try {
        setCurrentQuestionIndex(Number.parseInt(savedIndex, 10));
      } catch (e) {
        console.error("Failed to parse saved question index", e);
      }
    }
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("selectedCategoryId", selectedCategory?.id || "");
    localStorage.setItem("quizStarted", isQuizStarted.toString());
    localStorage.setItem("quizFinished", isQuizFinished.toString());
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  }, [
    userName,
    selectedCategory,
    isQuizStarted,
    isQuizFinished,
    answers,
    currentQuestionIndex,
  ]);

  const selectCategory = (categoryId: string) => {
    const category = quizCategories.find((cat) => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const setAnswer = (questionId: string, answer: string | null) => {
    setAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (ans) => ans.questionId === questionId
      );
      if (existingAnswerIndex >= 0) {
        const newAnswers = [...prev];
        newAnswers[existingAnswerIndex] = {
          questionId,
          selectedAnswer: answer || "",
        };
        return newAnswers;
      } else {
        return [...prev, { questionId, selectedAnswer: answer || "" }];
      }
    });
  };

  const calculateResult = (): QuizResult => {
    if (!selectedCategory) {
      return {
        totalQuestions: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        notAnswered: 0,
        score: 0,
      };
    }

    const totalQuestions = selectedCategory.questions.length;
    const correctAnswers = answers.filter((ans) =>
      selectedCategory.questions.find(
        (q) => q.id === ans.questionId && q.correctAnswer === ans.selectedAnswer
      )
    ).length;
    const incorrectAnswers = answers.filter((ans) =>
      selectedCategory.questions.find(
        (q) => q.id === ans.questionId && q.correctAnswer !== ans.selectedAnswer
      )
    ).length;
    const notAnswered = totalQuestions - answers.length;

    const score = Math.round((correctAnswers / totalQuestions) * 100);

    return {
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      notAnswered,
      score,
    };
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsQuizStarted(false);
    setIsQuizFinished(false);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const finishQuiz = () => {
    setIsQuizFinished(true);
  };

  return (
    <QuizContext.Provider
      value={{
        userName,
        setUserName,
        selectedCategory,
        selectCategory,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        answers,
        setAnswer,
        calculateResult,
        resetQuiz,
        isQuizStarted,
        startQuiz,
        isQuizFinished,
        finishQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};
