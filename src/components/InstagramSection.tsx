import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

import feedImg1 from '../assets/images/regenerated_image_1787064432160.jpg';
import feedImg2 from '../assets/images/regenerated_image_1787064416778.jpg';
import feedImg3 from '../assets/images/regenerated_image_1787064412985.jpg';
import feedImg4 from '../assets/images/regenerated_image_1787064418336.jpg';
import feedImg5 from '../assets/images/regenerated_image_1787064422197.jpg';
import feedImg6 from '../assets/images/regenerated_image_1787064427280.jpg';
import feedImg7 from '../assets/images/regenerated_image_1787064429189.jpg';
import feedImg8 from '../assets/images/regenerated_image_1787064430748.jpg';

export const InstagramSection: React.FC = () => {
  const feedItems = [
    {
      id: 1,
      image: feedImg1,
      likes: '1.4k',
    },
    {
      id: 2,
      image: feedImg2,
      likes: '2.1k',
    },
    {
      id: 3,
      image: feedImg3,
      likes: '980',
    },
    {
      id: 4,
      image: feedImg4,
      likes: '3.5k',
    },
    {
      id: 5,
      image: feedImg5,
      likes: '1.8k',
    },
    {
      id: 6,
      image: feedImg6,
      likes: '2.4k',
    },
    {
      id: 7,
      image: feedImg7,
      likes: '3.1k',
    },
    {
      id: 8,
      image: feedImg8,
      likes: '1.9k',
    },
  ];

  // Duplicate for smooth infinite loop
  const marqueeList = [...feedItems, ...feedItems];

  return (
    <section className="relative z-10 w-full py-12 lg:py-16 overflow-hidden bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
      >
        <div>
          <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-1.5">
            <Instagram className="w-3.5 h-3.5" />
            <span>Social Feed</span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#E5E2E1] tracking-tight">
            Follow <span className="text-[#8B5CF6]">@baz_ith_m2</span> on Instagram
          </h2>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.instagram.com/baz_ith_m2/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button-secondary px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer group shadow-md"
        >
          <span>Follow Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden py-2">
        <div className="animate-marquee flex gap-4 sm:gap-5">
          {marqueeList.map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/baz_ith_m2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 sm:w-60 h-64 sm:h-72 flex-shrink-0 glass-panel rounded-2xl overflow-hidden relative group border border-[#2a2d37] hover:border-[#8B5CF6]/50 transition-all duration-300 block hover:-translate-y-1.5 shadow-lg"
            >
              <img
                src={item.image}
                alt=""
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131417]/95 via-[#131417]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="flex items-center space-x-1.5 text-[11px] text-[#8B5CF6] font-bold">
                  <Heart className="w-3 h-3 fill-[#8B5CF6]" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
