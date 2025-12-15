"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlassCard } from '@developer-hub/liquid-glass';
import { lessons } from "../app/lib/lessons";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky w-auto top-0 self-start h-fill overflow-y-auto overflow-x-none">
      <GlassCard 
                  cornerRadius={12}
                  blurAmount={0.01}
                  className={`p-4 transition-all`}

                  /*${
                    isActive 
                      ? 'ring-2 ring-amber-400' 
                      : 'hover:ring-1 hover:ring-gray-300'
                  }*/
                >
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-amber-50 mb-6">Lessons</h2>
        
        <nav className="space-y-3">
          {lessons.map((lesson) => {
            const isActive = pathname === `/lessons/${lesson.slug}`;
            return (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.slug}`}
                className="block"
              >
                
                  <div className="flex items-center">
                    <span className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold
                      ${isActive ? 'bg-amber-400 text-red-900' : 'bg-amber-600 text-amber-100'}
                    `}>
                      {lesson.id}
                    </span>
                    <span className={`font-medium ${isActive ? 'text-amber-100' : 'text-amber-100'}`}>
                      {lesson.name}
                    </span>
                  </div>
                
              </Link>
            );
          })}
        </nav>

        <div className="mt-8">
          
            <p className="text-sm text-amber-100 italic">
              "Latin is not dead, it's just taking a long nap."
            </p>
          
        </div>
      </div>
      </GlassCard>
    </aside>
  );
}
