import React, { useEffect, useRef } from 'react';

interface GaussianSplatViewerProps {
  className?: string;
  splatUrl?: string;
}

export function GaussianSplatViewer({ className, splatUrl }: GaussianSplatViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const fpsRef = useRef<HTMLSpanElement>(null);
  const camidRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create a script element to load the Splat.js
    const script = document.createElement('script');
    script.src = '/src/Splat.js';
    script.async = true;

    // Initialize the viewer once the script is loaded
    script.onload = () => {
      if (window.initViewer) {
        window.initViewer({
          canvas: canvasRef.current!,
          progress: progressRef.current!,
          message: messageRef.current!,
          spinner: spinnerRef.current!,
          fps: fpsRef.current!,
          camid: camidRef.current!,
          splatUrl
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      if (window.cleanupViewer) {
        window.cleanupViewer();
      }
    };
  }, [splatUrl]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div id="progress" ref={progressRef} className="absolute top-0 h-1 bg-blue-500 z-50 transition-all duration-100 ease-in-out" />
      <div id="message" ref={messageRef} className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none text-red-500 font-bold text-lg" />
      
      <div ref={spinnerRef} className="scene absolute inset-0 flex items-center justify-center z-30">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-faces">
              <div className="cube-face bottom" />
              <div className="cube-face top" />
              <div className="cube-face left" />
              <div className="cube-face right" />
              <div className="cube-face back" />
              <div className="cube-face front" />
            </div>
          </div>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="block absolute inset-0 w-full h-full touch-none"
      />

      <div className="absolute bottom-3 right-3 z-50">
        <span ref={fpsRef} className="text-white text-sm" />
      </div>
      <div className="absolute top-3 right-3 z-50">
        <span ref={camidRef} className="text-white text-sm" />
      </div>

      <div className="absolute top-3 left-3 z-50">
        <details className="text-sm text-white">
          <summary className="cursor-pointer">Controls</summary>
          <div className="bg-black/60 p-3 rounded-lg mt-2 whitespace-pre-wrap text-xs">
{`movement (arrow keys)
- left/right arrow keys to strafe side to side
- up/down arrow keys to move forward/back
- space to jump

camera angle (wasd)
- a/d to turn camera left/right
- w/s to tilt camera up/down
- q/e to roll camera counterclockwise/clockwise
- i/k and j/l to orbit

mouse/touch
- click/touch and drag to orbit
- right click and drag to move
- pinch to zoom
- two finger rotate to rotate camera`}
          </div>
        </details>
      </div>
    </div>
  );
}

// Add type definitions for the global window object
declare global {
  interface Window {
    initViewer?: (config: {
      canvas: HTMLCanvasElement;
      progress: HTMLDivElement;
      message: HTMLDivElement;
      spinner: HTMLDivElement;
      fps: HTMLSpanElement;
      camid: HTMLSpanElement;
      splatUrl?: string;
    }) => void;
    cleanupViewer?: () => void;
  }
}