// "use client"
// import React from 'react';
// import Image from 'next/image';

// const SuccessStories = () => {
//   return (
//     <section className="relative w-full max-w-7xl mx-auto px-6 py-16 bg-white overflow-hidden">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
//         <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase">
//           Stories of <br /> Success
//         </h2>
        
//         <div className="max-w-xs">
//           <p className="text-sm text-gray-600 leading-relaxed">
//             Framery pods are featured in some of the most stunning offices worldwide. 
//             Discover how Framery pods are utilized in various workspaces across 
//             different industries around the globe.
//           </p>
//         </div>
//       </div>

//       {/* Main Image Container */}
//       <div className="relative w-full rounded-sm overflow-hidden group">
//         <Image 
//           src="/your-image-path.jpg" // Replace with your image
//           alt="Office Pods Success Stories"
//           width={1200}
//           height={600}
//           className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />

//         {/* Floating Circular Badge */}
//         <div className="absolute right-8 top-1/2 -translate-y-1/2 md:-translate-y-full lg:right-12">
//           <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
//             {/* Spinning Text Effect (Simplified using SVG) */}
//             <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
//               <path
//                 id="circlePath"
//                 d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                 fill="none"
//               />
//               <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-black">
//                 <textPath xlinkHref="#circlePath">
//                   COMPARE PODS • COMPARE PODS • 
//                 </textPath>
//               </text>
//             </svg>
            
//             {/* Center Icon */}
//             <div className="z-10 bg-black text-white rounded-full p-2">
//               <span className="text-xl">★</span>
//             </div>
            
//             {/* Solid Black Background Circle */}
//             <div className="absolute inset-0 bg-white rounded-full -z-10 shadow-xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;


import React from 'react';
import Image from 'next/image';

const SuccessHero = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-white overflow-hidden font-sans">
      {/* 1. Main Background Image Container */}
      <div className="relative w-full h-[500px] md:h-[700px]">
        <Image
          src="/image/Gemini_Generated_Image_mmxjahmmxjahmmxj.png" // Replace with your actual image path
          alt="Framery office pods"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 2. Top Centered Headline */}
      <div className="absolute top-12 left-0 w-full text-center px-4">
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-black uppercase">
          Stories of Success
        </h1>
      </div>

      {/* 3. Right Side Content Group */}
      <div className="absolute top-[25%] right-8 md:right-24 max-w-xs md:max-w-md flex flex-col items-end text-right">
        
        {/* Description Text */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-8">
          Framery pods are featured in some of the most stunning offices worldwide. 
          Discover how Framery pods are utilized in various workspaces across 
          different industries around the globe.
        </p>

        {/* Floating Circular Badge (Floating Button) */}
        <div className="relative group cursor-pointer">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center animate-spin-slow hover:bg-gray-900 transition-colors">
            {/* SVG Text Path for the "Compare Pods" circular text */}
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="fill-white text-[10px] uppercase font-bold tracking-widest">
                <textPath xlinkHref="#circlePath">
                  Compare Pods • Compare Pods • 
                </textPath>
              </text>
            </svg>
            {/* Center Star */}
            <span className="absolute text-white text-xl">★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessHero;