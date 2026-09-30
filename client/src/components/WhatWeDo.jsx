import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, MapPin, Rocket,Store, RefreshCcw } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import Section3DBackground from './Section3DBackground';
import productsImg from '../assets/fmcg_products_cart.png';
import truckImg from '../assets/distributor_truck.png';
import productNoodles from '../assets/Products/11.webp';

const steps = [
  {
    id: 1,
    img: productsImg,
    title: 'Brands Give Us Products',
    desc: 'Top FMCG companies choose Vardha to reach small towns and villages.',
  },
  {
    id: 2,
    img: truckImg,
    title: 'We Deliver Them',
    desc: 'Our 225+ super distributors move the stock to every state, fast.',
  },
  {
    id: 3,
    img: productNoodles,
    title: 'You Sell In Your Area',
    desc: 'Shopkeepers and distributors earn a healthy margin on every order.',
  },
];

const audiences = [
  { icon: Store, title: 'I run a shop', desc: 'Stock your shelves with top brands.' },
  { icon: Rocket, title: 'I want to start a business', desc: 'Begin with products that sell fast.' },
  { icon: RefreshCcw, title: 'I already distribute', desc: 'Add brands and grow your area.' },
];

const WhatWeDo = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-[#F4FBF7] relative overflow-hidden">
      <Section3DBackground />
      <div className="absolute inset-0 soft-grid opacity-60 pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-emerald-100/60 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#007A4D] text-[11px] font-black tracking-[0.2em] uppercase shadow-sm mb-5">
            <BadgeCheck size={14} />
            WHAT WE DO
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.08] mb-4">
            It Works in <span className="text-gradient-green">3 Simple Steps</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-bold max-w-xl mx-auto leading-relaxed">
            No jargon. Here is the whole business in one glance.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[16%] right-[16%] border-t-[3px] border-dashed border-emerald-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {steps.map((step, i) => (
              <Reveal
                key={step.id}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={0.05}
                className="h-full"
              >
                
              <TiltCard className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-gray-900 px-3 py-1 rounded-full">
                    Step {String(step.id).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-5 md:p-6 text-center">
                  <h3 className="text-base md:text-lg font-black text-gray-900 tracking-tight mb-1">{step.title}</h3>
                  <p className="text-[11px] md:text-xs text-gray-500 font-semibold uppercase tracking-widest leading-relaxed">{step.desc}</p>
                </div>
              </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 md:mt-20"
        >
          <p className="text-center text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-7">
            This page is for you if
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {audiences.map((a, i) => (
              <Reveal key={a.title} direction={i % 2 === 0 ? 'up' : 'down'} delay={i * 0.1} className="h-full">
                <TiltCard
                  maxTilt={7}
                  className="h-full flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-emerald-100 shadow-sm hover:border-[#007A4D] hover:shadow-md transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E6F3EF] text-[#007A4D] flex items-center justify-center flex-shrink-0">
                    <a.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900 leading-tight">{a.title}</p>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">{a.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-100 text-[#007A4D] text-sm font-black shadow-sm">
            <MapPin size={15} />
            Delivering across 5+ states in India
          </span>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
