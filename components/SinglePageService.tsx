
"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SinglePageService = () => {
  // Mock data for the research points
  const researchPoints = [
    {
      id: "01",
      title: "Business and Asset Fundamentals",
      description: "Every assessment begins with a deep understanding of the business and the assets that underpin it."
    },
    {
      id: "02",
      title: "Industry Structure and Secular Trends",
      description: "We analyze the broader market context in which the business operates, with emphasis on industry structure and barriers to entry."
    },
    {
      id: "03",
      title: "Financial Durability and Risk",
      description: "Financial strength is evaluated not only in stable conditions but through rigorous stress-testing against adverse cycles."
    },
    {
        id: "04",
        title: "Capital Structure Optimization",
        description: "We evaluate the optimal mix of debt and equity to maximize returns while maintaining a conservative risk profile."
    },
    {
        id: "05",
        title: "Management & Governance",
        description: "A rigorous audit of leadership track records and corporate governance frameworks to ensure alignment with minority shareholders."
    }
  ];

  // Mock logo names for the "Trusted By" section
  const logos = [
    "JOHN DEERE", "KPMG", "Bloomberg", "Deloitte.", "PRUDENTIAL", "Forbes", "Goldman Sachs", "Morgan Stanley"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Marquee Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        // .animate-marquee:hover {
        //   animation-play-state: paused;
        // }
      `}} />

      {/* Top Section / Hero Header */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
              A Disciplined Approach <br />
              to Capital Deployment
            </h1>
          </div>
          <div className="md:col-span-4 pt-2">
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Valenco Capital applies a structured, research-led framework to every investment decision, prioritizing clarity, risk awareness, and long-term outcomes.
            </p>
            <p className="text-xs font-medium text-slate-400 mt-6 uppercase tracking-widest">
              Process over momentum. Conviction over activity.
            </p>
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Modern skyscrapers representing corporate stability" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* Marquee Trust Section */}
      <section className="mb-10 overflow-hidden border-y border-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-slate-600">
            Trusted by Industry Leaders
          </span>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* First set of logos */}
            {logos.concat(logos).map((logo, index) => (
              <span 
                key={index} 
                className="mx-12 text-xl md:text-2xl font-serif font-bold tracking-tight text-slate-900 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Left Sidebar - FIXED */}
          <div className="md:col-span-3 md:sticky top-32 self-start">
            <span className="text-sm font-medium text-slate-700 uppercase tracking-widest block mb-2">
              Research as The Foundation
            </span>
            
            <div className="hidden md:block aspect-[4/5] w-full overflow-hidden grayscale opacity-80 rounded-sm">
                <img 
                    src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Architectural Detail"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
            </div>
         
          </div>

          {/* Right Content */}
          <div className="md:col-span-9">
            <h2 className="text-3xl md:text-5xl font-medium mb-10 leading-tight">
              Research Informs Conviction, <br />
              <span className="text-slate-500">Conviction Informs Capital Allocation.</span>
            </h2>

            {/* List of Points */}
            <div className="border-t border-slate-100">
              {researchPoints.map((item) => (
                <div key={item.id} className="group border-b border-slate-100 py-12 transition-colors hover:bg-slate-50/50">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-1">
                      <span className="text-xs font-mono text-slate-400">{item.id}</span>
                    </div>
                    <div className="md:col-span-5">
                      <h3 className="text-xl font-medium pr-8 group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default SinglePageService;