const businessImpactPoints = [
  "Create a positive reputation.",
  "Boost its annual revenue.",
  "Encourage customers to develop trust in the brand.",
  "Reduce your customer acquisition costs.",
  "Increase customer retention rates.",
  "Assist with gaining new customer.",
];

const qualitativeSurveyItems = ["Focus Groups", "In-Depth Interviews", "Observational Techniques"];

const quantitativeSurveyItems = [
  "Survey Research",
  "Descriptive Research",
  "Experimental Research",
  "Correlational Research",
  "Casual-Comparative Research",
];

export default function QualitativeQuantitativeSurveysPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-38 text-slate-900">
      <section className="px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-slate-200 bg-white px-6 py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:px-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            QUANTITATIVE AND QUALITATIVE ANALYSIS
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Qualitative Survey Analysis in Dubai</h1>
          <p className="mt-6 max-w-5xl whitespace-pre-line text-sm leading-7 text-slate-700 md:text-base">
            {`Researchers Qualitative Survey Analysis method in Dubai aim to gain a complete understanding of our client's target audience's needs, challenges, and willingness to take action.\n\nOur quantitative research entails gathering large amounts of data firsthand through surveys, inquiries, and polling methods that can be expressed numerically. It is mostly targeted towards a specific audience, usually determined by demographic information such as age, gender, geographic location.`}
          </p>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-6">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Loyalty-1024x683.jpg"
              alt="Customer Retention"
              className="h-full min-h-64 w-full object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-6 md:p-8">
            <p className="text-sm leading-7 text-slate-700 md:text-base">
              Qualitative research focuses on personalized behavior. It determines customer motivation through close
              observation. It is done through inquiries or interviews to learn more about feelings, attitudes, and habits
              that cannot be quantify but are important to support statistical data.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              We have experience conducting the following quantitative and qualitative survey.
            </h2>
            <ul className="mt-6 space-y-3">
              {businessImpactPoints.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Data-Preparation-scaled.jpg"
              alt="Qualitative Research"
              className="h-full min-h-64 w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-6">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Qualitative-Survey-1024x627.jpg"
              alt="Qualitative Survey"
              className="h-full min-h-64 w-full object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-6 md:p-8">
            <h3 className="text-xl font-semibold md:text-2xl">Qualitative survey</h3>
            <ul className="mt-5 space-y-3">
              {qualitativeSurveyItems.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h3 className="text-xl font-semibold md:text-2xl">Quantitative survey</h3>
            <ul className="mt-5 space-y-3">
              {quantitativeSurveyItems.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-5">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Employee-engagement-1024x683.jpg"
              alt="Mystery Shopping"
              className="h-full min-h-64 w-full object-cover"
            />
          </article>
        </div>
      </section>
    </main>
  );
}
