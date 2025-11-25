// app/lessons/page.tsx   ← move this file OUT of the (client) world

import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../../src/lib/mongodb";
import UserProgress from "../../src/models/UserProgress";
import { redirect } from "next/navigation";

export default async function LessonsPage() {
  const { userId } = auth();

  let progress = null;
  let nextLesson = { slug: "intro", title: "Introduction to Latin" };

  if (userId) {
    await connectToDatabase();

    progress = await UserProgress.findOneAndUpdate(
      { clerkId: userId },
      { $setOnInsert: { completedLessons: [], quizScores: [] } },
      { upsert: true, new: true }
    );

    if (progress.lastVisitedLesson) {
      nextLesson = { slug: progress.lastVisitedLesson, title: "Continue where you left off" };
    }
  }

  const completedCount = progress?.completedLessons.length || 0;

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-5xl font-bold text-amber-100 mb-6">
            {userId ? `Welcome back!` : `Welcome to Your Latin Journey`}
          </h1>

          {userId ? (
            <>
              <Link
                href={`/lessons/${nextLesson.slug}`}
                className="inline-block bg-red-800 text-amber-100 px-12 py-5 rounded-lg font-bold text-xl hover:bg-red-900 transition-all shadow-lg"
              >
                {completedCount === 0 ? "Begin:" : "Continue:"} {nextLesson.title}
              </Link>

              <h2 className="text-3xl font-bold text-amber-100 mb-8">Your Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-amber-700 rounded-lg">
                  <span className="text-lg font-medium text-amber-50">Lessons Completed</span>
                  <span className="text-2xl font-bold text-amber-50">{completedCount} / 5</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-amber-700 rounded-lg">
                  <span className="text-lg font-medium text-amber-50">Quiz Average</span>
                  <span className="text-2xl font-bold text-amber-50">
                    {progress?.quizScores.length 
                      ? Math.round(progress.quizScores.reduce((a: any, b: any) => a + b.score / b.total, 0) / progress.quizScores.length * 100) + "%"
                      : "-"}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-amber-50 mb-8">Error fetching data</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}