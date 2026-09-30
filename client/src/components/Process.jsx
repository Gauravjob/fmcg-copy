import React from 'react';
import { FileText, ClipboardCheck, Box, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import Section3DBackground from './Section3DBackground';

const steps = [
  { 
    id: '01', 
    title: 'Apply Online', 
    desc: 'Fill the form with your shop details.',
    icon: FileText
  },
  { 
    id: '02', 
    title: 'We Call You', 
    desc: 'Our team checks your details and calls you.',
    icon: ClipboardCheck
  },
  { 
    id: '03', 
    title: 'Get Your Products', 
    desc: 'Brands, prices and offers are shared with you.',
    icon: Box
  },
  { 
    id: '04', 
    title: 'Start Selling', 
    desc: 'Deliver to shops and grow with our support.',
    icon: TrendingUp
  },
];

const Process = () => {
  return (
    <section className="relative py-12 md:py-24 bg-white">
      <Section3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3FBF8] rounded-[48px] p-8 md:p-20 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <Section3DBackground />
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="text-center mb-10 md:mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#007A4D] text-sm font-bold tracking-wide mb-6 shadow-sm">
              <div className="w-4 h-[2px] bg-[#007A4D]"></div>
              HOW IT WORKS
              <div className="w-4 h-[2px] bg-[#007A4D]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#111827] tracking-tighter">
              Start Selling in <span className="text-[#007A4D]">4 Easy Steps</span>
            </h2>
          </div>

          <div className="relative z-10">
            {/* Connecting Dots Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dotted border-gray-300 -translate-y-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {steps.map((step, index) => (
                <Reveal
                  key={step.id}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.12}
                  className="h-full"
                >
                  <TiltCard
                    maxTilt={8}
                    className="h-full relative flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 md:left-auto md:-right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#E33E2B] font-bold text-sm z-20">
                      {step.id}
                    </div>

                    {/* Icon Circle */}
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 border-4 border-[#E6F3EF]">
                      <step.icon size={36} className="text-[#007A4D]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
