"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ScrollText, Award, Clock, Users } from "lucide-react";

// Reusable Stat Component
const Stat = ({ icon, number, label, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-primary mb-2">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary-dark font-heading">
        {number}
      </h3>
      <p className="text-text-secondary">{label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsRef = useRef(null);
 <div> hi bro y</div>

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Main.jpg"
                alt="Indu Mouli M - Purohit and Astrologer"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-light opacity-10 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary opacity-10 rounded-full z-0"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-heading inline-block relative pb-3 mb-6">
              About Indu Mouli
            </h2>
            <p className="text-text-secondary mb-4">
              With over 35 years of experience as a Purohit, Astrologer, and
              Vastu consultant, dedicated to preserving
              and sharing the sacred traditions of Hindu rituals and Vedic
              sciences.
            </p>
            <p className="text-text-secondary mb-4">
              Through authentic and meticulously performed rituals, accurate
              astrological readings, and harmonious Vastu consultations, we have helped thousands of families and individuals navigate
              life's challenges and celebrate its most significant moments.
            </p>
            <p className="text-text-secondary mb-6">
              Trained in the traditional Gurukul system under the guidance of
              renowned masters, we combine deep knowledge of ancient
              texts with a modern approach to address contemporary concerns.
            </p>

            <div className="flex space-x-4 mb-8">
              <a href="#contact" className="btn-primary">
                Contact Now
              </a>
              <a href="/services" className="btn-secondary">
                Our Services
              </a>
            </div>

            
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
