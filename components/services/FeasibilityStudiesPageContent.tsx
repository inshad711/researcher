import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FeasibilitySection = {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  example: string;
};

const feasibilitySections: FeasibilitySection[] = [
  {
    title: "Technical Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-thisisengineering-3862132-1024x683.jpg",
    imageAlt: "Technical Feasibility",
    description:
      "Diving into the heart of innovation lies a crucial element - technical feasibility.Imagine uncovering whether the technology needed for your project is not just within reach, but perfectly aligned with your vision.Meanwhile, that's just the tip of the iceberg. Delving deeper, this type of feasibility study also peels back the layers to evaluate the prowess of your team.Get ready to unearth the secrets behind the tech and talent that can make or break your project!",
    example: "Determining if a new software system can be developed given the existing infrastructure and resources.",
  },
  {
    title: "Economic Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-energepiccom-159888-1024x768.jpg",
    imageAlt: "Economic Feasibility",
    description:
      "Picture this: a realm where ideas are not just sparks of creativity, but also heaps of profit. Economic feasibility is your secret passage to this realm, where the dance of numbers reveals whether your project is a golden opportunity or a fleeting mirage. Brace yourself for a journey of cost calculations, revenue forecasts, and ROI evaluation.",
    example:
      "Analyzing whether opening a new branch of a restaurant chain in a certain location will generate enough profit to justify the initial investment.",
  },
  {
    title: "Operational Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-pixabay-159298-1024x684.jpg",
    imageAlt: "Operational Feasibility",
    description:
      "From concept to synergy, Operational Feasibility unfolds the tale. It helps you discover how your project synchronize with the organization's pulse,Operational feasibility examines whether a project aligns with the organization's existing processes, systems, and human resources. It assesses how well the project can be integrated into the daily operations.",
    example:
      "Determining whether implementing a new project management software will be smoothly adopted by the project teams and improve overall efficiency.",
  },
  {
    title: "Legal and Regulatory Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-sora-shimazaki-5668473.jpg",
    imageAlt: "Legal and Regulatory Feasibility",
    description:
      "This is the lantern that lights your path, revealing whether your project can gracefully waltz within the legal confines or stumble upon hidden obstacles. It's the realm where feasibility meets legality, promising to uncover the secrets that could either thwart or champion your project's ambitions.",
    example:
      "Evaluating whether a proposed pharmaceutical product complies with health and safety regulations before it can be manufactured and marketed.",
  },
  {
    title: "Market Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-tima-miroshnichenko-7567440-1024x683.jpg",
    imageAlt: "Market Feasibility",
    description:
      "From concept to synergy, Operational Feasibility unfolds the tale. It helps you discover how your project synchronize with the organization's pulse,Operational feasibility examines whether a project aligns with the organization's existing processes, systems, and human resources. It assesses how well the project can be integrated into the daily operations.",
    example:
      "Determining whether implementing a new project management software will be smoothly adopted by the project teams and improve overall efficiency.",
  },
  {
    title: "Financial Feasibility",
    image: "https://www.researchers.me/wp-content/uploads/2023/08/pexels-pixabay-53621-1-1-1024x603.jpg",
    imageAlt: "Financial Feasibility",
    description:
      "Step into the treasury of possibility, where dreams and digits intertwine. Financial feasibility focuses specifically on the financial aspects of the project, including costs, revenue projections, and funding sources. Financial Feasibility; the alchemist's workshop of projects, unlocks the vault that safeguards your aspirations. But it's not just about numbers - it's a symphony of costs and revenue, an art of projections that paint the canvas of potential.",
    example:
      "Assessing whether a startup business idea is financially viable by estimating startup costs, operational expenses, and potential revenue streams.",
  },
];

export default function FeasibilityStudiesPageContent() {
  return (
    <main className="bg-slate-50 pb-20 pt-32 text-slate-900">
      <section className="px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:px-10 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">FEASIBILITY STUDIES</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">WHAT WE DO?</h1>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            We would like to take this opportunity to welcome you to Researchers, where we specialize in providing companies with complete feasibility studies, notably in the fields of web3 and other novel start-ups.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            It is vital for businesses to conduct feasibility studies in order to evaluate the viability of their initiatives and determine whether or not it is worthwhile to pursue them. To gain a better understanding of the current trends in the industry and to evaluate the potential of your project, the knowledgeable members of our team carry out exhaustive market research and data analysis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">OUR EXPERTISE</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We are aware that companies just starting out in the web3 arena confront a distinct set of obstacles, which calls for an all-encompassing method of conducting feasibility studies. Because of our team's significant knowledge and experience in the web3 and start-up arena, we are able to assist you in navigating this intricate environment.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We go above and beyond what is typically involved in feasibility studies in order to present you with an all-encompassing view of the potential of your project. In order to assist you in making well-informed decisions regarding your project, our data-driven strategy integrates market research, media planning, and digital marketing.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:col-span-7">
              <h3 className="text-lg font-semibold">Dedication And Professionalism</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                Our staff is dedicated to delivering the insights and information you require to achieve your goals in a timely manner. We design individualized strategies in close collaboration with our customers in order to better comprehend their objectives and provide for their particular requirements.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                There are a lot of advantages to cooperating with our company. Because of our extensive knowledge and experience in the startup and web3 industries, you can rest assured that the findings of your feasibility study will be accurate and pertinent to your business. In addition, the data-driven approach that we use assures that you will receive information and insights that are rich in data, which will assist you in making decisions that are informed regarding your project.
              </p>
            </article>
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 lg:col-span-5">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/02/feasib-image.jpg"
                alt="Feasibility Studies"
                className="h-full min-h-[260px] w-full rounded-xl object-cover"
              />
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 lg:col-span-5">
              <img
                src="https://www.researchers.me/wp-content/uploads/2023/02/rese-12.jpg"
                alt="Feasibility Studies"
                className="h-full min-h-[240px] w-full rounded-xl object-cover"
              />
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:col-span-7">
              <h3 className="text-lg font-semibold">Commitment And Results</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                In summing up, Researchers is your one-stop solution for doing all-encompassing feasibility studies. We have the knowledge and experience to assist you in achieving success, regardless of whether you are a startup operating in the web3 domain or any other breakthrough technology.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                Get in touch with us right now to find out more about the ways in which we can assist you in achieving your objectives.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Feasibility Studies overview</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Ever wondered how ideas transform into successful business projects? Feasibility studies hold the key, unraveling the practicality, economics, and logistics that pave the way for turning concepts into reality.They are conducted to assess the viability of a proposed project, idea, or initiative. They help decision-makers determine whether a project is worth pursuing or not.But that's not all - there's a variety of feasibility study types, each uncovering a unique facet of the project's potential.
          </p>
        </div>
      </section>

      <section className="mt-10 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5">
          {feasibilitySections.map((section, index) => (
            <article key={section.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid items-stretch lg:grid-cols-12">
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={section.image} alt={section.imageAlt} className="h-full min-h-[260px] w-full object-cover" />
                </div>
                <div className={`p-6 md:p-8 lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">{section.description}</p>
                  <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700 md:text-base">
                    <span className="font-semibold text-slate-900">Example: </span>
                    {section.example}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 px-4 pb-2 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-sm leading-7 text-slate-700 md:text-base">
            In other words, feasibility studies often consider multiple types of feasibility to provide a comprehensive evaluation of a project's viability. The specific types of feasibility to be assessed depend on the nature of the project and the industry it belongs to.
          </p>
        </div>
      </section>
    </main>
  );
}
