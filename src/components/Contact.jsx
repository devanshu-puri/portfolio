// File: src/components/Contact.jsx

import React from 'react';
import TextRoll from './TextRoll'; // We still need our animation component

// THE CHANGE IS HERE: The href values are now your personal links.
const contactLinks = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/devanshu-puri-77b68a303" 
  },
  { 
    name: "GitHub", 
    href: "https://github.com/devanshu-puri" 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/devanshupur1" 
  },
  { 
    name: "Discord", 
    href: "#" // You can replace this with your Discord invite link later
  },
  { 
    name: "Email", 
    href: "mailto:devanshupuri1807@gmail.com" 
  },
];

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen py-32 flex flex-col items-center justify-center text-center"
    >
      <h2 className="section-title mb-4">
        // LET'S_CONNECT
      </h2>
      <p className="text-primary/70 text-xl mb-16">
        Find me on the following platforms.
      </p>

      {/* The list of animated links */}
      <ul className="flex flex-col gap-4">
        {contactLinks.map((item, index) => (
          <li key={index}>
            <a 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <TextRoll
                center
                className="text-5xl md:text-7xl font-extrabold uppercase text-primary transition-colors duration-300 group-hover:text-magenta"
              >
                {item.name}
              </TextRoll>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;