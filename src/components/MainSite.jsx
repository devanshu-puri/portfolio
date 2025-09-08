// File: src/components/MainSite.jsx

import React, { useRef, useLayoutEffect } from 'react';
import useSmoothScroll from '../useSmoothScroll';
import Navbar from './Navbar';
import Scene3D from './Scene3D';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Skiper31 from './Skiper31'; 

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// THE CHANGE IS HERE: Renamed the function from App to MainSite
const MainSite = () => {
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

      {/* Layer 1: 3D Canvas (fixed in background) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Scene3D skullRef={skullRef} />
      </div>

      {/* Layer 2: Scrollable HTML Content (on top) */}
      <div className="relative z-10 scroll-container">
        <Intro />

        <div className="bg-background/80 backdrop-blur-md">
          <section id="skills">
            <Skills />
          </section>

          <section id="scroll-showcase">
            <Skiper31 />
          </section>

          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

// THE CHANGE IS HERE: Export MainSite instead of App
export default MainSite;