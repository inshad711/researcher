
// "use client";

// import Link from "next/link";
// import React from "react";
// import FlowButton from "./FlowButton";


// const Hero: React.FC = () => {
//   return (
//     <div className="relative flex h-[500px] md:min-h-screen w-full bg-[#1a1a1a] bg-cover object-cover bg-center  sm:bg-[url('/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp')]  bg-[url('/image/46908.webp')]">
//       <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div>
//       <div className="relative z-10 flex items-center w-full templateContainer">
//         <div className="lg:w-1/2 flex items-center justify-start">
//           <div className="max-w-xl text-white relative">
//             <div className="relative z-10 space-y-5 pt-0 lg:pt-16">
//               <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-purple-400 pl-4 text-[#fce9f6]">
//               Research
//               </h3>

//               <h2 className="text-3xl semibold md:text-4xl lg:text-5xl font-semibold leading-tight">
//                 Our              Research
// Based
//                 <br />{" "}
//                 <span className="font-medium">
//                   {" "}
//                   For{" "}
//                   <span className="text-purple-200 font-semibold">
//                     Your Project
//                   </span>
//                 </span>
//               </h2>

//               <p className="text-lg md:text-xl text-gray-200 font-light max-w-md">
              
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, totam accusantium
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



////video
"use client";

import React from "react";
import FlowButton from "./FlowButton";

const Hero: React.FC = () => {
  return (
    <div className="relative flex h-[500px] md:min-h-screen w-full overflow-hidden">
      
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
          <div className="max-w-xl text-white relative">
            <div className="relative z-10 space-y-5 pt-0 lg:pt-16">
              
              <h3 className="text-sm font-semibold uppercase tracking-widest border-l-2 border-purple-400 pl-4 text-[#fce9f6]">
                Research
              </h3>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Our Research Based
                <br />
                <span className="font-medium">
                  For{" "}
                  <span className="text-purple-200 font-semibold">
                    Your Project
                  </span>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 font-light max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur, totam accusantium.
              </p>

              <div className="flex gap-4 pt-4">
                <FlowButton text="Call Now" href="tel:+919905275236" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;