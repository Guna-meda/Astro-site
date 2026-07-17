"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogCard({ post, index = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-md border border-orange-100
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                 overflow-hidden flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Category ribbon */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-50 px-5 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-700">
            {post.category}
          </span>
          <span className="flex items-center text-xs text-orange-600 gap-1">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-orange-900 group-hover:text-orange-700 font-heading mb-3 transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm flex-grow line-clamp-3">
            {post.metaDescription}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="flex items-center text-xs text-gray-400 gap-1">
              <Calendar size={13} />
              {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-800 transition-colors">
              Read guide
              <ArrowRight size={15} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
