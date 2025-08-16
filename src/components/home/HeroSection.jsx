"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden temple-pattern"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-secondary opacity-5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/5 w-12 h-12 bg-primary-dark opacity-5 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="container-custom z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark font-heading mb-6"
            variants={itemVariants}
          >
            INDU MOULI M
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={itemVariants}
          >
            <span className="bg-primary-light bg-opacity-20 text-primary-dark px-4 py-1 rounded-full font-medium">
              Purohit
            </span>
            <span className="bg-secondary-light bg-opacity-20 text-primary-dark px-4 py-1 rounded-full font-medium">
              Astrologer
            </span>
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-1 rounded-full font-medium">
              Vastu Consultant
            </span>
          </motion.div>

          <motion.p
            className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Bringing ancient wisdom and sacred traditions to guide your life journey
            through authentic Vedic rituals, precise astrological insights, and harmonious
            Vastu principles.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Now
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.7C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
