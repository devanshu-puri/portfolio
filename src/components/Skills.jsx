// File: src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "Tailwind", level: 40 },
  { name: "React", level: 20 },
  { name: "Node.js", level: 20 },
  { name: "Express", level: 20 },
  { name: "Figma", level: 25 },
];

const Skills = () => (
  <section
    id="skills"
    className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-cyan-900 via-cyan-800 to-fuchsia-900"
  >
    <div className="max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-extrabold text-white mb-8 
                   transition-all duration-300 hover:text-fuchsia-400 
                   hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]"
      >
        My <span className="text-cyan-300">Skills</span>
      </h2>

      {/* Subtitle */}
     <p
  className="text-white mb-20 max-w-4xl mx-auto text-2xl md:text-3xl leading-relaxed
             transition-all duration-300 hover:text-fuchsia-400 
             hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
>
  A blend of front-end & back-end skills with design knowledge. Always
  learning, always improving.
</p>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-cyan-400
                       text-white rounded-2xl p-8 md:p-10 shadow-lg 
                       hover:shadow-[0_0_25px_8px_rgba(168,85,247,0.9)] 
                       transition transform hover:scale-105"
          >
            <div className="flex justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-semibold">{s.name}</h3>
              <span className="text-lg font-bold text-cyan-300">
                {s.level}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 h-4 rounded-full"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
