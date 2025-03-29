import { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import Ending from "./components/Ending";
import { motion } from "framer-motion";

const questions = [
  {
    question: "How would you like to spend our perfect day together? 💭",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/first-question.gif",
    options: [
      "A romantic night in BGC 🌃",
      "Cozy coffee date where we can talk for hours ☕",
      "Peaceful walk where we can hold hands 🚶",
      "Candlelit dinner just for us 🍽️",
    ],
  },
  {
    question: "When can I have the honor of your time, my dear? 📅",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/when.gif",
    options: [
      "This Saturday, I've been waiting all week 💫",
      "Sunday, perfect for us to relax together 💞",
      "Monday, I'd love to start my week with you 💌",
      "Any day with you is perfect 💖",
    ],
  },
  {
    question: "When would your beautiful eyes prefer to see me? 🕒",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/second-question.gif",
    options: [
      "In the golden afternoon light 🌤️",
      "Under the romantic evening stars 🌆",
    ],
  },
  {
    question: "Would you like our sweet Ariana to join our special time? 🐶",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/third-question.gif",
    options: [
      "YES, she's part of our love story 💕",
      "Just us two this time, my love 💫",
    ],
  },
  {
    question: "What delicacies would make your heart flutter? 🍽️",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/fourth-question.gif",
    options: [
      "Juicy burgers we can share 🍔",
      "Elegant steak to celebrate our time together 🥩",
      "Pizza that's perfect like you 🍕",
      "Pasta that twirls like my heart does for you 🍝",
    ],
  },
  {
    question:
      "Would you let me treat you to something sweet? Just like you are to me... 🍰",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/fifth-question.gif",
    options: [
      "Cool ice cream, to match how cool you are 🍦",
      "A slice of cake that's as sweet as you 🍰",
      "Donuts, perfect circles like our endless love 🍩",
      "Everything sweet, just like my feelings for you 😍",
    ],
  },
  {
    question:
      "As our perfect day comes to a close, how shall we cherish our final moments? 🌌",
    bgColor: "from-violet-800 to-purple-800",
    gif: "/gif/sixth-question.gif",
    options: [
      "Deep conversations with coffee to remember every word you say ☕",
      "A quiet walk under the stars, with your hand in mine 🚶",
    ],
  },
  {
    question:
      "How shall I treasure the goodbye until I see your beautiful face again? 💌",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/seventh-question.gif",
    options: [
      "A warm hug to keep your scent in my heart 🤗",
      "A tender kiss to remember your sweetness 🥰",
      "Both a hug and kiss, because I can't get enough of you 💫",
      "A special embrace that speaks volumes of my feelings 💕",
    ],
  },
  {
    question:
      "Would you allow me to escort you home with Ariana by our side? 💖",
    bgColor: "from-purple-800 to-violet-800",
    gif: "/gif/last-question.gif",
    options: [
      "Yes, I'd be honored 💫",
      "I'd love nothing more 💞",
      "That would make me so happy 💝",
      "I can't wait 💕",
    ],
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
      alert("Please share your lovely name with me, my dear... ❤️");
    } else if (herName.trim().toUpperCase() === "LOVE") {
      setIsNameSubmitted(true);
    } else if (herName.trim().toUpperCase() === "HAHA") {
      alert("The hint is like my heart - it leads to LOVE, not laughter... 💕");
    } else {
      alert(
        "Sweetheart, I'd cherish calling you 'LOVE' instead... Would you allow me that honor? 💖"
      );
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex flex-col text-white relative overflow-hidden ${
        isNameSubmitted
          ? "bg-gradient-to-br " + questions[currentQuestion].bgColor
          : "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
      }`}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-[10%] bg-gradient-to-br from-transparent via-purple-800/5 to-transparent rounded-full animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-[20%] -right-[5%] w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-float"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-[10%] -left-[5%] w-40 h-40 bg-indigo-600/10 rounded-full blur-xl animate-float"
          style={{ animationDuration: "20s", animationDelay: "2s" }}
        ></div>
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10 px-4 py-8">
        <div className="w-full max-w-md backdrop-blur-sm bg-gray-900 rounded-2xl p-6 shadow-[0_0_25px_rgba(139,92,246,0.3)] border border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-700">
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
      </div>
      <Footer />
    </motion.div>
  );
}

export default App;
