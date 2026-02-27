import Link from "next/link";
import { notFound } from "next/navigation";
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

const toReadableTokens = (slugPath: string) =>
  slugPath
    .split("/")
    .flatMap((part) => part.split("-"))
    .filter(Boolean)
    .map((token) => token.toLowerCase());

const buildSummary = (serviceName: string, parentName?: string) => {
  if (parentName) {
    return `${serviceName} is delivered as a focused ${parentName.toLowerCase()} service with practical execution support.`;
  }

  return `${serviceName} helps teams align decisions, delivery, and measurable business outcomes.`;
};

const buildFocusPoints = (serviceName: string, slugPath: string) => {
  const tokens = toReadableTokens(slugPath).join(" ");

  if (tokens.includes("analytics") || tokens.includes("dashboard") || tokens.includes("report")) {
    return ["KPI clarity", "Data trust", "Decision-ready reporting"];
  }

  if (tokens.includes("market") || tokens.includes("customer") || tokens.includes("survey")) {
    return ["Audience insight", "Evidence-backed strategy", "Actionable recommendations"];
  }

  if (tokens.includes("technology") || tokens.includes("ai") || tokens.includes("blockchain") || tokens.includes("web")) {
    return ["Use-case prioritization", "Implementation roadmap", "Governance and risk controls"];
  }

  return [
    `${serviceName} scope definition`,
    "Execution milestones",
    "Outcome measurement",
  ];
};

export default function SimpleServicePage({ serviceHref }: { serviceHref: string }) {
  const slugPath = serviceHref.replace(/^\/services\/?/, "");
  const node = serviceLookup.get(slugPath);

  if (!node) {
    notFound();
  }

  const { item, trail } = node;
  const parent = trail[trail.length - 1]?.name;
  const hasChildren = Boolean(item.children?.length);
  const focusPoints = buildFocusPoints(item.name, slugPath);

  return (
    <section className="bg-slate-50 pt-28 pb-20 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Service</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">{item.name}</h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg text-slate-600 leading-7">{buildSummary(item.name, parent)}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {focusPoints.map((point) => (
            <div key={point} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
              {point}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
          >
            Back to Services
          </Link>
        </div>

        {hasChildren && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Explore Related Services</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {item.children!.map((child) => (
                <article key={child.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-base font-semibold text-slate-900">{child.name}</h3>
                  {child.href ? (
                    <Link href={child.href} className="mt-2 inline-flex text-sm font-medium text-slate-700 hover:text-slate-900">
                      View details
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
