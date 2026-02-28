
// "use client"
// import React from 'react';
// import { MapPin, Calendar, Briefcase, User, ArrowRight } from 'lucide-react';


// const CaseStudyCard = ({ data }) => {
//   return (
//     <div className="group flex flex-col md:flex-row w-full gap-4 md:gap-6 mb-16">
      
//       {/* 1. Main Content Block (Image) */}
//       <div className="flex-1 border border-zinc-200  rounded-2xl overflow-hidden bg-white transition-all duration-500 group-hover:border-zinc-400  shadow-sm group-hover:shadow-md">
//         <div className="relative aspect-video w-full h-full bg-zinc-100">
//           <img 
//             src={data.image} 
//             alt={data.client}
//             className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
//           />
          
//           {/* Overlay gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

//           {/* Text Overlay (Bottom Left) */}
//           <div className="absolute bottom-0 left-0 p-8 w-full">
//             <div className="flex items-center gap-3 text-white">
//               <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
//                 {data.client}
//               </h3>
//               <span className="text-white/30 text-2xl font-light">/</span>
//               <p className="text-white/70 font-medium text-lg md:text-xl">
//                 {data.service}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. Metadata Sidebar Block */}
//       <div className="w-full md:w-80 p-8 flex flex-col justify-between border border-gray-200  rounded-2xl bg-white transition-all duration-500 shadow-sm">
//         <div className="space-y-6">
        
//           <div className="space-y-5">
//   <div className="flex flex-col gap-1">
//     <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
//       <div className="p-1.5 bg-purple-50 rounded-lg">
//         <User size={18} className="text-purple-500" />
//       </div> 
//       Client
//     </span>
//     <p className="text-zinc-900 font-semibold">{data.client}</p>
//   </div>

//   <div className="flex flex-col gap-1">
//     <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
//       <div className="p-1.5 bg-purple-50 rounded-lg">
//         <MapPin size={18} className="text-purple-500" />
//       </div> 
//       Location
//     </span>
//     <p className="text-zinc-900 font-semibold">{data.location}</p>
//   </div>

//   <div className="flex flex-col gap-1">
//     <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
//       <div className="p-1.5 bg-purple-50 rounded-lg">
//         <Calendar size={18} className="text-purple-500" />
//       </div> 
//       Year
//     </span>
//     <p className="text-zinc-900 font-semibold">{data.year}</p>
//   </div>

//   <div className="flex flex-col gap-1">
//     <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
//       <div className="p-1.5 bg-purple-50 rounded-lg">
//         <Briefcase size={18} className="text-purple-500" />
//       </div> 
//       Service
//     </span>
//     <p className="text-zinc-900 font-semibold">{data.service}</p>
//   </div>
// </div>
//         </div>

//         {/* View Case Study Button */}
//         <button className="mt-8 group/btn flex items-center justify-between w-full px-5 py-4 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-xl font-bold transition-all hover:bg-black dark:hover:bg-white active:scale-[0.98]">
//           <span className="text-sm">View Case Study</span>
//           <ArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function CaseStudieMain() {
//   const caseStudies = [
//     {
//       id: 1,
//       client: "Global Tech Solutions",
//       service: "Digital Transformation",
//       location: "San Francisco, CA",
//       year: "2024",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
//     },
//     {
//       id: 2,
//       client: "Artisan Coffee Roasters",
//       service: "Brand Strategy & Design",
//       location: "Brooklyn, NY",
//       year: "2023",
//       image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2400"
//     }
//   ];

//   return (
//     <div className="text-zinc-900">
      
//       {/* Animation Styles */}
//       <style>{`
//         @keyframes reveal {
//           0% { transform: translateY(100%); }
//           100% { transform: translateY(0); }
//         }
//         .reveal-text {
//           display: inline-block;
//           animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
//         }
//         .reveal-container {
//           overflow: hidden;
//           vertical-align: bottom;
//         }
//       `}</style>

//       {/* Header Section */}
//       <header className="py-12 px-6 max-w-7xl mx-auto text-center">
//         <h1 className="text-7xl md:text-5xl font-medium tracking-tighter uppercase mb-6 text-zinc-900  leading-[0.85]">
//           <span className="reveal-container inline-block">
//             <span className="reveal-text">Work</span>
//           </span>{" "}
//           {/* <br /> */}
//           <span className="reveal-container inline-block">
//             <span className="reveal-text" style={{ animationDelay: '0.2s' }}>Archive</span>
//           </span>
//         </h1>
//         <p className="text-slate-500 text-lg md:text-[18px] max-w-2xl mx-auto font-medium opacity-100">
//           A selection of digital experiences and brand narratives crafted with precision.
//         </p>
//       </header>

//       {/* Main Content Area */}
//       <main className="px-6 pb-32 max-w-7xl mx-auto">
//         <div className="space-y-4">
//           {caseStudies.map((study) => (
//             <CaseStudyCard key={study.id} data={study} />
//           ))}
//         </div>
        
      
//       </main>

 
//     </div>
//   );
// }


//////solved
"use client"
import React from 'react';
import { MapPin, Calendar, Briefcase, User, ArrowRight } from 'lucide-react';

// Define the interface for the case study data
interface CaseStudyData {
  id: number;
  client: string;
  service: string;
  location: string;
  year: string;
  image: string;
}

// Apply the interface to the component props
const CaseStudyCard = ({ data }: { data: CaseStudyData }) => {
  return (
    <div className="group flex flex-col md:flex-row w-full gap-4 md:gap-6 mb-16">
      
      {/* 1. Main Content Block (Image) */}
      <div className="flex-1 border border-zinc-200  rounded-2xl overflow-hidden bg-white transition-all duration-500 group-hover:border-zinc-400  shadow-sm group-hover:shadow-md">
        <div className="relative aspect-video w-full h-full bg-zinc-100">
          <img 
            src={data.image} 
            alt={data.client}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Text Overlay (Bottom Left) */}
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex items-center gap-3 text-white">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                {data.client}
              </h3>
              <span className="text-white/30 text-2xl font-light">/</span>
              <p className="text-white/70 font-normal text-lg md:text-xl">
                {data.service}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Metadata Sidebar Block */}
      <div className="w-full md:w-80 p-8 flex flex-col justify-between border border-gray-200  rounded-2xl bg-white transition-all duration-500 shadow-sm">
        <div className="space-y-6">
        
          <div className="space-y-5">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                <div className="p-1.5 bg-purple-50 rounded-lg">
                  <User size={18} className="text-purple-500" />
                </div> 
                Client
              </span>
              <p className="[#101010] font-medium">{data.client}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <div className="p-1.5 bg-purple-50 rounded-lg">
                  <MapPin size={18} className="text-purple-500" />
                </div> 
                Location
              </span>
              <p className="[#101010] font-medium">{data.location}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <div className="p-1.5 bg-purple-50 rounded-lg">
                  <Calendar size={18} className="text-purple-500" />
                </div> 
                Year
              </span>
              <p className="[#101010] font-medium">{data.year}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                <div className="p-1.5 bg-purple-50 rounded-lg">
                  <Briefcase size={18} className="text-purple-500" />
                </div> 
                Service
              </span>
              <p className="[#101010] font-medium">{data.service}</p>
            </div>
          </div>
        </div>

        {/* View Case Study Button */}
        <button className="mt-8 group/btn flex items-center justify-between w-full px-5 py-4 bg-zinc-950  text-white  rounded-xl font-medium transition-all hover:bg-black dark:hover:bg-white active:scale-[0.98]">
          <span className="text-sm">View Case Study</span>
          <ArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </div>
  );
};

export default function CaseStudieMain() {
  // Optionally strongly type the array here as well
  const caseStudies: CaseStudyData[] = [
    {
      id: 1,
      client: "Global Tech Solutions",
      service: "Digital Transformation",
      location: "San Francisco, CA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
    },
    {
      id: 2,
      client: "Artisan Coffee Roasters",
      service: "Brand Strategy & Design",
      location: "Brooklyn, NY",
      year: "2023",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2400"
    }
  ];

  return (
    <div className="text-zinc-900">
      
      {/* Animation Styles */}
      <style>{`
        @keyframes reveal {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        .reveal-text {
          display: inline-block;
          animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .reveal-container {
          overflow: hidden;
          vertical-align: bottom;
        }
      `}</style>

      {/* Header Section */}
      <header className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-[38px] max-w-2xl mx-auto font-normal text-[#101010] leading-[42.2px] uppercase mb-4">
          <span className="reveal-container inline-block">
            <span className="reveal-text">Work</span>
          </span>{" "}
          {/* <br /> */}
          <span className="reveal-container inline-block">
            <span className="reveal-text" style={{ animationDelay: '0.2s' }}>Archive</span>
          </span>
        </h1>
        <p className="font-sans max-w-xl mx-auto">
          A selection of digital experiences and brand narratives crafted with precision.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="px-4 max-w-7xl mx-auto">
        <div className="space-y-4">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} data={study} />
          ))}
        </div>
      </main>

    </div>
  );
}