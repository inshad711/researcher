import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, CheckCircle2, Compass, Scale, ShieldCheck, TrendingUp, Wallet, Wrench } from "lucide-react";

type FeasibilityType = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  example: string;
  icon: ComponentType<{ className?: string }>;
};

const expertisePoints = [
  "Dedication and professionalism",
  "Commitment and measurable results",
  "Data-driven recommendations for confident decisions",
];

const feasibilityTypes: FeasibilityType[] = [
  {
    title: "Technical Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-thisisengineering-3862132-1024x683.jpg",
    imageAlt: "Technical feasibility planning session",
    description:
      "Evaluate whether the required technology, architecture, and team capabilities are ready to support implementation.",
    example:
      "Determining whether a new software system can be built using existing infrastructure and available engineering resources.",
    icon: Wrench,
  },
  {
    title: "Economic Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-energepiccom-159888-1024x768.jpg",
    imageAlt: "Economic feasibility cost and revenue review",
    description:
      "Assess project profitability through cost modeling, projected benefits, and return-on-investment analysis.",
    example:
      "Analyzing whether opening a new restaurant branch in a target location can generate enough profit to justify initial investment.",
    icon: TrendingUp,
  },
  {
    title: "Operational Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-pixabay-159298-1024x684.jpg",
    imageAlt: "Operational feasibility and team adoption",
    description:
      "Verify that the initiative fits existing workflows, systems, and teams and can be adopted smoothly in daily operations.",
    example:
      "Evaluating whether a new project management platform will be adopted by teams and improve delivery efficiency.",
    icon: Compass,
  },
  {
    title: "Legal and Regulatory Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-sora-shimazaki-5668473.jpg",
    imageAlt: "Legal and regulatory feasibility assessment",
    description:
      "Identify legal, compliance, and policy requirements early to avoid launch delays, penalties, and redesign.",
    example:
      "Evaluating whether a pharmaceutical concept complies with health and safety regulations before production and market release.",
    icon: Scale,
  },
  {
    title: "Market Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-tima-miroshnichenko-7567440-1024x683.jpg",
    imageAlt: "Market feasibility demand analysis",
    description:
      "Measure demand, competition, and positioning strength to determine product-market fit and growth potential.",
    example:
      "Determining whether a new service has enough market demand and differentiation to scale sustainably.",
    icon: ShieldCheck,
  },
  {
    title: "Financial Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-pixabay-53621-1-1-1024x603.jpg",
    imageAlt: "Financial feasibility and investment modeling",
    description:
      "Model funding, cash flow, and long-term financial sustainability from launch through expansion stages.",
    example:
      "Assessing whether a startup idea is financially viable by projecting startup costs, operating expenses, and revenue streams.",
    icon: Wallet,
  },
];

export default function FeasibilityStudiesPage() {
  return (
    <main className="bg-[#f7f8fa] pt-24 pb-20 text-slate-900">
      <section className="relative overflow-hidden px-6 md:px-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-amber-200/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] md:grid-cols-12 md:p-10">
          <div className="md:col-span-7">
            <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Feasibility Studies
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Turn complex ideas into
              <span className="bg-gradient-to-r from-cyan-600 to-slate-900 bg-clip-text text-transparent"> decision-ready ventures</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 md:text-base">
              We provide complete feasibility studies for web3 initiatives and emerging startups, combining market evidence,
              technical analysis, and financial modeling so teams can decide with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Services
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Why it matters</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Feasibility work validates viability before heavy investment. It helps you test demand, understand risk,
                and align strategy, operations, and capital with real-world constraints.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-4">
                  <p className="text-lg font-semibold">6</p>
                  <p className="text-xs text-slate-500">Feasibility lenses</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-4">
                  <p className="text-lg font-semibold">360°</p>
                  <p className="text-xs text-slate-500">Project view</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">What We Do</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Evidence-first validation for ambitious projects</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we specialize in complete feasibility studies for startups and innovation-led companies,
              especially in web3 and other emerging sectors.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our approach combines market intelligence, data analysis, operational readiness checks, and strategic
              recommendations to help you determine whether an initiative is worth pursuing and how to launch it with less risk.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-900 to-slate-800 p-6 text-white lg:col-span-5 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Our Expertise</p>
            <ul className="mt-4 space-y-3">
              {expertisePoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/02/feasib-image.jpg"
              alt="Feasibility studies team"
              className="mt-6 h-48 w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/02/rese-12.jpg"
                alt="Researchers team collaboration"
                className="h-60 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Commitment and Results</p>
              <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                We design tailored feasibility frameworks in close collaboration with clients, ensuring each study reflects
                your goals, constraints, and market context. The result is a practical decision package, not just a report.
              </p>
              <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 md:text-base">
                Researchers is your one-stop partner for comprehensive feasibility studies across web3 and other
                breakthrough technology initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold md:text-4xl">Feasibility Studies Overview</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Feasibility studies assess whether a project is viable in practice, not just attractive in concept.
            They clarify practicality, economics, operations, compliance, and market potential before major commitments are made.
          </p>
        </div>
      </section>

      <section className="mt-8 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5">
          {feasibilityTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-[0_12px_50px_rgba(15,23,42,0.08)]">
                <div className="grid items-stretch lg:grid-cols-12">
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img src={item.image} alt={item.imageAlt} className="h-64 w-full object-cover md:h-full" />
                  </div>

                  <div className={`p-6 md:p-8 lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                      <Icon className="h-4 w-4 text-slate-700" />
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">Feasibility Type</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold md:text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
                    <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 md:text-base">
                      <span className="font-semibold text-slate-900">Example: </span>
                      {item.example}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-16 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-900 bg-slate-900 px-6 py-10 text-white md:px-10 md:py-14">
          <h2 className="text-2xl font-semibold leading-tight md:text-4xl">Ready to validate your next initiative?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            Share your project concept and goals. We will build a practical feasibility scope across market, technical,
            operational, legal, and financial dimensions.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
