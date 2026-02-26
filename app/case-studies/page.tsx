import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartNoAxesCombined, Dot, Sparkles, Target } from "lucide-react";
import CaseHero from "@/components/CaseHero";
import SuccessStories from "@/components/SuccessStories";
import SinglePageOfCaseStoies from "@/components/SinglePageOfCaseStoies";
import CaseStudieMain from "@/components/CaseStudieMain";

const projects = [
  {
    title: "Retail Expansion Feasibility",
    sector: "Consumer Retail",
    impact: "+31% launch confidence",
    summary:
      "Mapped demand heat zones, built scenario-based revenue models, and prioritized neighborhoods for phased rollout.",
    image: "/image/46908.webp",
    tone: "from-slate-50 to-slate-100",
  },
  {
    title: "Healthcare Service Experience Redesign",
    sector: "Healthcare",
    impact: "-22% drop-off in patient journey",
    summary:
      "Identified friction across appointment and follow-up flows using mixed-method fieldwork and service blueprinting.",
    image: "/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp",
    tone: "from-slate-50 to-slate-100",
  },
  {
    title: "Fintech Product-Market Validation",
    sector: "Financial Services",
    impact: "2.4x trial-to-paid conversion",
    summary:
      "Connected behavioral cohort signals to message testing, then aligned onboarding and pricing experiments.",
    image: "/image/2328655_P9A0N90.webp",
    tone: "from-slate-50 to-slate-100",
  },
];

const signals = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Sectors Covered", value: "32" },
  { label: "Avg. Insight Sprint", value: "14 days" },
];

export default function ProjectsPage() {
  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <div className="pt-28  text-slate-900">
      <div>
        <CaseHero/>
      </div>
      {/* <div>
        <SuccessStories/>
      </div> */}

      <CaseStudieMain/>

       <SinglePageOfCaseStoies/>
      {/* <section className="templateContainer">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-9">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                <Sparkles className="h-3.5 w-3.5" />
                Project Atlas
              </p>
              <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                We turn complex project questions into decision-ready clarity.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                Built as research narratives, not case dumps. Each engagement combines market proof, behavior signals,
                and execution logic your team can act on immediately.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  Evidence-led strategy
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  Fast validation cycles
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  Clear executive outputs
                </span>
              </div>
            </div>

            <aside className="relative lg:col-span-4">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Project Signals</p>
                <div className="mt-4 space-y-3">
                  {signals.map((item) => (
                    <article key={item.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                      <p className="text-xl font-semibold text-slate-900">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-500">{item.label}</p>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section> */}

      <section className="templateContainer pt-0">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:col-span-8">
            <div className="relative h-[24rem] md:h-[31rem]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white md:inset-x-8 md:bottom-8">
                <p className="inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                  Featured Project
                </p>
                <h2 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight md:text-4xl">{featured.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-100 md:text-base">{featured.summary}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-100">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/20 px-3 py-1">
                    <Target className="h-3.5 w-3.5" />
                    {featured.sector}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/20 px-3 py-1">
                    <ChartNoAxesCombined className="h-3.5 w-3.5" />
                    {featured.impact}
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 lg:col-span-4">
            {secondary.map((project) => (
              <article
                key={project.title}
                className={`rounded-[1.4rem] border border-slate-200 bg-gradient-to-br p-5 ${project.tone}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">{project.sector}</p>
                <h3 className="mt-3 text-xl font-semibold leading-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>
                <p className="mt-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                  <Dot className="h-4 w-4" />
                  {project.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="templateContainer pt-0">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-6 lg:col-span-8 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Start Your Project</p>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight md:text-3xl">
                Bring us the challenge. We&apos;ll build the research path.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Structured discovery, aligned stakeholders, and a clear output format your team can execute on.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Kickoff in 48 hours</p>
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Weekly decision checkpoints</p>
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Board-ready final readout</p>
              </div>
            </div>

            <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white lg:col-span-4 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Next Step</p>
              <h3 className="mt-3 text-xl font-semibold leading-tight">Book a project scoping call.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                30 minutes to define scope, priorities, and your first research sprint.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-300"
                >
                  View Services
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

     
    </div>
  );
}
