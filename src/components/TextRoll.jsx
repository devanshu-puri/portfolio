// File: src/components/TextRoll.jsx

import React from 'react';
import { motion } from 'framer-motion';

// This controls the speed of the staggered letter animation
const STAGGER = 0.025;

const TextRoll = ({ children, className, center = false }) => {
  return (
    // The main container that detects the hover
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden ${className}`}
      style={{ lineHeight: 0.8 }} // Keeps the vertical spacing tight
    >
      {/* This is the top set of letters that slides UP and OUT */}
      <div>
        {children.split("").map((char, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay, duration: 0.3 }}
              className="inline-block"
              key={i}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
      
      {/* This is the bottom set of letters that slides UP and IN */}
      <div className="absolute inset-0">
        {children.split("").map((char, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay, duration: 0.3 }}
              className="inline-block"
              key={i}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export default TextRoll;