
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Award, Heart } from 'lucide-react';

/**
 * Animated Counter Component
 * Counts from 0 to the target number once it becomes visible.
 */
const AnimatedCounter = ({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

/**
 * Individual Stat Card Component
 */
const StatCard = ({ icon: Icon, target, label, suffix }: { icon: any, target: number, label: string, suffix: string }) => (
  <div className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-2 overflow-hidden">
    {/* Decorative background glow */}
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
    
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-500">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        <AnimatedCounter target={target} suffix={suffix} />
      </div>
      
      <div className="text-sm font-medium uppercase tracking-widest text-slate-400 group-hover:text-slate-200 transition-colors">
        {label}
      </div>
    </div>
  </div>
);

export default function StatCards() {
  const stats = [
    { icon: Briefcase, target: 500, label: "Projects Completed", suffix: "+" },
    { icon: Users, target: 200, label: "Happy Clients", suffix: "+" },
    { icon: Award, target: 15, label: "Years Experience", suffix: "+" },
    { icon: Heart, target: 98, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6">
      <section className="w-full max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Impact</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Numbers that speak for themselves</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              target={stat.target}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>

        {/* Bottom subtle text or CTA */}
        <p className="mt-12 text-center text-slate-500 text-sm max-w-2xl mx-auto">
          We leverage our years of expertise to deliver exceptional digital experiences for brands worldwide. 
          Join hundreds of satisfied clients and let's build something amazing together.
        </p>
      </section>
    </main>
  );
}

