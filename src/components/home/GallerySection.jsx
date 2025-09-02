"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import { X, Play, Hash } from "lucide-react";
import Link from "next/link";

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample gallery items with tags
  const galleryItems = [
    {
      id: 1,
      src: "/images/Gallary/For website/IMG_3585.JPG",
      alt: "Ganapathi Homam Ceremony",
      tags: ["pooja", "homam"],
      type: "image"
    },
    {
      id: 2,
      src: "/images/Gallary/For website/IMG_4552.JPG",
      alt: "Astrology Consultation",
      tags: ["consultation"],
      type: "image"
    },
    {
      id: 3,
      src: "/images/Gallary/For website/IMG_4557.JPG",
      alt: "Vastu Consultation",
      tags: ["vastu"],
      type: "image"
    },
    {
      id: 4,
      src: "/images/Gallary/For website/IMG_4596.JPG",
      alt: "Wedding Ceremony",
      tags: ["wedding", "ceremony"],
      type: "image"
    },
    {
      id: 5,
      src: "/images/Gallary/For website/IMG_4598.JPG",
      alt: "Satyanarayana Pooja",
      tags: ["pooja"],
      type: "image"
    },
    {
      id: 6,
      src: "/images/Gallary/For website/IMG_4622.JPG",
      alt: "Office Vastu",
      tags: ["vastu", "office"],
      type: "image"
    },
  ];

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
          selectedTags.some((tag) => item.tags.includes(tag))
        );

  const breakpointColumns = { 
    default: 3, 
    1024: 3, 
    768: 2, 
    640: 1 
  };

  const openLightbox = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading inline-block relative pb-3 mb-4">
            Sacred Moments Gallery
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A visual journey through the divine ceremonies and rituals we've been blessed to perform
          </p>
        </motion.div>

       
        {/* Gallery Grid with Masonry Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredItems.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex w-auto -ml-4"
              columnClassName="pl-4 bg-clip-padding"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4 cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image Container */}
                    <div className="aspect-variable relative overflow-hidden">
                      <div className="w-full h-64 relative">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {item.alt}
                          </p>
                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                              {item.tags.map(tag => (
                                <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found.</p>
            </div>
          )}
        </motion.div>

        {/* View More Button */}
     <Link href="/gallery">
  {filteredItems.length > 0 && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex justify-center mt-12"
    >
      <button className="px-8 py-3 bg-white border-2 border-red-300 text-red-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-red-50">
        View More Photos
      </button>
    </motion.div>
  )}
</Link>

        </div>

        

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl w-full max-h-full flex items-center justify-center">
            <div className="bg-white rounded-lg overflow-hidden">
              {selectedItem.type === "image" ? (
                <div className="w-full h-96 relative">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full">
                  <iframe
                    src={selectedItem.src}
                    title={selectedItem.alt}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;