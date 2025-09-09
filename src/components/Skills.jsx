import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React", level: 90 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Node.js & Express", level: 80 },
  { name: "Tailwind CSS", level: 98 },
  { name: "GSAP & Framer Motion", level: 85 },
  { name: "Three.js / R3F", level: 70 },
  { name: "MongoDB", level: 85 },
  { name: "Figma", level: 90 },
];

const Skills = () => (

  <section
    id="skills"
    className="relative py-32 px-6 md/px-12"
  >
    <div className="max-w-7xl mx-auto text-center">
      <h2
        className="text-5xl md:text-6xl font-extrabold text-primary mb-8 
                   transition-all duration-300 hover:text-magenta 
                   hover:drop-shadow-[0_0_20px_theme(colors.magenta)]"
      >
        My <span className="text-cyan">Skills</span> Matrix
      </h2>
      <p className="text-primary/70 mb-20 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed">
        A blend of design, frontend, and backend technologies. Always learning, always building.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background/50 backdrop-blur-md border border-cyan/30
                       text-primary rounded-2xl p-6 shadow-lg 
                       hover:shadow-[0_0_25px_8px_theme(colors.cyan)] 
                       transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <span className="text-lg font-bold text-cyan">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-primary/10 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-cyan to-magenta h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;