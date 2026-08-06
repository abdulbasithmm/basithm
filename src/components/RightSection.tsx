import React, { useState } from 'react';
import { ArrowUpRight, Plus, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import thumbnailImg from '../assets/images/card_thumbnail_1785587040638.jpg';

interface RightSectionProps {
  onOpenRecognitionModal: () => void;
}

export const RightSection: React.FC<RightSectionProps> = ({
  onOpenRecognitionModal,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-center space-y-8 lg:space-y-10 z-20 max-w-md w-full"
    >
      {/* Top Glassmorphism Card (Recognition) */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onOpenRecognitionModal}
        className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl relative overflow-hidden cursor-pointer group"
      >
        {/* Subtle violet glow accent on card corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#8B5CF6]/25 to-transparent blur-xl pointer-events-none" />

        {/* Top Header Row in Card */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-[10px] uppercase tracking-widest text-[#958EA0] font-semibold">
            Featured Highlight
          </span>
          <button className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#8B5CF6] transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card Main Body: Thumbnail + Text */}
        <div className="flex items-center space-x-4">
          {/* Portrait Thumbnail */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-[#3A3939] bg-[#0A0A0A]">
            <img
              src={thumbnailImg}
              alt="Recognition Thumbnail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Title and Description */}
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-[#E5E2E1] text-base sm:text-lg tracking-tight mb-1">
              Recognition
            </h3>
            <p className="text-[#CBC3D7] text-xs sm:text-sm leading-snug">
              We build visual systems that make brands clear and memorable.
            </p>
          </div>
        </div>

        {/* Bottom Indicator Bar & Action Buttons */}
        <div className="mt-5 pt-3 border-t border-[#2A2A2A] flex items-center justify-between">
          {/* Progress / Pagination line */}
          <div className="flex items-center space-x-1.5 w-24">
            <div className="h-1 rounded-full bg-[#8B5CF6] flex-1" />
            <div className="h-1 rounded-full bg-[#3A3939] w-8" />
          </div>

          {/* Action buttons on bottom right of card */}
          <div className="flex items-center space-x-2">
            <span className="text-[11px] text-[#CBC3D7] font-medium group-hover:text-[#E5E2E1] transition-colors">
              Explore
            </span>
            <div className="w-7 h-7 rounded-full bg-[#2A2A2A] group-hover:bg-[#8B5CF6] flex items-center justify-center text-white transition-all">
              <Plus className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Two Statistics Section */}
      <div className="grid grid-cols-2 gap-6 pt-2">
        {/* Stat 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col space-y-2 group"
        >
          <div className="font-heading font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#E5E2E1] tracking-tight group-hover:text-[#8B5CF6] transition-colors duration-300">
            100%
          </div>
          <p className="text-[#958EA0] text-xs leading-relaxed max-w-[170px]">
            No random visuals. Only clear systems built for recognition.
          </p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col space-y-2 group"
        >
          <div className="font-heading font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#E5E2E1] tracking-tight group-hover:text-[#8B5CF6] transition-colors duration-300">
            360°
          </div>
          <p className="text-[#958EA0] text-xs leading-relaxed max-w-[170px]">
            Full brand presence. From strategy and identity to launch.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
