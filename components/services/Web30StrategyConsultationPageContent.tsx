import Link from "next/link";
import { ArrowRight } from "lucide-react";

const contentParagraphs = [
  "Web 3.0 represents a paradigm shift in the digital landscape, introducing decentralized networks, blockchain technology, and user empowerment. We understand the significance of Web 3.0 and its transformative potential for your brand. Our expertise allows us to provide valuable strategy and consultation services tailored to Web 3.0, to assist you in navigating this new frontier.",
  "We analyze the current digital infrastructure of your business, its technological capabilities, and organizational culture. We assess market trends, user behaviours, and emerging use cases to help you explore innovative business models and reimagine value creation in the Web 3.0 era.",
  "We evaluate partnership opportunities and strategic alliances. Our experts also assist you in develop dApps that leverage the capabilities of blockchain and decentralized networks. We assess user needs, analyze technical requirements, and provide guidance throughout the development lifecycle, ensuring the successful implementation of impactful dApps.",
  "Book your appointment already!",
];

export default function Web30StrategyConsultationPageContent() {
  return (
    <main className="bg-slate-100 pb-20 pt-32 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Web 3.0</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Web 3.0 Strategy &amp; Consultation
          </h1>
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
                src="https://www.researchers.me/wp-content/uploads/2023/06/tezos-w_v34lSJ7ew-unsplash-modified-768x512.jpg"
                alt="tezos"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-8 lg:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Web 3.0 Strategy &amp; Consultation</h2>
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
