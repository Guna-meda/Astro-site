"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MapPin, Calendar } from "lucide-react";

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
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block relative pb-3 mb-4">
            Contact Us
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Call or visit directly — the easiest way to connect 📿
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-primary/10">
              <h3 className="font-heading text-2xl font-semibold mb-8 text-primary-dark">
                Get in Touch
              </h3>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <Phone size={22} className="text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">
                      Phone / WhatsApp
                    </h4>
                    <a
                      href="tel:+919448225002"
                      className="text-text-secondary hover:text-primary transition-colors block"
                    >
                      +91 9448225002
                    </a>
                    <a
                      href="tel:+918618280659"
                      className="text-text-secondary hover:text-primary transition-colors block"
                    >
                      +91 8618280659
                    </a>
                    <a
                      href="https://wa.me/919448225002"
                      target="_blank"
                      className="text-primary font-medium hover:underline"
                    >
                      Chat on WhatsApp (9448225002)
                    </a>
                    <br/>
                    <a
                      href="https://wa.me/918618280659"
                      target="_blank"
                      className="text-primary font-medium hover:underline"
                    >
                      Chat on WhatsApp (8618280659)
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <MapPin size={22} className="text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">
                      Location
                    </h4>
                    <p className="text-text-secondary">
                      No.33 Si Sadguru Krupa Jyotishyalayam , BSK 6th stage, Bangalore,
                      <br />
                      Karnataka, India
                    </p>
                    <a
  href="https://maps.app.goo.gl/aNTSdtKcFRUctY8J8"

  target="_blank"
  className="text-primary font-medium hover:underline"
>
  View on Google Maps
</a>

                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <Calendar size={22} className="text-primary-dark" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">
                      Business Hours
                    </h4>
                    <p className="text-text-secondary">
                      Mon - Sun
                      <br />
Contact for more details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="tel:+919448225002"
                  className="btn-secondary w-full py-3 text-lg rounded-xl text-center block"
                >
                  📞 Call Now
                </a>
                <a
                  href="tel:+918618280659"
                  className="btn-secondary w-full py-3 text-lg rounded-xl text-center block mt-2"
                >
                  📞 Call Alternate
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
           <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10 h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4179230565946!2d77.53368317484394!3d12.88082671686243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4da4e0531f%3A0x6ff3cbc302e16c5d!2sSadguru%20Krupa%20Jyotishyalayam%20-%20Best%20Purohit%2C%20Astrologer%20and%20Vaastu%20Consultant%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1756616863314!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
