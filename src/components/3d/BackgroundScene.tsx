"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const particlesCount = 3000;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount; i++) {
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(Math.random() * 2 - 1);
  const r = Math.cbrt(Math.random()) * 4;
  positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  positions[i * 3 + 2] = r * Math.cos(phi);
}

function Particles() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.075;
      
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      const scrollY = window.scrollY;
      
      ref.current.position.x += (mouseX * 0.3 - ref.current.position.x) * 0.05;
      ref.current.position.y += (mouseY * 0.3 + scrollY * -0.001 - ref.current.position.y) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0055ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

export function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-background transition-colors duration-1000">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,85,255,0.08),transparent_60%)] z-10" />
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#0055ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        <Particles />
      </Canvas>
    </div>
  );
}
