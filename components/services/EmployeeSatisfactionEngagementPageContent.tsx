"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const analysisPoints = [
  "Employee motivation and engagement levels",
  "Workplace challenges employees may be facing",
  "Employee expectations and concerns",
  "Opportunities to improve employee experience",
];

const uaeImportance = [
  {
    title: "Increased Productivity",
    text: "Satisfied employees are generally more motivated and productive in their roles.",
  },
  {
    title: "Positive Workplace Culture",
    text: "A supportive workplace environment encourages collaboration, trust, and teamwork.",
  },
  {
    title: "Higher Employee Retention",
    text: "Employees who feel appreciated and engaged are more likely to stay with the organization, reducing turnover costs.",
  },
  {
    title: "Innovation and Creativity",
    text: "Engaged employees often contribute new ideas and solutions that help businesses grow and stay competitive.",
  },
];

const businessBenefits = [
  "Stronger company reputation",
  "Higher annual revenue",
  "Increased customer trust in the brand",
  "Lower customer acquisition costs",
  "Higher customer retention rates",
  "Better ability to attract new customers",
];

const researchApproach = [
  {
    title: "Employee Satisfaction Surveys",
    text: "Employee satisfaction surveys help organizations understand employee opinions about their workplace, management, and career development opportunities.",
  },
  {
    title: "Employee Engagement Surveys",
    text: "Employee engagement surveys measure how connected employees feel to their work and company goals.",
  },
  {
    title: "Employee Recognition and Appreciation",
    text: "Using research insights, organizations can create effective employee recognition strategies that encourage better performance.",
  },
  {
    title: "Employee Feedback Analysis",
    text: "Employee feedback surveys allow employees to share their thoughts, concerns, and suggestions to support informed workplace decisions.",
  },
  {
    title: "Employee Satisfaction Data Analysis",
    text: "After collecting survey responses, our team analyzes the data to identify trends, strengths, and improvement areas.",
  },
  {
    title: "Employee Satisfaction Reporting",
    text: "We provide structured reports with key findings and actionable recommendations for leadership teams.",
  },
];

const whyChooseUs = [
  {
    title: "Local Market Expertise",
    text: "Our team understands the UAE business environment and workplace dynamics.",
  },
  {
    title: "Customized Research Solutions",
    text: "We design employee satisfaction surveys tailored to your organization's culture and business objectives.",
  },
  {
    title: "Proven Research Methodology",
    text: "Our research methods provide clear insights into employee engagement and workplace satisfaction.",
  },
  {
    title: "Comprehensive Workforce Analysis",
    text: "We analyze employee feedback and engagement levels to identify improvement opportunities.",
  },
  {
    title: "Scalable Solutions",
    text: "Our services support businesses of all sizes, from startups to large enterprises.",
  },
  {
    title: "Continuous Improvement",
    text: "We help organizations monitor progress and continuously improve their employee engagement strategies.",
  },
  {
    title: "Transparent Communication",
    text: "We maintain open communication throughout the research process to ensure clear understanding of insights and recommendations.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What does an employee satisfaction survey measure?",
    answer:
      "An employee satisfaction survey measures how employees feel about different aspects of their workplace, such as company culture, leadership, communication, career growth opportunities, and work environment. This feedback helps organizations understand employee expectations and identify areas that need improvement.",
  },
  {
    question:
      "How does Researchers conduct employee satisfaction analysis in Dubai?",
    answer:
      "At Researchers, we design customized employee surveys based on your organization's goals and workforce structure. We collect feedback from employees, analyze the data, and provide a detailed report with insights and recommendations to improve employee engagement and workplace satisfaction.",
  },
  {
    question:
      "Which industries can benefit from employee satisfaction research?",
    answer:
      "Employee satisfaction research is valuable for businesses across various industries including retail, hospitality, healthcare, corporate offices, education, and service-based companies. Any organization that wants to improve employee engagement and workplace culture can benefit from it.",
  },
  {
    question: "How long does an employee satisfaction research project take?",
    answer:
      "The timeline usually depends on the size of the organization and the number of employees participating in the survey. In most cases, the survey process, analysis, and reporting can take a few weeks.",
  },
  {
    question:
      "What insights will businesses receive from an employee satisfaction report?",
    answer:
      "An employee satisfaction report typically includes employee engagement levels, key workplace challenges, satisfaction drivers, and actionable recommendations that help management improve employee experience and retention.",
  },
  {
    question:
      "Can employee satisfaction research improve business performance?",
    answer:
      "Yes. When businesses understand employee concerns and improve workplace conditions, it often leads to higher productivity, stronger teamwork, better customer service, and improved overall business performance.",
  },
];

export default function EmployeeSatisfactionEngagementPageContent() {
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
              Employee Satisfaction and Engagement
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Employee Satisfaction Analysis in Dubai
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Employee satisfaction plays an important role in the success of
              any organization. When employees feel valued, motivated, and
              connected to their work, they contribute more effectively to
              overall business performance.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers.me, we help businesses measure employee
              satisfaction and engagement through structured surveys and
              detailed research analysis. These insights help companies improve
              workplace culture, increase productivity, and build stronger
              teams.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              An engaged workforce not only improves internal performance but
              also leads to better customer experiences and a stronger brand
              reputation.
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
              src="/service/EmployeeSatisfactionandEngagement.webp"
              alt="Employee satisfaction analysis in Dubai"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-5">
            <img
              src="/service/WhatEmployeeSatisfactionAnalysis.webp"
              alt="Employee survey and workplace analysis"
              className="h-full min-h-[280px] w-full rounded-[5px] object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What It Is
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              What is Employee Satisfaction Analysis?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Employee satisfaction analysis is the process of measuring how
              employees feel about their jobs, workplace environment, and
              company management.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              It helps organizations understand where employees feel supported,
              what concerns may be affecting performance, and where the employee
              experience can be improved.
            </p>
            <ul className="mt-5 space-y-3">
              {analysisPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              When employees feel satisfied and connected to the company&apos;s
              mission and values, they are more likely to stay committed and
              contribute to long-term success.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why It Matters
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Employee Satisfaction and Engagement Matter in UAE
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Happy and engaged employees are the foundation of successful
              organizations in the UAE. Businesses that focus on employee
              satisfaction often see long-term benefits.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {uaeImportance.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Business Benefits
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              How Employee Satisfaction Supports Business Growth
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Employee satisfaction has a direct impact on business performance.
              Organizations that invest in employee engagement often experience
              measurable commercial and brand benefits.
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {businessBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Satisfied employees tend to deliver better service to customers,
              which ultimately improves the overall customer experience.
            </p>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/service/HowEmployeeSatisfactionSupportsBusinessGrowth.webp"
              alt="Business impact of employee satisfaction"
              className="h-full min-h-[320px] w-full rounded-[5px] object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Our Approach
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Our Approach to Employee Satisfaction Research
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            At Researchers.me, we follow a structured approach to measure and
            improve employee satisfaction through surveys, analysis, and
            practical reporting.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {researchApproach.map((item) => (
              <article
                key={item.title}
                className="border-l-2 border-slate-200 pl-4"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Employee and Customer Link
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Connection Between Employee Satisfaction and Customer Satisfaction
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Employee satisfaction and customer satisfaction are closely
            connected. When employees feel motivated, valued, and supported,
            they are more likely to provide better service and create positive
            customer experiences.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            For this reason, many organizations combine employee satisfaction
            analysis with customer satisfaction research to gain a complete
            understanding of business performance.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            This integrated approach helps companies build a productive
            workforce while also improving customer loyalty.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why Researchers.me
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Choose Researchers for Employee Satisfaction Analysis in Dubai
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Researchers.me helps organizations in Dubai and across the UAE
              understand employee sentiment and improve workplace culture
              through reliable research insights.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {whyChooseUs.map((item) => (
                <article
                  key={item.title}
                  className="border-l-2 border-slate-200 pl-4"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Solutions in Dubai
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Improve Employee Satisfaction in Dubai
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Creating a satisfied and engaged workforce is essential for
            sustainable business growth.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, our employee satisfaction analysis services help
            organizations understand employee expectations, improve workplace
            culture, and build stronger teams.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We support businesses across Dubai, the UAE, and the wider Gulf
            region with professional employee satisfaction and engagement
            research services.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200">
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
              Expert answers about employee satisfaction and engagement
              research.
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
