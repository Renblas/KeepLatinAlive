import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
import { GlassCard } from '@developer-hub/liquid-glass';
import Footer from "../components/Footer";
import ScrollSection from "../components/ScrollSection";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keep Latin Alive",
  description: "Learn the basics of Latin with modern, interactive lessons",
  icons: {
    icon: "/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>

          <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-800">
            
            <Header />

            <div className="pt-16"></div>

            <div className="items-center h-auto">

              <main className="overflow-y-auto snap-container">
                {children}
              </main>

            </div>

            <Footer />

          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}