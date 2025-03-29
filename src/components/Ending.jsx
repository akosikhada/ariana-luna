import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Ending = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center">
      {showMessage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            className="relative"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur"></div>
            <h1 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 px-6 py-1">
              See you soon! 😊
            </h1>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl border border-purple-500 group"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"></div>
            <div className="relative">
              <img
                src="/gif/ending.gif"
                alt="Cute Bear See You Soon"
                className="w-full max-w-xs h-auto rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-2 ring-purple-500 shadow-inner"></div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"></div>
            <p className="relative bg-gray-800 text-gray-300 font-medium px-6 py-3 max-w-xs mx-auto rounded-xl border border-purple-500">
              Your date is saved! Looking forward to our time together ❤️
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"></div>
          <h1 className="relative text-2xl md:text-3xl font-bold text-gray-200 flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl border border-purple-500">
            <span className="inline-block w-4 h-4 bg-purple-500 rounded-full animate-pulse"></span>
            Saving your image...
          </h1>
        </motion.div>
      )}
    </div>
  );
};

export default Ending;
