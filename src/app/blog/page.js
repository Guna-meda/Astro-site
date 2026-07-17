import Link from "next/link";
import { BookOpen } from "lucide-react";
import { getAllPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import BlogPageAnimator from "@/components/blog/BlogPageAnimator";

// Server Component — metadata + content are both present in the HTML
// Next.js sends on first request, which matters here more than almost
// anywhere else on the site: this page's entire job is to be crawled
// and cited by AI engines, so its content can't depend on client-side
// JS running first.
export const metadata = {
  title: "Pooja & Ritual Guides | Sadguru Jyothishyalayam — Indu Mouli",
  description:
    "Practical, detailed guides to traditional poojas, homams, and ceremonies — items required, procedure, and what to expect — written by a Bangalore purohit with 30+ years of experience.",
  alternates: { canonical: "https://sadgurujyothishyalayam.com/blog" },
  openGraph: {
    title: "Pooja & Ritual Guides | Sadguru Jyothishyalayam",
    description:
      "Practical, detailed guides to traditional poojas, homams, and ceremonies from a Bangalore purohit with 30+ years of experience.",
    url: "https://sadgurujyothishyalayam.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <BlogPageAnimator>
      {/* Hero Banner — matches the services page hero pattern */}
      <section className="relative py-12 mt-6 bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 overflow-hidden">
        <div className="container mx-auto text-center py-16 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6">
            <BookOpen className="text-primary" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 font-heading mb-4">
            Pooja &amp; Ritual Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Direct, practical answers on items required, procedure, and timing for
            traditional poojas and ceremonies — written from three decades of
            first-hand experience, not general summaries.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — matches the services page CTA pattern */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Don't See Your Question Here?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Reach out directly to <span className="font-semibold">Indu Mouli</span> for
            guidance specific to your ceremony, family tradition, or timing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-orange-600 font-semibold shadow hover:bg-gray-100 transition"
            >
              Contact Now
            </Link>
            <a
              href="tel:+919448225002"
              className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </BlogPageAnimator>
  );
}
