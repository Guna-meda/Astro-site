"use client";

import { motion } from "framer-motion";

// Small client-only wrapper so page.js / [slug]/page.js can stay Server
// Components (needed for metadata + JSON-LD + crawlable initial HTML)
// while still getting the same fade-in used across the rest of the site.
export default function BlogPageAnimator({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
