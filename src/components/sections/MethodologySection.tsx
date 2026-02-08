import React, { useState } from 'react';
import { ContentSection } from '../ContentSection';
import { ImageDialog } from '../ImageDialog';
import { ZoomIn } from 'lucide-react';

interface MethodologySectionProps {
  imageUrl?: string;
  altText?: string;
}

export function MethodologySection({ imageUrl, altText }: MethodologySectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <ContentSection 
      title="Method" 
      gradientFrom="rose-400" 
      gradientVia="blue-500" 
      gradientTo="purple-500"
    >
      {imageUrl && altText && (
        <div className="w-full max-w-6xl mx-auto mb-16">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div 
              className="relative group cursor-pointer bg-white rounded-lg overflow-hidden" 
              onClick={() => setIsDialogOpen(true)}
            >
              <div className="bg-white w-full h-full">
                <img 
                  src={imageUrl} 
                  alt={altText} 
                  className="w-full h-auto rounded-lg"
                  style={{ backgroundColor: 'white' }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 rounded-lg">
                <div className="opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-lg text-gray-600 text-center mt-4">
              Overview of the DecompDreamer pipeline. Given a text prompt, a VLM generates a scene graph to guide a coarse initialization. The core of our method is a composition-aware optimization curriculum that first models joint relationships to build a coherent structure, then refines individual objects to produce high-fidelity, disentangled 3D assets.
            </p>
          </div>
          
          <ImageDialog 
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            imageUrl={imageUrl}
            altText={altText}
          />
        </div>
      )}
    </ContentSection>
  );
}