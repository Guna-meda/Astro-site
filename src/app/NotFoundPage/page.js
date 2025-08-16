"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-20 bg-background-light temple-pattern"
    >
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-dark font-heading mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
              Page Not Found
            </h2>
            <p className="text-text-secondary mb-8">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="btn-primary flex items-center justify-center"
            >
              <Home size={18} className="mr-2" />
              Return Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-text-secondary">
              Looking for spiritual guidance? Visit our{" "}
              <Link href="/services" className="text-primary">
                services page
              </Link>{" "}
              to explore the various ceremonies and consultations we offer.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
