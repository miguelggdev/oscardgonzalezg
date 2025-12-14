import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in-up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the item is visible
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = {
    'fade-in-up': 'transition-all duration-1000 ease-out transform translate-y-4 opacity-0',
    'fade-in': 'transition-opacity duration-1000 ease-out opacity-0',
    'slide-in-left': 'transition-all duration-1000 ease-out transform -translate-x-10 opacity-0',
  };

  const visibleClasses = {
    'fade-in-up': 'translate-y-0 opacity-100',
    'fade-in': 'opacity-100',
    'slide-in-left': 'translate-x-0 opacity-100',
  };

  return (
    <div
      ref={domRef}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};