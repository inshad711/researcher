import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="templateContainer py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="text-3xl font-semibold tracking-tight text-slate-900">Researchers</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                Turning market noise into strategic clarity for teams that want confident decisions.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for new projects
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Explore</p>
              <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-slate-600 transition hover:text-slate-900">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Connect</p>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>research@company.com</p>
                <p>+971 00 000 0000</p>
                <p>Dubai, UAE</p>
              </div>

              <div className="mt-5 flex items-center gap-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>Copyright {year} Researchers. All rights reserved.</p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-slate-800"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
