import React, { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import Ending from "./components/Ending";

const questions = [
  {
    question: "What do you want to do? 🤔",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/first-question.gif",
    options: [
      "Go to BGC 🌃",
      "Coffee date ☕",
      "Walk Trip 🚶",
      "Dinner Date 🍽️",
    ],
  },
  {
    question: "When are you free? 📅",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/when.gif",
    options: ["Saturday", "Sunday", "Monday", "Not sure"],
  },
  {
    question: "What time are you free? 🕒",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/second-question.gif",
    options: ["Afternoon 🌤️", "Evening 🌆"],
  },
  {
    question: "With Ariana? 🐶",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/third-question.gif",
    options: ["YES", "NO"],
  },
  {
    question: "What do you want to eat? 🍔",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/fourth-question.gif",
    options: ["Burgers 🍔", "Steak 🥩", "Pizza 🍕", "Pasta 🍝"],
  },
  {
    question: "Desserts? 🍰",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/fifth-question.gif",
    options: ["Ice Cream 🍦", "Cake 🍰", "Donuts 🍩", "All of the above! 😍"],
  },
  {
    question: "Perfect combination when it's time to go home? 🌌",
    bgColor: "from-violet-800 to-purple-800",
    gif: "/gif/sixth-question.gif",
    options: ["Deep Talks 🗨️ + Coffee ☕", "Deep Talks 🗨️ + Walk Trip 🚶"],
  },
  {
    question: "Way to say goodbye? 💌",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/seventh-question.gif",
    options: [
      "Hug 🤗 + I love you 💌",
      "Kiss 🥰 + I love you 💌",
      "Hug 🤗 + Kiss 🥰 + I love you 💌",
      "Laplap 🥰 + I love you 💌",
    ],
  },
  {
    question: "Hatid mo ako kasama si ariana 😝",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/last-question.gif",
    options: ["Okay", "Okay", "Okay", "Okay"],
  },
];

function App() {
  const [herName, setHerName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isSummarySaved, setIsSummarySaved] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!herName.trim()) {
      alert("Wala ka pang nilalagay");
    } else if (herName.trim().toUpperCase() === "LOVE") {
      setIsNameSubmitted(true);
    } else if (herName.trim().toUpperCase() === "HAHA") {
      alert("Wag mo sundin yung nasa hint HAHAHAHA");
    } else {
      alert("Ganyan gusto mo itawag ko sayo? Ayoko niyan!!!");
    }
  };

  const handleAnswer = (option) => {
    setAnswers((prevAnswers) => [...prevAnswers, option]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsAnswered(true);
    }
  };

  const handleSummarySaved = () => {
    setIsSummarySaved(true);
  };

  return (
    <div
      className={`min-h-screen flex flex-col text-white bg-gradient-to-br ${
        isNameSubmitted
          ? questions[currentQuestion].bgColor
          : "from-[#EE82EE] to-[#800080]"
      }`}
    >
      <div className="flex-grow flex items-center justify-center">
        {!isNameSubmitted ? (
          <Header
            herName={herName}
            setHerName={setHerName}
            handleNameSubmit={handleNameSubmit}
          />
        ) : !isAnswered ? (
          <Question
            herName={herName}
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : !isSummarySaved ? (
          <Summary
            questions={questions}
            answers={answers}
            onSummarySaved={handleSummarySaved}
          />
        ) : (
          <Ending />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
