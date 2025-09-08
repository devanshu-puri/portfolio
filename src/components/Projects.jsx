// File: src/components/Projects.jsx

import React from 'react';

// This array now contains your project data with the CORRECT image filenames.
const projectsData = [
  {
    title: "Revive EV",
    description: "An innovative platform for EV repair and battery swapping, featuring a modern UI.",
    link: "https://revive-ev.vercel.app/",
    tech: ["React", "Tailwind CSS", "GSAP"],
    imageUrl: "/assets/revive.png" // Corrected filename
  },
  {
    title: "Hapibara",
    description: "A full-stack vegan recipe hub built with the MERN stack for a seamless user experience.",
    link: "https://hapibara.vercel.app/",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "/assets/hapibara.png" // Corrected filename
  },
  {
    title: "Enigma Club",
    description: "The official website for a college strategy & analysis club, featuring 3D elements.",
    link: "https://enigma20.vercel.app/",
    tech: ["React", "Three.js", "Vite"],
    imageUrl: "/assets/enigmaw.png" // Corrected filename
  },
  {
    title: "Blakspire Pvt. Ltd.",
    description: "A professional, responsive business website for a private limited company.",
    link: "https://www.blakspirepvtltd.in/index.html",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/assets/blakspire.png" // Corrected filename
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="section-title">
          // MY_PROJECTS
        </h2>
        <p className="text-lg text-primary/70 mt-4">A selection of my work</p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-6xl">
        {projectsData.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden bg-background/50 border border-magenta/30
                       shadow-xl hover:border-magenta/80 hover:scale-105 
                       hover:shadow-[0_0_32px_theme(colors.magenta)] 
                       transition-all duration-300 text-left"
          >
            <img 
              src={proj.imageUrl} 
              alt={`Preview of ${proj.title}`}
              className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary group-hover:text-magenta transition">
                {proj.title}
              </h3>
              <p className="mt-2 text-primary/70">{proj.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-magenta"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;