import type { Metadata } from "next";
import "./globals.css";
import "../styles/main.css";
import "../styles/theme.css";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import FloatingActions from "@/components/UI/FloatingActions";

export const metadata: Metadata = {
  title: "Phoenix Business Advisory",
  description:
    "Apply for USA Business Visa & USA Green Card with Phoenix Business Advisory — trusted experts in global business migration for USA, Australia, New Zealand, EU & UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
        />

        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500sss,600,700&display=swap"
        />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401&display=swap" rel="stylesheet"/>
      </head>

      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}