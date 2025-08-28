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
  const [statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

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
                src="https://images.pexels.com/photos/6044219/pexels-photo-6044219.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
              With over 15 years of experience as a Purohit, Astrologer, and
              Vastu consultant, Indu Mouli M has been dedicated to preserving
              and sharing the sacred traditions of Hindu rituals and Vedic
              sciences.
            </p>
            <p className="text-text-secondary mb-4">
              Through authentic and meticulously performed rituals, accurate
              astrological readings, and harmonious Vastu consultations, Indu
              Mouli has helped thousands of families and individuals navigate
              life's challenges and celebrate its most significant moments.
            </p>
            <p className="text-text-secondary mb-6">
              Trained in the traditional Gurukul system under the guidance of
              renowned masters, Indu Mouli combines deep knowledge of ancient
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

            {/* Credentials / Achievements */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <ScrollText size={20} className="text-primary" />
                </div>
                <span className="text-text-primary font-medium">
                  Certified Vedic Scholar
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <Award size={20} className="text-primary" />
                </div>
                <span className="text-text-primary font-medium">
                  Award-Winning Astrologer
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 py-10 border-t border-b border-gray-100"
        >
          {statsInView && (
            <>
              <Stat
                icon={<Clock size={32} />}
                number="15+"
                label="Years Experience"
                delay={0.1}
              />
              <Stat
                icon={<Users size={32} />}
                number="5000+"
                label="Satisfied Clients"
                delay={0.2}
              />
              <Stat
                icon={<ScrollText size={32} />}
                number="1000+"
                label="Ceremonies Performed"
                delay={0.3}
              />
              <Stat
                icon={<Award size={32} />}
                number="25+"
                label="Awards & Recognition"
                delay={0.4}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
