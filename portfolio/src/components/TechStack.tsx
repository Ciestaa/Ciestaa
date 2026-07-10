import React from 'react';

const coreStack = ['React', 'TypeScript', 'Python', 'Docker', 'PostgreSQL', 'Node.js'];
const creativeStack = ['PIXI.js', 'WebGL', 'Live2D', 'GSAP', 'Three.js', 'Framer Motion'];

const TechStack: React.FC = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden border-y border-white/5">
      
      {/* Decorative Title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-5 pointer-events-none w-full">
        <h2 className="text-[15vw] font-black uppercase text-center leading-none tracking-tighter whitespace-nowrap">
          Tech Stack
        </h2>
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        
        {/* Core Stack Marquee */}
        <div className="flex flex-col gap-4">
          <h3 className="px-6 md:px-12 text-sm font-mono text-accent uppercase tracking-widest">Core Infrastructure</h3>
          <div className="flex overflow-hidden whitespace-nowrap bg-secondary/50 py-6 transform -rotate-1">
            <div className="animate-marquee flex gap-12 items-center">
              {[...coreStack, ...coreStack, ...coreStack].map((tech, idx) => (
                <span key={`core-${idx}`} className="text-4xl md:text-6xl font-bold uppercase text-gray-300 interactable hover:text-accent transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Creative Stack Marquee (Reverse direction) */}
        <div className="flex flex-col gap-4">
          <h3 className="px-6 md:px-12 text-sm font-mono text-accent uppercase tracking-widest text-right">Creative / Interactive</h3>
          <div className="flex overflow-hidden whitespace-nowrap bg-accent text-primary py-6 transform rotate-1">
            <div className="animate-marquee flex gap-12 items-center" style={{ animationDirection: 'reverse' }}>
              {[...creativeStack, ...creativeStack, ...creativeStack].map((tech, idx) => (
                <span key={`creative-${idx}`} className="text-4xl md:text-6xl font-bold uppercase interactable hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
