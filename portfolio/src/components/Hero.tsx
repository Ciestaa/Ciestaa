import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 1. GSAP Typography Animations
    const ctx = gsap.context(() => {
      gsap.from(textRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2,
      });
    }, containerRef);

    // 2. Three.js Interactive Particle Field
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, // Transparent background
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create a dynamic particle torus knot (very lusion/zentry-esque)
    const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);
    const material = new THREE.PointsMaterial({
      color: 0xccff00, // Matching the 'accent' color
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 30;

    // Mouse Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.05;
      mouseY = (event.clientY - windowHalfY) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      particles.rotation.y += 0.05 * (targetX - particles.rotation.y);
      particles.rotation.x += 0.05 * (targetY - particles.rotation.x);
      
      // Idle floating animation
      particles.position.y = Math.sin(elapsedTime * 0.5) * 2;
      particles.rotation.z += 0.002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-primary px-6"
    >
      {/* Interactive 3D Canvas replacing the placeholder */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 interactable" 
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl pointer-events-none">
        <div className="clip-text pointer-events-auto">
          <h1 
            ref={el => textRefs.current[0] = el}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-text leading-none mb-4 interactable"
          >
            M. Mizwar <span className="text-accent">Fahmi</span>
          </h1>
        </div>
        
        <div className="clip-text mt-6 pointer-events-auto">
          <p 
            ref={el => textRefs.current[1] = el}
            className="text-lg md:text-2xl font-mono text-gray-400 max-w-3xl leading-relaxed interactable"
          >
            Full-Stack Developer & Analyst bridging robust backend infrastructure with immersive web experiences.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
