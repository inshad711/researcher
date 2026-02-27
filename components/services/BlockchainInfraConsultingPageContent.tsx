import Link from "next/link";
import Script from "next/script";
import type { ComponentType } from "react";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Gauge,
  Globe,
  Layers,
  LifeBuoy,
  Lightbulb,
  Lock,
  Network,
  RefreshCw,
  Rocket,
  Settings,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
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

const roleItems: IconItem[] = [
  {
    title: "Enabling Trust and Transparency",
    description:
      "Blockchain infrastructure empowers businesses by providing a decentralized and immutable ledger, fostering trust among participants. Transactions recorded on the blockchain are transparent and tamper-resistant, ensuring integrity and reducing the need for intermediaries.",
    icon: Shield,
  },
  {
    title: "Enhancing Security",
    description:
      "In an era where data security is paramount, blockchain infrastructure offers heightened security measures. Its cryptographic techniques and decentralized nature make data manipulation or unauthorized access exceedingly difficult, bolstering cybersecurity efforts.",
    icon: Lock,
  },
  {
    title: "Optimizing Operations and Efficiency",
    description:
      "Efficient and scalable blockchain infrastructure streamlines operations, minimizing redundancies, and improving transaction speed. Smart contracts automate processes, reducing manual intervention and enhancing overall efficiency.",
    icon: Settings,
  },
  {
    title: "Fostering Innovation",
    description:
      "Blockchain infrastructure serves as a catalyst for innovation, enabling businesses to explore new possibilities. It facilitates the development of decentralized applications (DApps) and tokenized ecosystems, paving the way for novel business models and revenue streams.",
    icon: Lightbulb,
  },
  {
    title: "Cost Savings and Disintermediation",
    description:
      "By eliminating intermediaries and reducing transactional complexities, blockchain infrastructure significantly cuts operational costs. Smart contracts execute predefined actions automatically, reducing overhead and enhancing cost-effectiveness.",
    icon: DollarSign,
  },
  {
    title: "Facilitating Global Transactions",
    description:
      "Blockchain infrastructure transcends geographical barriers, facilitating swift and secure global transactions. Its decentralized nature ensures near-instantaneous transactions, simplifying cross-border payments and trade.",
    icon: Globe,
  },
  {
    title: "Adapting to Evolving Markets",
    description:
      "Businesses leveraging robust blockchain infrastructure are well-equipped to adapt to evolving market demands. Its flexibility and scalability enable enterprises to swiftly respond to changing market dynamics and emerging opportunities.",
    icon: RefreshCw,
  },
  {
    title: "Future-proofing Businesses",
    description:
      "Investing in advanced blockchain infrastructure future-proofs businesses by embracing transformative technology. It positions enterprises at the forefront of innovation, ensuring relevance and competitiveness in dynamic market landscapes.",
    icon: Rocket,
  },
];

const approachItems: IconItem[] = [
  {
    title: "Infrastructure Design and Planning",
    description:
      "Our experts collaborate with you to design and plan scalable and secure blockchain infrastructure tailored to your specific needs and goals.",
    icon: Layers,
  },
  {
    title: "Network Architecture and Deployment",
    description:
      "From selecting the right consensus mechanism to deployment strategies, we ensure the optimal setup of blockchain networks for your business requirements.",
    icon: Network,
  },
  {
    title: "Performance Optimization",
    description:
      "We fine-tune and optimize blockchain infrastructure to enhance performance, scalability, and efficiency, ensuring seamless operations.",
    icon: Gauge,
  },
  {
    title: "Security and Compliance",
    description:
      "Mitigate risks and ensure compliance with robust security measures and regulatory frameworks designed for blockchain infrastructure.",
    icon: ShieldCheck,
  },
];

const whyUsItems: IconItem[] = [
  {
    title: "Tailored Solutions",
    description:
      "We understand the uniqueness of each business. Our consultants craft customized solutions aligned with your infrastructure requirements and objectives.",
    icon: SlidersHorizontal,
  },
  {
    title: "Expert Guidance",
    description:
      "Benefit from our team's expertise in designing and implementing blockchain infrastructure, ensuring best practices and efficient deployment.",
    icon: TrendingUp,
  },
  {
    title: "Robust Security Measures",
    description:
      "Our focus on security ensures that your blockchain infrastructure is fortified against vulnerabilities, safeguarding your data and transactions.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Support",
    description:
      "From planning to deployment and ongoing maintenance, our team provides continuous support to ensure your blockchain infrastructure runs smoothly.",
    icon: LifeBuoy,
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is blockchain infrastructure?",
    answer:
      "Blockchain infrastructure comprises the underlying technological architecture, including nodes, consensus mechanisms, network protocols, and storage systems, essential for blockchain operations.",
  },
  {
    question: "Why is infrastructure design crucial in blockchain implementation?",
    answer:
      "A well-designed infrastructure is vital for scalability, security, and performance, laying the foundation for successful blockchain applications.",
  },
  {
    question: "How does Researchers.me optimize blockchain performance?",
    answer:
      "We employ optimization techniques, such as network upgrades, code optimizations, and resource allocation, to enhance blockchain performance.",
  },
  {
    question: "What security measures are implemented in blockchain infrastructure?",
    answer:
      "We implement encryption, access controls, multi-factor authentication, and auditing mechanisms to ensure robust security in blockchain infrastructure.",
  },
  {
    question: "Do you assist in regulatory compliance for blockchain infrastructure?",
    answer:
      "Yes, we guide businesses in adhering to regulatory requirements specific to blockchain, ensuring compliance and minimizing legal risks.",
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

export default function BlockchainInfraConsultingPageContent() {
  return (
    <main className="pt-32 pb-20 text-slate-900">
      <Script
        id="blockchain-infra-consulting-faq-schema"
        type="application/ld+json"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Image */}
            <div className="relative lg:col-span-5">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-rdne-stock-project-8-768x639.png"
                alt="Blockchain Infrastructure Consulting"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/20 lg:bg-gradient-to-l" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-6 py-10 lg:col-span-7 md:px-10 md:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Blockchain
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Blockchain Infrastructure Consulting
              </h1>
              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                Blockchain infrastructure stands as the cornerstone of modern business innovation,
                transforming the way enterprises operate and transact in the digital landscape.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                As a marketing research firm, we thoroughly assess existing IT infrastructure to
                evaluate its readiness for blockchain implementation. We analyze network scalability,
                data privacy, consensus protocols, and interoperability to design a robust and
                efficient blockchain network architecture.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  Network scalability &amp; architecture
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  Consensus protocol design
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  Security &amp; compliance frameworks
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  Performance optimization
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
                  href="/services/technology/blockchain"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Back to Blockchain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Blockchain Infrastructure */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              The Role of Blockchain Infrastructure in Business
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
              Blockchain Infrastructure forms the backbone of decentralized systems, comprising
              networks, protocols, and technologies that support the functioning of blockchain
              ecosystems. It&apos;s crucial for enabling secure and efficient transactions within
              these ecosystems.
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">
              At Researchers, we recognize the crucial role that robust blockchain infrastructure
              plays in reshaping businesses, driving efficiency, security, and transparency.
            </p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {roleItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                    <Icon className="h-4 w-4 text-slate-700" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blockchain Infrastructure Consultancy + Our Approach */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          {/* Consultancy overview */}
          <article className="rounded-2xl border border-slate-100 bg-slate-50 p-6 lg:col-span-4 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              Blockchain Infrastructure Consultancy
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              At Researchers, we focus on architecting, optimizing, and implementing blockchain
              infrastructure that forms the backbone of secure and efficient decentralized systems.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We&apos;re committed to delivering strategic guidance and practical solutions to
              enhance your blockchain infrastructure.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>End-to-end infrastructure design</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Decentralized systems architecture</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Regulatory &amp; compliance guidance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span>Ongoing optimization &amp; support</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Our Approach */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-8 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Our Approach</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We follow a structured methodology to design, deploy, and optimize your blockchain
              infrastructure for maximum performance and security.
            </p>
            <div className="mt-5 space-y-3">
              {approachItems.map((item, index) => {
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
                        <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why Choose Researchers.me
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Partnering with us for Blockchain Infrastructure Consulting offers numerous advantages
            designed to set your business up for long-term decentralized success.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {whyUsItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                    <Icon className="h-4 w-4 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Common questions about our Blockchain Infrastructure Consulting services.
          </p>
          <div className="mt-5 space-y-3">
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
                Empower Your Business
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-4xl">
                Empower your business with blockchain infrastructure
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                Maximize the potential of blockchain technology for your business with Researchers.
                Simplify complex infrastructure and leverage the benefits of decentralization,
                security, and efficiency.
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
                  href="/services/technology/blockchain"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Blockchain Services
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Scope
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Design, deploy &amp; optimize — end-to-end
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
