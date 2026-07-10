import React, { useState } from 'react';
import { X, Dices, Grid3X3 } from 'lucide-react';

const LabSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const labItems = [
    {
      id: 'gacha',
      title: 'Banner Simulator',
      icon: <Dices className="w-8 h-8 text-accent" />,
      tag: 'Probability',
      bg: 'bg-zinc-900',
    },
    {
      id: 'wordle',
      title: 'Hex Grid Wordle',
      icon: <Grid3X3 className="w-8 h-8 text-accent" />,
      tag: 'Logic',
      bg: 'bg-zinc-900',
    }
  ];

  return (
    <section className="py-24 px-6 bg-primary relative min-h-[60vh] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-accent uppercase mb-12">
          // The_Lab
        </h2>

        {/* Game Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveModal(item.id)}
              className={`${item.bg} aspect-square rounded-xl p-6 border border-white/10 flex flex-col justify-between interactable cursor-pointer group hover:border-accent/50 transition-colors duration-300 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform"></div>
              
              <div className="flex justify-between items-start z-10">
                {item.icon}
                <span className="text-[10px] font-mono text-gray-500 uppercase border border-gray-700 px-2 py-1 rounded-full">{item.tag}</span>
              </div>
              
              <div className="z-10">
                <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-xs font-mono text-gray-500 mt-2">Initialize Module -&gt;</p>
              </div>
            </div>
          ))}
          
          {/* Empty Slots to match the "grid" game feel */}
          <div className="aspect-square rounded-xl border border-dashed border-white/10 flex items-center justify-center opacity-50">
            <span className="font-mono text-xs text-gray-600">[ LOCKED ]</span>
          </div>
          <div className="aspect-square rounded-xl border border-dashed border-white/10 flex items-center justify-center opacity-50">
            <span className="font-mono text-xs text-gray-600">[ LOCKED ]</span>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl max-h-[80vh] bg-secondary border border-accent/30 rounded-lg overflow-hidden flex flex-col shadow-[0_0_50px_rgba(204,255,0,0.1)]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/40">
              <span className="font-mono text-accent text-sm tracking-widest uppercase">
                {activeModal === 'gacha' ? 'Gacha_Drop_Rate_Sim.exe' : 'Custom_Wordle_Logic.exe'}
              </span>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white interactable"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto flex-1 flex flex-col items-center justify-center min-h-[400px]">
              
              {activeModal === 'gacha' && (
                <div className="text-center w-full max-w-lg">
                  {/* Gacha Skeleton */}
                  <div className="h-48 w-full bg-zinc-900 border border-white/10 rounded-lg mb-6 flex items-center justify-center">
                    <span className="font-mono text-gray-600 text-sm">Banner Image Placeholder</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 border border-accent/20 rounded bg-accent/5">
                      <span className="block text-xs font-mono text-gray-500 mb-1">Pity Counter</span>
                      <span className="text-2xl font-bold text-accent">0 / 90</span>
                    </div>
                    <div className="p-4 border border-white/10 rounded bg-zinc-900">
                      <span className="block text-xs font-mono text-gray-500 mb-1">Currency</span>
                      <span className="text-2xl font-bold text-white">16,000</span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-accent transition-colors interactable rounded">
                    Warp x10
                  </button>
                </div>
              )}

              {activeModal === 'wordle' && (
                <div className="text-center">
                  {/* Wordle Skeleton */}
                  <div className="flex flex-col gap-2 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((row) => (
                      <div key={row} className="flex gap-2 justify-center">
                        {[1, 2, 3, 4, 5].map((col) => (
                          <div key={col} className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold
                            ${row === 1 ? 'border-accent text-accent' : 'border-gray-800 text-gray-800'}
                          `}>
                            {row === 1 ? '?' : ''}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="font-mono text-gray-500 text-sm">[ Keyboard Component Placeholder ]</div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LabSection;
