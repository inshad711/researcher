import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Megaphone,
  Sparkles,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import MainService from "@/components/MainService";
import SinglePageService from "@/components/SinglePageService";
import ServiceCrausal, {
  ServiceCarouselSection,
  type ServiceCarouselItem,
} from "@/components/ServiceCrausal";

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Years Experience", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
];

const featuredServices = [
  {
    badge: "Featured",
    category: "Market Research Services",
    title: "Market & Business Intelligence",
    subtitle: "Clarity in a Complex Market",
    description:
      "Providing competitive, industry, and market intelligence to support smarter, future-ready decisions.",
    icon: BarChart3,
  },
  {
    badge: "Featured",
    category: "Market Research Services",
    title: "Marketing & Communication Research",
    subtitle: "Creating Messages That Resonate",
    description:
      "Evaluating brand messaging and media effectiveness to maximize impact and audience engagement.",
    icon: Megaphone,
  },
  {
    badge: "Featured",
    category: "Business Consulting Services",
    title: "Marketing Consulting",
    subtitle: "Strategies That Connect Brands to Growth",
    description:
      "Offering expert marketing guidance to craft impactful campaigns and achieve measurable business results.",
    icon: BriefcaseBusiness,
  },
];

const allServices = [
  {
    category: "Market Research Services",
    title: "Feasibility Studies",
    description:
      "We analyze demand, competition, costs, and returns to help businesses and investors make informed and profitable decisions.",
  },
  {
    category: "Market Research Services",
    title: "Experience & Operational Research",
    description:
      "Transforming customer touchpoints and operations into competitive advantage.",
  },
  {
    category: "Market Research Services",
    title: "Consumer & Shopper Research",
    description:
      "Delivering deep insights into consumer behavior and shopper journeys to shape winning strategies.",
  },
  {
    category: "Market Research Services",
    title: "Innovation & Product Research",
    description:
      "Evaluating customer needs, testing product concepts, packaging, and usage patterns to ensure long-term success.",
  },
  {
    category: "Business Consulting Services",
    title: "Strategy & Advisory",
    description:
      "Providing tailored strategies and expert advice to navigate challenges and accelerate growth.",
  },
  {
    category: "Analytics & Data Services",
    title: "Analytics & Data Services",
    description:
      "Empowering businesses with advanced analytics and data-driven strategies for faster, smarter decisions.",
  },
];

const analyticsServices: ServiceCarouselItem[] = [
  {
    id: "dashboard-reporting",
    title: "Dashboard & Reporting",
    href: "/services/analytics/dashboard-reporting",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    href: "/services/analytics/data-analytics",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "master-data-management",
    title: "Master Data Management",
    href: "/services/analytics/master-data-management",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "data-quality",
    title: "Data Quality",
    href: "/services/analytics/data-quality",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "data-integration",
    title: "Data Integration",
    href: "/services/analytics/data-integration",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=900",
  },
];

const businessIntelligenceServices: ServiceCarouselItem[] = [
  {
    id: "ibm-cognos-analytics",
    title: "IBM Cognos Analytics",
    href: "/services/business-intelligence/ibm-cognos-analytics",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "tableau",
    title: "Tableau",
    href: "/services/business-intelligence/tableau",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "microsoft-power-bi",
    title: "Microsoft Power BI",
    href: "/services/business-intelligence/microsoft-power-bi",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "qlikview-qliksense",
    title: "Qlikview/Qliksense",
    href: "/services/business-intelligence/qlikview-qliksense",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=900",
  },
];

const businessAnalysisServices: ServiceCarouselItem[] = [
  {
    id: "product-analysis",
    title: "Product Analysis",
    href: "/services/business-analysis/product-analysis",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "process-analysis",
    title: "Process Analysis",
    href: "/services/business-analysis/process-analysis",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=900",
  },
];

const technologyServices: ServiceCarouselItem[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    href: "/services/technology/digital-transformation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    href: "/services/technology/artificial-intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "blockchain",
    title: "Blockchain",
    href: "/services/technology/blockchain",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "web-3-0",
    title: "Web 3.0",
    href: "/services/technology/web-3-0",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=900",
  },
];

const loyaltyServices: ServiceCarouselItem[] = [
  {
    id: "designing-implementation-loyalty-rewards-program",
    title: "Designing & Implementation Loyalty & Rewards Programs",
    href: "/services/loyalty/designing-implementation-loyalty-rewards-program",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=900",
  },
];

export default function ServicesPage() {
  const primaryFeatured = featuredServices[0];
  const secondaryFeatured = featuredServices.slice(1);

  return (
    <div className="relative bg-[#fcfcfb] text-slate-900 pt-36">
      <div>
        <MainService />
      </div>

      <ServiceCard />
      <div>
        <ServiceCrausal />
      </div>

      <div>
        <ServiceCarouselSection
          eyebrow="Data Intelligence"
          title="Analytics"
          description="Explore our analytics services with direct access to each page."
          items={analyticsServices}
        />
      </div>

      <div>
        <ServiceCarouselSection
          eyebrow="Reporting Systems"
          title="Business Intelligence"
          description="Explore our business intelligence services with direct access to each page."
          items={businessIntelligenceServices}
        />
      </div>

      <div>
        <ServiceCarouselSection
          eyebrow="Operational Insight"
          title="Business Analysis"
          description="Explore our business analysis services with direct access to each page."
          items={businessAnalysisServices}
        />
      </div>

      <div>
        <ServiceCarouselSection
          eyebrow="Emerging Systems"
          title="Technology"
          description="Explore our technology services with direct access to each page."
          items={technologyServices}
        />
      </div>

      <div>
        <ServiceCarouselSection
          eyebrow="Retention Strategy"
          title="Loyalty"
          description="Explore our loyalty services with direct access to each page."
          items={loyaltyServices}
        />
      </div>

      <div>
        <SinglePageService />
      </div>

      <section className="templateContainer mb-8">
        {/* <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8"> */}
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-6 lg:col-span-8 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Partner With Us
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-normal leading-tight md:text-4xl">
              Turn your next market question into a confident strategic move.
            </h2>
            <p className="mt-3 max-w-2xl font-sans">
              We align teams quickly, validate assumptions with evidence, and
              deliver outputs built for action.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Discovery in 48 hours
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Decision-focused reporting
              </p>
              <p className="rounded-xl border border-slate-200 bg-[#fff7ed] px-4 py-3">
                Hands-on implementation support
              </p>
            </div>
          </div>

          <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white lg:col-span-4 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Next Step
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight">
              Book a strategic intake call.
            </h3>
            <p className="mt-3 text-white font-sans">
              We&apos;ll define scope, timeline, and the right research model
              for your goal.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Become a Client
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-300"
              >
                Explore Services
              </Link>
            </div>
          </aside>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
