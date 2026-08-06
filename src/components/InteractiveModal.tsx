import React, { useState } from 'react';
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Trophy,
  Layers,
  ShoppingBag,
  MessageCircle,
  Video,
  Film,
  Palette,
  Star,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ModalState, StoreItem } from '../types';
import {
  personalBio,
  basithServices,
  basithProjects,
  clientStories,
  storeProducts,
  recognitionData
} from '../data';

interface InteractiveModalProps {
  modalState: ModalState;
  onClose: () => void;
  cart: StoreItem[];
  onAddToCart: (item: StoreItem) => void;
  onRemoveFromCart: (itemId: string) => void;
}

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  modalState,
  onClose,
  cart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [projectSubmitted, setProjectSubmitted] = useState(false);
  const [workFilter, setWorkFilter] = useState<'all' | 'motion' | 'video' | 'design'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$25k - $50k',
    scope: 'Motion Graphics & Video Editing',
    message: '',
  });

  if (!modalState.isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProjectSubmitted(true);
  };

  const handleAddToCartClick = (item: StoreItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const filteredProjects = basithProjects.filter((p) => {
    if (workFilter === 'all') return true;
    return p.type === workFilter;
  });

  const cartTotal = cart.reduce((acc, curr) => acc + curr.priceNum, 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto" data-lenis-prevent>
        {/* Dark backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent
          className="relative z-10 w-full max-w-4xl bg-[#16171d] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#2a2d37] shadow-[0_30px_100px_rgba(0,0,0,0.85)] my-auto max-h-[88vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-[#20222a] hover:bg-[#8B5CF6] flex items-center justify-center text-white transition-colors cursor-pointer border border-[#2e313d]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ================= PROJECT BRIEF / CONTACT FORM ================= */}
          {modalState.type === 'project' && (
            <div>
              {!projectSubmitted ? (
                <div>
                  <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Initiate Project Brief</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1] mb-2">
                    Start a Project
                  </h2>
                  <p className="text-[#CBC3D7] text-sm mb-6">
                    Define your project scope with <span className="text-[#E5E2E1] font-medium">{personalBio.name}</span> ({personalBio.brandName}). You can also reach out directly via WhatsApp for instant response.
                  </p>

                  {/* Direct WhatsApp Quick Bar */}
                  <div className="p-4 rounded-2xl mb-6 border border-[#25D366]/30 bg-[#25D366]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Need a faster response?</div>
                        <div className="text-[#CBC3D7] text-xs">Direct chat with Abdul Basith MM on WhatsApp</div>
                      </div>
                    </div>
                    <a
                      href={personalBio.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1eb956] text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#958EA0] uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Salman MP"
                          className="w-full h-12 px-4 rounded-xl bg-[#1d1f27] border border-[#2e313d] text-[#E5E2E1] placeholder-[#958EA0]/50 focus:outline-none focus:border-[#8B5CF6] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#958EA0] uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="salman@digibayt.com"
                          className="w-full h-12 px-4 rounded-xl bg-[#1d1f27] border border-[#2e313d] text-[#E5E2E1] placeholder-[#958EA0]/50 focus:outline-none focus:border-[#8B5CF6] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#958EA0] uppercase tracking-wider mb-2">
                          Project Service
                        </label>
                        <select
                          value={formData.scope}
                          onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl bg-[#1d1f27] border border-[#2e313d] text-[#E5E2E1] focus:outline-none focus:border-[#8B5CF6] transition-colors text-sm"
                        >
                          <option>Motion Graphics & Lyrical Video</option>
                          <option>Video Editing & Color Grading</option>
                          <option>Graphic Design & Posters</option>
                          <option>Full Brand System</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#958EA0] uppercase tracking-wider mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full h-12 px-4 rounded-xl bg-[#1d1f27] border border-[#2e313d] text-[#E5E2E1] focus:outline-none focus:border-[#8B5CF6] transition-colors text-sm"
                        >
                          <option>₹10,000 - ₹25,000</option>
                          <option>₹25,000 - ₹50,000</option>
                          <option>₹50,000 - ₹100,000</option>
                          <option>₹100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#958EA0] uppercase tracking-wider mb-2">
                        Project Brief / Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your video or brand design concept..."
                        className="w-full p-4 rounded-xl bg-[#1d1f27] border border-[#2e313d] text-[#E5E2E1] placeholder-[#958EA0]/50 focus:outline-none focus:border-[#8B5CF6] transition-colors text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-14 rounded-full bg-[#8B5CF6] hover:bg-[#7c4dff] text-white font-semibold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Submit Project Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#E5E2E1]">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-[#CBC3D7] text-sm max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name || 'Partner'}</span>. <span className="text-white font-medium">{personalBio.name}</span> will review your brief for <span className="text-white font-medium">{formData.scope}</span> and reach out to <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setProjectSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#20222a] border border-[#2e313d] text-xs font-semibold text-white hover:bg-[#2c2f3b] transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= PORTFOLIO WORK ================= */}
          {modalState.type === 'work' && (
            <div>
              <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
                <Layers className="w-4 h-4" />
                <span>Curated Showcase</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1]">
                  Motion & Visual Design
                </h2>

                {/* Filter buttons */}
                <div className="flex items-center space-x-1 p-1 rounded-xl bg-[#1d1f27] border border-[#2e313d]">
                  <button
                    onClick={() => setWorkFilter('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      workFilter === 'all' ? 'bg-[#8B5CF6] text-white' : 'text-[#CBC3D7] hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setWorkFilter('motion')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      workFilter === 'motion' ? 'bg-[#8B5CF6] text-white' : 'text-[#CBC3D7] hover:text-white'
                    }`}
                  >
                    Motion
                  </button>
                  <button
                    onClick={() => setWorkFilter('video')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      workFilter === 'video' ? 'bg-[#8B5CF6] text-white' : 'text-[#CBC3D7] hover:text-white'
                    }`}
                  >
                    Video
                  </button>
                  <button
                    onClick={() => setWorkFilter('design')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      workFilter === 'design' ? 'bg-[#8B5CF6] text-white' : 'text-[#CBC3D7] hover:text-white'
                    }`}
                  >
                    Graphic
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProjects.map((item) => (
                  <div
                    key={item.id}
                    className="glass-panel rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/50 transition-all duration-300 flex flex-col justify-between border border-[#2a2d37]"
                  >
                    <div className="relative h-48 overflow-hidden bg-[#131417]">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131417]/95 via-[#131417]/20 to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#8B5CF6] text-[10px] font-bold text-white uppercase tracking-wider">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-[#E5E2E1] text-lg leading-snug mb-2">
                          {item.title}
                        </h4>
                        <p className="text-[#958EA0] text-xs leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#282a33] flex items-center justify-between text-[11px] text-[#CBC3D7]">
                        <span>{item.tools}</span>
                        <span className="text-[#E5E2E1] font-medium flex items-center space-x-1">
                          <span>View Project</span>
                          <ArrowUpRight className="w-3 h-3 text-[#8B5CF6]" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= ABOUT ABDUL BASITH MM ================= */}
          {modalState.type === 'about' && (
            <div>
              <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Visual Artist</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1] mb-6">
                About {personalBio.name}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden glass-panel p-2 border border-[#2a2d37]">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AP1WRLt65L1_S8sniAYtW7wSgE_ChRvAoxJFjRqbBMBf3eA58u1AIInDyW-noX_VTWAsw7FQOf0xz42PNYnPryVUzUYQ7yg790E4wJpk5rIw-fY6VP2QR4PADLaeS1IdmJ8WYD-Qwv5Ucn5glgMhPy9SgkEXs4w_SAfe7WD3iemt3D62jq8sVn3IYTDZNE6Ubo03_Jg81yICd2vZXT2fZyaISpGgmKwuw6NlOrZ3x3A8kLa_oy62iQLp4ZzJmCU"
                    alt="Abdul Basith MM"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="p-4 flex items-center justify-between text-xs">
                    <span className="text-[#CBC3D7] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      {personalBio.location}
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Freelance Open
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4 text-[#CBC3D7] text-sm leading-relaxed">
                  <p className="text-[#E5E2E1] font-medium text-base leading-snug">
                    {personalBio.bio1}
                  </p>
                  <p>{personalBio.bio2}</p>

                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#2e313d]">
                      <div className="text-xs uppercase text-[#8B5CF6] font-bold mb-1">
                        Core Software
                      </div>
                      <div className="text-[#E5E2E1] font-semibold text-xs">
                        After Effects • Premiere Pro • Photoshop
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#2e313d]">
                      <div className="text-xs uppercase text-[#8B5CF6] font-bold mb-1">
                        Specializations
                      </div>
                      <div className="text-[#E5E2E1] font-semibold text-xs">
                        Lyric Videos • Motion Graphics • Event Branding
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-[#282a33]">
                <a
                  href={personalBio.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs flex items-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat (+91 94966 60968)</span>
                </a>
                <a
                  href={`mailto:${personalBio.email}`}
                  className="px-6 py-3 rounded-full bg-[#20222a] border border-[#2e313d] text-white font-semibold text-xs hover:bg-[#2c2f3b] transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-[#8B5CF6]" />
                  <span>{personalBio.email}</span>
                </a>
              </div>
            </div>
          )}

          {/* ================= SERVICES ================= */}
          {modalState.type === 'services' && (
            <div>
              <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Capabilities & Solutions</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1] mb-2">
                Creative Services
              </h2>
              <p className="text-[#CBC3D7] text-sm mb-6">
                Delivering high-quality visual content that elevates your brand. From motion to still graphics, I provide professional services tailored to your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {basithServices.map((service) => (
                  <div
                    key={service.id}
                    className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-all group border border-[#2a2d37]"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center mb-4 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                        {service.id === 'motion-graphics' && <Video className="w-6 h-6" />}
                        {service.id === 'video-editing' && <Film className="w-6 h-6" />}
                        {service.id === 'graphic-design' && <Palette className="w-6 h-6" />}
                      </div>
                      <h3 className="font-heading font-bold text-[#E5E2E1] text-xl mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#958EA0] text-xs leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <ul className="space-y-2 mb-6 text-xs text-[#E5E2E1]/90">
                        {service.features.map((f, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => {
                          onClose();
                        }}
                        className="w-full py-2.5 rounded-xl bg-[#20222a] border border-[#2e313d] hover:bg-[#8B5CF6] text-white text-xs font-semibold transition-colors flex items-center justify-center space-x-1"
                      >
                        <span>Book Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= DIGITAL STORE ================= */}
          {modalState.type === 'store' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pro Assets & Templates</span>
                </div>
                {cart.length > 0 && (
                  <span className="text-xs text-[#8B5CF6] font-bold">
                    {cart.length} item(s) in cart — Total: ₹{cartTotal}
                  </span>
                )}
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1] mb-2">
                Basith Digital Store
              </h2>
              <p className="text-[#CBC3D7] text-sm mb-6">
                High-quality project files, motion graphics presets, and templates to speed up your production workflow.
              </p>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {storeProducts.map((prod) => {
                  const isAdded = addedItemIds[prod.id];
                  const isInCart = cart.some((c) => c.id === prod.id);

                  return (
                    <div
                      key={prod.id}
                      className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-all group border border-[#2a2d37]"
                    >
                      <div>
                        <div className="relative h-44 overflow-hidden bg-[#131417]">
                          <img
                            src={prod.image}
                            alt={prod.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                          />
                          {prod.badge && (
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#8B5CF6] text-[9px] font-bold text-white uppercase tracking-wider">
                              {prod.badge}
                            </div>
                          )}
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#131417]/80 backdrop-blur-md text-[10px] text-[#E5E2E1] flex items-center space-x-1 border border-[#2a2d37]">
                            <Download className="w-3 h-3 text-[#8B5CF6]" />
                            <span>{prod.downloads}</span>
                          </div>
                        </div>

                        <div className="p-4">
                          <span className="text-[10px] uppercase font-mono text-[#958EA0]">
                            {prod.category}
                          </span>
                          <h4 className="font-heading font-bold text-[#E5E2E1] text-base mt-1 mb-1">
                            {prod.title}
                          </h4>
                          <p className="text-[#958EA0] text-xs leading-relaxed mb-4">
                            {prod.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0 flex items-center justify-between border-t border-[#282a33] mt-auto">
                        <span className="font-heading font-extrabold text-[#E5E2E1] text-lg">
                          {prod.price}
                        </span>

                        <button
                          onClick={() => handleAddToCartClick(prod)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center space-x-1.5 ${
                            isAdded || isInCart
                              ? 'bg-[#10B981] text-white shadow-lg'
                              : 'bg-[#8B5CF6] hover:bg-[#7c4dff] text-white'
                          }`}
                        >
                          {isAdded || isInCart ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>In Cart</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cart Drawer in Modal */}
              {cart.length > 0 && (
                <div className="p-5 rounded-2xl bg-[#1a1b22] border border-[#2a2d37] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#E5E2E1] uppercase tracking-wider">
                      Selected Items ({cart.length})
                    </span>
                    <span className="text-sm font-bold text-[#8B5CF6]">
                      Total: ₹{cartTotal}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-[#20222a] text-[#E5E2E1] border border-[#2e313d]"
                      >
                        <span className="font-medium">{item.title}</span>
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-[#8B5CF6]">{item.price}</span>
                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="text-[#958EA0] hover:text-white"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/919496660968?text=Hi%20Basith!%20I%20would%20like%20to%20purchase%20these%20store%20templates:%20${encodeURIComponent(
                      cart.map((c) => c.title).join(', ')
                    )}%20(Total:%20₹${cartTotal})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1eb956] text-white text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Checkout via WhatsApp (₹{cartTotal})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* ================= CLIENT TESTIMONIALS ================= */}
          {modalState.type === 'testimonials' && (
            <div>
              <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
                <Star className="w-4 h-4" />
                <span>Endorsements</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1] mb-2">
                Client Stories
              </h2>
              <p className="text-[#CBC3D7] text-sm mb-6">
                Hear from creative founders, record labels, and producers who have collaborated with <span className="text-[#E5E2E1] font-medium">{personalBio.name}</span>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {clientStories.map((story) => (
                  <div
                    key={story.id}
                    className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-[#2a2d37] hover:border-[#8B5CF6]/40 transition-all"
                  >
                    <p className="text-[#CBC3D7] text-xs sm:text-sm leading-relaxed mb-6 italic">
                      "{story.quote}"
                    </p>

                    <div className="flex items-center space-x-3 pt-4 border-t border-[#282a33]">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-tr ${story.avatarBg || 'from-[#8B5CF6] to-[#06B6D4]'} text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        {story.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-[#E5E2E1] font-bold text-sm">{story.author}</div>
                        <div className="text-[#958EA0] text-xs">
                          {story.role}, <span className="text-[#E5E2E1]/80">{story.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= RECOGNITION ================= */}
          {modalState.type === 'recognition' && (
            <div>
              <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
                <Trophy className="w-4 h-4" />
                <span>Global Accolades</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#E5E2E1] mb-3">
                {recognitionData.title}
              </h2>
              <p className="text-[#CBC3D7] text-sm mb-8">
                {recognitionData.tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {recognitionData.stats.map((s, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-[#2a2d37]">
                    <div className="font-heading font-black text-4xl text-[#8B5CF6] mb-2">
                      {s.number}
                    </div>
                    <p className="text-[#E5E2E1] text-xs leading-relaxed">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <h4 className="font-heading font-bold text-[#E5E2E1] text-sm uppercase tracking-wider mb-4">
                Industry Recognition & Awards
              </h4>
              <ul className="space-y-3">
                {recognitionData.awards.map((award, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#1d1f27] border border-[#2e313d] text-xs text-[#E5E2E1]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
