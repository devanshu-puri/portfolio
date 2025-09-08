// File: src/components/Skiper31.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ---------- Character pieces ---------- */
const CharacterV1 = ({ char, index, centerIndex, scrollYProgress }) => {
  const isSpace = char === " ";
  const dist = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [dist * 60, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [dist * 40, 0]);

  return (
    <motion.span
      className={`inline-block ${isSpace ? "w-4" : ""} text-[color:var(--skiper-text)]`}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV3 = ({ char, index, centerIndex, scrollYProgress }) => {
  const isSpace = char === " ";
  const dist = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [dist * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [dist * 40, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(dist) * 24, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.img
      src={char}
      alt=""
      className={isSpace ? "inline-block w-4" : "inline-block w-12 h-12 md:w-16 md:h-16"}
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  );
};

/* ---------- Main component ---------- */
const Skiper31 = () => {
  const targetRef = useRef(null);
  const targetRef3 = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const text = "SEE MORE FROM DEVANSHU";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  // requested icons
  const macIcon = [
    "/mac/figma.png",
    "/mac/github.png",
    "/mac/mongo.png",
    "/mac/notion.png",
    "/mac/vscode.png",
    "/mac/js.png",
    "/mac/cpp.png",
    "/mac/react.png",
  ];
  const iconCenterIndex = Math.floor(macIcon.length / 2);

  return (
    <main className="w-full bg-gradient-to-b from-cyan-900 via-purple-900 to-fuchsia-900 text-white">
      {/* small helper label */}
      <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2 text-center">
        <span className="text-xs uppercase opacity-60">Scroll to see more</span>
      </div>

      {/* Section 1: big animated letters */}
      <section ref={targetRef} className="box-border flex h-[210vh] items-center justify-center p-8">
        <div
          className="max-w-4xl text-center font-bold uppercase tracking-tight"
          style={{ fontSize: "clamp(32px, 6vw, 64px)", perspective: "500px" }}
        >
          {characters.map((char, i) => (
            <CharacterV1
              key={i}
              char={char}
              index={i}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </section>

      {/* Section 2: icons with 3D twist (kept) */}
      <section ref={targetRef3} className="relative -mt-[95vh] flex h-[210vh] flex-col items-center justify-center p-8">
        <p className="flex items-center gap-3 text-2xl font-medium tracking-tight text-white mb-6">
          <span className="px-3 py-2 border border-white/10 rounded">[</span>
          comfortable working with
          <span className="px-3 py-2 border border-white/10 rounded rotate-180">]</span>
        </p>

        <div
          className="max-w-4xl text-center font-bold uppercase tracking-tight"
          style={{ fontSize: "clamp(36px, 6.5vw, 72px)", perspective: "500px" }}
        >
          {macIcon.map((src, i) => (
            <CharacterV3
              key={i}
              char={src}
              index={i}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skiper31;
