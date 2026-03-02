import { CheckCircle2 } from "lucide-react";

const businessImpactPoints = [
  "Create a positive reputation.",
  "Boost annual revenue.",
  "Encourage customers to develop trust in the brand.",
  "Reduce customer acquisition costs.",
  "Increase customer retention rates.",
  "Assist with gaining new customers.",
];

const qualitativeSurveyItems = ["Focus Groups", "In-Depth Interviews", "Observational Techniques"];

const quantitativeSurveyItems = [
  "Survey Research",
  "Descriptive Research",
  "Experimental Research",
  "Correlational Research",
  "Causal-Comparative Research",
];

export default function QualitativeQuantitativeSurveysPageContent() {
  return (
    <main className="pb-16 pt-28 text-slate-900 md:pt-32">
      <section className="">
        <div className="templateContainer grid gap-10 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quantitative and Qualitative Analysis
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Qualitative & Quantitative Survey Analysis in Dubai
            </h1>
            <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
              Researchers.me qualitative survey analysis in Dubai aims to build a complete
              understanding of your target audience&apos;s needs, challenges, and willingness to act.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our quantitative research gathers large volumes of first-hand data using surveys,
              inquiries, and polling methods that can be measured numerically. It is usually focused
              on specific audience segments based on demographics such as age, gender, and geography.
            </p>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/people-office-analyzing-checking-finance-graphs.webp"
              alt="Qualitative and quantitative survey analysis team"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover opacity-90"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-300">
        <div className="templateContainer grid gap-10 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-5 lg:order-2">
            <img
              src="/image/46908.webp"
              alt="Researchers discussing consumer behavior insights"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Qualitative Research
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Understand Motivation Behind Customer Behavior
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700 md:text-base">
              Qualitative research focuses on personalized behavior. It identifies customer
              motivation through close observation, interviews, and inquiry methods to understand
              feelings, attitudes, and habits that cannot be measured numerically but are critical
              for supporting statistical insights.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-300 ">
        <div className="templateContainer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Business Value
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">How Survey Research Supports Business Growth</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {businessImpactPoints.map((item, index) => (
              <article key={item} className="rounded-2xl border border-slate-300 bg-slate-100 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Impact {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-300">
        <div className="templateContainer grid gap-10 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-5">
            <img
              src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
              alt="Business team reviewing survey findings"
              className="h-full min-h-[320px] w-full rounded-3xl object-cover"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Qualitative Survey
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Methods We Use for Deeper Audience Understanding
            </h2>
            <ul className="mt-5 space-y-3">
              {qualitativeSurveyItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-300">
        <div className="templateContainer grid gap-10 lg:grid-cols-12 lg:items-start">
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quantitative Survey
            </p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Research Frameworks We Conduct</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {quantitativeSurveyItems.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-300 bg-slate-100 px-4 py-4">
                  <p className="flex items-start gap-2 text-sm leading-7 text-slate-700 md:text-base">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </p>
                </li>
              ))}
            </ul>
          </article>
          <article className="lg:col-span-5">
            <img
              src="/image/ef920cc1-46a3-4604-9dd1-3ea562976bd9.jpg"
              alt="Qualitative survey discussion session"
              className="h-full min-h-[300px] w-full rounded-3xl object-cover"
            />
          </article>
        </div>
      </section>

      <section className="border-t border-slate-300 ">
        <div className="templateContainer grid gap-8 lg:grid-cols-12 lg:items-center">
          <article className="lg:col-span-5">
            <img
              src="/image/1759.webp"
              alt="Quantitative survey and data measurement"
              className="h-full min-h-[280px] w-full rounded-3xl object-cover opacity-90"
            />
          </article>
          <article className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Survey Direction
            </p>
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
              Combining Human Insight with Measurable Evidence
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Our integrated approach combines qualitative depth with quantitative scale so that
              your strategy is shaped by both customer sentiment and validated market data.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
