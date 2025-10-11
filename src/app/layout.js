import ClientLayout from "@/components/ClientLayout";
import "./globals.css";
import Image from "next/image";
import Head from "next/head"; // Import Next.js Head component

export const metadata = {
  title: "Sadguru Jyothishyalayam | Indu Mouli – Expert in Astrology, Vastu & Traditional Pooja Services",
  description:
    "Sadguru Jyothishyalayam by Indu Mouli offers expert astrology, vastu consultations, and a wide range of traditional pooja services including Gruhapravesha, Shanti, Shri Chakra Pooja, Sudarshana Homam, Satyanarayana Pooja, Lakshmi Pooja, and more. Trusted for over 30 years in Bangalore.",
  keywords: [
    "Indu Mouli",
    "Sadguru Jyothishyalayam",
    "Astrology Bangalore",
    "Vastu Consultation",
    "Pooja Services",
    "Gruhapravesha",
    "Shanti",
    "Shri Chakra Pooja",
    "Sudarshana Homam",
    "Satyanarayana Pooja",
    "Lakshmi Pooja",
    "Vasavi Pooja",
    "Ashthalakshmi Pooja",
    "Vastu Shanti",
    "Murugan Pooja",
    "Varahi Pooja",
    "Yogini Pooja",
    "Sarvatho Badra Mandala Pooja",
    "Kalasha Alankarana",
    "Sitarama Kalyanotsavam",
    "Srinivasa Kalyanam",
    "Ganapathi Homam",
    "Anjaneya Swami Pooja",
    "Rajashyamala",
    "Rudra Abhishekam",
    "Tulasi Kalyanam",
  ],
  authors: [{ name: "Indu Mouli" }],
  creator: "Indu Mouli",
  publisher: "Indu Mouli",

  // Open Graph (for Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    title: "Indu Mouli | Astrology, Vastu & Purohit Services",
    description:
      "Astrology, Vastu, and traditional Pooja services by Indu Mouli in Bangalore. Trusted purohit with years of experience.",
    url: "https://sadgurujyothishyalayam.com",
    siteName: "Indu Mouli",
    images: [
      {
        url: "https://sadgurujyothishyalayam.com/public/images/Main.jpg",
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
    icon: "/images/Mandala.png",
    shortcut: "/images/Mandala.png",
    apple: "/images/Mandala.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Sadguru Jyothishyalayam",
                "image": "https://sadgurujyothishyalayam.com/public/images/Main.jpg",
                "description": "Sadguru Jyothishyalayam by Indu Mouli offers expert astrology, vastu consultation, and traditional pooja services in Bangalore.",
                "url": "https://sadgurujyothishyalayam.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "addressCountry": "India",
                },
                "founder": {
                  "@type": "Person",
                  "name": "Indu Mouli",
                },
                "knowsAbout": [
                  "Astrology",
                  "Vastu",
                  "Gruhapravesha",
                  "Shanti",
                  "Shri Chakra Pooja",
                  "Sudarshana Pooja",
                  "Homam",
                  "Satyanarayana Pooja",
                  "Lakshmi Pooja",
                  "Vasavi Pooja",
                  "Ashthalakshmi Pooja",
                  "Vastu Shanti",
                  "Murugan Pooja",
                  "Varahi Pooja",
                  "Yogini Pooja",
                  "Sarvatho Badra Mandala Pooja",
                  "Kalasha Alankarana",
                  "Sitarama Kalyanotsavam",
                  "Srinivasa Kalyanam",
                  "Ganapathi Homam",
                  "Anjaneya Swami Pooja",
                  "Rajashyamala",
                  "Rudra Abhishekam",
                  "Tulasi Kalyanam",
                ],
              }),
            }}
          />
        </Head>
      </head>
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