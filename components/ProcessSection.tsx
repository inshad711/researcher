// "use client";

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

// interface Step {
//   id: string;
//   title: string;
//   description: string;
// }

// const PROCESS_STEPS: Step[] = [
//   {
//     id: "01",
//     title: "Discovery & Strategy",
//     description: "We uncover your goals, audience, and challenges to build a clear roadmap for success."
//   },
//   {
//     id: "02",
//     title: "Design & Prototyping",
//     description: "Transforming insights into bold, user-focused designs that connect and convert."
//   },
//   {
//     id: "03",
//     title: "Development & Launch",
//     description: "From pixel to code, we craft high-performing websites and launch them flawlessly."
//   },
//   {
//     id: "04",
//     title: "Optimization & Scale",
//     description: "We monitor, refine, and enhance to ensure continuous growth and lasting impact."
//   }
// ];

// /**
//  * Solves the "Hook inside loop" error by isolating useTransform 
//  * into its own component for each indicator dot.
//  */
// const StepIndicator = ({ 
//   stepId, 
//   index, 
//   total, 
//   progress 
// }: { 
//   stepId: string; 
//   index: number; 
//   total: number; 
//   progress: MotionValue<number> 
// }) => {
//   const threshold = index / (total - 1);
  
//   const borderColor = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     ["#D4D8DD", "#E1443A"]
//   );

//   const borderWidth = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     [1.5, 3]
//   );

//   return (
//     <div className="relative w-9 h-9 -left-[17px] flex items-center justify-center">
//       <motion.div
//         className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[14px] font-bold text-[#171717] shadow-sm z-20 border-solid"
//         style={{ borderColor, borderWidth }}
//       >
//         {stepId}
//       </motion.div>
//     </div>
//   );
// };

// const StepCard = ({ step }: { step: Step }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-10%" }}
//       transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
//       className="mb-[18px] last:mb-0 w-full"
//     >
//       <div className="group bg-white border border-[#EBECF0] rounded-[32px] p-10 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500">
//         <h5 className="text-[22px] md:text-[20px] font-semibold text-[#5D636F] mb-5 group-hover:text-[#0A0A0A] transition-colors duration-300">
//           {step.title}
//         </h5>
//         <p className="text-[#404040] text-md md:text-ld leading-relaxed max-w-[440px]">
//           {step.description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// const ProcessSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 40%", "end 60%"]
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-32 bg-white" id="section-process">
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32">
        
//         {/* Left Side Content */}
//         <div className="lg:sticky lg:top-32 h-fit space-y-3">
//           <div className="flex items-center gap-3">
//             <div className="w-6 h-6 text-[#E1443A]">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2L2 7L12 12L22 7L12 2Z" />
//                 <path d="M2 17L12 22L22 17" />
//                 <path d="M2 12L12 17L22 12" />
//               </svg>
//             </div>
//             <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#404040]">Process</span>
//           </div>

//           <h2 className="text-[42px] md:text-[56px] lg:text-[38px] font-bold leading-[1.1] tracking-tight">
//             <span className="text-[#0A0A0A] block">Proven & effective process.</span>
           
//             <span className="text-[#5D636F]">That delivers results.</span>
//           </h2>

//           <p className="text-[18px] md:text-[18px] text-[#404040] leading-relaxed max-w-[480px]">
//             We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
//           </p>
//         </div>

//         {/* Right Side Timeline */}
//         <div ref={containerRef} className="relative">
//           <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px]">
//             <div className="absolute inset-0 bg-[#E4E4E7]" />
//             <motion.div
//               className="absolute top-0 left-0 w-full bg-[#E1443A] origin-top"
//               style={{ height: "100%", scaleY }}
//             />

//             <div className="absolute inset-0 flex flex-col justify-between py-4">
//               {PROCESS_STEPS.map((step, idx) => (
//                 <StepIndicator 
//                   key={step.id} 
//                   stepId={step.id} 
//                   index={idx} 
//                   total={PROCESS_STEPS.length} 
//                   progress={scrollYProgress} 
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="pl-20 md:pl-23">
//             {PROCESS_STEPS.map((step) => (
//               <StepCard key={step.id} step={step} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

// "use client";

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

// interface Step {
//   id: string;
//   title: string;
//   description: string;
// }

// const PROCESS_STEPS: Step[] = [
//   {
//     id: "01",
//     title: "Creative Analysis",
//     description: "We explore novel and creative ways to analyze and present data in order to spot unnoticed trends."
//   },
//   {
//     id: "02",
//     title: "Strategic Design",
//     description: "We ask questions, design studies, manage projects, analyze data, and dialogue with clients about our findings."
//   },
//   {
//     id: "03",
//     title: "Data Transformation",
//     description: "We transform data into practical growth and revenue-generating plans for your company."
//   },
//   {
//     id: "04",
//     title: "Informed Decisions",
//     description: "We provide our clients with the tools they need to make informed business decisions."
//   }
// ];

// const StepIndicator = ({ 
//   stepId, 
//   index, 
//   total, 
//   progress 
// }: { 
//   stepId: string; 
//   index: number; 
//   total: number; 
//   progress: MotionValue<number> 
// }) => {
//   const threshold = index / (total - 1);
  
//   const borderColor = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     ["#D4D8DD", "#E1443A"]
//   );

//   const borderWidth = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     [1.5, 3]
//   );

//   return (
//     <div className="relative w-9 h-9 -left-[17px] flex items-center justify-center">
//       <motion.div
//         className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[14px] font-bold text-[#171717] shadow-sm z-20 border-solid"
//         style={{ borderColor, borderWidth }}
//       >
//         {stepId}
//       </motion.div>
//     </div>
//   );
// };

// const StepCard = ({ step }: { step: Step }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-10%" }}
//       transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
//       className="mb-[18px] last:mb-0 w-full"
//     >
//       <div className="group bg-white border border-[#EBECF0] rounded-[32px] p-10 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500">
//         <h5 className="text-[22px] md:text-[20px] font-semibold text-[#5D636F] mb-4 group-hover:text-[#0A0A0A] transition-colors duration-300">
//           {step.title}
//         </h5>
//         <p className="text-[#404040] text-md md:text-ld leading-relaxed max-w-[440px]">
//           {step.description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// const ProcessSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 40%", "end 60%"]
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-32 bg-white" id="section-process">
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32">
        
//         {/* Left Side Content */}
//         <div className="lg:sticky lg:top-32 h-fit space-y-3">
//           <div className="flex items-center gap-3">
//             <div className="w-6 h-6 text-[#E1443A]">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2L2 7L12 12L22 7L12 2Z" />
//                 <path d="M2 17L12 22L22 17" />
//                 <path d="M2 12L12 17L22 12" />
//               </svg>
//             </div>
//             <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#404040]">Process</span>
//           </div>

//           <h2 className="text-[42px] md:text-[56px] lg:text-[38px] font-bold leading-[1.1] tracking-tight">
//             <span className="text-[#0A0A0A] block">Proven & effective process.</span>
//             <span className="text-[#5D636F]">That delivers results.</span>
//           </h2>

//           <p className="text-[18px] md:text-[18px] text-[#404040] leading-relaxed max-w-[480px]">
//             We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
//           </p>
//         </div>

//         {/* Right Side Timeline */}
//         <div ref={containerRef} className="relative">
//           <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px]">
//             <div className="absolute inset-0 bg-[#E4E4E7]" />
//             <motion.div
//               className="absolute top-0 left-0 w-full bg-[#E1443A] origin-top"
//               style={{ height: "100%", scaleY }}
//             />

//             <div className="absolute inset-0 flex flex-col justify-between py-4">
//               {PROCESS_STEPS.map((step, idx) => (
//                 <StepIndicator 
//                   key={step.id} 
//                   stepId={step.id} 
//                   index={idx} 
//                   total={PROCESS_STEPS.length} 
//                   progress={scrollYProgress} 
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="pl-20 md:pl-23">
//             {PROCESS_STEPS.map((step) => (
//               <StepCard key={step.id} step={step} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;


// "use client";

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

// interface Step {
//   id: string;
//   title: string;
//   description: string;
// }

// const PROCESS_STEPS: Step[] = [
//   {
//     id: "01",
//     title: "Creative Analysis",
//     description: "We explore novel and creative ways to analyze and present data in order to spot unnoticed trends."
//   },
//   {
//     id: "02",
//     title: "Strategic Design",
//     description: "We ask questions, design studies, manage projects, analyze data, and dialogue with clients about our findings."
//   },
//   {
//     id: "03",
//     title: "Data Transformation",
//     description: "We transform data into practical growth and revenue-generating plans for your company."
//   },
//   {
//     id: "04",
//     title: "Informed Decisions",
//     description: "We provide our clients with the tools they need to make informed business decisions."
//   }
// ];

// const StepIndicator = ({ 
//   stepId, 
//   index, 
//   total, 
//   progress 
// }: { 
//   stepId: string; 
//   index: number; 
//   total: number; 
//   progress: MotionValue<number> 
// }) => {
//   const threshold = index / (total - 1);
  
//   const borderColor = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     ["#D4D8DD", "#E1443A"]
//   );

//   const borderWidth = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     [1.5, 3]
//   );

//   return (
//     /* Positioning fix: Absolute position relative to the card container */
//     <div className="absolute -left-[77px] top-8 flex items-center justify-center z-20">
//       <motion.div
//         className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[14px] font-bold text-[#171717] shadow-sm border-solid"
//         style={{ borderColor, borderWidth }}
//       >
//         {stepId}
//       </motion.div>
//     </div>
//   );
// };

// const StepCard = ({ step, index, total, progress }: { step: Step, index: number, total: number, progress: MotionValue<number> }) => {
//   return (
//     /* Wrapper div to hold both Indicator and Card Content */
//     <div className="relative mb-[18px] last:mb-0 w-full">
//       <StepIndicator 
//         stepId={step.id} 
//         index={index} 
//         total={total} 
//         progress={progress} 
//       />
      
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-10%" }}
//         transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
//       >
//         <div className="group bg-white border border-[#EBECF0] rounded-[32px] p-10 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500">
//           <h5 className="text-[22px] md:text-[20px] font-semibold text-[#5D636F] mb-4 group-hover:text-[#0A0A0A] transition-colors duration-300">
//             {step.title}
//           </h5>
//           <p className="text-[#404040] text-md md:text-ld leading-relaxed max-w-[440px]">
//             {step.description}
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const ProcessSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 40%", "end 60%"]
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-32 bg-white" id="section-process">
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32">
        
//         {/* Left Side Content */}
//         <div className="lg:sticky lg:top-32 h-fit space-y-3">
//           <div className="flex items-center gap-3">
//             <div className="w-6 h-6 text-[#E1443A]">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2L2 7L12 12L22 7L12 2Z" />
//                 <path d="M2 17L12 22L22 17" />
//                 <path d="M2 12L12 17L22 12" />
//               </svg>
//             </div>
//             <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#404040]">Process</span>
//           </div>

//           <h2 className="text-[42px] md:text-[56px] lg:text-[38px] font-bold leading-[1.1] tracking-tight">
//             <span className="text-[#0A0A0A] block">Proven & effective process.</span>
//             <span className="text-[#5D636F]">That delivers results.</span>
//           </h2>

//           <p className="text-[18px] md:text-[18px] text-[#404040] leading-relaxed max-w-[480px]">
//             We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
//           </p>
//         </div>

//         {/* Right Side Timeline */}
//         <div ref={containerRef} className="relative">
//           {/* Vertical Line Container */}
//           <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px]">
//             <div className="absolute inset-0 bg-[#E4E4E7]" />
//             <motion.div
//               className="absolute top-0 left-0 w-full bg-[#E1443A] origin-top"
//               style={{ height: "100%", scaleY }}
//             />
//           </div>

//           {/* Cards Container with extra padding to clear indicators */}
//           <div className="pl-20 md:pl-23">
//             {PROCESS_STEPS.map((step, idx) => (
//               <StepCard 
//                 key={step.id} 
//                 step={step} 
//                 index={idx} 
//                 total={PROCESS_STEPS.length} 
//                 progress={scrollYProgress} 
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;



// "use client";

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

// interface Step {
//   id: string;
//   title: string;
//   description: string;
// }

// const PROCESS_STEPS: Step[] = [
//   {
//     id: "01",
//     title: "Creative Analysis",
//     description: "We explore novel and creative ways to analyze and present data in order to spot unnoticed trends."
//   },
//   {
//     id: "02",
//     title: "Strategic Design",
//     description: "We ask questions, design studies, manage projects, analyze data, and dialogue with clients about our findings."
//   },
//   {
//     id: "03",
//     title: "Data Transformation",
//     description: "We transform data into practical growth and revenue-generating plans for your company."
//   },
//   {
//     id: "04",
//     title: "Informed Decisions",
//     description: "We provide our clients with the tools they need to make informed business decisions."
//   }
// ];

// const StepIndicator = ({ 
//   stepId, 
//   index, 
//   total, 
//   progress 
// }: { 
//   stepId: string; 
//   index: number; 
//   total: number; 
//   progress: MotionValue<number> 
// }) => {
//   const threshold = index / (total - 1);
  
//   const borderColor = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     ["#D4D8DD", "#E1443A"]
//   );

//   const borderWidth = useTransform(
//     progress,
//     [threshold - 0.1, threshold],
//     [1.5, 3]
//   );

//   return (
//     /* Responsive positioning: -left-10 for mobile, -left-[76px] for desktop to match the vertical line */
//     <div className="absolute -left-[44px] md:-left-[76px] top-8 flex items-center justify-center z-20">
//       <motion.div
//         className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-[12px] md:text-[14px] font-bold text-[#171717] shadow-sm border-solid"
//         style={{ borderColor, borderWidth }}
//       >
//         {stepId}
//       </motion.div>
//     </div>
//   );
// };

// const StepCard = ({ step, index, total, progress }: { step: Step, index: number, total: number, progress: MotionValue<number> }) => {
//   return (
//     <div className="relative mb-6 md:mb-[18px] last:mb-0 w-full">
//       <StepIndicator 
//         stepId={step.id} 
//         index={index} 
//         total={total} 
//         progress={progress} 
//       />
      
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-10%" }}
//         transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
//       >
//         <div className="group bg-white border border-[#EBECF0] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500">
//           <h5 className="text-[18px] md:text-[20px] font-semibold text-[#5D636F] mb-3 md:mb-4 group-hover:text-[#0A0A0A] transition-colors duration-300">
//             {step.title}
//           </h5>
//           <p className="text-[#404040] text-sm md:text-[16px] leading-relaxed max-w-[440px]">
//             {step.description}
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// const ProcessSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 40%", "end 60%"]
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-16 bg-white" id="section-process">
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-32">
        
//         {/* Left Side Content */}
//         <div className="lg:sticky lg:top-32 h-fit space-y-4">
//           <div className="flex items-center gap-3">
//             <div className="w-5 h-5 md:w-6 md:h-6 text-[#E1443A]">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2L2 7L12 12L22 7L12 2Z" />
//                 <path d="M2 17L12 22L22 17" />
//                 <path d="M2 12L12 17L22 12" />
//               </svg>
//             </div>
//             <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] text-[#404040]">Process</span>
//           </div>

//           <h2 className="text-[32px] md:text-[56px] lg:text-[38px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
//             <span className="text-[#0A0A0A] block">Our Uniqueness</span>
//             {/* <span className="text-[#5D636F]">That delivers results.</span> */}
//           </h2>

//           <p className="text-[16px] md:text-[18px] text-[#404040] leading-relaxed max-w-[480px]">
//             We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
//           </p>
//         </div>

//         {/* Right Side Timeline */}
//         <div ref={containerRef} className="relative md:ml-0">
//           {/* Vertical Line Container - Adjusted left for mobile */}
//           <div className="absolute left-[20px] md:left-9 top-0 bottom-0 w-[2px] md:w-[3px]">
//             <div className="absolute inset-0 bg-[#E4E4E7]" />
//             <motion.div
//               className="absolute top-0 left-0 w-full bg-[#E1443A] origin-top"
//               style={{ height: "100%", scaleY }}
//             />
//           </div>

//           {/* Cards Container - Adjusted padding for mobile */}
//           <div className="pl-12 md:pl-24">
//             {PROCESS_STEPS.map((step, idx) => (
//               <StepCard 
//                 key={step.id} 
//                 step={step} 
//                 index={idx} 
//                 total={PROCESS_STEPS.length} 
//                 progress={scrollYProgress} 
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

//////mew

"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

interface Step {
  id: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: Step[] = [
  {
    id: "01",
    title: "Creative Analysis",
    description: "We explore novel and creative ways to analyze and present data in order to spot unnoticed trends."
  },
  {
    id: "02",
    title: "Strategic Design",
    description: "We ask questions, design studies, manage projects, analyze data, and dialogue with clients about our findings."
  },
  {
    id: "03",
    title: "Data Transformation",
    description: "We transform data into practical growth and revenue-generating plans for your company."
  },
  {
    id: "04",
    title: "Informed Decisions",
    description: "We provide our clients with the tools they need to make informed business decisions."
  }
];

const StepIndicator = ({ 
  stepId, 
  index, 
  total, 
  progress 
}: { 
  stepId: string; 
  index: number; 
  total: number; 
  progress: MotionValue<number> 
}) => {
  const threshold = index / (total - 1);
  
  const borderColor = useTransform(
    progress,
    [threshold - 0.1, threshold],
    ["#D4D8DD", "#E1443A"]
  );

  const borderWidth = useTransform(
    progress,
    [threshold - 0.1, threshold],
    [1.5, 3]
  );

  return (
    <div className="absolute -left-[44px] md:-left-[76px] top-8 flex items-center justify-center z-20">
      <motion.div
        className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-[12px] md:text-[14px] font-bold text-[#171717] shadow-sm border-solid"
        style={{ borderColor, borderWidth }}
      >
        {stepId}
      </motion.div>
    </div>
  );
};

const StepCard = ({ step, index, total, progress }: { step: Step, index: number, total: number, progress: MotionValue<number> }) => {
  return (
    <div className="relative mb-6 md:mb-[18px] last:mb-0 w-full">
      <StepIndicator 
        stepId={step.id} 
        index={index} 
        total={total} 
        progress={progress} 
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="group bg-white border border-[#EBECF0] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500">
          <h5 className="text-[18px] md:text-[20px] font-semibold text-[#5D636F] mb-3 md:mb-4 group-hover:text-[#0A0A0A] transition-colors duration-300">
            {step.title}
          </h5>
          <p className="text-[#404040] text-sm md:text-[16px] leading-relaxed max-w-[440px]">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 60%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-16 bg-white" id="section-process">
      {/* Added 'items-start' to the grid. 
          This is crucial for sticky elements to work within a grid layout.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-32 items-start">
        
        {/* Left Side Content - Sticky on Desktop */}
        <div className="lg:sticky lg:top-32 h-fit space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 md:w-6 md:h-6 text-[#E1443A]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            </div>
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] text-[#404040]">Process</span>
          </div>

          <h2 className="text-[32px] md:text-[56px] lg:text-[38px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
            <span className="text-[#0A0A0A] block">Our Uniqueness</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#404040] leading-relaxed max-w-[480px]">
            We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
          </p>
        </div>

        {/* Right Side Timeline */}
        <div ref={containerRef} className="relative md:ml-0">
          {/* Vertical Line Container */}
          <div className="absolute left-[20px] md:left-9 top-0 bottom-0 w-[2px] md:w-[3px]">
            <div className="absolute inset-0 bg-[#E4E4E7]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#E1443A] origin-top"
              style={{ height: "100%", scaleY }}
            />
          </div>

          {/* Cards Container */}
          <div className="pl-12 md:pl-24">
            {PROCESS_STEPS.map((step, idx) => (
              <StepCard 
                key={step.id} 
                step={step} 
                index={idx} 
                total={PROCESS_STEPS.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;