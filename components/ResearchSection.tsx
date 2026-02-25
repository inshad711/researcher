
"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Microscope } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const transitionCurve = [0.76, 0, 0.24, 1] as const;

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="w-full bg-white py-16 md:py-24 overflow-hidden text-stone-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Side: Content --- */}
          <div className="flex flex-col items-start gap-6 order-2 lg:order-1">
            {/* <SectionTag text="Innovation & R&D" /> */}

            <h2 className="text-3xl md:text-[38px] font-normal text-gray-900 leading-tight tracking-tighter">
              Precision <span className="text-purple-800 font-light">Driven by</span>{" "}
              Material  Research
            </h2>

            <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed max-w-xl">
              Our dedicated research team continuously explores sustainable materials 
              and structural engineering to ensure your packaging is as durable as it 
              is beautiful. 
            </p>

            <div className="space-y-4 mb-4">
            
               
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-stone-700 font-medium px-2">
                <Feature text="Eco-ink Stability Tests" />
                <Feature text="Structural Stress Analysis" />
                <Feature text="Sustainable Fiber Sourcing" />
                <Feature text="Anti-Scuff Coating R&D" />
              </ul>
            </div>

            <a
              href="/innovation"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 to-purple-600 text-white px-5 py-3 font-medium rounded-xl transition-all hover:shadow-xl active:scale-95"
            >
              <span>Our Research Process</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
              </div>
            </a>
          </div>

          {/* --- Right Side: Image Reveal --- */}
          <div className="order-1 lg:order-2">
            <RevealImage
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp" // Replace with an image of your lab or prototyping process
              alt="Packaging Material Research"
              className="aspect-[4/3] rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Internal Sub-Components --- */

function SectionTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-md font-bold uppercase tracking-[0.2em] text-purple-800">
        {text}
      </span>
      <div className="w-8 h-[1px] bg-[#901f2c]"></div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-md">
      <span className="w-1.5 h-1.5 bg-purple-900 rounded-full" />
      {text}
    </li>
  );
}

const RevealImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-stone-100 group ${className}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.6, ease: transitionCurve }}
      >
        <Image height={800} width={800} src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>

      {/* Reveal Curtains */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[51%] bg-white z-20"
        initial={{ y: "0%" }}
        animate={isInView ? { y: "-100%" } : {}}
        transition={{ duration: 1.2, ease: transitionCurve, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[51%] bg-white z-20"
        initial={{ y: "0%" }}
        animate={isInView ? { y: "100%" } : {}}
        transition={{ duration: 1.2, ease: transitionCurve, delay: 0.2 }}
      />
    </div>
  );
};