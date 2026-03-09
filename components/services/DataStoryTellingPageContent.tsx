"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Plus, CheckCircle2 } from "lucide-react";

type ComponentItem = {
  title: string;
  description: string;
};

type StoryType = {
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  detail: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const challenges = [
  "Extract meaningful insights",
  "Present findings clearly to stakeholders",
  "Align data with marketing strategy",
  "Support leadership decision-making",
  "Translate analytics into action",
];

const coreComponents: ComponentItem[] = [
  {
    title: "Narrative Development",
    description:
      "Every dataset has a story. We structure your insights into a logical, persuasive narrative aligned with your business goals.",
  },
  {
    title: "Strategic Data Visualization",
    description:
      "Using advanced tools like Power BI, Tableau, and other visualization platforms, we create infographics, interactive dashboards, charts, graphs, executive presentations, and video-based data summaries.These visuals simplify complexity and improve stakeholder understanding.",
  },
  {
    title: "Context-Driven Data Analysis",
    description:
      "We go beyond surface-level numbers. Our analysts interpret trends, identify patterns, and provide contextual insights tailored to your industry and target audience in the UAE.",
  },
];

const storyTypes: StoryType[] = [
  {
    title: "Descriptive Storytelling",
    description:
      "Understand what has happened. We analyze historical data trends to identify patterns and performance insights.",
  },
  {
    title: "Predictive Storytelling",
    description:
      "Anticipate what could happen. Using advanced analytics, we forecast trends to help you prepare for future market shifts.",
  },
  {
    title: "Prescriptive Storytelling",
    description:
      "Decide what to do next. We provide actionable recommendations backed by data, helping you move forward with confidence.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Step 1: In-Depth Market Research",
    detail:
      "We analyze your industry, competitors, and audience behavior in the UAE market.",
  },
  {
    title: "Step 2: Data Audit & Cleaning",
    detail:
      "We review your datasets to ensure accuracy, relevance, and integrity.",
  },
  {
    title: "Step 3: Insight Extraction",
    detail:
      "Our analysts identify key trends, opportunities, and performance indicators.",
  },
  {
    title: "Step 4: Visualization & Story Creation",
    detail:
      "We design compelling visuals and structured narratives tailored to your business goals.",
  },
  {
    title: "Step 5: Strategy Integration",
    detail:
      "We help integrate insights into your marketing, sales, or operational strategy.",
  },
  {
    title: "Step 6: Continuous Optimization",
    detail:
      "We track performance and refine storytelling elements to maximize impact.",
  },
];

const whyChoose = [
  "Experienced data analysts and visualization experts",
  "Deep understanding of UAE business landscape",
  "Expertise in modern analytics tools",
  "Customized storytelling frameworks",
  "Compliance with UAE data regulations",
  "End-to-end support from research to strategy",
];

const benefits = [
  "Faster executive decision-making",
  "Clearer communication with investors & stakeholders",
  "Improved marketing performance",
  "Better customer journey insights",
  "Stronger ROI measurement",
  "Enhanced competitive positioning",
];

const faqItems: FaqItem[] = [
  {
    question:
      "What makes data storytelling different from regular data visualization?",
    answer:
      "Data visualization presents numbers visually. Data storytelling adds context, narrative, and business interpretation to drive action.",
  },
  {
    question: "Is data storytelling suitable for startups?",
    answer:
      "Yes. Startups benefit from clear insight communication, especially when presenting to investors or building growth strategies.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While timelines vary by industry, most businesses begin seeing strategic clarity and measurable improvements within the first few months.",
  },
  {
    question: "Do you offer customized dashboards?",
    answer:
      "Yes. We create fully customized dashboards and visual reports aligned with your KPIs and business objectives.",
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

export default function DataStoryTellingPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="data-storytelling-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              DATA STORY TELLING SERVICES IN UAE
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Raw data alone does not grow a business; clarity does.
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we help businesses across Dubai and the UAE
              transform complex datasets into compelling visual stories that
              drive smarter decisions, stronger marketing strategies, and
              measurable growth.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Whether you are a startup building your foundation or an
              established enterprise optimizing performance, our data
              storytelling experts turn insights into impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a Consultation Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/service/DATASTORYTELLINGSERVICES.webp"
              alt="Feasibility study services in Dubai"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <img
              src="/service/WhyDataStorytellingMattersforUAE.webp"
              alt="Teams reviewing analytics and business insights"
              className="h-full min-h-[280px] w-full rounded-[5px]  object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Data Storytelling Matters for UAE Businesses
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Many organizations collect large volumes of data but struggle to:
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Without structured storytelling, even valuable data loses its
              power.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our data storytelling services bridge the gap between analytics
              and business strategy, helping you communicate insights with
              clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Definition
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              What Is Data Storytelling?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Data storytelling is the strategic combination of data analysis,
              compelling narrative, and impactful visualizations.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Data analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Compelling narrative</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Impactful visualizations</span>
              </li>
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              It transforms numbers into a clear business narrative that
              decision-makers can understand and act upon.
            </p>
            <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers.me, we do not just visualize data; we interpret it,
              contextualize it within the UAE market landscape, and present it
              in a way that drives results.
            </p>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="UAE business team discussing data narrative"
              className="h-full min-h-[300px] w-full rounded-[5px]  object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Core Components of Our Data Storytelling Process
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {coreComponents.map((component) => (
              <article
                key={component.title}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {component.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {component.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Types of Data Storytelling We Offer
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {storyTypes.map((type) => (
              <article
                key={type.title}
                className="rounded-2xl border border-slate-200 px-5 py-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Our Data Storytelling Process in Dubai & UAE
            </h2>
            <ol className="mt-6 grid gap-3 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
              {processSteps.map((step) => (
                <li key={step.title} className="rounded-2xl bg-white px-5 py-4">
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/service/OurDataStorytellingProcessinDubai&UAE.webp"
              alt="Data analysts building visual dashboards"
              className="h-full min-h-[340px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Researchers.me
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Why Choose Researchers.me for Data Storytelling in the UAE?
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {whyChoose.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-700 md:text-base"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            We combine analytical precision with creative communication,
            ensuring your insights are not only accurate but also influential.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Outcome Focus
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
            Business Benefits of Data Storytelling
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <p className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{benefit}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
            When insights are communicated effectively, strategy becomes
            sharper.
          </p>
        </div>
      </section>

      <section className=" border-slate-200 bg-white">
        <div className="templateContainer grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative mb-6 inline-block">
              <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">
                Frequently Ask Questions
              </h2>
              <svg
                className="absolute left-0 -bottom-4 w-full"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15 Q150 0 298 15"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="max-w-sm font-sans text-slate-700">
              Expert Answers to Your Data Storytelling Queries.
            </h3>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-300">
              {faqItems.map((item, index) => (
                <div key={item.question} className="py-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:text-blue-600 focus:outline-none"
                  >
                    <span className="pr-8 text-lg font-light text-black md:text-xl">
                      {item.question}
                    </span>
                    <Plus
                      className={`h-6 w-6 shrink-0 transform text-black transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index
                        ? "max-h-96 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-sans text-sm leading-7 text-slate-700 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="templateContainer mt-6 mb-8">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 py-6 px-4 md:p-8 lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Partner With Us
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Ready to Transform Your Data into Strategic Growth?
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              If your business is collecting data but not fully leveraging it,
              it is time to unlock its true potential.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Clear stakeholder narratives
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Insight-led strategic decisions
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                UAE-ready reporting support
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your data storytelling project.
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact Researchers.me today for professional Data Storytelling
              services in Dubai and across the UAE.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Researchers.me
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
      </section>
    </main>
  );
}
