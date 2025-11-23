export interface VideoComponent {
  type: 'video';
  youtubeUrl: string;
  title?: string;
  description?: string;
}

export interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

export interface QuizComponent {
  type: 'quiz';
  questions: QuizQuestion[];
}

export interface ReferenceComponent {
  type: 'reference';
  content: string; // Markdown format with GFM (GitHub Flavored Markdown) support
  title?: string;
}

export type LessonComponent = VideoComponent | QuizComponent | ReferenceComponent;

export interface Lesson {
  id: number;
  name: string;
  slug: string;
  components: LessonComponent[];
}