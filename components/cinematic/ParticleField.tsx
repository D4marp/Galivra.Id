"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

function ParticleCloud({ count = 1100 }: { count?: number }) {
  const ref = React.useRef<THREE.Points>(null!);

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.018;
    ref.current.rotation.x += delta * 0.004;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.032}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function ParticleField({ className }: { className?: string }) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduceMotion) setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ParticleCloud />
      </Canvas>
    </div>
  );
}
