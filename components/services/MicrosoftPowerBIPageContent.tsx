import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  Monitor,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type FaqItem = { question: string; answer: string };

const powerBIPlatforms = [
  { icon: Monitor,    title: "Power BI Desktop", desc: "A Windows desktop application for creating rich reports and data models with full authoring capabilities." },
  { icon: Globe2,     title: "Power BI Service", desc: "An online SaaS platform for publishing, sharing, and consuming reports and dashboards across your organization." },
  { icon: Smartphone, title: "Power BI Mobile",  desc: "Native apps for Windows, iOS, and Android — keeping your key metrics accessible anywhere, anytime." },
];

const uaeReasons = [
  { icon: Share2,          title: "Data Connectivity",       desc: "Seamless connectivity to databases, cloud services, and online platforms — your data is always within reach." },
  { icon: LayoutDashboard, title: "Interactive Dashboards",   desc: "Create dynamic dashboards that let you explore data in real-time, drill down into specifics, and see the full picture." },
  { icon: Sparkles,        title: "Data Modeling",            desc: "Transform raw data into meaningful structure. Define relationships and shape data to suit your analytical needs." },
  { icon: BarChart3,       title: "Visualization",            desc: "Turn numbers into insights with compelling charts, graphs, and maps — data that resonates with your audience." },
  { icon: TrendingUp,      title: "Advanced Analytics",       desc: "From predictive analytics to machine learning integration, Power BI goes beyond basic reporting." },
  { icon: ShieldCheck,     title: "Collaboration & Sharing",  desc: "Share interactive reports and dashboards securely within your organization or with external partners in real-time." },
];

const ourServices = [
  {
    num: "01",
    title: "Implementation & Integration",
    desc: "Our experts guide you through seamless Power BI implementation — from data source connection to dashboard customization — ensuring a smooth transition to a data-driven culture.",
  },
  {
    num: "02",
    title: "Customized Dashboards & Reports",
    desc: "We craft bespoke dashboards and reports tailored to your business needs. Whether executive summaries or detailed operational reports, our visualizations align with your organizational goals.",
  },
  {
    num: "03",
    title: "Training & Support",
    desc: "Empower your team with the skills to harness the full potential of Power BI. Our programs cover everything from basic functionalities to advanced analytics, ensuring team-wide proficiency.",
  },
];

const whyChooseUs = [
  { title: "Expert Guidance",    desc: "Seasoned professionals with extensive experience in data analytics and Power BI implementation ensure your deployment aligns with your unique business requirements." },
  { title: "Tailored Solutions", desc: "We understand that every business is unique. Our solutions are tailored to your specific needs, ensuring Power BI becomes an integral part of your data strategy." },
  { title: "Continuous Support", desc: "Our commitment doesn't end at implementation. We offer ongoing support to address queries, provide updates, and ensure your Power BI environment evolves with your business." },
];

const faqItems: FaqItem[] = [
  { question: "What is Power BI?",                                              answer: "Power BI is a business analytics tool developed by Microsoft that enables organizations to visualize and analyze their data, transforming raw information into actionable insights through interactive dashboards and reports." },
  { question: "Why is Power BI important for businesses in the UAE?",          answer: "Power BI is crucial for businesses in the UAE, Dubai, and Gulf Region as it facilitates data-driven decision-making. It allows organizations to consolidate and analyze data from various sources, providing a comprehensive view of key metrics, trends, and opportunities." },
  { question: "What types of data sources does Power BI connect to?",          answer: "Power BI seamlessly connects to a diverse range of data sources, including databases (SQL Server, Oracle, etc.), Excel spreadsheets, cloud services (Azure, AWS), and various online platforms, ensuring flexibility in data integration." },
  { question: "How does Researchers assist in Power BI implementation?",        answer: "Researchers guides businesses through the entire Power BI implementation process, from connecting data sources to customizing dashboards. Our experts ensure a smooth integration that aligns with your specific business requirements." },
  { question: "What services does Researchers offer for Power BI users?",      answer: "Researchers provides a range of Power BI services, including implementation and integration, customization of dashboards and reports, and comprehensive training programs for teams to effectively utilize the tool." },
  { question: "What training programs does Researchers offer for Power BI users?", answer: "Researchers provides comprehensive training programs covering everything from basic functionalities to advanced analytics within Power BI. Our goal is to empower your team with the skills needed to maximize the benefits of the tool." },
  { question: "Is ongoing support provided after Power BI implementation?",    answer: "Yes, Researchers is committed to providing continuous support after Power BI implementation. We address queries, provide updates, and ensure that your Power BI environment evolves with the changing needs of your business." },
  { question: "How can I get started with Researchers for Power BI services?",  answer: "Getting started with Researchers is simple. Contact us today to initiate a conversation about your business needs and how Power BI can transform your data into actionable insights." },
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

export default function MicrosoftPowerBIPageContent() {
  return (
    <main className="bg-white text-slate-900">
      <Script id="microsoft-power-bi-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* ── HERO ── */}
      <section className="border-b border-slate-100 bg-linear-to-br from-amber-50 via-white to-yellow-50 px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Microsoft Power BI
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
            Transform raw data into<br />
            <span className="text-amber-500">meaningful insights.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
            In the era of data-driven decision-making, Power BI empowers businesses to visualize,
            analyze, and share insights seamlessly — enabling decisions that drive real results.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/business-intelligence"
              className="inline-flex items-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-600 transition hover:border-slate-500"
            >
              Back to Services
            </Link>
          </div>

          {/* platform cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {powerBIPlatforms.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-100 bg-amber-50">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT IS POWER BI — editorial split ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/calculator-1024x683.jpg"
                alt="Microsoft Power BI"
                className="h-96 w-full rounded-3xl object-cover lg:h-120"
              />
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:-right-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Platform</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 max-w-45 leading-snug">
                  Cloud-based BI by Microsoft
                </p>
              </div>
            </div>

            {/* text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">What is Power BI?</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                A cloud-based platform that connects, transforms, and visualizes your data
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-500">
                Microsoft Power BI is a cloud-based business intelligence platform tailored to
                connect seamlessly with various data sources. It transforms and models your data,
                creates interactive dashboards and reports, and shares actionable insights across
                your entire organization.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-500">
                By connecting to spreadsheets, databases, or cloud services, Power BI compiles
                diverse datasets into a unified, interactive dashboard — uncovering trends,
                patterns, and opportunities that might otherwise remain hidden.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Informed decision-making", "New opportunities uncovered", "Optimized processes", "Seamless data consolidation"].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" />
                    <span className="text-sm text-slate-600">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UAE MARKET REASONS — 2×3 icon grid ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* heading row with inline stats */}
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">UAE market</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Why UAE businesses embrace Power BI
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                With a GDP of $536B and a population of 10M+, the UAE's thriving, competitive
                marketplace demands swift and effective data management.
              </p>
            </div>
            <div className="flex justify-start gap-10 md:justify-end">
              <div className="text-center">
                <p className="text-4xl font-semibold text-slate-900">$536B</p>
                <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider">UAE GDP</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-semibold text-slate-900">10M+</p>
                <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider">Population</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uaeReasons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-amber-200 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                    <Icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">What we offer</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Our Power BI services in the UAE
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                At Researchers, our tailored Power BI services are designed to unlock the full
                potential of your data and deliver actionable insights that drive strategic
                decision-making.
              </p>
            </div>
            <div className="space-y-4 lg:col-span-8">
              {ourServices.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-amber-200 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xs font-bold text-amber-500">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Why Researchers</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                Your Power BI journey partner in the UAE
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                As a local market research company, we understand the need for Microsoft Power BI
                in the Dubai, UAE, and Gulf Region market. Whether you're a startup or an
                established enterprise, we're your partner in harnessing its power.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Work with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {whyChooseUs.map((r, i) => (
                <div key={r.title} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-xs font-bold text-amber-600">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{r.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 open:border-amber-200 open:bg-amber-50/30"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-open:rotate-45 group-open:border-amber-400 group-open:text-amber-600">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-amber-200 bg-linear-to-br from-amber-50 via-yellow-50 to-white">
          <div className="grid lg:grid-cols-2">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                Are you a UAE business owner?
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Let's transform your data into actionable insights
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Whether you're a startup or an established enterprise, Researchers is your partner
                in harnessing the power of Power BI across Dubai, UAE, and the Gulf Region.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/business-intelligence"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Explore BI Services
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 border-t border-amber-100 px-8 py-10 md:px-12 lg:border-l lg:border-t-0">
              {[
                { label: "Tool",     value: "Microsoft Power BI" },
                { label: "Scope",    value: "Dubai, UAE & Gulf Region" },
                { label: "Services", value: "Implementation, Dashboards & Training" },
                { label: "Support",  value: "Continuous post-implementation support" },
              ].map((item) => (
                <div key={item.label} className="border-b border-amber-100 pb-5 last:border-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">{item.label}</p>
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
