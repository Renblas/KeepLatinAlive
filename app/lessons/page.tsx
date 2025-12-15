"use client"

import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { lessons } from "../lib/lessons";

export default function LessonsPage() {
  // In a real app, fetch user progress from database
  const nextLesson = { slug: "outline", title: "Introduction to Latin" };

  return (
      <div className="flex">
        
        <Sidebar />

        <main className="flex-1 p-12">
          <div className="max-w-4xl mx-auto space-y-12">
              <h1 className="text-5xl font-bold text-amber-100 mb-6">
                Welcome to Your Latin Journey
              </h1>
              <p className="text-xl text-amber-50 mb-12">
                Continue where you left off or start a new lesson
              </p>
              
              <Link 
                href={`/lessons/${nextLesson.slug}`}
                className="inline-block bg-red-800 text-amber-100 px-12 py-5 rounded-lg font-bold text-xl hover:bg-red-900 transition-all shadow-lg"
              >
                Continue: {nextLesson.title}
              </Link>

              <h2 className="text-3xl font-bold text-amber-100 mb-8">Your Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-amber-600 rounded-lg">
                  <span className="text-lg font-medium text-amber-50">Lessons Completed</span>
                  <span className="text-2xl font-bold text-red-800">0 / {lessons.length}</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-amber-600 rounded-lg">
                  <span className="text-lg font-medium text-amber-50">Quiz Average</span>
                  <span className="text-2xl font-bold text-red-800">-</span>
                </div>
              </div>
          </div>
        </main>
      </div>
  );
}
