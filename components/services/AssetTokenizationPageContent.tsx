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

export default function AssetTokenizationPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-28 text-slate-900 md:pt-32">
      <Script id="asset-tokenization-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="order-2 md:order-1">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-alesia-kozik-6778651-modified.jpg"
              alt="Asset Tokenization"
              className="h-full min-h-72 w-full rounded-2xl object-cover"
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
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/technology/blockchain"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
              >
                Blockchain Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">What is Asset Tokenization?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Imagine traditional assets like real estate, art, or commodities transformed into digital tokens, enabling
            fractional ownership and trade on a blockchain-powered platform. Asset tokenization divides these assets
            into smaller, more accessible units, opening doors to a wider pool of investors.
          </p>

          <h3 className="mt-8 text-xl font-semibold md:text-2xl">Why Asset Tokenization Matters</h3>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Asset tokenization transforms the scope of asset ownership and investment, ushering in an era of increased
            accessibility, liquidity, transparency, and efficiency in the financial markets.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-base font-semibold">Enhanced Accessibility:</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Traditional investment opportunities often pose high barriers to entry, especially for high-value
                assets like real estate or fine art.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Asset tokenization democratizes access by allowing fractional ownership. Individuals can now invest in
                small portions of these valuable assets, opening doors for a more diverse range of investors.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                This newfound accessibility enables a broader participation in lucrative markets that were previously
                exclusive.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-base font-semibold">Improved Liquidity:</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                One of the key advantages of asset tokenization is the enhanced liquidity it brings to traditionally
                illiquid assets.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                By representing ownership through digital tokens, assets that once faced lengthy selling processes can
                now be traded swiftly on digital platforms.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                This flexibility fosters a more dynamic market where buying, selling, and trading occur seamlessly,
                unlocking value that was previously tied up for extended periods.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-base font-semibold">Transparency and Security:</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                <Link href="https://www.researchers.me/blockchain-2/" className="font-semibold underline">
                  Blockchain technology
                </Link>
                , the backbone of asset tokenization, offers an immutable and transparent ledger. Every transaction is
                securely recorded, creating an indisputable trail.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                This clarity minimizes fraud risks and provides a level of traceability that instills trust among
                investors.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Additionally, smart contracts embedded in the blockchain automate and enforce agreements, ensuring
                security and efficiency in transactions.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-base font-semibold">Diversification Opportunities:</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Asset tokenization broadens investment portfolios by allowing access to diverse asset classes.
                Investors can now spread their risk across various industries and geographical locations.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                This variation not only mitigates risk but also allows for a more balanced and resilient investment
                strategy.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-base font-semibold">Efficiency in Transactions:</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                By eliminating intermediaries and streamlining processes, asset tokenization reduces transactional
                complexities.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Digital tokens enable quicker settlements and significantly cut operational costs. This effectiveness is
                especially beneficial for investors and asset owners, as it maximizes returns by minimizing unnecessary
                expenses.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h4 className="text-base font-semibold">Adaptation to Modern Markets:</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                The evolution of asset tokenization aligns with the digital age. In a world where digitization is
                prevalent, adapting traditional assets into digital tokens signifies a proactive step toward
                modernization.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                It not only caters to the preferences of tech-savvy investors but also sets the stage for a more
                inclusive and agile financial ecosystem.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Researchers.me for Asset Tokenization on Blockchain?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Allow us to take charge and simplify the process. Let the experts help you recognize assets with the
              potential for tokenization.
            </p>

            <ol className="mt-6 space-y-4">
              {whyChooseItems.map((item, index) => (
                <li key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900 md:text-base">
                    {index + 1}. {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white lg:col-span-5 md:p-10">
            <h3 className="text-xl font-semibold md:text-2xl">Empower Your Investment Future with Asset Tokenization</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Embark on a journey to redefine asset ownership and investment in the UAE, Dubai, and the Gulf region.
              At Researchers, we offer a gateway to a new era of financial opportunities through innovative asset
              tokenization solutions.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Asset-backed token strategy and feasibility planning</span>
              </div>
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Regulation-aware market analysis for UAE and Gulf region</span>
              </div>
              <div className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>End-to-end support from launch to ongoing monitoring</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="mt-12 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions (FAQs) on Asset Tokenization on Blockchain
          </h2>

          <div className="mt-6 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
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
