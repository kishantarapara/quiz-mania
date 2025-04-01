import type { QuizCategory } from "../types/quiz";

export const quizCategories: QuizCategory[] = [
  {
    id: "js_basics",
    name: "JavaScript Basic",
    questions: [
      {
        id: "q1",
        question:
          "Which method can be used to round a number to the nearest integer in JavaScript?",
        options: [
          "Math.ceil()",
          "Math.floor()",
          "Math.round()",
          "Math.random()",
        ],
        correctAnswer: "Math.round()",
      },
      {
        id: "q2",
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Mozilla"],
        correctAnswer: "Netscape",
      },
      {
        id: "q3",
        question:
          "What is the correct way to declare a variable in JavaScript?",
        options: [
          "var myVar = 5;",
          "variable myVar = 5;",
          "v myVar = 5;",
          "let 5 = myVar;",
        ],
        correctAnswer: "var myVar = 5;",
      },
      {
        id: "q4",
        question:
          "Which operator is used for strict equality comparison in JavaScript?",
        options: ["==", "===", "=", "!="],
        correctAnswer: "===",
      },
      {
        id: "q5",
        question: "What will 'typeof null' return in JavaScript?",
        options: ["null", "undefined", "object", "number"],
        correctAnswer: "object",
      },
      {
        id: "q6",
        question:
          "Which method is used to add an element at the end of an array in JavaScript?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        correctAnswer: "push()",
      },
      {
        id: "q7",
        question: "What is the output of console.log(2 + '2') in JavaScript?",
        options: ["4", "22", "Error", "NaN"],
        correctAnswer: "22",
      },
      {
        id: "q8",
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Object"],
        correctAnswer: "Float",
      },
      {
        id: "q9",
        question:
          "How do you call a function named 'myFunction' in JavaScript?",
        options: [
          "call myFunction();",
          "myFunction();",
          "call function myFunction();",
          "execute myFunction();",
        ],
        correctAnswer: "myFunction();",
      },
      {
        id: "q10",
        question: "What is the correct syntax for a for loop in JavaScript?",
        options: [
          "for (i = 0; i < 5; i++)",
          "for (i < 5; i++)",
          "for i = 0 to 5",
          "loop for i = 0 to 5",
        ],
        correctAnswer: "for (i = 0; i < 5; i++)",
      },
    ],
  },
  {
    id: "react_advance",
    name: "React.js Advance",
    questions: [
      {
        id: "q1",
        question: "What is the virtual DOM in React?",
        options: [
          "A copy of the real DOM",
          "A debugging tool",
          "A type of state management",
          "A database",
        ],
        correctAnswer: "A copy of the real DOM",
      },
      {
        id: "q2",
        question:
          "What hook is used for managing state in functional components?",
        options: ["useEffect", "useState", "useReducer", "useContext"],
        correctAnswer: "useState",
      },
      {
        id: "q3",
        question: "What does React use to optimize rendering performance?",
        options: [
          "Reconciliation",
          "Memoization",
          "Garbage collection",
          "Debouncing",
        ],
        correctAnswer: "Reconciliation",
      },
      {
        id: "q4",
        question: "What is React.memo used for?",
        options: [
          "To memoize function results",
          "To prevent unnecessary re-renders",
          "To create higher-order components",
          "To optimize API calls",
        ],
        correctAnswer: "To prevent unnecessary re-renders",
      },
      {
        id: "q5",
        question: "What is the purpose of useEffect?",
        options: [
          "Handling side effects",
          "Managing state",
          "Creating components",
          "Optimizing performance",
        ],
        correctAnswer: "Handling side effects",
      },
      {
        id: "q6",
        question: "What is the purpose of React context?",
        options: [
          "Global state management",
          "Managing component lifecycle",
          "Handling routing",
          "Optimizing rendering",
        ],
        correctAnswer: "Global state management",
      },
      {
        id: "q7",
        question: "Which library is commonly used for routing in React?",
        options: ["React Router", "Redux", "Axios", "Lodash"],
        correctAnswer: "React Router",
      },
      {
        id: "q8",
        question: "What is Redux primarily used for?",
        options: [
          "State management",
          "Handling API requests",
          "Rendering components",
          "Styling components",
        ],
        correctAnswer: "State management",
      },
      {
        id: "q9",
        question: "What is the purpose of useCallback in React?",
        options: [
          "Caching functions",
          "Handling side effects",
          "Rendering components",
          "Managing styles",
        ],
        correctAnswer: "Caching functions",
      },
      {
        id: "q10",
        question: "Which hook is used for handling side effects in React?",
        options: ["useEffect", "useState", "useMemo", "useReducer"],
        correctAnswer: "useEffect",
      },
    ],
  },
  {
    id: "angular_basics",
    name: "Angular Basic",
    questions: [
      {
        id: "q1",
        question: "What is Angular primarily used for?",
        options: [
          "Backend development",
          "Mobile app development",
          "Frontend development",
          "Database management",
        ],
        correctAnswer: "Frontend development",
      },
      {
        id: "q2",
        question: "Which architectural pattern does Angular follow?",
        options: ["MVC", "MVVM", "MVP", "Singleton"],
        correctAnswer: "MVVM",
      },
      {
        id: "q3",
        question:
          "Which directive is used for two-way data binding in Angular?",
        options: ["ngModel", "ngBind", "ngTwoWay", "ngData"],
        correctAnswer: "ngModel",
      },
      {
        id: "q4",
        question: "What is the purpose of Angular CLI?",
        options: [
          "To create Angular projects and manage dependencies",
          "To handle database operations",
          "To write CSS code",
          "To optimize JavaScript files",
        ],
        correctAnswer: "To create Angular projects and manage dependencies",
      },
      {
        id: "q5",
        question: "Which file is the entry point of an Angular application?",
        options: ["index.html", "main.ts", "app.module.ts", "angular.json"],
        correctAnswer: "main.ts",
      },
      {
        id: "q6",
        question: "What is Dependency Injection in Angular?",
        options: [
          "A design pattern used to implement service management",
          "A method for styling components",
          "A way to write unit tests",
          "A type of database query",
        ],
        correctAnswer: "A design pattern used to implement service management",
      },
      {
        id: "q7",
        question: "Which module is required for routing in Angular?",
        options: [
          "RouterModule",
          "HttpClientModule",
          "FormsModule",
          "CommonModule",
        ],
        correctAnswer: "RouterModule",
      },
      {
        id: "q8",
        question: "What is an Angular component?",
        options: [
          "A function that returns JSX",
          "A TypeScript class with metadata",
          "A global variable",
          "A CSS framework",
        ],
        correctAnswer: "A TypeScript class with metadata",
      },
      {
        id: "q9",
        question: "How do you define an Angular service?",
        options: [
          "Using the @Injectable() decorator",
          "By extending the Service class",
          "Using the @Component() decorator",
          "By calling the new Service() function",
        ],
        correctAnswer: "Using the @Injectable() decorator",
      },
      {
        id: "q10",
        question: "What is the purpose of Angular pipes?",
        options: [
          "To transform data in templates",
          "To manage HTTP requests",
          "To define routes",
          "To inject dependencies",
        ],
        correctAnswer: "To transform data in templates",
      },
    ],
  },
  {
    id: "flutter",
    name: "Flutter",
    questions: [
      {
        id: "q1",
        question: "What language is used for Flutter development?",
        options: ["JavaScript", "Dart", "Python", "Swift"],
        correctAnswer: "Dart",
      },
      {
        id: "q2",
        question: "Which company developed Flutter?",
        options: ["Apple", "Facebook", "Google", "Microsoft"],
        correctAnswer: "Google",
      },
      {
        id: "q3",
        question: "What is the widget tree in Flutter?",
        options: [
          "A collection of JavaScript functions",
          "A hierarchical representation of UI components",
          "A debugging tool",
          "A database schema",
        ],
        correctAnswer: "A hierarchical representation of UI components",
      },
      {
        id: "q4",
        question: "Which command is used to create a new Flutter project?",
        options: [
          "flutter new",
          "flutter create",
          "flutter init",
          "flutter generate",
        ],
        correctAnswer: "flutter create",
      },
      {
        id: "q5",
        question: "What is the purpose of the pubspec.yaml file in Flutter?",
        options: [
          "To define the Flutter project's dependencies",
          "To manage routing",
          "To configure state management",
          "To store database queries",
        ],
        correctAnswer: "To define the Flutter project's dependencies",
      },
      {
        id: "q6",
        question: "What is a stateless widget in Flutter?",
        options: [
          "A widget that does not change state once built",
          "A widget that manages its own state",
          "A widget that has no UI",
          "A widget that only handles API calls",
        ],
        correctAnswer: "A widget that does not change state once built",
      },
      {
        id: "q7",
        question:
          "Which widget is used to create a scrollable list in Flutter?",
        options: ["ListView", "Column", "Row", "Stack"],
        correctAnswer: "ListView",
      },
      {
        id: "q8",
        question: "What is the function of the setState() method in Flutter?",
        options: [
          "To rebuild the UI with updated state",
          "To navigate to a new screen",
          "To fetch data from an API",
          "To define a new route",
        ],
        correctAnswer: "To rebuild the UI with updated state",
      },
      {
        id: "q9",
        question:
          "Which package is commonly used for state management in Flutter?",
        options: ["Redux", "Provider", "MobX", "Vuex"],
        correctAnswer: "Provider",
      },
      {
        id: "q10",
        question: "How do you navigate between screens in Flutter?",
        options: [
          "Using the Navigator class",
          "Using the Router module",
          "Using setState()",
          "Using a database query",
        ],
        correctAnswer: "Using the Navigator class",
      },
    ],
  },
];
