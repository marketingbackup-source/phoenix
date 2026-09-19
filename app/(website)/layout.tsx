import RevealProvider from "@/components/animations/RevealProvider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import FloatingActions from "@/components/UI/FloatingActions";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RevealProvider>
      <Header />

      {children}

      <Footer />

      <FloatingActions />
    </RevealProvider>
  );
}