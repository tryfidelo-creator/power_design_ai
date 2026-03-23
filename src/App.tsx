import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LandingPage } from './views/LandingPage';
import { DesignerDashboard } from './views/DesignerDashboard';

export default function App() {
  const [view, setView] = useState<'landing' | 'designer'>('landing');

  return (
    <AnimatePresence mode="wait">
      {view === 'landing' ? (
        <LandingPage key="landing" onLaunch={() => setView('designer')} />
      ) : (
        <DesignerDashboard key="designer" onBack={() => setView('landing')} />
      )}
    </AnimatePresence>
  );
}
