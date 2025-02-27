import React from 'react';
import { X } from 'lucide-react';

interface ComparisonVideo {
  title: string;
  videoUrl: string;
}

interface SubVideo {
  title: string;
  graphDreamer: ComparisonVideo;
  decompDreamer: ComparisonVideo;
}

interface ComparisonDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  subVideos: SubVideo[];
}

export function ComparisonDialog({
  isOpen,
  onClose,
  title,
  description,
  subVideos,
}: ComparisonDialogProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  if (!isOpen) return null;

  const currentVideo = subVideos[activeTab];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="w-full">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 text-center">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors flex-shrink-0 ml-4"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex justify-center px-4 py-3 overflow-x-auto">
            <div className="inline-flex space-x-2">
              {subVideos.map((video, index) => (
                <button
                  key={index}
                  className={`
                    px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 transform hover:scale-110
                    ${activeTab === index
                      ? 'bg-[#6366F1] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setActiveTab(index)}
                >
                  {video.title}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {/* GraphDreamer Video */}
            <div className="space-y-2">
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <video
                  src={currentVideo.graphDreamer.videoUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              </div>
              <p className="text-center font-medium text-gray-700">
                {currentVideo.graphDreamer.title}
              </p>
            </div>

            {/* DecompDreamer Video */}
            <div className="space-y-2">
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <video
                  src={currentVideo.decompDreamer.videoUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              </div>
              <p className="text-center font-medium text-gray-700">
                {currentVideo.decompDreamer.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}