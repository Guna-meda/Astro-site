"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Volume2, VolumeX } from "lucide-react";

const VideoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Load YouTube Iframe API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.document.body.appendChild(tag);
    } else {
      onYouTubeIframeAPIReady();
    }

    // Expose function globally for YT API
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

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
            Take a glimpse
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto font-body">
            “of the sacred programs we have conducted across Bangalore, from
            Kashi to Chennai, and from India to Abu Dhabi.”
          </p>
        </motion.div>

        {/* Video Block */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          {/* YouTube Iframe */}
          <iframe
            id="yt-player"
            src="https://www.youtube.com/embed/tgEzKKcyPZU?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=tgEzKKcyPZU&controls=0&rel=0&modestbranding=1"
            title="Pooja Video"
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media"
          ></iframe>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
