import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShoppingBag, Sparkles } from 'lucide-react';
import { smoothScrollTo } from '../utils/lenis';

interface HeaderNavProps {
  onOpenStartProject: () => void;
  onOpenWork: () => void;
  onOpenServices: () => void;
  onOpenStore: () => void;
  onOpenTestimonials: () => void;
  onOpenAbout: () => void;
  cartCount: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenStartProject,
  onOpenWork,
  onOpenServices,
  onOpenStore,
  onOpenTestimonials,
  onOpenAbout,
  cartCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling down past the initial section (~180px)
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, fallbackModal: () => void) => {
    const el = document.getElementById(id);
    if (el) {
      smoothScrollTo(`#${id}`, { offset: -40, duration: 1.3 });
    } else {
      fallbackModal();
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[88%] max-w-[1020px] px-4 sm:px-6 py-3.5 sm:py-4 rounded-full bg-[#15171c]/95 backdrop-blur-2xl border border-[#2a2d37] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between transition-all duration-500 ease-out ${
        isScrolled
          ? 'translate-y-0 opacity-100 pointer-events-auto scale-100'
          : '-translate-y-24 opacity-0 pointer-events-none scale-95'
      }`}
    >
      {/* Brand logo */}
      <div className="flex items-center space-x-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo(0, { duration: 1.2 });
          }}
          className="font-brand text-lg sm:text-xl lg:text-2xl font-black tracking-wider text-[#E5E2E1] hover:text-[#8B5CF6] transition-colors"
        >
          BASITH<span className="text-[#8B5CF6]">.</span>
        </a>
      </div>

      {/* Center navigation links */}
      <nav className="hidden lg:flex items-center space-x-0.5 px-3 py-1 rounded-full bg-[#191b20] border border-[#2a2d37] text-xs font-medium text-[#CBC3D7]">
        <button
          onClick={() => scrollToSection('about', onOpenAbout)}
          className="px-3 py-1 rounded-full hover:text-white hover:bg-[#252731] transition-all cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('services', onOpenServices)}
          className="px-3 py-1 rounded-full hover:text-white hover:bg-[#252731] transition-all cursor-pointer"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('work', onOpenWork)}
          className="px-3 py-1 rounded-full hover:text-white hover:bg-[#252731] transition-all cursor-pointer"
        >
          Works
        </button>
        <button
          onClick={() => scrollToSection('testimonials', onOpenTestimonials)}
          className="px-3 py-1 rounded-full hover:text-white hover:bg-[#252731] transition-all cursor-pointer"
        >
          Clients
        </button>
        <button
          onClick={() => scrollToSection('store', onOpenStore)}
          className="px-3 py-1 rounded-full hover:text-white hover:bg-[#252731] transition-all cursor-pointer flex items-center space-x-1"
        >
          <span>Store</span>
          <span className="px-1.5 py-0.2 rounded-full bg-[#8B5CF6] text-[9px] text-white font-bold">PRO</span>
        </button>
        <button
          onClick={() => scrollToSection('contact', onOpenStartProject)}
          className="px-3 py-1 rounded-full hover:text-white hover:bg-[#252731] transition-all cursor-pointer"
        >
          Contact
        </button>
      </nav>

      {/* Right controls */}
      <div className="flex items-center space-x-2.5">
        {/* Cart button */}
        <button
          onClick={onOpenStore}
          className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#191b20] hover:bg-[#252731] border border-[#2a2d37] text-xs font-medium text-[#E5E2E1] transition-all cursor-pointer"
          title="Digital Store Cart"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span className="hidden sm:inline text-xs">Store</span>
          <span className="ml-1 w-4 h-4 rounded-full bg-[#8B5CF6] text-[10px] font-bold flex items-center justify-center text-white">
            {cartCount}
          </span>
        </button>

        {/* Start Project / Contact */}
        <button
          onClick={() => scrollToSection('contact', onOpenStartProject)}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#8B5CF6] hover:bg-[#7c4dff] text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <span>Contact</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
