import React, { useState } from 'react';
import { motion } from 'motion/react';
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

interface WorkSectionProps {}

export const WorkSection: React.FC<WorkSectionProps> = () => {
  // Active highlighted card index for click/swipe
  const [activeIndex, setActiveIndex] = useState(1);

  // 4 main projects matching the 4 cards in the design
  const displayProjects = basithProjects.slice(0, 4);

  // Card specific visual styling with increased gap between cards
  const cardDesigns = [
    {
      id: 0,
      bg: 'bg-gradient-to-br from-[#12131a] via-[#1a1b26] to-[#0a0b10]',
      pattern: 'bg-[radial-gradient(#3a3e52_1px,transparent_1px)] [background-size:10px_10px]',
      accentOrb: 'bg-gradient-to-tr from-[#ec4899] to-[#8b5cf6]',
      accentStyle: 'top-6 right-6 w-14 h-14 rounded-full blur-xs opacity-90 shadow-[0_0_25px_rgba(236,72,153,0.5)]',
      baseRotation: -10,
      baseX: -340,
      baseY: 18,
      chipColor: 'from-[#d4af37] to-[#aa7c11]',
    },
    {
      id: 1,
      bg: 'bg-gradient-to-tr from-[#1e1b4b] via-[#2e1065] to-[#0284c7]',
      pattern: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-purple-500/20 to-transparent',
      accentOrb: 'bg-gradient-to-r from-cyan-400 to-blue-600',
      accentStyle: 'bottom-8 left-6 w-24 h-12 rounded-full blur-sm opacity-80',
      baseRotation: -3,
      baseX: -115,
      baseY: 6,
      chipColor: 'from-[#e2e8f0] to-[#94a3b8]',
    },
    {
      id: 2,
      bg: 'bg-gradient-to-b from-[#18181b] via-[#09090b] to-[#000000]',
      pattern: 'border border-[#27272a]',
      accentOrb: 'bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#1e1b4b]',
      accentStyle: 'bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full shadow-[0_0_35px_rgba(6,182,212,0.7)]',
      baseRotation: 3,
      baseX: 115,
      baseY: 6,
      chipColor: 'from-[#d4af37] to-[#85581A]',
    },
    {
      id: 3,
      bg: 'bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#000000]',
      pattern: 'bg-[radial-gradient(circle_at_bottom_right,#ea580c_0%,transparent_60%)]',
      accentOrb: 'border-2 border-[#f97316]/50',
      accentStyle: 'bottom-4 right-4 w-28 h-28 rounded-full opacity-60',
      baseRotation: 10,
      baseX: 340,
      baseY: 18,
      chipColor: 'from-[#cbd5e1] to-[#64748b]',
    },
  ];

  return (
    <section
      id="work"
      data-no-custom-cursor="true"
      className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto overflow-hidden bg-transparent select-none"
    >
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[360px] bg-radial from-white/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main Header Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3"
      >
        <h2 className="font-heading font-normal text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
          Climb Every Hour, Win <br className="hidden sm:inline" />
          <span className="text-white/90">Every Day</span>
        </h2>

        <p className="text-[#94A3B8] text-xs sm:text-sm max-w-md mx-auto leading-relaxed pt-1">
          Take control of your time, stay focused, and set benchmark with every motion produced.
        </p>

        {/* Explore Creations Action Button */}
        <div className="pt-3 flex items-center justify-center">
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

      {/* Fanned-Cards Container with Increased Gap */}
      <div className="relative w-full max-w-6xl mx-auto pt-6 pb-14 sm:pb-24 flex flex-col items-center justify-center">
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
        <div className="relative w-full max-w-6xl h-[310px] sm:h-[370px] md:h-[400px] flex items-center justify-center perspective-[1200px]">
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

// Subcomponent for individual card
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
  };
  project: {
    id: string;
    title: string;
    category: string;
    type: string;
    description?: string;
    tools: string;
    image: string;
    link?: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  idx,
  card,
  project,
  isSelected,
  onSelect,
}) => {
  const handleCardClick = () => {
    if (project.link) {
      window.location.href = project.link;
      return;
    }
    onSelect();
  };

  return (
    <motion.div
      style={{
        zIndex: isSelected ? 40 : 10 + (idx === 1 || idx === 2 ? 10 : 0),
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        x: card.baseX,
        y: card.baseY,
        rotate: card.baseRotation,
        scale: isSelected ? 1.05 : 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        y: card.baseY - 16,
        zIndex: 50,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      onClick={handleCardClick}
      className={`absolute w-[190px] sm:w-[240px] md:w-[270px] h-[250px] sm:h-[300px] md:h-[330px] rounded-2xl p-4 sm:p-5 cursor-pointer border shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
        card.bg
      } ${
        isSelected
          ? 'border-[#8B5CF6] shadow-[0_0_40px_rgba(139,92,246,0.4)]'
          : 'border-white/10 hover:border-white/30'
      }`}
    >
      {/* Pattern Overlay */}
      <div className={`absolute inset-0 pointer-events-none ${card.pattern}`} />

      {/* Decorative Accent Orb */}
      <div className={`absolute pointer-events-none ${card.accentOrb} ${card.accentStyle}`} />

      {/* Top Header: Metallic Chip & Type */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Metallic Credit Card Chip Graphic */}
        <div
          className={`w-9 h-7 rounded-md bg-gradient-to-br ${card.chipColor} p-1 flex items-center justify-center border border-white/20 shadow-xs`}
        >
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

      {/* Card Footer: Action Link */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-end text-[10px] sm:text-xs font-mono tracking-wider">
        <div
          onClick={(e) => {
            if (project.link) {
              e.stopPropagation();
              window.location.href = project.link;
            }
          }}
          className="text-white font-sans font-bold flex items-center gap-0.5 hover:text-[#38BDF8] transition-colors"
        >
          <span>Click</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  );
};
