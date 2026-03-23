import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Zap, CheckCircle2 } from 'lucide-react';

export const EfficiencyBridge = () => {
  return (
    <section className="py-24 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-high-voltage/20 via-transparent to-high-voltage/20 opacity-20" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-high-voltage/20 bg-high-voltage/5 text-[10px] font-mono text-high-voltage uppercase tracking-widest">
            <Zap className="w-3 h-3" />
            Performance Benchmark
          </div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-white leading-none">
            FROM MONTHS TO <span className="text-high-voltage">MINUTES</span>.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-md">
            Traditional power electronics design is a bottleneck of manual calculations and thermal guesswork. PowerDesign AI automates the physics, so you can focus on the architecture.
          </p>
          
          <div className="space-y-4">
            {[
              "Automated component stress analysis",
              "Real-time EMI filter synthesis",
              "Multi-objective Pareto optimization",
              "Instant thermal map generation"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-high-voltage" />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="faraday-cage bg-component-neutral/20 p-6 space-y-4 border border-white/5">
              <div className="text-[10px] font-mono text-white/40 uppercase">Traditional Workflow</div>
              <div className="text-3xl font-bold text-white/20">3-6 <span className="text-sm">MONTHS</span></div>
              <div className="space-y-2">
                <div className="h-1 bg-white/5 w-full" />
                <div className="h-1 bg-white/5 w-3/4" />
                <div className="h-1 bg-white/5 w-1/2" />
              </div>
              <p className="text-[10px] font-mono text-white/20 uppercase leading-relaxed">
                Manual selection, prototype iterations, thermal failures.
              </p>
            </div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="faraday-cage bg-high-voltage/5 p-6 space-y-4 border border-high-voltage/30 relative"
            >
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-high-voltage rounded-full animate-ping opacity-20" />
              <div className="text-[10px] font-mono text-high-voltage uppercase">PowerDesign AI</div>
              <div className="text-3xl font-bold text-high-voltage">8 <span className="text-sm">MINUTES</span></div>
              <div className="space-y-2">
                <div className="h-1 bg-high-voltage w-full" />
                <div className="h-1 bg-high-voltage/60 w-full" />
                <div className="h-1 bg-high-voltage/30 w-full" />
              </div>
              <p className="text-[10px] font-mono text-high-voltage/60 uppercase leading-relaxed">
                Physics-informed ML, instant synthesis, guaranteed stability.
              </p>
            </motion.div>
          </div>
          
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-high-voltage/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};
