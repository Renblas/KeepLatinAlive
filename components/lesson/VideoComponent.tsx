'use client';

import { GlassCard } from '@developer-hub/liquid-glass';
import type { VideoComponent as VideoComponentType } from '../../types/lesson';

interface VideoComponentProps {
  component: VideoComponentType;
}

export default function VideoComponent({ component }: VideoComponentProps) {
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&"'>]+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(component.youtubeUrl);

  return (
    <GlassCard cornerRadius={24} blurAmount={0.01} className="p-8 border border-gray-200">
      {component.title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{component.title}</h3>
      )}
      {component.description && (
        <p className="text-gray-700 mb-6">{component.description}</p>
      )}
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={component.title || "Lesson Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </GlassCard>
  );
}