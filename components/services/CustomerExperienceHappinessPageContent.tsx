import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const corePractices = [
  "Make your customers feel important and appreciated.",
  "Be open and honest about your business practices.",
  "Provide outstanding customer service.",
  "Continue to innovate and offer new products or services to engage customers.",
  "Make all customer interactions as seamless as possible.",
];

const businessImpact = [
  "Lower customer churn and higher customer retention",
  "Larger revenues per customer",
  "Higher referral and word-of-mouth growth",
  "Stronger brand reputation in competitive markets",
];

const improvementWays = [
  {
    title: "Consumer Insights Drive Customer Satisfaction",
    description:
      "Understanding customer needs and preferences through behavior analysis helps tailor products and services to what customers value most.",
  },
  {
    title: "Leveraging Customer Feedback Surveys",
    description:
      "Well-designed customer satisfaction surveys reveal pain points and opportunities so businesses can make practical, high-impact improvements.",
  },
  {
    title: "Understanding Customer Sentiments",
    description:
      "Sentiment analysis uncovers emotional responses to campaigns, offerings, and service experiences, helping refine communication and delivery.",
  },
  {
    title: "The Power of Customer Segmentation",
    description:
      "Segmentation identifies distinct audience groups so messaging, offers, and service journeys can be personalized for better outcomes.",
  },
];

const chooseUs = [
  "Localized UAE market expertise and cultural understanding",
  "Customized survey and experience-measurement frameworks",
  "Advanced analytics with actionable recommendations",
  "Multichannel engagement for representative customer coverage",
  "Fast feedback loops for timely improvement actions",
  "Benchmarking against industry peers and competitors",
  "Continuous improvement strategies beyond one-time reporting",
];

const faqItems: FaqItem[] = [
  {
    question: "How can focusing on customer experience impact my business in the UAE?",
    answer:
      "Prioritizing customer experience can lead to repeat business, positive word-of-mouth, and a strong reputation, all of which support business growth.",
  },
  {
    question:
      "What specific strategies do Researchers.me employ to improve customer experience and happiness in the UAE?",
    answer:
      "We use in-depth market research, tailored strategy design, advanced analytics, and practical recommendations to improve customer satisfaction and happiness.",
  },
  {
    question: "How long does it take to see improvements in customer experience after implementing changes?",
    answer:
      "Timelines vary by industry and implementation depth, but many businesses begin seeing positive movement within a few months.",
  },
  {
    question: "How often should I conduct customer experience surveys?",
    answer:
      "Survey frequency depends on business goals. Common approaches include quarterly, bi-annual, or annual cycles.",
  },
  {
    question:
      "What sets Researchers.me apart from other customer experience and happiness consultants in the UAE?",
    answer:
      "We combine UAE-specific market understanding with a customer-centric approach, then translate findings into actionable, measurable improvement plans.",
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
  return (
    <main className="bg-white pb-16 pt-28 text-slate-900 md:pt-32">
      <Script id="customer-experience-happiness-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section>
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Customer Experience and Happiness
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Customer Satisfaction Service in UAE: Experience and Happiness
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Customer satisfaction is one of the most important drivers of business growth. At Researchers.me,
              we help organizations improve customer experience through measurable strategies, practical insights,
              and continuous optimization across the customer journey.
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
              alt="Customer experience strategy meeting"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5">
            <img
              src="/image/46908.webp"
              alt="Qualitative survey for customer experience"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core Focus
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">For Better Customer Experience and Happiness</h2>
            <ul className="mt-5 space-y-3">
              {corePractices.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Business Outcomes
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">Business Impact of Satisfied Customers</h2>
            <ul className="mt-5 space-y-3">
              {businessImpact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Customer retention and loyalty"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Improvement Strategy
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl">How to Improve Customer Service and Satisfaction</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            In the UAE, exceptional customer service is both a cultural expectation and a competitive necessity.
            Organizations that prioritize customer happiness gain stronger loyalty, better reputation, and more
            sustainable growth.
          </p>
          <ol className="mt-6 grid gap-6 md:grid-cols-2">
            {improvementWays.map((item, index) => (
              <li key={item.title} className="border-l-2 border-slate-200 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-base font-semibold text-slate-900 md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
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
              Why Choose Us for Customer Experience Research in Dubai
            </h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {chooseUs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
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
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="templateContainer grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="self-start lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-700 md:text-base">
              Expert answers about customer experience and happiness research.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-300">
              {faqItems.map((faq) => (
                <details key={faq.question} className="py-4">
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
