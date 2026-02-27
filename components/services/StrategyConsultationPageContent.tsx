import Link from "next/link";
import Script from "next/script";
import type { ComponentType } from "react";
import {
  ArrowRight,
  ChartBar,
  Compass,
  DollarSign,
  Eye,
  Lightbulb,
  Map,
  RefreshCw,
  Settings,
  Shield,
  SlidersHorizontal,
  TrendingUp,
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

const strategyReasons: IconItem[] = [
  {
    title: "Direction and Focus",
    description:
      "Strategies serve as a roadmap, providing clarity on the business's goals and the path to achieve them. They offer direction, ensuring efforts are focused on activities that align with long-term objectives, preventing aimless ventures.",
    icon: Compass,
  },
  {
    title: "Adaptability to Change",
    description:
      "In an ever-evolving market, strategies enable businesses to adapt and respond effectively to changes in consumer behavior, technology, or industry trends. A well-crafted strategy fosters agility, allowing swift adjustments without compromising the core vision.",
    icon: RefreshCw,
  },
  {
    title: "Optimized Resource Utilization",
    description:
      "Effective strategies optimize resource allocation, ensuring efficient utilization of time, finances, and human capital. They prioritize initiatives that yield maximum returns, preventing the wastage of resources on unproductive endeavors.",
    icon: Settings,
  },
  {
    title: "Competitive Advantage",
    description:
      "A thoughtfully devised strategy sets a business apart from competitors. It leverages strengths, identifies weaknesses, and exploits opportunities, creating a competitive edge that resonates with customers and stakeholders.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Sustainability",
    description:
      "Strategies lay the groundwork for sustainable growth and longevity. They encompass plans for continuous improvement, innovation, and resilience, ensuring the business remains relevant and successful over time.",
    icon: Shield,
  },
];

const consultationReasons: IconItem[] = [
  {
    title: "Expertise and Insight",
    description:
      "Consultants bring specialized knowledge and diverse perspectives. Their expertise spans industries, enabling them to offer insights and strategies that might not be evident from an internal viewpoint.",
    icon: Lightbulb,
  },
  {
    title: "Objective Analysis",
    description:
      "Consultants provide an unbiased, objective assessment of business operations, strategies, and challenges. Their impartial viewpoint helps in identifying blind spots and devising effective solutions.",
    icon: Eye,
  },
  {
    title: "Augmented Decision-Making",
    description:
      "Consultation services aid in informed decision-making by providing data-driven insights and alternative approaches. This minimizes risks associated with decisions and increases the likelihood of successful outcomes.",
    icon: ChartBar,
  },
  {
    title: "Customized Solutions",
    description:
      "Consultants tailor their recommendations to suit the specific needs and objectives of the business. This personalized approach ensures that solutions are practical, effective, and aligned with the business's goals.",
    icon: SlidersHorizontal,
  },
  {
    title: "Efficiency and Cost-Effectiveness",
    description:
      "Engaging consultants often proves more cost-effective than hiring full-time experts. Their focused interventions and targeted solutions enhance operational efficiency and yield better ROI.",
    icon: DollarSign,
  },
  {
    title: "Continuous Improvement",
    description:
      "Consultation services extend beyond immediate problem-solving. They facilitate a culture of continuous improvement, offering ongoing support and guidance for sustainable growth and development.",
    icon: RefreshCw,
  },
];

const approachSteps: IconItem[] = [
  {
    title: "Holistic Business Analysis",
    description:
      "We conduct a comprehensive analysis of your business landscape, taking into account market trends, competition, and your unique position. This in-depth assessment forms the basis for crafting effective strategies.",
    icon: ChartBar,
  },
  {
    title: "Customized Strategy Development",
    description:
      "Drawing on industry best practices and innovative approaches, we develop customized strategies designed specifically for your business. These strategies are agile, adaptable, and geared towards achieving measurable results.",
    icon: SlidersHorizontal,
  },
  {
    title: "Implementation Roadmap",
    description:
      "Our consultants provide a clear roadmap for implementing the devised strategies. We outline actionable steps, milestones, and key performance indicators (KPIs) to ensure seamless execution and monitoring.",
    icon: Map,
  },
  {
    title: "Ongoing Evaluation and Optimization",
    description:
      "We don't stop at implementation; we continually evaluate the strategies' effectiveness and make necessary adjustments to optimize performance and ensure alignment with evolving business needs.",
    icon: TrendingUp,
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What does strategic planning involve?",
    answer:
      "Strategic planning encompasses the formulation and implementation of long-term plans aligned with your business goals. It involves analyzing market trends, identifying opportunities, and devising comprehensive strategies to achieve sustainable growth.",
  },
  {
    question: "How can market analysis benefit my business?",
    answer:
      "Market analysis provides insights into consumer behavior, market trends, and competition, aiding in making informed business decisions. It helps identify opportunities, potential risks, and areas for growth within your industry.",
  },
  {
    question: "How do you ensure the success of brand development strategies?",
    answer:
      "Our brand development strategies are crafted based on market insights, consumer behavior, and industry trends. We focus on enhancing brand identity, customer engagement, and market positioning to ensure long-term success.",
  },
  {
    question: "What results can I expect from Researchers.me's strategy services?",
    answer:
      "Our result-oriented approach aims to drive tangible business growth. We focus on delivering measurable outcomes aligned with your business objectives, ensuring a positive impact on your bottom line.",
  },
  {
    question: "How can I initiate collaboration with Researchers.me for consultation services?",
    answer:
      "To explore how our consultation services can benefit your business, reach out to us today through our contact page. Our team will connect with you to discuss your specific needs and initiate the collaboration process.",
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

function FeatureCard({ item }: { item: IconItem }) {
  const Icon = item.icon;
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <Icon className="h-5 w-5 text-slate-700" />
      <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
    </article>
  );
}

export default function StrategyConsultationPageContent() {
  return (
    <main className="bg-slate-50 pb-24 pt-24 text-slate-900">
      <Script id="strategy-consultation-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-11">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Digital Transformation</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Strategy &amp; Consultation
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
            Digital transformation requires a strategic approach to leverage its full potential. With effective
            strategies and engaging in consultation services, businesses gain access to sustainable growth, competitive
            advantage, and resilience in today&apos;s dynamic market.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
            At Researchers, we guide your business through this transformative journey, providing strategy and
            consultation services that align with your digital goals and objectives.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/technology/digital-transformation"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Back to Digital Transformation
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/annie-spratt-hCb3lIB8L8E-unsplash-1.png"
              alt="Strategy and Consultation"
              className="h-64 w-full rounded-xl object-cover"
            />
            <p className="mt-5 text-sm leading-7 text-slate-600">
              We conduct a comprehensive assessment of your readiness and evaluate your existing capabilities. This
              helps us to develop tailored strategies that address your needs and opportunities.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/startae-team-7tXA8xwe4W4-unsplash-Copy-1024x683.png"
              alt="Strategy Team at Work"
              className="h-64 w-full rounded-xl object-cover"
            />
            <h2 className="mt-5 text-2xl font-semibold md:text-3xl">Why Businesses Need to Craft Effective Strategies</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Crafting effective strategies is important, especially in the highly competitive UAE market. A clear
              strategy defines direction, optimizes resources, and builds long-term resilience in a rapidly evolving
              business environment.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold">The Value of Effective Business Strategies</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            In an ever-changing market landscape, a well-crafted strategy is the cornerstone of sustained business
            performance and competitive strength.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {strategyReasons.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold">Why Businesses Need Consultation Services</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Consultation services offer invaluable support and guidance to businesses, bringing external expertise,
            objectivity, and data-driven insights that empower better decisions.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {consultationReasons.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-3xl font-semibold">Our Approach</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            We follow a structured, four-phase methodology to ensure your strategy is not only well-crafted but also
            effectively implemented and continuously refined.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {approachSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-slate-600" />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Common questions about our Strategy &amp; Consultation services.</p>
          <div className="mt-5 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
