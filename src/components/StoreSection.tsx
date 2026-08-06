import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Download, Check, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import { storeProducts } from '../data';
import { StoreItem } from '../types';

interface StoreSectionProps {
  cart: StoreItem[];
  onAddToCart: (item: StoreItem) => void;
  onRemoveFromCart: (itemId: string) => void;
  onOpenStoreModal: () => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenStoreModal,
}) => {
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const handleAdd = (item: StoreItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const cartTotal = cart.reduce((acc, c) => acc + c.priceNum, 0);

  return (
    <section id="store" className="relative z-10 w-full py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto border-t border-[#282a33] overflow-hidden bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4"
      >
        <div>
          <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Digital Store & Assets</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#E5E2E1] tracking-tight">
            Elevate Your Projects with <span className="text-[#8B5CF6]">Pro Assets</span>
          </h2>
        </div>
        <p className="text-[#CBC3D7] text-xs sm:text-sm max-w-md leading-relaxed">
          High-quality After Effects project files, motion presets, and templates to speed up your workflow. Used by professional creators worldwide.
        </p>
      </motion.div>

      {/* Main Asset Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {storeProducts.map((prod, index) => {
          const isAdded = addedItemIds[prod.id];
          const isInCart = cart.some((c) => c.id === prod.id);

          return (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 45, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-[#2a2d37] hover:border-[#8B5CF6]/50 transition-colors group shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Product Thumbnail */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-transparent">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131417]/90 via-transparent to-transparent" />

                  {prod.badge && (
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full bg-[#8B5CF6] text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                      {prod.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#131417]/80 backdrop-blur-md text-[11px] text-[#E5E2E1] flex items-center space-x-1.5 border border-[#2a2d37]">
                    <Download className="w-3 h-3 text-[#8B5CF6]" />
                    <span>{prod.downloads}</span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] uppercase font-mono text-[#958EA0] tracking-wider block mb-1">
                    {prod.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-[#E5E2E1] text-base sm:text-lg mb-1.5 group-hover:text-[#8B5CF6] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-[#958EA0] text-xs leading-relaxed mb-3">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Action & Price Footer */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#282a33] mt-auto pt-3">
                <div>
                  <span className="text-[9px] uppercase text-[#958EA0] block">Instant Download</span>
                  <span className="font-heading font-extrabold text-[#E5E2E1] text-xl">
                    {prod.price}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAdd(prod)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5 ${
                    isAdded || isInCart
                      ? 'bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'bg-[#8B5CF6] hover:bg-[#7c4dff] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
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
                      <span>Add</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cart Summary & Direct Checkout Trigger Bar if Cart Not Empty */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="glass-panel p-6 rounded-2xl border border-[#2a2d37] bg-transparent flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center font-bold">
              {cart.length}
            </div>
            <div>
              <div className="text-[#E5E2E1] font-bold text-sm">
                Cart Items: {cart.map((c) => c.title).join(', ')}
              </div>
              <div className="text-[#CBC3D7] text-xs">Total Amount: ₹{cartTotal}</div>
            </div>
          </div>

          <a
            href={`https://wa.me/919496660968?text=Hi%20Basith!%20I%20would%20like%20to%20purchase%20these%20store%20templates:%20${encodeURIComponent(
              cart.map((c) => c.title).join(', ')
            )}%20(Total:%20₹${cartTotal})`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1eb956] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer hover:scale-105"
          >
            <span>Checkout on WhatsApp (₹{cartTotal})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </section>
  );
};
