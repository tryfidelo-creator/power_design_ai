import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Globe, 
  Server,
  ArrowRight,
  Search,
  ChevronRight,
  Mail,
  Linkedin,
  Twitter
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
    <div className="min-h-screen bg-substrate text-white font-sans selection:bg-high-voltage/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-substrate/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-high-voltage/10 flex items-center justify-center faraday-cage">
              <Zap className="text-high-voltage w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">
              PowerDesign <span className="text-high-voltage">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-widest text-white/60">
            <a href="#features" className="hover:text-high-voltage transition-colors">Features</a>
            <a href="#solutions" className="hover:text-high-voltage transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-high-voltage transition-colors">Pricing</a>
            <button 
              onClick={onLaunch}
              className="px-4 py-2 bg-high-voltage text-substrate font-bold hover:brightness-110 transition-all rounded-sm"
            >
              Launch Designer
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="grid-overlay absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-high-voltage/10 border border-high-voltage/20 text-[10px] font-mono text-high-voltage uppercase mb-6">
                <div className="w-1.5 h-1.5 bg-high-voltage rounded-full animate-pulse" />
                Next-Gen Power Synthesis Engine
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-6">
                Design <span className="text-high-voltage">Power</span> <br />
                At AI Speed
              </h1>
              <p className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
                Automate complex power converter design. From topology selection to 
                magnetic optimization, our physics-informed AI reduces engineering 
                cycles from months to minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onLaunch}
                  className="px-8 py-4 bg-high-voltage text-substrate font-black text-sm uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3"
                >
                  Start Designing <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border border-white/10 hover:bg-white/5 transition-all font-bold text-sm uppercase tracking-widest">
                  View Case Studies
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <SmartSelectHero />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Integrated Design Ecosystem</h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Precision Engineering Modules</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <EfficiencyBridge />
            <div className="md:col-span-2">
              <MagneticIQ />
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Renewable Energy', desc: 'Optimize grid-tie inverters and MPPT stages for maximum yield.' },
              { icon: Server, title: 'Data Centers', desc: 'High-density 48V to 1V point-of-load solutions with GaN technology.' },
              { icon: ShieldCheck, title: 'Aerospace', desc: 'Radiation-hardened power stages with extreme reliability profiles.' }
            ].map((v, i) => (
              <div key={i} className="p-8 border border-white/5 hover:border-high-voltage/30 transition-all group">
                <v.icon className="w-10 h-10 text-high-voltage mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold uppercase mb-4">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <PricingNodes />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-high-voltage w-6 h-6" />
                <span className="text-xl font-black tracking-tighter uppercase">PowerDesign AI</span>
              </div>
              <p className="text-white/40 text-sm max-w-sm mb-6">
                The industry standard for AI-driven power electronics design. 
                Trusted by leading EV and aerospace manufacturers worldwide.
              </p>
              <div className="flex gap-4">
                <Twitter className="w-5 h-5 text-white/20 hover:text-high-voltage cursor-pointer" />
                <Linkedin className="w-5 h-5 text-white/20 hover:text-high-voltage cursor-pointer" />
                <Mail className="w-5 h-5 text-white/20 hover:text-high-voltage cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="hover:text-high-voltage cursor-pointer">Synthesis Engine</li>
                <li className="hover:text-high-voltage cursor-pointer">Component Library</li>
                <li className="hover:text-high-voltage cursor-pointer">Thermal Analysis</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="hover:text-high-voltage cursor-pointer">About Us</li>
                <li className="hover:text-high-voltage cursor-pointer">Careers</li>
                <li className="hover:text-high-voltage cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-mono text-white/20">© 2026 POWERDESIGN AI. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-4 text-[10px] font-mono text-white/20">
              <span className="flex items-center gap-1">
                <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                SYSTEM_STATUS: NOMINAL
              </span>
              <span>|</span>
              <span>PRIVACY POLICY</span>
              <span>|</span>
              <span>TERMS OF SERVICE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
