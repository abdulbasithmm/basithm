import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// Custom SVG Icons for Pinterest and Reddit
const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const RedditIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.18 1.207.49 1.181-.842 2.822-1.405 4.632-1.487l.917-4.298 3.238.682c.045-.07.096-.135.155-.195a1.243 1.243 0 0 1 .884-.367zM9.25 12C8.56 12 8 12.56 8 13.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S9.94 12 9.25 12zm5.5 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm-5.462 4.404c-.097.097-.097.256 0 .354 1.13 1.129 3.23 1.129 4.36 0a.25.25 0 0 0-.354-.354c-.936.936-2.716.936-3.652 0a.25.25 0 0 0-.354 0z" />
  </svg>
);

export interface SocialPlatformData {
  id: string;
  name: string;
  handle: string;
  url: string;
  followers: string;
  following: string;
  description: string;
  coverImage: string;
  avatarImage: string;
  brandColor: string;
  icon: React.ReactNode;
}

const platformsData: SocialPlatformData[] = [
  {
    id: 'instagram',
    name: 'baz_ith_m2',
    handle: '@baz_ith_m2',
    url: 'https://www.instagram.com/baz_ith_m2/',
    followers: '22.2K',
    following: '500',
    description:
      'Motion Designer & Visual Artist. Crafting high-impact video edits, brand art, event reels, and kinetic typography for digital creators.',
    coverImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    avatarImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    brandColor: '#E1306C',
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    id: 'linkedin',
    name: 'Abdul Basith MM',
    handle: 'in/abdul-basith-mm',
    url: 'https://www.linkedin.com/in/abdul-basith-mm/',
    followers: '12.8K',
    following: '500+',
    description:
      'Visual Systems & Motion Lead. Empowering brands with clear narrative design, After Effects production, and digital identity systems.',
    coverImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    avatarImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    brandColor: '#0A66C2',
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    id: 'facebook',
    name: 'Basith Frames',
    handle: '@basithframes.official',
    url: 'https://facebook.com/basithframes',
    followers: '18.5K',
    following: '120',
    description:
      'Official Facebook page for Basith Frames. Video editing, event media, motion graphics, and graphic design portfolio updates.',
    coverImage:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80',
    avatarImage:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
    brandColor: '#1877F2',
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    id: 'twitter',
    name: 'Abdul Basith',
    handle: '@njanbasith',
    url: 'https://x.com/njanbasith',
    followers: '15.4K',
    following: '310',
    description:
      'Sharing After Effects workflow breakdowns, kinetic typography tricks, motion design tips, and creative design experiments daily.',
    coverImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    avatarImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    brandColor: '#1DA1F2',
    icon: <Twitter className="w-4 h-4" />,
  },
  {
    id: 'pinterest',
    name: 'Abdul Basith',
    handle: '@basithm2',
    url: 'https://in.pinterest.com/basithm2/',
    followers: '8.9K',
    following: '95',
    description:
      'Curated motion design inspo, Arabic calligraphy posters, vintage wedding invites, and digital art moodboards.',
    coverImage:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    avatarImage:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    brandColor: '#E60023',
    icon: <PinterestIcon className="w-4 h-4" />,
  },
  {
    id: 'reddit',
    name: 'u/basithmm',
    handle: 'u/basithmm',
    url: 'https://www.reddit.com/user/basithmm/',
    followers: '5.1K',
    following: '42',
    description:
      'Posting After Effects breakdowns, video editing tutorials, motion graphics discussions, and community project feedback.',
    coverImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    avatarImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    brandColor: '#FF4500',
    icon: <RedditIcon className="w-4 h-4" />,
  },
];

export const FollowSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activePlatform = platformsData[activeIndex];

  // Auto slide down timer every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % platformsData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % platformsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + platformsData.length) % platformsData.length);
  };

  return (
    <section
      id="follow"
      className="relative z-10 w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto bg-transparent select-none overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#8B5CF6]/15 via-[#38BDF8]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 35, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-4"
      >
        {/* Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#191b20] border border-[#2a2d37] text-[#8B5CF6] text-xs font-semibold tracking-wider shadow-sm">
          <span>Connect & Follow</span>
          <div className="w-4 h-4 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
            <Sparkles className="w-2.5 h-2.5" />
          </div>
        </div>

        <h2 className="font-heading font-normal text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
          Follow Basith Across <br />
          <span className="bg-gradient-to-r from-white via-[#E5E2E1] to-[#8B5CF6] bg-clip-text text-transparent">
            Digital Platforms
          </span>
        </h2>

        <p className="text-[#958EA0] text-xs sm:text-sm leading-relaxed">
          Stay connected for latest motion breakdowns, typography assets, event reels, and design experiments.
        </p>
      </motion.div>

      {/* Platform Selector Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 max-w-3xl mx-auto">
        {platformsData.map((platform, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={platform.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                isActive
                  ? 'bg-white text-black shadow-[0_10px_25px_rgba(255,255,255,0.25)] scale-105'
                  : 'bg-[#181920] text-[#958EA0] hover:text-white hover:bg-[#232530] border border-[#2a2d37]'
              }`}
            >
              <span className={isActive ? 'text-black' : 'text-[#8B5CF6]'}>
                {platform.icon}
              </span>
              <span className="capitalize">{platform.id}</span>
            </button>
          );
        })}
      </div>

      {/* Central Social Card Container with Auto Down Slide Animation */}
      <div
        className="relative flex flex-col items-center justify-center w-full min-h-[460px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform.id}
            initial={{ opacity: 0, y: -45, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 45, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[420px] rounded-[32px] overflow-hidden bg-white text-black shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/20 relative group"
          >
            {/* Top Cover Section */}
            <div className="relative h-[210px] sm:h-[230px] w-full bg-[#18181b] overflow-hidden">
              <img
                src={activePlatform.coverImage}
                alt={activePlatform.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Overlapping Middle Bar: Avatar + Follow Button */}
            <div className="relative px-6 -mt-11 flex items-end justify-between z-10">
              {/* Circular Avatar */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-[4px] border-white bg-slate-900 overflow-hidden shadow-xl flex items-center justify-center shrink-0">
                <img
                  src={activePlatform.avatarImage}
                  alt={activePlatform.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Black Pill "Follow" Button matching exact image layout */}
              <a
                href={activePlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-zinc-800 font-extrabold text-sm px-7 py-2.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-1.5 cursor-pointer mb-1"
              >
                <span>Follow</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Lower Card Body (Clean White) */}
            <div className="p-6 pt-3 text-left">
              {/* Name + Verified Checkmark */}
              <div className="flex items-center space-x-1.5 mb-0.5">
                <h3 className="font-heading font-extrabold text-slate-900 text-xl tracking-tight leading-tight">
                  {activePlatform.name}
                </h3>
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8] stroke-white" />
              </div>

              {/* Handle */}
              <p className="text-[#94A3B8] font-medium text-xs sm:text-sm mb-4">
                {activePlatform.handle}
              </p>

              {/* Bio Description */}
              <p className="text-[#334155] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {activePlatform.description}
              </p>

              {/* Stats Row matching image design */}
              <div className="flex items-center space-x-6 pt-2 text-xs sm:text-sm border-t border-slate-100">
                <div>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base mr-1">
                    {activePlatform.following}
                  </span>
                  <span className="text-[#94A3B8] font-medium">Following</span>
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base mr-1">
                    {activePlatform.followers}
                  </span>
                  <span className="text-[#94A3B8] font-medium">Followers</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Up / Down Controls for smooth vertical slide navigation */}
        <div className="mt-6 flex items-center space-x-3">
          <button
            onClick={handlePrev}
            aria-label="Previous social platform"
            className="w-9 h-9 rounded-full bg-[#181920] border border-[#2a2d37] hover:border-[#8B5CF6] text-white flex items-center justify-center transition-all hover:bg-[#232530] cursor-pointer"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <div className="text-xs font-mono text-[#958EA0]">
            {activeIndex + 1} / {platformsData.length}
          </div>
          <button
            onClick={handleNext}
            aria-label="Next social platform"
            className="w-9 h-9 rounded-full bg-[#181920] border border-[#2a2d37] hover:border-[#8B5CF6] text-white flex items-center justify-center transition-all hover:bg-[#232530] cursor-pointer"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

