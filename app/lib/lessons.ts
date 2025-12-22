// src/lib/lessons.ts   (or app/lib/lessons.ts)

import lesson0 from '../../data/lesson-0.json' assert { type: 'json' };
import lesson1 from '../../data/lesson-1.json' assert { type: 'json' };
import lesson2 from '../../data/lesson-2.json' assert { type: 'json' };
import lesson3 from '../../data/lesson-3.json' assert { type: 'json' };
import lesson4 from '../../data/lesson-4.json' assert { type: 'json' };
import lesson5 from '../../data/lesson-5.json' assert { type: 'json' };
import lesson6 from '../../data/lesson-6.json' assert { type: 'json' };
import lesson7 from '../../data/lesson-7.json' assert { type: 'json' };
import lesson8 from '../../data/lesson-8.json' assert { type: 'json' };
// ... import all

import type { Lesson } from '../../types/lesson';

const fullLessons = [
  lesson0,
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8
].flat() as Lesson[];

// Export full lessons for server use only
export const lessons = fullLessons;

export function getLessonBySlug(slug: string) {
  return lessons.find(l => l.slug === slug);
}

export function getLessonById(id: number) {
  return (id >= 0 && id < lessons.length) ? lessons[id] : undefined;
}

export function getAllSlugs() {
  return lessons.map(l => l.slug);
}