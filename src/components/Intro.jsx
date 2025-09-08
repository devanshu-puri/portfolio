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
    <section className="h-screen flex flex-col items-center justify-start pt-48 md:pt-64 text-center px-6">
      
      {/* Heading with larger scaling */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
        <span className="text-cyan">&gt; </span>
        <span className="text-primary">{text}</span>
        <Cursor cursorStyle='_' />
      </h1>
      
      {/* Subheading with larger scaling + highlight */}
      <p className="relative inline-block text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-6 text-primary/90 max-w-5xl leading-relaxed">
        <span className="relative z-10">
          Welcome to my digital space. I specialize in creating modern, responsive, and performant web applications.
        </span>
        <span className="absolute inset-0 bg-[#fd3db5]/50 -z-10 rounded-md"></span>
      </p>
    </section>
  );
};

export default Intro;
