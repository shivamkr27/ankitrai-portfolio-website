import React, { useEffect, useState } from 'react';
import { Fingerprint, Lock, Unlock, Scan, ShieldCheck } from 'lucide-react';

interface CyberLoaderProps {
  onComplete: () => void;
}

const CyberLoader: React.FC<CyberLoaderProps> = ({ onComplete }) => {
  const [status, setStatus] = useState("INITIALIZING_SCAN");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [scanLinePos, setScanLinePos] = useState(0);

  useEffect(() => {
    // Animation Sequence
    const sequence = async () => {
      // Phase 1: Biometric Scan
      await new Promise(r => setTimeout(r, 800));
      setStatus("SCANNING_BIOMETRICS...");
      
      // Phase 2: Verification
      await new Promise(r => setTimeout(r, 1000));
      setStatus("VERIFYING_IDENTITY...");
      
      // Phase 3: Access Granted
      await new Promise(r => setTimeout(r, 800));
      setStatus("ACCESS_GRANTED");
      setIsUnlocked(true);
      
      // Phase 4: Complete
      await new Promise(r => setTimeout(r, 800));
      onComplete();
    };

    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0a0f1c] z-[100] flex flex-col items-center justify-center font-mono overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main Scanner HUD */}
      <div className="relative flex items-center justify-center">
        
        {/* Outer Rotating Ring (Clockwise) */}
        <div className="absolute w-64 h-64 border border-cyber-accent/30 rounded-full border-t-transparent border-l-transparent animate-spin"></div>
        
        {/* Middle Rotating Ring (Counter-Clockwise) */}
        <div className="absolute w-48 h-48 border-2 border-blue-500/30 rounded-full border-b-transparent border-r-transparent animate-reverse-spin"></div>

        {/* Inner Pulsing Circle */}
        <div className="absolute w-32 h-32 bg-cyber-accent/5 rounded-full animate-ping-slow"></div>

        {/* Central Icon Container */}
        <div className="relative z-10 p-6 bg-cyber-900 border border-cyber-accent/50 rounded-full shadow-[0_0_30px_rgba(0,242,255,0.2)]">
          {isUnlocked ? (
            <Unlock className="w-12 h-12 text-green-400 animate-bounce" strokeWidth={1.5} />
          ) : (
            <Fingerprint className="w-12 h-12 text-cyber-accent opacity-80" strokeWidth={1.5} />
          )}
          
          {/* Scanning Beam (Only when locked) */}
          {!isUnlocked && (
            <div className="absolute top-0 left-0 w-full h-1 bg-cyber-accent shadow-[0_0_10px_#00f2ff] animate-[scan_2s_linear_infinite] opacity-70"></div>
          )}
        </div>
      </div>

      {/* Status Text HUD */}
      <div className="mt-12 text-center space-y-2 relative z-10">
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.3em] text-cyber-accent">
          {isUnlocked ? <ShieldCheck size={14} /> : <Scan size={14} className="animate-pulse" />}
          <span>{status}</span>
        </div>
        
        {/* Progress Bar Decoration */}
        <div className="w-48 h-1 bg-gray-800 mx-auto rounded-full overflow-hidden mt-4">
           <div className={`h-full bg-cyber-accent shadow-[0_0_10px_#00f2ff] transition-all duration-300 ${isUnlocked ? 'w-full bg-green-500' : 'w-2/3 animate-pulse'}`}></div>
        </div>
        
        <p className="text-[10px] text-gray-500 mt-2">
           SECURE_GATEWAY_V4.0.2 // ENCRYPTED
        </p>
      </div>

      {/* CSS for Scan Animation within Component for portability */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 10%; opacity: 0; }
          10% { opacity: 1; }
          50% { top: 90%; }
          90% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CyberLoader;