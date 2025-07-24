import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dooinngs | Carpenters, Masons, Vulcanizers & more",
  description:
    "Dooinngs is a platform that connects you with skilled artisans in your area. Whether you need a carpenter, mason, or a vulcanizer, you can find them here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
