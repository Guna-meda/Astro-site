"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Calendar
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
      question: "At what time can we contact you?",
      answer:
      "You can contact us anytime , we will respond as soon as possible."
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
        "A typical astrological consultation depends on the complexity of the questions and the depth of analysis required.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we offer call consultations for astrological readings for clients who cannot visit in person.",
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

</section>


      {/* Contact Section */}
<section className="py-16 relative">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

      {/* Contact Info Card */}
      <motion.div
        ref={infoRef}
        initial={{ x: 50, opacity: 0 }}
        animate={infoInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-primary/10 flex flex-col">
          <h3 className="font-heading text-3xl font-bold mb-8 text-primary-dark">
            Get in Touch
          </h3>

          <div className="space-y-8 flex-grow">
            {/* Phone / WhatsApp */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                <Phone size={22} className="text-primary-dark" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
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
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Chat on WhatsApp (9448225002)
                </a>
                <br/>
                <a
                  href="https://wa.me/918618280659"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  Location
                </h4>
                <p className="text-text-secondary mb-1">
                  No.33, Sri Sadguru Krupa Jyotishyalayam
                  <br />
                  BSK 6th stage, Bangalore, Karnataka, India
                </p>
                <a
                   href="https://maps.app.goo.gl/aNTSdtKcFRUctY8J8"

                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  📍 View on Google Maps
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm">
                <Calendar size={22} className="text-primary-dark" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-1">
                  Business Hours
                </h4>
                <p className="text-text-secondary">
                  Mon – Sun
                  <br />
                  Contact for details
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10">
  <a
    href="tel:+919448225002"
    className="block w-full bg-red-500 hover:bg-red-600 
               text-white font-semibold py-3 px-6 rounded-xl 
               text-center shadow-md transition-all duration-300"
  >
    📞 Call Now
  </a>
</div>

        </div>
      </motion.div>

      {/* Google Map */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={infoInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10 h-[450px] w-full">
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

        
        </div>
      </section>

      
    </motion.div>
  );
}
