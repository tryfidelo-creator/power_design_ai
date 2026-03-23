import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  ChevronRight,
  Activity,
  Database,
  Layers
} from 'lucide-react';
import { SmartSelectHero } from '../components/SmartSelectHero';
import { EfficiencyBridge } from '../components/EfficiencyBridge';
import { MagneticIQ } from '../components/MagneticIQ';
import { PricingNodes } from '../components/PricingNodes';

interface LandingPageProps {
  onLaunch: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-substrate grid-overlay font-sans selection:bg-high-voltage/30 overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-substrate/80 backdrop-blur border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-high-voltage w-5 h-5" />
            <span className="text-lg font-extrabold tracking-tighter uppercase text-white">
              PowerDesign <span className="text-high-voltage">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono text-white/60 uppercase tracking-widest">
            <a href="#features" className="hover:text-high-voltage transition-colors">Features</a>
            <a href="#solutions" className="hover:text-high-voltage transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-high-voltage transition-colors">Pricing</a>
            <button 
              onClick={onLaunch}
              className="px-4 py-2 border border-high-voltage/40 text-high-voltage hover:bg-high-voltage/5 transition-all"
            >
              Launch Designer
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-12 px-6 text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">
            <Activity className="w-3 h-3 text-high-voltage" />
            Physics-Informed ML v4.2
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-none">
            DESIGN POWER <br />
            <span className="text-high-voltage">AT THE SPEED OF LIGHT.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The world's first AI platform for automated power electronics design. 
            Reduce engineering cycles from months to minutes with silicon-accurate synthesis.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onLaunch}
              className="px-8 py-4 bg-high-voltage text-substrate font-black text-sm uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3"
            >
              Start Designing Free
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
              Request Demo
            </button>
          </div>
        </motion.div>

        <SmartSelectHero />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-high-voltage/5 blur-[120px] -z-10" />
      </header>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-white/5 bg-component-neutral/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-black text-xl text-white">
            <ShieldCheck className="w-6 h-6" /> AUTOMOTIVE_ISO
          </div>
          <div className="flex items-center gap-2 font-black text-xl text-white">
            <Cpu className="w-6 h-6" /> SEMI_CONDUCTOR_X
          </div>
          <div className="flex items-center gap-2 font-black text-xl text-white">
            <Globe className="w-6 h-6" /> AEROSPACE_STD
          </div>
        </div>
      </section>

      <EfficiencyBridge />
      <MagneticIQ />

      {/* Verticals Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="faraday-cage bg-component-neutral/20 p-8 space-y-4">
            <div className="w-12 h-12 bg-high-voltage/10 flex items-center justify-center rounded-sm">
              <Zap className="text-high-voltage w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">EV Powertrain</h3>
            <p className="text-white/40 text-xs leading-relaxed">Optimize traction inverters for maximum range and thermal stability in high-density SiC environments.</p>
          </div>
          <div className="faraday-cage bg-component-neutral/20 p-8 space-y-4">
            <div className="w-12 h-12 bg-high-voltage/10 flex items-center justify-center rounded-sm">
              <Layers className="text-high-voltage w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Renewable Energy</h3>
            <p className="text-white/40 text-xs leading-relaxed">Design multi-level PV inverters with automated grid-compliance and harmonic mitigation.</p>
          </div>
          <div className="faraday-cage bg-component-neutral/20 p-8 space-y-4">
            <div className="w-12 h-12 bg-high-voltage/10 flex items-center justify-center rounded-sm">
              <Database className="text-high-voltage w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase">Data Centers</h3>
            <p className="text-white/40 text-xs leading-relaxed">High-frequency 48V to 1V point-of-load converters with industry-leading transient response.</p>
          </div>
        </div>
      </section>

      <div id="pricing">
        <PricingNodes />
      </div>

      {/* Footer */}
      <footer className="bg-substrate border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="text-high-voltage w-5 h-5" />
              <span className="text-lg font-extrabold tracking-tighter uppercase text-white">
                PowerDesign <span className="text-high-voltage">AI</span>
              </span>
            </div>
            <p className="text-white/40 text-[10px] font-mono leading-relaxed">
              The Silicon Blueprint for the next generation of power electronics.
              © 2026 PowerDesign AI Systems Inc.
            </p>
          </div>
          
          {[
            { title: 'Product', links: ['Designer', 'Library', 'Simulation', 'API'] },
            { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Compliance'] }
          ].map(col => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-[10px] font-mono text-white uppercase tracking-widest">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-[10px] font-mono hover:text-high-voltage transition-colors uppercase">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">
          <span>System Status: Operational</span>
          <span>Latency: 12ms</span>
          <span>Region: EU-WEST-2</span>
        </div>
      </footer>
    </motion.div>
  );
};
