"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

function LiquidSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  // Color logic based on theme
  const materialColor = theme === "dark" ? "#002266" : "#e6f0ff";
  const emissiveColor = theme === "dark" ? "#001133" : "#ffffff";

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

      // Slight reaction to mouse
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color={materialColor}
        emissive={emissiveColor}
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.8}
        distort={0.4} // amount of distortion
        speed={1.5}   // speed of distortion
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}

export function BackgroundScene() {
  return (
    <div className="w-full h-full absolute inset-0 opacity-40 md:opacity-60 pointer-events-none transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#0055ff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <LiquidSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
