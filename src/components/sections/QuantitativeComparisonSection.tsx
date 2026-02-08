import React from 'react';
import { ContentSection } from '../ContentSection';

interface QuantitativeComparisonSectionProps {
  imageUrl?: string;
  altText?: string;
}

export function QuantitativeComparisonSection({ imageUrl, altText }: QuantitativeComparisonSectionProps) {
  return (
    <ContentSection 
      title="Quantitative Comparisons" 
      gradientFrom="emerald-400" 
      gradientVia="cyan-500" 
      gradientTo="blue-500"
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
              Quantitative comparison of CLIP Score, Pick-A-Pic, Text-to-3D alignment, Relational Fidelity, User Preference Study, and Execution Time for generating 6 objects. All metrics except execution time are reported as percentages; execution time is reported in minutes.
            </p>
          </div>
        </div>
      )}
    </ContentSection>
  );
}
