"use client";
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      {/* Diya Loader */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            {/* Diya Base */}
            <motion.path
              d="M30,75 C30,75 50,85 60,85 C70,85 90,75 90,75 L80,90 C80,90 70,95 60,95 C50,95 40,90 40,90 L30,75"
              fill="#E64A19"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            />

            {/* Flame */}
            <motion.path
              d="M60,30 C60,30 45,50 50,65 C55,80 65,80 70,65 C75,50 60,30 60,30"
              fill="#FFC107"
              initial={{ opacity: 0.5, y: 2 }}
              animate={{ opacity: 1, y: -2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              }}
            />
          </g>
        </svg>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="mt-6 text-2xl font-heading text-primary-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        INDU MOULI
      </motion.h2>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
        className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-8"
      />
    </div>
  );
};

export default Loader;
