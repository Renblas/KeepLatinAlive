"use client"

import Link from "next/link";
import ScrollSection from "../components/ScrollSection";

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <ScrollSection className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8 text-amber-50">
            Keeping Latin Alive
          </h1>
          <p className="text-2xl mb-12 text-amber-100">
            Discover the beauty and power of the language that shaped civilization
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/lessons"
              className="bg-amber-400 text-red-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-300 transition-all shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/about"
              className="border-2 border-amber-100 text-amber-100 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-100 hover:text-red-900 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </ScrollSection>

      {/* Features Section */}
      <ScrollSection className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
             <h2 className="text-5xl font-bold text-center text-amber-100 mb-16">
              Why Learn Latin?
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-100 mb-4 text-center">Historical Insight</h3>
                <p className="text-amber-50 text-lg text-center">
                  Access the original texts of Roman philosophers, poets, and historians in their authentic form.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-100 mb-4 text-center">Language Foundation</h3>
                <p className="text-amber-50 text-lg text-center">
                  Understand the roots of English and Romance languages, improving vocabulary and grammar skills.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-100 mb-4 text-center">Mental Exercise</h3>
                <p className="text-amber-50 text-lg text-center">
                  Develop critical thinking and analytical skills through the study of Latin's logical structure.
                </p>
              </div>
            </div>
          </div>
      </ScrollSection>

      {/* Call to Action */}
      <ScrollSection className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto w-full text-center">
            <h2 className="text-5xl font-bold text-amber-50 mb-8">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-2xl text-amber-100 mb-12">
              Join thousands of learners rediscovering the language of ancient Rome
            </p>
            <Link
              href="/lessons"
              className="inline-block bg-amber-400 text-red-950 px-12 py-5 rounded-lg font-bold text-xl hover:bg-amber-300 transition-all shadow-lg"
            >
              Start Your First Lesson
            </Link>
          </div>
      </ScrollSection>
    </>
  );
}