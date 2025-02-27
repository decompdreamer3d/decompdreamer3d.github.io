import React from 'react';
import { ContentSection } from '../ContentSection';

export function MotivationSection() {
  return (
    <ContentSection 
      title="Motivation" 
      gradientFrom="purple-500" 
      gradientVia="rose-400" 
      gradientTo="blue-500"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </ContentSection>
  );
}