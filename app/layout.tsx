import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider} from "@clerk/nextjs";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keep Latin Alive",
  description: "Learn the basics of Latin with modern, interactive lessons",
  icons: {
    icon: "/favicon-32x32.png"
  },
  other: {
	"google-site-verification": "PDPjE-smVmj0Xkeqi2WKaOVI2QREwRg1kdsqBELXT6Y"
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
