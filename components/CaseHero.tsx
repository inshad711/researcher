import React from 'react';

/**
 * Enhanced Responsive Version:
 * - Fluid Typography: Uses CSS clamp() for the headline so it scales perfectly with the viewport.
 * - Dynamic Spacing: Padding and margins adjust based on screen size.
 * - Layout Refinement: Improved grid breakpoints for tablet and mobile orientations.
 */

const CaseHero = () => {
  const navItems = [
    'UIUX',
    'BRANDING',
    'MOBILE APP',
    'WEBSITE DESIGN'
  ];

  const tags = ['UIUX', 'Branding'];

  return (
    <div className=" bg-white text-black selection:text-white flex flex-col justify-between px-4 py-6 md:p-10 lg:py-16  overflow-x-hidden">
      
      {/* Main Header & Nav Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start w-full max-w-[1600px] mx-auto">
        
        {/* Responsive Fluid Headline */}
        <section className="lg:col-span-9 xl:col-span-10">
          <h1 className="font-medium tracking-tighter leading-[0.9] text-black">
            {/* Fluid size logic: 
              - Min: 2.75rem (small mobile)
              - Preferred: 9vw (scales with width)
              - Max: 9.5rem (large desktop)
            */}
            <span className="block text-[clamp(2.25rem,9vw,5.5rem)]">
              Bringing your
            </span>
            <span className="block text-[clamp(2.25rem,9vw,5.5rem)]">
              brand to life in the
            </span>
            <span className="block text-[clamp(2.25rem,9vw,5.5rem)] text-zinc-400">
              digital world
            </span>
          </h1>
        </section>

        {/* Navigation Sidebar */}
        {/* <nav className="lg:col-span-3 xl:col-span-2 flex flex-col items-start lg:items-end space-y-3 md:space-y-5 lg:pt-20">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-900 hover:text-zinc-400 transition-colors duration-300 uppercase"
            >
              {item}
            </a>
          ))}
        </nav> */}
      </main>

      {/* Footer Meta Information */}
      <footer className="mt-16 lg:mt-32 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-zinc-100 pt-8 lg:pt-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold">Sportly</h2>
            <p className="text-zinc-400 text-sm font-medium mt-1">May 5, 2023</p>
          </div>

          {/* Description - Hidden on small mobile or centered on tablet */}
          <div className="md:col-span-4 lg:col-span-5">
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-sm lg:mx-auto lg:text-center font-normal">
              Website Redesign: Improving user experience and modernizing design.
            </p>
          </div>

          {/* Tag Buttons */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-start md:justify-end gap-3">
            {tags.map((tag) => (
              <button 
                key={tag}
                className="px-6 py-2 md:px-8 md:py-3 rounded-full border border-black text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseHero;