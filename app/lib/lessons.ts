// src/lib/lessons.ts   (or app/lib/lessons.ts)

import lesson0 from '../../data/lesson-0.json' assert { type: 'json' };
import lesson1 from '../../data/lesson-1.json' assert { type: 'json' };
import lesson2 from '../../data/lesson-2.json' assert { type: 'json' };
import lesson3 from '../../data/lesson-3.json' assert { type: 'json' };
// ... import all

import type { Lesson } from '../../types/lesson';

const fullLessons = [
  lesson0,
  lesson1,
  lesson2,
  lesson3
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