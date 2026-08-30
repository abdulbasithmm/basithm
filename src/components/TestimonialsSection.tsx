import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  date: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    id: 't1',
    author: 'Akhil Menon',
    role: 'Creative Director',
    company: 'Youflow Media',
    quote:
      "Basith has totally changed the way we handle video edits and motion visuals. Everything just clicks now, and we've seen awesome improvements in how efficiently we operate.",
    date: 'June 10, 2024',
  },
  {
    id: 't2',
    author: 'Anoop Varghese',
    role: 'Co-Founder',
    company: 'Apex Digital',
    quote:
      "Working with Basith transformed our media campaign management completely. The visual style is intuitive, and we've noticed significant enhancements in our operational efficiency since we started.",
    date: 'June 12, 2024',
  },
  {
    id: 't3',
    author: 'Favas Rahman',
    role: 'Executive Producer',
    company: 'Pulse Studios',
    quote:
      'Delivered top-tier motion graphics and video editing that exceeded our highest expectations. Their attention to detail and visual timing is unmatched in the industry.',
    date: 'June 15, 2024',
  },
  {
    id: 't1-dup',
    author: 'Akhil Menon',
    role: 'Creative Director',
    company: 'Youflow Media',
    quote:
      "Basith has totally changed the way we handle video edits and motion visuals. Everything just clicks now, and we've seen awesome improvements in how efficiently we operate.",
    date: 'June 10, 2024',
  },
  {
    id: 't2-dup',
    author: 'Anoop Varghese',
    role: 'Co-Founder',
    company: 'Apex Digital',
    quote:
      "Working with Basith transformed our media campaign management completely. The visual style is intuitive, and we've noticed significant enhancements in our operational efficiency since we started.",
    date: 'June 12, 2024',
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    id: 't4',
    author: 'Sreelakshmi Nair',
    role: 'Head of Marketing',
    company: 'Vibe Media',
    quote:
      'This team has completely transformed our brand workflows. The motion integration is seamless, with significant improvements in our operational efficiency and audience engagement.',
    date: 'June 05, 2024',
  },
  {
    id: 't5',
    author: 'Vishnu Namboothiri',
    role: 'Product Lead',
    company: 'Horizon Records',
    quote:
      "The motion graphics and kinetic typography have revolutionized our media processes. Everything flows seamlessly now, and we've experienced remarkable gains in visual quality.",
    date: 'June 08, 2024',
  },
  {
    id: 't6',
    author: 'Muhammed Shafi',
    role: 'Operations Lead',
    company: 'Nova Cinema',
    quote:
      "Basith has streamlined every aspect of our video operations. The speed, aesthetic sensibility, and reliability give us the confidence to execute high-volume projects without hesitation.",
    date: 'June 10, 2024',
  },
  {
    id: 't4-dup',
    author: 'Sreelakshmi Nair',
    role: 'Head of Marketing',
    company: 'Vibe Media',
    quote:
      'This team has completely transformed our brand workflows. The motion integration is seamless, with significant improvements in our operational efficiency and audience engagement.',
    date: 'June 05, 2024',
  },
  {
    id: 't5-dup',
    author: 'Vishnu Namboothiri',
    role: 'Product Lead',
    company: 'Horizon Records',
    quote:
      "The motion graphics and kinetic typography have revolutionized our media processes. Everything flows seamlessly now, and we've experienced remarkable gains in visual quality.",
    date: 'June 08, 2024',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto overflow-hidden bg-transparent select-none"
    >
      {/* Signature Violet & Cyan Ambient Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#8B5CF6]/15 via-[#38BDF8]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Top Header Section matching exact layout with portfolio theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16"
      >
        {/* Left Headline Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#191b20] border border-[#2a2d37] text-[#8B5CF6] text-xs font-semibold tracking-wider shadow-sm">
            <span>Testimonials</span>
            <div className="w-4 h-4 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
              <Sparkles className="w-2.5 h-2.5" />
            </div>
          </div>

          <h2 className="font-heading font-normal text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            What Clients think <br />
            <span className="bg-gradient-to-r from-white via-[#E5E2E1] to-[#8B5CF6] bg-clip-text text-transparent">
              about our Services
            </span>
          </h2>
        </div>

        {/* Right Description Column */}
        <div className="lg:col-span-5 pb-1">
          <p className="text-[#958EA0] text-xs sm:text-sm leading-relaxed max-w-lg">
            Our creative media studio is transforming the way creators and brands deliver their stories. Here's what some of our partners have to say about their experience with Abdul Basith MM.
          </p>
        </div>
      </motion.div>

      {/* Animated Sliding Cards Container (Dual Marquee Rows) */}
      <div
        className="relative w-full space-y-6 overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Fade Gradients for smooth carousel transition matching canvas background */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#131417] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#131417] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Sliding Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-5 sm:gap-6 shrink-0"
            animate={isPaused ? {} : { x: ['0%', '-50%'] }}
            transition={{
              duration: 28,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {testimonialsRow1.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
            {testimonialsRow1.map((item) => (
              <TestimonialCard key={`${item.id}-loop`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-5 sm:gap-6 shrink-0"
            animate={isPaused ? {} : { x: ['-50%', '0%'] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {testimonialsRow2.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
            {testimonialsRow2.map((item) => (
              <TestimonialCard key={`${item.id}-loop`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Subcomponent for individual testimonial card with brand theme
const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 p-6 rounded-3xl bg-[#15161c] border border-[#2a2d37] hover:border-[#8B5CF6]/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] flex flex-col justify-between transition-all duration-300 relative group cursor-pointer"
    >
      {/* Top Author Header: Name + Role/Company (clean, no avatar, no stars) */}
      <div className="mb-4 pb-3 border-b border-[#282a33]/60">
        <h3 className="font-heading font-extrabold text-[#E5E2E1] group-hover:text-white transition-colors text-sm sm:text-base leading-tight">
          {item.author}
        </h3>
        <p className="text-[11px] sm:text-xs text-[#8E8799] font-medium mt-1">
          {item.role}, <span className="text-[#8B5CF6] font-semibold">{item.company}</span>
        </p>
      </div>

      {/* Quote Narrative Body */}
      <p className="text-[#CBC3D7] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
        "{item.quote}"
      </p>

      {/* Bottom Date */}
      <div className="pt-2 border-t border-[#282a33]/60 text-[11px] sm:text-xs font-mono text-[#958EA0]">
        {item.date}
      </div>
    </motion.div>
  );
};
