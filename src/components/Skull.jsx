import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const SkullModel = () => {
  const { scene } = useGLTF("/skull.glb");
  return <primitive object={scene} scale={2.5} />;
};

const Skull = () => {
  return (
    <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] z-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <motion.group
            animate={{ rotateY: [-0.2, 0.2, -0.2] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          >
            <SkullModel />
          </motion.group>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Skull;
