import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
  CheckCircle2,
  MapPin,
  Sparkles,
  Download,
  ExternalLink,
  Award,
  FileText
} from 'lucide-react';
import { personalBio } from '../data';
import portraitImg from '../assets/images/hero_portrait_suit_1785661247796.jpg';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenWork: () => void;
}

// 8-point decorative starburst icon from reference
const Starburst = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path
      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"
      strokeLinecap="round"
    />
  </svg>
);

// 4-point sparkle star with hanging vertical line accent
const HangingStar = () => (
  <div className="flex flex-col items-center select-none pointer-events-none mb-4">
    <div className="w-[1px] h-6 bg-gradient-to-b from-transparent to-[#8B5CF6]/80" />
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#8B5CF6]">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  </div>
);

// Elegant cursive designer signature SVG
const DesignerSignature = () => (
  <svg
    viewBox="0 0 220 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-40 sm:w-48 h-auto text-[#E5E2E1]/80 group-hover:text-white transition-colors duration-300"
  >
    <path
      d="M20 58C32 25 48 18 54 40C58 55 42 72 35 66C28 60 40 32 65 35C82 37 70 60 88 56C102 53 110 40 122 45C136 50 132 62 148 53C162 45 178 30 195 38C205 42 210 50 215 44M45 50L185 45M105 68C125 72 160 70 188 64"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Circular arrow button matching GridX style
const CircleArrow = () => (
  <div className="w-10 h-10 rounded-full bg-[#22242c] border border-[#2e313d] flex items-center justify-center text-[#958EA0] group-hover:text-white group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] group-hover:scale-105 transition-all duration-300 shadow-md shrink-0">
    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </div>
);

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  onOpenWork,
}) => {
  const [showCredentialsModal, setShowCredentialsModal] = useState(false);

  const experiences = [
    {
      period: '2022 - PRESENT',
      role: 'Lead Motion & Visual Designer',
      company: 'Basith Frames / Freelance',
    },
    {
      period: '2020 - 2022',
      role: 'Senior Video Editor & Animator',
      company: 'DigiBayt Creative Studio',
    },
    {
      period: '2018 - 2020',
      role: 'Graphic & Brand Identity Designer',
      company: 'Independent Media Productions',
    },
  ];

  const educations = [
    {
      period: '2019 - 2022',
      role: 'Bachelor Degree in Computer & Media',
      institution: 'University of Calicut',
    },
    {
      period: '2022 - 2023',
      role: 'Mastering Motion Graphics & VFX',
      institution: 'Adobe Certified & Masterclass',
    },
    {
      period: '2023 - 2024',
      role: 'Brand Strategy & Digital Visual Systems',
      institution: 'Design & Visual Arts Specialization',
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      href: personalBio.whatsappUrl,
      label: 'WhatsApp',
      color: 'hover:text-[#25D366] hover:bg-[#25D366]/10',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/basithframes',
      label: 'Instagram',
      color: 'hover:text-[#E1306C] hover:bg-[#E1306C]/10',
    },
    {
      icon: Globe,
      href: '#work',
      label: 'Portfolio',
      color: 'hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/10',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        onOpenWork();
      }
    },
    {
      icon: Mail,
      href: `mailto:${personalBio.email}`,
      label: 'Email',
      color: 'hover:text-[#38BDF8] hover:bg-[#38BDF8]/10',
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 w-full py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-hidden bg-transparent"
    >
      {/* ✳ SELF-SUMMARY ✳ Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 text-center"
      >
        <Starburst className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5CF6] animate-pulse" />
        <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase">
          SELF-SUMMARY
        </h2>
        <Starburst className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5CF6] animate-pulse" />
      </motion.div>

      {/* Bento Grid Container */}
      <div className="space-y-4 sm:space-y-5">
        {/* ================= ROW 1: Hero Avatar + Bio Summary ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Left Avatar Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-4 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center relative overflow-hidden group hover:border-[#38BDF8]/40 transition-all duration-300"
          >
            {/* Inner Avatar Box with Sky/Blue Ambient Glow Backdrop matching reference */}
            <div className="w-full relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[20px] overflow-hidden bg-gradient-to-tr from-[#1e3a8a]/80 via-[#0284c7] to-[#38bdf8] p-1 flex items-center justify-center shadow-inner">
              <img
                src={portraitImg}
                alt={personalBio.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-6 sm:p-8 lg:p-9 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between relative group hover:border-[#38BDF8]/40 transition-all duration-300"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-between">
                <HangingStar />
                <span className="text-[10px] sm:text-[11px] font-bold text-[#10B981] px-2.5 py-0.5 rounded-full bg-[#14151a] border border-[#10B981]/30 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  Available For Hire
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none">
                {personalBio.name}
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-[#38BDF8] uppercase tracking-widest">
                {personalBio.title} • {personalBio.location}
              </div>

              <p className="text-[#9E98AA] text-xs sm:text-sm sm:leading-relaxed pt-1">
                I am a Malappuram-based motion designer and visual editor with a strong focus on visual storytelling, brand identities, and digital media production. I have a diverse range of experience having worked across various creative fields and industries.
              </p>
            </div>

            <div className="pt-4 border-t border-[#282a33] flex flex-wrap items-center justify-between gap-3 mt-4">
              <div className="flex items-center gap-4 sm:gap-6 text-xs text-[#8E8799]">
                <div>
                  <span className="font-bold text-white text-sm sm:text-base">5+</span> Years Exp.
                </div>
                <div>
                  <span className="font-bold text-white text-sm sm:text-base">150+</span> Projects
                </div>
                <div>
                  <span className="font-bold text-white text-sm sm:text-base">100%</span> Delivery
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-full bg-[#22242c] hover:bg-[#38BDF8] text-white hover:text-[#030712] border border-[#2e313d] hover:border-[#38BDF8] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer group/btn"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= ROW 2: Experience + Education ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-5 hover:border-[#38BDF8]/40 transition-all duration-300"
          >
            <div>
              <h4 className="text-xs font-bold text-[#8E8799] tracking-widest uppercase mb-4">
                EXPERIENCE
              </h4>

              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group/item">
                    <div className="text-[11px] text-[#7A7485] font-medium tracking-wide">
                      {exp.period}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover/item:text-[#38BDF8] transition-colors mt-0.5">
                      {exp.role}
                    </div>
                    <div className="text-xs text-[#958EA0] mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-5 hover:border-[#38BDF8]/40 transition-all duration-300"
          >
            <div>
              <h4 className="text-xs font-bold text-[#8E8799] tracking-widest uppercase mb-4">
                EDUCATION
              </h4>

              <div className="space-y-4">
                {educations.map((edu, idx) => (
                  <div key={idx} className="group/item">
                    <div className="text-[11px] text-[#7A7485] font-medium tracking-wide">
                      {edu.period}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover/item:text-[#38BDF8] transition-colors mt-0.5">
                      {edu.role}
                    </div>
                    <div className="text-xs text-[#958EA0] mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= ROW 3: Profiles + Work Together + Credentials ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          {/* Left: Profiles / Stay With Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 lg:col-span-3 rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-5 sm:p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-[#38BDF8]/40 transition-all duration-300 group"
          >
            {/* Top inner social icons container */}
            <div className="p-3 rounded-xl bg-[#14151a] border border-[#282a33] flex items-center justify-around gap-2 mb-6">
              {socialLinks.map((soc, sIdx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={sIdx}
                    href={soc.href}
                    onClick={soc.onClick}
                    target={soc.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-lg bg-[#1f2026] border border-[#2e313d] flex items-center justify-center text-[#CBC3D7] transition-all duration-300 hover:scale-110 ${soc.color}`}
                    title={soc.label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>

            {/* Bottom Meta & Arrow */}
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8E8799] tracking-wider uppercase">
                  STAY WITH ME
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5 group-hover:text-[#38BDF8] transition-colors">
                  Profiles
                </h4>
              </div>

              <CircleArrow />
            </div>
          </motion.div>

          {/* Center: Let's work together */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            onClick={onOpenContact}
            className="md:col-span-12 lg:col-span-6 rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-[#38BDF8]/40 transition-all duration-300 group cursor-pointer relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <HangingStar />
            </div>

            <div className="my-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight tracking-tight">
                Let&apos;s <br />
                <span className="font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                  work together.
                </span>
              </h3>
            </div>

            {/* Bottom Arrow Indicator */}
            <div className="flex items-center justify-end">
              <div className="w-10 h-10 rounded-full bg-[#22242c] border border-[#2e313d] flex items-center justify-center text-[#958EA0] group-hover:text-[#030712] group-hover:bg-[#38BDF8] group-hover:border-[#38BDF8] group-hover:scale-110 transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>

          {/* Right: Credentials / More About Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            onClick={() => setShowCredentialsModal(true)}
            className="md:col-span-12 lg:col-span-3 rounded-[28px] bg-[#191b20] border border-[#2a2d37] p-5 sm:p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-[#38BDF8]/40 transition-all duration-300 group cursor-pointer"
          >
            {/* Top signature artwork */}
            <div className="p-3 rounded-xl bg-[#14151a] border border-[#282a33] flex items-center justify-center min-h-[75px] mb-6">
              <DesignerSignature />
            </div>

            {/* Bottom Meta & Arrow */}
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8E8799] tracking-wider uppercase">
                  MORE ABOUT ME
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5 group-hover:text-[#38BDF8] transition-colors">
                  Credentials
                </h4>
              </div>

              <CircleArrow />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Credentials Quick Modal */}
      {showCredentialsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" data-lenis-prevent>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            data-lenis-prevent
            className="relative w-full max-w-xl rounded-[28px] bg-[#191b20] border border-[#2e313d] p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-[#282a33] pb-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-[#8B5CF6]" />
                <h3 className="font-heading font-bold text-xl text-white">
                  Designer Credentials & Bio
                </h3>
              </div>
              <button
                onClick={() => setShowCredentialsModal(false)}
                className="w-8 h-8 rounded-full bg-[#22242c] border border-[#2e313d] text-[#958EA0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#CBC3D7]">
              <div>
                <h4 className="text-xs uppercase font-bold text-[#8B5CF6] tracking-wider mb-1">
                  Full Name & Title
                </h4>
                <p className="text-white font-semibold">
                  {personalBio.name} — {personalBio.title}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#8B5CF6] tracking-wider mb-1">
                  Core Toolset & Competencies
                </h4>
                <p className="text-xs leading-relaxed text-[#9E98AA]">
                  Adobe After Effects, Premiere Pro, Photoshop, DaVinci Resolve, Motion Design Systems, Cinematic Video Editing, Arabic Calligraphy Motion, Event Visuals, Sound Design.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#8B5CF6] tracking-wider mb-1">
                  Verified Contact
                </h4>
                <p className="text-xs text-[#9E98AA]">
                  Email: <span className="text-white">{personalBio.email}</span>
                  <br />
                  Phone / WhatsApp: <span className="text-white">{personalBio.phone}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#282a33]">
              <button
                onClick={() => {
                  setShowCredentialsModal(false);
                  onOpenContact();
                }}
                className="px-5 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-[#7c4dff] text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Contact Basith
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
