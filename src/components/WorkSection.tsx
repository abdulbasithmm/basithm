import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Sparkles, Star, Zap, Globe, Circle, Box } from 'lucide-react';
import { basithProjects } from '../data';

interface WorkSectionProps {
  onOpenWorkModal: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenWorkModal }) => {
  // We select 4 distinct projects for the fanned card display matching the image cards
  const displayProjects = basithProjects.slice(0, 4);

  // Card specific artwork themes inspired by the image
  const cardArtworks = [
    {
      // Card 1: Geometric Mesh & Glowing Sphere
      bg: 'bg-gradient-to-br from-[#12131a] via-[#1a1b26] to-[#0a0b10]',
      pattern: 'bg-[radial-gradient(#2e3245_1px,transparent_1px)] [background-size:12px_12px]',
      accentOrb: 'bg-gradient-to-tr from-[#ec4899] to-[#8b5cf6]',
      accentStyle: 'top-6 right-6 w-12 h-12 rounded-full blur-xs opacity-90 shadow-[0_0_20px_rgba(236,72,153,0.5)]',
      rotation: '-rotate-[14deg]',
      translateY: 'translate-y-8 sm:translate-y-10',
      zIndex: 'z-10',
    },
    {
      // Card 2: Liquid Wave Violet & Cyan Gradient
      bg: 'bg-gradient-to-tr from-[#1e1b4b] via-[#312e81] to-[#0284c7]',
      pattern: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-purple-500/20 to-transparent',
      accentOrb: 'bg-gradient-to-r from-cyan-400 to-blue-600',
      accentStyle: 'bottom-8 left-6 w-20 h-10 rounded-full blur-sm opacity-80',
      rotation: '-rotate-[5deg]',
      translateY: 'translate-y-2 sm:translate-y-3',
      zIndex: 'z-20',
    },
    {
      // Card 3: Metallic Black with 3D Spherical Orb
      bg: 'bg-gradient-to-b from-[#18181b] via-[#09090b] to-[#000000]',
      pattern: 'border border-[#27272a]',
      accentOrb: 'bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#1e1b4b]',
      accentStyle: 'bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)]',
      rotation: 'rotate-[4deg]',
      translateY: 'translate-y-2 sm:translate-y-3',
      zIndex: 'z-30',
    },
    {
      // Card 4: Concentric Ring Dark Card
      bg: 'bg-gradient-to-br from-[#1c1917] via-[#0c0a09] to-[#000000]',
      pattern: 'bg-[radial-gradient(circle_at_bottom_right,#ea580c_0%,transparent_60%)]',
      accentOrb: 'border-2 border-[#f97316]/50',
      accentStyle: 'bottom-4 right-4 w-24 h-24 rounded-full opacity-60',
      rotation: 'rotate-[14deg]',
      translateY: 'translate-y-8 sm:translate-y-10',
      zIndex: 'z-10',
    },
  ];

  return (
    <section id="work" className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-t border-[#282a33] overflow-hidden bg-transparent select-none">
      {/* Deep Center Ambient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-b from-white/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header matching image exact typography */}
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

        {/* Download for Free / Explore Pill Button */}
        <div className="pt-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenWorkModal}
            className="px-6 py-2.5 rounded-full bg-[#111318] hover:bg-[#1a1d26] border border-[#2e3242] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer inline-flex items-center space-x-2"
          >
            <span>Download for Free</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Fanned Out Cards Container */}
      <div className="relative w-full max-w-4xl mx-auto pt-4 pb-12 sm:pb-16 flex items-center justify-center">
        {/* Dark Ground Shelf / Mask Effect */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#131417] to-transparent z-40 pointer-events-none" />

        {/* Fanned Cards Stack */}
        <div className="relative w-full max-w-3xl h-[260px] sm:h-[320px] md:h-[350px] flex items-center justify-center px-4">
          {displayProjects.map((project, idx) => {
            const art = cardArtworks[idx % cardArtworks.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  y: -20,
                  zIndex: 50,
                  transition: { duration: 0.3 },
                }}
                onClick={onOpenWorkModal}
                className={`absolute w-[190px] sm:w-[240px] md:w-[270px] h-[240px] sm:h-[290px] md:h-[320px] rounded-2xl p-4 sm:p-5 cursor-pointer border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden transition-all duration-300 ${art.bg} ${art.rotation} ${art.translateY} ${art.zIndex}`}
              >
                {/* Pattern Overlay */}
                <div className={`absolute inset-0 pointer-events-none ${art.pattern}`} />

                {/* Decorative Art Orb */}
                <div className={`absolute pointer-events-none ${art.accentOrb} ${art.accentStyle}`} />

                {/* Top Card Header: Chip & Logo */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="w-8 h-6 sm:w-10 sm:h-7 rounded-md bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] p-1 flex items-center justify-center shadow-xs">
                    <Cpu className="w-4 h-4 text-black/80" />
                  </div>
                  <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Center Content / Artwork Title */}
                <div className="relative z-10 my-auto text-left">
                  <div className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                    {project.type}
                  </div>
                  <h3 className="font-heading font-extrabold text-white text-sm sm:text-base md:text-lg leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Card Footer: Card Number style & Details */}
                <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-white/70 font-mono tracking-wider">
                  <span>**** {1024 + idx * 318}</span>
                  <span className="text-white font-sans font-bold flex items-center gap-0.5 hover:text-[#38BDF8] transition-colors">
                    <span>View</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Trust Text & Logo Strip matching image exact layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pt-10 border-t border-[#282a33] text-center"
      >
        <p className="text-xs sm:text-sm text-[#94A3B8] font-medium tracking-wide mb-8">
          Have Protected 100+ Businesses from Cyber Threats and Data Breaches
        </p>

        {/* 5 Logoipsum Style Badges matching image */}
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
                className="flex items-center justify-center space-x-2 text-white/80 font-bold text-sm tracking-tight py-2 px-3 hover:text-white transition-colors cursor-default"
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


