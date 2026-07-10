import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation logic could be used here (e.g. SplitText plugin), 
      // but we will use line-by-line reveal with standard GSAP.
      const lines = gsap.utils.toArray('.about-line');
      
      gsap.from(lines, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 1, // Smooth cinematic scrub
        },
        y: 50,
        opacity: 0.1,
        stagger: 0.1,
        ease: 'power3.out',
        color: '#333' // Animates from dark to light text
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen w-full flex items-center justify-center bg-secondary px-6 py-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Environment / Meta info */}
        <div className="md:col-span-4 flex flex-col gap-6 sticky top-32">
          <h2 className="text-sm font-mono tracking-widest text-accent uppercase">
            // Environment_
          </h2>
          <ul className="font-mono text-sm text-gray-400 space-y-2 border-l border-accent/20 pl-4">
            <li className="interactable hover:text-accent transition-colors">OS: Linux (Fedora, Ubuntu)</li>
            <li className="interactable hover:text-accent transition-colors">Environment: WSL</li>
            <li className="interactable hover:text-accent transition-colors">Architecture: Enterprise</li>
          </ul>
        </div>

        {/* Narrative */}
        <div ref={textRef} className="md:col-span-8 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
          <div className="about-line text-text">I build resilient, large-scale applications and digital infrastructure,</div>
          <div className="about-line text-text mt-4">working extensively on enterprise systems like those for <span className="text-accent">Sarawak Information Systems (SAINS).</span></div>
          <div className="about-line text-text mt-12">Beyond enterprise architecture, I have a deep passion for the interactive web,</div>
          <div className="about-line text-text mt-4">experimenting with character animation and Live2D integrations</div>
          <div className="about-line text-text mt-4">to bring a dynamic, <span className="text-accent italic">game-like feel</span> to the browser.</div>
        </div>

      </div>
    </section>
  );
};

export default About;
