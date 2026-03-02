

// "use client"
// import React from "react";
// import { ArrowRight, Microscope } from "lucide-react"; // Added Microscope for a research feel
// import Link from "next/link";
// import Image from "next/image";

// const industries = [
//   {
//     title: "Retail & Ecommerce",
//     desc: "Scalable online stores with smooth shopping flow.",
//     image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Healthcare",
//     desc: "Smart systems for clinics and patient care.",
//    image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Education & eLearning",
//     desc: "Interactive platforms for modern learning.",
//    image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Travel & Tourism",
//     desc: "Booking and travel platforms that convert.",
//   image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Finance & Banking",
//     desc: "Secure fintech built for scale.",
//     image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Technology & Consultancy",
//     desc: "Digital solutions for fast-growing brands.",
//  image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Logistics & Transportation",
//     desc: "Tracking and supply systems simplified.",
//  image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Hospitality & Entertainment",
//     desc: "Experience-driven booking platforms.",
//    image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Automotive",
//     desc: "Showroom and service booking solutions.",
//    image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Sports",
//     desc: "Club and fitness management systems.",
//     image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Real Estate",
//     desc: "Property platforms that drive leads.",
//    image: "/image/2328655_P9A0N90.webp", 
//   },
//   {
//     title: "Research & Development",
//     desc: "Data-driven insights and experimental tech prototyping.",
//  image: "/image/2328655_P9A0N90.webp", 
//   },
// ];

// const Industry = () => {
//   return (
//     <section className="">
//       <div className="templateContainer flex flex-col-reverse lg:flex-row w-full gap-10 md:gap-12 lg:gap-20">
        
//         {/* LEFT SIDE: Grid of Cards */}
//         <div className="w-full lg:w-1/2 pt-0 pb-10 lg:py-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//             <div className="flex flex-col gap-4 md:gap-6">
//               {industries
//                 .filter((_, i) => i % 2 === 0)
//                 .map((item, idx) => (
//                   <IndustryCard key={idx} {...item} />
//                 ))}
//             </div>
//             <div className="flex flex-col gap-4 md:gap-6 lg:mt-12">
//               {industries
//                 .filter((_, i) => i % 2 !== 0)
//                 .map((item, idx) => (
//                   <IndustryCard key={idx} {...item} />
//                 ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Content */}
//         <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center pt-10 lg:py-0">
//           <div className="lg:max-w-lg space-y-8">
//             <div className="space-y-4">
//               <p className="text-[12px] text-slate-500 tracking-widest ">EXPERTISE & INNOVATION</p>
//               <h2 className="text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px]">
//                    Industries Driven by{" "}
//                 <span className="relative inline-block">
//                 Research
//                   <svg className="absolute -left-2.5 top-full w-[110%] h-4 -rotate-180" viewBox="0 0 100 20" preserveAspectRatio="none">
//                     <path d="M5 15 Q 50 25 95 15" stroke="#6c6bcf" strokeWidth="2" fill="transparent" />
//                   </svg>
//                 </span>
             
//               </h2>
//             </div>
//             <div className="space-y-4 font-sans">
//               <p>
//                 We don't just build software; we solve complex challenges through extensive Market Research and User Behavior Analysis.
//               </p>
//               <p>
//                 Our R&D team stays ahead of emerging trends, ensuring that the solutions we deliver are not only modern but future-proofed against shifting industry standards.
//               </p>
//             </div>
            
//             <div className="pt-4">
//                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
//                 Start a Project
//                 <ArrowRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const IndustryCard = ({ title, desc, image }: any) => {
//   return (
//     <div className="relative overflow-hidden p-5 md:p-4 rounded-md bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[220px] md:min-h-[240px] flex flex-col justify-end group">
//       {/* Background Image */}
//       {image && (
//         <div className="absolute inset-0 z-0">
//           <Image 
//             src={image} 
//             alt={title} 
//             fill 
//             className="object-cover group-hover:scale-110 transition-transform duration-700"
//           />
//           {/* Gradient Overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t  via-black/10 to-transparent from-black/30 transition-colors duration-300" />
//         </div>
//       )}

//       {/* Text Content */}
//       <div className="relative z-10">
//         <h3 className="text-[17px] md:text-lg font-normal text-white mb-2">
//           {title}
//         </h3>

//         <p className="text-white/80 text-sm font-light leading-relaxed mb-4 line-clamp-2">
//           {desc}
//         </p>

//         <Link
//           href="/projects"
//           className="text-white font-medium text-xs inline-flex items-center gap-1 group/link bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all"
//         >
//           View Case Study 
//           <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Industry;



///// new content 


"use client"
import React from "react";
import { ArrowRight, Microscope } from "lucide-react"; // Added Microscope for a research feel
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    title: "Retail & Ecommerce",
    desc: "Scalable online stores with smooth shopping flow.",
    image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Healthcare",
    desc: "Smart systems for clinics and patient care.",
   image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Education & eLearning",
    desc: "Interactive platforms for modern learning.",
   image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Travel & Tourism",
    desc: "Booking and travel platforms that convert.",
  image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Finance & Banking",
    desc: "Secure fintech built for scale.",
    image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Technology & Consultancy",
    desc: "Digital solutions for fast-growing brands.",
 image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Logistics & Transportation",
    desc: "Tracking and supply systems simplified.",
 image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Hospitality & Entertainment",
    desc: "Experience-driven booking platforms.",
   image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Automotive",
    desc: "Showroom and service booking solutions.",
   image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Sports",
    desc: "Club and fitness management systems.",
    image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Real Estate",
    desc: "Property platforms that drive leads.",
   image: "/image/2328655_P9A0N90.webp", 
  },
  {
    title: "Research & Development",
    desc: "Data-driven insights and experimental tech prototyping.",
 image: "/image/2328655_P9A0N90.webp", 
  },
];

const Industry = () => {
  return (
    <section className="">
      <div className="templateContainer flex flex-col-reverse lg:flex-row w-full gap-10 md:gap-12 lg:gap-20">
        
        {/* LEFT SIDE: Grid of Cards */}
        <div className="w-full lg:w-1/2 pt-0 pb-10 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              {industries
                .filter((_, i) => i % 2 === 0)
                .map((item, idx) => (
                  <IndustryCard key={idx} {...item} />
                ))}
            </div>
            <div className="flex flex-col gap-4 md:gap-6 lg:mt-12">
              {industries
                .filter((_, i) => i % 2 !== 0)
                .map((item, idx) => (
                  <IndustryCard key={idx} {...item} />
                ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center pt-10 lg:py-0">
          <div className="lg:max-w-lg space-y-8">
            <div className="space-y-4">
              <p className="text-[12px] text-slate-500 tracking-widest ">INDUSTRY FOCUS</p>
              <h2 className="text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px]">
             Industries Driven by Insight, Not{" "}
                <span className="relative inline-block">
                Assumptions
                  <svg className="absolute -left-2.5 top-full w-[110%] h-4 -rotate-180" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M5 15 Q 50 25 95 15" stroke="#6c6bcf" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
             
              </h2>
            </div>
            <div className="space-y-4 font-sans">
              <p>
            Every industry in Dubai and the UAE operates differently — which is why our market research and feasibility studies are tailored to your specific sector. 

              </p>
              <p>
      We deliver industry-focused competitive analysis and strategic insights that help businesses enter new markets, reduce risk, and scale with confidence.
              </p>
              
            </div>
            
            <div className="pt-4">
               <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                Start a Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ title, desc, image }: any) => {
  return (
    <div className="relative overflow-hidden p-5 md:p-4 rounded-md bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[220px] md:min-h-[240px] flex flex-col justify-end group">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t  via-black/10 to-transparent from-black/30 transition-colors duration-300" />
        </div>
      )}

      {/* Text Content */}
      <div className="relative z-10">
        <h3 className="text-[17px] md:text-lg font-normal text-white mb-2">
          {title}
        </h3>

        <p className="text-white/80 text-sm font-light leading-relaxed mb-4 line-clamp-2">
          {desc}
        </p>

        <Link
          href="/projects"
          className="text-white font-medium text-xs inline-flex items-center gap-1 group/link bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all"
        >
          View Case Study 
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Industry;