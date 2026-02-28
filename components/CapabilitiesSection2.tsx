

// //// new
// import React from 'react';
// import { 
//   Users, 
//   Shuffle, 
//   Settings, 
//   Headphones, 
//   Globe, 
//   PhoneIncoming,
//   ArrowRight
// } from 'lucide-react';

// /**
//  * Interface for each capability item
//  */
// interface CapabilityItem {
//   id: string;
//   number: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   link: string;
// }

// const CapabilitiesSection: React.FC = () => {
//   const capabilities: CapabilityItem[] = [
//     {
//       id: '01',
//       number: '01',
//       title: 'QUANTITATIVE RESEARCH',
//       description: 'think Positive quantitative research is aimed at helping you achieve your business.',
//       icon: <Users className="w-10 h-10" />,
//       link: 'https://thinkpositive.ae/quantitaive/'
//     },
//     {
//       id: '02',
//       number: '02',
//       title: 'QUALITATIVE RESEARCH',
//       description: 'Construing the micro-level data where no two opinions are the same is a tough undertaking.',
//       icon: <Shuffle className="w-10 h-10" />,
//       link: 'https://thinkpositive.ae/qualitative/'
//     },
//     {
//       id: '03',
//       number: '03',
//       title: 'MARKET RESEARCH',
//       description: 'Think Positive Market research services generally include gathering, analyzing, and interpreting information about a market.',
//       icon: <Settings className="w-10 h-10" />,
//       link: 'https://thinkpositive.ae/market-research/'
//     },
//     {
//       id: '04',
//       number: '04',
//       title: 'FEASIBILITY STUDY',
//       description: 'The feasibility studies are based on Think Positive’s deep market insights gained through years of market research.',
//       icon: <Headphones className="w-10 h-10" />,
//       link: 'https://thinkpositive.ae/feasibility-study/'
//     },
//     {
//       id: '05',
//       number: '05',
//       title: 'ONLINE SURVEY',
//       description: 'Our online panel administrations are beaten course and cater to Data Collection Companies.',
//       icon: <PhoneIncoming className="w-10 h-10" />,
//       link: 'https://thinkpositive.ae/survey/'
//     },
//     {
//       id: '06',
//       number: '06',
//       title: 'ONLINE RESEARCH',
//       description: 'Online research involves collecting information from the internet, a method that has largely replaced traditional techniques.',
//       icon: <Globe className="w-10 h-10" />,
//       link: 'https://thinkpositive.ae/online-research/'
//     }
//   ];

//   const column1 = [capabilities[1], capabilities[3], capabilities[5]];
//   const column2 = [capabilities[0], capabilities[2], capabilities[4]];

//   return (
//     <section className="px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
//         {/* Left Side: Header and Staggered Column 1 */}
//         <div className="space-y-8">
//           <div className="mt-24">
//             <h2 className="text-4xl md:text-5xl font-normal capitalize text-black mb-4 tracking-tight">
//              Capabilities and <br className="hidden md:block" /> competencies
//             </h2>
//             <p className="text-gray-600 text-lg font-medium">
//               Think Positive is Providing the best Services
//             </p>
//           </div>

//           <div className="space-y-8">
//             {column1.map((item) => (
//               <CapabilityCard key={item.id} item={item} />
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Column 2 */}
//         <div className="lg:mt-24 space-y-8">
//           {column2.map((item) => (
//             <CapabilityCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const CapabilityCard: React.FC<{ item: CapabilityItem }> = ({ item }) => {
//   return (
//     <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-purple-50 flex flex-col h-full">
//       {/* Icon and Number Row */}
//       <div className="flex justify-between items-start mb-6">
//         <div className="text-purple-600 bg-purple-50 p-3 rounded-xl   transition-all duration-300">
//           {item.icon}
//         </div>
//         <span className="text-5xl font-black text-purple-100/30 group-hover:text-purple-200/50 transition-colors duration-300">
//           {item.number}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="space-y-3">
//         <h3 className="text-xl font-bold text-gray-800  transition-colors duration-300 uppercase">
//           {item.title}
//         </h3>
//         <p className="text-gray-500 leading-relaxed text-sm md:text-base group-hover:text-gray-700">
//           {item.description}
//         </p>
//       </div>

//       {/* Hover Overlay / Read More */}
//       <div className="mt-6 flex items-center text-black font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
//         <a 
//           href={item.link} 
//           className="inline-flex items-center gap-2 hover:gap-4 transition-all"
//           target="_blank" 
//           rel="noopener noreferrer"
//         >
//           Explore Service <ArrowRight className="w-4 h-4" />
//         </a>
//       </div>
      
//       {/* Decorative accent bar */}
//       {/* <div className="absolute bottom-0 left-0 w-full h-1.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /> */}
//     </div>
//   );
// };

// export default function CapabilitiesSection2() {
//   return (
//     <div className=" bg-white">
//       <CapabilitiesSection />
//     </div>
//   );
// }

///////new


// import React from 'react';
// import { CheckCircle2 } from 'lucide-react'; // Or use your custom SVG icons

// interface CardProps {
//   title: string;
//   description: string;
//   iconBgColor: string;
// }

// const features: CardProps[] = [
//   {
//     title: 'Feasibility Studies',
//     description: 'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
//     iconBgColor: 'bg-sky-400',
//   },
//   {
//     title: 'Data Story Telling',
//     description: 'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
//     iconBgColor: 'bg-yellow-400',
//   },
//   {
//     title: 'Mystery Shopping ',
//     description: 'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
//     iconBgColor: 'bg-pink-400',
//   },
// ];

// const CapabilitiesSection2 = () => {
//   return (
//     <section className="pb-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading Area */}
//         <div className="text-center mb-16">
           
//           <h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-4 tracking-tight">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">Services</span>
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto text-lg">our services and the community we've built. Here's a glimpse of what we've achieved together so far.</p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-10 rounded-[15px] shadow-sm flex flex-col items-start text-left border border-slate-100 transition-transform hover:scale-[1.02] duration-300"
//             >
//               {/* Icon Circle */}
//               <div className={`${feature.iconBgColor} p-3 rounded-full mb-8`}>
//                 <CheckCircle2 className="w-8 h-8 text-white" />
//               </div>

//               {/* Text Content */}
//               <h3 className="text-2xl font-normal text-slate-900 mb-4">
//                 {feature.title}
//               </h3>
//               <p className="text-slate-600 leading-relaxed text-lg">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CapabilitiesSection2;


// import React from 'react';
// import { CheckCircle2, ArrowRight } from 'lucide-react';

// interface CardProps {
//   title: string;
//   description: string;
//   iconBgColor: string;
//   link: string;
// }

// const features: CardProps[] = [
//   {
//     title: 'Feasibility Studies',
//     description: 'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
//     iconBgColor: 'bg-sky-400',
//     link: '#',
//   },
//   {
//     title: 'Data Story Telling',
//     description: 'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
//     iconBgColor: 'bg-yellow-400',
//     link: '#',
//   },
//   {
//     title: 'Mystery Shopping',
//     description: 'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
//     iconBgColor: 'bg-pink-400',
//     link: '#',
//   },
// ];

// const CapabilitiesSection2 = () => {
//   return (
//     <section className="pb-20">
//       <div className="templateContainer">

//         {/* Heading Area */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-4 tracking-tight">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">Services</span>
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto text-lg">
//             Our services and the community we've built. Here's a glimpse of what we've achieved together so far.
//           </p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {features.map((feature, index) => (
//             <div 
//               key={index}
//               className="bg-white px-7 py-9 rounded-[15px] shadow-sm flex flex-col items-start text-left border border-slate-100 duration-300"
//             >
              
//               {/* Icon Circle */}
//               <div className={`${feature.iconBgColor} p-3 rounded-full mb-6`}>
//                 <CheckCircle2 className="w-8 h-8 text-white" />
//               </div>

//               {/* Text Content */}
//               <h3 className="text-[20px] font-normal text-slate-900 mb-4">
//                 {feature.title}
//               </h3>

//               <p className="text-slate-600 leading-relaxed text-md mb-4">
//                 {feature.description}
//               </p>

          
//               <a
//   href={feature.link}
//   className="group inline-flex items-center text-black font-medium text-lg leading-none transition-all duration-300"
// >
//   <span className="flex items-center gap-2">
//     Explore More
//     <ArrowRight className="w-4 h-4 mt-[1px] transition-transform duration-300 group-hover:translate-x-1" />
//   </span>
// </a>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CapabilitiesSection2;

/////new
import React from 'react';
import { BarChart3, LineChart, Search, ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  iconBgColor: string;
  link: string;
  icon: React.ReactNode;
}

const features: CardProps[] = [
  {
    title: 'Feasibility Studies',
    description:
      'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
    iconBgColor: 'bg-sky-100',
    link: '#',
    icon: <BarChart3 className="w-6 h-6 text-sky-600" />,
  },
  {
    title: 'Data Story Telling',
    description:
      'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
    iconBgColor: 'bg-yellow-100',
    link: '#',
    icon: <LineChart className="w-6 h-6 text-yellow-600" />,
  },
  {
    title: 'Mystery Shopping',
    description:
      'We offer specialized BI teams that enable guaranteed improved CSAT & response times boost.',
    iconBgColor: 'bg-pink-100',
    link: '#',
    icon: <Search className="w-6 h-6 text-pink-600" />,
  },
];

const CapabilitiesSection2 = () => {
  return (
    <section className="pb-20">
      <div className="templateContainer bg-[#FFFFFF]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px] mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
              Services
            </span>
          </h2>
          {/* <h2 className="
  text-[clamp(1.8rem,4vw,2.4rem)]
  leading-[clamp(2.2rem,4.5vw,2.6rem)]
  font-normal
  text-[#101010]
  mb-4
">
  Our{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
    Services
  </span>
</h2> */}
          <p className="text-[#364153] font-light max-w-xl mx-auto text-[16.36px] leading-[23px] tracking-[0.4px] ">
            Our services and the community we've built. Here's a glimpse of what we've achieved together so far.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white px-7 py-9 rounded-[15px] shadow-sm border border-slate-100 flex flex-col items-start text-left"
            >
              {/* Icon Box (Not Fully Round) */}
              <div
                className={`${feature.iconBgColor} p-3 rounded-md mb-6 flex items-center justify-center`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-sans font-normal text-[#101010] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className=" text-[#364153] font-light text-[16.36px] leading-[23px] mb-6">
                {feature.description}
              </p>

              {/* Link */}
              <a
                href={feature.link}
                className="inline-flex items-center gap-2 text-[16px] font-sans font-normal text-[#101010]"
              >
                Explore More
                <ArrowRight className="w-4 h-4 mt-[1px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection2;