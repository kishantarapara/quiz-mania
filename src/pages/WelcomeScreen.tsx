"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../context/QuizContext";
import { Logo } from "../components/Logo";
import { quizCategories } from "../data/quizData";
import QuizRules from "../components/QuizRules";
import TickMark from "../components/TickMark";

export function WelcomeScreen() {
  const navigate = useNavigate();
  const { userName, setUserName, selectCategory, selectedCategory, startQuiz } =
    useQuizContext();

  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const handleStartQuiz = () => {
    let hasError = false;

    if (!userName.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (!selectedCategory) {
      setCategoryError(true);
      hasError = true;
    } else {
      setCategoryError(false);
    }

    if (!hasError) {
      startQuiz();
      navigate("/quiz");
    }
  };

  return (
    <div className="min-h-screen bg-primary-foreground">
      <header className="border-b border-neutral-200 py-4 px-6">
        <Logo />
      </header>

      <main className="max-w-xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center flex gap-3 justify-center flex-col md:flex-row">
          <span className="text-primary-dark">Welcome to </span>
          <Logo large />
        </h1>

        <div className="bg-primary-light my-6 p-2 rounded-md">
          <p className="text-center text-primary-dark">
            Please read all the rules about this quiz before you start.
            <button
              onClick={() => setShowRules(true)}
              className="block mx-auto text-primary font-medium mt-1 hover:underline"
            >
              Quiz rules
            </button>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block mb-2 text-primary-dark">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Full name"
              className={`w-full p-4 border ${
                nameError ? "border-red-500" : "border-neutral-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30`}
            />
          </div>

          <div>
            <p className="mb-2 text-primary-dark">
              Please select topic to continue
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizCategories.map((category) => (
                <CategoryOption
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  selectedId={selectedCategory?.id}
                  onSelect={() => selectCategory(category.id)}
                />
              ))}
            </div>
            {categoryError && (
              <p className="text-red-500 mt-1">Please select a category</p>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={handleStartQuiz}
              className="bg-primary text-white font-medium py-3 px-8 rounded-md hover:bg-primary/90 transition-colors mx-auto cursor-pointer"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </main>

      {showRules && <QuizRules onClose={() => setShowRules(false)} />}
    </div>
  );
}

interface CategoryOptionProps {
  id: string;
  name: string;
  selectedId: string | undefined;
  onSelect: (id: string) => void;
}

function CategoryOption({
  id,
  name,
  selectedId,
  onSelect,
}: CategoryOptionProps) {
  const isSelected = id === selectedId;

  return (
    <div
      onClick={() => onSelect(id)}
      className={`border rounded-md p-4 flex items-center cursor-pointer transition-colors ${
        isSelected
          ? "border-primary"
          : "border-neutral-300 hover:border-neutral-400"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
          isSelected ? "border-primary bg-primary" : "border-neutral-400"
        }`}
      >
        {isSelected && <TickMark />}
      </div>
      <span className="text-primary-dark">{name}</span>
    </div>
  );
}

export default WelcomeScreen;
