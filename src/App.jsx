// File: src/App.jsx

import React, { useRef, useLayoutEffect } from 'react';
import useSmoothScroll from './useSmoothScroll';
import Navbar from './components/Navbar';
import Scene3D from './components/Scene3D';
import Intro from './components/Intro'; // Import our new Intro component
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useSmoothScroll();
  const skullRef = useRef(null);
  const appRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          if (skullRef.current) {
            skullRef.current.position.y = -self.progress * 4.5;
            skullRef.current.rotation.y = -0.5 + self.progress * 2 * Math.PI;
          }
        },
      });
    }, appRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      <Navbar />

      {/* Layer 1: The 3D Canvas (fixed in the background) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Scene3D skullRef={skullRef} />
      </div>

      {/* Layer 2: The Scrollable HTML Content (on top) */}
      <div className="relative z-10 scroll-container">
        
        {/* THE CHANGE IS HERE: Replaced the spacer div with our new Intro component */}
        <Intro />

        {/* The container for all your scrolling sections */}
        <div className="bg-background/80 backdrop-blur-md">
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </div>
  );
}

export default App;