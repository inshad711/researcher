import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is Blockchain, and how does it work?",
    answer:
      "Blockchain is a decentralized ledger that records transactions across multiple computers, making data transparent, secure, and resistant to tampering.",
  },
  {
    question: "Which industries can benefit from Blockchain technology?",
    answer:
      "Finance, healthcare, supply chain, real estate, and many other industries can benefit from improved trust, transparency, and operational efficiency.",
  },
  {
    question: "What are the advantages of using Blockchain?",
    answer:
      "Key advantages include transparency, immutability, stronger security, reduced reliance on intermediaries, and better process automation.",
  },
  {
    question: "Is Blockchain development expensive?",
    answer:
      "Cost depends on project scope and complexity. We design phased, goal-driven solutions to keep implementation cost-effective.",
  },
  {
    question: "How long does it take to implement a Blockchain solution?",
    answer:
      "Timelines vary by requirements and integration depth. Typical projects move from discovery to deployment in phased milestones.",
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

const offerings = [
  {
    title: "Blockchain Development",
    description:
      "From conceptualization to implementation, we offer end-to-end Blockchain development services. Whether you are exploring private or public Blockchains, our expertise ensures a seamless development process.",
  },
  {
    title: "Smart Contract Development",
    description:
      "Automate and secure your agreements with smart contracts. Our experts design and deploy tailor-made smart contracts that enhance transparency and trust in your business transactions.",
  },
  {
    title: "Decentralized Applications (DApps)",
    description:
      "Embrace the future of applications with our DApp development services. We create decentralized, user-centric applications that leverage Blockchain's potential for enhanced security and user control.",
  },
  {
    title: "Blockchain Consulting",
    description:
      "Navigate the complexities of Blockchain adoption with confidence. Our experienced consultants provide strategic guidance and advisory services to help you harness Blockchain's full potential.",
  },
];

const whyChoose = [
  {
    title: "Customized Solutions",
    description:
      "Our team works closely with you to understand your unique business requirements, delivering tailored Blockchain solutions that align perfectly with your objectives.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Stay ahead of the curve with our use of the latest Blockchain advancements and protocols, ensuring you benefit from state-of-the-art solutions.",
  },
  {
    title: "Reliable Support",
    description:
      "From initial consultation to implementation and beyond, our team offers continuous support and maintenance to ensure a seamless experience.",
  },
  {
    title: "Proven Expertise",
    description:
      "Benefit from our extensive experience in deploying successful Blockchain solutions across diverse industries, driving innovation and efficiency.",
  },
];

export default function BlockchainPageContent() {
  return (
    <main className="bg-slate-50 pb-16 pt-36 text-slate-900">
      <Script id="blockchain-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="templateContainer">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              shubham-dhage
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Blockchain Solutions</h1>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Blockchain technology has emerged as a disruptive force, revolutionizing the way businesses operate and secure their digital transactions. Its decentralized and transparent nature offers a myriad of opportunities across various industries, transforming traditional processes and enhancing security, efficiency, and trust.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              As a market research company equipped with the latest industry trends, we offer you the opportunity to tap into the power of this transformative technology. This is accessible through our comprehensive suite of Blockchain services tailored to meet the diverse needs of modern enterprises.
            </p>
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
                className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
              >
                Back to Technology Services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/shubham-dhage-IxXMnE7PjAQ-unsplash-1024x801.png"
              alt="shubham-dhage"
              className="h-full max-h-[430px] w-full rounded-2xl border border-slate-200 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="templateContainer">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">The Foundation of Trust and Security</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            At its core, blockchain is a decentralized ledger system that records transactions across multiple computers in a secure and transparent manner.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            Its immutability and cryptographic security ensure that once information is recorded, it cannot be altered or tampered with, establishing a foundation of trust in digital interactions.
          </p>
        </article>
      </section>

      <section className="templateContainer">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Transforming Industries</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            The impact of blockchain spans industries, from finance and healthcare to supply chain management and beyond.
          </p>
          <div className="mt-5 space-y-3">
            <p className="rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base">
              In finance, blockchain facilitates secure and transparent transactions, reducing the need for intermediaries.
            </p>
            <p className="rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base">
              In healthcare, blockchain ensures the integrity of patient records, improving data security and interoperability.
            </p>
            <p className="rounded-xl border border-slate-300 bg-slate-50 p-4 text-sm leading-7 text-slate-700 md:text-base">
              Moreover, in supply chain management, blockchain enhances transparency and traceability, combating issues like counterfeit products and ensuring ethical sourcing.
            </p>
          </div>
        </article>
      </section>

      <section className="templateContainer">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 lg:col-span-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Smart Contracts and Automation</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Blockchain enables the creation and execution of smart contracts, self-executing agreements with predefined rules.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              These contracts automate processes, trigger actions, and ensure transparency and compliance without the need for intermediaries.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              This not only reduces operational costs but also minimizes the potential for errors and disputes.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 lg:col-span-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">Tokenization and Digital Assets</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              The concept of tokenization leverages blockchain to represent real-world assets digitally.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              This allows for fractional ownership, increased liquidity, and greater accessibility to assets like real estate, art, or even company shares.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              Additionally, it opens up new avenues for fundraising through Initial Coin Offerings (ICOs) or Security Token Offerings (STOs).
            </p>
          </article>
        </div>
      </section>

      <section className="templateContainer">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Our Blockchain Solution Services</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, we specialize in leveraging Blockchain technology to drive transparency, security, and efficiency across various industries.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            Our team of experts is dedicated to delivering innovative Blockchain solutions that empower businesses to thrive in today's dynamic landscape.
          </p>

          <h3 className="mt-8 text-xl font-semibold md:text-2xl">What We Offer</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">Our Blockchain services include:</p>
          <div className="mt-5 space-y-3">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-300 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700 md:text-base">
                  <span className="font-semibold text-slate-900">{item.title}:</span> {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="templateContainer">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Researchers.me</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We understand that embracing Blockchain can be challenging. Here's why partnering with us makes a difference:
          </p>

          <ul className="mt-5 space-y-3">
            {whyChoose.map((item) => (
              <li key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-300 bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <p className="text-sm leading-7 text-slate-700 md:text-base">
                  <span className="font-semibold text-slate-900">{item.title}:</span> {item.description}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="templateContainer">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 md:px-10 md:py-14">
          <h2 className="text-2xl font-semibold text-white md:text-4xl">Empower Your Business with Blockchain</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            Unlock the transformative power of Blockchain for your business in the Dubai, Abu Dhabi, Sharjah, UAE and the Gulf region.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            Join hands with Researchers to experience enhanced security, transparency, and efficiency in your operations.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            Contact us today to explore how Blockchain can reshape your business landscape!
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="templateContainer">
        <article className="rounded-2xl border border-slate-200 bg-slate-100 p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions (FAQs) on Blockchain Solutions
          </h2>
          <div className="mt-5 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-300 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
