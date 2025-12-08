"use client"

import ScrollSection from "../../components/ScrollSection";

export default function Privacy() {
  return (
    <>
      <ScrollSection className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto px-6 py-16 text-amber-50 w-full">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 text-center mb-4">
            Privacy Policy for Keep Latin Alive
          </h1>

          <p className="text-center text-amber-200/70 text-sm mb-12">
            Effective date: <time dateTime="2025-12-08" className="font-medium">December 8, 2025</time>
            {" "}|{" "}
            Last updated: <time dateTime="2025-12-08" className="font-medium">December 8, 2025</time>
          </p>

          {/* Intro */}
          <div className="text-amber-50 leading-relaxed space-y-6 mb-12 text-lg">
            <p>
              Keep Latin Alive (“we,” “our,” or “us”) operates the website{' '}
              <a href="https://keeplatinalive.com" className="underline underline-offset-4 hover:text-amber-200 transition">
                https://keeplatinalive.com
              </a>{' '}
              (the “Service”), an educational platform offering free introductory Latin lessons and prayers.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal information when you use our Service.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-16 text-amber-50">

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">1. Information We Collect</h2>
              <p className="mb-4">When you sign up or log in using “Sign in with Google”:</p>
              <ul className="space-y-3 ml-8 mb-6">
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">
                  We receive only your <strong>name</strong> and <strong>email address</strong> from Google.
                </li>
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">
                  We do <strong>not</strong> request or receive any other information from your Google account (no profile picture, contacts, Gmail access, etc.).
                </li>
              </ul>
              <p className="italic">
                All authentication is handled securely by <strong>Clerk</strong>{' '}
                (<a href="https://clerk.com" className="underline underline-offset-4 hover:text-amber-200">clerk.com</a>).
              </p>
              <p className="mt-4">We do <strong>not</strong> collect:</p>
              <ul className="space-y-2 ml-8 mt-3">
                <li>• Payment information</li>
                <li>• Location data</li>
                <li>• IP addresses (beyond standard web server logs)</li>
                <li>• Any usage analytics or tracking cookies</li>
              </ul>
            </section>

            {/* 2–8. Repeat pattern */}
            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">2. How We Use Your Information</h2>
              <p className="mb-4">The only purposes for which we use your name and email are:</p>
              <ul className="space-y-3 ml-8">
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">To create and manage your account</li>
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">To let you log in</li>
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">To display your name in the app (e.g., “Welcome, Marcus”)</li>
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">To contact you only if needed (service updates) — no marketing, ever</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">3. Data Storage and Security</h2>
              <p>
                Your name and email are stored securely by Clerk and in our database only as needed. We use industry-standard encryption (TLS, hashed passwords by Clerk, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">4. Sharing Your Information</h2>
              <p>We do <strong>not</strong> sell, trade, or share your data except:</p>
              <ul className="space-y-3 ml-8 mt-4">
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">
                  Clerk (our auth provider) — see their policy:{' '}
                  <a href="https://clerk.com/privacy" className="underline underline-offset-4 hover:text-amber-200">clerk.com/privacy</a>
                </li>
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">As required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">5. Data Retention</h2>
              <p>We keep your data only while your account exists. Delete your account → all data permanently removed within 30 days.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">6. Your Rights</h2>
              <ul className="space-y-3 ml-8">
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">Access or delete your account anytime in settings</li>
                <li className="relative before:absolute before:-left-6 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-amber-400">Contact us for any data request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-amber-100 mb-6">8. Changes to This Policy</h2>
              <p>We will post any material changes here and update the “Last updated” date.</p>
            </section>

          </div>

          {/* Divider + Closing */}
          <div className="mt-20 pt-12 border-t-2 border-amber-800/50">
            <p className="text-center text-2xl italic font-medium text-amber-200">
              Thank you for helping keep Latin alive!
            </p>
          </div>
        </div>
      </ScrollSection>
    </>
  );
}
