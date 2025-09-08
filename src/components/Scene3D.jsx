// File: src/components/Scene3D.jsx
import React, { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";

const SkullModel = ({ positionX }) => {
  const { nodes } = useGLTF("/skull.glb");
  const meshRef = useRef();

  const firstMesh = useMemo(() => {
    for (const nodeName in nodes) {
      if (nodes[nodeName].isMesh) return nodes[nodeName];
    }
    return null;
  }, [nodes]);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth lerp movement toward target X
      meshRef.current.position.x += (positionX - meshRef.current.position.x) * 0.05;
    }
  });

  if (!firstMesh) return null;

  return (
    <group ref={meshRef} scale={3.5} rotation={[0, -0.5, 0]}>
      <mesh geometry={firstMesh.geometry} material={firstMesh.material} />
    </group>
  );
};

const Scene3D = () => {
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Subscribe to Lenis scroll events
    lenis.on("scroll", ({ scroll }) => {
      const skillsSection = document.getElementById("skills");
      if (!skillsSection) return;

      const rect = skillsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        setPositionX(-2); // move skull left when skills are in view
      } else {
        setPositionX(0); // reset skull to center
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scene-overlay">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <SkullModel positionX={positionX} />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/skull.glb");

export default Scene3D;
