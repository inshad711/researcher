import Link from "next/link";
import Script from "next/script";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

type FaqItem = { question: string; answer: string };

const faqItems: FaqItem[] = [
  {
    question: "What is Blockchain, and how does it work?",
    answer:
      "Blockchain is a decentralized, distributed ledger technology that records transactions across a network of computers. It ensures transparency, security, and immutability of data.",
  },
  {
    question: "Which industries can benefit from Blockchain technology?",
    answer:
      "Industries such as finance, supply chain, healthcare, real estate, and more can benefit from Blockchain's capabilities in enhancing transparency and security.",
  },
  {
    question: "What are the advantages of using Blockchain?",
    answer:
      "Blockchain offers transparency, immutability, enhanced security, reduced costs, increased efficiency, and the potential to eliminate intermediaries in transactions.",
  },
  {
    question: "Is Blockchain development expensive?",
    answer:
      "Our tailored approach ensures cost-effective solutions designed to deliver maximum ROI for your Blockchain initiatives.",
  },
  {
    question: "How long does it take to implement a Blockchain solution?",
    answer:
      "Implementation timelines vary based on project complexity. We focus on efficient deployment without compromising quality.",
  },
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

export default function BlockchainPageContent() {
  return (
    <main className="bg-white text-slate-900 antialiased">
      <Script id="blockchain-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] pt-28 pb-0 flex flex-col">
        {/* Top bar */}
        <div className="px-6 md:px-12">
          <div className="mx-auto max-w-7xl flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Technology · Blockchain
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 hover:text-slate-900 transition"
            >
              Get in Touch <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Main hero grid */}
        <div className="flex-1 px-6 md:px-12">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-0 h-full">
            {/* Left */}
            <div className="flex flex-col justify-between py-12 pr-0 lg:pr-16 border-r-0 lg:border-r border-slate-100">
              <div>
                <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl lg:text-[5.5rem]">
                  Block<br />chain<br />
                  <span className="text-slate-300">Solutions</span>
                </h1>
                <p className="mt-8 max-w-lg text-sm leading-8 text-slate-500 md:text-base">
                  A disruptive force revolutionizing the way businesses operate and secure digital
                  transactions. Decentralized, transparent, and built for modern enterprises in
                  UAE and the wider Gulf region.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-6">
                {/* Capability tags */}
                <div className="flex flex-wrap gap-2">
                  {["Smart Contracts", "DApps", "Tokenization", "Blockchain Consulting", "Secure Ledger"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition"
                  >
                    Start Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/technology"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 transition"
                  >
                    Technology Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block relative pl-12 py-8">
              <div className="h-full w-full overflow-hidden rounded-3xl">
                <img
                  src="https://www.researchers.me/wp-content/uploads/2023/06/shubham-dhage-IxXMnE7PjAQ-unsplash-1024x801.png"
                  alt="Blockchain"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK INTRO BAND ───────────────────────────────────────────── */}
      <section className="bg-slate-900 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-px bg-slate-700 overflow-hidden rounded-2xl">
          {[
            {
              label: "Decentralized Ledger",
              body: "Records transactions across multiple computers in a secure and transparent manner — immutable by design.",
            },
            {
              label: "Cryptographic Security",
              body: "Once information is recorded, it cannot be altered or tampered with, establishing a foundation of trust in digital interactions.",
            },
            {
              label: "Cross-Industry Impact",
              body: "From finance and healthcare to supply chain management, blockchain transforms traditional processes at every level.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-slate-900 px-7 py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE CONCEPTS ─────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                How It Works
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Core Blockchain Concepts</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Three principles that make blockchain uniquely powerful for enterprise applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Trust & Security",
                body: "At its core, blockchain is a decentralized ledger system that records transactions across multiple computers. Its immutability and cryptographic security ensure data cannot be altered or tampered with.",
              },
              {
                num: "02",
                title: "Smart Contracts & Automation",
                body: "Self-executing agreements with predefined rules that automate processes, trigger actions, and ensure transparency and compliance — without intermediaries, reducing costs and minimizing disputes.",
              },
              {
                num: "03",
                title: "Tokenization & Digital Assets",
                body: "Represents real-world assets digitally, enabling fractional ownership, increased liquidity, and accessibility to assets like real estate, art, or company shares. Opens new avenues for ICOs and STOs.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:border-slate-300 hover:bg-white transition"
              >
                <span className="absolute right-5 top-4 text-7xl font-bold text-slate-100 select-none leading-none">
                  {item.num}
                </span>
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {item.num}
                </p>
                <h3 className="relative mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Impact
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Transforming Industries</h2>

          <div className="mt-10 space-y-0">
            {[
              {
                index: "01",
                label: "Finance",
                body: "Blockchain facilitates secure and transparent transactions, reducing the need for intermediaries and lowering operational costs across financial institutions.",
              },
              {
                index: "02",
                label: "Healthcare",
                body: "Blockchain ensures the integrity of patient records, improving data security and interoperability across healthcare systems and providers.",
              },
              {
                index: "03",
                label: "Supply Chain",
                body: "Enhanced transparency and traceability combat counterfeit products and ensure ethical sourcing from raw material through to end consumer.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className={`grid grid-cols-12 gap-6 py-7 ${i < arr.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <span className="col-span-1 text-xs font-semibold text-slate-300 pt-0.5">
                  {item.index}
                </span>
                <h3 className="col-span-3 text-base font-semibold text-slate-900">{item.label}</h3>
                <p className="col-span-8 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO ────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Our Blockchain Solution Services</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
            At Researchers, we specialize in leveraging Blockchain technology to drive transparency,
            security, and efficiency across various industries.
          </p>

          {/* Bento grid */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {/* Card 1 — wide */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">01</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Blockchain Development</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                From conceptualization to implementation, we offer end-to-end Blockchain development
                services. Whether you are exploring private or public Blockchains, our expertise
                ensures a seamless development process.
              </p>
            </div>

            {/* Card 2 — narrow */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">02</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Smart Contract Development</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Automate and secure your agreements with tailor-made smart contracts that enhance
                transparency and trust in your business transactions.
              </p>
            </div>

            {/* Card 3 — narrow */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">03</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Decentralized Applications</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Decentralized, user-centric DApps that leverage Blockchain's potential for enhanced
                security and user control in the applications your customers rely on.
              </p>
            </div>

            {/* Card 4 — wide, dark */}
            <div className="rounded-2xl bg-slate-900 p-8 lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">04</span>
              <h3 className="mt-4 text-xl font-semibold text-white">Blockchain Consulting</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Navigate the complexities of Blockchain adoption with confidence. Our experienced
                consultants provide strategic guidance and advisory services to help you harness
                Blockchain's full potential across your organization.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
              >
                Talk to a Consultant <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Why Researchers.me
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
              Why Choose<br />Researchers.me
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              We understand that embracing Blockchain can be challenging. Here's why partnering
              with us makes a difference in Dubai, UAE, and across the Gulf region.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden">
              {[
                { k: "Region", v: "Dubai · Abu Dhabi · Sharjah · UAE · Gulf" },
                { k: "Scope", v: "Development · Smart Contracts · DApps · Consulting" },
                { k: "Industries", v: "Finance · Healthcare · Supply Chain · Real Estate" },
              ].map((row, i, arr) => (
                <div
                  key={row.k}
                  className={`flex items-center gap-6 px-6 py-4 ${i < arr.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <span className="w-20 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {row.k}
                  </span>
                  <span className="text-sm text-slate-700">{row.v}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center">
            {[
              {
                title: "Customized Solutions",
                body: "Our team works closely with you to understand your unique business requirements, delivering tailored Blockchain solutions that align with your objectives.",
              },
              {
                title: "Cutting-Edge Technology",
                body: "Stay ahead with our use of the latest Blockchain advancements and protocols, ensuring you benefit from state-of-the-art solutions.",
              },
              {
                title: "Reliable Support",
                body: "From initial consultation to implementation and beyond, our team offers continuous support and maintenance for a seamless experience.",
              },
              {
                title: "Proven Expertise",
                body: "Benefit from our extensive experience in deploying successful Blockchain solutions across diverse industries.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className={`flex gap-4 py-6 ${i < arr.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900">
                  <Check className="h-3 w-3 text-white" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                FAQs
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Common questions about our Blockchain solutions and implementation process.
              </p>
            </div>

            <div className="lg:col-span-8">
              {faqItems.map((faq, i) => (
                <details
                  key={faq.question}
                  className={`group border-b border-slate-200 py-5 ${i === 0 ? "border-t" : ""}`}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-sm font-semibold text-slate-900 md:text-[15px]">
                    <span>{faq.question}</span>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-400 text-sm leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-500 pr-10">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 md:px-16">
            {/* subtle grid texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ready To Transform
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Empower Your Business<br />with Blockchain
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-8 text-slate-400">
                  Unlock the transformative power of Blockchain for your business in Dubai, Abu Dhabi,
                  Sharjah, UAE and the Gulf region. Join hands with Researchers to experience
                  enhanced security, transparency, and efficiency in your operations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
                  >
                    Contact Us Today <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/technology"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition"
                  >
                    All Technology Services <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Development", desc: "End-to-end build" },
                  { label: "Smart Contracts", desc: "Automated execution" },
                  { label: "DApps", desc: "User-centric apps" },
                  { label: "Consulting", desc: "Strategic guidance" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-xs font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
