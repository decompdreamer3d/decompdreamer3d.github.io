import React from 'react';

interface TeaserSectionProps {
  teaserVideo: {
    mainVideoUrl: string;
    title: string;
    description: string;
    subVideos: Array<{
      title: string;
      description: string;
      videoUrl: string;
    }>;
  };
  onVideoSelect: (video: typeof teaserVideo) => void;
}

export function TeaserSection({ teaserVideo, onVideoSelect }: TeaserSectionProps) {
  return (
    <div 
      className="w-full max-w-6xl mx-auto rounded-lg sm:rounded-xl overflow-hidden mb-16 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => onVideoSelect(teaserVideo)}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <video
          src={teaserVideo.mainVideoUrl}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-xs sm:text-sm text-gray-600 text-center">
          Figure 1: DecompDreamer overview demonstrating multi-object decomposition and Gaussian splatting
        </p>
      </div>
    </div>
  );
}