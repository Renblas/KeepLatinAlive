"use client"

import ScrollSection from "../../components/ScrollSection";

export default function About() {
  return (
    <>
        <ScrollSection className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl mx-auto w-full">
              <h1 className="text-5xl font-bold text-amber-50 mb-8 -ml-1">About Us</h1>
              <div className="text-amber-50 text-lg space-y-6">
                <p>
                  Keeping Latin Alive is dedicated to preserving and teaching the language of ancient Rome through modern, interactive lessons.
                </p>
                <p>
                  Our mission is to make Latin accessible to everyone, from complete beginners to advanced scholars.
                </p>
                <p>
                  We believe that Latin is not just a historical curiosity, but a living language that continues to influence our world today.
                </p>
              </div>
          </div>
        </ScrollSection>

        <ScrollSection className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl mx-auto w-full">
              <h2 className="text-4xl font-bold text-amber-50 mb-8 -ml-1">Our Approach</h2>
              <div className="text-amber-50 text-lg space-y-6">
                <p>
                  We combine traditional teaching methods with modern technology to create an engaging learning experience.
                </p>
                <p>
                  Each lesson is carefully structured to build upon previous knowledge, ensuring a solid foundation in Latin grammar and vocabulary.
                </p>
              </div>
          </div>
        </ScrollSection>
      </>
  );
}