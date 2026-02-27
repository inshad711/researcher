// "use client";
// import React, { useState, useEffect } from 'react';
// import { Calendar, MapPin, User, ArrowRight, Share2, ChevronRight } from 'lucide-react';

// const SuccessStory = () => {
//   // Mock data for the success story
//   const storyData = {
//     title: "Stories of Success",
//     subtitle: "Transforming Digital Infrastructure",
//     description: "A comprehensive look at how we helped our partners scale their operations and achieve record-breaking efficiency through innovative technical solutions.",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
//     details: {
//       client: "Global Tech Solutions",
//       year: "2024",
//       location: "San Francisco, CA"
//     },
//     content: [
//       {
//         heading: "The Challenge",
//         body: "The client was facing significant bottlenecks in their data processing pipeline. With legacy systems unable to handle the increasing load, they needed a modern architecture that could scale dynamically while maintaining 99.9% uptime. The existing infrastructure was costly to maintain and prone to manual errors during deployment phases."
//       },
//       {
//         heading: "Our Approach",
//         body: "We conducted a deep dive into their existing stack and identified key areas for improvement. Our team implemented a microservices architecture using modern cloud-native tools. This involved migrating legacy databases to a distributed system and introducing automated CI/CD pipelines to streamline development. We focused on containerization to ensure consistency across environments."
//       },
//       {
//         heading: "The Solution",
//         body: "The final implementation featured a robust, serverless API layer integrated with a real-time monitoring dashboard. This allowed the client's engineering team to visualize system health and performance metrics in real-time. We also integrated advanced security protocols and automated backup systems to ensure data integrity and compliance."
//       },
//       {
//         heading: "Key Results",
//         body: "Within the first three months of implementation, the client reported a 45% increase in processing speed and a 30% reduction in operational costs. System downtime was virtually eliminated, and the internal team's productivity increased as they shifted focus from maintenance to feature development. The solution proved to be highly adaptable to their evolving business needs."
//       },
//       {
//         heading: "Future Outlook",
//         body: "As part of our long-term partnership, we are now exploring the integration of machine learning models to provide predictive analytics. This will further enhance the client's ability to anticipate market trends and optimize their resource allocation automatically. The foundation we've built is designed to support growth for the next decade."
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
//       {/* Header Section */}
//       <header className="pt-16 pb-8 px-6 max-w-7xl mx-auto text-center">
//         <h1 className="text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
//           {storyData.title}
//         </h1>
//         <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded-full"></div>
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
//           {storyData.subtitle}
//         </h2>
//         <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
//           {storyData.description}
//         </p>
//       </header>

//       {/* Hero Image Section */}
//       <section className="px-6 max-w-7xl mx-auto mb-16">
//         <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
//           <img 
//             src={storyData.image} 
//             alt="Success Story Hero" 
//             className="w-full h-full object-cover"
//             onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x675?text=Success+Story+Image'; }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <main className="px-6 max-w-7xl mx-auto pb-24">
//         <div className="flex flex-col lg:flex-row gap-12">
          
//           {/* Left Sidebar - Sticky */}
//           <aside className="lg:w-1/3">
//             <div className="lg:sticky lg:top-8 space-y-6">
//               <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
//                     <ChevronRight size={18} />
//                   </span>
//                   Project Details
//                 </h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <User className="text-slate-400 mt-1" size={20} />
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">Client</p>
//                       <p className="text-lg font-medium">{storyData.details.client}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Calendar className="text-slate-400 mt-1" size={20} />
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">Year</p>
//                       <p className="text-lg font-medium">{storyData.details.year}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <MapPin className="text-slate-400 mt-1" size={20} />
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">Location</p>
//                       <p className="text-lg font-medium">{storyData.details.location}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800">
//                   <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
//                     Share Story <Share2 size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Optional "Sticky" Call to Action Note */}
//               <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20">
//                 <h4 className="font-bold mb-2">Ready for your success story?</h4>
//                 <p className="text-blue-100 text-sm mb-4">Let's build something incredible together.</p>
//                 <button className="text-sm font-bold flex items-center gap-2 hover:underline">
//                   Contact our team <ArrowRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* Right Content - Scrollable */}
//           <div className="lg:w-2/3 space-y-16">
//             {storyData.content.map((section, index) => (
//               <section key={index} className="group">
//                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
//                   <span className="text-blue-600/20 dark:text-blue-400/20 text-4xl font-black italic">0{index + 1}</span>
//                   {section.heading}
//                 </h3>
//                 <div className="prose prose-slate dark:prose-invert max-w-none">
//                   <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
//                     {section.body}
//                   </p>
//                 </div>
//                 {index !== storyData.content.length - 1 && (
//                   <div className="mt-16 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent"></div>
//                 )}
//               </section>
//             ))}
//           </div>

//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center">
//         <p className="text-slate-500 text-sm">© 2024 Success Stories Portal. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default function SinglePageOfCaseStoies() {
//   return <SuccessStory />;
// }


//////////


// "use client"
// import React from 'react';
// import { Calendar, MapPin, User, ArrowRight, Share2, ChevronRight } from 'lucide-react';

// // --- Interfaces for Type Safety ---
// interface StoryDetail {
//   client: string;
//   year: string;
//   location: string;
// }

// interface StoryContent {
//   heading: string;
//   body: string;
// }

// interface StoryData {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: string;
//   details: StoryDetail;
//   content: StoryContent[];
// }

// const SuccessStory: React.FC = () => {
//   // Mock data for the success story
//   const storyData: StoryData = {
//     title: "Stories of Success",
//     subtitle: "Transforming Digital Infrastructure",
//     description: "A comprehensive look at how we helped our partners scale their operations and achieve record-breaking efficiency through innovative technical solutions.",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
//     details: {
//       client: "Global Tech Solutions",
//       year: "2024",
//       location: "San Francisco, CA"
//     },
//     content: [
//       {
//         heading: "The Challenge",
//         body: "The client was facing significant bottlenecks in their data processing pipeline. With legacy systems unable to handle the increasing load, they needed a modern architecture that could scale dynamically while maintaining 99.9% uptime. The existing infrastructure was costly to maintain and prone to manual errors during deployment phases."
//       },
//       {
//         heading: "Our Approach",
//         body: "We conducted a deep dive into their existing stack and identified key areas for improvement. Our team implemented a microservices architecture using modern cloud-native tools. This involved migrating legacy databases to a distributed system and introducing automated CI/CD pipelines to streamline development. We focused on containerization to ensure consistency across environments."
//       },
//       {
//         heading: "The Solution",
//         body: "The final implementation featured a robust, serverless API layer integrated with a real-time monitoring dashboard. This allowed the client's engineering team to visualize system health and performance metrics in real-time. We also integrated advanced security protocols and automated backup systems to ensure data integrity and compliance."
//       },
//       {
//         heading: "Key Results",
//         body: "Within the first three months of implementation, the client reported a 45% increase in processing speed and a 30% reduction in operational costs. System downtime was virtually eliminated, and the internal team's productivity increased as they shifted focus from maintenance to feature development. The solution proved to be highly adaptable to their evolving business needs."
//       },
//       {
//         heading: "Future Outlook",
//         body: "As part of our long-term partnership, we are now exploring the integration of machine learning models to provide predictive analytics. This will further enhance the client's ability to anticipate market trends and optimize their resource allocation automatically. The foundation we've built is designed to support growth for the next decade."
//       }
//     ]
//   };

//   // Fixed: Type-safe image error handler
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     e.currentTarget.src = 'https://via.placeholder.com/1200x675?text=Success+Story+Image';
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       {/* Header Section */}
//       <header className="pt-16 pb-8 px-6 max-w-7xl mx-auto text-center">
//         <h1 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">
//           {storyData.title}
//         </h1>
//         <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
//           {storyData.subtitle}
//         </h2>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
//           {storyData.description}
//         </p>
//       </header>

//       {/* Hero Image Section */}
//       <section className="px-6 max-w-7xl mx-auto mb-16">
//         <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
//           <img 
//             src={storyData.image} 
//             alt="Success Story Hero" 
//             className="w-full h-full object-cover"
//             onError={handleImageError}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <main className="px-6 max-w-7xl mx-auto pb-24">
//         <div className="flex flex-col lg:flex-row gap-12">
          
//           {/* Left Sidebar - Sticky */}
//           <aside className="lg:w-1/3">
//             <div className="lg:sticky lg:top-8 space-y-6">
//               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
//                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//                   <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
//                     <ChevronRight size={18} />
//                   </span>
//                   Project Details
//                 </h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <User className="text-slate-400 mt-1" size={20} />
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Client</p>
//                       <p className="text-lg font-medium">{storyData.details.client}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Calendar className="text-slate-400 mt-1" size={20} />
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Year</p>
//                       <p className="text-lg font-medium">{storyData.details.year}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <MapPin className="text-slate-400 mt-1" size={20} />
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</p>
//                       <p className="text-lg font-medium">{storyData.details.location}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-10 pt-8 border-t border-slate-100">
//                   <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
//                     Share Story <Share2 size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* Sticky Call to Action Note */}
//               <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20">
//                 <h4 className="font-bold mb-2">Ready for your success story?</h4>
//                 <p className="text-blue-100 text-sm mb-4">Let's build something incredible together.</p>
//                 <button className="text-sm font-bold flex items-center gap-2 hover:underline">
//                   Contact our team <ArrowRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* Right Content - Scrollable */}
//           <div className="lg:w-2/3 space-y-16">
//             {storyData.content.map((section, index) => (
//               <section key={index} className="group">
//                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
//                   <span className="text-blue-600/20 text-4xl font-black italic">0{index + 1}</span>
//                   {section.heading}
//                 </h3>
//                 <div className="prose prose-slate max-w-none">
//                   <p className="text-lg leading-relaxed text-slate-600">
//                     {section.body}
//                   </p>
//                 </div>
//                 {index !== storyData.content.length - 1 && (
//                   <div className="mt-16 h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
//                 )}
//               </section>
//             ))}
//           </div>

//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="py-12 border-t border-slate-200 text-center">
//         <p className="text-slate-500 text-sm">© 2024 Success Stories Portal. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default function SinglePageOfCaseStories() {
//   return <SuccessStory />;
// }


//////new

"use client"
import React from 'react';
import { Calendar, MapPin, User, ArrowRight, Share2, ChevronRight } from 'lucide-react';

// --- Interfaces for Type Safety ---
interface StoryDetail {
  client: string;
  year: string;
  location: string;
}

interface StoryContent {
  heading: string;
  body: string;
}

interface StoryData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: StoryDetail;
  content: StoryContent[];
}

const SuccessStory: React.FC = () => {
  // Mock data for the success story
  const storyData: StoryData = {
    title: "Stories of Success",
    subtitle: "Transforming Digital Infrastructure",
    description: "A comprehensive look at how we helped our partners scale their operations and achieve record-breaking efficiency through innovative technical solutions.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    details: {
      client: "Global Tech Solutions",
      year: "2024",
      location: "San Francisco, CA"
    },
    content: [
      {
        heading: "The Challenge",
        body: "The client was facing significant bottlenecks in their data processing pipeline. With legacy systems unable to handle the increasing load, they needed a modern architecture that could scale dynamically while maintaining 99.9% uptime. The existing infrastructure was costly to maintain and prone to manual errors during deployment phases."
      },
      {
        heading: "Our Approach",
        body: "We conducted a deep dive into their existing stack and identified key areas for improvement. Our team implemented a microservices architecture using modern cloud-native tools. This involved migrating legacy databases to a distributed system and introducing automated CI/CD pipelines to streamline development. We focused on containerization to ensure consistency across environments."
      },
      {
        heading: "The Solution",
        body: "The final implementation featured a robust, serverless API layer integrated with a real-time monitoring dashboard. This allowed the client's engineering team to visualize system health and performance metrics in real-time. We also integrated advanced security protocols and automated backup systems to ensure data integrity and compliance."
      },
      {
        heading: "Key Results",
        body: "Within the first three months of implementation, the client reported a 45% increase in processing speed and a 30% reduction in operational costs. System downtime was virtually eliminated, and the internal team's productivity increased as they shifted focus from maintenance to feature development. The solution proved to be highly adaptable to their evolving business needs."
      },
      {
        heading: "Future Outlook",
        body: "As part of our long-term partnership, we are now exploring the integration of machine learning models to provide predictive analytics. This will further enhance the client's ability to anticipate market trends and optimize their resource allocation automatically. The foundation we've built is designed to support growth for the next decade."
      }
    ]
  };

  // Fixed: Type-safe image error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/1200x675?text=Success+Story+Image';
  };

  return (
    <div className="text-slate-900">
      {/* Header Section */}
      <header className="pt-8 pb-8 px-6 max-w-7xl mx-auto text-center">
     
        {/* <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div> */}
        <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
          {storyData.title}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {storyData.description}
        </p>
      </header>

      {/* Hero Image Section */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <img 
            src={storyData.image} 
            alt="Success Story Hero" 
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="px-6 max-w-7xl mx-auto pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar - Sticky */}
          <aside className="lg:w-[28%]">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  {/* <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <ChevronRight size={18} />
                  </span> */}
                  Project Details
                </h3>
                
                {/* <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <User className="text-slate-400 mt-1 bg-purple-100 rounded-sm" size={20} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Client</p>
                      <p className="text-[16px] font-medium">{storyData.details.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="text-slate-400 mt-1 bg-purple-100 rounded-sm" size={20} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Year</p>
                      <p className="text-[16px] font-medium">{storyData.details.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-slate-400 mt-1 bg-purple-100 rounded-sm" size={20} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</p>
                      <p className="text-[16px] font-medium">{storyData.details.location}</p>
                    </div>
                  </div>
                </div> */}
                <div className="space-y-8">
  {/* Client */}
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 shadow-sm">
      <User className="text-purple-600" size={18} />
    </div>

    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Client
      </p>
      <p className="mt-1 text-base font-semibold text-slate-800">
        {storyData.details.client}
      </p>
    </div>
  </div>

  {/* Year */}
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 shadow-sm">
      <Calendar className="text-purple-600" size={18} />
    </div>

    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Year
      </p>
      <p className="mt-1 text-base font-semibold text-slate-800">
        {storyData.details.year}
      </p>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 shadow-sm">
      <MapPin className="text-purple-600" size={18} />
    </div>

    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Location
      </p>
      <p className="mt-1 text-base font-semibold text-slate-800">
        {storyData.details.location}
      </p>
    </div>
  </div>
</div>

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
                    Share Story <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Sticky Call to Action Note */}
              {/* <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20">
                <h4 className="font-bold mb-2">Ready for your success story?</h4>
                <p className="text-blue-100 text-sm mb-4">Let's build something incredible together.</p>
                <button className="text-sm font-bold flex items-center gap-2 hover:underline">
                  Contact our team <ArrowRight size={16} />
                </button>
              </div> */}
            </div>
          </aside>

          {/* Right Content - Scrollable */}
          <div className="lg:w-[72%] space-y-8">
            {storyData.content.map((section, index) => (
              <section key={index} className="group">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="text-purple-600/80 text-4xl font-medium italic">0{index + 1}.</span>
                  {section.heading}
                </h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {section.body}
                  </p>
                </div>
                {index !== storyData.content.length - 1 && (
                  <div className="mt-8 h-px bg-gradient-to-r from-slate-200 to-transparent"></div>
                )}
              </section>
            ))}
          </div>

        </div>
      </main>

     
    </div>
  );
};

export default function SinglePageOfCaseStories() {
  return <SuccessStory />;
}