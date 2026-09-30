import React from 'react';
import { motion } from 'framer-motion';
import {
  Award, Network, Megaphone, Truck, Headset,
  ShieldCheck, Package, TrendingUp, IndianRupee, Users, ArrowRight, Star
} from 'lucide-react';
import warehouseImg from '../assets/warehouse_handshake.png';
import truckImg from '../assets/Service/ChatGPT Image Jul 11, 2026, 01_09_57 PM.webp';
import CountUp from './CountUp';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import Section3DBackground from './Section3DBackground';

const features = [
  {
    icon: Truck,
    title: 'Stock in 24–48 Hours',
    desc: 'Your order leaves our warehouse in 1–2 days.',
  },
  {
    icon: IndianRupee,
    title: 'Credit Available',
    desc: 'Flexible payment terms so stock never stops.',
  },
  {
    icon: Network,
    title: '225+ Distributors',
    desc: 'We reach even the smallest towns and villages.',
  },
  {
    icon: TrendingUp,
    title: 'Good Margins',
    desc: 'Fast-moving products with bonus schemes.',
  },
  {
    icon: Headset,
    title: 'One Person to Call',
    desc: 'A relationship manager handles all your orders.',
  },
];

const statsBar = [
  { icon: ShieldCheck, value: '100%', title: 'Genuine Products', desc: 'Original products from trusted brands' },
  { icon: Package,    value: '5000+', title: 'Happy Partners',   desc: 'Growing together across India' },
  { icon: TrendingUp, value: 'High',  title: 'Profit Margins',  desc: 'Better margins and sustainable growth' },
  { icon: Headset,    value: '24/7',  title: 'Partner Support', desc: 'Always here to help you succeed' },
  { icon: IndianRupee,value: 'Reliable', title: 'Payments',     desc: 'Transparent & timely transactions' },
];

const WhyPartner = () => {
  return (
    <section id="about" className="relative py-10 md:py-20 bg-white">
      <Section3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12 pt-4"
        >
          <div className="inline-flex items-center gap-2 text-[#007A4D] text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-6 h-px bg-[#007A4D]"></div>
            <Star size={13} className="fill-[#007A4D]" />
            WHY PARTNER WITH US
            <div className="w-6 h-px bg-[#007A4D]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Why Shops <span className="text-[#007A4D]">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base font-bold leading-relaxed">
            Five reasons partners stay with us for years.
          </p>
        </motion.div>

        {/* Main Content: Left Features + Right Overlapping Images */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Left: Feature List */}
          <Reveal direction="left" className="w-full">
            <div className="space-y-6">
              {features.map((f, index) => (
                <TiltCard
                  key={index}
                  maxTilt={4}
                  lift={1.01}
                  glare={false}
                  className="flex items-start gap-5 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#007A4D] transition-colors duration-300">
                    <f.icon size={24} className="text-[#007A4D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="border-b border-gray-100 pb-5 flex-1">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{f.title}</h4>
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </Reveal>

          {/* Right: Layered Image Stack */}
          <Reveal direction="right" className="w-full">
            <div className="relative h-[320px] sm:h-[450px] w-full group">
              {/* Primary Large Warehouse Image */}
              <div className="absolute top-0 left-0 w-[78%] h-[80%] rounded-[32px] overflow-hidden shadow-xl z-10">
                <motion.img
                  initial={{ scale: 1.15, x: 20 }}
                  whileInView={{ scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  src={warehouseImg}
                  alt="FMCG Warehouse Operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003d22]/80 via-[#003d22]/20 to-transparent" />
              </div>

              {/* Overlapping Secondary Logistics Truck Image */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-20">
                <motion.img
                  initial={{ scale: 1.2, y: 24 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  src={truckImg}
                  alt="Delivery Truck Fleet Logistics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002615]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Quote Overlaid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 max-w-[45%] z-30 hidden sm:block"
              >
                <div className="bg-[#005a31]/90 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
                  <p className="text-white text-xs font-bold leading-relaxed">
                    "Our success is built on the absolute growth of our partners."
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Stats Dark Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#004d2c] rounded-2xl px-8 py-7"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {statsBar.map((s, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <s.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg leading-tight"><CountUp value={s.value} /></p>
                  <p className="text-white font-bold text-sm">{s.title}</p>
                  <p className="text-green-200/90 font-bold text-xs mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#EAF5EE] flex items-center justify-center flex-shrink-0">
              <Users size={26} className="text-[#007A4D]" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-gray-900">
                Ready to <span className="text-[#007A4D]">Grow Your Business?</span>
              </h4>
              <p className="text-gray-700 font-bold text-sm">
                Join thousands of successful partners and start your journey with us today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#apply"
              className="flex items-center gap-2 bg-[#007A4D] hover:bg-[#005a37] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-200"
            >
              Become a Super Distributor <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-[#007A4D] text-[#007A4D] hover:bg-[#EAF5EE] px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-200"
            >
              Contact Sales Team <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyPartner;
