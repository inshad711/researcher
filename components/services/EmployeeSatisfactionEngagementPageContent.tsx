import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const benefits = [
  "Create a positive reputation.",
  "Boost its annual revenue.",
  "Encourage customers to develop trust in the brand.",
  "Reduce your customer acquisition costs.",
  "Increase customer retention rates.",
  "Assist with gaining new customer.",
];

const reasons = [
  {
    title: "1. Productivity Boost:",
    text: "Satisfied and engaged employees tend to be more productive, contributing positively to the success of your business.",
  },
  {
    title: "2. Positive Work Culture:",
    text: "A happy workplace fosters a positive and inclusive culture, making it an attractive and motivating environment for employees.",
  },
  {
    title: "3. Employee Retention:",
    text: "When employees are satisfied and engaged, they are more likely to stay with your company, reducing turnover and associated costs.",
  },
  {
    title: "4. Innovation and Creativity:",
    text: "Engaged employees often contribute innovative ideas, driving creativity and helping your business stay competitive.",
  },
];

const extendedBenefits = [
  "Creating a positive reputation.",
  "Boosting your annual revenue.",
  "Encouraging customers to develop trust in your brand.",
  "Reducing your customer acquisition costs.",
  "Increase customer retention rates.",
  "Assist with gaining new customers.",
];

const focusAreas = [
  {
    title: "Fostering Employee Satisfaction",
    text: "Ensuring employee satisfaction is paramount for a thriving workplace. Conducting regular employee satisfaction surveys through a reputable employee satisfaction research agency like Ours provides valuable insights into the sentiments and needs of your workforce. This data can be instrumental in making informed decisions to enhance overall employee contentment.",
  },
  {
    title: "Cultivating Employee Engagement",
    text: "A highly engaged workforce is the backbone of any successful organization. Implementing an employee engagement survey in partnership with a trusted employee engagement research company like Ours allows you to gauge the level of commitment and connection your employees have with their roles and the company's mission.",
  },
  {
    title: "Recognizing Employee Contributions",
    text: "Acknowledging and appreciating employees' efforts is vital for sustaining high levels of engagement and satisfaction. Collaborating with a reputable employee recognition company like Ours can provide you with effective strategies to celebrate and reward outstanding contributions.",
  },
  {
    title: "Harnessing Employee Feedback",
    text: "Regular employee feedback surveys serve as a powerful tool for employees to voice their opinions and concerns. This practice not only demonstrates that their voices are valued but also provides valuable data for improving workplace conditions and policies.",
  },
  {
    title: "Analyzing Employee Satisfaction Data",
    text: "Thoroughly analyzing employee satisfaction data is essential in identifying trends, areas of improvement, and areas of strength within your organization. This process enables you to implement targeted strategies to enhance overall employee contentment.",
  },
  {
    title: "Reporting Employee Satisfaction Findings",
    text: "A well-structured employee satisfaction survey report is a valuable document that encapsulates the collective sentiments of your workforce. It serves as a roadmap for implementing necessary changes and celebrating successes in the pursuit of a satisfied and engaged workforce.",
  },
  {
    title: "Correlating Employee Satisfaction and Customer Satisfaction Analysis",
    text: "Understanding the link between employee satisfaction and customer satisfaction is crucial for overall business success. In parallel with employee-focused efforts, businesses must also conduct customer satisfaction analysis to gain insights into how employee contentment directly impacts customer experiences and loyalty. This integrated approach ensures a harmonious and prosperous work environment.",
  },
];

const whyChooseUs = [
  {
    title: "1. Local Expertise:",
    text: "We know the UAE work landscape inside out. Our team understands the cultural nuances and business dynamics unique to the region, ensuring our strategies are perfectly aligned with the local environment.",
  },
  {
    title: "2. Tailored Solutions:",
    text: "We don't believe in one-size-fits-all. Our approach involves working closely with you to create personalized Employee Satisfaction and Engagement programs. This means strategies that match your company's culture and meet your specific objectives.",
  },
  {
    title: "3. Proven Success:",
    text: "Our track record speaks volumes. We've successfully helped businesses in the UAE enhance employee satisfaction and create workplaces where people feel valued and engaged. Our strategies are tried, tested, and proven to deliver results.",
  },
  {
    title: "4. Comprehensive Approach:",
    text: "We take a 360-degree view of Employee Satisfaction and Engagement. From conducting surveys to deep-dive analysis, we cover all aspects to understand the pulse of your workforce. This comprehensive approach ensures that our strategies address the root causes and result in sustained improvements.",
  },
  {
    title: "5. Employee-Centric Focus:",
    text: "Our approach revolves around putting your employees at the center. We believe that happy and engaged employees are the backbone of a successful business. Our strategies aim to create a positive work culture where employees thrive.",
  },
  {
    title: "6. Scalable Solutions:",
    text: "Whether you're a small startup or a large enterprise, our solutions are scalable. We can adapt our strategies to suit the size and unique needs of your business. No matter your scale, we've got you covered.",
  },
  {
    title: "7. Continuous Improvement:",
    text: "We don't stop at implementing strategies. We believe in continuous improvement. Our team works with you to monitor the impact of changes and make adjustments as needed. It's an ongoing process geared towards creating a workplace that evolves and grows with your business.",
  },
  {
    title: "8. Transparent Communication:",
    text: "Communication is key. We maintain transparent and open communication throughout our partnership. You'll always be in the loop, understanding the progress, challenges, and successes of your Employee Satisfaction and Engagement initiatives.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "How can improving Employee Satisfaction benefit my business in the UAE?",
    answer:
      "Happy employees tend to be more productive, contribute to a positive work culture, and are more likely to stay with your company, reducing turnover.",
  },
  {
    question: "How does Researchers.me measure Employee Satisfaction and Engagement?",
    answer:
      "We use a combination of surveys, feedback mechanisms, and in-depth analysis to measure and understand employee sentiments, allowing us to tailor improvement strategies.",
  },
  {
    question: "Can small businesses benefit from Employee Satisfaction and Engagement programs?",
    answer:
      "Absolutely. Our solutions are scalable and can be customized to fit the size and needs of any business, whether it's a startup or a large enterprise.",
  },
  {
    question: "How long does it take to see improvements in Employee Satisfaction after implementing changes?",
    answer:
      "The timeline for improvement varies, but businesses often start noticing positive changes within a few months of implementing strategies based on employee feedback.",
  },
  {
    question: "What makes Researchers.me's approach to Employee Satisfaction unique?",
    answer:
      "Our approach is rooted in local understanding, customized solutions, and a commitment to comprehensive improvement. We go beyond surface-level solutions, providing actionable strategies for lasting results.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function EmployeeSatisfactionEngagementPageContent() {
  return (
    <main className="pt-38 pb-20 text-slate-900">
      <Script id="employee-satisfaction-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <section className="px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-6 py-14 md:px-10 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Employee Satisfaction and Engagement
          </p>
          <h1 className="mt-4 max-w-4xl text-xl text-3xl font-semibold leading-tight md:text-5xl">
            EMPLOYEE SATISFACTION AND ENGAGEMENT
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
            Employee Satisfication Analysis in Dubai is important to good companies and organizations.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
            An engaged workforce influences every aspect of business operation and performance.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
            Positive employee engagement keeps employees happy, genuinely interested in the success of their work and
            company, and connected to the company's values, mission, and reputation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-emerald-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <article className="rounded-2xl border border-slate-200 bg-white p-2 lg:col-span-5 ">
            <img
              src="https://www.researchers.me/wp-content/uploads/2022/11/Loyalty-1024x683.jpg"
              alt="Customer Retention"
              className="h-full w-full rounded-xl object-cover"
            />
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-7 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Employee Satisfaction and Engagement lead to customer satisfaction.
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-800 md:text-base">It helps a business:</p>
            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Employee Satisfaction Survey in Dubai lead to better customer experience.
          </h2>
          <h3 className="mt-6 text-xl font-semibold md:text-2xl">Why Employee Satisfaction and Engagement in UAE?</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            Happy and engaged employees are the heart of any successful business in the UAE. Here's why focusing
            onEmployee Satisfaction Survey matters:
          </p>

          <div className="mt-5 space-y-4">
            {reasons.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-slate-900 md:text-base">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700 md:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
            Other benefits of employee engagement satisfaction and engagement include:
          </p>
          <ul className="mt-4 space-y-3">
            {extendedBenefits.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="space-y-7">
            {focusAreas.map((area) => (
              <article key={area.title}>
                <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Us as Best Customer Satisfaction Survey in Dubai?</h2>
          <div className="mt-6 space-y-4">
            {whyChooseUs.map((item) => (
              <article key={item.title}>
                <p className="text-sm font-semibold text-slate-900 md:text-base">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700 md:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold md:text-3xl">Choose Us for Your Customer Feedback Survey Dubai</h3>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Choosing Researchers.me means choosing a partner dedicated to enhancing your workplace, fostering employee
            satisfaction, and ultimately contributing to the success of your business.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
            Services at our company are crafted to empower your business endeavors in Dubai, UAE, and the wider Gulf
            Region.
          </p>
        </div>
      </section>

      <section className="mt-14 px-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Frequently Asked Questions on Employee Satisfaction and Engagement
          </h3>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 md:text-base">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
