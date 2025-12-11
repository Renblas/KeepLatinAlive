import type { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    "id": 0,
    "slug": "outline",
    "name": "Course Outline",
    "components": [
      {
        "type": "video",
        "youtubeUrl": "https://youtu.be/Bora_I2oowA?si=pkFjDFuOoHIJGJEH",
        "title": "Course Outline",
        "description": "An outline for the adventure ahead"
      }
    ]
  },
  {
    "id": 1,
    "slug": "lesson-1",
    "name": "Lesson 1",
    "components": [
      {
        "type": "video",
        "youtubeUrl": "https://youtu.be/-kFvc_ZX8-Q?si=nuT1euk2dRBKL-Hm",
        "title": "Lesson 1 Grammer",
        "description": "video description"
      },
      {
        "type": "video",
        "youtubeUrl": "https://youtu.be/5XI6MOmiWfE?si=XRiCs-CauYlQ4LQ6",
        "title": "Lesson 1 Culture",
        "description": "video description"
      }
    ]
  }
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}
