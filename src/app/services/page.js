"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Flame, Star, Home, Gem, Calendar, TrendingUp } from "lucide-react";

function ServiceCard({ icon, title, description, link, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-xl shadow-md border border-orange-100 
                 hover:bg-orange-50 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300 p-6 flex flex-col text-center"
    >
      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-5 rounded-full 
                      bg-gradient-to-br from-orange-100 to-yellow-50 
                      flex items-center justify-center shadow-inner 
                      group-hover:from-orange-200 group-hover:to-yellow-100 
                      transition-colors duration-300">
        <div className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-orange-900 group-hover:text-orange-700 font-heading mb-3 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm flex-grow group-hover:text-gray-700 transition-colors">
        {description}
      </p>

      {/* Link */}
      <Link
        href={link}
        className="mt-6 inline-flex items-center justify-center text-sm font-medium 
                   text-orange-600 hover:text-orange-800 transition-colors"
      >
        View Details →
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

 const services = [
    {
      icon: <Flame size={36} />,
      title: "Poojas & Homams",
      description:
        "Sacred fire rituals and specialized prayers for specific purposes and deities.",
      link: "/services/poojas",
    },
    {
      icon: <Star size={36} />,
      title: "Astrological Consultations",
      description:
        "Personalized horoscope readings, compatibility analysis, and remedies for life path alignment.",
      link: "/services/astrology",
    },
    {
      icon: <Home size={36} />,
      title: "Vastu Consultations",
      description:
        "Expert advice for creating harmonious living and working spaces based on Vastu principles.",
      link: "/services/vastu",
    },
    {
      icon: <Gem size={36} />,
      title: "Gem Recommendations",
      description:
        "Tailored gemstone suggestions based on your birth chart for well-being and prosperity.",
      link: "/services/gems",
    },
    {
      icon: <Calendar size={36} />,
      title: "Birthdays and Marriage Days",
      description:
        "Specialized services for celebrating important life events with traditional rituals.",
      link: "/services/events",
    },
    {
      icon: <TrendingUp size={36} />, // You can change this icon as needed
      title: "Yantras",
      description:
        "Sacred geometric instruments for spiritual energy and divine blessings.",
      link: "/services/yantras",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="relative py-24 pt-8 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-red-600 font-heading mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-700 text-lg"
          >
            Discover our range of traditional services designed to bring
            balance, prosperity, and spiritual well-being to your life.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative">
        <div className="container-custom">
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need a Personalized Consultation?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Connect with <span className="font-semibold">Indu Mouli M</span> to
            discuss your needs and schedule a consultation tailored for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-orange-600 font-semibold shadow hover:bg-gray-100 transition"
            >
              Contact Now
            </Link>
            <a
              href="tel:+919448225002"
              className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Call Us
            </a>
            <a
              href="tel:+918618280659"
              className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Call Alternate
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
