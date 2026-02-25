import { CLIENT_LOGOS } from "@/data/clientLogos";

export default function ClientsPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-black text-3xl md:text-5xl font-normal">Our Clients</h1>
          <p className="text-gray-600 text-base md:text-lg">
            We are proud to partner and service clients from several industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="border border-gray-200 rounded-md bg-white p-6 h-28 md:h-32 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
