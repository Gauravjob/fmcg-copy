import React from 'react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, Headset } from 'lucide-react';
import ctaPhoto from '../assets/warehouse_handshake.png';
import Section3DBackground from './Section3DBackground';

const perks = [
  { icon: Package, label: 'Top brands' },
  { icon: TrendingUp, label: 'Good margins' },
  { icon: Headset, label: 'Team support' },
];

const CTA = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <Section3DBackground />
      {/* Deep Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#011c14] via-[#023f2f] to-[#01120d] animate-gradient-pan"></div>
    
      {/* Photo Texture Layer */}
      <img
        src={ctaPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
      />
      
      <div className="absolute inset-0 bg-[#023f2f]/70"></div>
      
      {/* Central Glowing Radial Spotlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-40 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 60%)' }}
        ></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.07] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {perks.map((perk, i) => (
              <div
                key={perk.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs font-black uppercase tracking-widest"
                style={{ animation: `float-y 6s ease-in-out ${i * 0.6}s infinite` }}
              >
                <perk.icon size={14} />
                {perk.label}
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Start Your Business With Us
          </h2>
          <p className="text-lg text-green-50/90 mb-10 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Top brands, good margins, and a team that helps you grow.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05, translateY: -4 }}
            whileTap={{ scale: 0.95 }}
            href="#apply" 
            className="inline-block bg-white text-green-950 px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all tracking-wider uppercase border border-white/10 hover:bg-green-50 animate-sheen"
          >
            Apply Now — It's Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
