import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elder Software",
  description: "Experienced mobile application developmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-vermillion-50`}
      >
        <div className="mx-2 sm:mx-4 md:mx-32 h-screen flex flex-col">
          <div id="root" className="flex flex-col flex-grow pb-16 mb-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
