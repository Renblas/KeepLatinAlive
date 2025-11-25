"use client"

import Link from "next/link";
import { GlassCard } from '@developer-hub/liquid-glass';
import Sidebar from "../../components/Sidebar";

export default function LessonsPage() {
  // In a real app, fetch user progress from database
  const nextLesson = { slug: "intro", title: "Introduction to Latin" };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex">
        
        <main className="flex-1 p-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <GlassCard cornerRadius={24} blurAmount={0.01} className="p-16 text-center border border-gray-200">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to Your Latin Journey
              </h1>
              <p className="text-xl text-gray-700 mb-12">
                Continue where you left off or start a new lesson
              </p>
              
              <Link 
                href={`/lessons/${nextLesson.slug}`}
                className="inline-block bg-red-800 text-amber-100 px-12 py-5 rounded-lg font-bold text-xl hover:bg-red-900 transition-all shadow-lg"
              >
                Continue: {nextLesson.title}
              </Link>
            </GlassCard>

            <GlassCard cornerRadius={24} blurAmount={0.01} className="p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-700">Lessons Completed</span>
                  <span className="text-2xl font-bold text-red-800">0 / 5</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                  <span className="text-lg font-medium text-gray-700">Quiz Average</span>
                  <span className="text-2xl font-bold text-red-800">-</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </main>
      </div>
    </div>
  );
}