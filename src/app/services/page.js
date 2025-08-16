"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Flame,
  Star,
  Home,
  Calendar,
  Users,
  Gem,
} from "lucide-react";

function ServiceCard({ icon, title, description, link, index }) {
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
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Flame size={32} />,
      title: "Ceremonies",
      description:
        "Traditional ceremonies for life events including marriages, engagements, house warmings, naming ceremonies, and other important life milestones.",
      link: "/services/ceremonies",
    },
    {
      icon: <Star size={32} />,
      title: "Astrological Consultations",
      description:
        "Personalized horoscope readings, compatibility analysis, career guidance, and remedial measures for your life path based on Vedic astrology.",
      link: "/services/astrology",
    },
    {
      icon: <Home size={32} />,
      title: "Vastu Consultations",
      description:
        "Expert advice on creating harmonious living and working spaces according to ancient Vastu principles for health, wealth, and prosperity.",
      link: "/services/vastu",
    },
    {
      icon: <Calendar size={32} />,
      title: "Poojas & Homams",
      description:
        "Sacred fire rituals and specialized prayers for specific purposes and deities, including Ganapathi Homam, Navagraha Homam, and Mrityunjaya Homam.",
      link: "/services/poojas",
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Events",
      description:
        "Auspicious ceremonies for office inaugurations, business launches, and corporate milestones to ensure prosperity and success in business ventures.",
      link: "/services/corporate",
    },
    {
      icon: <Gem size={32} />,
      title: "Gem Recommendations",
      description:
        "Personalized gemstone suggestions based on your birth chart for enhanced well-being, career growth, relationship harmony, and financial success.",
      link: "/services/gems",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="relative py-20 bg-background-light temple-pattern">
        <div className="container-custom text-center py-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark font-heading mb-4"
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-text-secondary mb-6">
              Discover our comprehensive range of traditional services designed
              to bring balance, prosperity, and spiritual well-being to your
              life.
            </p>
          </motion.div>
        </div>
        {/* Decorative bottom curve */}
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

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading inline-block relative pb-3 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Each service is performed with authentic Vedic traditions and
              personalized to meet your specific needs. Click on any service to
              learn more about our offerings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background-light diya-pattern">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-primary-dark mb-4">
              Need a Personalized Consultation?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Connect with Indu Mouli M to discuss your specific requirements
              and schedule a consultation that's tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Now
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
