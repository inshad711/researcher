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
    <main className="bg-slate-50 pt-38 pb-20 text-slate-900">
      <Script id="customer-experience-happiness-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-100 px-6 py-14 shadow-[0_24px_80px_rgba(16,185,129,0.18)] md:px-10 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Customer Experience and Happiness
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Customer Satisfaction Service in UAE: Experience and Happiness
          </h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Customer satisfaction is one of the most important drivers of business growth. At Researchers.me,
            we help organizations improve customer experience through measurable strategies, practical insights,
            and continuous optimization across the customer journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/market-research-measurement"
              className="inline-flex items-center rounded-full border border-emerald-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Qualitative-Survey-1024x627.jpg"
              alt="Qualitative survey for customer experience"
              className="h-72 w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              For better customer experience and happiness
            </h2>
            <div className="mt-5 space-y-3">
              {corePractices.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Business Impact of Satisfied Customers</h2>
            <div className="mt-5 space-y-3">
              {businessImpact.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Loyalty-1024x683.jpg"
              alt="Customer retention and loyalty"
              className="h-72 w-full rounded-xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">How to Improve Customer Service and Satisfaction</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            In the UAE, exceptional customer service is both a cultural expectation and a competitive necessity.
            Organizations that prioritize customer happiness gain stronger loyalty, better reputation, and more
            sustainable growth.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {improvementWays.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-50 to-emerald-50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why Choose Us for Customer Experience Research in Dubai
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {chooseUs.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-white/70 px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
