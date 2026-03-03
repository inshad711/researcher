import Script from "next/script";
import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) design focuses on the visual elements, while UX (User Experience) design concentrates on the overall user journey and interaction with the product.",
  },
  {
    question: "How does UI/UX design impact business success?",
    answer:
      "A seamless and user-friendly design enhances customer satisfaction, increases engagement, and ultimately leads to higher conversions and business growth.",
  },
  {
    question: "Why is user research essential in UI/UX design?",
    answer:
      "User research helps in understanding user behavior, preferences, pain points, and needs, allowing for the creation of designs that cater to the user's expectations and enhance usability.",
  },
  {
    question: "How does Researchers.me ensure design consistency across platforms?",
    answer:
      "We follow a detailed design process that includes establishing brand guidelines, ensuring consistency in design elements, and conducting regular reviews to maintain uniformity across platforms.",
  },
  {
    question: "What role does prototyping play in UI/UX design?",
    answer:
      "Prototyping allows us to visualize the design concept, test functionalities, and gather user feedback early in the design process, ensuring a more refined and user-friendly final product.",
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

const significancePoints = [
  {
    title: "Customer-Centric Approach",
    description:
      "UI/UX design places the user at the center of product development, ensuring needs, preferences, and experiences guide the full journey.",
  },
  {
    title: "Enhanced User Engagement",
    description:
      "Clear navigation and intuitive interaction patterns help users engage more often and complete critical actions with less friction.",
  },
  {
    title: "Positive Brand Perception",
    description:
      "Strong usability and visual consistency improve trust, credibility, and the way users evaluate your overall brand quality.",
  },
  {
    title: "Business Growth and Retention",
    description:
      "Better experiences improve conversion, reduce drop-offs, and increase long-term customer loyalty and advocacy.",
  },
];

const serviceFocus = [
  {
    title: "UI Design",
    description:
      "We design layouts, typography, visual hierarchy, and interaction patterns that align with your brand and support fast comprehension.",
  },
  {
    title: "UX Design",
    description:
      "We apply research, journey mapping, and usability principles to make digital products easier, faster, and more satisfying to use.",
  },
  {
    title: "Prototyping and Testing",
    description:
      "We validate ideas early through iterative prototypes and user testing so your final product is refined before launch.",
  },
];

const whyChoosePoints = [
  {
    title: "Expertise and Innovation",
    description:
      "Our team combines practical product experience with modern design thinking to deliver work that is both useful and distinctive.",
  },
  {
    title: "User-Centric Approach",
    description:
      "Each decision is grounded in real user behavior and business objectives, not assumptions or trend-driven visuals.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We shape every UI/UX engagement to your domain, audience, and brand identity for consistency across all touchpoints.",
  },
];

export default function UiUxPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-36 text-slate-900">
      <Script id="ui-ux-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="templateContainer">
        <div className="grid gap-8 md:grid-cols-12">
          <article className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">UI / UX</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">UI/UX Design</h1>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              The demand for exceptional user experiences has become synonymous with business success in the modern marketplace.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              UI and UX design are now core requirements for companies that want better engagement, stronger retention, and sustainable growth.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              As a{" "}
              <a className="font-semibold underline" href="https://www.researchers.me/">
                market research firm
              </a>
              , Researchers helps you design digital experiences that are clear, useful, and aligned with your business goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start Consultation
              </Link>
              <Link
                href="/services/technology/digital-transformation"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
              >
                Back to Digital Transformation
              </Link>
            </div>
          </article>

          <aside className="space-y-3 md:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Service</p>
              <p className="mt-1 text-sm font-medium text-slate-800">UI/UX Design</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Usability, clarity, and conversion</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Method</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Research, prototyping, and iterative testing</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="templateContainer pt-0">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/faizur-rehman-dJpupM4LiS4-unsplash-e1686342991137-1024x786.png"
              alt="UI UX workflow"
              className="h-full max-h-[420px] w-full rounded-xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Understanding UI/UX Design</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              UI/UX design is the backbone of intuitive digital experiences, bringing interface design and user journey planning together to create seamless interactions.
            </p>
            <div className="mt-6 space-y-4 border-l-2 border-slate-300 pl-4">
              {significancePoints.map((item, index) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold text-slate-900 md:text-base">
                    {index + 1}. {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="templateContainer pt-0">
        <div className="border-y border-slate-300 py-8">
          <h3 className="text-xl font-semibold md:text-2xl">Our UI/UX Design Services</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, our UI/UX Design services are crafted to elevate your digital presence by focusing on user-centric experiences and visually appealing interfaces. From conceptualization to implementation, we ensure your digital platforms stand out in today's competitive landscape.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {serviceFocus.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-100 p-4">
                <h4 className="text-base font-semibold text-slate-900 md:text-lg">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold md:text-2xl">Why Choose Researchers.me for UI/UX Design?</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            At Researchers, we specialize in creating impactful UI/UX designs tailored to elevate your business:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {whyChoosePoints.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-100 p-4">
                <h4 className="text-base font-semibold text-slate-900 md:text-lg">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold md:text-2xl">Let's Elevate Your Digital Presence</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            Whether you're a startup or an established enterprise in the UAE, Dubai, or the Gulf region, Researchers is your partner in achieving unparalleled user experiences through exceptional UI/UX design.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
            Ready to revolutionize your digital journey? Contact us today to embark on a design journey that sets your brand apart.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="templateContainer pt-0">
        <div className="border-t border-slate-300 pt-6">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions (FAQs) about UI/UX Design
          </h2>
          <div className="mt-5 space-y-3">
            {faqItems.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
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
