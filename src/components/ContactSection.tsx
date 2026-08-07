import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalBio } from '../data';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Motion Graphics',
    budget: '$500 - $1,000',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Send direct WhatsApp query or toast
    const whatsappText = `Hi Basith! My name is ${formData.name} (${formData.email}). I am interested in ${formData.service} with budget ${formData.budget}. Details: ${formData.details}`;
    window.open(`https://wa.me/919496660968?text=${encodeURIComponent(whatsappText)}`, '_blank');
    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 w-full py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto overflow-hidden bg-transparent">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start [perspective:1000px]">
        {/* Left Column: Direct Contact Info (Slide In Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: -12, scale: 0.92, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div>
            <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Initiate Collaboration</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#E5E2E1] tracking-tight leading-tight">
              Let's Build Something <span className="text-[#8B5CF6]">Unforgettable</span>
            </h2>
            <p className="text-[#CBC3D7] text-xs sm:text-sm leading-relaxed mt-3">
              Have a vision, event, or song release in mind? Reach out directly via WhatsApp, email, or fill out the quick project brief form.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {/* WhatsApp Direct */}
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href={personalBio.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-[#2a2d37] hover:border-[#25D366] transition-all flex items-center justify-between group cursor-pointer shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#25D366] tracking-wider">Fastest Response</div>
                  <div className="text-[#E5E2E1] font-extrabold text-base">WhatsApp Chat</div>
                  <div className="text-[#958EA0] text-xs">{personalBio.phone}</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${personalBio.email}`}
              className="glass-panel p-5 rounded-2xl border border-[#2a2d37] hover:border-[#8B5CF6] transition-all flex items-center justify-between group cursor-pointer shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#958EA0] tracking-wider">Direct Email</div>
                  <div className="text-[#E5E2E1] font-extrabold text-base">{personalBio.email}</div>
                  <div className="text-[#958EA0] text-xs">Official Inquiries & Assets</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#8B5CF6] group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-5 rounded-2xl border border-[#2a2d37] flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-xl bg-transparent border border-[#2a2d37] text-[#E5E2E1] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#958EA0] tracking-wider">Base Location</div>
                <div className="text-[#E5E2E1] font-extrabold text-base">{personalBio.location}</div>
                <div className="text-[#958EA0] text-xs">Serving Global Clients Remotely</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Brief Form (Slide In Right) */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: 12, scale: 0.92, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-[#2a2d37] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <h3 className="font-heading font-extrabold text-[#E5E2E1] text-2xl mb-6">
            Quick Project Brief
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-[#E5E2E1]">Brief Redirected to WhatsApp!</h4>
              <p className="text-[#CBC3D7] text-sm max-w-md mx-auto">
                Thank you! Your project brief details have been prepared and sent to Basith's WhatsApp line. We will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-transparent border border-[#2e313d] text-white text-xs font-bold uppercase cursor-pointer hover:bg-[#252731] transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#958EA0] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Salman MP"
                    className="w-full px-4 py-3 rounded-xl bg-[#15161b] border border-[#2e313d] text-[#E5E2E1] text-sm focus:border-[#8B5CF6] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-[#958EA0] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#15161b] border border-[#2e313d] text-[#E5E2E1] text-sm focus:border-[#8B5CF6] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#958EA0] mb-2">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#191b20] border border-[#2e313d] text-[#E5E2E1] text-sm focus:border-[#8B5CF6] focus:outline-none transition-colors"
                  >
                    <option value="Motion Graphics">Motion Graphics & Lyrical Video</option>
                    <option value="Video Editing">Video Editing & Color Grading</option>
                    <option value="Graphic Design">Graphic Design & Posters</option>
                    <option value="Full Media Package">Full Event / Brand Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-[#958EA0] mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#191b20] border border-[#2e313d] text-[#E5E2E1] text-sm focus:border-[#8B5CF6] focus:outline-none transition-colors"
                  >
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#958EA0] mb-2">
                  Project Details / Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about your audio track, deadline, key references or ideas..."
                  className="w-full px-4 py-3 rounded-xl bg-[#15161b] border border-[#2e313d] text-[#E5E2E1] text-sm focus:border-[#8B5CF6] focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-full bg-[#8B5CF6] hover:bg-[#7c4dff] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Submit Brief via WhatsApp</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
