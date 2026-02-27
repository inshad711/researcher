import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Compass, Lightbulb } from "lucide-react";

type FaqItem = { question: string; answer: string };

const strategies = [
  { num: "01", title: "Customer Service Positioning", desc: "Differentiate through superior service experience that creates lasting loyalty." },
  { num: "02", title: "Convergence-Based Strategy", desc: "Align brand identity with evolving market trends and consumer expectations." },
  { num: "03", title: "Price-Based Positioning", desc: "Position your brand at the right value tier to attract and retain target segments." },
  { num: "04", title: "Quality-Based Positioning", desc: "Build brand equity around product excellence and consistent delivery standards." },
  { num: "05", title: "Differentiation Strategy", desc: "Identify and amplify unique attributes that competitors cannot easily replicate." },
  { num: "06", title: "Social Media Positioning", desc: "Shape brand perception across digital channels where your audience lives." },
];

const pillars = [
  { icon: Compass,   title: "Market Differentiation", desc: "Define what makes your brand unique and communicate that distinctiveness to stand out in a crowded UAE market." },
  { icon: TrendingUp, title: "Competitive Insight",    desc: "Understand exactly how your brand compares to competitors — identifying strengths to amplify and gaps to close." },
  { icon: Users,     title: "Consumer Connection",     desc: "Build authentic relationships by aligning brand values with what UAE consumers genuinely care about." },
  { icon: Lightbulb, title: "Strategic Decision-Making", desc: "Use benchmarking data to make informed choices on product placement, campaigns, and market expansion." },
];

const researchSteps = [
  { label: "Brand Identity",       title: "Define Your Brand Identity",       desc: "A brand identity survey reveals how your target audience truly perceives your brand — its image, values, and emotional associations. This forms the foundation for all positioning work." },
  { label: "Brand Awareness",      title: "Gauge Brand Awareness",            desc: "Awareness surveys assess your brand's recognition in the market, enabling strategies to enhance visibility and strengthen recall among your most valuable consumer segments." },
  { label: "Image & Equity",       title: "Analyze Brand Image & Equity",     desc: "Brand image analysis explores consumer emotions, while equity analysis quantifies the tangible value your brand delivers — revealing how the market values your position." },
  { label: "Value & Benchmarking", title: "Assess Brand Value & Benchmark",   desc: "Brand value analysis measures financial worth while competitive benchmarking shows exactly where you stand against industry leaders and direct rivals in the UAE market." },
  { label: "Perception",           title: "Enhance Brand Perception",         desc: "Perception analysis ensures your brand is viewed as favorable, valuable, and trustworthy — informing strategies to reinforce positives and correct market misconceptions." },
];

const reasons = [
  { title: "Local Market Understanding",   desc: "Deep expertise in UAE market dynamics, cultural nuances, and regional trends ensures positioning that resonates locally." },
  { title: "Tailored Strategies",          desc: "Every strategy is crafted specifically for your brand — personalized to the demands of the UAE market, never generic." },
  { title: "Comprehensive Benchmarking",   desc: "In-depth analysis against industry benchmarks and direct competitors, with actionable insights at every level." },
  { title: "Data-Driven Support",          desc: "Advanced analytics power every recommendation, delivering meaningful insights that enable confident business decisions." },
  { title: "Proven Track Record",          desc: "A history of successfully helping UAE brands position effectively and achieve measurable benchmarking excellence." },
  { title: "Holistic Approach",            desc: "We consider industry context, broader market trends, and consumer behavior for a truly comprehensive strategy." },
  { title: "Continuous Monitoring",        desc: "Positioning is an ongoing discipline — we continuously monitor and adapt strategies to keep your brand ahead." },
];

const faqItems: FaqItem[] = [
  { question: "Why is Brand Positioning crucial for businesses entering the UAE market?",                                              answer: "Brand Positioning defines how your brand is perceived. In the UAE's diverse market, a well-positioned brand creates a lasting impression, helping you connect with your audience and stand out amid the competition." },
  { question: "Can Researchers.me assist in repositioning a brand that has lost its relevance in the UAE market?",                    answer: "Absolutely. Our expertise extends to brand repositioning. We analyze market trends, consumer behavior, and competitor strategies to redefine your brand's position, giving it a fresh and relevant identity in the UAE." },
  { question: "What role does cultural sensitivity play in Brand Positioning for the UAE market?",                                    answer: "Cultural sensitivity is paramount. We integrate cultural nuances into Brand Positioning strategies, ensuring that your brand aligns with local values, resonates with the diverse population, and avoids potential cultural pitfalls." },
  { question: "Can Researchers.me help in identifying gaps between a brand's current position and desired position in the UAE?",      answer: "Certainly. Our analysis includes a gap assessment, identifying areas where your brand can improve and align more closely with your desired position in the competitive landscape of the UAE." },
  { question: "What types of data and metrics are considered in the Benchmarking process by Researchers.me?",                         answer: "Our Benchmarking process involves a comprehensive analysis, including market trends, customer feedback, competitor strategies, and industry benchmarks. We consider both quantitative and qualitative data to provide a well-rounded assessment." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function BrandPositioningPageContent() {
  return (
    <main className="bg-white text-slate-900">
      <Script id="brand-positioning-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* ── HERO ── */}
      <section className="border-b border-slate-100 bg-linear-to-br from-violet-50 via-white to-indigo-50 px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
            Brand Positioning &amp; Benchmarking
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
            Own your position.<br />
            <span className="text-violet-600">Outperform your market.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            We help UAE brands re-establish identity, benchmark against competitors, and position
            products exactly where they need to be — in the minds of consumers.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/market-research-measurement"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              Back to Services
            </Link>
          </div>

          {/* stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
            {[
              { n: "500+", label: "Brand studies conducted" },
              { n: "UAE",  label: "Deep market expertise" },
              { n: "6",    label: "Positioning strategies" },
              { n: "100%", label: "Data-driven approach" },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-6">
                <p className="text-2xl font-semibold text-slate-900 md:text-3xl">{s.n}</p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS BRAND POSITIONING — editorial split ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* image */}
            <div className="relative">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/Business-Intelligence-1024x683.jpg"
                alt="Brand Positioning"
                className="h-105 w-full rounded-3xl object-cover lg:h-130"
              />
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:-right-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Core goal</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 max-w-45 leading-snug">
                  Set your brand apart from the competition
                </p>
              </div>
            </div>

            {/* text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">What we do</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Re-establish your brand in the minds of customers
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Brand positioning is the strategic process of creating a distinct, favorable place
                for your brand in the consumer's mind. It defines what makes your brand unique and
                communicates that value in a way that resonates with your target audience.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Benchmarking complements this by measuring your brand performance against
                competitors — giving you a precise view of where you stand and where to go next.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Increases brand awareness", "Communicates value clearly", "Justifies pricing strategy", "Drives competitive edge"].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-600" />
                    <span className="text-sm text-slate-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIES ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Our approach</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
                Six proven brand positioning strategies
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              We select and blend strategies that best fit your market context, competitive
              landscape, and business objectives.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strategies.map((s) => (
              <div key={s.num} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-200 hover:shadow-md">
                <span className="text-3xl font-bold text-slate-100">{s.num}</span>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS — split with tall image ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Why it matters</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Four pillars of brand success in the UAE
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                In the dynamic UAE business landscape, effective brand positioning and benchmarking
                are key drivers of sustained competitive advantage.
              </p>
              <div className="mt-8 space-y-4">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                        <Icon className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{p.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative lg:sticky lg:top-32">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/Data-Processing-1024x917.jpg"
                alt="Benchmarking Marketing"
                className="h-120 w-full rounded-3xl object-cover"
              />
              <div className="absolute -left-4 -bottom-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:-left-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Benchmarking</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 max-w-50 leading-snug">
                  Position your product exactly where consumers expect it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH APPROACH — alternating timeline ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Research methodology</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Elevating brand positioning through research
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              A five-stage research framework that gives your brand a complete, data-backed
              positioning advantage in the UAE market.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {researchSteps.map((step, i) => (
              <div
                key={step.label}
                className="grid gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-[72px_1fr]"
              >
                {/* step number sidebar */}
                <div className="flex items-center justify-center border-b border-slate-100 bg-violet-50 px-4 py-4 md:border-b-0 md:border-r md:py-8">
                  <span className="text-2xl font-bold text-violet-300">0{i + 1}</span>
                </div>
                {/* content */}
                <div className="px-6 py-6">
                  <span className="inline-block rounded-full border border-violet-200 bg-violet-50 px-3 py-0.5 text-xs font-semibold text-violet-700">
                    {step.label}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">Why Researchers.me</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                A partner built for the UAE market
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Choosing Researchers.me means choosing a partner dedicated to enhancing your brand
                positioning via thorough competitive benchmarking — contributing directly to your
                business success across Dubai, UAE, and the Gulf Region.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Work with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 lg:col-span-8 md:grid-cols-2">
              {reasons.map((r, i) => (
                <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-200 hover:shadow-sm">
                  <span className="text-xs font-bold text-slate-200">0{i + 1}</span>
                  <h3 className="mt-2 text-sm font-semibold text-slate-900">{r.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 open:border-violet-200 open:bg-violet-50/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition group-open:rotate-45 group-open:border-violet-300 group-open:text-violet-600">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-200 bg-linear-to-br from-violet-50 via-indigo-50 to-white">
          <div className="grid lg:grid-cols-2">
            {/* text */}
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                Ready to position your brand
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Partner with a top-rated survey company in Dubai
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our services are crafted to empower your brand across Dubai, UAE, and the wider Gulf
                Region — from brand identity research to comprehensive benchmarking analysis.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/market-research-measurement"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Explore Market Research
                </Link>
              </div>
            </div>

            {/* right panel */}
            <div className="flex flex-col justify-center gap-5 border-t border-violet-200 px-8 py-10 md:px-12 lg:border-l lg:border-t-0">
              {[
                { label: "Focus",    value: "Brand identity, equity & perception" },
                { label: "Scope",    value: "Dubai, UAE & Gulf Region" },
                { label: "Output",   value: "Competitive positioning roadmap" },
                { label: "Approach", value: "Research-driven, continuously monitored" },
              ].map((item) => (
                <div key={item.label} className="border-b border-violet-100 pb-5 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-500">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
