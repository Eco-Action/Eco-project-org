



// components/HighResEarth.js
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Subcomponent for the rotating Earth
function Earth() {
  const earthRef = useRef();
  const atmosphereRef = useRef();

  // Load textures
  const [dayTexture, bumpRoughnessCloudsTexture] = useLoader(TextureLoader, [
    '/textures/earth_day_4096.jpg',
    '/textures/earth_bump_roughness_clouds_4096.jpg',
  ]);

  // Rotate the Earth and atmosphere
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime * 0.05; // Adjust rotation speed if needed
    atmosphereRef.current.rotation.y = elapsedTime * 0.05;
  });

  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={earthRef} scale={3}> {/* Increase scale to make Earth bigger */}
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={dayTexture}
          bumpMap={bumpRoughnessCloudsTexture}
          bumpScale={0.05}
          roughnessMap={bumpRoughnessCloudsTexture}
          roughness={0.5}
        />
      </mesh>

      {/* Atmosphere (Optional for a glowing effect) */}
      <mesh ref={atmosphereRef} scale={3.1}> {/* Scale should be slightly larger than the Earth for a thin atmosphere */}
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#4db2ff"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

// Main component to render the Earth with Canvas
export default function HighResEarth() {
  return (
    <Canvas camera={{ position: [10, 4, 8], fov: 30 }}> {/* Move camera back for a better view */}
      <ambientLight intensity={0.5} />
      <directionalLight color="#ffffff" intensity={2} position={[0, 0, 3]} />
      <OrbitControls enableZoom={false} enableDamping />
      <Earth /> {/* Render the Earth inside the Canvas */}
    </Canvas>
  );
}
