// File: src/components/Skills.jsx

import React from 'react';

// You can easily customize your skills and proficiency here
const skillsData = [
  { name: 'JavaScript (ES6+)', level: '95%' },
  { name: 'React', level: '90%' },
  { name: 'Node.js', level: '85%' },
  { name: 'Tailwind CSS', level: '98%' },
  { name: 'Framer Motion', level: '80%' },
  { name: 'GSAP', level: '75%' },
  { name: 'MongoDB', level: '85%' },
  { name: 'Figma', level: '90%' },
];

const Skills = () => {
  return (
    // THE CHANGE: Make the section take up the full screen height and center content
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-16"> {/* Increased bottom margin */}
        {/* THE CHANGE: Applied a consistent, larger style for the title */}
        <h2 className="section-title">
          // SKILLS_MATRIX
        </h2>
        {/* THE CHANGE: Made the subtitle larger */}
        <p className="text-lg text-primary/70 mt-4">My Technical Arsenal</p>
      </div>

      {/* THE CHANGE: Made the grid wider and increased the gap */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            {/* THE CHANGE: Increased the font size and boldness */}
            <h3 className="text-xl font-bold text-primary mb-3">{skill.name}</h3>
            <div className="w-full bg-cyan/10 rounded-full h-2.5">
              <div 
                className="bg-cyan h-2.5 rounded-full" 
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;