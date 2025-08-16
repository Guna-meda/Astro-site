"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star
} from "lucide-react";

export default function ContactPage() {
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // FAQ data
  const faqs = [
    {
      question: "How far in advance should I book for a ceremony?",
      answer:
        "For important ceremonies like weddings, we recommend booking at least 2-3 months in advance. For other ceremonies, 2-4 weeks notice is generally sufficient, though this can vary during busy seasons.",
    },
    {
      question: "Do you perform ceremonies outside your city?",
      answer:
        "Yes, we are available to travel domestically and internationally for ceremonies. Additional travel costs may apply depending on the location and duration of stay.",
    },
    {
      question: "What items do I need to arrange for the ceremony?",
      answer:
        "Once you book a ceremony, we'll provide you with a detailed list of items needed. We can also arrange for these items at an additional cost if you prefer.",
    },
    {
      question: "How long does an astrological consultation usually take?",
      answer:
        "A typical astrological consultation takes between 45-90 minutes depending on the complexity of the questions and the depth of analysis required.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we offer video consultations for both astrological readings and Vastu consultations for clients who cannot visit in person.",
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
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-text-secondary mb-6">
              Reach out to us to schedule a consultation or to inquire about our
              services. We're here to help you with all your spiritual needs.
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ x: -50, opacity: 0 }}
              animate={
                formInView
                  ? { x: 0, opacity: 1 }
                  : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-primary-dark font-heading mb-6">
                  Send a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-text-primary mb-2 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="input-field"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-text-primary mb-2 font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-text-primary mb-2 font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="input-field"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-text-primary mb-2 font-medium"
                      >
                        Service of Interest
                      </label>
                      <select id="service" className="input-field">
                        <option value="">Select a service</option>
                        <option value="ceremonies">Ceremonies</option>
                        <option value="astrology">
                          Astrological Consultation
                        </option>
                        <option value="vastu">Vastu Consultation</option>
                        <option value="poojas">Poojas & Homams</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="gems">Gem Recommendations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text-primary mb-2 font-medium"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="input-field"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-text-primary mb-2 font-medium"
                    >
                      Preferred Date (if applicable)
                    </label>
                    <input type="date" id="preferred-date" className="input-field" />
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" id="terms" className="mt-1 mr-2" />
                    <label
                      htmlFor="terms"
                      className="text-text-secondary text-sm"
                    >
                      I agree to the privacy policy and consent to being
                      contacted regarding my inquiry.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ x: 50, opacity: 0 }}
              animate={
                infoInView
                  ? { x: 0, opacity: 1 }
                  : { x: 50, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-2xl font-semibold text-primary-dark font-heading mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-text-primary mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-text-secondary hover:text-primary transition-colors block"
                      >
                        +91 98765 43210
                      </a>
                      <a
                        href="tel:+919876543211"
                        className="text-text-secondary hover:text-primary transition-colors block"
                      >
                        +91 98765 43211
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-text-primary mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@indumoulipurohit.com"
                        className="text-text-secondary hover:text-primary transition-colors block"
                      >
                        contact@indumoulipurohit.com
                      </a>
                      <a
                        href="mailto:bookings@indumoulipurohit.com"
                        className="text-text-secondary hover:text-primary transition-colors block"
                      >
                        bookings@indumoulipurohit.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-text-primary mb-1">
                        Address
                      </h3>
                      <p className="text-text-secondary">
                        123 Temple Street, Jayanagar,
                        <br />
                        Bangalore, Karnataka - 560041,
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-text-primary mb-1">
                        Business Hours
                      </h3>
                      <p className="text-text-secondary">
                        Monday - Saturday: 9:00 AM to 7:00 PM
                        <br />
                        Sunday: 10:00 AM to 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="bg-primary-light bg-opacity-10 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-medium text-primary-dark mb-3 font-heading">
                    Quick Bookings
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Need to schedule a service urgently? Call us directly for
                    immediate assistance.
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="btn-primary w-full block text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
            {/* Replace with Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-text-secondary">Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-background-light diya-pattern">
        <div ref={faqRef} className="container-custom">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={
              faqInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
            }
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading inline-block relative pb-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Find answers to common questions about our services, booking
              process, and preparations.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    faqInView
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-medium text-text-primary">
                        {faq.question}
                      </h3>
                      <span className="ml-4 flex-shrink-0 text-primary transition-transform duration-200 group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-text-secondary">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={faqInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-text-secondary mb-6">
              Don't see your question here? Contact us directly and we'll be
              happy to help.
            </p>
            <button className="btn-primary">Ask a Question</button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading inline-block relative pb-3 mb-8 text-center">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-background-light rounded-lg p-6 shadow-md"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-secondary fill-current"
                    />
                  ))}
                </div>
                <p className="text-text-secondary mb-4 italic">
                  "Indu Mouli conducted our daughter's naming ceremony with such
                  precision and care. The explanation of each ritual made it
                  meaningful for everyone present."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-light rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-medium text-text-primary">
                      Priya & Rahul
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Naming Ceremony
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
