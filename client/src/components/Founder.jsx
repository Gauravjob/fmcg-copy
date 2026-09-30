import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, History, Heart } from 'lucide-react';
import productsPhoto from '../assets/fmcg_products_cart.png';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import Section3DBackground from './Section3DBackground';

const Founder = () => {
  return (
    <section className="relative pt-12 md:pt-20 pb-28 md:pb-32 bg-gray-50 overflow-hidden">
      <Section3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-20 lg:gap-24">
          
          {/* Left: 30-Year Green Card - 60% Photo / 40% Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-full"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-full flex flex-col">
              {/* 60% Top - Photo */}
              <div className="flex-[6] min-h-0 relative overflow-hidden rounded-t-[40px]">
                <img
                  src={productsPhoto}
                  alt="FMCG products we distribute"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white text-xs font-black uppercase tracking-widest drop-shadow-md">
                    Products we move every day
                  </p>
                </div>
              </div>

              {/* 40% Bottom - Content */}
              <div className="flex-[4] bg-gradient-to-br from-green-600 to-green-900 p-6 md:p-8 text-white relative">
                <div className="absolute inset-0 opacity-20 soft-grid pointer-events-none"></div>
                <div className="relative">
                  <div className="mb-4">
                    <History size={36} className="opacity-50 mb-3" />
                    <h3 className="text-3xl font-black tracking-tighter leading-none mb-1">30 Years</h3>
                    <p className="text-green-100 font-bold uppercase tracking-widest text-[10px]">Of Distribution Excellence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Award size={16} />
                    </div>
                    <p className="text-xs font-medium leading-relaxed italic text-green-50">
                      "Starting with a single truck and a handful of retail partners in 1994, our journey has been defined by one thing: Unwavering Trust."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right: Content */}
          <Reveal direction="right" className="lg:w-1/2 w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase mb-6">
                <Target size={14} />
                OUR CORE VALUES
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-4 leading-tight">
                We Move Boxes. <br />
                We Build <span className="text-[#007A4D]">Relationships.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 font-bold leading-relaxed">
                We connect big brands with small towns — reliable stock, honest prices,
                a fair profit for every shop.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Our Mission", text: "To empower every small retailer with access to world-class FMCG products at the best prices." },
                { icon: Heart, title: "Our Promise", text: "Honesty in pricing, transparency in business, and commitment to your growth." },
                { icon: Target, title: "Our Value", text: "To empower every small retailer with access to world-class FMCG products at the best prices." },
                { icon: Heart, title: "Our Service", text: "Honesty in pricing, transparency in business, and commitment to your growth." }
              ].map((item, i) => (
                <Reveal
                  key={i}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  delay={0.2 + i * 0.12}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={7}
                    className="h-full bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#007A4D]/30 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4 group-hover:bg-[#007A4D] group-hover:text-white transition-colors duration-300">
                      <item.icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-semibold leading-relaxed">{item.text}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Founder;
