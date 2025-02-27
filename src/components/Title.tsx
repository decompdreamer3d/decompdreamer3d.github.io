import React from 'react';

export function Title() {
  return (
    <h1 className="text-center mb-8 sm:mb-16 space-y-2">
      <div
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold inline-block bg-clip-text text-transparent drop-shadow-lg tracking-wide leading-tight animate-one-way-color-wave"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #0078d4, #4e5fd9, #8661c5, #c364a5, #ff9349, #ff6b00, #0078d4)',
          backgroundSize: '200% 100%',
        }}
      >
        DecompDreamer
      </div>

      <div className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-normal pb-1">
        Advancing 3D Scene Generation
      </div>

      <div className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-normal pb-1">
        with Multi-Object Decomposition and Gaussian Splatting
      </div>
    </h1>
  );
}