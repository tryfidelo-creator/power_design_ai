import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface DesignCardProps {
  children: React.ReactNode;
  title?: string;
  serialNumber?: string;
  className?: string;
  status?: 'nominal' | 'alert' | 'idle';
}

export const DesignCard: React.FC<DesignCardProps> = ({ 
  children, 
  title, 
  serialNumber, 
  className,
  status = 'idle'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        mass: 1
      }}
      className={cn(
        "faraday-cage bg-component-neutral/40 p-4 relative group",
        status === 'alert' && "border-thermal-alert/30",
        className
      )}
    >
      {/* SMD Pin Indicators */}
      <div className="absolute -left-1 top-4 w-2 h-1 bg-high-voltage/40 rounded-full" />
      <div className="absolute -left-1 top-8 w-2 h-1 bg-high-voltage/40 rounded-full" />
      <div className="absolute -right-1 top-4 w-2 h-1 bg-high-voltage/40 rounded-full" />
      <div className="absolute -right-1 top-8 w-2 h-1 bg-high-voltage/40 rounded-full" />
      
      <div className="flex justify-between items-start mb-4 border-b border-high-voltage/10 pb-2">
        <div>
          {title && (
            <h3 className="text-xs font-bold uppercase tracking-widest text-high-voltage/80 font-sans">
              {title}
            </h3>
          )}
          {serialNumber && (
            <span className="text-[10px] font-mono text-white/30">
              SN: {serialNumber}
            </span>
          )}
        </div>
        <div className={cn(
          "w-2 h-2 rounded-full shadow-[0_0_8px]",
          status === 'nominal' ? "bg-high-voltage shadow-high-voltage" : 
          status === 'alert' ? "bg-thermal-alert shadow-thermal-alert" : 
          "bg-white/10 shadow-transparent"
        )} />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-high-voltage/20" />
    </motion.div>
  );
};
