import React, { useEffect, useState } from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      {showMessage ? (
        <>
          <h1 className="text-4xl font-bold mb-6 text-white">
            See you soon! 😊
          </h1>
          <img
            src="/gif/ending.gif"
            alt="Cute Bear See You Soon"
            className="w-72 h-fit rounded-lg mb-6"
          />
        </>
      ) : (
        <h1 className="text-4xl font-bold mb-6 text-white">
          Saving your image...
        </h1>
      )}
    </div>
  );
};

export default Ending;
