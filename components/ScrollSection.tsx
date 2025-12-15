'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollSection({ children, className = '' }: ScrollSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const checkVisibility = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Consider it visible if 20% of it is in viewport (same as your threshold)
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after visible to improve perf
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-100px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      // Critical: manually check on mount (fixes client navigation)
      checkVisibility();
    }

    // Also check on window scroll/resizes in case of edge cases
    const handleScrollOrResize = () => {
      if (!isVisible) checkVisibility();
    };

    window.addEventListener('scroll', handleScrollOrResize);
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [isVisible]); // re-run if not visible yet

  return (
    <div
      ref={sectionRef}
      className={`fade-in-section snap-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}