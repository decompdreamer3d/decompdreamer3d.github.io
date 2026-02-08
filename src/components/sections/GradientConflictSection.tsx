import React from 'react';
import { ContentSection } from '../ContentSection';

interface GradientConflictSectionProps {
  imageUrl?: string;
  altText?: string;
}

export function GradientConflictSection({ imageUrl, altText }: GradientConflictSectionProps) {
  return (
    <ContentSection 
      title="Quantifying Gradient Conflicts" 
      gradientFrom="violet-400" 
      gradientVia="pink-500" 
      gradientTo="orange-500"
    >
      {imageUrl && altText && (
        <div className="w-full max-w-6xl mx-auto mb-16">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="bg-white w-full h-full">
              <img 
                src={imageUrl} 
                alt={altText} 
                className="w-full h-auto rounded-lg"
                style={{ backgroundColor: 'white' }}
              />
            </div>
            <p className="text-xs sm:text-lg text-gray-600 text-center mt-4">
              Given a complex multi-object prompt, different optimization strategies exhibit distinct behaviors. Prior methods either converge to suboptimal solutions or become unstable due to conflicting objectives. In contrast, DecompDreamer follows a staged optimization curriculum that first resolves inter-object relationships to establish a coherent structure, and then refines individual objects, resulting in stable convergence and consistent high-quality generation.
            </p>
          </div>
        </div>
      )}
    </ContentSection>
  );
}
