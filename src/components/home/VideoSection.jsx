"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

const VideoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-background-light bg-temple-pattern">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading + Text */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary relative inline-block pb-3 mb-4 after:content-[''] after:absolute after:w-16 after:h-[3px] after:bg-primary after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Watch Our Introduction
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto font-body">
            Get to know more about our services and philosophy in this brief
            introduction video.
          </p>
        </motion.div>

        {/* Video Thumbnail with Play Button */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-full group cursor-pointer">
            {/* Thumbnail image */}
            <img
              src="https://images.pexels.com/photos/5977338/pexels-photo-5977338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Introduction Video Thumbnail"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-300 shadow-xl">
                <Play size={36} className="text-white ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
