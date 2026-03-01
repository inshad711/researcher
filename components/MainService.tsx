// import React from 'react';
// import Image from 'next/image';

// const MainService = () => {
//   return (
//     <section className="relative min-h-screen bg-[#F3F3F3] px-6 pt-20 pb-10 md:px-16">
//       {/* Upper Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
//         {/* Large Heading */}
//         <div className="md:col-span-8">
//           <h1 className="text-[12vw] md:text-[10rem] font-bold leading-[0.85] tracking-tighter text-black">
//             let's talk <br /> 
//             <span className="relative inline-block">
//               design
//               {/* Floating Badge */}
//               <div className="absolute -top-4 -right-12 md:-right-24 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2 transform rotate-2">
//                 <span className="text-[10px] md:text-xs font-medium text-gray-800 whitespace-nowrap">
//                   why do you need good design? ✨
//                 </span>
//               </div>
//             </span>
//           </h1>
//         </div>

//         {/* Small Intro Paragraph */}
//         <div className="md:col-span-4 md:pt-8">
//           <p className="text-sm md:text-base text-gray-700 max-w-[280px] leading-relaxed">
//             Here will go a small intro paragraph that talks about the 
//             way we see design in the studio.
//           </p>
//         </div>
//       </div>

//       {/* Hero Image Container */}
//       <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-sm">
//         <Image
//           src="/your-studio-image.jpg" // Replace with your image path
//           alt="Studio Interior"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default MainService;


////new

import React from 'react';
import Image from 'next/image';

const MainService = () => {
  return (
    <section className="relative w-full px-6 md:px-16  overflow-hidden">
      {/* Top Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start z-20">
        
        {/* Main Heading Area */}
        <div className="md:col-span-8 z-30 relative">
          <h1 className="text-[12vw] md:text-[10rem] font-medium leading-[0.85] tracking-tighter text-black">
            let’s talk <br /> 
            <span className="relative pl-12 md:pl-36 lg:pl-52 inline-block">
              design
            
            </span>
          </h1>
        </div>

        {/* Small Intro Paragraph */}
        <div className="md:col-span-4 md:pt-8">
          <p className="text-[14px] text-gray-600 font-sans max-w-[240px]">
            Here will go a small intro paragraph that talks about the way we see design in the studio.
          </p>
        </div>
      </div>

      {/* Image Container */}
      <div className="mt-12 z-10 md:mt-[-4rem] max-w-7xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <div className="relative aspect-[16/10] md:aspect-[21/9] w-full">
          <Image
            src="/image/2328655_P9A0N90.webp" // Replace with your image path
            alt="Design Studio Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MainService;