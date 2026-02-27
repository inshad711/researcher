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

export default function ServicesPage() {
  const primaryFeatured = featuredServices[0];
  const secondaryFeatured = featuredServices.slice(1);

  return (
    <div className="relative bg-[#fcfcfb] text-slate-900 pt-28">

      <div>
        <MainService/>
      </div>

<ServiceCard/>
    

       <section className="templateContainer relative pt-0">
        <div className="">
       <div className="flex flex-col items-center justify-center text-center space-y-4">
  {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900">
          What we do
          </h2>
  
  {/* Description */}
          <p className="max-w-lg text-slate-600 text-lg leading-relaxed">
            Explore our curated selection of top-tier collections, designed to bring 
            style and functionality to your everyday lifestyle.
          </p>
        </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {allServices.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {service.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div>
        <SinglePageService/>
      </div>

        <section className="templateContainer relative">
        <div className="">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              <Sparkles className="h-3.5 w-3.5" />
              Our Services
            </p>
            <h1 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight md:text-4xl">
              Empowering business growth with elegant research and strategic precision.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
              Comprehensive research, analytics, and consulting services tailored to drive sustainable
              success in the UAE and beyond.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          
         
        </div>
      </section>

      {/* <section className="templateContainer relative pt-0">
        <div className="">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Featured Services
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Explore high-impact solutions for transformation
              </h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <article className="rounded-[1.9rem] border border-slate-200 bg-slate-50 p-7 lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                <BadgeCheck className="h-3.5 w-3.5" />
                {primaryFeatured.badge}
              </p>
              <p className="mt-3 text-sm font-medium text-slate-600">{primaryFeatured.category}</p>
              <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-slate-900">
                {primaryFeatured.title}
              </h3>
              <p className="mt-2 text-base font-medium text-slate-700">{primaryFeatured.subtitle}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700">{primaryFeatured.description}</p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <div className="grid gap-5 lg:col-span-5">
              {secondaryFeatured.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {service.category}
                        </p>
                        <h3 className="mt-3 text-xl font-semibold leading-tight text-slate-900">
                          {service.title}
                        </h3>
                      </div>
                      <span className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                        <Icon className="h-5 w-5 text-slate-700" />
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-800">{service.subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

     

      <section className="templateContainer relative pt-0">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-6 lg:col-span-8 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Partner With Us</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
                Turn your service needs into a clear, actionable growth plan.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                We align on your priorities, define the right scope, and deliver research outputs your team can act on.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Discovery in 48 hours</p>
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Decision-focused reporting</p>
                <p className="rounded-xl border border-slate-200 bg-white px-4 py-3">Hands-on implementation support</p>
              </div>
            </div>

            <aside className="rounded-[1.4rem] border border-slate-900 bg-slate-900 p-6 text-white lg:col-span-4 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Next Step</p>
              <h3 className="mt-3 text-xl font-semibold leading-tight">Book a strategic intake call.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We&apos;ll define scope, timeline, and the right service model for your goal.
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
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-300"
                >
                  Explore About
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
