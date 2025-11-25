'use client';

import { useState } from 'react';
import { GlassCard } from '@developer-hub/liquid-glass';
import type { QuizComponent as QuizComponentType } from '../../types/lesson';

interface QuizComponentProps {
  component: QuizComponentType;
}

export default function QuizComponent({ component }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = component.questions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === question.correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < component.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="p-12 text-center">
        <h3 className="text-3xl font-bold text-amber-100 mb-6">Quiz Complete!</h3>
        <p className="text-2xl text-amber-50 mb-8">
          You scored {score} out of {component.questions.length}
        </p>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswer(null);
            setShowResult(false);
            setScore(0);
            setCompleted(false);
          }}
          className="bg-amber-700 text-amber-100 px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-12">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-amber-100">Quiz</h3>
          <span className="text-lg text-amber-50">
            Question {currentQuestion + 1} of {component.questions.length}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-amber-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / component.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h4 className="text-xl font-semibold text-amber-50 mb-8">{question.question}</h4>

      <div className="space-y-4 mb-8">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
              selectedAnswer === index
                ? showResult
                  ? index === question.correctAnswerIndex
                    ? 'border-green-500 bg-green-700'
                    : 'border-red-500 bg-red-700'
                  : 'border-amber-600 bg-amber-700'
                : showResult && index === question.correctAnswerIndex
                ? 'border-green-500 bg-green-700'
                : 'border-amber-600 hover:border-amber-700'
            }`}
          >
            <span className="text-lg text-amber-50">{answer}</span>
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`p-6 rounded-lg mb-6 ${
          selectedAnswer === question.correctAnswerIndex
            ? 'border-2 border-green-500 bg-green-700'
            : 'border-2 border-red-500 bg-red-700'
        }`}>
          <p className="text-lg font-semibold text-amber-50">
            {selectedAnswer === question.correctAnswerIndex
              ? '✓ Correct!'
              : '✗ Incorrect'}
          </p>
        </div>
      )}

      <div className="flex justify-end">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="bg-amber-600 text-amber-50 px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-amber-600 text-amber-50 px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
          >
            {currentQuestion < component.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
}