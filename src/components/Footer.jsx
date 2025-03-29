import { motion } from "framer-motion";

const date = new Date().getFullYear();

const Footer = () => (
  <motion.div
    className="relative flex items-center justify-center py-5 z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
  >
    <div className="text-center">
      <p className="text-gray-400 text-sm font-medium">
        © {date}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 font-bold">
          akosikhada
        </span>
      </p>
      <p className="text-gray-500 text-xs mt-1">All Rights Reserved</p>
    </div>
  </motion.div>
);

export default Footer;
