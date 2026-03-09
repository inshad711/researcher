"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type BenefitItem = {
  title: string;
  description: string;
};

type ServiceType = {
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

const evaluationPoints = [
  "Quality of customer service",
  "Employee appearance and professionalism",
  "Honesty and ethical conduct",
  "Accuracy of information shared",
  "Compliance with SOPs and brand guidelines",
];

const benefits: BenefitItem[] = [
  {
    title: "Customer Experience Improvement",
    description:
      "Identify service gaps and improve customer satisfaction, loyalty, and retention with clear field-level evidence.",
  },
  {
    title: "Competitive Advantage",
    description:
      "Understand how your brand compares with competitors and uncover opportunities to outperform them in the UAE market.",
  },
  {
    title: "Staff Training & Development",
    description:
      "Use real customer feedback to design targeted training programs and strengthen frontline performance.",
  },
  {
    title: "Compliance & Brand Consistency",
    description:
      "Ensure policies, service standards, and brand promises are followed consistently across every location.",
  },
];

const serviceTypes: ServiceType[] = [
  {
    title: "In-Person Mystery Shopping",
    description:
      "On-site evaluations of customer service, cleanliness, staff knowledge, and adherence to SOPs and service standards.",
  },
  {
    title: "Telephone Mystery Shopping",
    description:
      "Assessment of call handling, response quality, agent professionalism, and phone etiquette across customer touchpoints.",
  },
  {
    title: "Online Mystery Shopping",
    description:
      "Evaluation of websites, mobile apps, live chat, and digital support channels to assess online customer experience.",
  },
  {
    title: "Competitor Benchmarking",
    description:
      "Comparison of your service performance against direct competitors to identify strengths, weaknesses, and improvement areas.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Step 1: Customized Evaluation Framework",
    detail:
      "We define clear evaluation criteria based on your objectives, brand standards, and relevant industry benchmarks.",
  },
  {
    title: "Step 2: Evaluator Selection & Training",
    detail:
      "Mystery shoppers are matched to your target customer profile and trained to deliver accurate, consistent assessments.",
  },
  {
    title: "Step 3: Real-Time Data Collection & Reporting",
    detail:
      "Detailed feedback is submitted through our secure reporting platform for quick review and analysis.",
  },
  {
    title: "Step 4: Insights & Recommendations",
    detail:
      "We translate findings into actionable recommendations that improve customer experience, service quality, and efficiency.",
  },
];

const whyChoose = [
  "Local market expertise with deep understanding of customer behavior and business dynamics in the UAE",
  "Customized mystery shopping programs aligned with your operational priorities and business goals",
  "Trained and experienced mystery shoppers delivering unbiased and professional feedback",
  "Advanced reporting and analytics with structured insights for faster decision-making",
  "Actionable recommendations that help improve service quality and day-to-day operations",
  "Continuous improvement approach to monitor progress and sustain performance over time",
];

const outcomes = [
  "Cost-effective mystery shopping solutions with competitive pricing",
  "Proven track record across multiple industries in Dubai and the UAE",
  "Dedicated client support throughout the entire research program",
  "Comprehensive coverage across in-person, phone, online, and competitor evaluations",
];

const faqItems: FaqItem[] = [
  {
    question: "How does mystery shopping benefit businesses in the UAE?",
    answer:
      "It provides real customer insights that help improve service quality, staff performance, and competitive positioning.",
  },
  {
    question:
      "Is mystery shopping suitable for small businesses and large enterprises?",
    answer:
      "Yes. Mystery shopping programs can be scaled to fit the size, goals, and budget of any business.",
  },
  {
    question: "How quickly can I see results from mystery shopping?",
    answer:
      "Many businesses notice improvements within a few months after implementing feedback-driven changes.",
  },
  {
    question: "How do you ensure unbiased mystery shopping evaluations?",
    answer:
      "We use trained evaluators, standardized criteria, and transparent reporting to ensure objectivity and accuracy.",
  },
  {
    question: "Can mystery shopping be conducted regularly?",
    answer:
      "Yes. Ongoing mystery shopping programs are ideal for continuous monitoring and long-term improvement.",
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="mystery-shopping-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              MYSTERY SHOPPING SERVICES IN DUBAI & UAE
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Measure real customer experience with structured, confidential
              evaluations.
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Mystery shopping is a proven market research technique that helps
              businesses evaluate how their products, services, and staff
              perform in real-life customer interactions.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we deliver professional mystery shopping services
              across Dubai, the UAE, and the wider Gulf region, helping brands
              ensure service excellence and operational consistency.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              As an experienced mystery shopping company, we conduct structured
              and confidential evaluations to assess employee behavior, service
              quality, and compliance with your brand standards and Standard
              Operating Procedures.
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
              src="/service/MYSTERYSHOPPINGSERVICEsSINDUBAI&UAE.webp"
              alt="Mystery shopping services in Dubai and UAE"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <img
              src="/service/WhyMysteryShoppingMsatters.webp"
              alt="Team reviewing customer experience performance"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Mystery Shopping Matters
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Mystery shopping provides unbiased, first-hand insights into the
              actual customer journey. Trained mystery shoppers act as real
              customers and objectively assess every interaction, enabling
              businesses to identify gaps and improvement opportunities.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              A mystery shopper typically evaluates:
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 md:text-base">
              {evaluationPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              This secret shopper research approach reveals how internal
              processes perform on the ground and supports data-driven decisions
              to improve customer satisfaction and brand loyalty.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              UAE Market Context
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Benefits of Mystery Shopping in the UAE Market
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              The UAE is one of the world&apos;s most competitive and
              fast-evolving business environments. With rising customer
              expectations and intense competition, mystery shopping has become
              an essential research tool for businesses operating in Dubai and
              across the UAE.
            </p>
            <p className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              The strongest programs connect customer experience, competitive
              benchmarking, staff coaching, and compliance monitoring into one
              measurable improvement cycle.
            </p>
          </article>

          <div className="lg:col-span-5">
            <img
              src="/service/UAEMarsketContext.webp"
              alt="UAE market research and customer experience analysis"
              className="h-full min-h-[300px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-slate-200 bg-slate-50">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Key Benefits of Mystery Shopping
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="templateContainer">
          <h2 className="text-2xl font-semibold md:text-center md:text-3xl">
            Types of Mystery Shopping We Offer
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {serviceTypes.map((type) => (
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
              Our Mystery Shopping Research Process
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
              src="/service/OurMysteryShoppingReseasrchProcess.webp"
              alt="Mystery shopping reporting and field research process"
              className="h-full min-h-[340px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Why Researchers
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Why Choose Researchers for Mystery Shopping in Dubai & UAE?
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
        </div>
      </section>

      <section className="mt-6">
        <div className="templateContainer rounded-[2rem] border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Outcome Focus
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
            What You Gain From the Program
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {outcomes.map((benefit) => (
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
            Our tailored mystery shopping solutions help businesses across
            Dubai, the UAE, and the Gulf region elevate customer experience and
            operational performance.
          </p>
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
                className="absolute bottom-[-1rem] left-0 w-full"
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
              Expert answers to common mystery shopping research questions.
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

      <section className="templateContainer mb-8 mt-6">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-6 md:p-8 lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Choose Us
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Need a reliable mystery shopping partner in Dubai and the UAE?
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-slate-700">
              By choosing Researchers, you gain a research partner focused on
              service excellence, operational consistency, and measurable
              results.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Customer journey visibility
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Targeted service improvements
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Ongoing performance monitoring
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white md:p-7 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Start your mystery shopping program.
            </h3>
            <p className="mt-3 font-sans text-white">
              Contact Researchers today for professional mystery shopping
              services across Dubai, the UAE, and the wider Gulf region.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Researchers
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
