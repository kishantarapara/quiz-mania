import { useNavigate } from "react-router";
import { useQuizContext } from "../context/QuizContext";
import { Logo } from "../components/Logo";
import ScoreCard from "../components/ScoreCard";

export function Score() {
  const navigate = useNavigate();
  const { userName, calculateResult, resetQuiz } = useQuizContext();
  const result = calculateResult();

  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200 py-4 px-6 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center text-white font-medium">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="text-primary-dark font-medium">{userName}</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <ScoreCard score={result.score} />

        <div className="border border-neutral-200 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-medium text-primary-dark mb-4">
            Out of {result.totalQuestions} question
          </h3>
          <div className="flex justify-center gap-8">
            <div>
              <span className="text-success font-bold text-xl">
                {result.correctAnswers}
              </span>{" "}
              <span className="text-primary-dark">Correct</span>
            </div>
            <div>
              <span className="text-error font-bold text-xl">
                {result.incorrectAnswers}
              </span>{" "}
              <span className="text-primary-dark">Incorrect</span>
            </div>
            <div>
              <span className="text-neutral-400 font-bold text-xl">
                {result.notAnswered}
              </span>{" "}
              <span className="text-primary-dark">Not answered</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleRetakeQuiz}
          className="border border-primary text-primary font-medium py-3 px-8 rounded-md hover:bg-primary/5 transition-colors"
        >
          Retake Quiz
        </button>
      </main>
    </div>
  );
}

export default Score;
