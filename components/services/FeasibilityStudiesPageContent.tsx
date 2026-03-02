"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

type StudyType = {
  title: string;
  description: string;
  points: string[];
  example: string;
  image: string;
  imageAlt: string;
};

type ProcessStep = {
  title: string;
  detail: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Project Understanding",
    detail: "We begin by understanding your idea, objectives, and success criteria.",
  },
  {
    title: "Market Analysis",
    detail: "We assess market demand, target audience, competition, and industry trends.",
  },
  {
    title: "Technical & Operational Assessment",
    detail: "We evaluate technology requirements, resources, systems, and team readiness.",
  },
  {
    title: "Financial Evaluation",
    detail: "We analyze costs, revenue potential, funding needs, and profitability.",
  },
  {
    title: "Risk & Compliance Review",
    detail: "We identify operational, legal, and regulatory risks that may impact the project.",
  },
  {
    title: "Final Report & Recommendations",
    detail:
      "You receive a clear, actionable report with practical recommendations to move forward confidently.",
  },
];

const studyTypes: StudyType[] = [
  {
    title: "Market Feasibility",
    description:
      "Market feasibility evaluates whether there is sufficient demand for your product or service.",
    points: [
      "Target customers and user behavior",
      "Market size and growth potential",
      "Competitive landscape",
      "Industry trends",
    ],
    example:
      "Determining whether a new digital product has enough demand to succeed in a competitive market.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/08/pexels-tima-miroshnichenko-7567440-1024x683.jpg",
    imageAlt: "Market research and demand analysis",
  },
  {
    title: "Technical Feasibility",
    description:
      "Technical feasibility examines whether your project can be built using available technology, tools, and expertise.",
    points: ["Technical requirements", "Infrastructure and resources", "Team capabilities"],
    example:
      "Evaluating whether a new software platform can be developed using existing systems and technical skills.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/08/pexels-thisisengineering-3862132-1024x683.jpg",
    imageAlt: "Technical feasibility and systems review",
  },
  {
    title: "Operational Feasibility",
    description:
      "Operational feasibility looks at how well a project fits into your organization's day-to-day operations.",
    points: ["Process alignment", "Team readiness", "Workflow integration"],
    example:
      "Assessing whether a new project management system can be smoothly adopted by your teams.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/08/pexels-pixabay-159298-1024x684.jpg",
    imageAlt: "Operational planning and team readiness",
  },
  {
    title: "Financial / Economic Feasibility",
    description: "Financial feasibility focuses on whether the project makes economic sense.",
    points: ["Cost estimation", "Revenue projections", "Profitability and return on investment"],
    example:
      "Assessing whether a startup idea can generate enough revenue to cover expenses and achieve profitability.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/08/pexels-energepiccom-159888-1024x768.jpg",
    imageAlt: "Financial projections and economic feasibility",
  },
  {
    title: "Legal & Regulatory Feasibility",
    description:
      "Legal and regulatory feasibility ensures your project complies with applicable laws and regulations.",
    points: ["Compliance requirements", "Industry regulations", "Legal risks"],
    example:
      "Checking whether a product meets regulatory standards before it is launched or marketed.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/08/pexels-sora-shimazaki-5668473.jpg",
    imageAlt: "Legal and regulatory compliance assessment",
  },
];

const faqItems = [
  {
    question: "What is included in a feasibility study?",
    answer:
      "Our feasibility study services include market feasibility analysis, technical feasibility, operational feasibility, financial feasibility, and legal or regulatory evaluation. Each feasibility study report is customized based on your project goals, industry, and business model.",
  },
  {
    question: "How long does a feasibility study take?",
    answer:
      "The timeline for a feasibility study depends on the project scope, industry, and data availability. On average, a professional feasibility study takes a few weeks to complete, ensuring accurate analysis and reliable insights.",
  },
  {
    question: "Can a feasibility study help with funding or investors?",
    answer:
      "Yes. A detailed feasibility study report helps validate your business idea, reduce perceived risk, and build credibility with investors, lenders, and stakeholders. Many startups use feasibility studies to support funding and investment decisions.",
  },
  {
    question: "Do you provide a final feasibility study report?",
    answer:
      "Yes. We deliver a comprehensive feasibility study report with clear findings, data-backed insights, and actionable recommendations to help you decide whether to proceed, refine, or pause your project.",
  },
];

const feasibilityBenefits = [
  "Reduce financial and operational risk",
  "Avoid costly mistakes before execution",
  "Validate your idea with real market data",
  "Build confidence for investors and stakeholders",
  "Decide whether to proceed, revise, or stop a project",
];

const approachHighlights = [
  "Data-driven, not assumption-based",
  "Tailored to your specific project and industry",
  "Focused on clarity, not complex jargon",
];

export default function FeasibilityStudiesPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-24 pt-28 text-slate-900 md:pt-32">
      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              FEASIBILITY STUDIES
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Feasibility Study Services in Dubai, UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Launching a new idea, product, or business always involves risk. The biggest
              mistakes usually happen at the planning stage, when decisions are made without
              clear data or market validation.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our feasibility study services help you understand whether your idea is practical,
              profitable, and worth pursuing before you invest time, money, and resources. We
              provide clear, easy-to-understand insights that help founders, investors, and
              businesses move forward with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/02/feasib-image.jpg"
              alt="Feasibility study services in Dubai"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">What Is a Feasibility Study?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              A feasibility study is a detailed evaluation of whether a proposed project or
              idea can realistically succeed.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              It helps answer important questions such as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
              <li>Is there real market demand for this idea?</li>
              <li>Can it be built with available technology and resources?</li>
              <li>Will it be financially viable in the long term?</li>
              <li>Are there operational, legal, or regulatory challenges?</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Instead of relying on assumptions, feasibility studies provide data-backed
              clarity so you can make informed decisions.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/02/rese-12.jpg"
              alt="Business planning and market validation"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-10 border-y border-slate-200 bg-white">
        <div className="templateContainer !py-0 md:!py-0 lg:!py-0">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              WHY IT MATTERS
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-4xl">Why You Need a Feasibility Study</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Many projects fail not because the idea is bad, but because potential risks were
              not identified early.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {feasibilityBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm leading-7 text-slate-700 shadow-sm md:text-base"
              >
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-blue-100 bg-white p-5 md:p-6">
              <h3 className="text-2xl font-semibold md:text-3xl">What We Do</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                At Researchers, we help businesses evaluate ideas and projects through complete,
                data-driven feasibility studies.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                We work with startups, investors, and established companies, especially in web3,
                emerging technologies, and innovative industries, to assess project viability from
                every important angle.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                Our studies combine market research, financial analysis, operational assessment,
                and risk evaluation to give you a clear picture of what will work, what may not,
                and what can be improved.
              </p>
            </article>

            <article className="rounded-3xl border border-blue-100 bg-white p-5 md:p-6">
              <h3 className="text-2xl font-semibold md:text-3xl">Our Expertise</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                New and innovative projects, particularly in web3 and startup environments, come
                with unique challenges.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                Our team brings strong industry knowledge and hands-on experience to help you
                navigate these challenges. We go beyond basic feasibility checks by providing
                practical insights that support real-world decision-making.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">Our approach is:</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
                {approachHighlights.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Feasibility Study Process</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We follow a structured yet flexible process to ensure every study delivers
            relevant and actionable insights.
          </p>
          <ol className="mt-6 grid gap-3 text-sm leading-7 text-slate-700 md:grid-cols-2 md:text-base">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-slate-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900 md:text-lg">{step.title}</h3>
                <p className="mt-2">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Types of Feasibility Studies We Conduct
          </h2>
          <div className="mt-8 grid gap-8">
            {studyTypes.map((study, index) => (
              <article key={study.title} className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="h-full min-h-[250px] w-full rounded-3xl object-cover"
                  />
                </div>
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-xl font-semibold md:text-2xl">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    {study.description}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">It focuses on:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 md:text-base">
                    {study.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    <span className="font-semibold text-slate-900">Example: </span>
                    {study.example}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Who Our Feasibility Study Services Are For
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our services are ideal for:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
              <li>Startups and early-stage businesses</li>
              <li>Web3 founders and innovators</li>
              <li>Investors evaluating new opportunities</li>
              <li>Companies planning new products, services, or expansions</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Researchers</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700 md:text-base">
              <li>Experienced team with industry-specific expertise</li>
              <li>Customized feasibility studies, not generic templates</li>
              <li>Clear, easy-to-understand reports</li>
              <li>Data-backed insights for confident decision-making</li>
              <li>Practical recommendations you can act on</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14 border-t border-slate-200 bg-white py-16">
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
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="max-w-sm font-sans text-slate-700">
              Expert Answers to Your Feasibility Study Queries.
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
                      openFaqIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
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
    </main>
  );
}
