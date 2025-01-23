import React, { useRef } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";

const Summary = ({ questions, answers, onSummarySaved }) => {
  const summaryRef = useRef(null);

  const handleDownloadImage = () => {
    if (summaryRef.current === null) {
      return;
    }

    toPng(summaryRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "summary.png";
        link.href = dataUrl;
        link.click();
        onSummarySaved(); // Call the onSummarySaved function after the image is saved
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen text-center p-4"
      ref={summaryRef}
    >
      <h1 className="text-4xl font-bold mb-6 text-white">Yay! 🎉</h1>
      <p className="text-xl text-white font-semibold">
        Click the save image button below to download your summary.
      </p>
      <div className="mt-4 space-y-4 text-lg text-white font-semibold w-full max-w-md">
        {answers.map((answer, index) => (
          <div
            key={index}
            className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-lg"
          >
            <p>{questions[index].question}</p>
            <p className="text-black">{answer}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleDownloadImage}
        className="mt-6 bg-purple-500 text-white font-semibold text-md px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition"
      >
        Save Image
      </button>
    </motion.div>
  );
};

export default Summary;
