import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import CountUp from './CountUp';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import Section3DBackground from './Section3DBackground';
import yearsImg from '../assets/ChatGPT Image May 10, 2026, 02_11_52 PM (1).png';
import distributorsImg from '../assets/sales_team.png';
import retailersImg from '../assets/fmcg_products_cart_new.png';
import statesImg from '../assets/india-map.png';
import ordersImg from '../assets/distributor_truck.png';
import qualityImg from '../assets/certifications.png';
import cert1 from '../assets/Certifications/1.webp';
import cert2 from '../assets/Certifications/2.webp';
import cert3 from '../assets/Certifications/3.webp';
import cert4 from '../assets/Certifications/4.webp';
import cert5 from '../assets/Certifications/msme.webp';

const stats = [
  {
    id: 1,
    value: '30+',
    title: 'Years of Experience',
    desc: 'Three decades of excellence in FMCG distribution',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsZzVYpsNN6UahVJ1lnSunxqsHkWRnbK6WNyBQtVv9Q&s=10",
  },
  {
    id: 2,
    value: '225+',
    title: 'Super Distributors Pan India',
    desc: 'Strong network of super distributors in every major state',
    img: distributorsImg,
  },
  {
    id: 3,
    value: '67,500+',
    title: 'Retailers Served',
    desc: 'Empowering thousands of retailers every day',
    img: retailersImg,
  },
  {
    id: 4,
    value: '5+',
    title: 'States Covered',
    desc: 'Extensive reach across the length and breadth of India',
    img: statesImg,
  },
  {
    id: 5,
    value: '22,500+',
    title: 'Orders Delivered',
    desc: 'Reliable and timely delivery you can count on',
    img: ordersImg,
  },
  {
    id: 6,
    value: '100%',
    title: 'Commitment to Quality',
    desc: 'Genuine products, best prices, and trusted service',
    img: qualityImg,
  },
];

const certifications = [
  { name: 'FSSAI', label: 'Certified', image: cert1 },
  { name: 'GMP', label: 'Certified', image: cert2 },
  { name: 'ISO 9001:2015', label: 'Certified', image: cert3 },
  { name: 'HACCP', label: 'Certified', image: cert4 },
  { name: 'MSME', label: 'Registered', image: cert5 },
];

const TrustStats = () => {
  return (
    <section className="relative py-10 md:py-20 bg-white">
      <Section3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#007A4D] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <ShieldCheck size={14} />
            OUR TRUST, OUR STRENGTH
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Trusted for <span className="text-[#007A4D]">30 Years</span>
          </h2>
          <p className="text-gray-700 font-bold max-w-2xl mx-auto text-base leading-relaxed">
            Real numbers from 30 years of supplying shops across India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.id}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'right' : 'up'}
              delay={(index % 3) * 0.1}
              className="h-full"
            >
              <TiltCard className="h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer">
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <img src={stat.img} alt={stat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-gray-900 px-3 py-1 rounded-full">
                    {stat.title}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <div className="text-3xl md:text-4xl font-black text-[#007A4D] tracking-tight leading-none mb-2">
                    <CountUp value={stat.value} />
                  </div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{stat.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F7FAF8] rounded-2xl px-8 py-8 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#007A4D]/30"></div>
            <p className="text-center text-lg font-bold text-gray-800 whitespace-nowrap">
              Certified. Compliant. Committed.
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#007A4D]/30"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">{cert.name}</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider">{cert.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustStats;
