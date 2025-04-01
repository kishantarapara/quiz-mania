import { BrowserRouter, Routes, Route } from "react-router";
import CategorySelection from "../pages/CategorySelection";
import Quiz from "../pages/Quiz";
import Score from "../pages/Score";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategorySelection />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
