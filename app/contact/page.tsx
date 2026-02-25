// import Image from "next/image";
// import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Sparkles } from "lucide-react";

// export default function ContactPage() {
//   const highlights = [
//     "Tailored proposal within 24 hours",
//     "Senior-led discovery and strategy",
//     "Clear deliverables and timelines",
//   ];

//   return (
//     <main className="bg-[#fcfcfb] text-slate-900 py-12">
//       <section className="mx-auto max-w-6xl px-4">
//         <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-7 md:p-10">
//           <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
//             <div className="lg:col-span-7">
//               <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
//                 <Sparkles className="h-4 w-4 text-slate-700" />
//                 Let us build your next research roadmap
//               </span>
//               <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
//                 Contact our research team
//               </h1>
//               <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
//                 Share your objective, market, and timeline. We will reply with a clear study
//                 plan and pricing.
//               </p>
//             </div>
//             <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5 lg:col-span-5">
//               <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                 Fast Start
//               </p>
//               <div className="mt-4 space-y-3">
//                 {highlights.map((item) => (
//                   <p key={item} className="flex items-start gap-2 text-sm text-slate-700">
//                     <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
//                     {item}
//                   </p>
//                 ))}
//               </div>
//             </aside>
//           </div>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
//           {/* LEFT COLUMN: Image & Contact Overlay */}
//           <aside className="relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
//             <div className="relative min-h-[400px] w-full flex-grow">
//               <Image
//                 src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
//                 alt="Research team collaboration"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               {/* Gradient Overlay for text readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
//               {/* Contact Details Overlay */}
//               <div className="absolute bottom-0 w-full p-6 md:p-8">
//                 <div className="grid gap-4 sm:grid-cols-3">
//                   <div className="space-y-1">
//                     <div className="flex items-center gap-2 text-white/70">
//                       <Mail className="h-4 w-4" />
//                       <span className="text-[10px] font-bold uppercase tracking-wider">Email</span>
//                     </div>
//                     <p className="text-sm font-medium text-white">research@company.com</p>
//                   </div>

//                   <div className="space-y-1">
//                     <div className="flex items-center gap-2 text-white/70">
//                       <Phone className="h-4 w-4" />
//                       <span className="text-[10px] font-bold uppercase tracking-wider">Phone</span>
//                     </div>
//                     <p className="text-sm font-medium text-white">+971 00 000 0000</p>
//                   </div>

//                   <div className="space-y-1">
//                     <div className="flex items-center gap-2 text-white/70">
//                       <MapPin className="h-4 w-4" />
//                       <span className="text-[10px] font-bold uppercase tracking-wider">Office</span>
//                     </div>
//                     <p className="text-sm font-medium text-white">Dubai, UAE</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Strategy Call Footer inside the same column */}
//             <div className="bg-white p-5 border-t border-slate-100">
//                <h3 className="text-lg font-semibold text-slate-900">Talk to a senior consultant</h3>
//                <div className="mt-3 flex flex-wrap gap-2">
//                   <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 border border-slate-100">Strategy call</span>
//                   <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 border border-slate-100">Custom proposal</span>
//                </div>
//             </div>
//           </aside>

//           {/* RIGHT COLUMN: Form */}
//           <section className="flex flex-col">
//             <form className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
//               <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="text-sm text-slate-600">
//                   Tell us your priority and we will match the right team.
//                 </p>
//                 <p className="w-fit shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
//                   Avg. response under 12h
//                 </p>
//               </div>
              
//               <div className="grid gap-5 md:grid-cols-2">
//                 <label className="space-y-2">
//                   <span className="text-sm font-medium text-slate-700">Full Name</span>
//                   <input
//                     type="text"
//                     placeholder="Jane Doe"
//                     className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
//                   />
//                 </label>
//                 <label className="space-y-2">
//                   <span className="text-sm font-medium text-slate-700">Work Email</span>
//                   <input
//                     type="email"
//                     placeholder="name@company.com"
//                     className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
//                   />
//                 </label>
//                 <label className="space-y-2">
//                   <span className="text-sm font-medium text-slate-700">Company</span>
//                   <input
//                     type="text"
//                     placeholder="Your company"
//                     className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
//                   />
//                 </label>
//                 <label className="space-y-2">
//                   <span className="text-sm font-medium text-slate-700">Project Budget</span>
//                   <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 bg-white">
//                     <option>Under $5,000</option>
//                     <option>$5,000 - $15,000</option>
//                     <option>$15,000 - $40,000</option>
//                     <option>$40,000+</option>
//                   </select>
//                 </label>
//               </div>

//               <label className="mt-5 block space-y-2">
//                 <span className="text-sm font-medium text-slate-700">Tell us about your project</span>
//                 <textarea
//                   rows={6}
//                   placeholder="What questions do you need answered?"
//                   className="w-full resize-none rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
//                 />
//               </label>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="text-xs text-slate-500 max-w-[240px]">
//                   By submitting, you agree to be contacted about your request.
//                 </p>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-black"
//                 >
//                   Send Inquiry
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </form>
//           </section>
//         </div>
//       </section>
//     </main>
//   );
// }

// import Image from "next/image";
// import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Sparkles } from "lucide-react";
// import Contact2 from "@/components/Contact2";

// export default function ContactPage() {

//   return (
//     <main className="bg-[#fcfcfb] text-slate-900 py-12">
//       <section className="mx-auto max-w-6xl px-4">  <div className="mb-14 text-center">
//     <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
//       <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//       Contact Us
//     </div>

//     <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
//       Let’s Start a Conversation
//     </h2>

//     <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-base leading-relaxed">
//       Tell us about your research needs and our team will get back to you
//       within 12 hours with a tailored solution.
//     </p>

//     {/* Decorative Divider */}
//     <div className="mt-8 flex justify-center">
//       <div className="h-1 w-24 rounded-full bg-gradient-to-r from-slate-900 via-slate-400 to-slate-900" />
//     </div>
//   </div>
    

//         {/* Main Content: Equal Height Columns */}
//         <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          
//      <aside className="relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 min-h-[600px] group/container">
//   <div className="relative h-full w-full flex-grow">
//     <Image
//       src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
//       alt="Research team collaboration"
//       fill
//       className="object-cover transition-transform duration-700 group-hover/container:scale-105"
//       priority
//     />
    
//     {/* Sophisticated Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/20 to-transparent" />

//     {/* Floating Contact Elements */}
//     <div className="absolute inset-0 p-8">
      
//       {/* Email Card - Top Right */}
//       <div className="absolute top-10 right-8 animate-bounce-slow">
//         <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/50">
//             <Mail className="h-5 w-5 text-white" />
//           </div>
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-tighter text-blue-300">Drop a line</p>
//             <p className="text-sm font-semibold text-white">research@company.com</p>
//           </div>
//         </div>
//       </div>

//       {/* Phone Card - Middle Left */}
//       <div className="absolute top-1/2 left-8 -translate-y-1/2">
//         <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/50">
//             <Phone className="h-5 w-5 text-white" />
//           </div>
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-tighter text-emerald-300">Call us</p>
//             <p className="text-sm font-semibold text-white">+971 00 000 0000</p>
//           </div>
//         </div>
//       </div>

//       {/* Location Card - Bottom Right */}
//       <div className="absolute bottom-10 right-12">
//         <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/50">
//             <MapPin className="h-5 w-5 text-white" />
//           </div>
//           <div>
//             <p className="text-[10px] font-bold uppercase tracking-tighter text-orange-300">Visit HQ</p>
//             <p className="text-sm font-semibold text-white">Dubai, UAE</p>
//           </div>
//         </div>
//       </div>

//     </div>

//     {/* Subtle Decorative Tag */}
//     <div className="absolute bottom-8 left-8">
//        <span className="rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-medium text-white backdrop-blur-md border border-white/10">
//          Available Worldwide • 24/7
//        </span>
//     </div>
//   </div>
// </aside>

//           {/* RIGHT COLUMN: Contact Form */}
//           <section className="flex flex-col">
//             <form className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10">
           
//                  <h1 className="text-3xl md:text-3xl font-medium mb-8 leading-tight text-slate-900">
//             We're Just a Message Away – <br /> 
//             <span className="text-blue-900">Let's Talk</span>
//           </h1>
              
//               <div className="grid gap-4 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="Jane Doe"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
//                   <input
//                     type="email"
//                     placeholder="name@company.com"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                   <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
//                   <input
//                     type="text"
//                     placeholder="Your Phone Number"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Company</label>
//                   <input
//                     type="text"
//                     placeholder="Your company"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Experts to Call You ?</label>
//                   <select className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white appearance-none">
//                     <option>Under $5,000</option>
//                     <option>$5,000 - $15,000</option>
//                     <option>$15,000 - $40,000</option>
//                     <option>$40,000+</option>
//                   </select>
//                 </div>

//                   <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">When do you Plan to Start ?</label>
//                   <select className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white appearance-none">
//                     <option>Under $5,000</option>
//                     <option>$5,000 - $15,000</option>
//                     <option>$15,000 - $40,000</option>
//                     <option>$40,000+</option>
//                   </select>
//                 </div>
//                   <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Nationality</label>
//                   <input
//                     type="text"
//                     placeholder="Your Nationality"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>

//                    <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">When do you Plan to Start ?</label>
//                   <select className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white appearance-none">
//                     <option>Under $5,000</option>
//                     <option>$5,000 - $15,000</option>
//                     <option>$15,000 - $40,000</option>
//                     <option>$40,000+</option>
//                   </select>
//                 </div>

//               </div>

//               <div className="mt-5 space-y-2">
//                 <label className="text-sm font-semibold text-slate-700 ml-1">Project Brief</label>
//                 <textarea
//                   rows={5}
//                   placeholder="What research questions do you need answered?"
//                   className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                 />
//               </div>

//               <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="text-[11px] leading-relaxed text-slate-400 max-w-[200px]">
//                   Secure transmission. Your data is protected under our privacy policy.
//                 </p>
//                 <button
//                   type="submit"
//                   className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-xl active:scale-95"
//                 >
//                   Send Inquiry
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>
//             </form>
//           </section>
//         </div>
//       </section>
//       {/* <Contact2/> */}
//     </main>
//   );
// }


///////new

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ArrowRight, Mail, MapPin, Phone, ChevronDown, CheckCircle2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- Creative Dropdown Component ---
// function CreativeSelect({ label, options }: { label: string; options: string[] }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState(options[0]);

//   return (
//     <div className="space-y-2 relative">
//       <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-left outline-none transition focus:border-slate-400 focus:bg-white"
//       >
//         <span className="text-sm text-slate-900">{selected}</span>
//         <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Backdrop to close when clicking outside */}
//             <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
//             >
//               {options.map((option) => (
//                 <div
//                   key={option}
//                   onClick={() => {
//                     setSelected(option);
//                     setIsOpen(false);
//                   }}
//                   className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
//                 >
//                   {option}
//                   {selected === option && <CheckCircle2 className="h-4 w-4 text-blue-600" />}
//                 </div>
//               ))}
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default function ContactPage() {
//   return (
//     <main className="bg-[#fcfcfb] text-slate-900 py-12">
//       <section className="mx-auto max-w-6xl px-4">
//         <div className="mb-14 text-center">
//           <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             Contact Us
//           </div>

//           <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
//             Let’s Start a Conversation
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-base leading-relaxed">
//             Tell us about your research needs and our team will get back to you
//             within 12 hours with a tailored solution.
//           </p>

//           <div className="mt-8 flex justify-center">
//             <div className="h-1 w-24 rounded-full bg-gradient-to-r from-slate-900 via-slate-400 to-slate-900" />
//           </div>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          
//           {/* LEFT COLUMN */}
//           <aside className="relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 min-h-[600px] group/container">
//             <div className="relative h-full w-full flex-grow">
//               <Image
//                 src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
//                 alt="Research team collaboration"
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover/container:scale-105"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/20 to-transparent" />

//               <div className="absolute inset-0 p-8">
//                 <div className="absolute top-10 right-8 animate-bounce-slow">
//                   <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/50">
//                       <Mail className="h-5 w-5 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-tighter text-blue-300">Drop a line</p>
//                       <p className="text-sm font-semibold text-white">research@company.com</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute top-1/2 left-8 -translate-y-1/2">
//                   <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/50">
//                       <Phone className="h-5 w-5 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-tighter text-emerald-300">Call us</p>
//                       <p className="text-sm font-semibold text-white">+971 00 000 0000</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute bottom-10 right-12">
//                   <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/50">
//                       <MapPin className="h-5 w-5 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-tighter text-orange-300">Visit HQ</p>
//                       <p className="text-sm font-semibold text-white">Dubai, UAE</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-8 left-8">
//                 <span className="rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-medium text-white backdrop-blur-md border border-white/10">
//                   Available Worldwide • 24/7
//                 </span>
//               </div>
//             </div>
//           </aside>

//           {/* RIGHT COLUMN: Contact Form */}
//           <section className="flex flex-col">
//             <form className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10">
//               <h1 className="text-3xl md:text-3xl font-medium mb-8 leading-tight text-slate-900">
//                 We're Just a Message Away – <br />
//                 <span className="text-blue-900">Let's Talk</span>
//               </h1>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="Jane Doe"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
//                   <input
//                     type="email"
//                     placeholder="name@company.com"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
//                   <input
//                     type="text"
//                     placeholder="Your Phone Number"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Company</label>
//                   <input
//                     type="text"
//                     placeholder="Your company"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>

//                 {/* CREATIVE DROPDOWNS START HERE */}
//                 <CreativeSelect 
//                   label="Experts to Call You?" 
//                   options={["Morning (9 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 7 PM)", "Anytime"]} 
//                 />

//                 <CreativeSelect 
//                   label="When do you Plan to Start?" 
//                   options={["Immediately", "Within 2 weeks", "Next Month", "Researching only"]} 
//                 />

//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-slate-700 ml-1">Nationality</label>
//                   <input
//                     type="text"
//                     placeholder="Your Nationality"
//                     className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                   />
//                 </div>

//                 <CreativeSelect 
//                   label="Budget Range" 
//                   options={["Under $5,000", "$5,000 - $15,000", "$15,000 - $40,000", "$40,000+"]} 
//                 />
//               </div>

//               <div className="mt-5 space-y-2">
//                 <label className="text-sm font-semibold text-slate-700 ml-1">Project Brief</label>
//                 <textarea
//                   rows={5}
//                   placeholder="What research questions do you need answered?"
//                   className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
//                 />
//               </div>

//               <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="text-[11px] leading-relaxed text-slate-400 max-w-[200px]">
//                   Secure transmission. Your data is protected under our privacy policy.
//                 </p>
//                 <button
//                   type="submit"
//                   className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-xl active:scale-95"
//                 >
//                   Send Inquiry
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>
//             </form>
//           </section>
//         </div>
//       </section>
//     </main>
//   );
// }

///////////
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Creative Dropdown Component ---
function CreativeSelect({ label, options }: { label: string; options: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-left outline-none transition focus:border-slate-400 focus:bg-white"
      >
        <span className="text-sm text-slate-900">{selected}</span>
        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close when clicking outside */}
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
            >
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  {option}
                  {selected === option && <CheckCircle2 className="h-4 w-4 text-blue-600" />}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-[#fcfcfb] text-slate-900 pb-12 pt-32">
      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Contact Us
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Let’s Start a Conversation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-base leading-relaxed">
            Tell us about your requirements and our team will get back to you
            within 12 hours with a tailored solution.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-slate-900 via-slate-400 to-slate-900" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          
          <aside className="relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 min-h-[600px] group/container">
            <div className="relative h-full w-full flex-grow">
              <Image
                src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
                alt="Support team"
                fill
                className="object-cover transition-transform duration-700 group-hover/container:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute inset-0 p-8">
                <div className="absolute top-10 right-8 animate-bounce-slow">
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/50">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tighter text-blue-300">Drop a line</p>
                      <p className="text-sm font-semibold text-white">contact@yourdomain.com</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-8 -translate-y-1/2">
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/50">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tighter text-emerald-300">Call us</p>
                      <p className="text-sm font-semibold text-white">+971 00 000 0000</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 right-12">
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/50">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tighter text-orange-300">Location</p>
                      <p className="text-sm font-semibold text-white">UAE & Oman</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-medium text-white backdrop-blur-md border border-white/10">
                  Regional Support • 24/7
                </span>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Contact Form */}
          <section className="flex flex-col">
            <form className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10">
              <h1 className="text-3xl md:text-3xl font-medium mb-8 leading-tight text-slate-900">
                Ready to Grow? – <br />
                <span className="text-blue-900">Connect With Us</span>
              </h1>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                  <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Company (Optional)</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                 <CreativeSelect 
                  label="Need Call" 
                  options={["Yes", "No"]} 
                />
                {/* NEW LOCATION DROPDOWN FROM YOUR IMAGE */}
                <CreativeSelect 
                  label="I want to start in?" 
                  options={[
                    "Any Part of UAE", 
                    "Dubai", 
                    "Sharjah", 
                    "Abu Dhabi", 
                    "Ajman", 
                    "Ras Al Khaimah", 
                    "Umm Al Quwain", 
                    "Oman"
                  ]} 
                />

                  <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Nationality</label>
                  <input
                    type="text"
                    placeholder="Your Nationality"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <CreativeSelect 
                  label="When Contact Time" 
                  options={["Morning (9 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 7 PM)", "Anytime"]} 
                />

               

              

              
              </div>

              <div className="mt-5 space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you today?"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-relaxed text-slate-400 max-w-[200px]">
                  Your data is encrypted and secure under our privacy guidelines.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-xl active:scale-95"
                >
                  Submit Request
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}