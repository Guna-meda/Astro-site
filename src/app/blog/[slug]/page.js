import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts, AUTHOR } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogPageAnimator from "@/components/blog/BlogPageAnimator";

// Pre-render every post at build time — fastest possible path to a
// crawlable, indexable page (no client fetch, no loading state).
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// Per-post metadata — this is what makes each post individually
// indexable/citable for its own specific question, instead of every
// page on the site sharing one generic title/description.
export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://sadgurujyothishyalayam.com/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [AUTHOR.name],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);
  const url = `https://sadgurujyothishyalayam.com/blog/${post.slug}`;

  // Article schema — helps engines that read structured data attribute
  // the post correctly (author, dates, publisher).
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { "@type": "Person", name: AUTHOR.name },
    publisher: {
      "@type": "Organization",
      name: "Sadguru Jyothishyalayam",
      logo: { "@type": "ImageObject", url: "https://sadgurujyothishyalayam.com/images/Mandala.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  // FAQPage schema — directly targeted at Perplexity/ChatGPT's documented
  // preference for FAQ-structured content (Step 2 of the citation plan).
  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <BlogPageAnimator>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative py-16 temple-pattern">
        <div className="container-custom relative z-10 py-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Guides
          </Link>

          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-orange-700 bg-orange-100 rounded-full px-3 py-1 mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-primary-dark font-heading mb-5 max-w-4xl leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-text-secondary mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} />
              Updated {new Date(post.updatedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>

          {/* Direct answer block — the "50-90 word answer up top" that
              answer engines extract as a self-contained passage. */}
          <div className="max-w-3xl bg-white/90 backdrop-blur rounded-xl border border-orange-200 shadow-sm p-6">
            <p className="text-lg text-text-primary leading-relaxed">{post.directAnswer}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 36.7C840 27 960 13 1080 16.7C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {post.sections?.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-heading font-semibold text-primary-dark mb-4">
                    {section.heading}
                  </h2>

                  {section.body?.map((para, j) => (
                    <p key={j} className="text-text-secondary leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="space-y-2 mt-2">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle2 size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto mt-2 rounded-lg border border-orange-100">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-orange-50">
                          <tr>
                            {section.table[0].map((h, k) => (
                              <th key={k} className="px-4 py-3 font-semibold text-primary-dark">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.slice(1).map((row, r) => (
                            <tr key={r} className={r % 2 === 1 ? "bg-orange-50/50" : ""}>
                              {row.map((cell, c) => (
                                <td key={c} className="px-4 py-3 text-text-secondary border-t border-orange-100">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              {/* FAQ */}
              {post.faq?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-primary-dark mb-4">
                    Common Questions
                  </h2>
                  <FAQAccordion faqs={post.faq} />
                </div>
              )}

              {/* Draft-content disclosure — honest, and itself a small
                  first-hand-expertise/E-E-A-T signal once reviewed. */}
              <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
                <span>
                  This guide reflects general practice and is reviewed by Indu Mouli for
                  accuracy against his own tradition. Specific steps, items, and timing can
                  vary by family custom — please confirm details for your ceremony directly.
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author block */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 text-center">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow">
                  <Image src={AUTHOR.image} alt={AUTHOR.name} fill className="object-cover" />
                </div>
                <h3 className="font-heading font-semibold text-primary-dark">{AUTHOR.name}</h3>
                <p className="text-sm text-orange-700 mb-3">{AUTHOR.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{AUTHOR.bio}</p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl p-6 text-white text-center shadow-lg">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Planning This Ceremony?
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Get guidance specific to your family and timing.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-4 py-2.5 rounded-lg bg-white text-orange-600 font-semibold shadow hover:bg-gray-100 transition mb-2"
                >
                  Contact Now
                </Link>
                <a
                  href="tel:+919448225002"
                  className="block w-full px-4 py-2.5 rounded-lg border-2 border-white font-semibold hover:bg-white hover:text-orange-600 transition"
                >
                  Call Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-background-light diya-pattern">
          <div className="container-custom">
            <h2 className="section-heading inline-block relative pb-3 mb-10">
              Related Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((relatedPost, index) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </BlogPageAnimator>
  );
}
