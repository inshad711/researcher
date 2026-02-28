
"use client"
import React from 'react';
import { Rocket, BarChart3, Megaphone, Handshake, ArrowRight, Key } from 'lucide-react';

const ConsultancyServices = () => {
  const services = [
    {
      title: "Start Up Consultancy",
      description: "We provide expert guidance in business planning, funding, legal compliance, marketing, operations, technology, and growth strategy to accelerate startup.",
      icon: <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
        <Rocket className="text-white w-6 h-6" />
      </div>,
      features: []
    },
    {
      title: "Sales Consultancy",
      description: "We provide expert guidance in sales strategy, training, process optimisation, CRM efficiency, and performance analysis to boost sales effectiveness and revenue growth.",
      icon: <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
        <Megaphone className="text-white w-6 h-6" />
      </div>,
      features: ["Inbound Sales", "Outbound Sales & Business Development", "Account Based Sales"],
      highlighted: true
    },
    {
      title: "Marketing Consultancy",
      description: "We offer expert guidance in marketing strategy, branding, digital marketing, market research, campaign management, and customer analytics to drive brand awareness and maximize ROI.",
      icon: <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
        <Key className="text-white w-6 h-6" />
      </div>,
      features: []
    }
  ];

  return (
    <div className="min-h-screen bg-[#101838] text-white font-light text-[16.36px] leading-[23px] tracking-[0.4px] text-[#364153] selection:bg-blue-500/30">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-blue-600/30 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-sm">
             <Handshake className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
          Consultancy Services
        </h1>
        
        <p className="max-w-3xl mx-auto text-blue-200/70 text-lg leading-relaxed mb-16">
          Unlock your business potential with our comprehensive sales consultancy services. 
          At DigiDrafts, our expert consultants are equipped with the experience and knowledge 
          to guide you in the right direction.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 group
                ${service.highlighted 
                  ? 'bg-white/10 border-white/20 shadow-2xl scale-105 z-10' 
                  : 'bg-white/[0.03] border-white/10 hover:bg-white/5'
                }`}
            >
              {service.icon}

              <h3 className="text-2xl font-bold mb-4 text-left leading-tight">
                {service.title}
              </h3>
              
              <p className="text-blue-100/60 text-sm leading-relaxed text-left mb-6">
                {service.description}
              </p>

              {service.features.length > 0 && (
                <ul className="mb-8 space-y-2 text-left">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-blue-100/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Spacer to push button to bottom */}
              <div className="mt-auto pt-4">
                <button 
                  className={`w-full py-4 rounded-full flex items-center justify-center gap-2 font-medium transition-all
                    ${service.highlighted 
                      ? 'bg-white text-[#101838] hover:bg-blue-50' 
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                    }`}
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ServiceSection() {
  return <ConsultancyServices />;
}