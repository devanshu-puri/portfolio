// File: src/components/Scene3D.jsx

import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const SkullModel = ({ skullRef }) => {
  const { nodes, materials } = useGLTF('/skull.glb');
  
  const firstMesh = useMemo(() => {
    for (const nodeName in nodes) {
      if (nodes[nodeName].isMesh) {
        return nodes[nodeName];
      }
    }
    return null;
  }, [nodes]);

  if (!firstMesh) {
    console.error("Error: No valid mesh was found inside your skull.glb file.");
    return null;
  }

  return (
    // THE CHANGE IS HERE: Added the 'rotation' prop to set the starting angle.
    // The second value (-0.5) rotates the model slightly to the left around the Y-axis.
    <group ref={skullRef} dispose={null} scale={3.5} rotation={[0, -0.5, 0]}>
      <mesh
        geometry={firstMesh.geometry}
        material={firstMesh.material}
      />
    </group>
  );
};

const Scene3D = ({ skullRef }) => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      
      <group position={[0, -0.5, 0]}>
        <SkullModel skullRef={skullRef} />
      </group>
    </Canvas>
  );
};

useGLTF.preload('/skull.glb');

export default Scene3D;