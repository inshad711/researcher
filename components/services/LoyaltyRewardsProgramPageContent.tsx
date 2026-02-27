import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Gift,
  Heart,
  MessageCircle,
  Repeat,
  Star,
  ThumbsUp,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

type ProgramType = {
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Benefit = {
  number: string;
  title: string;
  text: string;
  icon: ComponentType<{ className?: string }>;
};

const programTypes: ProgramType[] = [
  {
    label: "Points-Based Rewards",
    description: "Customers earn points per purchase, redeemable for discounts, products, or experiences.",
    icon: Star,
  },
  {
    label: "Tiered Membership",
    description: "Structured tiers (Silver, Gold, Platinum) that unlock exclusive perks as spending grows.",
    icon: Award,
  },
  {
    label: "Referral & Advocacy",
    description: "Reward customers who refer friends and become active brand advocates.",
    icon: MessageCircle,
  },
  {
    label: "Cashback & Discounts",
    description: "Straightforward savings on future purchases that keep customers coming back.",
    icon: Gift,
  },
];

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Customer Retention",
    text: "Increases customer retention and draws in new clients.",
    icon: Users,
  },
  {
    number: "02",
    title: "Brand Differentiation",
    text: "It sets a brand apart from its rivals.",
    icon: Award,
  },
  {
    number: "03",
    title: "Lifetime Value",
    text: "Improves repeat business and customer lifetime value.",
    icon: Repeat,
  },
  {
    number: "04",
    title: "Stronger Relationships",
    text: "Strengthens relationships with customers and encourages them to make larger purchases.",
    icon: Heart,
  },
  {
    number: "05",
    title: "Word-of-Mouth Growth",
    text: "Promotes word-of-mouth advertising and increases sales.",
    icon: TrendingUp,
  },
  {
    number: "06",
    title: "Customer Happiness",
    text: "Encourages client gratitude and happiness.",
    icon: ThumbsUp,
  },
];

export default function LoyaltyRewardsProgramPageContent() {
  return (
    <main className="pb-24 pt-32 text-slate-900">

      {/* ── Hero ── */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Top label */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Loyalty Services
          </p>

          {/* Headline + right callout */}
          <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
                Designing &amp; Implementation of Loyalty &amp; Rewards Programs
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
                Customer relationships are successful when both parties feel satisfied — when they
                feel they are getting something genuinely beneficial from the relationship.
              </p>
            </div>

            {/* Stat callout */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-5xl font-bold tracking-tight text-slate-900">5×</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Existing customers are up to 5× more likely to repurchase and recommend
                  your services than new ones.
                </p>
              </div>
            </div>
          </div>

          {/* Tag pills + CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {["Program design & strategy", "Implementation & integration", "Retention optimization"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services/loyalty"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Loyalty Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Your Business Needs a Loyalty Program ── */}
      <section className="mt-16 px-6 md:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          <div className="grid lg:grid-cols-2">
            {/* Full-bleed image */}
            <div className="relative min-h-[340px]">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/Employee-engagement-1024x683.jpg"
                alt="Customer Loyalty and Engagement"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Subtle overlay badge */}
              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Zap className="h-3 w-3" />
                  Customer Retention Strategy
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                  <Gift className="h-4 w-4 text-slate-700" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Why It Matters
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
                Why Your Business Needs a Loyalty Program
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A business needs to make the most of its existing customers and keep them coming
                back. A sustainable loyalty and reward program in place is one of the most
                effective ways to achieve this.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                At Researchers, we help business owners, companies, and organizations design,
                create, implement, and integrate loyalty and reward programs into their services.
                Sometimes you have to give customers a reason to keep buying from you.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                A customer loyalty and reward program is a customer retention strategy that rewards
                customers for their repeated patronage and motivates them to continue patronizing
                your services.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                  <span>Tailored to your model</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                  <span>Built for long-term retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs That Make Customers Choose You ── */}
      <section className="mt-8 px-6 md:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                  <Star className="h-4 w-4 text-slate-700" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Our Programs
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
                Programs That Make Customers Choose You
              </h2>

              {/* Pull quote */}
              <blockquote className="mt-5 border-l-2 border-slate-300 pl-4 text-sm italic leading-7 text-slate-500">
                &ldquo;Everybody wants freebies, discounts, or incentives.&rdquo; It gives them a
                reason to prefer your brand over your competitor&apos;s.
              </blockquote>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Loyalty programs come in many forms, and we help you design a reward system that is
                suitable and beneficial to your business — one that aligns with your goals, engages
                your customers, and drives sustainable growth.
              </p>
            </div>

            {/* Full-bleed image */}
            <div className="relative min-h-[340px]">
              <img
                src="https://www.researchers.me/wp-content/uploads/2022/11/Qualitative-Survey-1024x627.jpg"
                alt="Loyalty Program Strategy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-5 right-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Star className="h-3 w-3" />
                  Loyalty by Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Program Types ── */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Program Formats
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                Loyalty Programs We Design
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <article
                  key={type.label}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-md"
                >
                  {/* Large faded number */}
                  <span className="absolute right-4 top-3 text-6xl font-bold text-slate-100 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                      <Icon className="h-5 w-5 text-slate-700" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-900 md:text-base">
                      {type.label}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{type.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="mt-14 px-6 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Image column */}
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src="https://www.researchers.me/wp-content/uploads/2022/11/Data-Processing-1024x917.jpg"
                  alt="Benefits of Loyalty Programs"
                  className="w-full object-cover"
                />
              </div>
              {/* Caption card */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  The Outcome
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-white">
                  Sustainable, functioning loyalty programs produce measurable results across
                  retention, revenue, and brand equity.
                </p>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Key Benefits
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                What You Stand to Gain
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                The following are benefits you derive when you have sustainable and functioning
                loyalty and reward programs in place:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <article
                      key={benefit.number}
                      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      {/* Large faded number */}
                      <span className="absolute right-4 top-2 text-5xl font-bold text-slate-100 select-none">
                        {benefit.number}
                      </span>
                      <div className="relative flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                          <Icon className="h-4 w-4 text-slate-700" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900">
                            {benefit.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-slate-500">{benefit.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-16 px-6 md:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 md:px-10 md:py-16">
          {/* Background texture via blurred circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-2xl" />

          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                <Gift className="h-3 w-3" />
                Ready to Reward Your Customers?
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
                Design a loyalty program that keeps customers coming back
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                At Researchers, we craft loyalty and rewards programs tailored to your business —
                driving repeat purchases, strengthening customer relationships, and setting your
                brand apart in the UAE, Dubai, and Gulf Region.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Contact Us Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/loyalty"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Loyalty Services
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-bold text-white">Design</p>
                <p className="mt-1 text-xs text-white/50">Custom program architecture</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-bold text-white">Implement</p>
                <p className="mt-1 text-xs text-white/50">Seamless integration into your services</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-bold text-white">Optimize</p>
                <p className="mt-1 text-xs text-white/50">Ongoing performance &amp; engagement tuning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
