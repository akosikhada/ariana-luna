import React from "react";
import { motion } from "framer-motion";

const Header = ({ herName, setHerName, handleNameSubmit }) => (
  <div className="text-center space-y-8">
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative mx-auto w-full max-w-xs group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur"></div>
        <img
          src="/ariana-luna.jpg"
          alt="My Dogs"
          className="relative w-full max-w-xs mx-auto h-auto rounded-2xl shadow-xl border-2 border-purple-500 hover:scale-[1.02] transition-all duration-500"
        />
        <div className="absolute -bottom-2 -right-2 bg-pink-600 text-white py-1 px-3 rounded-full text-xs font-bold shadow-lg border border-white">
          Our Adventure Awaits! ✨
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-800 backdrop-blur-sm p-4 rounded-xl border border-purple-500 shadow-lg"
    >
      <h2 className="text-xl font-medium text-purple-300 mb-2">
        Would you make my day special?
      </h2>
      <p className="text-gray-300 text-sm italic">
        Every moment with you is a treasure I cherish...
      </p>
    </motion.div>

    <motion.form
      onSubmit={handleNameSubmit}
      className="space-y-5"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur"></div>
        <input
          type="text"
          value={herName}
          onChange={(e) => setHerName(e.target.value)}
          placeholder="How should I call you, my dear?"
          className="relative w-full px-6 py-4 rounded-xl text-white text-center placeholder:text-gray-400 font-medium 
                   bg-gray-800 border-2 border-purple-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
        />
      </div>
      <motion.button
        type="submit"
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-md px-8 py-4 rounded-xl shadow-lg border border-purple-400 hover:shadow-pink-500 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10">Begin Our Journey</span>
        <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      </motion.button>
    </motion.form>

    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <span className="inline-block px-4 py-1 bg-gray-800 rounded-full text-gray-300 text-xs mb-2">
        Secret hint
      </span>
      <motion.h1
        className="text-2xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
        whileHover={{ scale: 1.1 }}
      >
        LOVE
      </motion.h1>
    </motion.div>
  </div>
);

export default Header;
