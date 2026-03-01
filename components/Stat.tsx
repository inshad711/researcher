
"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';
import { Users, Smile, TrendingUp, Users2, Rocket } from 'lucide-react';

/**
 * Animated Counter Component
 * Uses Framer Motion's animate function to transition numbers smoothly when in view.
 */
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

/**
 * Individual Stat Card Component
 * Features hover effects, glassmorphism, and responsive spacing.
 */
const StatCard = ({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  delay 
}: { 
  icon: any; 
  value: number; 
  suffix: string; 
  label: string; 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group p-6 rounded-3xl bg-gray-50 border border-slate-200  shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
      
      <div className="flex flex-col items-center text-center space-y-4">
     

<div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 group-hover:scale-110 transition-transform duration-300">
  <Icon size={32} strokeWidth={1.5} />
</div>
        <div className="space-y-1">
          <div className="text-3xl md:text-4xl font-normal font-light  leading-[23px] tracking-[0.4px] text-[#101010]">
            <AnimatedCounter value={value} suffix={suffix} />
          </div>
          <h3 className="text-lg font-normal font-light text-[16.36px] leading-[23px] tracking-[0.4px] text-[#364153] text-slate-500 dark:text-slate-400">
            {label}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function Stat() {
  const stats = [
    {
      icon: Smile,
      value: 99,
      suffix: "%",
      label: "Customer satisfaction",
      delay: 0.1
    },
    {
      icon: Users2,
      value: 32,
      suffix: "M",
      label: "Active Users",
      delay: 0.2
    },
    {
      icon: Users,
      value: 125,
      suffix: "+",
      label: "Team members",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      value: 240,
      suffix: "%",
      label: "Company growth",
      delay: 0.4
    }
  ];

  return (
    <section className="px-4 md:px-6 bg-[#FFFFFF] pb-12 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
       
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className=" text-3xl md:text-[38px] font-normal text-[#101010] leading-[42.2px]"
          >
            Our results in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">numbers</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#364153] font-light max-w-xl mx-auto text-[16.36px] leading-[23px] tracking-[0.4px]"
          >
            We take pride in our growth and the community we've built. Here's a glimpse of what we've achieved together so far.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

   
      </div>
    </section>
  );
}