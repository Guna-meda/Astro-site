import ClientLayout from "@/components/ClientLayout";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Indu Mouli | Astrology, Vastu & Purohit Services",
  description:
    "Expert Astrology, Vastu Consultation, and Traditional Pooja Services in Bangalore. Book trusted purohit services with Indu Mouli.",
  keywords: [
    "Astrology",
    "Vastu",
    "Pooja",
    "Purohit",
    "Astrologer Bangalore",
    "Pandit Bangalore",
  ],
  authors: [{ name: "Indu Mouli" }],
  creator: "Indu Mouli",
  publisher: "Indu Mouli",

  // Open Graph (for Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    title: "Indu Mouli | Astrology, Vastu & Purohit Services",
    description:
      "Astrology, Vastu, and traditional Pooja services by Indu Mouli in Bangalore. Trusted purohit with years of experience.",
    url: "https://yourdomain.com", // change this to your real domain
    siteName: "Indu Mouli",
    images: [
      {
        url: "/images/Main.jpg",
        width: 1200,
        height: 630,
        alt: "Astrology & Vastu by Indu Mouli",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Favicon / App Icons
  icons: {
    icon: "/images/Mandala.png", // main favicon
    shortcut: "/images/Mandala.png",
    apple: "/images/Mandala.png", // for iOS "Add to Home Screen"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden relative bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Background Mandala */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10">
          <Image
            src="/images/Mandala.png"
            alt="Mandala design"
            className="w-[400px] sm:w-[500px] md:w-[650px] opacity-25 animate-spin-slow 
               brightness-110 contrast-125 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)]"
            width={500}
            height={500}
            priority
          />
        </div>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
