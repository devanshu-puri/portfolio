import React from 'react';
import { motion } from 'framer-motion';

const STAGGER = 0.025;

const TextRoll = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden ${className}`}
      style={{ lineHeight: 0.8 }} 
    >
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