import fs from 'fs';
import path from 'path';

import type { Lesson } from '../types/lesson';

export var lessons: Lesson[];

const jsonFiles: string[] = [];
const directoryPath = "./"

try {
  const filesAndDirectories = fs.readdirSync(directoryPath);

  for (const item of filesAndDirectories) {
    const absolutePath = path.join(directoryPath, item);
    const stats = fs.statSync(absolutePath);

    if (stats.isFile() && path.extname(item) === '.json') {
      jsonFiles.push(absolutePath);
    } else if (stats.isDirectory()) {
      // Optionally, recursively search subdirectories
      // jsonFiles.push(...getAllJsonFiles(absolutePath));
    }
  }
} catch (error) {
  console.error(`Error reading directory ${directoryPath}:`, error);
}

for (const lesson of jsonFiles) {
  fs.readFile(lesson, 'utf8', (err, jsonString) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    try {
      const data = JSON.parse(jsonString);
      lessons.push(data);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}