import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'motion/react';
import { MousePointer, Crosshair, Sparkles, Disc, Eye } from 'lucide-react';

export type CursorMode = 'laser' | 'hud' | 'particles' | 'spotlight';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  speed: number;
  alpha: number;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [mode, setMode] = useState<CursorMode>('laser');
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  // Smooth springs for cursor follow
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  const trailSpringConfig = { damping: 30, stiffness: 180, mass: 0.8 };
  const trailX = useSpring(-100, trailSpringConfig);
  const trailY = useSpring(-100, trailSpringConfig);

  const particleIdRef = useRef(0);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);
      trailX.set(clientX);
      trailY.set(clientY);

      // Interactive element detection
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('interactive') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Generate sparkle particles in 'particles' mode
      if (mode === 'particles' && Math.random() < 0.4) {
        particleIdRef.current += 1;
        const newParticle: Particle = {
          id: particleIdRef.current,
          x: clientX + (Math.random() - 0.5) * 10,
          y: clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 6 + 3,
          color: Math.random() > 0.3 ? '#8B5CF6' : '#06B6D4',
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 1.5 + 0.5,
          alpha: 1,
        };
        setParticles((prev) => [...prev.slice(-20), newParticle]);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      rippleIdRef.current += 1;
      setRipples((prev) => [
        ...prev.slice(-5),
        { id: rippleIdRef.current, x: e.clientX, y: e.clientY },
      ]);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mode, cursorX, cursorY, trailX, trailY]);

  // Particle cleanup timer loop
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.speed,
            y: p.y + Math.sin(p.angle) * p.speed + 0.3,
            alpha: p.alpha - 0.05,
            size: Math.max(0, p.size - 0.2),
          }))
          .filter((p) => p.alpha > 0 && p.size > 0)
      );
    }, 25);
    return () => clearInterval(interval);
  }, [particles]);

  const modesList: { id: CursorMode; name: string; icon: React.FC<any>; desc: string }[] = [
    { id: 'laser', name: 'Laser Kinetic', icon: MousePointer, desc: 'Spring follower with red laser ring' },
    { id: 'hud', name: 'Cinematic HUD', icon: Crosshair, desc: 'Precision editor viewfinder crosshair' },
    { id: 'particles', name: 'Sparkle Trail', icon: Sparkles, desc: 'Emits glowing motion spark particles' },
    { id: 'spotlight', name: 'Aperture Radar', icon: Eye, desc: 'Dark ambient spotlight aperture' },
  ];

  return (
    <>
      {/* Click Shockwave Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.8, scale: 0.2 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            className="fixed pointer-events-none z-50 rounded-full border-2 border-[#8B5CF6] hidden lg:block"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '60px',
              height: '60px',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 25px rgba(139,92,246,0.6)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Sparkle Particles (for 'particles' mode) */}
      {mode === 'particles' && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden hidden lg:block">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                opacity: p.alpha,
                boxShadow: `0 0 10px ${p.color}`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      )}

      {/* MODE 1: LASER KINETIC */}
      {mode === 'laser' && (
        <>
          {/* Outer Ring Smooth Trail */}
          <motion.div
            className="fixed pointer-events-none z-50 rounded-full hidden lg:block"
            style={{
              x: trailX,
              y: trailY,
              translateX: '-50%',
              translateY: '-50%',
              width: isHovered ? 64 : isMouseDown ? 28 : 42,
              height: isHovered ? 64 : isMouseDown ? 28 : 42,
              background: isHovered
                ? 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.08) 70%, transparent 100%)'
                : 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
              border: isHovered ? '1.5px solid rgba(139,92,246,0.85)' : '1px solid rgba(208,188,255,0.3)',
              boxShadow: isHovered ? '0 0 25px rgba(139,92,246,0.5), inset 0 0 15px rgba(139,92,246,0.3)' : 'none',
              transition: 'width 0.2s, height 0.2s, border 0.2s',
            }}
          />
          {/* Inner Sharp Dot */}
          <motion.div
            className="fixed pointer-events-none z-50 rounded-full bg-[#8B5CF6] hidden lg:block"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
              width: isHovered ? 12 : 8,
              height: isHovered ? 12 : 8,
              boxShadow: '0 0 12px #8B5CF6, 0 0 25px #8B5CF6',
              scale: isMouseDown ? 0.7 : 1,
              transition: 'width 0.2s, height 0.2s',
            }}
          />
        </>
      )}

      {/* MODE 2: CINEMATIC HUD CROSSHAIR */}
      {mode === 'hud' && (
        <motion.div
          className="fixed pointer-events-none z-50 hidden lg:block"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          {/* Rotating Outer Dashed Ring */}
          <motion.div
            animate={{ rotate: isHovered ? 180 : 360 }}
            transition={{ duration: isHovered ? 3 : 8, repeat: Infinity, ease: 'linear' }}
            className={`rounded-full border-dashed transition-all duration-300 ${
              isHovered
                ? 'w-16 h-16 border-2 border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.6)]'
                : 'w-10 h-10 border border-white/40'
            }`}
            style={{
              transformOrigin: 'center',
            }}
          />

          {/* Center Precision Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-3 h-0.5 ${isHovered ? 'bg-[#8B5CF6]' : 'bg-white'}`} />
            <div className={`h-3 w-0.5 absolute ${isHovered ? 'bg-[#8B5CF6]' : 'bg-white'}`} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
          </div>

          {/* Corner Brackets on Hover */}
          {isHovered && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -inset-2 border border-[#8B5CF6]/60 rounded-md"
            >
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#8B5CF6]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#8B5CF6]" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#8B5CF6]" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#8B5CF6]" />
            </motion.div>
          )}
        </motion.div>
      )}

      {/* MODE 3: SPARKLE TRAIL */}
      {mode === 'particles' && (
        <>
          <motion.div
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#4CD7F6] p-0.5 shadow-[0_0_20px_#8B5CF6] animate-spin">
              <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* MODE 4: APERTURE RADAR */}
      {mode === 'spotlight' && (
        <>
          <motion.div
            className="fixed pointer-events-none z-50 rounded-full hidden lg:block"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
              width: isHovered ? 120 : 70,
              height: isHovered ? 120 : 70,
              background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(10,10,10,0.8) 80%)',
              border: '1px solid rgba(139,92,246,0.6)',
              boxShadow: '0 0 35px rgba(139,92,246,0.4), inset 0 0 20px rgba(139,92,246,0.3)',
              transition: 'width 0.25s, height 0.25s',
            }}
          >
            {/* Target Reticle Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div className="w-full h-[1px] bg-[#8B5CF6]" />
              <div className="h-full w-[1px] bg-[#8B5CF6] absolute" />
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

