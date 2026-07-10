import React from 'react';
import { Cpu, Map as MapIcon, HardDrive, Monitor } from 'lucide-react';

const AFKSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-primary min-h-screen relative overflow-hidden">
      
      {/* HUD Grid Background Element */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            <span className="text-accent">AFK</span> Status
          </h2>
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest hidden md:block">
            System Offline / Analog Pursuits
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Panel 1: Hardware Specs (Glowing Data Table) */}
          <div className="bg-black/50 border border-white/10 p-1 rounded-lg backdrop-blur-md relative overflow-hidden group">
            {/* Cyberpunk corner bracket */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/50 rounded-tl-lg pointer-events-none"></div>
            
            <div className="bg-secondary p-8 rounded h-full">
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="w-6 h-6 text-accent" />
                <h3 className="font-mono text-lg text-white uppercase tracking-widest">Hardware_Specs</h3>
              </div>

              <div className="space-y-1">
                {[
                  { label: 'OS', value: 'Fedora Linux / WSL', icon: <HardDrive className="w-4 h-4" /> },
                  { label: 'CPU', value: 'AMD Ryzen 9 7900X', icon: <Cpu className="w-4 h-4" /> },
                  { label: 'GPU', value: 'NVIDIA RTX 4080', icon: <HardDrive className="w-4 h-4" /> },
                  { label: 'RAM', value: '64GB DDR5-6000', icon: <HardDrive className="w-4 h-4" /> },
                  { label: 'Display 1', value: 'AW3423DWF OLED', icon: <Monitor className="w-4 h-4" /> },
                  { label: 'Display 2', value: 'LG 27GL850 Portrait', icon: <Monitor className="w-4 h-4" /> },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-2 interactable">
                    <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                      <span className="text-accent/50">{spec.icon}</span>
                      {spec.label}
                    </div>
                    <div className="font-mono text-sm text-white text-right">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 2: Travel Map (Japan Pilgrimage & Thrifting) */}
          <div className="bg-black/50 border border-white/10 p-1 rounded-lg backdrop-blur-md relative group">
            {/* Cyberpunk corner bracket */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/50 rounded-tr-lg pointer-events-none"></div>

            <div className="bg-secondary p-8 rounded h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <MapIcon className="w-6 h-6 text-accent" />
                  <h3 className="font-mono text-lg text-white uppercase tracking-widest">Nav_Data</h3>
                </div>
                <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                  Region: JP
                </span>
              </div>

              {/* Map Placeholder UI */}
              <div className="flex-1 min-h-[300px] border border-white/10 rounded bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center group-hover:border-accent/30 transition-colors interactable">
                
                {/* Radar sweep animation effect */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(204,255,0,0)_0%,rgba(204,255,0,0.1)_100%)] animate-spin" style={{ animationDuration: '4s' }}></div>
                
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-full h-[1px] bg-accent/50 absolute"></div>
                  <div className="h-full w-[1px] bg-accent/50 absolute"></div>
                  <div className="w-32 h-32 rounded-full border border-accent/50 absolute"></div>
                </div>

                <div className="z-10 text-center">
                  <p className="font-mono text-xs text-accent mb-2">[ Map UI Loading... ]</p>
                  <p className="font-mono text-sm text-gray-400">Tracking: Seichijunrei & Vintage Thrifting Locations</p>
                  
                  {/* Waypoint markers */}
                  <div className="flex gap-4 justify-center mt-6">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-[10px] font-mono text-gray-500">Akihabara</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                      <span className="text-[10px] font-mono text-gray-500">Shimokitazawa</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AFKSection;
