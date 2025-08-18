import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Indu Mouli",
  description: "Website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden relative bg-gradient-to-br from-orange-50 via-white to-red-50">
        
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10">
  <img
    src="/images/Mandala.png"
    alt="mandala-bg"
    className="w-[400px] sm:w-[500px] md:w-[650px] opacity-25 animate-spin-slow 
               brightness-110 contrast-125 drop-shadow-[0_0_20px_rgba(255,150,50,0.3)]"
  />
</div>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
