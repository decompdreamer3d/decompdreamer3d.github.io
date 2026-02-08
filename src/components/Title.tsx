import React from 'react';
import { FileText, Github } from 'lucide-react';

export function Title() {
  return (
    <div className="text-center mb-8 sm:mb-16">
      <h1 className="space-y-2">
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
          A Composition-Aware Curriculum for Structured 3D Asset Generation
        </div>

        <div className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-normal pb-1">
          
        </div>
      </h1>

      {/* Authors Section */}
      <div className="mt-8 space-y-1">
        {/* First Row of Authors */}
        <div className="flex justify-center gap-8 text-lg">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Utkarsh Nath
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1,*</sup>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Rajeev Goel
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1,*</sup>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Rahul Khurana
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1</sup>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Kyle Min
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">2</sup>
          </div>
        </div>

        {/* Second Row of Authors */}
        <div className="flex justify-center gap-8 text-lg">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Mark Ollila
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1</sup>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Pavan Turaga
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1</sup>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Varun Jampani
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">3</sup>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
            Tejaswi Gowda
            <sup className="font-normal text-sm bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1</sup>
          </div>
        </div>

        {/* Affiliations */}
        <div className="flex justify-center gap-6 text-lg mt-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <sup className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1</sup>Arizona State University
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <sup className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">2</sup>Intel Labs
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <sup className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">3</sup>Stability AI
          </div>
        </div>

        {/* Equal Contribution Note */}
        <div className="text-lg mt-2">
          * Equal contribution
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://arxiv.org/abs/2503.11981"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FileText className="w-5 h-5" />
            <span>arXiv Paper</span>
          </a>
          <button
            disabled
            className="flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-full cursor-not-allowed shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>Code (Coming Soon)</span>
          </button>
        </div>
      </div>
    </div>
  );
}