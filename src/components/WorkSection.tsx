import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';
import {
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Sparkles,
  Globe,
  Circle,
  Box,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { basithProjects } from '../data';

export const WorkSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position state normalized between -1 and 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid, physics-based movement
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Active highlighted card index for click/swipe
  const [activeIndex, setActiveIndex] = useState(1);

  // Handle Mouse movement across the card stage
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // 4 main projects matching the 4 cards in the design
  const displayProjects = basithProjects.slice(0, 4);

  // Card specific visual styling mimicking the fanned cards
  const cardDesigns = [
    {
      id: 0,
      bg: 'bg-gradient-to-br from-[#12131a] via-[#1a1b26] to-[#0a0b10]',
      pattern: 'bg-[radial-gradient(#3a3e52_1px,transparent_1px)] [background-size:10px_10px]',
      accentOrb: 'bg-gradient-to-tr from-[#ec4899] to-[#8b5cf6]',
      accentStyle: 'top-6 right-6 w-14 h-14 rounded-full blur-xs opacity-90 shadow-[0_0_25px_rgba(236,72,153,0.5)]',
      baseRotation: -14,
      baseX: -160,
      baseY: 28,
      chipColor: 'from-[#d4af37] to-[#aa7c11]',
      cardNum: '4920 •••• •••• 9102',
    },
    {
      id: 1,
      bg: 'bg-gradient-to-tr from-[#1e1b4b] via-[#2e1065] to-[#0284c7]',
      pattern: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-purple-500/20 to-transparent',
      accentOrb: 'bg-gradient-to-r from-cyan-400 to-blue-600',
      accentStyle: 'bottom-8 left-6 w-24 h-12 rounded-full blur-sm opacity-80',
      baseRotation: -5,
      baseX: -50,
      baseY: 6,
      chipColor: 'from-[#e2e8f0] to-[#94a3b8]',
      cardNum: '1234 5678 9012 3456',
    },
    {
      id: 2,
      bg: 'bg-gradient-to-b from-[#18181b] via-[#09090b] to-[#000000]',
      pattern: 'border border-[#27272a]',
      accentOrb: 'bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#1e1b4b]',
      accentStyle: 'bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full shadow-[0_0_35px_rgba(6,182,212,0.7)]',
      baseRotation: 4,
      baseX: 50,
      baseY: 6,
      chipColor: 'from-[#d4af37] to-[#85581A]',
      cardNum: '8819 •••• •••• 1049',
    },
    {
      id: 3,
      bg: 'bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#000000]',
      pattern: 'bg-[radial-gradient(circle_at_bottom_right,#ea580c_0%,transparent_60%)]',
      accentOrb: 'border-2 border-[#f97316]/50',
      accentStyle: 'bottom-4 right-4 w-28 h-28 rounded-full opacity-60',
      baseRotation: 14,
      baseX: 160,
      baseY: 28,
      chipColor: 'from-[#cbd5e1] to-[#64748b]',
      cardNum: '6021 •••• •••• 5530',
    },
  ];

  return (
    <section id="work" className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto overflow-hidden bg-transparent select-none">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] bg-radial from-white/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main Header Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3"
      >
        <h2 className="font-heading font-normal text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
          Climb Every Hour, Win <br className="hidden sm:inline" />
          <span className="text-white/90">Every Day</span>
        </h2>

        <p className="text-[#94A3B8] text-xs sm:text-sm max-w-md mx-auto leading-relaxed pt-1">
          Take control of your time, stay focused, and set benchmark with every motion produced.
        </p>

        {/* Explore Creations CTA Button */}
        <div className="pt-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#111318] hover:bg-[#1a1d26] border border-[#2e3242] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer inline-flex items-center space-x-2"
          >
            <span>Explore Creations</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Interactive Fanned-Cards Container with Curve-Slide Mouse Animation */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-5xl mx-auto pt-6 pb-14 sm:pb-20 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Navigation Arrows for Mobile/Keyboard access */}
        <div className="flex sm:hidden items-center justify-between w-full px-4 mb-4 z-30">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + 4) % 4)}
            className="p-2 rounded-full bg-[#191b20] border border-[#2a2d37] text-white"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs text-[#94A3B8] font-mono">
            Project {activeIndex + 1} of 4
          </span>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % 4)}
            className="p-2 rounded-full bg-[#191b20] border border-[#2a2d37] text-white"
            aria-label="Next card"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Arc Curved Slider Stage */}
        <div className="relative w-full max-w-4xl h-[280px] sm:h-[350px] md:h-[380px] flex items-center justify-center perspective-[1200px]">
          {displayProjects.map((project, idx) => {
            const card = cardDesigns[idx];
            const isSelected = activeIndex === idx;

            return (
              <InteractiveCard
                key={project.id}
                idx={idx}
                card={card}
                project={project}
                isSelected={isSelected}
                springX={springX}
                springY={springY}
                onSelect={() => {
                  setActiveIndex(idx);
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Logo Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pt-4 text-center"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-center max-w-4xl mx-auto opacity-75 hover:opacity-100 transition-opacity">
          {[
            { name: 'Logoipsum', icon: Circle },
            { name: 'Logoipsum', icon: Globe },
            { name: 'Logoipsum', icon: Sparkles },
            { name: 'Logoipsum', icon: Box },
            { name: 'Logoipsum', icon: ShieldCheck },
          ].map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-center space-x-2 text-white/80 font-bold text-sm tracking-tight py-2 px-3 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <IconComp className="w-3.5 h-3.5 text-white" />
                </div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

// Subcomponent for individual card with full mouse curve reactive motion
interface InteractiveCardProps {
  idx: number;
  card: {
    id: number;
    bg: string;
    pattern: string;
    accentOrb: string;
    accentStyle: string;
    baseRotation: number;
    baseX: number;
    baseY: number;
    chipColor: string;
    cardNum: string;
  };
  project: {
    id: string;
    title: string;
    category: string;
    type: string;
    description: string;
    tools: string;
    image: string;
  };
  isSelected: boolean;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  onSelect: () => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  idx,
  card,
  project,
  isSelected,
  springX,
  springY,
  onSelect,
}) => {
  // Spread across center (-1.5, -0.5, 0.5, 1.5)
  const curveFactor = idx - 1.5;

  // Explicit type annotations inside useTransform to prevent TS arithmetic type errors
  const dynamicX = useTransform(springX, (xVal: number) => card.baseX + xVal * 35 + curveFactor * xVal * 25);
  const dynamicY = useTransform(springY, (yVal: number) => card.baseY + Math.abs(curveFactor) * 8 + yVal * 20);
  const dynamicRotate = useTransform(springX, (xVal: number) => card.baseRotation + xVal * 12 + curveFactor * xVal * 4);
  const dynamicScale = useTransform(springY, (yVal: number) => (isSelected ? 1.06 : 0.95 + yVal * 0.03));

  return (
    <motion.div
      style={{
        x: dynamicX,
        y: dynamicY,
        rotate: dynamicRotate,
        scale: dynamicScale,
        zIndex: isSelected ? 40 : 10 + (idx === 1 || idx === 2 ? 10 : 0),
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      whileHover={{
        scale: 1.12,
        rotate: 0,
        y: -25,
        zIndex: 50,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      onClick={onSelect}
      className={`absolute w-[190px] sm:w-[240px] md:w-[270px] h-[250px] sm:h-[300px] md:h-[330px] rounded-2xl p-4 sm:p-5 cursor-pointer border shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
        card.bg
      } ${isSelected ? 'border-[#8B5CF6] shadow-[0_0_40px_rgba(139,92,246,0.4)]' : 'border-white/10 hover:border-white/30'}`}
    >
      {/* Pattern Overlay */}
      <div className={`absolute inset-0 pointer-events-none ${card.pattern}`} />

      {/* Decorative Accent Orb */}
      <div className={`absolute pointer-events-none ${card.accentOrb} ${card.accentStyle}`} />

      {/* Top Header: Metallic Chip & Type */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Metallic Credit Card Chip Graphic */}
        <div className={`w-9 h-7 rounded-md bg-gradient-to-br ${card.chipColor} p-1 flex items-center justify-center border border-white/20 shadow-xs`}>
          <Cpu className="w-4 h-4 text-black/80" />
        </div>
        <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">
          {project.category}
        </span>
      </div>

      {/* Card Body / Case Title */}
      <div className="relative z-10 my-auto text-left space-y-1">
        <div className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-widest">
          {project.type}
        </div>
        <h3 className="font-heading font-extrabold text-white text-sm sm:text-base md:text-lg leading-tight line-clamp-2">
          {project.title}
        </h3>
        <p className="text-[11px] text-white/60 line-clamp-2 font-sans pt-0.5">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Card Number & Action Link */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-white/70 font-mono tracking-wider">
        <span>{card.cardNum}</span>
        <span className="text-white font-sans font-bold flex items-center gap-0.5 hover:text-[#38BDF8] transition-colors">
          <span>View</span>
          <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  );
};
