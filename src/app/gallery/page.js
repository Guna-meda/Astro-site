"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import { Play, X } from "lucide-react";
import Image from "next/image";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "https://images.pexels.com/photos/3097035/pexels-photo-3097035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Traditional Wedding Ceremony",
      category: "ceremonies",
    },
    {
      id: 2,
      type: "image",
      src: "https://images.pexels.com/photos/6669369/pexels-photo-6669369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Astrological Consultation",
      category: "astrology",
    },
    {
      id: 3,
      type: "image",
      src: "https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Housewarming Ceremony",
      category: "ceremonies",
    },
    {
      id: 4,
      type: "video",
      src: "https://example.com/video1.mp4",
      thumbnail:
        "https://images.pexels.com/photos/15187218/pexels-photo-15187218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Homam Ritual Demonstration",
      category: "poojas",
    },
    {
      id: 5,
      type: "image",
      src: "https://images.pexels.com/photos/13975402/pexels-photo-13975402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Bhoomi Pooja",
      category: "poojas",
    },
    {
      id: 6,
      type: "image",
      src: "https://images.pexels.com/photos/15187233/pexels-photo-15187233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Ganesh Pooja",
      category: "poojas",
    },
    {
      id: 7,
      type: "image",
      src: "https://images.pexels.com/photos/4391035/pexels-photo-4391035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Corporate Office Inauguration",
      category: "corporate",
    },
    {
      id: 8,
      type: "video",
      src: "https://example.com/video2.mp4",
      thumbnail:
        "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Vastu Consultation Session",
      category: "vastu",
    },
    {
      id: 9,
      type: "image",
      src: "https://images.pexels.com/photos/965981/pexels-photo-965981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Gemstone Selection",
      category: "gems",
    },
    {
      id: 10,
      type: "image",
      src: "https://images.pexels.com/photos/5691523/pexels-photo-5691523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Naming Ceremony",
      category: "ceremonies",
    },
    {
      id: 11,
      type: "image",
      src: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Business Launch Ceremony",
      category: "corporate",
    },
    {
      id: 12,
      type: "image",
      src: "https://images.pexels.com/photos/3747136/pexels-photo-3747136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Home Vastu Analysis",
      category: "vastu",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "ceremonies", name: "Ceremonies" },
    { id: "poojas", name: "Poojas & Homams" },
    { id: "astrology", name: "Astrology" },
    { id: "vastu", name: "Vastu" },
    { id: "corporate", name: "Corporate" },
    { id: "gems", name: "Gemstones" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const breakpointColumns = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
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
            Our Gallery
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-text-secondary mb-6">
              Explore our collection of images and videos showcasing our
              services, ceremonies, and sacred traditions.
            </p>
          </motion.div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.7C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div ref={ref} className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                    activeFilter === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-text-primary hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
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
                  <div className="overflow-hidden rounded-lg shadow-md relative group">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={800}
                          height={600}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <Play size={20} className="text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white z-10 hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : (
              <div className="aspect-video bg-black">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-white">Video playback would be here</p>
                </div>
              </div>
            )}
            <div className="text-white mt-4">
              <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryPage;
