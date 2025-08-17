"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Flame, Star, Home, Gem } from "lucide-react";

// Service Card Component
const ServiceCard = ({ icon, title, description, link, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <div className="text-orange-500">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Learn More */}
      <Link
        href={link}
        className="inline-flex items-center text-orange-500 font-medium hover:text-orange-700 transition-colors"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 
              0 010 1.414l-4 4a1 1 
              0 01-1.414-1.414L12.586 11H5a1 1 
              0 110-2h7.586l-2.293-2.293a1 1 
              0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

// Services Section
const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Flame size={32} />,
      title: "Poojas & Homams",
      description:
        "Sacred fire rituals and specialized prayers for specific purposes and deities.",
      link: "/services/poojas",
    },
    {
      icon: <Star size={32} />,
      title: "Astrological Consultations",
      description:
        "Personalized horoscope readings, compatibility analysis, and remedies for your life path.",
      link: "/services/astrology",
    },
    {
      icon: <Home size={32} />,
      title: "Vastu Consultations",
      description:
        "Expert advice on creating harmonious living and working spaces based on ancient Vastu principles.",
      link: "/services/vastu",
    },
   
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-orange-50 to-white relative">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-heading font-bold text-red-600 mb-4 relative inline-block">
            Our Services
            <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-orange-500 rounded-full -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our traditional services designed to bring balance,
            prosperity, and spiritual well-being to your life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
