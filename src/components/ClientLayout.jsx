"use client";

import { useState, useEffect } from "react";
import Loader from "./loader";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading time (replace with real fetch/preload if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // IMPORTANT: render the real page content unconditionally. The loader
  // is shown as an overlay ON TOP of it (it already has its own
  // fixed/inset-0/z-50 background, so visually nothing changes for a
  // real visitor), instead of replacing it. Previously this returned
  // <Loader /> INSTEAD of {children} while loading — since Next.js
  // server-renders this component with its initial state (loading:
  // true), that meant the actual page content, including every blog
  // post, was never in the HTML search engines and AI bots first see.
  // A crawler that doesn't execute JS and wait out the timer would
  // have found a loading spinner, not the article.
  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
