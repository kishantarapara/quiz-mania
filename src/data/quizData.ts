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
          "This method rounds a number up to the nearest integer, regardless of its decimal part.",
          "This method rounds a number down to the nearest integer, ignoring the decimal part.",
          "This method rounds a number to the nearest integer based on its decimal value.",
          "This method generates a random number between 0 and 1, without rounding.",
        ],
        correctAnswer:
          "This method rounds a number to the nearest integer based on its decimal value.",
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
    id: "angular_basics",
    name: "Angular Basic",
    questions: [
      {
        id: "q1",
        question: "What is Angular?",
        options: [
          "A JavaScript library",
          "A JavaScript framework",
          "A CSS framework",
          "A database system",
        ],
        correctAnswer: "A JavaScript framework",
      },
      {
        id: "q2",
        question: "Which company maintains Angular?",
        options: ["Facebook", "Google", "Microsoft", "Amazon"],
        correctAnswer: "Google",
      },
      // More questions would be added here
    ],
  },
  {
    id: "react_advance",
    name: "React.js Advance",
    questions: [
      {
        id: "q1",
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A JavaScript framework",
          "A CSS framework",
          "A database system",
        ],
        correctAnswer: "A JavaScript library for building user interfaces",
      },
      // More questions would be added here
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
      // More questions would be added here
    ],
  },
];
