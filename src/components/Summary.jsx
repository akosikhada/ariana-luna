import { useRef } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import PropTypes from "prop-types";

const Summary = ({ questions, answers, onSummarySaved }) => {
  const summaryRef = useRef(null);

  const handleDownloadImage = () => {
    if (summaryRef.current === null) {
      return;
    }

    // Fix for CORS CSS issues with Google Fonts
    const options = {
      cacheBust: true,
      imagePlaceholder:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      fontEmbedCSS: null, // Disable font embedding
      skipFonts: true, // Skip font processing
      filter: (node) => {
        // Skip external stylesheet links that cause CORS issues
        if (
          node.tagName === "LINK" &&
          node.getAttribute("rel") === "stylesheet"
        ) {
          return false;
        }
        return true;
      },
    };

    toPng(summaryRef.current, options)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "our-special-date.png";
        link.href = dataUrl;
        link.click();
        onSummarySaved(); // Call the onSummarySaved function after the image is saved
      })
      .catch((err) => {
        console.error("There was an error saving your date plan:", err);
        // Continue with the flow even if image saving fails
        alert(
          "❤️ Your date plan is perfect, even if we couldn't save the image! ❤️"
        );
        onSummarySaved();
      });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-full text-center"
      ref={summaryRef}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur"></div>
          <h1
            className="relative text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 px-6 py-1"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Our Perfect Date! 🎉
          </h1>
        </div>
        <p
          className="text-gray-300 font-medium mt-4 max-w-xs mx-auto"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          I can&apos;t wait to spend this amazing time with you. Here&apos;s our
          plan:
        </p>

        <div className="flex justify-center mt-4">
          <div className="inline-flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-pink-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.8 + i * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-2 space-y-4 w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {answers.map((answer, index) => (
          <motion.div key={index} variants={item} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"></div>
            <div className="relative bg-gray-800 backdrop-blur-sm text-gray-100 py-4 px-6 rounded-xl shadow-lg border border-purple-500 transform transition-all hover:scale-[1.01] group-hover:border-pink-500">
              <p
                className="font-medium text-sm text-pink-400 mb-1"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {questions[index].question}
              </p>
              <p
                className="font-bold text-lg mt-1 text-gray-200"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {answer}
              </p>
              <div className="absolute top-0 right-0 -mt-2 -mr-2">
                <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"></div>
        <button
          onClick={handleDownloadImage}
          className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-md px-8 py-4 rounded-xl shadow-lg border border-purple-400 transition-all"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <span className="relative z-10 flex items-center justify-center">
            <span className="mr-2">Save Our Special Date</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

Summary.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
    })
  ).isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSummarySaved: PropTypes.func.isRequired,
};

export default Summary;
