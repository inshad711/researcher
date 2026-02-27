import Link from "next/link";
import Script from "next/script";
import type { ComponentType } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Lightbulb,
  RefreshCw,
  Settings,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
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

const urgentReasons: IconItem[] = [
  {
    title: "Stay Competitive",
    description:
      "Embracing digital solutions ensures that businesses remain competitive by leveraging technology for efficiency, innovation, and enhanced customer experiences.",
    icon: TrendingUp,
  },
  {
    title: "Drive Innovation",
    description:
      "Digital transformation opens avenues for innovation, allowing businesses to create new revenue streams, products, and services that resonate with modern consumer demands.",
    icon: Lightbulb,
  },
  {
    title: "Enhance Agility",
    description:
      "Adapting to digital change makes businesses more agile and responsive, enabling them to quickly pivot strategies in response to market shifts and evolving customer needs.",
    icon: Zap,
  },
];

const transformationTypes: IconItem[] = [
  {
    title: "Operational Transformation",
    description:
      "Streamlining internal processes and workflows through automation, AI-driven solutions, and digital tools to enhance efficiency and reduce operational costs.",
    icon: Settings,
  },
  {
    title: "Business Model Transformation",
    description:
      "Rethinking traditional business models by integrating digital technologies to create new revenue streams or entirely new ways of delivering value to customers.",
    icon: RefreshCw,
  },
  {
    title: "Customer Experience Transformation",
    description:
      "Focusing on enhancing customer interactions by implementing digital solutions like personalized experiences, omnichannel engagement, and responsive support systems.",
    icon: Users,
  },
  {
    title: "Cultural Transformation",
    description:
      "Encouraging a shift in organizational culture towards embracing digital change, fostering innovation, and promoting a collaborative mindset across all levels.",
    icon: Sparkles,
  },
];

const offerings: IconItem[] = [
  {
    title: "Strategic Digital Consulting",
    description:
      "Our team of experts collaborates with your business to develop tailored strategies aligned with your objectives. We identify opportunities for digital integration, assess current systems, and create a roadmap for seamless transformation.",
    icon: Lightbulb,
  },
  {
    title: "Technology Integration",
    description:
      "We offer seamless integration of cutting-edge technologies, ensuring a smooth transition and minimal disruption to your existing operations. From AI and IoT to cloud solutions, we implement technologies that empower your business for success.",
    icon: Settings,
  },
  {
    title: "Customer-Centric Solutions",
    description:
      "Enhancing customer experiences lies at the core of our approach. We design customer-centric digital solutions that cater to evolving preferences, ensuring engagement, loyalty, and satisfaction.",
    icon: Users,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Harnessing the power of data, we provide in-depth analytics and insights that drive informed decision-making. Our data-driven approach empowers you to anticipate market trends, optimize strategies, and stay ahead in your industry.",
    icon: Database,
  },
];

const whyChooseUs = [
  {
    title: "Comprehensive Solutions",
    description:
      "Our holistic approach covers every aspect of digital transformation, ensuring a complete and effective shift towards digital excellence.",
    icon: Shield,
  },
  {
    title: "Expertise and Innovation",
    description:
      "Backed by a team of seasoned professionals, we blend expertise with innovation to deliver strategies and solutions that meet the demands of a rapidly evolving digital landscape.",
    icon: Sparkles,
  },
  {
    title: "Customized Strategies",
    description:
      "We understand that every business is unique. Our solutions are tailored to your specific needs, ensuring that your digital transformation journey is both impactful and personalized.",
    icon: Settings,
  },
  {
    title: "Sustainable Growth",
    description:
      "Our focus extends beyond immediate improvements. We lay the groundwork for sustained growth, enabling you to adapt and thrive in the long run.",
    icon: TrendingUp,
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How can Digital Transformation benefit my business?",
    answer:
      "Digital Transformation offers numerous benefits, including increased operational efficiency, improved customer experiences, the ability to create new revenue streams, enhanced data-driven decision-making, and better adaptability to market changes.",
  },
  {
    question:
      "What are the typical challenges businesses face during Digital Transformation?",
    answer:
      "Challenges often include resistance to change within the organization, the complexity of integrating new technologies, concerns about data security, skill gaps among employees, and the need for substantial investments.",
  },
  {
    question: "What role does data play in Digital Transformation?",
    answer:
      "Data is the backbone of Digital Transformation. It enables informed decision-making, identifies trends, drives personalization, and helps in understanding customer behaviors, allowing businesses to optimize processes and strategies effectively.",
  },
  {
    question: "Do small businesses need Digital Transformation?",
    answer:
      "Absolutely. In today's digital age, businesses of all sizes can benefit from Digital Transformation. It allows small businesses to enhance operations, reach wider audiences, and compete more effectively in the market.",
  },
  {
    question:
      "How do I measure the success of a Digital Transformation initiative?",
    answer:
      "Success can be measured through various metrics, including increased productivity, improved customer satisfaction, cost savings, revenue growth, faster time-to-market, and the successful adoption of new technologies within the organization.",
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

export default function DigitalTransformationPageContent() {
  return (
    <main className="pt-32 pb-20 text-slate-900">
      <Script
        id="digital-transformation-faq-schema"
        type="application/ld+json"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 px-6 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.07)] md:px-10 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Technology
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Digital Transformation
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            The idea of digital transformation — a strategic program that enables our Researchers
            to adapt, develop, and thrive in the digital era — is at the core of a paradigm shift.
            Businesses today gather, analyze, and interpret data by utilizing the cutting-edge
            technologies of our professionals.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            The outcome? Actionable insights that enable you to make smart decisions, profit from
            new trends, and beat the competition.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              Strategic digital consulting
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              Technology integration &amp; implementation
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              Data-driven insights &amp; decision-making
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/technology"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Back to Technology
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding Digital Transformation + Image */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/alina-grubnyak-ZiQkhI7417A-unsplash-1024x683.png"
              alt="Digital Transformation"
              className="h-56 w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Digital transformation is more than just adopting new technologies. It's a fundamental
              shift in how businesses operate and deliver value to customers.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Understanding Digital Transformation
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Digital Transformation refers to the integration of digital technology into all
              aspects of a business, fundamentally changing how it operates and delivers value to
              customers. It's crucial for businesses to stay competitive, drive innovation, and
              enhance agility in a rapidly evolving digital landscape.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              It encompasses leveraging innovative digital solutions to streamline processes,
              improve efficiencies, and create new business models.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Focus</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Streamlined processes</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Goal</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Improved efficiencies</p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Outcome</p>
                <p className="mt-1 text-sm font-medium text-slate-800">New business models</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* The Urgent Need */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            The Urgent Need for Digital Transformation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Businesses today face the critical challenge of adapting to a digital-first system.
            Digital transformation isn't merely an option but a necessity.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {urgentReasons.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="h-5 w-5 text-slate-700" />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Digital Transformation */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-8 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Types of Digital Transformation
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Depending on the business, there are several types of digital transformations. The
              four strategies below cut across various business scopes.
            </p>
            <div className="mt-5 space-y-3">
              {transformationTypes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-slate-600" />
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-slate-50 p-6 lg:col-span-4 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Digital Transformation Services in UAE
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              At Researchers.me, we understand the vital need for businesses in the UAE to embark
              on a transformative journey in the digital era.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The rapid evolution of technology, changing consumer behaviors, and competitive
              business scene necessitate a strategic shift towards digital transformation.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Tailored for UAE &amp; Gulf Region businesses</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Industry-specific digital strategies</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>End-to-end implementation support</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Offerings</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            We provide comprehensive digital transformation services designed to guide your
            business through every stage of the journey.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {offerings.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-4 w-4 text-slate-600" />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Choose Researchers.me for Digital Transformation?
            </h2>
            <div className="mt-5 space-y-3">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-slate-600" />
                        <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-100 bg-slate-50 p-6 lg:col-span-5 md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Unlock Your Digital Potential
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Embark on a transformative journey with Researchers.me and unlock the full potential
              of digital innovation for your business. From strategy development to seamless
              implementation, we are your partners in achieving digital excellence.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Strategy development &amp; roadmap design</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Seamless technology implementation</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Ongoing support &amp; performance tracking</span>
              </li>
              <li className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Focused on UAE, Dubai &amp; the Gulf Region</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 px-6 md:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-16 -top-12 h-52 w-52 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-8 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                Ready To Transform
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-4xl">
                Initiate your digital transformation journey today
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                Partner with Researchers.me to elevate your business to new heights in the digital
                realm. Your company deserves the best — we make your vision a reality.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/technology"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Technology Services
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Approach
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Strategy to implementation — end-to-end
                </p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Region
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  UAE, Dubai &amp; the Gulf Region
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
