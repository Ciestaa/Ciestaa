import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
}

const projectsData: Project[] = [
  {
    id: '01',
    title: 'Enterprise Architecture',
    category: 'Infrastructure',
    description: 'Robust backend systems and scalable architecture for high-traffic environments.',
  },
  {
    id: '02',
    title: 'Live2D Interactive Canvas',
    category: 'Creative Web',
    description: 'A WebGL-powered interactive character interface bridging gaming and web.',
  },
  {
    id: '03',
    title: 'SAINS Integration',
    category: 'Full-Stack',
    description: 'Large-scale application development streamlining internal state data flow.',
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(card, 
          { y: 100, opacity: 0, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 1, // Smooth reveal on scroll
            },
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'power2.out'
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-text">
            Featured <br/><span className="text-accent">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              ref={el => cardsRef.current[index] = el}
              className={`group relative bg-secondary rounded-2xl overflow-hidden border border-white/10 p-8 interactable cursor-pointer
                ${index === 2 ? 'md:col-span-2 md:aspect-[2.5/1]' : 'aspect-square md:aspect-[4/5]'}
              `}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 z-0"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">{project.id}</span>
                  <span className="font-mono text-xs text-accent uppercase tracking-widest border border-accent/30 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-text group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
