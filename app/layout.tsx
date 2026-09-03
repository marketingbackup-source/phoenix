import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/main.css";
import "../styles/theme.css"

import Header from '@/components/Layout/Header'

import Footer from '@/components/Layout/Footer'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phoenix Business Advisory",
  description: "Apply for USA Business Visa &amp; USA Green Card with Phoenix Business Advisory — trusted experts in global business migration for USA, Australia, New Zealand, EU &amp; UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
