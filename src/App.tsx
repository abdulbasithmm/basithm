import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveModal } from './components/InteractiveModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { ModalState, StoreItem } from './types';
import { MessageCircle } from 'lucide-react';
import { personalBio } from './data';
import { initLenis, destroyLenis, getLenis } from './utils/lenis';

export default function App() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: null,
  });

  const [cart, setCart] = useState<StoreItem[]>([]);

  // Initialize Lenis kinetic smooth scrolling
  useEffect(() => {
    initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  // Pause Lenis scrolling when modal is open to avoid background jitter
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      if (modalState.isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [modalState.isOpen]);

  const handleOpenStartProject = () => {
    setModalState({ isOpen: true, type: 'project' });
  };

  const handleOpenWork = () => {
    setModalState({ isOpen: true, type: 'work' });
  };

  const handleOpenRecognition = () => {
    setModalState({ isOpen: true, type: 'recognition' });
  };

  const handleOpenAbout = () => {
    setModalState({ isOpen: true, type: 'about' });
  };

  const handleOpenServices = () => {
    setModalState({ isOpen: true, type: 'services' });
  };

  const handleOpenStore = () => {
    setModalState({ isOpen: true, type: 'store' });
  };

  const handleOpenTestimonials = () => {
    setModalState({ isOpen: true, type: 'testimonials' });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: null });
  };

  const handleAddToCart = (item: StoreItem) => {
    if (!cart.some((c) => c.id === item.id)) {
      setCart((prev) => [...prev, item]);
    }
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.id !== itemId));
  };

  return (
    <div className="relative min-h-screen w-full bg-[#131417] text-[#E5E2E1] flex flex-col justify-between overflow-x-hidden selection:bg-[#38BDF8] selection:text-[#030712] scroll-smooth">
      {/* Background Cinematic Gradients & Effects */}
      <div className="noise-overlay" />
      <div className="vignette-overlay" />

      {/* Interactive Cursor Spotlight */}
      <CustomCursor />

      {/* Header Navigation */}
      <HeaderNav
        onOpenStartProject={handleOpenStartProject}
        onOpenWork={handleOpenWork}
        onOpenServices={handleOpenServices}
        onOpenStore={handleOpenStore}
        onOpenTestimonials={handleOpenTestimonials}
        onOpenAbout={handleOpenAbout}
      />

      {/* Hero Section */}
      <HeroSection
        onGetStarted={handleOpenStartProject}
      />

      {/* Additional Detailed Sections Matching Hero Aesthetic */}
      <AboutSection
        onOpenContact={handleOpenStartProject}
        onOpenWork={handleOpenWork}
      />

      <ServicesSection
        onOpenContact={handleOpenStartProject}
      />

      <WorkSection
        onOpenWorkModal={handleOpenWork}
      />

      <TestimonialsSection />

      <InstagramSection />

      <ContactSection />

      {/* Floating Quick Action Widget for WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
        {/* WhatsApp direct chat bubble */}
        <a
          href={personalBio.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#25D366] hover:bg-[#1eb956] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 flex items-center justify-center group cursor-pointer"
          title="Direct Chat on WhatsApp (+91 94966 60968)"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold whitespace-nowrap transition-all duration-300">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Interactive Modal / Drawer */}
      <InteractiveModal
        modalState={modalState}
        onClose={handleCloseModal}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}
