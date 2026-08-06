import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ArrowUpRight, Play, Eye, Sparkles, ChevronLeft, ChevronRight, Zap, Award, Film, Star, ShieldCheck } from 'lucide-react';
import { basithProjects } from '../data';

interface WorkSectionProps {
  onOpenWorkModal: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenWorkModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'motion' | 'video' | 'design'>('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = basithProjects.filter((p) => {
    if (activeTab === 'all') return true;
    return p.type === activeTab;
  });

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  // Rotation angles for fanned cards effect
  const cardRotations = [-12, -5, 0, 5, 12];
  const cardYOffsets = [20, 6, 0, 6, 20];

  return (
    <section id="work" className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto border-t border-[#282a33] overflow-hidden bg-transparent">
      {/* Background Ambient Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-b from-[#8B5CF6]/15 via-[#06B6D4]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Top Header Section inspired by image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4"
      >
        <div className="inline-flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#191b20] border border-[#2a2d37] shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>Crafted Showcase</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#E5E2E1] tracking-tight leading-[1.1]">
          Climb Every Frame, <br />
          <span className="bg-gradient-to-r from-white via-[#E5E2E1] to-[#8B5CF6] bg-clip-text text-transparent">
            Win Every Story
          </span>
        </h2>

        <p className="text-[#958EA0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Take control of your visual presence, stay focused, and set benchmarks with every motion design produced.
        </p>

        {/* Action Button & Category Pills */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'motion', label: 'Motion Graphics' },
            { id: 'video', label: 'Video Editing' },
            { id: 'design', label: 'Graphic Art' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setActiveIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-105'
                  : 'bg-[#191b20]/80 text-[#CBC3D7] border-[#2a2d37] hover:text-white hover:border-[#3a3d4a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 3D Fanned-Out Card Stack Showcase Container */}
      <div className="relative w-full max-w-5xl mx-auto pt-6 pb-12 sm:pb-16 flex flex-col items-center justify-center">
        {/* Navigation Controls on side */}
        <div className="hidden sm:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none z-30 px-2 sm:px-4">
          <button
            onClick={prevCard}
            className="w-11 h-11 rounded-full bg-[#191b20]/90 border border-[#2a2d37] text-white hover:bg-[#8B5CF6] flex items-center justify-center transition-all cursor-pointer pointer-events-auto shadow-xl hover:scale-110"
            title="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextCard}
            className="w-11 h-11 rounded-full bg-[#191b20]/90 border border-[#2a2d37] text-white hover:bg-[#8B5CF6] flex items-center justify-center transition-all cursor-pointer pointer-events-auto shadow-xl hover:scale-110"
            title="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Fanned Cards Wrapper */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[440px] flex items-center justify-center perspective-[1200px]">
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, 5).map((project, idx) => {
              // Calculate relative offset from active index
              const offset = (idx - activeIndex + filtered.length) % Math.min(filtered.length, 5);
              const rotation = cardRotations[idx % cardRotations.length];
              const yOffset = cardYOffsets[idx % cardYOffsets.length];
              const isCenter = idx === activeIndex || (filtered.length <= 1);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    opacity: 1,
                    scale: isCenter ? 1.05 : 0.92,
                    rotate: isCenter ? 0 : rotation,
                    y: isCenter ? -10 : yOffset,
                    zIndex: isCenter ? 25 : 10 - Math.abs(offset),
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: -40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 0,
                    y: -18,
                    zIndex: 30,
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => {
                    setActiveIndex(idx);
                    onOpenWorkModal();
                  }}
                  className={`absolute w-[240px] sm:w-[300px] md:w-[340px] h-[300px] sm:h-[370px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between ${
                    isCenter
                      ? 'border-[#8B5CF6] shadow-[0_0_35px_rgba(139,92,246,0.35)] bg-[#171820]'
                      : 'border-[#2a2d37] bg-[#14151b] opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Card Visual Header / Media */}
                  <div className="relative w-full h-full overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131417] via-[#131417]/40 to-transparent" />

                    {/* Chip Tag & Category */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#8B5CF6]/90 text-white font-mono text-[9px] font-bold tracking-widest uppercase">
                        {project.type}
                      </span>
                    </div>

                    {/* Play / View Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.9)]"
                      >
                        {project.type === 'motion' || project.type === 'video' ? (
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </motion.div>
                    </div>

                    {/* Bottom Card Content Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-left bg-gradient-to-t from-[#131417] via-[#131417]/90 to-transparent">
                      <h3 className="font-heading font-extrabold text-[#E5E2E1] text-sm sm:text-base leading-tight mb-1 group-hover:text-[#8B5CF6] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-[#958EA0] text-[11px] sm:text-xs leading-relaxed line-clamp-2 mb-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#282a33] text-[10px] text-[#CBC3D7]">
                        <span className="font-mono text-[#CBC3D7] line-clamp-1">{project.tools}</span>
                        <span className="text-[#8B5CF6] font-bold flex items-center gap-0.5 whitespace-nowrap">
                          <span>View Case</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex sm:hidden items-center justify-center space-x-2 mt-6">
          {filtered.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-[#8B5CF6]' : 'w-2 bg-[#2a2d37]'
              }`}
            />
          ))}
        </div>

        {/* Center CTA Pill */}
        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenWorkModal}
            className="px-6 py-3 rounded-full bg-[#191b20] hover:bg-[#252731] border border-[#2a2d37] hover:border-[#8B5CF6]/50 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer shadow-lg"
          >
            <span>Explore All Portfolio Works</span>
            <ArrowUpRight className="w-4 h-4 text-[#8B5CF6]" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Trust & Social Proof Banner inspired by image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pt-10 border-t border-[#282a33] text-center"
      >
        <p className="text-xs sm:text-sm text-[#958EA0] font-medium tracking-wide mb-6">
          Has Delivered 100+ Visual Projects for Leading Creators, Artists & Brands
        </p>

        {/* Logo / Brand Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity">
          {[
            { name: 'DigiBayt', icon: Zap },
            { name: 'Basith Frames', icon: Film },
            { name: 'Tazkiyah Records', icon: Star },
            { name: 'Minhajul Janna', icon: Award },
            { name: 'Visual Studio', icon: ShieldCheck },
          ].map((brand, i) => {
            const IconComp = brand.icon;
            return (
              <div
                key={i}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#191b20]/60 border border-[#2a2d37] text-xs font-bold text-[#CBC3D7] hover:text-white hover:border-[#8B5CF6]/40 transition-all cursor-default shadow-xs"
              >
                <IconComp className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{brand.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

