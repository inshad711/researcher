import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Clock3, FileText, Goal, Sparkles } from "lucide-react";
import { servicesMenu, type ServiceMenuItem } from "@/data/servicesMenu";

type LookupNode = {
  item: ServiceMenuItem;
  trail: ServiceMenuItem[];
};

const serviceLookup = new Map<string, LookupNode>();

const buildLookup = (items: ServiceMenuItem[], trail: ServiceMenuItem[] = []) => {
  for (const item of items) {
    if (item.href?.startsWith("/services/")) {
      const slug = item.href.replace(/^\/services\/?/, "");
      if (slug) {
        serviceLookup.set(slug, { item, trail });
      }
    }

    if (item.children?.length) {
      buildLookup(item.children, [...trail, item]);
    }
  }
};

buildLookup(servicesMenu);

const buildDescription = (serviceName: string, hasChildren: boolean) => {
  if (hasChildren) {
    return `${serviceName} includes specialized tracks tailored to your business goals, data maturity, and market context.`;
  }

  return `${serviceName} helps teams move from assumptions to evidence with practical research, clear recommendations, and measurable outcomes.`;
};

const buildPageContent = (serviceName: string) => {
  const short = serviceName.toLowerCase();

  if (short.includes("analytics")) {
    return {
      intro:
        "Turn fragmented data into clear signals your leadership team can trust for faster, higher-confidence decisions.",
      outcomes: ["Faster reporting cycles", "Shared KPI definitions", "Improved data confidence"],
      process: [
        "Assess sources, tooling, and metric definitions",
        "Prioritize decision-critical dashboards and use cases",
        "Implement quality checks and governance rules",
        "Enable teams with practical reporting workflows",
      ],
      deliverables: [
        "KPI framework and data dictionary",
        "Executive dashboard blueprint",
        "Quality scorecard and remediation plan",
        "Adoption playbook for business teams",
      ],
    };
  }

  if (short.includes("market") || short.includes("research") || short.includes("feasibility")) {
    return {
      intro:
        "Validate demand, uncover competitive dynamics, and identify the segments and channels most likely to drive growth.",
      outcomes: ["Reduced launch risk", "Clear segment prioritization", "Stronger commercial planning"],
      process: [
        "Align business questions and decision criteria",
        "Run mixed-method research across audiences",
        "Analyze patterns, white spaces, and barriers",
        "Translate findings into action-ready options",
      ],
      deliverables: [
        "Market sizing and opportunity map",
        "Audience and behavior insights",
        "Competitor and positioning snapshot",
        "Decision memo with recommendations",
      ],
    };
  }

  if (short.includes("technology") || short.includes("ai") || short.includes("blockchain") || short.includes("web 3")) {
    return {
      intro:
        "Design practical digital initiatives that connect strategic goals to implementable roadmaps and measurable value.",
      outcomes: ["Clear implementation roadmap", "Reduced execution risk", "Better cross-team alignment"],
      process: [
        "Evaluate readiness, constraints, and dependencies",
        "Define high-value use cases and architecture choices",
        "Prioritize phases with milestones and KPIs",
        "Support pilot delivery and scale planning",
      ],
      deliverables: [
        "Transformation roadmap",
        "Use-case prioritization matrix",
        "Operating model recommendations",
        "Pilot scope and KPI framework",
      ],
    };
  }

  return {
    intro:
      "A focused service model built to clarify priorities, improve decision quality, and accelerate business outcomes.",
    outcomes: ["Sharper strategic direction", "Clear execution priorities", "Measurable business impact"],
    process: [
      "Define business objectives and scope",
      "Collect evidence and stakeholder inputs",
      "Synthesize insights into clear options",
      "Deliver a practical execution plan",
    ],
    deliverables: [
      "Current-state assessment",
      "Opportunity and risk summary",
      "Recommended action plan",
      "Executive-ready presentation",
    ],
  };
};

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const node = serviceLookup.get(slugPath);

  if (!node) {
    notFound();
  }

  const { item, trail } = node;
  const hasChildren = Boolean(item.children?.length);
  const pageContent = buildPageContent(item.name);

  return (
    <section className="bg-white pt-28 pb-20 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/services" className="hover:text-slate-800 transition-colors">
            Services
          </Link>
          {trail.map((crumb) => (
            <span key={crumb.name} className="inline-flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-slate-800 transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span>{crumb.name}</span>
              )}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 text-slate-900">
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            {item.name}
          </span>
        </nav>

        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            <Sparkles className="h-3.5 w-3.5" />
            Service Category
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
            {item.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 text-slate-600">{pageContent.intro}</p>
          <p className="mt-2 max-w-3xl text-sm md:text-base leading-7 text-slate-500">
            {buildDescription(item.name, hasChildren)}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {pageContent.outcomes.map((outcome) => (
              <p
                key={outcome}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {outcome}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              Back to Services
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <Goal className="h-4 w-4" />
              Engagement Process
            </p>
            <div className="mt-4 space-y-3">
              {pageContent.process.map((step, idx) => (
                <div key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-700 leading-6">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <FileText className="h-4 w-4" />
              Typical Deliverables
            </p>
            <ul className="mt-4 space-y-2">
              {pageContent.deliverables.map((deliverable) => (
                <li key={deliverable} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {deliverable}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <Clock3 className="h-4 w-4" />
                Typical Timeline
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Most engagements run in focused sprints with weekly checkpoints and clear decision gates.
              </p>
            </div>
          </aside>
        </div>

        {hasChildren && (
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Related Categories</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">Explore Sub-categories</h2>
          </div>
        )}

        {hasChildren && (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {item.children!.map((child) => (
              <article key={child.name} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-semibold text-slate-900">{child.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore this focused service to understand scope, delivery model, and expected outcomes.
                </p>
                {child.href && (
                  <Link
                    href={child.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3"
                  >
                    View Category
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-[1.6rem] border border-slate-900 bg-slate-900 px-6 py-8 text-white md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">Ready To Start</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold leading-tight">
            Let&apos;s scope your {item.name.toLowerCase()} initiative.
          </h3>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-slate-300 leading-7">
            Share your objective and constraints, and we&apos;ll propose a practical scope, timeline, and delivery model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
