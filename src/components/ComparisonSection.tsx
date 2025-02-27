import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { comparisonData } from '../data/comparisonData';

interface ComparisonSectionProps {
  onComparisonSelect: (comparison: typeof comparisonData[0]) => void;
}

export function ComparisonSection({ onComparisonSelect }: ComparisonSectionProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const comparisonsPerPage = 1;
  const totalPages = Math.ceil(comparisonData.length / comparisonsPerPage);

  const getCurrentPageComparisons = () => {
    const start = currentPage * comparisonsPerPage;
    return comparisonData.slice(start, start + comparisonsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 x-gradient-font">
        Comparison
      </h2>
      
      <div className="relative">
        <div className="space-y-8">
          {getCurrentPageComparisons().map((comparison) => (
            <div 
              key={comparison.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-200 transform hover:scale-105"
              onClick={() => onComparisonSelect(comparison)}
            >
              <div className="grid grid-cols-2 gap-4 p-4">
                {/* GraphDreamer Video */}
                <div className="space-y-2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      src={comparison.graphDreamer.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-center font-medium text-gray-700">
                    {comparison.graphDreamer.title}
                  </p>
                </div>

                {/* DecompDreamer Video */}
                <div className="space-y-2">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      src={comparison.decompDreamer.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-center font-medium text-gray-700">
                    {comparison.decompDreamer.title}
                  </p>
                </div>
              </div>
              <div className="p-4 border-t">
                <p className="font-medium text-gray-800 mb-2">{comparison.title}</p>
                <p className="text-sm text-gray-600">
                  {comparison.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#6366F1] text-white rounded-full p-2 shadow-lg hover:bg-[#4F46E5] transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#6366F1] text-white rounded-full p-2 shadow-lg hover:bg-[#4F46E5] transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center items-center space-x-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentPage === index ? 'bg-[#6366F1]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}