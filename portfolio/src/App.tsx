import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor logic
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleHover = () => {
      cursor.classList.add('hover');
    };

    const handleHoverLeave = () => {
      cursor.classList.remove('hover');
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add hover effect to links and buttons
    const interactables = document.querySelectorAll('a, button, .interactable');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-primary">
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
    </div>
  );
};

export default App;
