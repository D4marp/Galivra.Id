"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Ashima simplex noise (MIT) + a layered gradient in the brand palette.
const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;
  uniform float uIntensity;
  uniform vec2 uFocus;

  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime * 0.055;

    // Domain-warped noise gives the slow, silky "aurora" drift.
    vec2 warp = vec2(
      snoise(vec3(p * 0.9, t)),
      snoise(vec3(p * 0.9 + 7.3, t))
    );
    vec2 q = p + warp * 0.35 + uMouse * 0.12;
    float n1 = snoise(vec3(q * 1.1, t * 1.2));
    float n2 = snoise(vec3(q * 2.2 - 3.0, t * 1.6 + 10.0));

    vec3 cVoid   = vec3(0.027, 0.024, 0.047);
    vec3 cDeep   = vec3(0.14, 0.10, 0.38);
    vec3 cIndigo = vec3(0.42, 0.36, 0.91);
    vec3 cViolet = vec3(0.56, 0.49, 1.0);
    vec3 cPink   = vec3(1.0, 0.44, 0.69);

    vec3 col = mix(cDeep, cIndigo, smoothstep(-0.4, 0.7, n1));
    col = mix(col, cViolet, smoothstep(0.2, 0.9, n2) * 0.55);
    col = mix(col, cPink, smoothstep(0.35, 1.0, n1 * 0.6 + n2 * 0.4) * 0.8);

    // Light pools around a focus point that drifts toward the mouse.
    vec2 focus = uFocus + uMouse * vec2(0.06, 0.05);
    float d = distance(vec2(uv.x * aspect, uv.y), vec2(focus.x * aspect, focus.y));
    float glow = smoothstep(1.15, 0.0, d);
    glow = pow(glow, 1.6) * (0.75 + 0.25 * n1);

    col = mix(cVoid, col, clamp(glow * uIntensity, 0.0, 1.0));

    // Fine dither kills gradient banding on 8-bit displays.
    float grain = fract(sin(dot(uv * uRes, vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.02;

    gl_FragColor = vec4(col, 1.0);
  }
`;

type AuroraPlaneProps = {
  intensity: number;
  focus: [number, number];
  animate: boolean;
};

function AuroraPlane({ intensity, focus, animate }: AuroraPlaneProps) {
  const matRef = React.useRef<THREE.ShaderMaterial>(null!);
  const { size, gl } = useThree();
  const target = React.useRef(new THREE.Vector2(0, 0));

  const uniforms = React.useMemo(
    () => ({
      uTime: { value: 12 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uRes: { value: new THREE.Vector2(1, 1) },
      uIntensity: { value: intensity },
      uFocus: { value: new THREE.Vector2(focus[0], focus[1]) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const m = matRef.current;
    if (!m) return;
    const dpr = gl.getPixelRatio();
    m.uniforms.uRes.value.set(size.width * dpr, size.height * dpr);
    if (animate) m.uniforms.uTime.value += Math.min(delta, 0.05);
    m.uniforms.uMouse.value.lerp(target.current, 0.035);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

type AuroraProps = {
  className?: string;
  intensity?: number;
  /** Where the light pools, in UV space (0–1, origin bottom-left). */
  focus?: [number, number];
};

/** Full-bleed WebGL gradient. Pauses when offscreen; static under reduced motion. */
export function Aurora({ className, intensity = 1, focus = [0.72, 0.62] }: AuroraProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: "100px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={cn("pointer-events-none", className)} aria-hidden="true">
      {/* CSS fallback paints instantly and stays if WebGL is unavailable. */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 70% at ${focus[0] * 100}% ${(1 - focus[1]) * 100}%, rgba(108,92,231,${0.45 * intensity}) 0%, rgba(255,111,176,${0.14 * intensity}) 38%, transparent 70%)`,
        }}
      />
      <Canvas
        className="!absolute inset-0"
        frameloop={visible ? (animate ? "always" : "demand") : "never"}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
        orthographic
        camera={{ position: [0, 0, 1] }}
      >
        <AuroraPlane intensity={intensity} focus={focus} animate={animate} />
      </Canvas>
    </div>
  );
}
