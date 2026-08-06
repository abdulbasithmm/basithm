import React from 'react';
import { motion } from 'motion/react';
import portraitImg from '../assets/images/hero_portrait_suit_1785661247796.jpg';

export const CenterSection: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-end h-full min-h-[520px] lg:min-h-[680px] w-full overflow-visible z-10">
      {/* Background Typography (DESIGNER) placed behind model */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[240%] sm:w-[280%] lg:w-[320%] xl:w-[360%] text-center z-0 pointer-events-none select-none overflow-visible py-2">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-designer-text text-[19vw] sm:text-[17vw] md:text-[15.5vw] lg:text-[14vw] xl:text-[12.5vw] font-black tracking-wider uppercase leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          DESIGNER
        </motion.h2>
      </div>

      {/* Main Fashion Model Portrait Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[420px] lg:max-w-[500px] xl:max-w-[560px] flex items-end justify-center pointer-events-auto group"
      >
        {/* Soft atmospheric red glow ring on portrait hover */}
        <div className="absolute inset-0 bg-radial from-[#ff3200]/30 to-transparent blur-3xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

        <img
          src={portraitImg}
          alt="Konjur Model in Dark Hoodie with Cyber Visor and Red Rim Lighting"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover object-bottom filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
          }}
        />
      </motion.div>
    </div>
  );
};
