import React from 'react';
import { motion } from 'motion/react';
import { Box, Layers, Maximize, Activity } from 'lucide-react';

export const MagneticIQ = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative group">
          <div className="faraday-cage bg-component-neutral/10 aspect-video flex items-center justify-center overflow-hidden border border-white/5">
            {/* Mock 3D Transformer Core Visualizer */}
            <div className="relative w-64 h-64">
              <motion.div 
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-2 border-high-voltage/30 rounded-lg flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-32 h-48 bg-component-neutral/80 border border-high-voltage/50 relative">
                  <div className="absolute inset-0 flex flex-col justify-around py-4">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="h-px bg-high-voltage/40 w-full" />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Data Nodes */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute -top-4 -right-8 bg-substrate border border-high-voltage/40 p-2 font-mono text-[10px]"
              >
                <div className="text-high-voltage">AIR_GAP: 0.25mm</div>
                <div className="text-white/40">B_MAX: 0.32T</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 -left-12 bg-substrate border border-thermal-alert/40 p-2 font-mono text-[10px]"
              >
                <div className="text-thermal-alert">CORE_LOSS: 4.2W</div>
                <div className="text-white/40">TEMP_RISE: 12K</div>
              </motion.div>
            </div>
            
            <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
          </div>
          
          {/* Decorative Corner Pin */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-high-voltage" />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="text-[10px] font-mono text-high-voltage uppercase tracking-[0.4em]">Engine_Module // MagneticIQ</div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-white">
            MAGNETIC DESIGN <br />
            <span className="text-high-voltage">WITHOUT THE MAGIC.</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Stop relying on rules of thumb. Our MagneticIQ engine uses finite element analysis (FEA) surrogates to predict core and winding losses with 98% accuracy in milliseconds.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold">
                <Box className="w-4 h-4 text-high-voltage" />
                Core Selection
              </div>
              <p className="text-[10px] text-white/40 font-mono">Automated material matching for frequency targets.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80 text-xs font-bold">
                <Layers className="w-4 h-4 text-high-voltage" />
                Litz Winding
              </div>
              <p className="text-[10px] text-white/40 font-mono">Optimal strand count for skin-effect mitigation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
