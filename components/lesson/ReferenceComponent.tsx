'use client';

import { GlassCard } from '@developer-hub/liquid-glass';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ReferenceComponent as ReferenceComponentType } from '../../types/lesson';

interface ReferenceComponentProps {
  component: ReferenceComponentType;
}

export default function ReferenceComponent({ component }: ReferenceComponentProps) {
  return (
    <GlassCard cornerRadius={24} blurAmount={0.01} className="p-12 border border-gray-200">
      {component.title && (
        <h3 className="text-3xl font-bold text-gray-900 mb-8">{component.title}</h3>
      )}
      <div className="markdown-content text-gray-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {component.content}
        </ReactMarkdown>
      </div>
    </GlassCard>
  );
}