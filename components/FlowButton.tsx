
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FlowButtonProps {
  text: string;
  href: string;
}

const FlowButton = ({ text, href }: FlowButtonProps) => {
  return (
    <Link href={href}>
      <div className="group/button relative flex items-center gap-1 md:gap-4 overflow-hidden rounded-full bg-white  py-1 px-3 md:pl-6 shadow-md transition-all duration-300 hover:shadow-lg active:scale-95">
        {/* Black fill */}
        <div className="absolute inset-0 z-0 w-0 bg-black transition-all duration-500 group-hover/button:w-full" />

        {/* Text */}
        <span className="z-10 transition-colors group-hover/button:text-white text-[#364153] font-light text-[16.36px] leading-[23px] tracking-[0.4px]">
          {text}
        </span>

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center rounded-full bg-purple-700 p-2 text-white transition-transform duration-300 group-hover/button:scale-105">
          <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover/button:rotate-0" />
        </div>
      </div>
    </Link>
  );
};

export default FlowButton;