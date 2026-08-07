import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What services does Abdul Basith MM offer?',
      a: 'Basith specializes in Motion Graphics (lyrical videos, motion posters, kinetic typography), Professional Video Editing (events, short-form Reels, YouTube content, color grading), and Graphic Design (social media artwork, branding, print posters).'
    },
    {
      q: 'What is the typical turnaround time for a project?',
      a: 'Turnaround times depend on project scope. Lyrical videos & motion posters typically take 2-4 business days. Full event edits or comprehensive media branding packages take 5-10 days. Rush delivery options are available upon request.'
    },
    {
      q: 'Do you provide source files (After Effects / Premiere / PSD)?',
      a: 'Yes! Fully editable project files (.aep, .prproj, .psd) with layered assets and organized timelines are provided with selected package tiers or through our Digital Asset Store.'
    },
    {
      q: 'How do we start a project or brief?',
      a: 'You can initiate a brief directly through the "Initiate Brief" button on this website or chat instantly on WhatsApp (+91 94966 60968). We will discuss your vision, timeline, and budget, then provide a custom quote.'
    },
    {
      q: 'Are revision requests included?',
      a: 'Every project includes 2-3 rounds of revisions to fine-tune color grading, typography, audio sync, and pacing until you are 100% satisfied.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative z-10 w-full py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1020px] mx-auto overflow-hidden bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-8 space-y-2"
      >
        <div className="inline-flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-[#191b20] border border-[#2a2d37]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#E5E2E1] tracking-tight">
          Frequently Asked <span className="text-[#8B5CF6]">Questions</span>
        </h2>
      </motion.div>

      {/* Accordion */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-panel rounded-xl border transition-colors overflow-hidden ${
                isOpen ? 'border-[#8B5CF6]/50 bg-[#1f2028] shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'border-[#2a2d37] hover:border-[#3a3d4a]'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 cursor-pointer"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-[#E5E2E1]">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full bg-[#252731] flex items-center justify-center text-white transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#8B5CF6] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 pb-4 pt-0 text-xs sm:text-sm text-[#CBC3D7] leading-relaxed border-t border-[#282a33]">
                      <p className="mt-3">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
