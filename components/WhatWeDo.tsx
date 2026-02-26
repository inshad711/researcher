
// "use client";
// import { ArrowRight, Link } from "lucide-react";

// export default function WhatWeDo(){
//     return(
//         <section>
//               <section className="templateContainer relative pt-0">
//         <div className="">
//        <div className="flex flex-col items-center justify-center text-center space-y-4">
//   {/* Heading */}
//           <h2 className="text-3xl md:text-5xl font-medium text-slate-900">
//           What we do
//           </h2>
  
//   {/* Description */}
//           <p className="max-w-lg text-slate-600 text-lg leading-relaxed">
//             Explore our curated selection of top-tier collections, designed to bring 
//             style and functionality to your everyday lifestyle.
//           </p>
//         </div>

//           <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             {allServices.map((service) => (
//               <article
//                 key={service.title}
//                 className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
//                   {service.category}
//                 </p>
//                 <h3 className="mt-3 text-lg font-semibold leading-snug">{service.title}</h3>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
//                 <Link
//                   href="/contact"
//                   className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:gap-3"
//                 >
//                   Learn More
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//         </section>
//     )
// }


//////new

// "use client";
// import { ArrowRight, Settings, ShieldCheck, Zap, Heart } from "lucide-react";
// // Renamed the lucide icon to avoid conflict with Next.js Link
// import Link from "next/link"; 

// const allServices = [
//   {
//     category: "Design",
//     title: "Bespoke Interior Styling",
//     description: "Tailored interior concepts that reflect your personality while maximizing the functionality of your living space.",
//   },
//   {
//     category: "Quality",
//     title: "Premium Craftsmanship",
//     description: "Every piece in our collection is sourced from artisans who prioritize durability and sustainable materials.",
//   },
//   {
//     category: "Service",
//     title: "Concierge Assembly",
//     description: "White-glove delivery and professional setup to ensure your new space is ready the moment we leave.",
//   },
//   {
//     category: "Support",
//     title: "Lifetime Assistance",
//     description: "Our relationship doesn't end at delivery. We provide ongoing care guides and repair support for all products.",
//   },
// ];

// export default function WhatWeDo() {
//   return (
//     <section className=" pb-8">
//       <section className="templateContainer relative mx-auto max-w-7xl px-4">
//         <div className="flex flex-col items-center justify-center text-center space-y-4">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-5xl font-medium text-slate-900">
//             What we do
//           </h2>

//           {/* Description */}
//           <p className="max-w-lg text-slate-600 text-lg leading-relaxed">
//             Explore our curated selection of top-tier collections, designed to bring 
//             style and functionality to your everyday lifestyle.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {allServices.map((service) => (
//             <article
//               key={service.title}
//               className="group rounded-2xl shadow-sm border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
//                 {/* Logic to swap icons based on category if desired */}
//                 <Settings className="h-5 w-5" />
//               </div>
              
//               <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
//                 {service.category}
//               </p>
              
//               <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
//                 {service.title}
//               </h3>
              
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 {service.description}
//               </p>
              
//               <Link
//                 href="/contact"
//                 className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:gap-3"
//               >
//                 Learn More
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </article>
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// }


/////new
"use client";
import { ArrowRight, Settings, ShieldCheck, Zap, Heart } from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    category: "Design",
    title: "Bespoke Interior Styling",
    description: "Tailored interior concepts that reflect your personality while maximizing the functionality of your living space.",
    icon: Heart,
  },
  {
    category: "Quality",
    title: "Premium Craftsmanship",
    description: "Every piece in our collection is sourced from artisans who prioritize durability and sustainable materials.",
    icon: ShieldCheck,
  },
  {
    category: "Service",
    title: "Concierge Assembly",
    description: "White-glove delivery and professional setup to ensure your new space is ready the moment we leave.",
    icon: Zap,
  },
  {
    category: "Support",
    title: "Lifetime Assistance",
    description: "Our relationship doesn't end at delivery. We provide ongoing care guides and repair support for all products.",
    icon: Settings,
  },
];

export default function WhatWeDo() {
  return (
    <section className=" pb-8">
      {/* SVG Gradient Definition - Hidden from view */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#6366f1" offset="0%" />
          <stop stopColor="#a855f7" offset="100%" />
        </linearGradient>
      </svg>

      <section className="templateContainer relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900">
            What we do
          </h2>

          <p className="max-w-lg text-slate-600 text-lg leading-relaxed">
            Explore our curated selection of top-tier collections, designed to bring 
            style and functionality to your everyday lifestyle.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {allServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl shadow-sm border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-900">
                  <IconComponent 
                    className="h-5 w-5 transition-colors group-hover:!stroke-white" 
                    style={{ stroke: "url(#icon-gradient)" }}
                  />
                </div>
                
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {service.category}
                </p>
                
                <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                  {service.title}
                </h3>
                
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                
                {/* <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link> */}
              </article>
            );
          })}
        </div>
      </section>
    </section>
  );
}