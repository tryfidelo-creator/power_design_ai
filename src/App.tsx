import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Thermometer, 
  Cpu, 
  Activity, 
  Settings, 
  ShieldAlert, 
  Layers, 
  ChevronRight,
  Play,
  RefreshCw,
  Database
} from 'lucide-react';
import { DesignCard } from './components/DesignCard';
import { ThermalView } from './components/ThermalView';
import { GoogleGenAI } from '@google/genai';

// Initialize AI
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export default function App() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [aiInsights, setAiInsights] = useState<string>('Awaiting system parameters for topology synthesis...');
  
  const [params, setParams] = useState({
    vIn: 400,
    vOut: 48,
    pOut: 3000,
    freq: 250,
    topology: 'Phase-Shifted Full Bridge'
  });

  const runOptimization = async () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
    
    // Simulate progress
    const interval = setInterval(() => {
      setOptimizationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    try {
      const model = "gemini-3-flash-preview";
      const prompt = `As a Senior Power Electronics Architect, analyze these design parameters for a power converter:
      Input Voltage: ${params.vIn}V
      Output Voltage: ${params.vOut}V
      Output Power: ${params.pOut}W
      Switching Frequency: ${params.freq}kHz
      Target Topology: ${params.topology}
      
      Provide a concise technical assessment (max 100 words) focusing on:
      1. Component selection (GaN vs SiC)
      2. Thermal challenges
      3. Efficiency estimation
      4. EMI considerations
      Use professional engineering terminology.`;

      const response = await genAI.models.generateContent({
        model,
        contents: [{ parts: [{ text: prompt }] }],
      });

      setAiInsights(response.text || 'Optimization complete. Analysis failed to generate.');
    } catch (error) {
      console.error('AI Error:', error);
      setAiInsights('Error during AI synthesis. Check system logs.');
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="min-h-screen bg-substrate grid-overlay p-6 font-sans selection:bg-high-voltage/30">
      {/* Header / Navigation Rail */}
      <header className="flex justify-between items-center mb-8 border-b border-high-voltage/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-high-voltage/10 flex items-center justify-center faraday-cage">
            <Zap className="text-high-voltage w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tighter uppercase text-white">
              PowerDesign <span className="text-high-voltage">AI</span>
            </h1>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40">
              <span className="flex items-center gap-1">
                <div className="w-1 h-1 bg-high-voltage rounded-full animate-pulse" />
                SYSTEM_READY
              </span>
              <span>|</span>
              <span>V_CORE: 1.20V</span>
              <span>|</span>
              <span>TEMP: 34°C</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="p-2 hover:bg-high-voltage/10 transition-colors faraday-cage group">
            <Settings className="w-5 h-5 text-white/60 group-hover:text-high-voltage" />
          </button>
          <button className="px-4 py-2 bg-high-voltage text-substrate font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
            <Database className="w-4 h-4" />
            Component Library
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        
        {/* Left Column: Design Parameters */}
        <div className="lg:col-span-4 space-y-6">
          <DesignCard title="Input Parameters" serialNumber="IP-400-DC">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-white/40 uppercase">Input Voltage (V_in)</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={params.vIn}
                    onChange={(e) => setParams({...params, vIn: Number(e.target.value)})}
                    className="bg-substrate/60 border border-high-voltage/20 px-3 py-2 w-full font-mono text-sm text-high-voltage focus:outline-none focus:border-high-voltage"
                  />
                  <span className="text-xs font-mono text-white/60">VDC</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-white/40 uppercase">Output Voltage (V_out)</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={params.vOut}
                    onChange={(e) => setParams({...params, vOut: Number(e.target.value)})}
                    className="bg-substrate/60 border border-high-voltage/20 px-3 py-2 w-full font-mono text-sm text-high-voltage focus:outline-none focus:border-high-voltage"
                  />
                  <span className="text-xs font-mono text-white/60">VDC</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-white/40 uppercase">Output Power (P_out)</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    value={params.pOut}
                    onChange={(e) => setParams({...params, pOut: Number(e.target.value)})}
                    className="bg-substrate/60 border border-high-voltage/20 px-3 py-2 w-full font-mono text-sm text-high-voltage focus:outline-none focus:border-high-voltage"
                  />
                  <span className="text-xs font-mono text-white/60">W</span>
                </div>
              </div>
            </div>
          </DesignCard>

          <DesignCard title="Topology Selection" serialNumber="TS-GEN-AI">
            <div className="space-y-4">
              <select 
                value={params.topology}
                onChange={(e) => setParams({...params, topology: e.target.value})}
                className="bg-substrate/60 border border-high-voltage/20 px-3 py-2 w-full font-mono text-sm text-high-voltage focus:outline-none focus:border-high-voltage appearance-none"
              >
                <option>Phase-Shifted Full Bridge</option>
                <option>LLC Resonant Converter</option>
                <option>Active Clamp Flyback</option>
                <option>Interleaved Boost</option>
              </select>
              
              <div className="flex items-center justify-between p-3 bg-high-voltage/5 border border-high-voltage/10">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-high-voltage" />
                  <span className="text-[10px] font-mono text-white/60 uppercase">Complexity Index</span>
                </div>
                <span className="text-xs font-mono text-high-voltage">HIGH</span>
              </div>
            </div>
          </DesignCard>

          <button 
            onClick={runOptimization}
            disabled={isOptimizing}
            className="w-full py-4 bg-high-voltage text-substrate font-black text-sm uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
          >
            {isOptimizing ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Play className="w-5 h-5 fill-current" />
            )}
            {isOptimizing ? 'Synthesizing...' : 'Execute AI Synthesis'}
          </button>
        </div>

        {/* Center/Right Column: Optimization & Analysis */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* AI Insights Monitor */}
          <DesignCard title="AI Optimization Engine" serialNumber="NEURAL-CORE-V3" className="min-h-[200px]">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase">Synthesis Progress</span>
                  <span className="text-xs font-mono text-high-voltage">{optimizationProgress}%</span>
                </div>
                <div className="h-1 bg-white/5 w-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-high-voltage"
                    initial={{ width: 0 }}
                    animate={{ width: `${optimizationProgress}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-substrate/80 p-4 border border-high-voltage/10 min-h-[120px] font-mono text-xs leading-relaxed text-white/80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={aiInsights}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                >
                  <span className="text-high-voltage mr-2 font-bold">&gt;</span>
                  {aiInsights}
                  {isOptimizing && (
                    <span className="inline-block w-2 h-4 bg-high-voltage ml-1 animate-pulse align-middle" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </DesignCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DesignCard title="Thermal Profile" serialNumber="THM-SENSE-01">
              <ThermalView />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="p-2 bg-thermal-alert/5 border border-thermal-alert/20 rounded">
                  <div className="text-[8px] text-thermal-alert/60 uppercase font-mono">Peak Junction</div>
                  <div className="text-lg font-mono text-thermal-alert">112.4°C</div>
                </div>
                <div className="p-2 bg-high-voltage/5 border border-high-voltage/20 rounded">
                  <div className="text-[8px] text-high-voltage/60 uppercase font-mono">Case Temp</div>
                  <div className="text-lg font-mono text-high-voltage">54.2°C</div>
                </div>
              </div>
            </DesignCard>

            <DesignCard title="System Efficiency" serialNumber="EFF-CALC-X" status="nominal">
              <div className="flex flex-col items-center justify-center h-48 py-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle 
                      cx="64" cy="64" r="58" 
                      fill="none" stroke="currentColor" strokeWidth="4"
                      className="text-white/5"
                    />
                    <motion.circle 
                      cx="64" cy="64" r="58" 
                      fill="none" stroke="currentColor" strokeWidth="4"
                      strokeDasharray="364.4"
                      initial={{ strokeDashoffset: 364.4 }}
                      animate={{ strokeDashoffset: 364.4 * (1 - 0.984) }}
                      className="text-high-voltage"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black font-mono text-white">98.4%</span>
                    <span className="text-[8px] font-mono text-white/40 uppercase">Target η</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-[10px] font-mono text-white/60">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-high-voltage rounded-full" />
                    SWITCHING
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white/20 rounded-full" />
                    CONDUCTION
                  </div>
                </div>
              </div>
            </DesignCard>
          </div>

          {/* Bottom Trace Decorative */}
          <div className="relative h-12 overflow-hidden opacity-20">
            <div className="trace-line absolute top-0 w-full" />
            <div className="trace-line absolute top-4 w-2/3 right-0" />
            <div className="trace-line absolute top-8 w-1/2" />
          </div>
        </div>
      </main>

      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-substrate/90 backdrop-blur border-t border-high-voltage/10 px-6 py-2 flex justify-between items-center text-[10px] font-mono text-white/40">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <ShieldAlert className="w-3 h-3 text-high-voltage" />
            ENCRYPTION: AES-256
          </span>
          <span className="flex items-center gap-2">
            <Cpu className="w-3 h-3 text-white/20" />
            CORE_LOAD: 12%
          </span>
        </div>
        <div className="flex gap-4">
          <span className="text-high-voltage/60">LATENCY: 14ms</span>
          <span>BUILD: v1.0.4-STABLE</span>
        </div>
      </footer>
    </div>
  );
}
