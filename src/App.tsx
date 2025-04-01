import AppRouter from "./router/AppRouter";
import { QuizProvider } from "./context/QuizContext";

import "./App.css";

function App() {
  return (
    <QuizProvider>
      <AppRouter />
    </QuizProvider>
  );
}

export default App;
