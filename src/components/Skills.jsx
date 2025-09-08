// File: src/components/Skills.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 100, color: "bg-orange-500" },
  { name: "CSS", level: 80, color: "bg-blue-500" },
  { name: "JavaScript", level: 75, color: "bg-yellow-400" },
  { name: "Tailwind", level: 40, color: "bg-cyan-500" },
  { name: "React", level: 20, color: "bg-sky-500" },
  { name: "Node.js", level: 20, color: "bg-green-600" },
  { name: "Express", level: 20, color: "bg-gray-700" },
  { name: "Figma", level: 25, color: "bg-pink-500" },
];

// 3D Skull Model Component
const SkullModel = () => {
  const { scene } = useGLTF("/skull.glb"); // skull.glb in public folder
  const skullRef = useRef();

  // Rotate continuously
  useFrame(() => {
    if (skullRef.current) {
      skullRef.current.rotation.y += 0.003; // smooth slow rotation
      skullRef.current.rotation.x = Math.sin(Date.now() / 1000) * 0.05; // slight nod effect
    }
  });

  return <primitive ref={skullRef} object={scene} scale={2.5} />;
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Skull Canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <SkullModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A blend of front-end & back-end skills with design knowledge. Always
          learning, always improving.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-700 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

useGLTF.preload("/skull.glb");
export default Skills;
