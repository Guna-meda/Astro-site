"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GtagClient() {
  const pathname = usePathname();
  // We'll read search params from window.location on the client inside the effect

  useEffect(() => {
    if (typeof window === "undefined") return;
    const search = window.location.search || "";
    // Fire a page_view event for SPA navigations
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname + search,
      });
    }
  }, [pathname]);

  return null;
}
