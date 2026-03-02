

// "use client";

// import React, { useState } from 'react';
// import { Plus } from 'lucide-react';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "How can I get started with research services in Dubai?",
//     answer: "To get started, contact our research team to discuss your objectives, industry focus, and required insights. We will define the scope, methodology, timeline, and deliverables tailored to your needs."
//   },
//   {
//     question: "What does a market research study include?",
//     answer: "A market research study includes industry analysis, competitor benchmarking, target audience insights, demand assessment, and data-driven recommendations to support strategic decisions."
//   },
//   {
//     question: "Do you provide feasibility research for new business ideas?",
//     answer: "Yes, we conduct feasibility research that evaluates market demand, financial viability, risk factors, and growth potential before launching a new project."
//   },
//   {
//     question: "Can research reports be customized for specific industries?",
//     answer: "Absolutely. Our research solutions are tailored to specific industries, whether it is real estate, retail, technology, healthcare, or manufacturing."
//   },
//   {
//     question: "What research methodologies do you use?",
//     answer: "We use both qualitative and quantitative research methods, including surveys, interviews, focus groups, secondary data analysis, and market trend forecasting."
//   },
//   {
//     question: "Who needs professional research services?",
//     answer: "Startups, SMEs, corporations, investors, and entrepreneurs who require reliable data for informed decision-making benefit from professional research services."
//   },
//   {
//     question: "How long does it take to complete a research project?",
//     answer: "The duration depends on the scope and complexity of the study. Typically, research projects can take anywhere from two weeks to several months."
//   },
//   {
//     question: "Will the research data remain confidential?",
//     answer: "Yes, we strictly maintain confidentiality and ensure all client data and research findings are securely handled and protected."
//   }
// ];

// const FAQSection: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number): void => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white text-black py-16 px-4 md:px-12 lg:px-20 ">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
    
//         <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
//   <div className="relative inline-block mb-6">
//     <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-900 relative z-10">
//       Frequently Ask Questions
//     </h2>

  
//     <svg
//       className="absolute left-0 -bottom-4 w-full"
//       viewBox="0 0 300 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M2 15 Q150 0 298 15"
//         stroke="#9333EA"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   </div>

//   <h3 className=" font-sans  max-w-sm ">
//     A knowledge base search feature is a must have.  A knowledge base search feature is a must-have
//   </h3>
// </div>

//         {/* Right Column: SCROLLING */}
//         <div className="lg:col-span-8">
//           <div className="divide-y divide-slate-300">
//             {faqData.map((faq, index) => (
//               <div key={index} className="py-0">
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full flex justify-between cursor-pointer items-center py-5 text-left hover:text-blue-600 transition-colors group focus:outline-none"
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
//                   <p className="font-sans">
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


/////new content 


"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
 answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What does Researchers do?",
    answer: "Researchers is a full-service market research agency in Dubai, delivering qualitative and quantitative research, feasibility studies, competitor analysis, and business intelligence solutions. We help companies make confident, data-driven business decisions."
  },
  {
    question: "What services does your market research company in Dubai provide?",
    answer: "We offer UAE market research, feasibility studies, competitor analysis, market analysis, mystery shopping, brand perception services, and business intelligence solutions."
  },
  {
    question: "Which industries do you serve?",
    answer: "We work with startups, SMEs, and established enterprises across key sectors including Retail, Healthcare, Real Estate, Technology, Hospitality, and Education, providing sector-specific market intelligence and strategic insights."
  },
  {
    question: "Can you help with feasibility studies for new ventures?",
    answer: "Absolutely. Our feasibility study services in Dubai and the UAE include market demand analysis, competitor mapping, financial projections, and risk assessment, ensuring your business idea is validated before investment."
  },
  // {
  //   question: "What is the difference between qualitative and quantitative research?",
  //   answer: "Qualitative research focuses on understanding customer motivations, perceptions, and behavior through interviews and focus groups. Quantitative research measures market size, demand, and trends using surveys and statistical data analysis."
  // },
  {
  question: "What is the difference between qualitative and quantitative research?",
  answer: (
    <>
      <span className="font-semibold">Qualitative research</span> focuses on understanding 
      customer motivations, perceptions, and behavior through interviews and focus groups.{" "}
      <span className="font-semibold">Quantitative research</span> measures market size, 
      demand, and trends using surveys and statistical data analysis.
    </>
  )
},
  {
    question: "How long does a typical market research project take?",
    answer: "Project timelines depend on scope and methodology. Most standard market research studies are completed within 2 to 6 weeks, ensuring accurate data collection and in-depth analysis."
  },
  {
    question: "Do you offer support for startups?",
    answer: "Yes. We help startups reduce risk by validating business concepts, analyzing market potential, defining target audiences, and developing strong market entry strategies."
  },
  // {
  //   question: "How can I get started with a project?",
  //   answer: "Simply click “Book a Consultation.” Our experts will understand your objectives and design a customized research strategy aligned with your growth goals."
  // }
  {
  question: "How can I get started with a project?",
  answer: (
    <>
      Simply click{" "}
      <a
        href="/contact"
        className="font-medium text-purple-600 hover:underline"
      >
        Book a Consultation
      </a>
      . Our experts will understand your objectives and design a customized
      research strategy aligned with your growth goals.
    </>
  )
}
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 px-4 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
    
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

  <h3 className=" font-sans  max-w-sm ">
   Expert Answers to Your Market Research Queries.
  </h3>
</div>

        {/* Right Column: SCROLLING */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-slate-300">
            {faqData.map((faq, index) => (
              <div key={index} className="py-0">
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
                  <p className="font-sans">
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