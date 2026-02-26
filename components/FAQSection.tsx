// "use client";
// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "How can I get started with Accounting and Bookkeeping services in Dubai?",
//     answer: "To get started, contact Reyson Badger, which is a reputable accounting firm in Dubai, to discuss your specific needs and requirements and we will guide you through the process."
//   },
//   {
//     question: "What does a Forensic audit entail?",
//     answer: "Forensic audit services in Dubai involve in-depth analysis, including tracing transactions, examining documents, and interviewing personnel to identify irregularities."
//   },
//   {
//     question: "Is it possible to renew my Tax Residency Certificate online?",
//     answer: "Yes, you can renew your TRC through the FTA's EmaraTax Portal."
//   },
//   {
//     question: "I am a UAE national who is living abroad. Can I apply for a Tax Residency Certificate?",
//     answer: "Yes, but you must meet the eligibility requirements and provide the required documentation."
//   },
//   {
//     question: "How do I choose the right feasibility study firm for my Dubai project?",
//     answer: "Assess their experience in your industry, evaluate their track record, and ensure they understand local regulations and market conditions."
//   },
//   {
//     question: "Who needs accounting services?",
//     answer: "Any business or individual who needs to manage finances, prepare statements, and ensure tax compliance needs accounting services."
//   }
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[#0a1d37] text-white py-16 px-6 md:px-12 lg:px-20 min-h-screen">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
//         {/* Left Column: Heading */}
//         <div className="lg:col-span-4">
//           <h2 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
//             FAQs
//           </h2>
//           <div className="w-full h-[2px] bg-blue-400 mb-8"></div>
//           <h3 className="text-2xl md:text-3xl font-medium leading-tight max-w-sm">
//             A knowledge base search feature is a must-have
//           </h3>
//         </div>

//         {/* Right Column: Accordion */}
//         <div className="lg:col-span-8">
//           <div className="divide-y divide-gray-500/50">
//             {faqData.map((faq, index) => (
//               <div key={index} className="py-2">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full flex justify-between items-center py-6 text-left hover:text-blue-300 transition-colors group"
//                 >
//                   <span className="text-lg md:text-xl font-light pr-8">
//                     {faq.question}
//                   </span>
//                   <Plus 
//                     className={`w-6 h-6 transform transition-transform duration-300 flex-shrink-0 ${
//                       openIndex === index ? 'rotate-45' : ''
//                     }`} 
//                   />
//                 </button>
                
//                 <div 
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <p className="text-gray-300 text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;

// "use client";
// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';

// const faqData = [
//   {
//     question: "How can I get started with Accounting and Bookkeeping services in Dubai?",
//     answer: "To get started, contact Reyson Badger, which is a reputable accounting firm in Dubai, to discuss your specific needs and requirements and we will guide you through the process."
//   },
//   {
//     question: "What does a Forensic audit entail?",
//     answer: "Forensic audit services in Dubai involve in-depth analysis, including tracing transactions, examining documents, and interviewing personnel to identify irregularities."
//   },
//   {
//     question: "Is it possible to renew my Tax Residency Certificate online?",
//     answer: "Yes, you can renew your TRC through the FTA's EmaraTax Portal."
//   },
//   {
//     question: "I am a UAE national who is living abroad. Can I apply for a Tax Residency Certificate?",
//     answer: "Yes, but you must meet the eligibility requirements and provide the required documentation."
//   },
//   {
//     question: "How do I choose the right feasibility study firm for my Dubai project?",
//     answer: "Assess their experience in your industry, evaluate their track record, and ensure they understand local regulations and market conditions."
//   },
//   {
//     question: "Who needs accounting services?",
//     answer: "Any business or individual who needs to manage finances, prepare statements, and ensure tax compliance needs accounting services."
//   }
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white text-black py-16 px-6 md:px-12 lg:px-20 min-h-screen">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
//         {/* Left Column: Heading */}
//         <div className="lg:col-span-4">
//           <h2 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight text-black">
//             FAQs
//           </h2>
//           <div className="w-full h-[2px] bg-blue-600 mb-8"></div>
//           <h3 className="text-2xl md:text-3xl font-medium leading-tight max-w-sm text-gray-800">
//             A knowledge base search feature is a must-have
//           </h3>
//         </div>

//         {/* Right Column: Accordion */}
//         <div className="lg:col-span-8">
//           <div className="divide-y divide-gray-200">
//             {faqData.map((faq, index) => (
//               <div key={index} className="py-2">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full flex justify-between items-center py-6 text-left hover:text-blue-600 transition-colors group"
//                 >
//                   <span className="text-lg md:text-xl font-light pr-8 text-black">
//                     {faq.question}
//                   </span>
//                   <Plus 
//                     className={`w-6 h-6 transform transition-transform duration-300 flex-shrink-0 text-black ${
//                       openIndex === index ? 'rotate-45' : ''
//                     }`} 
//                   />
//                 </button>
                
//                 <div 
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;


// "use client";

// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';

// // 1. Define the shape of your FAQ data
// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "How can I get started with Accounting and Bookkeeping services in Dubai?",
//     answer: "To get started, contact Reyson Badger, which is a reputable accounting firm in Dubai, to discuss your specific needs and requirements and we will guide you through the process."
//   },
//   {
//     question: "What does a Forensic audit entail?",
//     answer: "Forensic audit services in Dubai involve in-depth analysis, including tracing transactions, examining documents, and interviewing personnel to identify irregularities."
//   },
//   {
//     question: "Is it possible to renew my Tax Residency Certificate online?",
//     answer: "Yes, you can renew your TRC through the FTA's EmaraTax Portal."
//   },
//   {
//     question: "I am a UAE national who is living abroad. Can I apply for a Tax Residency Certificate?",
//     answer: "Yes, but you must meet the eligibility requirements and provide the required documentation."
//   },
//   {
//     question: "How do I choose the right feasibility study firm for my Dubai project?",
//     answer: "Assess their experience in your industry, evaluate their track record, and ensure they understand local regulations and market conditions."
//   },
//   {
//     question: "Who needs accounting services?",
//     answer: "Any business or individual who needs to manage finances, prepare statements, and ensure tax compliance needs accounting services."
//   }
// ];

// const FAQSection: React.FC = () => {
//   // 2. Explicitly type the state to allow number or null
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number): void => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white text-black py-16 px-6 md:px-12 lg:px-20 min-h-screen">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
//         {/* Left Column: Heading */}
//         <div className="lg:col-span-4">
//           <h2 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight text-black">
//             FAQs
//           </h2>
//           <div className="w-full h-[2px] bg-blue-600 mb-8"></div>
//           <h3 className="text-2xl md:text-3xl font-medium leading-tight max-w-sm text-gray-800">
//             A knowledge base search feature is a must-have
//           </h3>
//         </div>

//         {/* Right Column: Accordion */}
//         <div className="lg:col-span-8">
//           <div className="divide-y divide-gray-200">
//             {faqData.map((faq, index) => (
//               <div key={index} className="py-2">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full flex justify-between items-center py-6 text-left hover:text-blue-600 transition-colors group focus:outline-none"
//                   aria-expanded={openIndex === index}
//                 >
//                   <span className="text-lg md:text-xl font-light pr-8 text-black">
//                     {faq.question}
//                   </span>
//                   <Plus 
//                     className={`w-6 h-6 transform transition-transform duration-300 flex-shrink-0 text-black ${
//                       openIndex === index ? 'rotate-45' : ''
//                     }`} 
//                   />
//                 </button>
                
//                 <div 
//                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                     openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;


"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can I get started with research services in Dubai?",
    answer: "To get started, contact our research team to discuss your objectives, industry focus, and required insights. We will define the scope, methodology, timeline, and deliverables tailored to your needs."
  },
  {
    question: "What does a market research study include?",
    answer: "A market research study includes industry analysis, competitor benchmarking, target audience insights, demand assessment, and data-driven recommendations to support strategic decisions."
  },
  {
    question: "Do you provide feasibility research for new business ideas?",
    answer: "Yes, we conduct feasibility research that evaluates market demand, financial viability, risk factors, and growth potential before launching a new project."
  },
  {
    question: "Can research reports be customized for specific industries?",
    answer: "Absolutely. Our research solutions are tailored to specific industries, whether it is real estate, retail, technology, healthcare, or manufacturing."
  },
  {
    question: "What research methodologies do you use?",
    answer: "We use both qualitative and quantitative research methods, including surveys, interviews, focus groups, secondary data analysis, and market trend forecasting."
  },
  {
    question: "Who needs professional research services?",
    answer: "Startups, SMEs, corporations, investors, and entrepreneurs who require reliable data for informed decision-making benefit from professional research services."
  },
  {
    question: "How long does it take to complete a research project?",
    answer: "The duration depends on the scope and complexity of the study. Typically, research projects can take anywhere from two weeks to several months."
  },
  {
    question: "Will the research data remain confidential?",
    answer: "Yes, we strictly maintain confidentiality and ensure all client data and research findings are securely handled and protected."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: STICKY */}
        {/* <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight text-purple-700">
       Frequently Ask Questions
          </h2>
     
          <h3 className="text-xl md:text-xl font-medium leading-tight max-w-sm text-gray-800">
            A knowledge base search feature is a must-have
          </h3>
        </div> */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
  <div className="relative inline-block mb-6">
    <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-900 relative z-10">
      Frequently Ask Questions
    </h2>

  
    <svg
      className="absolute left-0 -bottom-4 w-full"
      viewBox="0 0 300 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 15 Q150 0 298 15"
        stroke="#9333EA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>

  <h3 className="text-md md:text-lg font-light leading-tight max-w-sm text-slate-700">
    A knowledge base search feature is a must-have.  A knowledge base search feature is a must-have
  </h3>
</div>

        {/* Right Column: SCROLLING */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-slate-300">
            {faqData.map((faq, index) => (
              <div key={index} className="py-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between cursor-pointer items-center py-5 text-left hover:text-blue-600 transition-colors group focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-light pr-8 text-black">
                    {faq.question}
                  </span>
                  <Plus 
                    className={`w-6 h-6 transform transition-transform duration-300 flex-shrink-0 text-black ${
                      openIndex === index ? 'rotate-45' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 text-base md:text-lg ">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;