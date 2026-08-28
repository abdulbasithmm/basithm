import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  Layout,
  Code2,
  Video,
  Film,
  Palette,
  CheckCircle2,
} from 'lucide-react';
import { basithServices } from '../data';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'layout':
      return <Layout className="w-6 h-6 text-[#8B5CF6]" />;
    case 'code':
      return <Code2 className="w-6 h-6 text-[#38BDF8]" />;
    case 'videocam':
      return <Video className="w-6 h-6 text-[#EC4899]" />;
    case 'movie_edit':
      return <Film className="w-6 h-6 text-[#F59E0B]" />;
    case 'palette':
      return <Palette className="w-6 h-6 text-[#10B981]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#8B5CF6]" />;
  }
};

const getServiceAccentColor = (id: string) => {
  switch (id) {
    case 'ui-design':
      return {
        border: 'hover:border-[#8B5CF6]/60',
        glow: 'group-hover:bg-[#8B5CF6]/20',
        text: 'group-hover:text-[#8B5CF6]',
        badge: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30',
      };
    case 'web-development':
      return {
        border: 'hover:border-[#38BDF8]/60',
        glow: 'group-hover:bg-[#38BDF8]/20',
        text: 'group-hover:text-[#38BDF8]',
        badge: 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30',
      };
    case 'motion-graphics':
      return {
        border: 'hover:border-[#EC4899]/60',
        glow: 'group-hover:bg-[#EC4899]/20',
        text: 'group-hover:text-[#EC4899]',
        badge: 'bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/30',
      };
    case 'video-editing':
      return {
        border: 'hover:border-[#F59E0B]/60',
        glow: 'group-hover:bg-[#F59E0B]/20',
        text: 'group-hover:text-[#F59E0B]',
        badge: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30',
      };
    case 'graphic-design':
      return {
        border: 'hover:border-[#10B981]/60',
        glow: 'group-hover:bg-[#10B981]/20',
        text: 'group-hover:text-[#10B981]',
        badge: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30',
      };
    default:
      return {
        border: 'hover:border-[#8B5CF6]/60',
        glow: 'group-hover:bg-[#8B5CF6]/20',
        text: 'group-hover:text-[#8B5CF6]',
        badge: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30',
      };
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="services"
      className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-transparent select-none overflow-hidden"
    >
      {/* Main Outer Container */}
      <div className="w-full bg-transparent p-0 relative overflow-hidden">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1c1e27] border border-[#2e3140] text-[#8B5CF6] text-xs font-semibold tracking-wider shadow-sm">
            <span>Our Services</span>
            <div className="w-4 h-4 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
              <Sparkles className="w-2.5 h-2.5" />
            </div>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Services & Expertise
          </h2>

          <p className="text-[#958EA0] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            High-impact visual solutions crafted to elevate your brand story through UI design, web development, motion graphics, and video production.
          </p>
        </div>

        {/* Services Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {basithServices.map((service) => {
            const accent = getServiceAccentColor(service.id);
            return (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                onClick={onOpenContact}
                className={`rounded-[28px] bg-[#171822] border border-[#2a2d3c] ${accent.border} p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer min-h-[320px]`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 bg-transparent blur-[50px] rounded-full pointer-events-none ${accent.glow} transition-all duration-500`}
                />

                {/* Top Row: Icon Badge & Arrow */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1e202c] border border-[#2e3142] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1e202c] border border-[#2e3142] flex items-center justify-center text-[#958EA0] group-hover:text-white group-hover:border-white/30 transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`font-heading font-bold text-2xl text-white tracking-tight mb-3 transition-colors ${accent.text}`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#958EA0] text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features Pills */}
                <div className="pt-4 border-t border-[#252836] space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center space-x-2 text-xs text-[#CBD5E1]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
