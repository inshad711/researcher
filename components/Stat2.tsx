"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Tv, UserRound, GraduationCap, BadgeCheck } from 'lucide-react';

/**
 * CountUp Component
 * Animates a number from 0 to the target value when it enters the viewport.
 */
const CountUp = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="flex items-baseline">
      <span className="text-2xl font-semibold text-slate-800 tracking-tight">
        {count}
      </span>
      <span className="text-2xl font-semibold text-slate-800 tracking-tight">
        {suffix}
      </span>
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      label: "Online Courses",
      value: 10,
      suffix: "K",
      icon: <Tv className="w-10 h-10" />,
      bgColor: "bg-orange-50",
      iconColor: "text-amber-500",
    },
    {
      label: "Expert Tutors",
      value: 200,
      suffix: "+",
      icon: <UserRound className="w-10 h-10" />,
      bgColor: "bg-slate-100",
      iconColor: "text-slate-700",
    },
    {
      label: "Online Students",
      value: 60,
      suffix: "K+",
      icon: <GraduationCap className="w-10 h-10" />,
      bgColor: "bg-purple-50",
      iconColor: "text-indigo-600",
    },
    {
      label: "Certified Courses",
      value: 6,
      suffix: "K+",
      icon: <BadgeCheck className="w-10 h-10" />,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md ${stat.bgColor}`}
            >
              {/* Icon Container */}
              <div className={`${stat.iconColor} flex-shrink-0`}>
                {stat.icon}
              </div>

              {/* Text Content */}
              <div className="ml-5">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-medium text-slate-600 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Stat2() {
  return (

     
      <div className="w-full max-w-7xl mx-auto">
        <StatsSection />
      </div>

   

  );
}
