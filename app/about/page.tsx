"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChartNoAxesColumn, Compass, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import MainAbout from "@/components/MainAbout";
import Stat2 from "@/components/Stat2";
import Instructor from "@/components/Instructor";

const pillars = [
  {
    title: "Creative Analysis",
    description: "We uncover overlooked patterns and opportunities through disciplined, creative analysis.",
    icon: Lightbulb,
  },
  {
    title: "Strategic Design",
    description: "Every study is engineered for decisions, not just reports.",
    icon: Compass,
  },
  {
    title: "Data Transformation",
    description: "Raw data becomes a practical growth plan your team can execute.",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Trusted Decisioning",
    description: "We help leadership teams make confident moves in uncertain markets.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  "Ask the right questions",
  "Define the problem clearly",
  "Design the sample",
  "Build the research plan",
  "Collect and structure data",
  "Analyze and model insights",
  "Present actionable outcomes",
  "Support implementation",
];

const values = [
  "Customer Satisfaction & Transparency",
  "Innovation & Creativity",
  "In-depth Reporting",
  "Strong Management Discipline",
];

const aboutSignals = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Decision Workshops", value: "120+" },
  { label: "Average Turnaround", value: "14 days" },
];

export default function AboutPage() {
  return (
    <main className="relative pt-28  text-slate-900">
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(255,140,66,0.14),transparent_26%),radial-gradient(circle_at_90%_10%,rgba(255,203,131,0.14),transparent_30%)]" /> */}
<div>
  <MainAbout/>
</div>
<div>
  <Stat2/>
</div>

<div>
  <Instructor/>
</div>


      <ProcessSection/>

{/* 
      <section className="templateContainer">
        <div className="mx-auto max-w-7xl md:px-16  bg-white">

          <div className="flex flex-col items-center text-center">
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">How We Work</p>
  <h2 className="mt-3 text-3xl font-medium md:text-[40px] max-w-3xl">
    A rigorous process, tailored to your market context.
  </h2>
</div>
          <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step} className="rounded-xl border border-slate-200 bg-[#fcfcfb] p-4">
                <p className="text-md font-bold uppercase tracking-[0.15em] text-slate-500">Step {index + 1}</p>
                <p className="mt-2 text-sm md:text-[16px] font-medium text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section> */}

      <section className="templateContainer pt-0">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-6 lg:col-span-8 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Partner With Us</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
                Turn your next market question into a confident strategic move.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                We align teams quickly, validate assumptions with evidence, and deliver outputs built for action.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Discovery in 48 hours</p>
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Decision-focused reporting</p>
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Hands-on implementation support</p>
              </div>
            </div>

            <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white lg:col-span-4 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Next Step</p>
              <h3 className="mt-3 text-xl font-semibold leading-tight">Book a strategic intake call.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We&apos;ll define scope, timeline, and the right research model for your goal.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Become a Client
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-300"
                >
                  Explore Services
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
