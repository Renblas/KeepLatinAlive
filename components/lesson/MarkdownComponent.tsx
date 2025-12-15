"use client";

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewerProps {
  filePath: string;
}

export default function MarkdownViewer({ filePath }: MarkdownViewerProps) {
  const [markdown, setMarkdown] = useState<string>(''); // Start empty
  const [loading, setLoading] = useState(true);         // Track loading state

  useEffect(() => {
    setLoading(true);
    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load');
        return res.text();
      })
      .then(text => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching markdown:", err);
        setMarkdown(''); // or set error message
        setLoading(false);
      });
  }, [filePath]);

  // Only render ReactMarkdown if we have real content
  const trimmed = markdown.trim();

  if (loading) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div className="markdown-container max-w-none">
      {trimmed ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {trimmed}
        </ReactMarkdown>
      ) : (
        <p className="text-gray-500 italic">No content available for this lesson.</p>
      )}
    </div>
  );
}