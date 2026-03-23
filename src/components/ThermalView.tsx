import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

interface ThermalData {
  time: string;
  temp: number;
  load: number;
}

const data: ThermalData[] = [
  { time: '0ms', temp: 25, load: 10 },
  { time: '10ms', temp: 32, load: 45 },
  { time: '20ms', temp: 45, load: 85 },
  { time: '30ms', temp: 58, load: 95 },
  { time: '40ms', temp: 62, load: 92 },
  { time: '50ms', temp: 65, load: 90 },
  { time: '60ms', temp: 64, load: 88 },
];

export const ThermalView: React.FC = () => {
  return (
    <div className="h-48 w-full font-mono text-[10px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="thermalGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff3e00" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ff3e00" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="loadGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis 
            dataKey="time" 
            stroke="#475569" 
            tick={{ fill: '#475569' }}
            axisLine={false}
          />
          <YAxis 
            stroke="#475569" 
            tick={{ fill: '#475569' }}
            axisLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0a0f14', 
              border: '1px solid #1e293b',
              borderRadius: '4px',
              fontSize: '10px'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="temp" 
            stroke="#ff3e00" 
            fillOpacity={1} 
            fill="url(#thermalGradient)" 
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="load" 
            stroke="#00f2ff" 
            fillOpacity={1} 
            fill="url(#loadGradient)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
