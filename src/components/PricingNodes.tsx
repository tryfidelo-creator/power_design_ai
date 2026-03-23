import React from 'react';
import { motion } from 'motion/react';
import { Server, Shield, Zap, Globe } from 'lucide-react';

const TIERS = [
  {
    name: 'Starter',
    price: '$99',
    period: '/mo',
    features: ['50 Simulations/mo', 'Standard Library', 'Email Support', 'Basic Thermal Maps'],
    color: 'white/20'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/mo',
    features: ['Unlimited Simulations', 'Full Component Database', 'Priority AI Synthesis', 'Advanced MagneticIQ'],
    color: 'high-voltage',
    active: true
  },
  {
    name: 'Enterprise',
    price: '$799',
    period: '/mo',
    features: ['Custom FEA Integration', 'Team Collaboration', 'API Access', 'Dedicated Support'],
    color: 'white/20'
  }
];

export const PricingNodes = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tighter text-white uppercase">Pricing <span className="text-high-voltage">Nodes</span></h2>
        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Select your computational capacity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`faraday-cage bg-component-neutral/20 p-8 flex flex-col border ${tier.active ? 'border-high-voltage/40' : 'border-white/5'}`}
          >
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-1">
                <h3 className={`text-xl font-bold uppercase ${tier.active ? 'text-high-voltage' : 'text-white'}`}>{tier.name}</h3>
                <div className="text-[10px] font-mono text-white/30 uppercase">Node_ID: {tier.name.toUpperCase()}-00{i+1}</div>
              </div>
              <Server className={`w-5 h-5 ${tier.active ? 'text-high-voltage' : 'text-white/20'}`} />
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black font-mono text-white">{tier.price}</span>
                <span className="text-white/40 font-mono text-xs">{tier.period}</span>
              </div>
            </div>

            <div className="space-y-4 flex-1 mb-8">
              {tier.features.map((feat, j) => (
                <div key={j} className="flex items-center gap-3 text-xs text-white/60">
                  <Zap className={`w-3 h-3 ${tier.active ? 'text-high-voltage' : 'text-white/20'}`} />
                  {feat}
                </div>
              ))}
            </div>

            <button className={`w-full py-3 font-bold text-xs uppercase tracking-widest transition-all ${
              tier.active 
                ? 'bg-high-voltage text-substrate hover:brightness-110' 
                : 'bg-white/5 text-white hover:bg-white/10'
            }`}>
              Initialize Node
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
