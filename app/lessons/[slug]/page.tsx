import { notFound } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import ScrollSection from '../../../components/ScrollSection';
import VideoComponent from '../../../components/lesson/VideoComponent';
import QuizComponent from '../../../components/lesson/QuizComponent';
import ReferenceComponent from '../../../components/lesson/ReferenceComponent';
import { getLessonBySlug } from '../../../data/lessons';

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = await getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      
      <div className="flex">
        
        <main className="flex-1 snap-container">
          <div className="p-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center">
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
                <div className="flex justify-between items-center p-8 bg-white rounded-xl border border-gray-200">
                  <button className="text-gray-600 hover:text-gray-900 font-medium">
                    ← Previous Lesson
                  </button>
                  <button className="bg-red-800 text-amber-100 px-8 py-3 rounded-lg font-bold hover:bg-red-900 transition-colors">
                    Next Lesson →
                  </button>
                </div>
              </ScrollSection>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}