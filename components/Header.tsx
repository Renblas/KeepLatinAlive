'use client';

import Link from "next/link";
import { SignInButton , UserButton , SignedIn , SignedOut } from "@clerk/nextjs";

export default function PublicHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-red-800 to-red-900 shadow-lg h-16">
      <nav className="h-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="group display-inline">
          <div className="flex items-center space-x-3 group-hover:scale-110 transition-transform">
            <img src="/logo_transparent.png" className="h-12"></img>
            <span className="text-2xl font-bold text-amber-100">
              Keeping Latin Alive
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
            About
          </Link>
          <Link href="/resources" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
            Resources
          </Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-amber-400 text-red-900 px-6 py-2 rounded-lg font-bold hover:bg-amber-300 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>

            <Link href="/lessons" className="text-amber-100 hover:text-amber-300 transition-colors font-medium">
              Lessons
            </Link>

            <UserButton />

          </SignedIn>
        </div>
      </nav>
    </header>
  );
}