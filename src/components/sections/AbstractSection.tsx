import React from 'react';
import { ContentSection } from '../ContentSection';

export function AbstractSection() {
  return (
    <ContentSection 
      title="Abstract" 
      gradientFrom="blue-500" 
      gradientVia="purple-500" 
      gradientTo="rose-400"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </ContentSection>
  );
}