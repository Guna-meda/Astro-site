import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Indu Mouli",
  description: "Website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
