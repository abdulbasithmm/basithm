import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { clientStories } from '../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative z-10 w-full py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto border-t border-[#282a33] overflow-hidden bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#191b20] border border-[#2a2d37]">
          <Star className="w-3.5 h-3.5" />
          <span>Client Stories</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#E5E2E1] tracking-tight">
          Endorsed by Creative <span className="text-[#8B5CF6]">Founders</span>
        </h2>
        <p className="text-[#CBC3D7] text-xs sm:text-sm leading-relaxed">
          Hear from founders, directors, and vocalists who have partnered with Abdul Basith MM on motion design, video edits, and visual identity projects.
        </p>
      </motion.div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {clientStories.map((story, idx) => {
          const rotationAngle = idx % 2 === 0 ? -1.5 : 1.5;
          return (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40, rotate: rotationAngle }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                type: 'spring',
                damping: 20,
              }}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between border border-[#2a2d37] hover:border-[#8B5CF6]/50 transition-colors relative group shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#8B5CF6] text-[#8B5CF6]" />
                    ))}
                  </div>
                </div>

                {/* Quote Narrative */}
                <p className="text-[#CBC3D7] text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 border-t border-[#282a33] flex items-center space-x-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-tr ${story.avatarBg || 'from-[#8B5CF6] to-[#06B6D4]'} text-white font-bold text-xs flex items-center justify-center shadow-lg border border-[#353947]`}
                >
                  {story.author.charAt(0)}
                </div>
                <div>
                  <div className="text-[#E5E2E1] font-extrabold text-sm font-heading">{story.author}</div>
                  <div className="text-[#958EA0] text-[11px]">
                    {story.role}, <span className="text-[#E5E2E1] font-medium">{story.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
