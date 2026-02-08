import React from 'react';

export function Footer() {
  return (
    <div 
      className="w-full py-4 px-6"
      style={{
        backgroundImage: 'linear-gradient(90deg, #0078d4, #4e5fd9, #8661c5, #c364a5, #ff9349, #ff6b00)',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xs font-bold">DecompDreamer: A Composition-Aware Curriculum for Structured 3D Asset Generation</div>
        <div className="text-white text-xs font-bold">Template designed by Rajeev Goel</div>
      </div>
    </div>
  );
}