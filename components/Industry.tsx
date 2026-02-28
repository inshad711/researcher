// "use client"
// import React from "react";
// import {
//   ShoppingCart,
//   HeartPulse,
//   Building2,
//   Briefcase,
//   Plane,
//   Utensils,
//   Hotel,
//   Car,
//   TrendingUp,
//   MoveRight,
//   ArrowRight,
// } from "lucide-react";
// import Link from "next/link";


// const industries = [
//   {
//     title: "Retail & Ecommerce",
//     desc: "Scalable online stores with smooth shopping flow.",
//     color: "orange-500",
//     icon: <ShoppingCart strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Healthcare",
//     desc: "Smart systems for clinics and patient care.",
//     color: "red-500",
//     icon: <HeartPulse strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Education & eLearning",
//     desc: "Interactive platforms for modern learning.",
//     color: "amber-500",
//     icon: <Utensils strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Travel & Tourism",
//     desc: "Booking and travel platforms that convert.",
//     color: "blue-500",
//     icon: <Plane strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Finance & Banking",
//     desc: "Secure fintech built for scale.",
//     color: "pink-500",
//     icon: <Building2 strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Technology & Consultancy",
//     desc: "Digital solutions for fast-growing brands.",
//     color: "violet-500",
//     icon: <Briefcase strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Logistics & Transportation",
//     desc: "Tracking and supply systems simplified.",
//     color: "emerald-500",
//     icon: <Plane strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Hospitality & Entertainment",
//     desc: "Experience-driven booking platforms.",
//     color: "cyan-500",
//     icon: <Hotel strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Automotive",
//     desc: "Showroom and service booking solutions.",
//     color: "rose-500",
//     icon: <Car strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Sports",
//     desc: "Club and fitness management systems.",
//     color: "lime-500",
//     icon: <TrendingUp strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Real Estate",
//     desc: "Property platforms that drive leads.",
//     color: "indigo-500",
//     icon: <TrendingUp strokeWidth={1} className="w-6 h-6" />,
//   },
//   {
//     title: "Food & Beverages",
//     desc: "Ordering and delivery made seamless.",
//     color: "yellow-500",
//     icon: <Utensils strokeWidth={1} className="w-6 h-6" />,
//   },
// ];

// const colorMap: any = {
//   "orange-500": {
//     bg: "bg-orange-500/10",
//     text: "text-orange-500",
//   },
//   "red-500": {
//     bg: "bg-red-500/10",
//     text: "text-red-500",
//   },
//   "amber-500": {
//     bg: "bg-amber-500/10",
//     text: "text-amber-500",
//   },
//   "blue-500": {
//     bg: "bg-blue-500/10",
//     text: "text-blue-500",
//   },
//   "pink-500": {
//     bg: "bg-pink-500/10",
//     text: "text-pink-500",
//   },
//   "violet-500": {
//     bg: "bg-violet-500/10",
//     text: "text-violet-500",
//   },
//   "emerald-500": {
//     bg: "bg-emerald-500/10",
//     text: "text-emerald-500",
//   },
//   "cyan-500": {
//     bg: "bg-cyan-500/10",
//     text: "text-cyan-500",
//   },
//   "rose-500": {
//     bg: "bg-rose-500/10",
//     text: "text-rose-500",
//   },
//   "lime-500": {
//     bg: "bg-lime-500/10",
//     text: "text-lime-500",
//   },
//   "indigo-500": {
//     bg: "bg-indigo-500/10",
//     text: "text-indigo-500",
//   },
//   "yellow-500": {
//     bg: "bg-yellow-500/10",
//     text: "text-yellow-500",
//   },
// };

// const Industry= () => {
//   return (
//     <section className="bg-gray-100">
//       <div className="templateContainer flex flex-col-reverse lg:flex-row w-full gap-10 md:gap-12 lg:gap-20">
//         {/* LEFT SIDE */}
//         <div className="w-full lg:w-1/2 pt-0 pb-10 lg:py-16">
//           {/* MOBILE: Single Column */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//             <div className="flex flex-col gap-3 md:gap-6">
//               {" "}
//               {industries
//                 .filter((_, i) => i % 2 === 0)
//                 .map((item, idx) => (
//                   <IndustryCard key={idx} {...item} />
//                 ))}{" "}
//             </div>{" "}
//             <div className="flex flex-col gap-6 lg:mt-12">
//               {" "}
//               {industries
//                 .filter((_, i) => i % 2 !== 0)
//                 .map((item, idx) => (
//                   <IndustryCard key={idx} {...item} />
//                 ))}{" "}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center pt-10 lg:py-0">
//           <div className="lg:max-w-lg  lg:mx-0 space-y-10">
//             <div className="space-y-4">
//               <p className="text-[12px] text-slate-500 tracking-widest font-medium">
//                 SERVICES
//               </p>
//               <h2 className="text-3xl md:text-4xl font-medium text-slate-900 ">
//                 <span className="relative inline-block">
//                   Industries
//                   <svg
//                     className="absolute -left-2.5 top-full w-[110%] h-4 -rotate-180"
//                     viewBox="0 0 100 20"
//                     preserveAspectRatio="none"
//                   >
//                     <path
//                       d="M5 15 Q 50 25 95 15"
//                       stroke="#6c6bcf"
//                       strokeWidth="2"
//                       fill="transparent"
//                     />
//                   </svg>
//                 </span>{" "}
//                 We Serve
//               </h2>
//             </div>

//             <p className="max-w-md lg:max-w-lg text-slate-700 font-light leading-relaxed ">
//               We have worked across multiple industry verticals over the years
//               and helped businesses in diverse domains. We have served
//               industries like Beauty & Salon, Real Estate, Finance, Travel,
//               Retail, Healthcare and many more.
//             </p>

//             <Link href="/contact" className="inline-block text-stRed ">
//               Interested? Share your idea.
//             </Link>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const IndustryCard = ({ title, desc, icon, color }: any) => {
//   const selectedColor = colorMap[color];

//   return (
//     <div
//       className={`p-5 md:p-7 rounded-xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300 group`}
//     >
//       <div
//         className={`w-10 h-10 md:w-12 md:h-12 mb-4 rounded-lg ${selectedColor.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
//       >
//         <div className={`${selectedColor.text}`}>{icon}</div>
//       </div>

//       <h3 className="text-[17px] md:text-lg font-medium text-slate-800 mb-2">
//         {title}
//       </h3>

//       <p className="text-slate-600 text-sm leading-relaxed mb-3">{desc}</p>

//       <Link
//         href="/projects"
//         className="text-black/90 font-medium text-xs inline-flex items-center gap-1"
//       >
//         View <ArrowRight size={14} strokeWidth={1.5} />
//       </Link>
//     </div>
//   );
// };

// export default Industry;


// "use client"
// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const industries = [
//   {
//     title: "Retail & Ecommerce",
//     desc: "Scalable online stores with smooth shopping flow.",
//     image: "/images/retail.jpg", 
//   },
//   {
//     title: "Healthcare",
//     desc: "Smart systems for clinics and patient care.",
//     image: "/images/healthcare.jpg",
//   },
//   {
//     title: "Education & eLearning",
//     desc: "Interactive platforms for modern learning.",
//     image: "/images/edu.jpg",
//   },
//   {
//     title: "Travel & Tourism",
//     desc: "Booking and travel platforms that convert.",
//     image: "/images/travel.jpg",
//   },
//   {
//     title: "Finance & Banking",
//     desc: "Secure fintech built for scale.",
//     image: "/images/finance.jpg",
//   },
//   {
//     title: "Technology & Consultancy",
//     desc: "Digital solutions for fast-growing brands.",
//     image: "/images/tech.jpg",
//   },
//   {
//     title: "Logistics & Transportation",
//     desc: "Tracking and supply systems simplified.",
//     image: "/images/logistics.jpg",
//   },
//   {
//     title: "Hospitality & Entertainment",
//     desc: "Experience-driven booking platforms.",
//     image: "/images/hospitality.jpg",
//   },
//   {
//     title: "Automotive",
//     desc: "Showroom and service booking solutions.",
//     image: "/images/automotive.jpg",
//   },
//   {
//     title: "Sports",
//     desc: "Club and fitness management systems.",
//     image: "/images/sports.jpg",
//   },
//   {
//     title: "Real Estate",
//     desc: "Property platforms that drive leads.",
//     image: "/images/realestate.jpg",
//   },
//   {
//     title: "Food & Beverages",
//     desc: "Ordering and delivery made seamless.",
//     image: "/images/food.jpg",
//   },
// ];

// const Industry = () => {
//   return (
//     <section className="bg-gray-100">
//       <div className="templateContainer flex flex-col-reverse lg:flex-row w-full gap-10 md:gap-12 lg:gap-20">
//         {/* LEFT SIDE: Grid of Cards */}
//         <div className="w-full lg:w-1/2 pt-0 pb-10 lg:py-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
//             <div className="flex flex-col gap-3 md:gap-6">
//               {industries
//                 .filter((_, i) => i % 2 === 0)
//                 .map((item, idx) => (
//                   <IndustryCard key={idx} {...item} />
//                 ))}
//             </div>
//             <div className="flex flex-col gap-6 lg:mt-12">
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
//           <div className="lg:max-w-lg space-y-10">
//             <div className="space-y-4">
//               <p className="text-[12px] text-slate-500 tracking-widest font-medium">SERVICES</p>
//               <h2 className="text-3xl md:text-4xl font-medium text-slate-900 ">
//                 <span className="relative inline-block">
//                   Industries
//                   <svg className="absolute -left-2.5 top-full w-[110%] h-4 -rotate-180" viewBox="0 0 100 20" preserveAspectRatio="none">
//                     <path d="M5 15 Q 50 25 95 15" stroke="#6c6bcf" strokeWidth="2" fill="transparent" />
//                   </svg>
//                 </span>{" "}
//                 We Serve
//               </h2>
//             </div>
//             <p className="max-w-md lg:max-w-lg text-slate-700 font-light leading-relaxed ">
//               We have worked across multiple industry verticals over the years and helped businesses in diverse domains.
//             </p>
//             <Link href="/contact" className="inline-block text-red-500 font-medium">
//               Interested? Share your idea.
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const IndustryCard = ({ title, desc, image }: any) => {
//   return (
//     <div className="relative overflow-hidden p-5 md:p-7 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[220px] md:min-h-[240px] flex flex-col justify-end group">
//       {/* Background Image */}
//       {image && (
//         <div className="absolute inset-0 z-0">
//           <Image 
//             src={image} 
//             alt={title} 
//             fill 
//             className="object-cover group-hover:scale-110 transition-transform duration-700"
//           />
//           {/* Permanent Dark Overlay */}
//           <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
//         </div>
//       )}

//       {/* Text Content */}
//       <div className="relative z-10">
//         <h3 className="text-[17px] md:text-lg font-medium text-white mb-2">
//           {title}
//         </h3>

//         <p className="text-white/90 text-sm leading-relaxed mb-3">
//           {desc}
//         </p>

//         <Link
//           href="/projects"
//           className="text-white font-medium text-xs inline-flex items-center gap-1 group/link"
//         >
//           View Case Study 
//           <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Industry;


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
              <p className="text-[12px] text-slate-500 tracking-widest ">EXPERTISE & INNOVATION</p>
              <h2 className="text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px]">
                   Industries Driven by{" "}
                <span className="relative inline-block">
                Research
                  <svg className="absolute -left-2.5 top-full w-[110%] h-4 -rotate-180" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M5 15 Q 50 25 95 15" stroke="#6c6bcf" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
             
              </h2>
            </div>
            <div className="space-y-4 font-sans">
              <p>
                We don't just build software; we solve complex challenges through extensive Market Research and User Behavior Analysis.
              </p>
              <p>
                Our R&D team stays ahead of emerging trends, ensuring that the solutions we deliver are not only modern but future-proofed against shifting industry standards.
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