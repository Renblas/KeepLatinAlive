import type { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    name: "Introduction to Latin",
    slug: "intro",
    components: [
      {
        type: 'video',
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Welcome to Latin',
        description: 'An introduction to the Latin language and its importance in history.'
      },
      {
        type: 'reference',
        title: 'What is Latin?',
        content: `# Introduction to Latin

Latin is the language of ancient Rome and the Roman Empire. It has had an enormous influence on the development of Western culture and languages.

## Why Learn Latin?

| Benefit | Description |
|---------|-------------|
| **Language Skills** | Improves understanding of English and Romance languages |
| **Historical Access** | Read original texts from ancient Rome |
| **Academic Advantage** | Helps with scientific and legal terminology |

## Key Facts

- Latin is over 2,500 years old
- It's the basis for **French, Spanish, Italian, Portuguese, and Romanian**
- Many English words come from Latin roots

![Roman Forum](https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=400&fit=crop)

### Getting Started

1. Learn the alphabet
2. Master basic pronunciation
3. Study simple vocabulary
4. Practice basic grammar

> "Latin is not dead, it's just taking a long nap." - Anonymous`
      },
      {
        type: 'quiz',
        questions: [
          {
            question: 'Which modern languages are derived from Latin?',
            answers: [
              'German and Dutch',
              'French and Spanish',
              'English and Greek',
              'Russian and Polish'
            ],
            correctAnswerIndex: 1
          },
          {
            question: 'Approximately how old is the Latin language?',
            answers: [
              '500 years',
              '1,000 years',
              '2,500 years',
              '5,000 years'
            ],
            correctAnswerIndex: 2
          },
          {
            question: 'What was Latin the language of?',
            answers: [
              'Ancient Greece',
              'Ancient Egypt',
              'Ancient Rome',
              'Ancient Persia'
            ],
            correctAnswerIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Pronunciation Guide",
    slug: "pronunciation",
    components: [
      {
        type: 'reference',
        title: 'Latin Pronunciation',
        content: `# Latin Pronunciation Guide

Learning proper Latin pronunciation is essential for speaking and understanding the language.

## Vowels

| Letter | Sound | Example |
|--------|-------|---------|
| A | "ah" as in "father" | **a**mor (love) |
| E | "eh" as in "pet" | **e**st (is) |
| I | "ee" as in "machine" | **i**ta (thus) |
| O | "oh" as in "hope" | **o**pto (I choose) |
| U | "oo" as in "rude" | **u**t (so that) |

## Practice Words

Try pronouncing these common Latin words:

- **salve** (hello) - SAHL-weh
- **vale** (goodbye) - WAH-leh
- **amo** (I love) - AH-moh
- **pax** (peace) - pahks`
      }
    ]
  }
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}