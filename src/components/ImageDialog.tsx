import React from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

export function ImageDialog({ isOpen, onClose, imageUrl, altText }: ImageDialogProps) {
  const [scale, setScale] = React.useState(1);

  if (!isOpen) return null;

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
          <button
            onClick={zoomIn}
            className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            onClick={zoomOut}
            className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            onClick={onClose}
            className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="bg-white rounded-lg p-2">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="max-w-full max-h-full object-contain transition-transform duration-200"
            style={{ transform: `scale(${scale})`, backgroundColor: 'white' }}
          />
        </div>
        <p className="text-white text-center mt-4 text-sm">
          {altText}
        </p>
      </div>
    </div>
  );
}