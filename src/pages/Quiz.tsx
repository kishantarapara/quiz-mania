"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../context/QuizContext";
import { Logo } from "../components/Logo";
import SelectOptions from "../components/SelectOptions";

export function Quiz() {
  const navigate = useNavigate();
  const {
    selectedCategory,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setAnswer,
    answers,
    finishQuiz,
  } = useQuizContext();

  const [timeLeft, setTimeLeft] = useState(10);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const question = selectedCategory?.questions[currentQuestionIndex];
  const totalQuestions = selectedCategory?.questions.length || 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (question) {
      setAnswer(question.id, option);
    }
  };

  const handleNextQuestion = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      if (isLastQuestion) {
        finishQuiz();
        navigate("/score");
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 2000);
  }, [
    currentQuestionIndex,
    finishQuiz,
    isLastQuestion,
    navigate,
    setCurrentQuestionIndex,
  ]);

  const handleSkipQuestion = () => {
    if (question && !selectedOption) {
      setAnswer(question.id, null);
    }
    handleNextQuestion();
  };

  const handleExitQuiz = () => {
    navigate("/");
  };

  // Initialize timer
  useEffect(() => {
    if (!question) return;

    // Reset timer and selected option when question changes
    setTimeLeft(10);

    // Check if there's an existing answer
    const existingAnswer = answers.find((a) => a.questionId === question.id);
    setSelectedOption(existingAnswer?.selectedAnswer || null);

    // Start timer
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up, move to next question
          if (timerRef.current) clearInterval(timerRef.current);
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentQuestionIndex, question, answers, handleNextQuestion]);

  if (!question) return null;

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    return `0:${seconds.toString().padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200 py-4 px-6 flex justify-between items-center">
        <Logo />
        <button
          onClick={handleExitQuiz}
          className="text-primary border border-primary rounded-md px-6 py-2 font-medium hover:bg-primary/5 transition-colors"
        >
          Exit Quiz
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl font-bold text-primary">
            {currentQuestionIndex + 1}{" "}
            <span className="text-primary-dark">/{totalQuestions}</span>
          </div>
          <div className="bg-secondary px-4 py-2 rounded-md text-lg font-medium">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-neutral-200 rounded-full mb-12">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-2">
            {currentQuestionIndex + 1}. {question.question}
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          {question.options.map((option) => (
            <SelectOptions
              key={option}
              id={option}
              name={option}
              onSelect={() => handleOptionSelect(option)}
              selectedId={selectedOption ?? null}
              // Disable option selection when showing answer
              disabled={showAnswer}
              isCorrect={showAnswer && question.correctAnswer === option}
              isWrong={
                showAnswer &&
                question.correctAnswer !== option &&
                option === selectedOption
              }
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleNextQuestion}
            className="bg-primary text-white font-medium py-3 px-12 rounded-md hover:bg-primary/90 transition-colors"
          >
            {isLastQuestion ? "Finish" : "Next"}
          </button>
          <button
            onClick={handleSkipQuestion}
            className="text-neutral-500 font-medium hover:text-neutral-700 transition-colors"
          >
            Skip this question
          </button>
        </div>
      </main>
    </div>
  );
}

export default Quiz;
