'use client';

import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default function PublicHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-800 to-red-900 shadow-lg h-16">
      <nav className="h-full flex items-center justify-between px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <span className="text-red-900 font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold text-amber-100">
            Keeping Latin Alive
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
            About
          </Link>
          <Link href="/resources" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
            Resources
          </Link>
          <SignInButton mode="modal">
            <button className="bg-amber-400 text-red-900 px-6 py-2 rounded-lg font-bold hover:bg-amber-300 transition-colors">
              Sign In
            </button>
          </SignInButton>
        </div>
      </nav>
    </header>
  );
}