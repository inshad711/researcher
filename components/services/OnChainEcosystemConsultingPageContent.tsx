import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const significancePoints = [
  "1. Innovation and Disruption: By fostering collaboration and innovation, these ecosystems pave the way for groundbreaking solutions that challenge traditional business models.",
  "2. Efficiency and Transparency: Leveraging immutable distributed ledgers, they ensure transparency, traceability, and efficiency in transactions and data management.",
  "3. Value Creation and Sustainability: Through tokenomics and governance structures, these ecosystems drive value creation and sustainable growth, fueling economic ecosystems with novel opportunities.",
];

const influencePoints = [
  "1. Transforming Operations: Redefining how businesses operate by optimizing processes, enhancing security, and reducing operational inefficiencies.",
  "2. Enabling New Business Models: Facilitating the emergence of novel business models that prioritize decentralization, collaboration, and user-centricity.",
  "3. Empowering Innovation: Creating fertile grounds for innovation, fostering experimentation, and enabling the development of cutting-edge solutions.",
];

const consultingServices = [
  "Ecosystem Analysis: Gain a deep understanding of existing or potential on-chain ecosystems. We analyze the dynamics, components, and interactions within these ecosystems to identify opportunities and potential challenges.",
  "Strategic Planning: Develop robust strategies aligned with your business objectives. Our consultants collaborate closely with your team to create tailored roadmaps for leveraging on-chain technologies effectively.",
  "Tokenomics and Governance: Navigate token economics and governance frameworks with confidence. We assist in designing tokenomics models and governance structures that ensure sustainable and efficient ecosystem management.",
  "Partnership and Collaboration Strategies: Identify and forge strategic partnerships within on-chain ecosystems. We provide insights and strategies to foster collaborations that drive growth and innovation.",
];

const whyChooseUsPoints = [
  "Customized Approach: We understand the unique nature of each business. Our consultants craft personalized solutions tailored to your specific ecosystem requirements and goals.",
  "Expertise in Blockchain Ecosystems: Benefit from our in-depth knowledge and expertise in navigating blockchain ecosystems, ensuring you make informed decisions.",
  "Strategic Guidance: Receive comprehensive guidance at every stage, from analysis to implementation, ensuring a seamless and successful journey within on-chain ecosystems.",
  "Proven Results: Rely on our track record of delivering impactful solutions that drive growth and efficiency within blockchain ecosystems.",
];

const faqItems: FaqItem[] = [
  {
    question: "What does an on-chain ecosystem entail?",
    answer:
      "An on-chain ecosystem refers to the interconnected components, networks, and protocols within a blockchain system, encompassing entities, interactions, and data flows.",
  },
  {
    question: "Why is ecosystem analysis crucial for businesses?",
    answer:
      "Market analysis provides insights into consumer behavior, market trends, and competition, aiding in making informed business decisions. It helps identify opportunities, potential risks, and areas for growth within your industry.",
  },
  {
    question: "How can tokenomics benefit on-chain ecosystems?",
    answer:
      "Tokenomics governs the economic incentives and behaviors within a blockchain ecosystem, influencing its sustainability, growth, and value creation.",
  },
  {
    question: "What role does governance play in on-chain ecosystems?",
    answer:
      "Governance frameworks define decision-making processes, rules, and protocols within the ecosystem, ensuring transparency, accountability, and stability.",
  },
  {
    question: "How does Researchers assist in forging partnerships within on-chain ecosystems?",
    answer:
      "We offer strategic insights and guidance to identify suitable partnerships and collaboration opportunities, fostering growth and innovation.",
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

export default function OnChainEcosystemConsultingPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-24 text-slate-900">
      <Script id="on-chain-ecosystem-consulting-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            On-Chain Ecosystem Consulting
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            On-Chain Ecosystem Consulting Services
          </h1>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-5 md:p-7">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/shubham-dhage-pyt6ZAHfmx4-unsplash-1-768x609.png"
              alt="shubham-dhage-1"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              The adoption of blockchain technology has surged, reshaping industries and redefining traditional
              processes in today&apos;s business scene.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              These interconnected networks of blockchain-based entities, protocols, and interactions form the
              foundation for innovation, efficiency, and transparency in modern enterprises.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              However, the complex nature of on-chain ecosystems demands strategic insights and expertise to derive
              maximum value.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              Our consulting services cater to this need, providing businesses with the tools and strategies to thrive
              within these innovative ecosystems.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">The Significance in Today&apos;s Businesses</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">On-Chain ecosystem serves as the bedrock for:</p>
          <div className="mt-5 space-y-3">
            {significancePoints.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700 md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">How On-Chain Ecosystems Influence Business?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            From supply chain management and finance to healthcare and beyond, on-chain ecosystems are reshaping industries by:
          </p>
          <div className="mt-5 space-y-3">
            {influencePoints.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700 md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">On-Chain Ecosystems Consultancy</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              At Researchers, we focus on understanding and optimizing on-chain ecosystems to drive innovation,
              efficiency, and growth for businesses in Dubai, UAE and the Gulf region across diverse industries.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              Our dedicated team of experts is committed to providing strategic guidance and actionable insights to
              navigate the complexities of blockchain ecosystems.
            </p>

            <h3 className="mt-7 text-xl font-semibold md:text-2xl">Our Consulting Services</h3>
            <div className="mt-4 space-y-3">
              {consultingServices.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm leading-7 text-slate-700 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Researchers.me</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Partnering with us for on-chain ecosystem consultation offers several advantages:
            </p>
            <ul className="mt-5 space-y-3">
              {whyChooseUsPoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold md:text-3xl">Optimize Your On-Chain Ecosystem</h3>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Embark on a transformative journey within blockchain ecosystems with Researchers. Maximize the potential
            of on-chain technologies to drive innovation, efficiency, and sustainable growth.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
            Contact us today to explore how our on-chain ecosystem consultancy can elevate your business!
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions (FAQs) on On-Chain Ecosystem
          </h3>
          <div className="mt-5 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
