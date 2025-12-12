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
      },
      {
        "type": "quiz",
        "questions": [
          {
            "question": "1. What case is dominam in?",
            "answers": [
              { "string": "a. Accusative", "correct": true },
              { "string": "b. Nominative", "correct": false },
              { "string": "c. Dative", "correct": false },
              { "string": "d. Ablative", "correct": false }
            ]
          },
          {
            "question": "2. Translate this sentence: Ego dicto amicum.",
            "answers": [
              { "string": "a. I was speaking to the friend.", "correct": false },
              { "string": "b. We spoke to the dog.", "correct": false },
              { "string": "c. I am speaking to the friend.", "correct": false },
              { "string": "d. The boy is speaking to me.", "correct": false }
            ]
          },
          {
            "question": "3. The number 56 in Roman numerals",
            "answers": [
              { "string": "a. XXXVI", "correct": false },
              { "string": "b. LVI", "correct": true },
              { "string": "c. CIV", "correct": false },
              { "string": "d. DVI", "correct": false }
            ]
          },
          {
            "question": "4. What year did Mt. Vesuvius erupt?",
            "answers": [
              { "string": "a. 56 A.D.", "correct": false },
              { "string": "b. 170 A.D.", "correct": false },
              { "string": "c. 79 A.D.", "correct": true },
              { "string": "d. 167 B.C.", "correct": false }
            ]
          },
          {
            "question": "5. What does tertius translate to?",
            "answers": [
              { "string": "a. Land", "correct": false },
              { "string": "b. Third", "correct": true },
              { "string": "c. Six", "correct": false },
              { "string": "d. Scared", "correct": false }
            ]
          },
          {
            "question": "6. Who wrote the only valid account of the eruption of Mt. Vesuvius?",
            "answers": [
              { "string": "a. Caesar", "correct": false },
              { "string": "b. Pliny the Younger", "correct": true },
              { "string": "c. Tacitus", "correct": false },
              { "string": "d. Pliny the Elder", "correct": false }
            ]
          },
          {
            "question": "7. What is the tense of visitabat?",
            "answers": [
              { "string": "a. Present", "correct": false },
              { "string": "b. Perfect", "correct": false },
              { "string": "c. Pluperfect", "correct": false },
              { "string": "d. Imperfect", "correct": true }
            ]
          },
          {
            "question": "8. Callidor",
            "answers": [
              { "string": "a. strong", "correct": false },
              { "string": "b. Smarter", "correct": false },
              { "string": "c. Smartest", "correct": false },
              { "string": "d. Better", "correct": true }
            ]
          },
          {
            "question": "9. What is the dative of a sentence",
            "answers": [
              { "string": "a. Subject", "correct": false },
              { "string": "b. Direct object", "correct": false },
              { "string": "c. Indirect object", "correct": true },
              { "string": "d. Prepositional phrase", "correct": false }
            ]
          },
          {
            "question": "10. What declension and number is magistras",
            "answers": [
              { "string": "a. 3rd singular", "correct": false },
              { "string": "b. 1st plural", "correct": false },
              { "string": "c. 2nd singular", "correct": false },
              { "string": "d. 3rd plural", "correct": true }
            ]
          },
          {
            "question": "11. How do adjectives NOT have to agree",
            "answers": [
              { "string": "a. Number", "correct": false },
              { "string": "b. Declension", "correct": true },
              { "string": "c. Case", "correct": false },
            ]
          },
          {
            "question": "12. What is this Roman numeral: CCXVII",
            "answers": [
              { "string": "a. 2053", "correct": false },
              { "string": "b. 59", "correct": false },
              { "string": "c. 217", "correct": true },
              { "string": "d. 94", "correct": false }
            ]
          },
          {
            "question": "13. What is the accusative of this sentence: Metella cibum gustat.",
            "answers": [
              { "string": "a. Metella", "correct": false },
              { "string": "b. Cibum", "correct": true },
              { "string": "c. Gustat", "correct": false },
              { "string": "d. Not applicable", "correct": false }
            ]
          },
          {
            "question": "14. What is the dative of this sentence: Grumio est anxius.",
            "answers": [
              { "string": "a. Est", "correct": false },
              { "string": "b. Grumio", "correct": false },
              { "string": "c. anxius", "correct": false },
              { "string": "d. Not applicable", "correct": true }
            ]
          },
          {
            "question": "15. What is the center of a Roman city?",
            "answers": [
              { "string": "a. The baths", "correct": false },
              { "string": "b. The harbor", "correct": false },
              { "string": "c. The gladiator arena", "correct": false },
              { "string": "d. The forum", "correct": true }
            ]
          },
          {
            "question": "16. The Roman religion has one god",
            "answers": [
              { "string": "a. True", "correct": false },
              { "string": "b. False", "correct": true }
            ]
          },
          {
            "question": "17. Translate vituperavis",
            "answers": [
              { "string": "a. They curse out", "correct": false },
              { "string": "b. He was cursing out", "correct": false },
              { "string": "c. You cursed out", "correct": true },
              { "string": "d. We are cursing out", "correct": false }
            ]
          },
          {
            "question": "18. Meaning of ab-",
            "answers": [
              { "string": "a. Down", "correct": false },
              { "string": "b. Around", "correct": false },
              { "string": "c. From", "correct": true },
              { "string": "d. Towards", "correct": false }
            ]
          },
          {
            "question": "19. What does the nominative case represent in a sentence?",
            "answers": [
              { "string": "a. The prepositional phrase", "correct": false },
              { "string": "b. The verb", "correct": false },
              { "string": "c. Gerund", "correct": false },
              { "string": "d. Subject", "correct": true }
            ]
          },
          {
            "question": "20. Quoque",
            "answers": [
              { "string": "a. Which", "correct": false },
              { "string": "b. Also", "correct": true },
              { "string": "c. How", "correct": false },
              { "string": "d. Close", "correct": false }
            ]
          },
          {
            "question": "21. What region is Pompeii located in?",
            "answers": [
              { "string": "a. Sicily", "correct": false },
              { "string": "b. Tuscany", "correct": false },
              { "string": "c. Lazio", "correct": false },
              { "string": "d. Campania", "correct": true }
            ]
          },
          {
            "question": "22. Most Romans had slaves.",
            "answers": [
              { "string": "a. True", "correct": false },
              { "string": "b. False", "correct": true }
            ]
          },
          {
            "question": "23. The Roman Empire stretched from Western Europe, North Africa, and parts of the Middle East.",
            "answers": [
              { "string": "a. True", "correct": true },
              { "string": "b. False", "correct": false }
            ]
          },
          {
            "question": "24. Translate: mercātor vīllam intrat. Metella est in ātriō.",
            "answers": [
              { "string": "a. A robber is in the house. Metella is in the kitchen.", "correct": false },
              { "string": "b. The merchant entered the bath. Metella is in the garden.", "correct": false },
              { "string": "c. The house is full of guests. Metella is in the garden inside the house.", "correct": false },
              { "string": "d. The merchant enters the house. Metella is in the atrium.", "correct": true }
            ]
          },
          {
            "question": "25. “Salve!” Caecilius mercātōrem salūtat. How many people is Caecilius greeting?",
            "answers": [
              { "string": "a. One", "correct": true },
              { "string": "b. None", "correct": false },
              { "string": "c. More than one", "correct": false },
              { "string": "d. Caecilius is being greeted", "correct": false }
            ]
          }
        ]
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
