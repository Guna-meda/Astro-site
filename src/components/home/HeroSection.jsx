"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-[#fff9f3] px-4 overflow-hidden">
      {/* 🔥 Fire Icon in Background */}
      <img
        src="/images/fire.png" // keep fire.png inside /public/images/
        alt="fire-bg"
        className="absolute top-12 left-1/2 -translate-x-1/2 w-96 opacity-10 pointer-events-none"
      />

      {/* Main Heading */}
      <h1 className="text-5xl font-bold text-red-600 relative z-10">INDU MOULI M</h1>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-gray-600 relative z-10">
        Bringing ancient wisdom and sacred traditions to guide your life journey
        through authentic Vedic rituals, precise astrological insights, and
        harmonious Vastu principles.
      </p>

      {/* Services List */}
      <div className="mt-10 flex flex-wrap gap-6 justify-center relative z-10">
        <div className="px-6 py-3 bg-white shadow-md rounded-xl text-gray-800 font-medium">
          Purohit
        </div>
        <div className="px-6 py-3 bg-white shadow-md rounded-xl text-gray-800 font-medium">
          Astrologer
        </div>
        <div className="px-6 py-3 bg-white shadow-md rounded-xl text-gray-800 font-medium">
          Vastu Consultant
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-4 relative z-10">
        <button className="px-6 py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600">
          Explore Services
        </button>
        <button className="px-6 py-3 bg-yellow-400 text-black rounded-xl shadow hover:bg-yellow-500">
          Contact Now
        </button>
      </div>
    </section>
  );
}
