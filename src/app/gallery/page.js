"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import { Play, X } from "lucide-react";
import Image from "next/image";
import galleryItems from "@/data/galleryItems";

const GalleryPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Collect all unique tags from galleryItems
  const allTags = [...new Set(galleryItems.flatMap((item) => item.tags))];

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter logic (if no tags selected → show all)
  const filteredItems =
    selectedTags.length === 0
      ? galleryItems
      : galleryItems.filter((item) =>
          selectedTags.every((tag) => item.tags.includes(tag))
        );

  const breakpointColumns = { default: 4, 1280: 3, 768: 2, 500: 2 }; // <-- update here

  const openLightbox = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="relative py-12 mt-6 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="container mx-auto text-center py-16 px-4">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-red-600 font-heading mb-4"
          >
            Our Gallery
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our images and videos showcasing services, ceremonies, and
            sacred traditions.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 ">
        <div ref={ref} className="container mx-auto px-4">
          {/* Tag Filters */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 
      ${
        selectedTags.includes(tag)
          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-sm"
      }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex w-full -ml-4"
              columnClassName="pl-4 bg-clip-padding"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="mb-4 cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 relative group">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                            <Play size={22} className="text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No items match the selected tags.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
     {/* Lightbox */}
{/* Lightbox */}
{selectedItem && (
  <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
    {/* Close Button */}
    <button
      className="absolute top-6 right-6 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-20"
      onClick={closeLightbox}
    >
      <X size={32} />
    </button>

    {/* Prev Button */}
    <button
      onClick={() => {
        const currentIndex = filteredItems.findIndex(
          (item) => item.id === selectedItem.id
        );
        const prevIndex =
          (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
      }}
      className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-orange-600 transition-all duration-200 p-4 rounded-full z-20 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Next Button */}
    <button
      onClick={() => {
        const currentIndex = filteredItems.findIndex(
          (item) => item.id === selectedItem.id
        );
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
      }}
      className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-orange-600 transition-all duration-200 p-4 rounded-full z-20 shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* Main Content */}
    <div className="max-w-6xl w-full flex flex-col items-center">
      {selectedItem.type === "image" ? (
        <Image
          src={selectedItem.src}
          alt={selectedItem.title}
          width={1400}
          height={900}
          className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      ) : (
        <div className="aspect-video w-full">
          <iframe
            src={selectedItem.src}
            title={selectedItem.title}
            className="w-full h-full rounded-xl shadow-2xl"
            allowFullScreen
          />
        </div>
      )}

      {/* Caption */}
      <div className="text-white mt-4 text-center">
        <h3 className="text-2xl font-semibold">{selectedItem.title}</h3>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {selectedItem.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/20 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)}


    </motion.div>
  );
};

export default GalleryPage;
