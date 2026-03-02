import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const benefits = [
  "Create a positive employer reputation.",
  "Increase productivity across teams.",
  "Build trust and alignment with company goals.",
  "Reduce hiring and replacement costs.",
  "Improve retention and long-term loyalty.",
  "Strengthen customer experience through engaged employees.",
];

const reasons = [
  {
    title: "Productivity Boost",
    text: "Satisfied and engaged employees are more focused, proactive, and consistent in delivering results.",
  },
  {
    title: "Positive Work Culture",
    text: "A healthy workplace culture makes collaboration easier and improves the employee experience.",
  },
  {
    title: "Employee Retention",
    text: "When teams feel valued, they are more likely to stay, reducing turnover and continuity risks.",
  },
  {
    title: "Innovation and Creativity",
    text: "Engaged teams contribute better ideas and help businesses adapt faster to market changes.",
  },
];

const focusAreas = [
  {
    title: "Fostering Employee Satisfaction",
    text: "Structured satisfaction surveys provide clear visibility into employee sentiment, expectations, and workplace pain points.",
  },
  {
    title: "Cultivating Employee Engagement",
    text: "Engagement studies measure commitment, motivation, and emotional connection to company vision and leadership.",
  },
  {
    title: "Recognizing Employee Contributions",
    text: "Recognition frameworks and reward strategies improve morale and reinforce performance standards.",
  },
  {
    title: "Harnessing Employee Feedback",
    text: "Continuous feedback programs give employees a safe channel to share opinions and drive practical improvements.",
  },
  {
    title: "Analyzing Employee Satisfaction Data",
    text: "Data analysis helps identify trends by team, function, and management layer to guide targeted action plans.",
  },
  {
    title: "Reporting Satisfaction Findings",
    text: "Clear reporting translates survey results into measurable actions, ownership, and timelines.",
  },
];

const whyChooseUs = [
  "Local understanding of workforce behavior and business culture in the UAE",
  "Customized engagement frameworks for your organization size and goals",
  "Practical recommendations backed by research and analytics",
  "End-to-end support from survey design to action planning",
  "Scalable solutions for startups, SMEs, and enterprise teams",
  "Continuous optimization through recurring pulse measurement",
];

const faqItems: FaqItem[] = [
  {
    question: "How does employee satisfaction affect business performance?",
    answer:
      "Higher satisfaction improves productivity, retention, service quality, and overall organizational stability.",
  },
  {
    question: "How do you measure employee satisfaction and engagement?",
    answer:
      "We combine surveys, qualitative feedback, and segmented analysis to identify strengths, risks, and improvement opportunities.",
  },
  {
    question: "Can small businesses use employee engagement programs?",
    answer:
      "Yes. The approach is scalable and can be tailored for startups, growing teams, and large organizations.",
  },
  {
    question: "How soon can we expect measurable improvements?",
    answer:
      "Most organizations see early movement within a few months when survey insights are translated into clear actions.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "We combine local market understanding, custom research frameworks, and practical execution support for sustained results.",
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

export default function EmployeeSatisfactionEngagementPageContent() {
  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="employee-satisfaction-engagement-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Employee Satisfaction and Engagement
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Employee Satisfaction and Engagement Services in UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Employee satisfaction analysis in Dubai is a key driver of business performance. An engaged workforce
              improves execution quality, supports stronger customer outcomes, and helps companies build sustainable
              growth.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers.me, we help organizations measure sentiment accurately and convert insights into practical
              workplace improvements.
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
                href="/services/market-research-measurement"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Employee engagement consulting workshop"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Happy employees and team collaboration"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Business Value</p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              How Employee Satisfaction Supports Customer Satisfaction
            </h2>
            <ul className="mt-5 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why It Matters</p>
            <h2 className="text-2xl font-semibold md:text-3xl">Why Employee Satisfaction and Engagement in UAE?</h2>
            <div className="mt-5 space-y-4">
              {reasons.map((item) => (
                <article key={item.title}>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-700 md:text-base">{item.text}</p>
                </article>
              ))}
            </div>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Employee satisfaction survey and analysis"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Core Focus Areas</p>
          <h2 className="text-2xl font-semibold md:text-3xl">Our Employee Satisfaction and Engagement Framework</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="border-l-2 border-slate-200 pl-4">
                <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why Researchers.me</p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Choose Us for Employee Satisfaction Research in Dubai
            </h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/ef920cc1-46a3-4604-9dd1-3ea562976bd9.jpg"
              alt="HR analytics and employee engagement planning"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700 md:text-base">
              Expert answers on employee satisfaction and engagement research.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-300">
              {faqItems.map((item) => (
                <details key={item.question} className="py-4">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
