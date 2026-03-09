"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const consultantPoints = [
  "To provide appropriate marketing tactics to entrepreneurs who are just starting out in their businesses in order to improve the efficacy of their strategies.",
  "Preventing costly mistakes saves time and money.",
  "To assist in branding and strategic planning in order to increase sales and customer retention.",
  "Give expert advice on the best marketing tactics and strategies for your company's objectives.",
];

const roleSections = [
  {
    title: "Guiding Startups with Expertise",
    description:
      "As a Marketing Consultant, our role is to provide tailored marketing tactics for startups. We understand the challenges entrepreneurs face at the inception of their businesses. Our expertise helps in crafting strategies that not only avoid costly mistakes but also save valuable time and resources.",
  },
  {
    title: "Branding and Strategic Planning",
    description:
      "Our focus extends beyond tactical advice. We actively contribute to branding and strategic planning, aiming to elevate your business to new heights. By enhancing sales and customer retention strategies, we ensure your business stands out in the competitive landscape.",
  },
  {
    title: "Expert Guidance for Your Objectives",
    description:
      "Marketing Consulting Services from us go beyond generic advice. We delve into the specifics of your company's objectives, offering expert guidance on the best marketing tactics and strategies. It's a collaborative effort geared towards achieving tangible results.",
  },
];

const whyChooseSections = [
  {
    title: "Specialized for Small Businesses",
    description:
      "As a Marketing Consultant Company for small business services, we understand the unique needs and challenges of this segment. Our strategies are customized to fit the scale and objectives of small enterprises, ensuring maximum impact.",
  },
  {
    title: "Tailored Solutions for Startups",
    description:
      "For startups, a Product Marketing Agency that provides tailored solutions is invaluable. We offer strategies that not only align with your business goals but also foster sustainable growth from the very beginning.",
  },
  {
    title: "Holistic Approach for Comprehensive Growth",
    description:
      "Our Marketing Consulting Agency takes a holistic approach, addressing not only immediate challenges but also contributing to long-term growth. From branding to strategic planning, we cover every aspect to ensure comprehensive development.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How can marketing consultancy benefit startups?",
    answer:
      "Marketing consultancy for startups goes beyond advice; it provides tailored strategies that prevent costly mistakes, save time, and set the foundation for sustainable growth.",
  },
  {
    question:
      "Why should small businesses opt for marketing consulting services?",
    answer:
      "Small businesses benefit from customized solutions. Our Marketing Consultant Company understands the unique challenges of small enterprises, offering strategies that align with their scale and goals.",
  },
  {
    question:
      "What sets Researchers.me apart as a marketing consulting agency for startups?",
    answer:
      "Our specialized focus on startups, tailored solutions, and holistic approach set us apart. We go beyond generic advice, actively contributing to branding, strategic planning, and long-term growth.",
  },
  {
    question:
      "Can marketing consulting services contribute to increased sales and customer retention?",
    answer:
      "Absolutely. Our Marketing Consulting Services include strategies aimed at enhancing sales and improving customer retention, ensuring sustained success for your business.",
  },
  {
    question:
      "How does Researchers.me align marketing tactics with specific business objectives?",
    answer:
      "Our approach involves a deep dive into your company's objectives. We provide expert guidance on marketing tactics and strategies tailored to achieve your specific business goals.",
  },
];

export default function MarketingConsultingPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Marketing Consulting
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              MARKETING CONSULTING
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              The process of seeking professional advice and suggestions from a
              marketing consultant in order to improve the effectiveness of your
              marketing tactics is known as marketing consultancy. It provides
              businesses with reliable access to highly advanced marketing
              knowledge.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Marketing consulting is a strategic partnership with professionals
              to enhance the effectiveness of your marketing tactics. It&apos;s
              more than just advice; it&apos;s a doorway to advanced marketing
              knowledge that can transform your business.
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
          </article>
          <article className="lg:col-span-5">
            <img
              src="/service/MARKETINGCONSULTING.webp"
              alt="Marketing consulting session"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-5">
            <img
              src="/service/Asamarketingconsultantweare.webp"
              alt="Marketing consultant presenting strategy"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What We Do
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              As a marketing consultant, we are
            </h2>
            <ul className="mt-5 space-y-3">
              {consultantPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              The Role of Marketing Consulting Firms
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              How Consulting Firms Create Results
            </h2>
            <div className="mt-6 space-y-4">
              {roleSections.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/service/HowConsultingFirmsCreateResults.webp"
              alt="Marketing consulting team collaboration"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-5">
            <img
              src="/service/WhyResearchersmeforYourMarketingConsultingNeeds.webp"
              alt="Marketing strategy planning team"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Researchers.me
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Choose Researchers.me for Your Marketing Consulting Needs?
            </h2>
            <div className="mt-5 space-y-4">
              {whyChooseSections.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-slate-200 bg-white">
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
              Expert answers to common marketing consulting and business growth
              questions.
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
    </main>
  );
}
