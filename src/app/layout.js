import ClientLayout from "@/components/ClientLayout";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Indu Mouli",
  description: "Astrology , Vastu , Pooja , Purohit , Bangalore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden relative bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10">
          <Image
            src="/images/Mandala.png"
            alt="Mandala design"
            className="w-[400px] sm:w-[500px] md:w-[650px] opacity-25 animate-spin-slow 
               brightness-110 contrast-125 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)]"
            width={500} // must give width
            height={500} // must give height
            priority // optional: preload this img
          />
        </div>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
