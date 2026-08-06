import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const feedItems = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLuZViy7rEK7F_r6t-vPvoQx3b6g4y3gKQpeFtHi2JU4bJ98IeBFgSVGD1jQNyXPWnDmL9I0Sg-ofosOhAkGbDqUmdP5G7GoIW0lAj8zcVhqZXWUB8T8VMSo4ytG5wCipAZJsggZ6mtcOURuvOvREN-km_NAXNrn0CQpPXmPvlwJ5X_8fTQEo0DvcaqyFHMnCV3MFlTQZ6oRh70uf5ESVF_kWZBp87ybVAE0wcn0fZUhTi6osx4nliI-T885',
      likes: '1.4k',
      title: 'Lyrical Motion Breakdown',
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLuUuJPtokCze5p2EtO58SdJ_3v_lEqlvgjUAqrzf9iHRNWSFzgQdhdIXmYHJh8_8jYqnPozCDU2MPOeh2BB-2B3qAcfngkm1YTQ0TBeM3Q135mdxAp6pPLBpXO1Y-HHY-T__eCZm5ZLl-duoaoLRO9ygSE7zp4FikFXD_BklJILR-doBkaJ33W2oyL67AOxT_3FMhpoFqHsBAMnVO6TpinGas0AnlhluQsCPLzchSFarOaP33zfJI7LTXng',
      likes: '2.1k',
      title: '100 Years Legacy Artwork',
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLsmLWR_UV6lipIx509gcgUwfBcP1NVLEUssckl9dtgHKZbRbxQDf6b-e5E-TOmexPc5klV73x7UFxuLvOyEyPv2f5dTztFjTiufuHE6vD_oCiuzr3t8SVPXuZpy0hk5VqCdFOioLmTqJsKTZWlisrczfUQilA7ALfQzo-4G4lQe_5BiNbduv6PUdcSyRPMLwOKPxFwZ_KPdu9nphbqYO8E99yvML4bTnFXkxDlWjMHNG9fqb9jedKC7WFQ',
      likes: '980',
      title: 'Nooril Noorin Release Reel',
    },
    {
      id: 4,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLuBMsnXE2rDPFW2vgqc4HSb5wmExMaz5aaiMFsYaQvOeRugnuyvUK6WBUmz7IcHpblBqAaedOyy9Q3lzGlkpYgUzTXC-rMywKZq3h6CdN5_t2-5lvaJX5IzcsNnV1j-bsCqdNnRY65-8GSVW8Mzg0p7TPrG5Q1Fo_qcFck15cilRKg9jMtzxG0mMi90RPjycWRfxd3yDOB6TUpyFKD86AwiZtIt4FME3_-o3GZ99DX2CGKykQcqtVzg1I5H',
      likes: '3.5k',
      title: 'Arabic Calligraphy Kinetic Typography',
    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLtxpvdVV8ptHQpsU3FXbrUaWEHyqzGvTekYfcPp76_tUAMhtPGgJD19rKJmaIF3vF_ORJeIMlzyqc-_luGlJQ-EiwjvQgUT5aSKz5Se9strywyCzEj9LpkUJLZtY0x3IVylW81lUE-SSTYCKHsT4NhruZRYRFjfihENWhGJVazb6qyBtS5na-Wy73cdI_u0r-fbpNk0RXKKQeAWHOSa5xIYYXqdd-yv_X9oETTS3bcBDDUEb8jWpYe5eIDg',
      likes: '1.8k',
      title: 'Arts Fest Event Visual Package',
    },
  ];

  // Duplicate for smooth infinite loop
  const marqueeList = [...feedItems, ...feedItems];

  return (
    <section className="relative z-10 w-full py-12 lg:py-16 border-t border-[#282a33] overflow-hidden bg-transparent">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
      >
        <div>
          <div className="flex items-center space-x-2 text-[#8B5CF6] text-xs font-semibold tracking-widest uppercase mb-1.5">
            <Instagram className="w-3.5 h-3.5" />
            <span>Social Feed</span>
          </div>
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#E5E2E1] tracking-tight">
            Follow <span className="text-[#8B5CF6]">@basithframes</span> on Instagram
          </h2>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://instagram.com/basithframes"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button-secondary px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer group shadow-md"
        >
          <span>Follow Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden py-2">
        <div className="animate-marquee flex gap-4 sm:gap-5">
          {marqueeList.map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com/basithframes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 sm:w-60 h-64 sm:h-72 flex-shrink-0 glass-panel rounded-2xl overflow-hidden relative group border border-[#2a2d37] hover:border-[#8B5CF6]/50 transition-all duration-300 block hover:-translate-y-1.5 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131417]/95 via-[#131417]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                <div className="flex items-center space-x-1.5 text-[11px] text-[#8B5CF6] font-bold">
                  <Heart className="w-3 h-3 fill-[#8B5CF6]" />
                  <span>{item.likes}</span>
                </div>
                <div className="text-[#E5E2E1] font-bold text-xs line-clamp-1">
                  {item.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
