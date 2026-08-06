import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningAnimationProps {
  onComplete?: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'spinner' | 'logo' | 'loading' | 'exit'>('spinner');

  useEffect(() => {
    // Stage 1: Spinner phase for first 700ms
    const t1 = setTimeout(() => {
      setPhase('logo');
    }, 700);

    // Stage 2: Progress loader starts
    const t2 = setTimeout(() => {
      setPhase('loading');
    }, 1200);

    // Progress counter ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 3;
      });
    }, 35);

    // Exit transition trigger
    const t3 = setTimeout(() => {
      setPhase('exit');
    }, 3000);

    const t4 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="gcore-style-opening"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#131313] flex items-center justify-center p-4 sm:p-8 select-none pointer-events-auto"
        >
          {/* Ambient Outer Frame Edge Glow */}
          <div className="absolute inset-4 sm:inset-12 rounded-3xl bg-[#0A0A0A] border border-[#2A2A2A] shadow-[0_0_100px_rgba(139,92,246,0.25)] flex flex-col items-center justify-center overflow-hidden p-6 sm:p-10">

            {/* Center Core Animation Area */}
            <div className="relative my-auto flex flex-col items-center justify-center text-center py-12">
              
              {/* PHASE 1: Spinning Central Aperture / Ring */}
              {phase === 'spinner' && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: 360 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-t-[#8B5CF6] border-r-[#8B5CF6]/30 border-b-transparent border-l-transparent animate-spin" />
                  <div className="w-8 h-8 rounded-full bg-[#E5E2E1] shadow-[0_0_20px_#8B5CF6]" />
                </motion.div>
              )}

              {/* PHASE 2 & 3: Brand Logo & Horizontal Loader reveal */}
              {(phase === 'logo' || phase === 'loading' || phase === 'exit') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-xl flex flex-col items-center"
                >
                  {/* Giant BASITH Brand Emblem Typography */}
                  <div className="relative flex items-center justify-center py-2">
                    <motion.h1
                      initial={{ letterSpacing: '0.4em', opacity: 0, y: 20 }}
                      animate={{ letterSpacing: '0.08em', opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="font-brand font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#E5E2E1] drop-shadow-[0_0_40px_rgba(139,92,246,0.6)] uppercase flex items-center"
                    >
                      {/* Logo Icon Mark before text */}
                      <motion.span
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block w-8 h-8 sm:w-12 sm:h-12 bg-[#8B5CF6] rounded-xl mr-3 sm:mr-4 shadow-[0_0_20px_#8B5CF6] relative overflow-hidden flex-shrink-0"
                      >
                        <span className="absolute inset-1 border-2 border-white/80 rounded-lg" />
                      </motion.span>
                      BASITH
                    </motion.h1>
                  </div>


                </motion.div>
              )}

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

