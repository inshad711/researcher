// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const CLIENT_LOGOS = [
//   { id: 1, src: "https://www.sapience.ae/wp-content/uploads/2021/06/alghanim-300x160.png", alt: "Alghanim Industries" },
//   { id: 2, src: "https://www.sapience.ae/wp-content/uploads/2021/06/chalhoub-300x162.png", alt: "Chalhoub Group" },
//   { id: 3, src: "https://www.sapience.ae/wp-content/uploads/2021/06/chillis-300x160.png", alt: "Chili's" },
//   { id: 4, src: "https://www.sapience.ae/wp-content/uploads/2021/06/azizi-300x160.png", alt: "Azizi Developments" },
//   { id: 5, src: "https://www.sapience.ae/wp-content/uploads/2021/06/canadian-300x162.png", alt: "Canadian University Dubai" },
//   { id: 6, src: "https://www.sapience.ae/wp-content/uploads/2021/05/sara-e1648706445399.png", alt: "SARA" },
//   { id: 7, src: "https://www.sapience.ae/wp-content/uploads/2021/06/mercedes-300x162.png", alt: "Mercedes" },
//   { id: 8, src: "https://www.sapience.ae/wp-content/uploads/2021/06/nivea-300x160.png", alt: "Nivea" },
//   { id: 9, src: "https://www.sapience.ae/wp-content/uploads/2021/06/PS-300x160.png", alt: "Playstation" },
//   { id: 10, src: "https://www.sapience.ae/wp-content/uploads/2021/06/twitter-300x162.png", alt: "Twitter" },
// ];

// // Use 3 sets to ensure we never see a gap during transitions
// const DISPLAY_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

// export default function App() {
//   // Start index at the first item of the middle set
//   const [currentIndex, setCurrentIndex] = useState(CLIENT_LOGOS.length);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [itemsToShow, setItemsToShow] = useState(6);
//   const [isPaused, setIsPaused] = useState(false);
  
//   // Handle responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setItemsToShow(2);
//       else if (window.innerWidth < 1024) setItemsToShow(4);
//       else setItemsToShow(6);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const moveSlider = useCallback((direction) => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex(prev => direction === 'next' ? prev + 1 : prev - 1);
//   }, [isTransitioning]);

//   const handleTransitionEnd = () => {
//     setIsTransitioning(false);
    
//     // If we've reached the end of the middle set or the start, snap back to the center copy
//     if (currentIndex >= CLIENT_LOGOS.length * 2) {
//       setCurrentIndex(CLIENT_LOGOS.length);
//     } else if (currentIndex <= CLIENT_LOGOS.length - itemsToShow) {
//       // Small adjustment to keep the loop smooth when going backwards
//       if (currentIndex < CLIENT_LOGOS.length) {
//          setCurrentIndex(prev => prev + CLIENT_LOGOS.length);
//       }
//     }
//   };

//   // 3-second Auto-play
//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       moveSlider('next');
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [moveSlider, isPaused]);

//   return (
//     <section className="bg-white py-24 px-6 overflow-hidden">
//       {/* Header Section */}
//       <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
//         <h3 className="text-black font-bold text-sm tracking-[0.15em] uppercase">
//           Join Us Today
//         </h3>
//         <h2 className="text-[#958357] text-4xl md:text-5xl font-bold">
//           Our Clients & Partners
//         </h2>
//         <p className="text-gray-600 text-lg md:text-xl font-light">
//           We are proud to partner and service clients from several industries.
//         </p>
//       </div>

//       {/* Carousel Section */}
//       <div 
//         className="relative max-w-7xl mx-auto"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <div className="relative overflow-hidden">
//           <div 
//             className={`flex items-center ${isTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : 'transition-none'}`}
//             onTransitionEnd={handleTransitionEnd}
//             style={{ 
//               transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
//             }}
//           >
//             {DISPLAY_LOGOS.map((logo, index) => (
//               <div 
//                 key={`${logo.id}-${index}`}
//                 className="flex-shrink-0 px-4 md:px-8"
//                 style={{ width: `${100 / itemsToShow}%` }}
//               >
//                 <div className="h-32 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
//                   <img 
//                     src={logo.src} 
//                     alt={logo.alt} 
//                     className="max-w-full max-h-full object-contain select-none pointer-events-none"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows - Placed below per image */}
//         <div className="flex justify-center items-center gap-12 mt-10">
//           <button 
//             onClick={() => moveSlider('prev')}
//             className="text-slate-800 hover:text-[#958357] transition-colors p-2"
//             aria-label="Previous"
//           >
//             <ChevronLeft size={32} strokeWidth={1} />
//           </button>
//           <button 
//             onClick={() => moveSlider('next')}
//             className="text-slate-800 hover:text-[#958357] transition-colors p-2"
//             aria-label="Next"
//           >
//             <ChevronRight size={32} strokeWidth={1} />
//           </button>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="mt-16 text-center">
//         <a 
//           href="#" 
//           className="inline-block bg-[#958357] text-white px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-[#84734a] transition-all transform hover:-translate-y-1 shadow-md"
//         >
//           View Clients
//         </a>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { CLIENT_LOGOS } from '@/data/clientLogos';

// 3 sets for a seamless infinite loop
const DISPLAY_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

const ClientCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(CLIENT_LOGOS.length);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [itemsToShow, setItemsToShow] = useState<number>(6);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Use a ref to keep track of the index for the transitionEnd logic
  const indexRef = useRef(currentIndex);
  indexRef.current = currentIndex;

  // Handle Responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(4);
      else setItemsToShow(6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveSlider = useCallback((direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => direction === 'next' ? prev + 1 : prev - 1);
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // Jump to the middle set if we reach the boundaries
    // If we passed the end of the middle set
    if (indexRef.current >= CLIENT_LOGOS.length * 2) {
      setCurrentIndex(CLIENT_LOGOS.length);
    } 
    // If we passed the beginning of the middle set
    else if (indexRef.current < CLIENT_LOGOS.length) {
      setCurrentIndex(indexRef.current + CLIENT_LOGOS.length);
    }
  };

  // 2-second Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      moveSlider('next');
    }, 2000);
    return () => clearInterval(interval);
  }, [moveSlider, isPaused]);

  return (
    <section className="bg-white px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h3 className="text-black font-bold text-sm tracking-[0.15em] uppercase">Join Us Today</h3>
        <h2 className="text-slate-900 text-3xl md:text-5xl font-medium">Our Clients & Partners</h2>
        <p className="text-slate-600 text-lg md:text-xl font-light">
          We are proud to partner and service clients from several industries.
        </p>
      </div>

      <div 
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden">
          <div 
            className={`flex items-center ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
            onTransitionEnd={handleTransitionEnd}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
            }}
          >
            {DISPLAY_LOGOS.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 px-4 md:px-8"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="py-2 flex items-center justify-center opacity-100 transition-all duration-500 cursor-pointer">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-w-full max-h-full object-contain select-none pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <div className="flex justify-center items-center gap-12 mt-8">
          <button 
            onClick={() => moveSlider('prev')} 
            className="text-slate-800 hover:text-[#958357] transition-colors p-2"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button 
            onClick={() => moveSlider('next')} 
            className="text-slate-800 hover:text-[#958357] transition-colors p-2"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div> */}
        <div className="flex justify-center items-center gap-24 mt-12">
  {/* PREV */}
  <button 
    onClick={() => moveSlider('prev')}
    className="group cursor-pointer flex items-center text-slate-900 hover:text-[#958357] transition-all duration-500 ease-in-out"
  >
    <svg 
      width="60" height="24" viewBox="0 0 60 24" fill="none" 
      className="transform transition-transform duration-500 ease-in-out"
    >
      {/* The stretching line */}
      <line 
        x1="58" y1="12" x2="12" y2="12" 
        stroke="currentColor" strokeWidth="1" 
        className=" transition-all duration-500 opacity-0 group-hover:opacity-100"
      />
      {/* The Arrow Head + short stem */}
      <path 
        d="M12 6L6 12L12 18M6 12H58" 
        stroke="currentColor" strokeWidth="1" strokeLinecap="square"
        className=""
      />
    </svg>
  </button>

  {/* NEXT */}
  <button 
    onClick={() => moveSlider('next')}
    className="group flex cursor-pointer items-center text-slate-900 hover:text-[#958357] transition-all duration-500 ease-in-out"
  >
    <svg 
      width="60" height="24" viewBox="0 0 60 24" fill="none"
    >
      {/* The Arrow Head + short stem */}
      <path 
        d="M48 6L54 12L48 18M54 12H2" 
        stroke="currentColor" strokeWidth="1" strokeLinecap="square"
        className=" transition-transform duration-500"
      />
      {/* The stretching line */}
      <line 
        x1="2" y1="12" x2="48" y2="12" 
        stroke="currentColor" strokeWidth="1"
        className="transition-all duration-500 opacity-0 group-hover:opacity-100"
      />
    </svg>
  </button>
</div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/clients" className="inline-block bg-gradient-to-r from-purple-800 to-purple-600 text-white px-9 py-3 text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#84734a] transition-all transform hover:-translate-y-1 shadow-md">
          View Clients here
        </Link>
      </div>
    </section>
  );
};

export default ClientCarousel;
