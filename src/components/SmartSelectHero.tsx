import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Zap, BarChart3, ChevronRight, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

const MOCK_COMPONENTS = [
  { id: 'GAN-650-01', name: 'GaN Systems GS-065-011', type: 'GaN FET', loss: 1.2, efficiency: 98.8, price: '$4.20' },
  { id: 'SIC-1200-05', name: 'Wolfspeed C3M0075120K', type: 'SiC MOSFET', loss: 2.4, efficiency: 97.2, price: '$12.50' },
  { id: 'SI-600-12', name: 'Infineon IPW60R070CFD7', type: 'Si MOSFET', loss: 4.8, efficiency: 94.5, price: '$2.10' },
];

export const SmartSelectHero = () => {
  const [query, setQuery] = useState('400V 30A GaN');
  const [results, setResults] = useState(MOCK_COMPONENTS);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (query) {
      setIsAnalyzing(true);
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [query]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-24">
      <div className="faraday-cage bg-component-neutral/20 p-1 mb-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-substrate/80">
          <Search className="w-5 h-5 text-high-voltage" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full font-mono text-sm text-white placeholder:text-white/20"
            placeholder="Enter design parameters (e.g., 800V 100A SiC)..."
          />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-high-voltage/50 uppercase tracking-tighter">Engine_v4.2</span>
            <div className={cn("w-2 h-2 rounded-full", isAnalyzing ? "bg-high-voltage animate-pulse" : "bg-white/10")} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {results.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="faraday-cage bg-component-neutral/40 p-4 border border-white/5 hover:border-high-voltage/30 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-[10px] font-mono text-white/40 uppercase">{comp.type}</div>
                <Zap className="w-3 h-3 text-high-voltage opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 truncate">{comp.name}</h4>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-mono text-white/30 uppercase">Loss Prediction</span>
                  <span className="text-xs font-mono text-thermal-alert">{comp.loss}W</span>
                </div>
                <div className="h-1 bg-white/5 w-full">
                  <div className="h-full bg-thermal-alert" style={{ width: `${(comp.loss / 5) * 100}%` }} />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-mono text-high-voltage">{comp.efficiency}%</span>
                  <span className="text-[10px] font-mono text-white/40">{comp.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-6 flex justify-center">
        <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] flex items-center gap-4">
          <div className="h-[1px] w-12 bg-white/10" />
          Real-time loss synthesis from 500k+ components
          <div className="h-[1px] w-12 bg-white/10" />
        </div>
      </div>
    </div>
  );
};
