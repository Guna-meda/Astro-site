"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Youtube, Users, Eye, ThumbsUp, Clock } from "lucide-react";

const YouTubeChannelSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [channelData, setChannelData] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample channel statistics (fallback if API fails)
  const defaultChannelStats = [
    { icon: <Eye size={20} />, number: "950.7K+", label: "Views" },
    { icon: <Users size={20} />, number: "7K+", label: "Subscribers" },
    { icon: <ThumbsUp size={20} />, number: "98%", label: "Satisfaction" },
  ];

  // Sample videos (fallback if API fails)
  const defaultVideos = [
    {
      id: "nlZb2fRzYA8",
      title: "Swarna Gowri vratam with sahasranamavali",
      views: "7K",
      duration: "10:25",
    },
    {
      id: "kS3v0KoMgYY",
      title: "Prathah Sandya Vandanam",
      views: "626.8K",
      duration: "15:42",
    },
    {
      id: "bzrtRm0mJ0U",
      title: "SAYAM SANDYA VANDANAM",
      views: "83.3K",
      duration: "12:18",
    },
  ];

  // Function to format duration (e.g., PT1H30M15S → 1:30:15)
  const formatDuration = (duration) => {
    if (!duration) return "0:00";
    
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "0:00";
    
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');
    
    if (hours) {
      return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.padStart(2, '0')}`;
  };

  // Function to format view count
  const formatViewCount = (count) => {
    if (!count) return "0";
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  useEffect(() => {
    // In a real implementation, you would fetch data from YouTube API here
    // For now, we'll use the default data
    setVideos(defaultVideos);
    setSelectedVideo(defaultVideos[0]);
    setLoading(false);
    
    // Example of how you would fetch data from YouTube API:
    /*
    const fetchYouTubeData = async () => {
      try {
        setLoading(true);
        // You would need to set up a server-side API route to fetch YouTube data
        // to avoid exposing your API key
        const response = await fetch('/api/youtube-channel');
        const data = await response.json();
        
        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
          setSelectedVideo(data.videos[0]);
          setChannelData(data.channelStats);
        }
      } catch (error) {
        console.error('Failed to fetch YouTube data:', error);
        // Fallback to default data
        setVideos(defaultVideos);
        setSelectedVideo(defaultVideos[0]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchYouTubeData();
    */
  }, []);

  if (loading) {
    return (
      <section id="youtube-channel" className="py-20 bg-background-light">
        <div className="container-custom">
          <div className="text-center">Loading YouTube content...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="youtube-channel" className="py-20 bg-background-light">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-red-50 px-4 py-2 rounded-full mb-4">
            <Youtube className="text-red-600 mr-2" size={24} />
            <span className="text-red-600 font-semibold">YouTube Channel</span>
          </div>
          <h2 className="section-heading inline-block relative pb-3 mb-4">
            Spiritual Wisdom Online
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our collection of sacred rituals, astrological guidance, and
            spiritual teachings captured from our various ceremonies and
            consultations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main Video Player */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10">
              {selectedVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  title={selectedVideo.title}
                  className="w-full h-80 lg:h-96"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-80 lg:h-96 bg-gray-200 flex items-center justify-center">
                  <p>Select a video to play</p>
                </div>
              )}
            </div>

            {/* Video Title */}
            {selectedVideo && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {selectedVideo.title}
                </h3>
              </div>
            )}

            {/* Channel Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {(channelData || defaultChannelStats).map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark font-heading">
                    {stat.number}
                  </h3>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="http://www.youtube.com/@srisadgurukrupajyothishyal7855"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center py-3"
              >
                <Youtube size={20} className="mr-2" />
                Visit Our Channel
              </a>
            </motion.div>
          </motion.div>

          {/* Video Thumbnails List */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-6 text-primary-dark">
              Featured Videos
            </h3>

            <div className="space-y-4">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer border ${
                    selectedVideo && selectedVideo.id === video.id
                      ? "border-red-500 border-2"
                      : "border-gray-100"
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedVideo(video)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      {/* YouTube thumbnail - using proper URL format */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-32 h-20 rounded-lg object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                        <Play
                          size={24}
                          fill="white"
                          className="text-white opacity-80"
                        />
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                        <Clock size={10} className="mr-1" />
                        {video.duration}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 line-clamp-2 text-sm">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 text-xs mt-1">
                        {video.views} views
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="https://www.youtube.com/@srisadgurukrupajyothishyal7855/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center block py-3"
              >
                View All Videos
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeChannelSection;