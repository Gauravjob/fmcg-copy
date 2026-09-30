import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Megaphone, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import AdvertisingSupportModal from './AdvertisingSupportModal';
import SalesTeamAssistanceModal from './SalesTeamAssistanceModal';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import Section3DBackground from './Section3DBackground';
import truckImg from '../assets/distributor_truck.png';
import adImg from '../assets/advertising_support.png';
import salesImg from '../assets/sales_team.png';

const services = [
  {
    id: 1,
    title: 'Distributor Partnership',
    desc: 'Sell top FMCG brands in your area with good margins and on-time supply.',
    icon: Handshake,
    image: truckImg,
    checklist: [
      'Attractive Profit Margins',
      'Credit Facility Available',
      'Dedicated Relationship Manager',
      'Regular Product Supply'
    ],
    btnText: 'Apply Now',
    btnColor: 'bg-[#007A4D]',
    iconColor: 'text-[#007A4D]',
    iconBg: 'bg-[#E6F3EF]'
  },
  {
    id: 2,
    title: 'Advertising Support',
    desc: 'Free posters, digital ads and festival campaigns that sell more stock.',
    icon: Megaphone,
    image: adImg,
    checklist: [
      'Promotional Materials',
      'Digital Marketing Support',
      'Festival & Seasonal Campaigns',
      'Brand Building Support'
    ],
    btnText: 'Get Marketing Help',
    btnColor: 'bg-[#E33E2B]',
    iconColor: 'text-[#E33E2B]',
    iconBg: 'bg-[#FDECEC]'
  },
  {
    id: 3,
    title: 'Sales Team Assistance',
    desc: 'Our field team trains you and opens new shops in new towns.',
    icon: Users,
    image: salesImg,
    checklist: [
      'Market Expansion Support',
      'Sales Training & Guidance',
      'Beat Planning & Execution',
      'On-ground Assistance'
    ],
    btnText: 'Contact Sales Team',
    btnColor: 'bg-[#007A4D]',
    iconColor: 'text-[#007A4D]',
    iconBg: 'bg-[#E6F3EF]'
  },
];

const Services = () => {
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const handleButtonClick = (serviceId) => {
    if (serviceId === 1) {
      const element = document.getElementById('apply');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (serviceId === 2) {
      setIsAdModalOpen(true);
    } else if (serviceId === 3) {
      setIsSalesModalOpen(true);
    }
  };

  return (
    <section id="services" className="relative py-12 md:py-20 bg-white overflow-hidden">
      <Section3DBackground />
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[11px] font-black text-green-700 tracking-[0.2em] uppercase">Value Added Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-[1.1]">
            What You <span className="text-gradient-green">Get With Us</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 font-bold leading-relaxed max-w-2xl mx-auto">
            Products, money support and a sales team — all included.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.12}
              className="h-full"
            >
              <TiltCard
                maxTilt={8}
                className="h-full bg-white rounded-[40px] shadow-md border border-gray-100 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:border-green-500/40 transition-all duration-500"
              >
                {/* Card Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 ${service.iconBg}`}></div>

                {/* Photo */}
                <div className="relative h-44 lg:h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xs font-black text-gray-900 shadow-md">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-7 lg:p-9 flex flex-col flex-1 relative -mt-10">
                  <div className={`w-16 h-16 rounded-3xl ${service.iconBg} ${service.iconColor} flex items-center justify-center flex-shrink-0 ring-8 ring-white group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 shadow-lg shadow-black/5`}>
                    <service.icon size={30} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight mt-6 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 font-semibold mb-8 leading-relaxed text-base">
                    {service.desc}
                  </p>

                  <div className="space-y-3 mb-8 flex-grow">
                    {service.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center`}>
                          <CheckCircle2 size={12} className={service.iconColor} strokeWidth={3} />
                        </div>
                        <span className="text-gray-800 font-extrabold text-sm tracking-tight group-hover/item:text-green-700 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-auto pt-2">
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleButtonClick(service.id)}
                      className={`w-full py-4 rounded-2xl text-white font-black text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:opacity-90 transition-all z-10 shadow-lg shadow-black/10 animate-sheen ${service.btnColor}`}
                    >
                      {service.btnText}
                      <ArrowRight size={20} strokeWidth={3} />
                    </motion.button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <AdvertisingSupportModal 
        isOpen={isAdModalOpen} 
        onClose={() => setIsAdModalOpen(false)} 
      />
      <SalesTeamAssistanceModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </section>
  );
};

export default Services;
