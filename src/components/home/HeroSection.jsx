"use client";
import React from "react";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center mt-12 py-16 sm:py-16 md:py-20 px-4 overflow-hidden  bg-gradient-to-br from-orange-50 via-white to-red-50 mt-0">

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-orange-600 bg-clip-text text-transparent relative z-10 leading-tight mb-2 drop-shadow-lg pt-6">
        M INDU MOULI
      </h1>

      {/* Professional Title */}
      <div className="text-lg sm:text-xl md:text-2xl text-orange-700 font-semibold mb-6 relative z-10 drop-shadow-md">
        Vedic Scholar & Spiritual Guide
      </div>

      {/* Subtext */}
      <p className="mt-2 max-w-sm sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg text-gray-800 relative z-10 px-2 leading-relaxed font-medium drop-shadow-sm">
        Bringing ancient wisdom and sacred traditions to guide your life journey
        through authentic Vedic rituals, precise astrological insights, and
        harmonious Vastu principles.
      </p>

      {/* Services Tags - More Subtle */}
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center relative z-10 max-w-md">
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm border-2 border-red-300/50 rounded-full text-red-800 text-xs sm:text-sm font-semibold shadow-lg">
          Purohit Services
        </span>
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm border-2 border-yellow-300/50 rounded-full text-orange-800 text-xs sm:text-sm font-semibold shadow-lg">
          Astrology Readings
        </span>
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/90 backdrop-blur-sm border-2 border-orange-300/50 rounded-full text-red-800 text-xs sm:text-sm font-semibold shadow-lg">
          Vastu Consultation
        </span>
      </div>

      {/* Call-to-Action Buttons */}
     <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10 w-full max-w-md">
  
  <Link href="/services" passHref>
    <button
      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                 bg-gradient-to-r from-red-500 via-red-600 to-red-700 
                 text-white rounded-xl shadow-xl 
                 hover:from-red-600 hover:via-red-700 hover:to-red-800 
                 transition-all duration-300 text-sm sm:text-base font-bold 
                 transform hover:scale-105 border-2 border-red-500/30"
    >
      Explore Services
    </button>
  </Link>

  <Link href="/contact" passHref>
    <button
      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                 bg-gradient-to-r from-yellow-500 to-orange-500 
                 text-white rounded-xl shadow-xl 
                 hover:shadow-2xl hover:from-yellow-600 hover:to-orange-600 
                 transition-all duration-300 text-sm sm:text-base font-bold 
                 transform hover:scale-105 border-2 border-yellow-400/30"
    >
      Contact Now
    </button>
  </Link>

</div>

<div className="mt-8 sm:mt-10 text-xs sm:text-sm text-gray-500 relative z-10">
        <div className="flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>35+ Years Experience</span>
          <span className="mx-2">•</span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Trusted by 1000+ Families</span>
        </div>
      </div>
      
    
    </section>
  );
}