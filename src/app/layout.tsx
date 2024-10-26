import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from '@/app/components/layouts/Header';
import Footer from '@/app/components/layouts/Footer';

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
  title: "My Stylish Blog",
  description: "My Stylish Blog Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
