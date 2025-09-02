"use client";

import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoSection from "@/components/home/VideoSection";
import YouTubeChannelSection from "@/components/home/YouTubeChannelSection";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <GallerySection />
      <AboutSection />
      <YouTubeChannelSection />
      <ContactSection />
    </motion.div>
  );
}
