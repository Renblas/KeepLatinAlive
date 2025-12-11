"use client"

import { notFound } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import ScrollSection from '../../../components/ScrollSection';
import VideoComponent from '../../../components/lesson/VideoComponent';
import QuizComponent from '../../../components/lesson/QuizComponent';
import ReferenceComponent from '../../../components/lesson/ReferenceComponent';
import { getLessonBySlug } from '../../../data/lessons';

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson) notFound();

  return (
      
      <div className="flex">

        <Sidebar />
        
        <main className="flex-1 snap-container">
          <div className="p-12">
            <h1 className="text-5xl font-bold text-amber-100 mb-16 text-center">
              {lesson.name}
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-24">
              {lesson.components.map((component, index) => (
                <ScrollSection key={index}>
                  {component.type === 'video' && (
                    <VideoComponent component={component} />
                  )}
                  {component.type === 'quiz' && (
                    <QuizComponent component={component} />
                  )}
                  {component.type === 'reference' && (
                    <ReferenceComponent component={component} />
                  )}
                </ScrollSection>
              ))}
            </div>

            <div className="mt-24 max-w-4xl mx-auto">
              <ScrollSection>
                <div className="flex justify-between items-center p-8 bg-amber-700 rounded-xl">
                  <button className="text-amber-50 hover:text-red-900 font-medium">
                    ← Previous Lesson
                  </button>
                  <button className="bg-red-800 text-amber-50 px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                    Next Lesson →
                  </button>
                </div>
              </ScrollSection>
            </div>
          </div>
        </main>
      </div>
  );
}
