"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Flame, Star, Home, Calendar, Users, Gem } from "lucide-react";

// Service Card Component
const ServiceCard = ({ icon, title, description, link, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="w-16 h-16 bg-primary-light bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="font-heading text-xl font-semibold mb-3 text-primary-dark">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 flex-grow">{description}</p>
        <Link
          href={link}
          className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors"
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
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 
              0 01-1.414-1.414L12.586 11H5a1 1 
              0 110-2h7.586l-2.293-2.293a1 1 
              0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
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
      title: "Ceremonies",
      description:
        "Traditional ceremonies for life events including marriages, engagements, house warmings, and more.",
      link: "/services/ceremonies",
    },
    {
      icon: <Star size={32} />,
      title: "Astrological Consultations",
      description:
        "Personalized horoscope readings, compatibility analysis, and remedial measures for your life path.",
      link: "/services/astrology",
    },
    {
      icon: <Home size={32} />,
      title: "Vastu Consultations",
      description:
        "Expert advice on creating harmonious living and working spaces according to ancient Vastu principles.",
      link: "/services/vastu",
    },
    {
      icon: <Calendar size={32} />,
      title: "Poojas & Homams",
      description:
        "Sacred fire rituals and specialized prayers for specific purposes and deities.",
      link: "/services/poojas",
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Events",
      description:
        "Auspicious ceremonies for office inaugurations, business launches, and corporate milestones.",
      link: "/services/corporate",
    },
    {
      icon: <Gem size={32} />,
      title: "Gem Recommendations",
      description:
        "Personalized gemstone suggestions based on your birth chart for enhanced well-being and success.",
      link: "/services/gems",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading inline-block relative pb-3 mb-4">
            Our Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover our comprehensive range of traditional services designed to
            bring balance, prosperity, and spiritual well-being to your life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
