import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ShoppingBag,
  Menu,
  X,
  User,
  Layers,
  Briefcase,
  Users,
  Share2,
  Sparkles,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { smoothScrollTo } from '../utils/lenis';

interface HeaderNavProps {
  onOpenStartProject: () => void;
  onOpenWork: () => void;
  onOpenServices: () => void;
  onOpenStore: () => void;
  onOpenTestimonials: () => void;
  onOpenAbout: () => void;
  onOpenFollow?: () => void;
  cartCount: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenStartProject,
  onOpenWork,
  onOpenServices,
  onOpenStore,
  onOpenTestimonials,
  onOpenAbout,
  onOpenFollow,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle scroll state & active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Hide header in Hero section (top of page); show once scrolled down past 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setMobileMenuOpen(false);
      }

      // Detect active section based on scroll offset
      const sections = ['about', 'services', 'work', 'testimonials', 'follow', 'store', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string, fallbackModal: () => void) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      smoothScrollTo(`#${id}`, { offset: -30, duration: 1.1 });
    } else {
      fallbackModal();
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User, action: onOpenAbout },
    { id: 'services', label: 'Services', icon: Layers, action: onOpenServices },
    { id: 'work', label: 'Works', icon: Briefcase, action: onOpenWork },
    { id: 'testimonials', label: 'Clients', icon: Users, action: onOpenTestimonials },
    { id: 'follow', label: 'Follow', icon: Share2, action: onOpenFollow || (() => {}) },
    { id: 'store', label: 'Store', icon: ShoppingBag, isPro: true, action: onOpenStore },
  ];

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: -80, opacity: 0, x: '-50%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-3 sm:top-4 left-1/2 z-50 w-[94%] sm:w-[90%] max-w-[1040px] px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full border border-[#2a2d37] bg-[#15171c]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center justify-between">
              {/* Brand logo */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    smoothScrollTo(0, { duration: 1.2 });
                  }}
                  className="font-brand text-lg sm:text-xl lg:text-2xl font-black tracking-wider text-[#E5E2E1] hover:text-[#8B5CF6] transition-colors flex items-center gap-1"
                >
                  <span>BASITH</span>
                  <span className="text-[#8B5CF6]">.</span>
                </a>
              </div>

              {/* Desktop Center navigation links */}
              <nav className="hidden lg:flex items-center space-x-1 text-xs font-medium text-[#CBC3D7]">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id, item.action)}
                      className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center space-x-1.5 ${
                        isActive
                          ? 'bg-[#8B5CF6]/20 text-white font-semibold border border-[#8B5CF6]/40 shadow-[0_0_12px_rgba(139,92,246,0.2)]'
                          : 'hover:text-white hover:bg-[#252731]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.isPro && (
                        <span className="px-1.5 py-0.2 rounded-full bg-[#8B5CF6] text-[9px] text-white font-bold">
                          PRO
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Right controls */}
              <div className="flex items-center space-x-2 sm:space-x-2.5">
                {/* Cart button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStore();
                  }}
                  className="relative flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-[#191b20] hover:bg-[#252731] border border-[#2a2d37] text-xs font-medium text-[#E5E2E1] transition-all cursor-pointer"
                  title="Digital Store Cart"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span className="hidden sm:inline text-xs">Store</span>
                  <span className="w-4 h-4 rounded-full bg-[#8B5CF6] text-[10px] font-bold flex items-center justify-center text-white">
                    {cartCount}
                  </span>
                </button>

                {/* Start Project / Contact button */}
                <button
                  onClick={() => scrollToSection('contact', onOpenStartProject)}
                  className="flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7c4dff] text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.35)] active:scale-95"
                >
                  <span className="hidden min-[380px]:inline">Contact</span>
                  <span className="inline min-[380px]:hidden">Hire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* Mobile / Tablet Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#191b20] border border-[#2a2d37] text-[#E5E2E1] hover:text-white hover:border-[#8B5CF6]/50 transition-all cursor-pointer focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B5CF6]" />
                  ) : (
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#CBC3D7]" />
                  )}
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Floating Mobile Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[88%] max-w-[500px] rounded-[28px] bg-[#15171c]/98 backdrop-blur-2xl border border-[#2a2d37] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] lg:hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2a2d37]/80 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#958EA0]">
                  Navigation
                </span>
                <span className="text-[10px] font-semibold text-[#8B5CF6] bg-[#8B5CF6]/15 px-2 py-0.5 rounded-full border border-[#8B5CF6]/30">
                  Basith Portfolio
                </span>
              </div>

              {/* Navigation Items List */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id, item.action)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-sm font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#8B5CF6]/20 text-white font-semibold border border-[#8B5CF6]/40'
                          : 'text-[#CBC3D7] hover:text-white hover:bg-[#252731]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            isActive
                              ? 'bg-[#8B5CF6] text-white'
                              : 'bg-[#1e2029] text-[#8B5CF6]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.label}</span>
                        {item.isPro && (
                          <span className="px-1.5 py-0.5 rounded-full bg-[#8B5CF6] text-[9px] text-white font-bold">
                            PRO
                          </span>
                        )}
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#8B5CF6] translate-x-1' : 'text-[#585366]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Contact CTA */}
              <div className="mt-4 pt-3 border-t border-[#2a2d37]/80">
                <button
                  onClick={() => scrollToSection('contact', onOpenStartProject)}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7c4dff] text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
