// File: src/components/Contact.jsx

import React from 'react';
import TextRoll from './TextRoll';

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
      <div className="mb-16">
        {/* THE CHANGE IS HERE: Added transition and hover classes to the title */}
        <h2 
          className="section-title transition-all duration-300 hover:text-magenta hover:drop-shadow-[0_0_20px_theme(colors.magenta)]"
        >
          Let's Connect
        </h2>
        <p className="text-primary/70 text-xl mt-4">
          Reach out via social media or send a direct transmission.
        </p>
      </div>

      {/* Glassy container */}
      <div className="w-full max-w-6xl p-8 md:p-12 bg-background/50 backdrop-blur-lg border border-cyan/30 rounded-2xl shadow-lg">
        
        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Animated Links */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-3xl font-bold text-primary mb-6">Find me on the web:</h3>
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
                      className="text-4xl md:text-5xl font-extrabold uppercase text-primary transition-colors duration-300 group-hover:text-magenta"
                    >
                      {item.name}
                    </TextRoll>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Form */}
          <div>
            <form className="w-full flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="[ YOUR_NAME ]" 
                className="form-input" 
              />
              <input 
                type="email" 
                placeholder="[ YOUR_EMAIL ]" 
                className="form-input"
              />
              <textarea 
                placeholder="[ YOUR_MESSAGE ]" 
                rows="5"
                className="form-input"
              ></textarea>
              <button type="submit" className="glitch-button mt-2">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;