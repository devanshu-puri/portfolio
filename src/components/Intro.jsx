// File: src/components/Intro.jsx

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Intro = () => {
  const [text] = useTypewriter({
    words: [
      'Hello, I am Devanshu.', 
      'I am a Full-Stack Developer.', 
      'I turn ideas into reality.',
      '<And I love building cool things />'
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    // 3. REPOSITION: Changed from 'justify-center' to 'justify-start' and added padding-top
    // to push the content down from the top, effectively placing it higher than the center.
    <section className="h-screen flex flex-col items-center justify-start pt-48 md:pt-64 text-center">
      
      {/* 1. HEADING SIZE: Increased from md:text-6xl to md:text-7xl */}
      <h1 className="text-5xl md:text-7xl font-bold">
        <span className="text-cyan">&gt; </span>
        
        {/* 2. TEXT COLOR: Added 'text-primary' to make the typing text white */}
        <span className="text-primary">{text}</span>
        
        <Cursor cursorStyle='_' />
      </h1>
      
      {/* 1. SUBHEADING SIZE: Increased from md:text-xl to md:text-2xl and made it wider */}
      <p className="text-xl md:text-2xl mt-6 text-primary/80 max-w-3xl">
        Welcome to my digital space. I specialize in creating modern, responsive, and performant web applications.
      </p>
    </section>
  );
};

export default Intro;