import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  date: string;
  rating: number;
}

const testimonialsRow1: Testimonial[] = [
  {
    id: 't1',
    author: 'Carmen Waters',
    role: 'Creative Director',
    company: 'Youflow Media',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      "Basith has totally changed the way we handle video edits and motion visuals. Everything just clicks now, and we've seen some awesome improvements in how efficiently we operate.",
    date: 'June 10, 2024',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Liam Everhart',
    role: 'Co-Founder',
    company: 'Apex Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      "Working with Basith transformed our media campaign management completely. The visual style is intuitive, and we've noticed significant enhancements in our operational efficiency since we started.",
    date: 'June 12, 2024',
    rating: 5,
  },
  {
    id: 't3',
    author: 'Jonathan Reed',
    role: 'Executive Producer',
    company: 'Pulse Studios',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    quote:
      'Delivered top-tier motion graphics and video editing that exceeded our highest expectations. Their attention to detail and visual timing is unmatched in the industry.',
    date: 'June 15, 2024',
    rating: 5,
  },
  {
    id: 't1-dup',
    author: 'Carmen Waters',
    role: 'Creative Director',
    company: 'Youflow Media',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote:
      "Basith has totally changed the way we handle video edits and motion visuals. Everything just clicks now, and we've seen some awesome improvements in how efficiently we operate.",
    date: 'June 10, 2024',
    rating: 5,
  },
  {
    id: 't2-dup',
    author: 'Liam Everhart',
    role: 'Co-Founder',
    company: 'Apex Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote:
      "Working with Basith transformed our media campaign management completely. The visual style is intuitive, and we've noticed significant enhancements in our operational efficiency since we started.",
    date: 'June 12, 2024',
    rating: 5,
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    id: 't4',
    author: 'Carole Kiehn',
    role: 'Head of Marketing',
    company: 'Vibe Global',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote:
      'This team has completely transformed our brand workflows. The motion integration is seamless, with significant improvements in our operational efficiency and customer satisfaction.',
    date: 'June 05, 2024',
    rating: 5,
  },
  {
    id: 't5',
    author: 'Yvonne Baumbach',
    role: 'Product Lead',
    company: 'Horizon Records',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote:
      "The motion graphics platform has revolutionized our media processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency.",
    date: 'June 08, 2024',
    rating: 5,
  },
  {
    id: 't6',
    author: 'Colin Hamill',
    role: 'Operations Lead',
    company: 'Nova Cinema',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote:
      "Basith has streamlined every aspect of our video operations. The platform's speed and reliability give us the confidence to execute high-volume tasks without hesitation.",
    date: 'June 10, 2024',
    rating: 5,
  },
  {
    id: 't4-dup',
    author: 'Carole Kiehn',
    role: 'Head of Marketing',
    company: 'Vibe Global',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote:
      'This team has completely transformed our brand workflows. The motion integration is seamless, with significant improvements in our operational efficiency and customer satisfaction.',
    date: 'June 05, 2024',
    rating: 5,
  },
  {
    id: 't5-dup',
    author: 'Yvonne Baumbach',
    role: 'Product Lead',
    company: 'Horizon Records',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote:
      "The motion graphics platform has revolutionized our media processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency.",
    date: 'June 08, 2024',
    rating: 5,
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
      {/* Top Author Header: Avatar + Name + 5 Gold Stars */}
      <div className="flex items-center space-x-3.5 mb-5">
        <img
          src={item.avatar}
          alt={item.author}
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover border border-[#2a2d37] group-hover:border-[#8B5CF6]/50 transition-colors shadow-sm"
        />
        <div className="space-y-0.5">
          <h3 className="font-heading font-extrabold text-[#E5E2E1] group-hover:text-white transition-colors text-sm sm:text-base leading-tight">
            {item.author}
          </h3>
          <div className="flex items-center space-x-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]"
              />
            ))}
          </div>
        </div>
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
