import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What exactly is asset tokenization?",
    answer:
      "Asset tokenization is the process of converting rights to an asset into digital tokens on a blockchain. These tokens represent ownership of the underlying asset, allowing fractional ownership and trade on digital platforms.",
  },
  {
    question: "How does asset tokenization benefit investors?",
    answer:
      "Asset tokenization offers several advantages to investors. It provides enhanced accessibility to traditionally high-value assets, increases liquidity by enabling easier buying and selling, ensures transparency and security through blockchain technology, and allows for diversification of investment portfolios across various asset classes.",
  },
  {
    question: "Are there risks associated with asset tokenization?",
    answer:
      "As with any investment, there are inherent risks. The regulatory landscape, market volatility, and technological vulnerabilities can pose risks in the asset tokenization space. However, proper due diligence, compliance with regulations, and security measures can help mitigate these risks.",
  },
  {
    question: "What types of assets can be tokenized?",
    answer:
      "Virtually any asset with value can be tokenized, including real estate, art, commodities, stocks, and more. At Researchers, we specialize in developing tokenization strategies for various asset classes, catering to the diverse investment needs of our clients.",
  },
  {
    question: "Can asset tokenization be reversed?",
    answer:
      "Once an asset is tokenized, the process is generally irreversible. However, tokenization platforms may offer flexibility in terms of trading or selling the tokens, providing liquidity to investors.",
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

const whyChooseItems = [
  {
    title: "Local Expertise",
    description:
      "Understanding the complexity of the UAE market, our tailored solutions align with regional regulations and market demands.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Leveraging advanced blockchain and security protocols, ensuring a secure and seamless tokenization process.",
  },
  {
    title: "Customized Approach",
    description:
      "Tailored strategies for different asset classes, ensuring optimal tokenization structures for maximum value.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Assuring adherence to local regulations and compliance standards, ensuring a trustworthy investment environment.",
  },
  {
    title: "Comprehensive Support",
    description:
      "Beyond tokenization, our services encompass ongoing management, monitoring, and support for asset-backed tokens.",
  },
];

const impactAreas = [
  {
    title: "Enhanced Accessibility",
    description:
      "Fractional ownership lowers entry barriers, making high-value assets open to a wider pool of investors.",
  },
  {
    title: "Improved Liquidity",
    description:
      "Digital tokens can be traded more efficiently than traditional asset transfers, unlocking previously illiquid value.",
  },
  {
    title: "Transparency and Security",
    description:
      "Blockchain records provide clear transaction history, while smart contracts improve execution trust and consistency.",
  },
  {
    title: "Diversification Opportunities",
    description:
      "Investors can distribute exposure across real estate, commodities, and alternative assets with better flexibility.",
  },
  {
    title: "Efficiency in Transactions",
    description:
      "Reduced intermediaries and streamlined flows cut delays and lower operational complexity.",
  },
  {
    title: "Modern Market Adaptation",
    description:
      "Tokenization aligns traditional asset structures with digital-first investor behavior and global market velocity.",
  },
];

export default function AssetTokenizationPageContent() {
  return (
    <main className="bg-stone-100 pb-20 pt-28 text-slate-900 md:pt-32">
      <Script id="asset-tokenization-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="templateContainer">
        <div className="grid gap-8 rounded-[2rem] border border-slate-300 bg-stone-200/60 p-6 md:grid-cols-2 md:p-10">
          <div className="order-2 md:order-1">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-alesia-kozik-6778651-modified.jpg"
              alt="Asset Tokenization"
              className="h-full min-h-72 w-full rounded-[1.5rem] border border-slate-300 object-cover"
            />
          </div>

          <div className="order-1 flex flex-col justify-center md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Blockchain Services</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">Asset Tokenization</h1>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                Welcome to the future of investment opportunities - where traditional assets meet the digital age.
              </p>
              <p>
                Asset tokenization revolutionizes the investment sector by transforming real estate, art, commodities,
                and more into digital tokens.
              </p>
              <p>
                These tokens represent fractional ownership, enabling broader accessibility to high-value assets
                previously beyond reach.
              </p>
              <p>
                As a leading market research firm, our strategy is foolproof. We analyze the market demand, liquidity,
                and tokenization feasibility to determine the viability of every asset tokenization project.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-slate-800"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/technology/blockchain"
                className="inline-flex items-center rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-600"
              >
                Blockchain Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="templateContainer !pt-2">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Framework</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">What Is Asset Tokenization?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Traditional assets such as real estate, art, and commodities can be represented as digital units on
              blockchain networks. This enables fractional ownership, broader participation, and streamlined transfer.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Asset tokenization reshapes ownership and investment with better liquidity, stronger transparency, and
              faster operational movement.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
            {impactAreas.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-300 bg-stone-200/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{`0${index + 1}`}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="templateContainer !pt-2">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="rounded-[2rem] border border-slate-300 bg-stone-200/40 p-6 lg:col-span-7 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Why Choose Researchers.me for Asset Tokenization on Blockchain?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Allow us to take charge and simplify the process. Let the experts help you recognize assets with the
              potential for tokenization.
            </p>

            <ol className="mt-8 space-y-5 border-l border-slate-300 pl-5">
              {whyChooseItems.map((item, index) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-slate-900 md:text-base">{`${index + 1}. ${item.title}`}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-[2rem] border border-slate-300 bg-stone-200/50 p-6 text-slate-900 lg:col-span-5 md:p-10">
            <h3 className="text-xl font-semibold md:text-2xl">Empower Your Investment Future with Asset Tokenization</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Embark on a journey to redefine asset ownership and investment in the UAE, Dubai, and the Gulf region.
              At Researchers, we offer a gateway to a new era of financial opportunities through innovative asset
              tokenization solutions.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Asset-backed token strategy and feasibility planning</span>
              </div>
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Regulation-aware market analysis for UAE and Gulf region</span>
              </div>
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>End-to-end support from launch to ongoing monitoring</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-400 bg-stone-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-stone-200"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="templateContainer !pt-2">
        <div className="rounded-[2rem] border border-slate-300 bg-stone-200/40 p-6 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions (FAQs) on Asset Tokenization on Blockchain
          </h2>

          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-300 bg-stone-200/30 p-5">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
