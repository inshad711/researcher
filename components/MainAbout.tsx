
// "use client";
// import React from 'react';
// import { Users, Laptop, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

// /**
//  * Custom SVG for the hand-drawn underline effect seen in the design.
//  */
// const SquiggleUnderline = () => (
//   <svg
//     className="absolute -bottom-2 left-0 w-full"
//     viewBox="0 0 200 12"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M2 10C30 4 100 2 198 10"
//       stroke="#309255"
//       strokeWidth="3"
//       strokeLinecap="round"
//     />
//     <path
//       d="M5 8C35 3 95 3 190 8"
//       stroke="#309255"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       opacity="0.5"
//     />
//   </svg>
// );

// const FeatureCard = ({ icon: Icon, title, description, description2 }) => (
//   <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
//     <div className="flex items-center gap-4 mb-6">
//       <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600">
//         <Icon size={28} />
//       </div>
//       <h3 className="text-xl font-bold text-slate-800">{title}</h3>
//     </div>
//     <div className="space-y-4 text-gray-500 leading-relaxed">
//       <p>{description}</p>
//       {description2 && <p>{description2}</p>}
//     </div>
//   </div>
// );

// export default function MainAbout() {
//   return (
//     <main className="bg-white">
//       {/* Top Section: About */}
//       <section className="templateContainer">
//         <div className="">
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
//             {/* Left Column: Image with Badge */}
//             <div className="w-full lg:w-1/2 relative">
//               <div className="relative rounded-xl overflow-hidden shadow-2xl group">
//                 <img 
//                   src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Student using laptop" 
//                   className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/600x500?text=About+Edule";
//                   }}
//                 />
//               </div>

//               {/* Experience Badge */}
//               {/* <div className="absolute top-8 right-8 bg-[#309255] rounded-xl shadow-lg p-1 flex flex-col items-center w-24 md:w-28 transform hover:scale-105 transition-transform">
//                 <div className="bg-white w-full rounded-t-lg p-3 flex justify-center">
//                   <BookOpen className="text-[#309255]" size={32} />
//                 </div>
//                 <div className="p-3 text-center text-white">
//                   <span className="block text-xl font-bold">28+</span>
//                   <span className="text-[10px] md:text-xs font-medium uppercase tracking-tighter leading-tight">
//                     Years Experience
//                   </span>
//                 </div>
//               </div> */}
//             </div>

//             {/* Right Column: Content */}
//             <div className="w-full lg:w-1/2">
//               <div className="space-y-6">
//                 <h5 className="text-purple-700 font-semibold text-lg tracking-wide">
//                   Welcome to Edule.
//                 </h5>
//                 <h2 className="text-3xl md:text-[38px] font-normal text-gray-900 leading-tight tracking-tighter">
//                   You can join with Edule and upgrade your skill for your{' '}
//                   <span className="relative inline-block text-purple-600 ">
//                     bright future.
//                     <SquiggleUnderline />
//                   </span>
//                 </h2>
//                 <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed  max-w-xl">
//                   Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer 
//                   took galley type and scmbled make type specimen book. It has survived not only 
//                   five centuries.
//                 </p>
//                <a
//               href="/innovation"
//               className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 to-purple-600 text-white px-5 py-3 font-medium rounded-full transition-all hover:shadow-xl active:scale-95"
//             >
//               <span>Our Research Process</span>
//               <div className="relative w-5 h-5 overflow-hidden">
//                 <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
//                 <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
//               </div>
//             </a>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </section>

//       {/* Bottom Section: Features */}
//       <section className="py-12 bg-gray-50/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <FeatureCard 
//               icon={Users}
//               title="Top Instructors"
//               description="Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived."
//               description2="Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make."
//             />
//             <FeatureCard 
//               icon={Laptop}
//               title="Portable Program"
//               description="Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived."
//               description2="Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make."
//             />
//             <FeatureCard 
//               icon={TrendingUp}
//               title="Improve Quickly"
//               description="Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived."
//               description2="Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make."
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


/////////new


// "use client";
// import React from 'react';
// import { Users, Laptop, TrendingUp, BookOpen, ArrowRight, LucideIcon } from 'lucide-react';

// /**
//  * Interface for FeatureCard Props
//  */
// interface FeatureCardProps {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   description2?: string;
// }



// const SquiggleUnderline: React.FC = () => (
//   <span 
//     className="absolute -bottom-4 left-0 w-full h-6 bg-no-repeat bg-bottom bg-contain"
//     style={{ 
//       backgroundImage: `url('/image/shape-4.webp')`,
//       // You can also use a local path like '/images/squiggle.png'
//     }}
//     aria-hidden="true"
//   />
// );

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, description2 }) => (

//   <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
//   <div className="flex items-center gap-4 mb-6">
//     {/* Subtle Glass-morphism Gradient Icon Container */}
//     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center text-purple-600 shrink-0 ">
//       <Icon size={28} />
//     </div>
//     <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
//       {title}
//     </h3>
//   </div>
//   <div className="space-y-4 text-gray-500 leading-relaxed">
//     <p>{description}</p>
//     {description2 && <p>{description2}</p>}
//   </div>
// </div>
// );

// export default function MainAbout() {
//   // Fix for the Image Error Event in TS
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     e.currentTarget.src = "https://via.placeholder.com/600x500?text=About+Edule";
//   };

//   return (
//     <main className="bg-white">
//       {/* Top Section: About */}
//       <section className="templateContainer py-16">
//         <div className="">
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
//             {/* Left Column: Image with Badge */}
//             <div className="w-full lg:w-1/2 relative">
//               <div className="relative rounded-xl overflow-hidden shadow-2xl group">
//                 <img 
//                   src="/image/people-office-analyzing-checking-finance-graphs.jpg" 
//                   alt="Student using laptop" 
//                   className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
//                   onError={handleImageError}
//                 />
//               </div>
//             </div>

//             {/* Right Column: Content */}
//             <div className="w-full lg:w-1/2">
//               <div className="space-y-6">
//                 <h5 className="text-black font-semibold text-lg tracking-wide">
//                   Welcome to Edule
//                 </h5>
//                 <h2 className="text-3xl md:text-[38px] font-normal text-gray-900 leading-tight tracking-tighter">
//                   You can join with Edule and upgrade your skill for your{' '}
//                   <span className="relative inline-block text-purple-600 ">
//                     bright future.
//                     <SquiggleUnderline />
//                   </span>
//                 </h2>
//                 <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed  max-w-xl">
//                   Lorem Ipsum has been the industry's standard dummy text ever since unknown printer 
//                   took galley type and scrambled make type specimen book. It has survived not only 
//                   five centuries.
//                 </p>
//                 <a
//                   href="/innovation"
//                   className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 to-purple-600 text-white px-5 py-3 font-medium rounded-full transition-all hover:shadow-xl active:scale-95"
//                 >
//                   <span>Our Research Process</span>
//                   <div className="relative w-5 h-5 overflow-hidden">
//                     <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
//                     <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
//                   </div>
//                 </a>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </section>

//       {/* Bottom Section: Features */}
//       <section className="py-12 bg-gray-50/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             <FeatureCard 
//               icon={Users}
//               title="Top Instructors"
//               description="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled to make type specimen book has survived."
//               description2="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled make."
//             />
//             <FeatureCard 
//               icon={Laptop}
//               title="Portable Program"
//               description="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled to make type specimen book has survived."
//               description2="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled make."
//             />
//             <FeatureCard 
//               icon={TrendingUp}
//               title="Improve Quickly"
//               description="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled to make type specimen book has survived."
//               description2="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled make."
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


/////new


"use client";
import React from 'react';
import { Users, Laptop, TrendingUp, ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

/**
 * Interface for FeatureCard Props
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  description2?: string;
}

const SquiggleUnderline: React.FC = () => (
  <span 
    className="absolute -bottom-5 left-0 w-full h-6 bg-no-repeat bg-bottom bg-contain"
    style={{ 
      backgroundImage: `url('/image/shape-4.webp')`,
    }}
    aria-hidden="true"
  />
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, description2 }) => (
  <div className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center text-purple-600 shrink-0 ">
        <Icon size={28} />
      </div>
      <h3 className="text-[20px] font-sans font-medium text-slate-800 group-hover:text-purple-700 transition-colors">
        {title}
      </h3>
    </div>
    <div className="space-y-4  font-sans">
      <p>{description}</p>
      {/* {description2 && <p>{description2}</p>} */}
    </div>
  </div>
);

export default function MainAbout() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/600x500?text=About+Edule";
  };

  return (
    <main className="bg-white">
      <section className="templateContainer py-16">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column: Image with Reveal Animation */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                // 2. Animation Logic: Center to Sides
                initial={{ clipPath: 'inset(0% 50% 0% 50%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.7, ease: [0.4, 0, 0.2, 1] }}
                className="relative rounded-[5px] overflow-hidden shadow-2xl group"
              >
                <img 
                  src="/image/people-office-analyzing-checking-finance-graphs.webp" 
                  alt="Student using laptop" 
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                />
              </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <h5 className="tracking-wide font-sans">
                  Welcome to Researcher
                </h5>
                <h2 className="text-3xl md:text-[38px] font-heading  font-normal text-[#101010] leading-[37.2px] md:leading-[42.2px] ">
                  You can join with Edule and upgrade your skill for your{' '}
                  <span className="relative inline-block text-purple-600 ">
                    bright future.
                    {/* <SquiggleUnderline /> */}
                  </span>
                </h2>
                <p className="font-sans max-w-xl">
                  Lorem Ipsum has been the industry's standard dummy text ever since unknown printer 
                  took galley type and scrambled make type specimen book. It has survived not only 
                  five centuries.
                </p>
                <a
                  href="/innovation"
                  className="group font-sans inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 to-purple-600 text-white px-5 py-3 rounded-full transition-all hover:shadow-xl active:scale-95"
                >
                  <span>Our Research Process</span>
                  <div className="relative w-5 h-5 overflow-hidden">
                    <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
                    <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Features */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard 
              icon={Users}
              title="Top Instructors"
              description="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled to make type specimen book has survived."
              description2="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled make."
            />
            <FeatureCard 
              icon={Laptop}
              title="Portable Program"
              description="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled to make type specimen book has survived."
              description2="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled make."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Improve Quickly"
              description="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled to make type specimen book has survived."
              description2="Lorem Ipsum has been the industry's standard dummy text since the when took and scrambled make."
            />
          </div>
        </div>
      </section>
    </main>
  );
}