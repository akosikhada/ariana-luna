import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Question = ({ herName, question, handleAnswer }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Determine if we need single column or two columns based on number of options and length
  const useSingleColumn =
    question.options.some((option) => option.length > 25) ||
    question.options.length === 2;

  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full">
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md opacity-80"></div>
        <h1 className="relative text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 px-6 py-1">
          Hi {herName} ❤️
        </h1>
      </motion.div>

      <motion.div
        className="relative group w-full"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-80"></div>
        <div className="relative rounded-[16px] overflow-hidden shadow-xl border border-purple-400/40">
          <motion.img
            src={question.gif}
            alt="GIF"
            className="w-full h-auto rounded-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 rounded-xl ring-1 ring-purple-400/40 shadow-inner"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[18px] blur-md opacity-80"></div>
          <div className="relative text-xl font-semibold text-center px-5 py-3 bg-[#1e2030]/95 backdrop-blur-sm rounded-[16px] border border-purple-400/40 shadow-lg">
            <span className="block text-purple-300 mb-1 text-sm font-normal">
              Question for my special one
            </span>
            {question.question}
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`grid ${
          useSingleColumn ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        } gap-4 w-full`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {question.options.map((option, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative group mt-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[18px] blur-md opacity-80"></div>
            <motion.button
              onClick={() => handleAnswer(option)}
              className="relative w-full h-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center min-h-[76px] w-full h-full bg-[#1e2030]/95 backdrop-blur-sm text-gray-100 font-semibold py-4 px-6 rounded-[1.5rem] border border-purple-400/40 shadow-lg transition-all">
                <span className="text-center relative">
                  {option}
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

Question.propTypes = {
  herName: PropTypes.string.isRequired,
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    gif: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Question;
