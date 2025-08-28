"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, Calendar } from "lucide-react";

// Mock data for different service types
const serviceData = {
  poojas: {
    title: "Traditional Ceremonies",
    description:
      "Our expertly performed ceremonies honor ancient traditions while creating meaningful experiences for your most important life events.",
    image:
      "https://images.pexels.com/photos/9956095/pexels-photo-9956095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subServices: [
      {
        title: "Ceremonies",
        description:
          "Traditional Hindu ceremonies performed with authentic rituals and mantras.",
        price: "Customized package",
        features: [
          "Pre-wedding rituals and consultation",
          "Complete Vedic marriage ceremony",
          "Engagement Ceremony",
          "Griha Pravesh (House Warming)",
          "Naming Ceremony",
          "Gudli Pooja",
          "Deity Installation (Vigraha Prathishtapane)",
          "Thread Ceremony (Upanayana)"
        ],
      },
      {
        title: "Homas",
        description:
          "Auspicious fire rituals to invoke divine blessings for various purposes.",
        price: "Customized package",
        features: [
          "Ganapati , Varahi , Rajashyamala Homa",
          "Navagraha Homa",
          "Mrutyunjaya Homa , rudra Homa",
          "Ayushya Homa ",
          "Sudharshana Homa ",
          "Shri chakra Homa",
          "Kushmanda Homa",
          "Marriage , birthday Homas"
        ],
      },
      {
        title: "Shanti",
        description:
          "Sacred ceremonies to invite positive energy into your new home.",
        price: "Customized package",
        features: [
          "Shashti Poorti Puja (60 yrs)",
          "Bheema Ratha Shanthi (70 yrs)",
          "Sahasra Chandra Darshana Shanti(80 yrs)",
          "Kanakabhishekam",
          "Mruthyunjaya Shanti",
          "Udaka Shanti",
        ],
      },
      {
        title: "Poojas",
        description:
          "Traditional poojas on astrological calculations.",
        price: "Customized package",
        features: [
          "Ganapathi pooja",
          "Navagraha pooja",
          "Mahalakshmi , Lakshmi , Saraswathi pooja",
          "Shree chakra navavarana",
          "Satyanarayana pooja",
        ],
      },
    ],
  },
  astrology: {
    title: "Astrological Consultations",
    description:
      "Our astrological services provide insights and guidance based on the ancient wisdom of Vedic astrology.",
    image:
      "https://images.pexels.com/photos/6669369/pexels-photo-6669369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subServices: [
      {
        title: "Complete Birth Chart Analysis",
        description:
          "Comprehensive analysis of your birth chart revealing your life path, strengths, and challenges.",
        price: "Customized package",
        features: [
          "Detailed natal chart preparation",
          "Analysis of all 12 houses",
          "Planetary positions and aspects",
          "Dasha predictions",
          "Written report (optional)",
        ],
      },
      {
        title: "Compatibility Analysis",
        description:
          "Detailed marriage compatibility analysis for couples based on Vedic astrological principles.",
        price: "Customized package",
        features: [
          "Ashtakoot matching",
          "Mangal dosha analysis",
          "Long-term compatibility factors",
          "Remedial measures if needed",
        ],
      },
      {
        title: "Career Guidance",
        description:
          "Astrological insights into your career path, opportunities, and best professional directions.",
        price: "Customized package",
        features: [
          "Analysis of 10th house",
          "Planetary influences on career",
          "Timing of opportunities",
          "Strengths and challenges",
        ],
      },
      {
        title: "Annual Predictions",
        description:
          "Detailed forecast for the coming year with important dates and transitions.",
        price: "Customized package",
        features: [
          "Transit analysis",
          "Dasha predictions",
          "Monthly breakdown",
          "Remedial measures",
          "Important dates",
        ],
      },
    ],
  },
  vastu: {
    title: "Vastu Consultation",
    description:
      "Expert guidance on Vastu Shastra principles to enhance positive energy in your living spaces.",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subServices: [
      {
        title: "Residential Vastu",
        description:
          "Personalized Vastu analysis for your home to promote harmony and well-being.",
        price: "Customized package",
        features: [
          "Site analysis",
          "Room-by-room evaluation",
          "Remedial suggestions",
        ],
      },
      {
        title: "Vastu Plans for Construction",
        description:
          "Vastu consultation for construction projects to ensure harmony and balance.",
        price: "Customized package",
        features: [
          "Site selection guidance",
          "Energy flow assessment",
          "Employee well-being strategies",
        ],
      },
      {
        title: "Vastu Remedies",
        description:
          "Effective remedies and solutions to correct Vastu doshas.",
        price: "Customized package",
        features: [
          "Placement adjustments",
          "Use of Vastu tools",
          "Auspicious timings for changes",
        ],
      },
    ],
  },
  gems: {
    title: "Gemstone Consultation",
    description:
      "Personalized gemstone recommendations based on your astrological profile.",
    image:
      "https://images.pexels.com/photos/164077/pexels-photo-164077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subServices: [
      {
        title: "Birthstone Recommendations",
        description:
          "Discover the perfect gemstones to enhance your birth chart.",
        price: "Customized package",
        features: [
          "Analysis of natal chart",
          "Identification of key planets",
          "Personalized gemstone suggestions",
        ],
      },
      {
        title: "Gemstone Energizing Rituals",
        description:
          "Rituals to energize and activate the power of your gemstones.",
        price: "Customized package",
        features: [
          "Guided meditation",
          "Mantra chanting",
          "Auspicious timings for rituals",
        ],
      },
      {
        title: "Gemstone Quality Assessment",
        description:
          "Expert evaluation of gemstone quality and authenticity.",
        price: "Customized package",
        features: [
          "In-person or video consultation",
          "Detailed analysis report",
          "Recommendations for purchase",
        ],
      },
    ],
  },
  events: {
    title: "Birthdays and Marriage Days",
    description:
      "Specialized services for celebrating important life events with traditional rituals.",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subServices: [
      {
        title: "Birthday Poojas",
        description:
          "Customized rituals and prayers to bless the birthday individual.",
        price: "Customized package",
        features: [
          "Personalized prayer selection",
          "Homa (fire ritual) arrangements",
          "Auspicious timing consultation",
        ],
      },
      {
        title: "Marriage Poojas",
        description:
          "Traditional ceremonies and rituals to bless the couple on their wedding day.",
        price: "Customized package",
        features: [
          "Pre-wedding rituals",
          "Homa (fire ritual) arrangements",
          "Post-wedding blessings",
        ],
      },
    ],
  },

  // 🔹 Add vastu, poojas, corporate, gems as in your full code
};

export default function ServiceDetailPage({ params }) {
  const { serviceType } = params;
  const [service, setService] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (serviceType && serviceData[serviceType]) {
      setService(serviceData[serviceType]);
    }
  }, [serviceType]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-semibold text-primary-dark mb-4">
            Service not found
          </h2>
          <Link href="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="relative py-20  temple-pattern">
        
        <div className="container-custom relative z-10 py-16">
          <Link
            href="/services"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-primary-dark font-heading mb-4"
          >
            {service.title}
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-lg text-text-primary mb-6">
              {service.description}
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

      {/* Sub-Services List */}
      <section className="py-16 bg-white">
        <div ref={ref} className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading inline-block relative pb-3 mb-4">
              Our Offerings
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore our range of specialized services, each performed with
              authentic traditions and personalized to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-2">
            {service.subServices.map((subService, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 text-primary-dark">
                    {subService.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {subService.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    
                    <div className="flex items-center">
                      <Calendar size={18} className="text-primary mr-2" />
                      <span className="text-text-primary">
                        {subService.price}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium text-text-primary mb-2">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {subService.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle
                            size={18}
                            className="text-primary mr-2 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background-light diya-pattern">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-primary-dark mb-4">
              Interested in {service.title}?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Contact Indu Mouli M to discuss your specific requirements and
              schedule a consultation. Each service is personalized to meet your
              unique needs.
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
