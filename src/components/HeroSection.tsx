import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { smoothScrollTo } from '../utils/lenis';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetStarted,
}) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-transparent text-[#E5E2E1] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Deep Space Radial Ambient Glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#1e40af]/15 via-[#0284c7]/10 to-transparent blur-[130px] rounded-full pointer-events-none" />

      {/* TOP NOTIFICATION BADGE */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => smoothScrollTo('#store', { offset: -30 })}
        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#1c1e26]/90 hover:bg-[#252833] border border-[#2d303d] hover:border-[#38BDF8]/40 transition-all duration-300 shadow-[0_0_20px_rgba(2,132,199,0.15)] cursor-pointer group mb-6 sm:mb-8 z-10"
      >
        <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-bold tracking-wide shadow-sm">
          New
        </span>
        <span className="text-xs sm:text-[13px] text-[#94A3B8] group-hover:text-white transition-colors font-medium flex items-center gap-1.5">
          Available for freelance projects
          <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all" />
        </span>
      </motion.div>

      {/* MAIN HEADLINE & SUBTITLE */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-white leading-[1.08]"
        >
          <span className="block font-heading font-bold text-white tracking-tight">
            Bringing Creative Visions
          </span>
          <span className="block mt-1 sm:mt-2 text-white">
            <span className="font-heading font-bold mr-2 sm:mr-3">To Life Through</span>
            <span className="font-serif-italic font-normal italic text-[#FFFFFF] drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
              Motion
            </span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#94A3B8] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl font-normal px-4"
        >
          Hi, I'm Abdul Basith MM. I craft stunning motion graphics, visual effects, and digital experiences that captivate and convert.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Primary Button: Get started */}
          <button
            onClick={onGetStarted}
            className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-[#F1F5F9] text-black font-semibold text-sm sm:text-base tracking-normal transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Get started</span>
          </button>

          {/* Secondary Button: Explore Works */}
          <button
            onClick={() => smoothScrollTo('#work', { offset: -30 })}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-transparent hover:bg-white/5 border border-transparent hover:border-[#1E293B] text-[#CBD5E1] hover:text-white font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 group"
          >
            <span>Explore Works</span>
            <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1 }}
        onClick={() => smoothScrollTo('#about', { offset: -30 })}
        className="pt-14 sm:pt-20 flex flex-col items-center text-[#64748B] hover:text-[#94A3B8] transition-colors cursor-pointer group z-20"
      >
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#38BDF8]" />
      </motion.div>
    </section>
  );
};

