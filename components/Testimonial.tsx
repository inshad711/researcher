// "use client";

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: "Ahmed Khan",
//     role: "Data Analyst",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
//     text: "The data analysis course was a game-changer for my career. The projects were highly practical and reflective of real-world challenges."
//   },
//   {
//     id: 2,
//     name: "Leonard Wu",
//     role: "Freelance Marketer",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
//     text: "I was skeptical about online learning, but the mentorship here is top-notch. The performance marketing modules gave me confidence."
//   },
//   {
//     id: 3,
//     name: "John Smith",
//     role: "UI/UX Designer",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
//     text: "The curriculum is updated constantly. I learned more here in three months than I did in a year of self-study. Community support is amazing."
//   },
//   {
//     id: 4,
//     name: "Sarah Jenkins",
//     role: "Software Engineer",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
//     text: "Within six months, I went from knowing basic HTML to building full-stack applications with React. The bootcamp is intense but rewarding."
//   },
//   {
//     id: 5,
//     name: "Michael Chen",
//     role: "Product Manager",
//     image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
//     text: "Managing products requires a blend of soft skills and tech knowledge. This platform provided the perfect balance for my career shift."
//   }
// ];

// // To create an infinite loop, we clone the items
// // [CloneLast2, CloneLast1, ...Originals..., CloneFirst1, CloneFirst2]
// const itemsToClone = 3; // Number of items to buffer for smooth looping
// const extendedTestimonials = [
//   ...testimonials.slice(-itemsToClone),
//   ...testimonials,
//   ...testimonials.slice(0, itemsToClone)
// ];

// const TestimonialCard = ({ testimonial }) => (
//   <div className="bg-[#f2f2f2] rounded-xl p-8 flex flex-col gap-6 shadow-sm transition-all duration-300 hover:-translate-y-2 h-full mx-3 border border-transparent hover:border-blue-100">
//     <div className="flex gap-1">
//       {[...Array(5)].map((_, i) => (
//         <Star key={i} size={18} className="fill-[#ff6b6b] text-[#ff6b6b]" />
//       ))}
//     </div>
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
//           <img 
//             src={testimonial.image} 
//             alt={testimonial.name} 
//             className="w-full h-full object-cover"
//             onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
//           />
//         </div>
//         <div>
//           <h4 className="font-bold text-[#051145] text-xl leading-tight">{testimonial.name}</h4>
//           <p className="text-gray-500 text-sm font-semibold">{testimonial.role}</p>
//         </div>
//       </div>
//       <div className="text-blue-600 hidden sm:block">
//         <Quote className="fill-blue-600" size={32} />
//       </div>
//     </div>
//     <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
//   </div>
// );

// export default function Testimonial() {
//   const [visibleItems, setVisibleItems] = useState(3);
//   // Start at the index of the first "real" item (after the cloned buffer)
//   const [currentIndex, setCurrentIndex] = useState(itemsToClone);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [isMoving, setIsMoving] = useState(false);

//   // Responsive logic
//   useEffect(() => {
//     const updateVisibleItems = () => {
//       if (window.innerWidth < 768) setVisibleItems(1);
//       else if (window.innerWidth < 1024) setVisibleItems(2);
//       else setVisibleItems(3);
//     };
//     updateVisibleItems();
//     window.addEventListener('resize', updateVisibleItems);
//     return () => window.removeEventListener('resize', updateVisibleItems);
//   }, []);

//   const moveSlide = useCallback((direction) => {
//     if (isMoving) return; // Prevent spamming buttons
//     setIsMoving(true);
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => direction === 'next' ? prev + 1 : prev - 1);
//   }, [isMoving]);

//   const handleTransitionEnd = () => {
//     setIsMoving(false);
    
//     // If we've reached the cloned items at the end, jump to real start
//     if (currentIndex >= testimonials.length + itemsToClone) {
//       setIsTransitioning(false);
//       setCurrentIndex(itemsToClone);
//     } 
//     // If we've reached the cloned items at the start, jump to real end
//     else if (currentIndex <= itemsToClone - 1) {
//       setIsTransitioning(false);
//       setCurrentIndex(testimonials.length + itemsToClone - 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white font-light text-[16.36px] leading-[23px] tracking-[0.4px] text-[#364153] text-[#051145] overflow-x-hidden">
//       <div className="max-w-7xl mx-auto px-6 py-20">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
//           <div className="max-w-2xl">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-4 h-4 rounded-full border-4 border-[#051145]"></div>
//               <span className="font-bold uppercase tracking-wider text-sm">Student Testimonials</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black leading-tight">
//               What Our Students <br className="hidden md:block" /> Are Saying
//             </h2>
//           </div>
          
//           <div className="max-w-md md:text-right flex flex-col md:items-end gap-6">
//             <p className="text-gray-500 leading-relaxed text-lg">
//               Explore experiences from our global community of learners who have accelerated their growth.
//             </p>
//             <div className="flex gap-3">
//               <button 
//                 onClick={() => moveSlide('prev')}
//                 className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#051145] text-white hover:bg-blue-700 transition-all active:scale-95 shadow-lg z-20"
//               >
//                 <ChevronLeft size={24} />
//               </button>
//               <button 
//                 onClick={() => moveSlide('next')}
//                 className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#051145] text-white hover:bg-blue-700 transition-all active:scale-95 shadow-lg z-20"
//               >
//                 <ChevronRight size={24} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Carousel Wrapper */}
//         <div className="relative pt-10">
//           <div className="absolute bottom-[-40px] left-[-20px] right-[-20px] top-[140px] bg-[#051145] rounded-[30px] z-0 hidden lg:block"></div>
//           <div className="absolute bottom-[-20px] left-0 right-0 top-[180px] bg-[#051145] rounded-2xl z-0 lg:hidden"></div>

//           <div className="relative z-10 overflow-hidden">
//             <div 
//               className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
//               onTransitionEnd={handleTransitionEnd}
//               style={{ 
//                 transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
//               }}
//             >
//               {extendedTestimonials.map((t, idx) => (
//                 <div 
//                   key={`${t.id}-${idx}`} 
//                   className="flex-shrink-0 px-1 py-4"
//                   style={{ width: `${100 / visibleItems}%` }}
//                 >
//                   <TestimonialCard testimonial={t} />
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Active indicator (mapped to original testimonials) */}
//           <div className="flex justify-center items-center gap-3 mt-12 relative z-10">
//             {testimonials.map((_, idx) => {
//               const adjustedIndex = (currentIndex - itemsToClone + testimonials.length) % testimonials.length;
//               return (
//                 <div
//                   key={idx}
//                   className={`transition-all duration-300 rounded-full h-2 ${
//                     adjustedIndex === idx ? 'w-10 bg-blue-400' : 'w-2 bg-gray-400 opacity-50'
//                   }`}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




/////////new
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Define the Interface for Testimonials
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    text: "The data analysis course was a game-changer for my career. The projects were highly practical and reflective of real-world challenges."
  },
  {
    id: 2,
    name: "Leonard Wu",
    role: "Freelance Marketer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "I was skeptical about online learning, but the mentorship here is top-notch. The performance marketing modules gave me confidence."
  },
  {
    id: 3,
    name: "John Smith",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "The curriculum is updated constantly. I learned more here in three months than I did in a year of self-study. Community support is amazing."
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Within six months, I went from knowing basic HTML to building full-stack applications with React. The bootcamp is intense but rewarding."
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Managing products requires a blend of soft skills and tech knowledge. This platform provided the perfect balance for my career shift."
  }
];

const itemsToClone = 3;
const extendedTestimonials: TestimonialData[] = [
  ...testimonials.slice(-itemsToClone),
  ...testimonials,
  ...testimonials.slice(0, itemsToClone)
];

// 2. Component Prop Types
const TestimonialCard: React.FC<{ testimonial: TestimonialData }> = ({ testimonial }) => (
  <div className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col gap-6  transition-all duration-300 hover:-translate-y-2 h-full mx-3 border border-transparent hover:border-blue-100">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className="fill-[#ff6b6b] text-[#ff6b6b]" />
      ))}
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/150"; 
            }}
          />
        </div>
        <div>
          <h4 className="font-medium text-[#051145] text-xl leading-tight">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm font-normal">{testimonial.role}</p>
        </div>
      </div>
      <div className="text-blue-600 hidden sm:block">
        <Quote className="fill-blue-600" size={32} />
      </div>
    </div>
    <p className="font-sans">"{testimonial.text}"</p>
  </div>
);

export default function Testimonial() {
  const [visibleItems, setVisibleItems] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(itemsToClone);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isMoving, setIsMoving] = useState<boolean>(false);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const moveSlide = useCallback((direction: 'next' | 'prev') => {
    if (isMoving) return;
    setIsMoving(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => direction === 'next' ? prev + 1 : prev - 1);
  }, [isMoving]);

  const handleTransitionEnd = () => {
    setIsMoving(false);
    
    if (currentIndex >= testimonials.length + itemsToClone) {
      setIsTransitioning(false);
      setCurrentIndex(itemsToClone);
    } 
    else if (currentIndex <= itemsToClone - 1) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length + itemsToClone - 1);
    }
  };

  return (
    <div className=" bg-white text-[#051145] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 rounded-full border-4 border-[#051145]"></div>
              <span className="font-medium uppercase tracking-wider text-sm">Student Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px]">
              What Our Students <br className="hidden md:block" /> Are Saying
            </h2>
          </div>
          
          <div className="max-w-md md:text-right flex flex-col md:items-end gap-6">
            <p className="font-sans">
              Explore experiences from our global community of learners who have accelerated their growth.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => moveSlide('prev')}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#051145] text-white hover:bg-blue-700 transition-all active:scale-95 shadow-lg z-20"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => moveSlide('next')}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#051145] text-white hover:bg-blue-700 transition-all active:scale-95 shadow-lg z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-[-40px] left-[-20px] right-[-20px] top-[140px] bg-[#051145] rounded-[30px] z-0 hidden lg:block"></div>
          <div className="absolute bottom-[-20px] left-0 right-0 top-[180px] bg-[#051145] rounded-2xl z-0 lg:hidden"></div>

          <div className="relative z-10 overflow-hidden">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              onTransitionEnd={handleTransitionEnd}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {extendedTestimonials.map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  className="flex-shrink-0 px-1 py-4"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
          
          {/* <div className="flex justify-center items-center gap-3 mt-12 relative z-10">
            {testimonials.map((_, idx) => {
              const adjustedIndex = (currentIndex - itemsToClone + testimonials.length) % testimonials.length;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-full h-2 ${
                    adjustedIndex === idx ? 'w-10 bg-blue-400' : 'w-2 bg-gray-400 opacity-50'
                  }`}
                />
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}