
import type { ReferenceComponent as ReferenceComponentType } from '../../types/lesson';
import MarkdownViewer from './MarkdownComponent';

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
        <MarkdownViewer filePath={component.content}></MarkdownViewer>
      </div>
    </div>
  );
}