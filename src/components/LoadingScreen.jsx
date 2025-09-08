// File: src/components/LoadingScreen.jsx

import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a moment after finishing before calling onComplete
          setTimeout(onComplete, 500); 
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed of the loading bar here

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background text-cyan">
      <div className="text-2xl font-mono mb-4">INITIALIZING SYSTEMS...</div>
      <div className="w-1/2 bg-cyan/20 h-4 border border-cyan">
        <div 
          className="bg-cyan h-full transition-all duration-150" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-4 text-lg font-mono">{progress}% COMPLETE</div>
    </div>
  );
};

export default LoadingScreen;