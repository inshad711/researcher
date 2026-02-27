import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Database,
  FlaskConical,
  GraduationCap,
  Search,
  Star,
} from "lucide-react";

type ServiceSection = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  icon: ComponentType<{ className?: string }>;
};

const sections: ServiceSection[] = [
  {
    title: "We Help You Develop Effective AI Strategy",
    description:
      "We work closely with businesses to develop a comprehensive AI strategy tailored to their specific needs and objectives. Our experts take care to understand the industry landscape, competitive positioning, and long-term goals of your business. By conducting market research and leveraging our expertise in AI, we help you identify opportunities, prioritize use cases, and outline a roadmap for successful implementation.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/06/pexels-soumil-kumar-735911-1024x684.png",
    imageAlt: "AI Strategy Development",
    imageLeft: true,
    icon: Brain,
  },
  {
    title: "We Study Relevant Use Cases",
    description:
      "Our Researchers conduct in-depth analysis to achieve your business goals. We combine market research insights with AI expertise to identify use cases that align with your brand objectives. This helps us pinpoint areas where AI can enhance efficiency, optimize processes, and unlock new opportunities for your business.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/06/pexels-ivan-samkov-5676666-1024x683.png",
    imageAlt: "AI Use Case Research",
    imageLeft: false,
    icon: Search,
  },
  {
    title: "We Collate Comprehensive Data Strategies",
    description:
      "AI relies on high-quality, informative, and properly documented data. Our professionals assist you in developing robust data strategies that encompass data collection, storage, integration, and management. We help define data requirements, identify potential data sources, and ensure compliance with data privacy regulations. Harness the power of AI by leveraging our expertise. Make data-driven decisions for your company in confidence that the data is reliable and well-prepared.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/06/pexels-sergei-starostin-6466141-1024x683.png",
    imageAlt: "Data Strategy",
    imageLeft: true,
    icon: Database,
  },
  {
    title: "We Help You Evaluate and Select the Most Preferable AI Vendor",
    description:
      "The AI landscape is populated, with numerous vendors offering AI solutions and platforms. The experts at Researchers provide valuable insights and guidance during the vendor evaluation and selection process. We help you to identify reputable vendors, evaluate their offerings, and select the most suitable AI solutions that align with your specific requirements and budget.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/06/pexels-photomix-company-190448-1024x779.png",
    imageAlt: "AI Vendor Evaluation",
    imageLeft: false,
    icon: Star,
  },
  {
    title: "We Help You Conduct Proof of Concept and Pilot Programs",
    description:
      "Researchers provide you with a valuable opportunity to test the feasibility and effectiveness of AI solutions in real-world cases. We help brands to design and execute POC projects, gather data, measure performance, and provide insights. This informs the decisions you make regarding further implementation.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/06/pexels-burak-the-weekender-186461-1024x683.png",
    imageAlt: "Proof of Concept",
    imageLeft: true,
    icon: FlaskConical,
  },
  {
    title: "We Support and Train You In AI",
    description:
      "Implementing AI solutions is complex and requires technical expertise. Researchers provide you with implementation support and guide you through the entire process. Our experts render assistance with system integration, customization, and training. We help bridge the gap between technical teams and business stakeholders, ensuring a seamless and successful AI implementation. Unlock the transformative potential of AI, gain a competitive edge, and succeed in your industry with the help of Researchers.",
    image:
      "https://www.researchers.me/wp-content/uploads/2023/06/pexels-tara-winstead-8386440-1-1024x771.png",
    imageAlt: "AI Training and Support",
    imageLeft: false,
    icon: GraduationCap,
  },
];

export default function BusinessConsultationImplementationPageContent() {
  return (
    <main className="pt-32 pb-20 text-slate-900">

      {/* Hero */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
          <div className="relative h-72 w-full md:h-96">
            <img
              src="https://www.researchers.me/wp-content/uploads/2023/06/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
              alt="Business Consultation and Implementation"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Artificial Intelligence
              </p>
              <h1 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-4xl">
                Business Consultation &amp; Implementation
              </h1>
            </div>
          </div>

          <div className="bg-white px-6 py-8 md:px-10 md:py-10">
            <p className="max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
              Digital transformation requires a strategic approach to leverage its full potential.
              At Researchers, we guide your business through this transformative journey, providing
              strategy and consultation services that align with your digital goals and objectives.
            </p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
              We conduct a comprehensive assessment of your readiness and evaluate your existing
              capabilities. This helps us to develop tailored strategies that address your needs
              and opportunities.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                AI strategy &amp; roadmap design
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                Use case research &amp; prioritization
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                End-to-end implementation support
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/technology/artificial-intelligence"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Back to AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <article
                key={section.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div
                  className={`grid lg:grid-cols-2 ${
                    section.imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                      <span className="text-xs font-bold text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                        <Icon className="h-4 w-4 text-slate-700" />
                      </div>
                      <h2 className="text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                        {section.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {section.description}
                    </p>
                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition hover:text-slate-600"
                      >
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* What You Gain */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            What You Gain Working With Researchers
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            From initial assessment to full implementation, our end-to-end AI consultation services
            are designed to deliver measurable business impact.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Tailored AI strategy aligned to your goals",
              "Prioritized, high-impact use cases",
              "Robust, compliant data infrastructure",
              "Best-fit AI vendor selection",
              "Validated POC &amp; pilot execution",
              "Full implementation &amp; team training",
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                <span
                  className="text-sm text-slate-700"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              </div>
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
                Unlock AI&apos;s Transformative Potential
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-white md:text-4xl">
                Gain a competitive edge with Researchers&apos; AI expertise
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                From strategy to implementation, we guide your business every step of the way.
                Succeed in your industry with AI-driven insights and a team committed to your growth.
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
                  href="/services/technology/artificial-intelligence"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  Coverage
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Strategy to implementation — 6 service pillars
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
