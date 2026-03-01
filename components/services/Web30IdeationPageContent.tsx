export default function Web30IdeationPageContent() {
  const contentParagraphs = [
    "We know ideation is an important phase in the development of Web 3.0 applications and services. This is why we put together idea-generation workshops to stimulate creativity and innovation. We employ various ideation techniques and frameworks tailored to the Web 3.0 context. Our facilitators guide you through structured exercises to generate novel ideas and explore the possibilities presented by Web 3.0 technologies.",
    "We assist you in adopting a user-centric approach during ideation, to ensure your ideas are rooted in understanding user needs, pain points, and aspirations. We employ various research methods to gain valuable insights into user perspectives and preferences.",
    "We assist in creating minimum viable products (MVPs) or proof-of-concept prototypes, to allow you to test and validate their ideas with real users or stakeholders. This gives us the chance to refine and optimize the ideas so they align with user expectations and market needs.",
  ];

  return (
    <main className="bg-slate-100 pb-20 pt-32 text-slate-900">
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Web 3.0</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">Ideation</h1>
          <div className="mt-7 h-px w-full bg-slate-200" />
        </div>
      </section>

      <section className="mt-10 px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="overflow-hidden rounded-[1.5rem] p-2  border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)] lg:col-span-5">
            <div className="relative h-full min-h-[320px]">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/06/pexels-andrea-piacquadio-3758105-modified-768x674.jpg"
                alt="andrea"
                className="h-full w-full rounded-2xl object-cover"
              />
             
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-8 lg:col-span-7">
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
    </main>
  );
}
