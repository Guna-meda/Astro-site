"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-background-light diya-pattern">
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
            Contact Us
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Reach out to us to schedule a consultation or to inquire about our
            services. We're here to help you with all your spiritual needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-primary-dark">
                Send a Message
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-primary mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-primary mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-text-primary mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-field"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-text-primary mb-1"
                    >
                      Service
                    </label>
                    <select id="service" className="input-field">
                      <option value="">Select a service</option>
                      <option value="ceremonies">Ceremonies</option>
                      <option value="astrology">
                        Astrological Consultation
                      </option>
                      <option value="vastu">Vastu Consultation</option>
                      <option value="poojas">Poojas & Homams</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-primary mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="input-field"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-primary-dark">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+919876543210"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@indumoulipurohit.com"
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      contact@indumoulipurohit.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">
                      Location
                    </h4>
                    <p className="text-text-secondary">
                      123 Temple Street, Bangalore,
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Calendar size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">
                      Business Hours
                    </h4>
                    <p className="text-text-secondary">
                      Monday - Saturday: 9:00 AM to 7:00 PM
                      <br />
                      Sunday: 10:00 AM to 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="btn-secondary w-full">
                  Book an Appointment
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
