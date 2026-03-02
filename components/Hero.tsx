

// /////new 

// "use client";

// import React from "react";
// import FlowButton from "./FlowButton";

// const Hero: React.FC = () => {
//   return (
//     <div className="relative flex h-[500px] md:min-h-screen w-full overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/image/0_Colleague_Leadership_1920x1080.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center w-full templateContainer">
//         <div className="lg:w-1/2 flex items-center justify-start">
//           <div className="max-w-xl text-white relative">
//             <div className="relative z-10 space-y-5 pt-0 lg:pt-16">
              
//               <p className="text-sm font-semibold uppercase tracking-widest border-l-2 border-purple-400 pl-4 text-[#fce9f6]">
//                 Research
//               </p>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
//                 Our Research Based
//                 <br />
//                 <span className="font-medium">
//                   For{" "}
//                   <span className="text-purple-200">
//                     Your Project
//                   </span>
//                 </span>
//               </h2>

//               <p className="text-gray-200  font-light text-[16.36px] leading-[23px] tracking-[0.4px]  max-w-md">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Aspernatur, totam accusantium.
//               </p>

//               <div className="flex gap-4 pt-4">
//                 <FlowButton text="Call Now" href="tel:+919905275236" />
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



////////new content


/////new 

"use client";

import React from "react";
import FlowButton from "./FlowButton";

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-[600px] md:min-h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/image/0_Colleague_Leadership_1920x1080.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center w-full templateContainer">
        <div className="lg:w-1/2 flex items-center justify-start">
          <div className="max-w-2xl text-white relative">
            <div className="relative z-10 space-y-5 pt-0 lg:pt-16">
              
              {/* <p className="text-sm font-semibold uppercase tracking-widest border-l-2 border-purple-400 pl-4 text-[#fce9f6]">
                Research
              </p> */}

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
            We Study the Market
                <br />
                <span className="font-medium">
                  So{" "}
                  <span className="text-purple-200">
                   You Don’t Have to Guess.
                  </span>
                </span>
              </h2>

              <p className="text-gray-200 font-sans   max-w-md">
           We bridge global ambition with local UAE market realities. At Researchers, we transform complex market data into clear, actionable strategies that help you enter, expand, and grow with confidence.
              </p>

              <div className="flex gap-4 pt-4">
                <FlowButton text="Talk to Our Experts" href="tel:+919905275236" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;