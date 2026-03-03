export default function Web30IdeationPageContent() {
  const contentParagraphs = [
    "We know ideation is an important phase in the development of Web 3.0 applications and services. This is why we put together idea-generation workshops to stimulate creativity and innovation. We employ various ideation techniques and frameworks tailored to the Web 3.0 context. Our facilitators guide you through structured exercises to generate novel ideas and explore the possibilities presented by Web 3.0 technologies.",
    "We assist you in adopting a user-centric approach during ideation, to ensure your ideas are rooted in understanding user needs, pain points, and aspirations. We employ various research methods to gain valuable insights into user perspectives and preferences.",
    "We assist in creating minimum viable products (MVPs) or proof-of-concept prototypes, to allow you to test and validate their ideas with real users or stakeholders. This gives us the chance to refine and optimize the ideas so they align with user expectations and market needs.",
  ];

  return (
    <main className="bg-slate-100 pb-20 pt-32 text-slate-900">
      <section className="templateContainer !pb-4">
        <div className="grid gap-8 border-b border-slate-300 pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Web 3.0 Service</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">Ideation</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-700 lg:col-span-4">
            Structured concept design for Web 3.0 products, focused on user needs, feasibility, and clear validation steps.
          </p>
        </div>
      </section>

      <section className="templateContainer !pt-2">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="overflow-hidden rounded-[1.5rem] border border-slate-300 p-2 lg:col-span-5">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.2rem]">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-andrea-piacquadio-3758105-modified-768x674.jpg"
                alt="andrea"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-300 p-6 md:p-8 lg:col-span-7">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Ideation</h2>
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

      <section className="templateContainer !pt-2">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-300 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">01</p>
            <h3 className="mt-2 text-xl font-semibold">Discovery Mapping</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">Collect user pains, behavior patterns, and constraints before idea generation starts.</p>
          </article>
          <article className="rounded-2xl border border-slate-300 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">02</p>
            <h3 className="mt-2 text-xl font-semibold">Concept Framing</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">Turn raw ideas into actionable product narratives with utility, token flow, and journey clarity.</p>
          </article>
          <article className="rounded-2xl border border-slate-300 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">03</p>
            <h3 className="mt-2 text-xl font-semibold">Validation Loops</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">Use MVP and proof-of-concept cycles to test value assumptions and refine direction quickly.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
