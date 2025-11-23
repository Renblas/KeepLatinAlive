'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlassCard } from '@developer-hub/liquid-glass';

const lessons = [
  { id: 1, title: "Introduction to Latin", slug: "intro" },
  { id: 2, title: "Pronunciation Guide", slug: "pronunciation" },
  { id: 3, title: "First Declension Nouns", slug: "first-declension" },
  { id: 4, title: "Second Declension Nouns", slug: "second-declension" },
  { id: 5, title: "Basic Verbs", slug: "basic-verbs" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons</h2>
        
        <nav className="space-y-3">
          {lessons.map((lesson) => {
            const isActive = pathname === `/lessons/${lesson.slug}`;
            return (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.slug}`}
                className="block"
              >
                <GlassCard 
                  cornerRadius={12}
                  blurAmount={0.01}
                  className={`p-4 transition-all ${
                    isActive 
                      ? 'ring-2 ring-amber-400' 
                      : 'hover:ring-1 hover:ring-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold
                      ${isActive ? 'bg-amber-400 text-red-900' : 'bg-gray-200 text-gray-600'}
                    `}>
                      {lesson.id}
                    </span>
                    <span className={`font-medium ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                      {lesson.title}
                    </span>
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8">
          <GlassCard cornerRadius={12} blurAmount={0.01} className="p-4">
            <p className="text-sm text-gray-600 italic">
              "Latin is not dead, it's just taking a long nap."
            </p>
          </GlassCard>
        </div>
      </div>
    </aside>
  );
}