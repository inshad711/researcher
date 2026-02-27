import Link from "next/link";
import Script from "next/script";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  MonitorSmartphone,
  Phone,
  Store,
  Target,
  Users,
} from "lucide-react";

type IconItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

const keyCriteria = ["Quality of service", "Employee appearance", "Honesty", "Accuracy"];

const benefits: IconItem[] = [
  {
    title: "Customer Experience Enhancement",
    description:
      "Identify service gaps early to improve satisfaction, loyalty, and long-term customer retention.",
    icon: Users,
  },
  {
    title: "Competitive Advantage",
    description:
      "Understand how your experience compares with peers and where to differentiate your brand.",
    icon: Target,
  },
  {
    title: "Staff Training and Development",
    description:
      "Use real interaction feedback to design focused coaching and improve frontline performance.",
    icon: ClipboardCheck,
  },
  {
    title: "Compliance and SOP Adherence",
    description:
      "Monitor whether teams consistently follow standards, policies, and operational procedures.",
    icon: BadgeCheck,
  },
];

const shoppingTypes: IconItem[] = [
  {
    title: "In-Person Mystery Shopping",
    description:
      "On-site evaluations covering service quality, cleanliness, product knowledge, and protocol adherence.",
    icon: Store,
  },
  {
    title: "Telephone Mystery Shopping",
    description: "Assessment of call handling, responsiveness, tone, and support quality across phone channels.",
    icon: Phone,
  },
  {
    title: "Online Mystery Shopping",
    description:
      "Review of websites, mobile experiences, and digital support journeys from a customer perspective.",
    icon: MonitorSmartphone,
  },
  {
    title: "Competitor Benchmarking",
    description: "Comparative analysis against direct competitors to identify strengths and improvement priorities.",
    icon: BarChart3,
  },
];

const differentiators = [
  "Local UAE market expertise across industries and customer segments",
  "Tailored mystery shopping programs aligned with business objectives",
  "Trained and calibrated evaluators for objective, unbiased observations",
  "Advanced reporting with clear findings and actionable recommendations",
  "Continuous improvement model with measurable follow-up tracking",
  "Flexible service delivery: on-site, phone, digital, and blended programs",
];

const methodology = [
  "Define customized evaluation criteria based on your objectives and standards.",
  "Select and train evaluators aligned with your target customer profile.",
  "Execute mystery shopping visits or interactions across selected channels.",
  "Capture real-time findings in structured reporting dashboards.",
  "Deliver prioritized actions to improve service quality and operations.",
];

const faqItems: FaqItem[] = [
  {
    question: "How does mystery shopping benefit my business in the UAE?",
    answer:
      "It provides objective visibility into customer experience, enabling improvements in service quality, staff performance, and competitive positioning.",
  },
  {
    question: "Is mystery shopping suitable for both small businesses and large enterprises?",
    answer:
      "Yes. Programs can be scaled to different budgets, operating models, and branch/network sizes.",
  },
  {
    question: "How quickly can we see impact on business outcomes?",
    answer:
      "Many organizations observe measurable improvements within a few months when findings are translated into operational actions.",
  },
  {
    question: "How do you ensure unbiased evaluations?",
    answer:
      "We use structured evaluator selection, standardized scoring frameworks, and transparent reporting controls to maintain objectivity.",
  },
  {
    question: "Can mystery shopping be run continuously?",
    answer:
      "Yes. Ongoing programs are recommended to monitor consistency, sustain standards, and track improvement over time.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function MysteryShoppingPageContent() {
  return (
    <main className="pt-32 pb-20 text-slate-900">
      <Script id="mystery-shopping-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 via-cyan-50 to-indigo-100 px-6 py-14 text-slate-900 shadow-[0_24px_80px_rgba(14,116,144,0.15)] md:px-10 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Mystery Shopping</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Evaluate real customer experience with objective field intelligence
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
            Mystery shopping is a practical market research tool used to assess real-world service delivery,
            employee behavior, and adherence to brand promises and SOPs.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sm">Unbiased customer experience insight</div>
            <div className="rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sm">SOP and compliance visibility</div>
            <div className="rounded-xl border border-sky-200 bg-white/80 px-4 py-3 text-sm">Action-ready performance recommendations</div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-sky-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Mystery Shopping</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Undercover evaluators interact with your business as real customers and provide structured feedback on
              experience quality, service consistency, and frontline execution.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This approach reveals issues not visible in standard reports and helps leadership teams prioritize
              high-impact improvements.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Employee-engagement-1024x683.jpg"
              alt="Mystery shopping employee engagement"
              className="h-56 w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              We measure whether internal processes, service standards, and customer-facing behaviors are delivered as designed.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Key Evaluation Criteria</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {keyCriteria.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Eye className="h-4 w-4 text-slate-700" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Combined with detailed analysis, these criteria provide actionable insight to improve customer satisfaction,
              brand trust, and operational consistency.
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 p-6 text-slate-900 lg:col-span-5 md:p-8">
            <h3 className="text-lg font-semibold">Program Outcomes</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Clear visibility into frontline service quality</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Early detection of compliance and SOP gaps</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <span>Targeted improvement actions with measurable impact</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Benefits of Mystery Shopping in UAE</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <Icon className="h-5 w-5 text-slate-800" />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Types of Mystery Shopping</h2>
            <div className="mt-5 space-y-3">
              {shoppingTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-800" />
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Customer-experience-1024x682.jpg"
              alt="Customer experience mystery shopping"
              className="h-72 w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              We combine channel-level assessment with competitor benchmarking to provide a complete picture of customer experience performance.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-rose-50 to-indigo-50 p-6 text-slate-900 lg:col-span-5 md:p-8">
            <h3 className="text-lg font-semibold">Why Choose Researchers.me</h3>
            <ul className="mt-4 space-y-3">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">How We Conduct Mystery Shopping Research</h2>
            <div className="mt-5 space-y-3">
              {methodology.map((step, index) => (
                <div key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">{faq.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 px-4 md:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-indigo-200 bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-100 px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-cyan-200/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-indigo-200/50 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="inline-flex rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">
                Ready To Improve
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Need objective visibility into customer experience?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
                Partner with our team to design a mystery shopping program that identifies service gaps,
                improves execution quality, and strengthens customer loyalty.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/market-research-measurement"
                  className="inline-flex items-center rounded-full border border-indigo-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
                >
                  Explore Market Research Services
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4">
              <div className="rounded-xl border border-indigo-200 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700">Focus</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Service consistency by touchpoint</p>
              </div>
              <div className="rounded-xl border border-sky-200 bg-white/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">Output</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Action-ready performance roadmap</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



