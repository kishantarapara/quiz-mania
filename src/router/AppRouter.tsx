import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import CategorySelection from "../pages/WelcomeScreen";
import Quiz from "../pages/Quiz";
import Score from "../pages/Score";

// Protected route component to ensure quiz is started
function ProtectedQuizRoute({ children }: { children: React.ReactNode }) {
  const isQuizStarted = localStorage.getItem("quizStarted") === "true";

  if (!isQuizStarted) {
    return <Navigate to="/" replace />;
  }

  return children;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategorySelection />} />
        <Route
          path="/quiz"
          element={
            <ProtectedQuizRoute>
              <Quiz />
            </ProtectedQuizRoute>
          }
        />
        <Route
          path="/score"
          element={
            <ProtectedQuizRoute>
              <Score />
            </ProtectedQuizRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
