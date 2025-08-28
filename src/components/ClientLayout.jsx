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

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
