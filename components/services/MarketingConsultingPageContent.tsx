import Script from "next/script";

type FaqItem = {
  question: string;
  answer: string;
};

const consultantPoints = [
  "To provide appropriate marketing tactics to entrepreneurs who are just starting out in their businesses in order to improve the efficacy of their strategies.",
  "Preventing costly mistakes saves time and money.",
  "To assist in branding and strategic planning in order to increase sales and customer retention.",
  "Give expert advice on the best marketing tactics and strategies for your company's objectives.",
];

const roleSections = [
  {
    title: "Guiding Startups with Expertise",
    description:
      "As a Marketing Consultant, our role is to provide tailored marketing tactics for startups. We understand the challenges entrepreneurs face at the inception of their businesses. Our expertise helps in crafting strategies that not only avoid costly mistakes but also save valuable time and resources.",
  },
  {
    title: "Branding and Strategic Planning",
    description:
      "Our focus extends beyond tactical advice. We actively contribute to branding and strategic planning, aiming to elevate your business to new heights. By enhancing sales and customer retention strategies, we ensure your business stands out in the competitive landscape.",
  },
  {
    title: "Expert Guidance for Your Objectives",
    description:
      "Marketing Consulting Services from us go beyond generic advice. We delve into the specifics of your company's objectives, offering expert guidance on the best marketing tactics and strategies. It's a collaborative effort geared towards achieving tangible results.",
  },
];

const whyChooseSections = [
  {
    title: "Specialized for Small Businesses",
    description:
      "As a Marketing Consultant Company for small business services, we understand the unique needs and challenges of this segment. Our strategies are customized to fit the scale and objectives of small enterprises, ensuring maximum impact.",
  },
  {
    title: "Tailored Solutions for Startups",
    description:
      "For startups, a Product Marketing Agency that provides tailored solutions is invaluable. We offer strategies that not only align with your business goals but also foster sustainable growth from the very beginning.",
  },
  {
    title: "Holistic Approach for Comprehensive Growth",
    description:
      "Our Marketing Consulting Agency takes a holistic approach, addressing not only immediate challenges but also contributing to long-term growth. From branding to strategic planning, we cover every aspect to ensure comprehensive development.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How can marketing consultancy benefit startups?",
    answer:
      "Marketing consultancy for startups goes beyond advice; it provides tailored strategies that prevent costly mistakes, save time, and set the foundation for sustainable growth.",
  },
  {
    question: "Why should small businesses opt for marketing consulting services?",
    answer:
      "Small businesses benefit from customized solutions. Our Marketing Consultant Company understands the unique challenges of small enterprises, offering strategies that align with their scale and goals.",
  },
  {
    question: "What sets Researchers.me apart as a marketing consulting agency for startups?",
    answer:
      "Our specialized focus on startups, tailored solutions, and holistic approach set us apart. We go beyond generic advice, actively contributing to branding, strategic planning, and long-term growth.",
  },
  {
    question: "Can marketing consulting services contribute to increased sales and customer retention?",
    answer:
      "Absolutely. Our Marketing Consulting Services include strategies aimed at enhancing sales and improving customer retention, ensuring sustained success for your business.",
  },
  {
    question: "How does Researchers.me align marketing tactics with specific business objectives?",
    answer:
      "Our approach involves a deep dive into your company's objectives. We provide expert guidance on marketing tactics and strategies tailored to achieve your specific business goals.",
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

export default function MarketingConsultingPageContent() {
  return (
    <main className="bg-slate-50 pt-24 pb-20 text-slate-900">
      <Script id="marketing-consulting-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Marketing Consulting</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">MARKETING CONSULTING</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            The process of seeking professional advice and suggestions from a marketing consultant in order to improve
            the effectiveness of your marketing tactics is known as marketing consultancy. It provides businesses with
            reliable access to highly advanced marketing knowledge.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Marketing consulting is a strategic partnership with professionals to enhance the effectiveness of your
            marketing tactics. It's more than just advice; it's a doorway to advanced marketing knowledge that can
            transform your business.
          </p>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-6 md:p-8">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Customer-experience-1024x682.jpg"
              alt="Appearance Of Employee"
              className="h-80 w-full rounded-xl object-cover"
            />
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">As a marketing consultant, we are</h2>
            <ul className="mt-5 space-y-3">
              {consultantPoints.map((point) => (
                <li key={point} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            The Role of Marketing Consulting Firms
          </p>
          <div className="mt-5 space-y-4">
            {roleSections.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why Choose Researchers.me for Your Marketing Consulting Needs?
          </h2>
          <div className="mt-5 space-y-4">
            {whyChooseSections.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions on Marketing Consulting Services
          </h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">{faq.question}</summary>
                <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
