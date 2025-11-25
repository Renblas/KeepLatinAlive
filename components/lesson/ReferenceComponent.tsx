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
    <div className="p-12">
      {component.title && (
        <h3 className="text-3xl font-bold text-amber-100 mb-8">{component.title}</h3>
      )}
      <div className="markdown-content text-amber-50">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {component.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}