import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface LeftSectionProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const LeftSection: React.FC<LeftSectionProps> = ({
  onStartProject,
  onViewWork,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-center space-y-6 lg:space-y-8 z-20 max-w-xl"
    >
      {/* Small Caption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center space-x-2"
      >
        <span className="text-[#CBC3D7] text-sm lg:text-base font-medium tracking-wide">
          Marketing agency
        </span>
      </motion.div>

      {/* Large Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading font-extrabold text-[#E5E2E1] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] tracking-tight text-left"
      >
        Clarity first.<br />
        Then the<br />
        system.
      </motion.h1>

      {/* Small Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-[#958EA0] text-sm sm:text-base leading-relaxed max-w-md font-normal"
      >
        Strategy, identity and communication shaped into one clear brand system.
      </motion.p>

      {/* Two Rounded Pill Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        {/* Primary Button */}
        <button
          onClick={onStartProject}
          className="group relative inline-flex items-center justify-between h-[50px] pl-6 pr-2 rounded-full bg-[#8B5CF6] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#7c4dff] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] cursor-pointer"
        >
          <span className="mr-3 font-semibold text-white">Start a Project</span>
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0A0A0A] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0A0A0A]">
            <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </button>

        {/* Secondary Button */}
        <button
          onClick={onViewWork}
          className="glass-button-secondary inline-flex items-center justify-center h-[50px] px-8 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
        >
          <span>View Our Work</span>
        </button>
      </motion.div>
    </motion.div>
  );
};
