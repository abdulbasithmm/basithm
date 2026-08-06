import React from 'react';
import { motion } from 'motion/react';
import { Video, Film, Palette, Layout, Code2, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { basithServices } from '../data';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="relative z-10 w-full py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto border-t border-[#282a33] overflow-hidden bg-transparent">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 space-y-3"
      >
        <div className="inline-flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#191b20] border border-[#2a2d37]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Creative Solutions</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#E5E2E1] tracking-tight">
          Services That Elevate Your <span className="text-[#8B5CF6]">Brand</span>
        </h2>
        <p className="text-[#CBC3D7] text-xs sm:text-sm leading-relaxed">
          Delivering high-quality visual content and digital experiences tailored to your brand. From web interfaces and development to video editing and motion graphics.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {basithServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between border border-[#2a2d37] hover:border-[#8B5CF6]/50 transition-all duration-300 relative group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <div>
              {/* Icon Header */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center mb-5 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 shadow-md"
              >
                {service.id === 'ui-design' && <Layout className="w-7 h-7" />}
                {service.id === 'web-development' && <Code2 className="w-7 h-7" />}
                {service.id === 'motion-graphics' && <Video className="w-7 h-7" />}
                {service.id === 'video-editing' && <Film className="w-7 h-7" />}
                {service.id === 'graphic-design' && <Palette className="w-7 h-7" />}
              </motion.div>

              <h3 className="font-heading font-extrabold text-[#E5E2E1] text-2xl mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-[#958EA0] text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 pt-4 border-t border-[#282a33]">
                <span className="text-[10px] uppercase tracking-widest text-[#958EA0] font-bold block mb-2">
                  Key Capabilities
                </span>
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2.5 text-xs text-[#E5E2E1] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Service Action */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="w-full py-3.5 rounded-full bg-[#22242c] hover:bg-[#8B5CF6] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 border border-[#2e313d] hover:border-[#8B5CF6] flex items-center justify-center space-x-2 cursor-pointer group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
            >
              <span>Book Service</span>
              <ArrowUpRight className="w-4 h-4 text-[#8B5CF6] group-hover:text-white transition-colors" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
