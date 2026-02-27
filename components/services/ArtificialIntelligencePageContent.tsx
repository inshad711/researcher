import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const impactSections = [
  {
    title: "AI Revolution in Modern Businesses",
    description:
      "AI has transcended its role as a futuristic concept and has become an integral part of modern business strategies. Its ability to analyze vast amounts of data, recognize patterns, and make data-driven predictions has transformed industries.",
  },
  {
    title: "Enhancing Decision-Making",
    description:
      "One of AI's pivotal roles lies in augmenting decision-making processes. By leveraging advanced algorithms and machine learning models, businesses can extract meaningful insights from complex datasets. These insights, in turn, facilitate informed and strategic decision-making, leading to improved outcomes and mitigated risks.",
  },
  {
    title: "Optimizing Operations and Efficiency",
    description:
      "AI-powered automation streamlines workflows by handling repetitive tasks, allowing businesses to optimize their operations and allocate human resources to more complex and creative endeavors. This increased efficiency not only reduces costs but also enhances overall productivity.",
  },
  {
    title: "Personalizing Customer Experiences",
    description:
      "AI enables businesses to deliver personalized customer experiences at scale. Through predictive analytics and AI-driven customer support systems like chatbots, companies can tailor their services to individual preferences, boosting customer satisfaction and loyalty.",
  },
  {
    title: "Driving Innovation and Competitiveness",
    description:
      "Businesses utilizing AI gain a competitive edge by fostering innovation. Machine learning algorithms help in identifying market trends, predicting consumer behavior, and developing innovative products and services that meet evolving market demands.",
  },
  {
    title: "AI's Adaptability Across Industries",
    description:
      "From healthcare and finance to retail and manufacturing, AI's adaptability spans across various industries. Its applications range from predictive maintenance in manufacturing to personalized medicine in healthcare and algorithmic trading in finance.",
  },
];

const aiServices = [
  {
    title: "AI-Powered Data Analytics:",
    description:
      "Uncover valuable insights from your data with our advanced AI-driven analytics solutions. From predictive analytics to data visualization, we transform raw data into actionable intelligence.",
  },
  {
    title: "Intelligent Automation:",
    description:
      "Streamline your workflows and boost productivity with our intelligent automation solutions. Automate repetitive tasks, optimize processes, and free up your team to focus on high-value initiatives.",
  },
  {
    title: "AI-Powered Customer Support:",
    description:
      "Enhance customer experience with our AI-driven support systems. Utilize chatbots and AI assistants to provide round-the-clock assistance, improving customer satisfaction and engagement.",
  },
  {
    title: "Machine Learning Solutions:",
    description:
      "Leverage the potential of machine learning for predictive modeling, pattern recognition, and decision-making. Our tailored ML solutions help you make data-driven decisions with precision.",
  },
];

const chooseUsPoints = [
  {
    title: "Tailored Solutions:",
    description:
      "Our AI experts work closely with you to understand your unique business needs, crafting customized AI solutions that align perfectly with your goals.",
  },
  {
    title: "Cutting-Edge Technology:",
    description:
      "Stay at the forefront of innovation with our use of the latest AI technologies, ensuring you benefit from state-of-the-art solutions.",
  },
  {
    title: "Reliable Support:",
    description:
      "We're with you every step of the way. From implementation to ongoing support and maintenance, our team ensures a seamless experience.",
  },
  {
    title: "Proven Track Record:",
    description:
      "Count on us. Our track record speaks volumes, with successful AI implementations that have transformed businesses across diverse industries.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How can AI benefit my business?",
    answer:
      "AI can enhance efficiency, improve decision-making, personalize customer experiences, and drive innovation across various business functions.",
  },
  {
    question: "What industries can benefit from AI solutions?",
    answer:
      "From healthcare and finance to retail and manufacturing, virtually every industry can leverage AI to streamline operations and gain a competitive edge.",
  },
  {
    question: "How does AI-driven analytics differ from traditional analytics?",
    answer:
      "AI-driven analytics goes beyond traditional methods by utilizing machine learning algorithms to uncover deeper insights from complex and unstructured data.",
  },
  {
    question: "Are AI solutions expensive to implement?",
    answer: "Our tailored approach ensures cost-effective AI solutions designed to deliver maximum ROI for your business.",
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer:
      "The implementation timeline varies based on the complexity of the solution. We work efficiently to ensure timely deployment without compromising quality.",
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

export default function ArtificialIntelligencePageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-24 text-slate-900">
      <Script id="artificial-intelligence-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-12 md:p-10">
          <div className="order-2 md:order-1 md:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/jj-ying-8bghKxNU1j0-unsplash-1-768x576.png"
              alt="jj-ying"
              className="h-full max-h-[430px] w-full rounded-xl object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Artificial Intelligence</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Artificial Intelligence Solutions</h1>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              AI has emerged as a game-changer in today's businesses, reshaping the way companies operate and strategize.
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Businesses across diverse sectors are increasingly harnessing the power of AI to drive innovation, efficiency, and growth.
            </p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              As a market research firm, we leverage AI technologies to unlock hidden patterns in vast amounts of data. This enables us to gain more profound insights into consumer behavior, market trends, and competitive landscapes.
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
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Technology Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl space-y-4">
          {impactSections.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold md:text-3xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Artificial Intelligence Services</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, we specialize in harnessing the power of AI to drive innovation, efficiency, and growth for your business. Our team of seasoned experts is dedicated to delivering top-notch AI solutions across various industries, empowering you to stay ahead in today's competitive landscape.
          </p>

          <h3 className="mt-8 text-xl font-semibold md:text-2xl">Our AI Services</h3>
          <div className="mt-5 space-y-3">
            {aiServices.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700 md:text-base">
                  <span className="font-semibold text-slate-900">{service.title}</span> {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Us?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We understand that embracing AI can be demanding. That's why we offer:
          </p>

          <div className="mt-5 space-y-3">
            {chooseUsPoints.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-700 md:text-base">
                  <span className="font-semibold text-slate-900">{item.title}</span> {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-2xl font-semibold text-slate-900 md:text-3xl">Empower Your Business with AI</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Join hands with Researchers to unlock the full potential of AI for your business in the UAE, Dubai, and the Gulf region. Experience smarter decision-making, streamlined processes, and unparalleled growth.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
            Let's embark on this transformative AI journey together. Contact us today to explore how AI can reshape your business outlook!
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
              href="/services/technology/artificial-intelligence/business-consultation-implementation"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              AI Implementations
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Frequently Asked Questions (FAQs) on AI Solutions</h2>
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
