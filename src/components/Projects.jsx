// File: src/components/Projects.jsx

import React from 'react';
import PeepsAnimation from './PeepsAnimation'; // 1. Import our NEW animation component
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Revive EV",
    description: "An innovative platform for EV repair and battery swapping, featuring a modern UI.",
    link: "https://revive-ev.vercel.app/",
    tech: ["React", "Tailwind CSS", "GSAP"],
    imageUrl: "/assets/revive.png"
  },
  {
    title: "Hapibara",
    description: "A full-stack vegan recipe hub built with the MERN stack for a seamless user experience.",
    link: "https://hapibara.vercel.app/",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "/assets/hapibara.png"
  },
  {
    title: "Enigma Club",
    description: "The official website for a college strategy & analysis club, featuring 3D elements.",
    link: "https://enigma20.vercel.app/",
    tech: ["React", "Three.js", "Vite"],
    imageUrl: "/assets/enigmaw.png"
  },
  {
    title: "Blakspire Pvt. Ltd.",
    description: "A professional, responsive business website for a private limited company.",
    link: "https://www.blakspirepvtltd.in/index.html",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/assets/blakspire.png"
  },
];

const Projects = () => {
  return (
    <section 
      id="projects"
      className="relative py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl font-extrabold text-primary mb-16 
                     transition-all duration-300 hover:text-cyan 
                     hover:drop-shadow-[0_0_20px_theme(colors.cyan)]"
        >
          My <span className="text-magenta">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((proj, idx) => (
            <motion.a
              key={idx} href={proj.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }} viewport={{ once: true }}
              className="group relative block rounded-2xl overflow-hidden bg-background/50 
                         border border-magenta/30 shadow-xl hover:border-magenta
                         hover:shadow-[0_0_32px_theme(colors.magenta)] 
                         transition-all duration-300 text-left transform hover:-translate-y-2"
            >
              <img src={proj.imageUrl} alt={`Preview of ${proj.title}`}
                className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary group-hover:text-magenta transition">
                  {proj.title}
                </h3>
                <p className="mt-2 text-primary/70">{proj.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-magenta">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* 2. Using our NEW, working animation component */}
      <div className="relative w-full h-48 mt-24">
        <PeepsAnimation />
      </div>
    </section>
  );
};

export default Projects;