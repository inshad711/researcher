"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const corePractices = [
  "Make customers feel valued and appreciated.",
  "Maintain transparency in business practices.",
  "Deliver reliable and responsive customer service.",
  "Continue innovating products and services.",
  "Ensure smooth and easy interactions across all touchpoints.",
];

const businessImpact = [
  "Higher customer retention",
  "Lower customer churn",
  "Increased revenue per customer",
];

const improvementWays = [
  {
    title: "Consumer Insights for Better Customer Experience",
    description:
      "Through consumer behavior analysis and customer research, we help businesses identify what influences customer decisions and align products and services with customer expectations.",
  },
  {
    title: "Customer Satisfaction Surveys",
    description:
      "We design customized surveys to gather meaningful feedback, identify strengths, uncover service gaps, and improve the overall user experience.",
  },
  {
    title: "Customer Sentiment Analysis",
    description:
      "By analyzing customer emotions, opinions, and perceptions, businesses can address negative feedback, strengthen positive experiences, and improve customer engagement.",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Segmentation reveals groups within your customer base based on behavior, preferences, or demographics, making it easier to deliver more personalized experiences.",
  },
];

const chooseUs = [
  "Deep understanding of the UAE market",
  "Customized research approach",
  "Advanced data analysis",
  "Multi-channel data collection",
  "Fast and relevant insights",
  "Benchmarking and competitive comparison",
  "Continuous improvement strategies",
];

const whyItMatters = [
  {
    id: "01",
    title: "Cultural Importance of Customer Service",
    description:
      "Hospitality and excellent customer service are deeply valued in the UAE. Businesses that exceed customer expectations build stronger relationships and trust with their audience.",
  },
  {
    id: "02",
    title: "Customer Loyalty and Repeat Business",
    description:
      "Satisfied customers are more likely to return and continue purchasing from your brand. They also tend to recommend your services to others.",
  },
  {
    id: "03",
    title: "Strong Brand Reputation",
    description:
      "Positive customer experiences lead to positive word-of-mouth. In a connected market like the UAE, this can significantly strengthen your brand reputation.",
  },
  {
    id: "04",
    title: "Competitive Advantage",
    description:
      "In a competitive marketplace, businesses that consistently deliver better customer experiences naturally stand out from their competitors.",
  },
  {
    id: "05",
    title: "Customer-Focused Business Growth",
    description:
      "When businesses focus on customer happiness, their products, services, and strategies become more aligned with customer needs.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How can customer experience impact business growth in the UAE?",
    answer:
      "A strong customer experience increases customer loyalty, improves brand reputation, and encourages repeat business, which directly supports long-term growth.",
  },
  {
    question: "What strategies do you use to measure customer satisfaction?",
    answer:
      "We use a combination of customer surveys, consumer behavior analysis, sentiment analysis, and customer segmentation to evaluate customer satisfaction.",
  },
  {
    question:
      "How long does it take to see improvements in customer experience?",
    answer:
      "The timeline varies depending on the business and the changes implemented, but many companies start seeing improvements once customer feedback insights are applied.",
  },
  {
    question:
      "How often should businesses conduct customer satisfaction surveys?",
    answer:
      "Many businesses conduct surveys quarterly or after major interactions such as product launches, service updates, or major customer touchpoints.",
  },
  {
    question:
      "What makes Researchers different from other customer research agencies in the UAE?",
    answer:
      "Our deep understanding of the UAE market, customized research strategies, and actionable insights help businesses make informed decisions and improve customer experience effectively.",
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

export default function CustomerExperienceHappinessPageContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Customer Experience and Happiness
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Customer Satisfaction Services in UAE
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Customer satisfaction is one of the most important factors for
              long-term business growth. At Researchers.me, we help businesses
              in the UAE understand how customers truly feel about their
              products, services, and overall experience.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our customer satisfaction services are designed to measure
              customer expectations, identify gaps in service delivery, and
              provide practical insights that help businesses improve customer
              experience. In a competitive market like the UAE, delivering a
              positive customer experience is not optional, it is essential for
              building loyalty and maintaining a strong brand reputation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a consultation today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Customer experience strategy meeting"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-strech">
          <article className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Qualitative survey for customer experience"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What Is Customer Satisfaction?
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              How Customers Judge Your Brand Experience
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Customer satisfaction refers to how happy and loyal customers feel
              after interacting with your brand, products, services, or
              employees. It reflects whether customer expectations are met
              consistently, at the right time and in the right way.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Satisfied customers often become loyal customers. They not only
              return to your business but also recommend your brand to others,
              helping you grow organically.
            </p>
            <ul className="mt-5 space-y-3">
              {corePractices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why It Matters
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Customer Satisfaction Is Important for Businesses in the UAE
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              In the UAE business environment, customer experience plays a
              critical role in brand success. Businesses that focus on customer
              satisfaction often see better long-term results.
            </p>
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Customer retention and loyalty"
              className="mt-6 h-full min-h-[240px] w-full rounded-[5px] object-cover"
            />
          </article>
          <article className="lg:col-span-8">
            <div className="grid gap-5 md:grid-cols-2">
              {whyItMatters.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[5px] border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {item.id}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-slate-900 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            How To Improve
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            How Businesses Can Improve Customer Satisfaction
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Improving customer satisfaction requires a consistent and
            customer-focused approach. Businesses can enhance customer
            experience by implementing simple but effective practices.
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <ul className="space-y-3">
                {corePractices.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                When businesses focus on these areas, they often experience:
              </p>
              <ul className="mt-4 space-y-3">
                {businessImpact.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Research Approach
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Our Approach to Customer Satisfaction Research
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            At Researchers.me, we use a structured research approach to help
            businesses measure and improve customer satisfaction.
          </p>
          <ol className="mt-6 grid gap-6 md:grid-cols-2">
            {improvementWays.map((item, index) => (
              <li key={item.title} className="border-l-2 border-slate-200 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Researchers.me
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Choose Researchers for Customer Satisfaction Services in UAE
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we combine local market knowledge with advanced
              research methodologies to help businesses improve customer
              experience.
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {chooseUs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/image/ef920cc1-46a3-4604-9dd1-3ea562976bd9.jpg"
              alt="Customer experience consulting in Dubai"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Solutions In UAE
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Customer Experience and Happiness Solutions in UAE
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Our customer experience and satisfaction services are designed to
            help businesses build stronger relationships with their customers
            and improve long-term brand loyalty.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            By combining customer feedback surveys, consumer research, and
            advanced analytics, we provide businesses with the insights needed
            to improve customer experience and drive sustainable growth.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Researchers.me proudly supports businesses across Dubai, the UAE,
            and the wider Gulf region with professional customer experience
            research services.
          </p>
        </div>
      </section>

      <section className=" border-slate-200 bg-white">
        <div className="templateContainer grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <div className="relative mb-6 inline-block">
              <h2 className="relative z-10 text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">
                Frequently Asked Questions
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
              Expert answers about customer experience and happiness research.
            </h3>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-300">
              {faqItems.map((faq, index) => (
                <div key={faq.question} className="py-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors hover:text-blue-600 focus:outline-none"
                  >
                    <span className="pr-8 text-lg font-light text-black md:text-xl">
                      {faq.question}
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
                      {faq.answer}
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
