import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentSection } from './ContentSection';
import { comparisonData } from '../data/comparisonData';

export const ComparisonSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? comparisonData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === comparisonData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevClick();
      } else if (event.key === 'ArrowRight') {
        handleNextClick();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentComparison = comparisonData[currentIndex];

  return (
    <section className="py-12">
      <div className="w-full max-w-none mx-auto px-0 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <ContentSection 
            title="Qualitative Comparisons" 
            gradientFrom="rose-400" 
            gradientVia="blue-500" 
            gradientTo="purple-500"
          />
          <p className="text-2xl bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent font-semibold -mt-12">
            {currentComparison.title}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#6366F1] text-white rounded-full p-2 shadow-lg hover:bg-[#4F46E5] transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-7 gap-2 mx-auto">
            {/* Main video - DecompDreamer */}
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-lg shadow-lg object-cover"
                src={currentComparison.decompDreamer.videoUrl}
              />
              <div className="mt-2 text-lg font-semibold text-center text-gray-800">
                <p className="text-center text-m">{currentComparison.decompDreamer.title}</p>
              </div>
            </div>

            {/* Main video - GraphDreamer */}
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-lg shadow-lg object-cover"
                src={currentComparison.graphDreamer.videoUrl}
              />
              <div className="mt-2 text-lg font-semibold text-center text-gray-800">
                <p className="text-center text-m">{currentComparison.graphDreamer.title}</p>
              </div>
            </div>

            {/* Sub videos */}
            {currentComparison.subVideos.map((subVideo, index) => (
              <div key={index} className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                  src={subVideo.videoUrl}
                />
                <div className="mt-2 text-lg font-semibold text-center text-gray-800">
                  <p className="text-center text-m">{subVideo.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#6366F1] text-white rounded-full p-2 shadow-lg hover:bg-[#4F46E5] transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-20 gap-2">
          {comparisonData.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};