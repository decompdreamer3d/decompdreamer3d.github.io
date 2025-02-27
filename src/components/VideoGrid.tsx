import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  mainVideoUrl: string;
  subVideos: Array<{
    title: string;
    description: string;
    videoUrl: string;
  }>;
}

interface VideoGridProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

export function VideoGrid({ videos, onVideoSelect }: VideoGridProps) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const videosPerPage = 4;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const getCurrentPageVideos = () => {
    const start = currentPage * videosPerPage;
    return videos.slice(start, start + videosPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 x-gradient-font">
        Generated Text to 3D Assets
      </h2>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getCurrentPageVideos().map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-200 transform hover:scale-105"
              onClick={() => onVideoSelect(video)}
            >
              <div className="relative pb-[56.25%]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={video.mainVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                    const target = e.target as HTMLVideoElement;
                    console.log('Video src:', target.src);
                  }}
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-800 mb-2">{video.title}</p>
                <p className="text-sm text-gray-600">
                  {video.description}
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