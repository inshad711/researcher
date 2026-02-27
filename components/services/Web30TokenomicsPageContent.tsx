import Link from "next/link";
import { ArrowRight } from "lucide-react";

const contentParagraphs = [
  "Tokenomics is a fundamental concept in Web 3.0, it represents the economic and incentive structures built around digital tokens and blockchain-based networks. The professionals at Researchers assist you in designing and evaluating tokens within the context of your specific use cases. We analyze token utility, tokenomics models, and token issuance mechanisms. Our expertise helps you create tokens that align with your strategic goals and promote user engagement and network growth.",
  "We provide insights into the potential impact of tokenomics to ensure your decisions are always data-driven. We analyze best practices, evaluate decentralized governance mechanisms, and provide recommendations to foster vibrant and inclusive communities.",
  "Tokenomics is complex and requires a solid understanding of blockchain technology, economics, and game theory. We provide education and training programs to help you grasp the fundamentals of tokenomics. We offer workshops, webinars, and educational materials to equip you with the knowledge and skills necessary to navigate the intricacies of tokenomics successfully.",
];

export default function Web30TokenomicsPageContent() {
  return (
    <main className="bg-slate-100 pb-20 pt-32 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Web 3.0</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Tokenomics</h1>
          <div className="mt-7 h-px w-full bg-slate-200" />
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/technology/web-3-0"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Back to Web 3.0
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)] lg:col-span-5">
            <div className="relative h-full min-h-[320px]">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-jonathan-borba-14891541-modified-1024x683.jpg"
                alt="pexels-jonathan-borba"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-8 lg:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Tokenomics</h2>
            <div className="mt-5 space-y-4">
              {contentParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-700 md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
