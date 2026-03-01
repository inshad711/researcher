"use client";

import React, { useEffect, useLayoutEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronRight, ArrowLeft, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesMenu, type ServiceMenuItem } from "@/data/servicesMenu";
import ConsultationModal from "@/components/ConsultationModal";

function isPathActive(pathname: string, href?: string) {
  if (!href) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasActiveDescendant(pathname: string, items?: ServiceMenuItem[]): boolean {
  if (!items?.length) return false;
  return items.some((item): boolean => isPathActive(pathname, item.href) || hasActiveDescendant(pathname, item.children));
}


// ─── Desktop: recursive nested flyout panel ───────────────────────────────────
// Each level is a floating panel. Sub-panels open on hover.
// useLayoutEffect flips the panel left if it would overflow the right viewport edge.
function DesktopPanel({
  items,
  depth = 0,
  onClose,
  pathname,
}: {
  items: ServiceMenuItem[];
  depth?: number;
  onClose: () => void;
  pathname: string;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const el = ulRef.current;
    if (!el) return;
    // Reset to default so measurement is accurate
    el.style.left = depth === 0 ? "0" : "";
    el.style.right = "";
    el.style.marginLeft = "";
    el.style.marginRight = "";
    el.style.transform = "";

    const rect = el.getBoundingClientRect();
    const overflow = rect.right - (window.innerWidth - 12);
    if (overflow > 0) {
      if (depth === 0) {
        // Shift the root panel left just enough
        el.style.left = `${Math.max(-overflow, -rect.left + 12)}px`;
      } else {
        // Fly sub-panels out to the LEFT instead
        el.style.left = "auto";
        el.style.right = "100%";
        el.style.marginLeft = "0";
        el.style.marginRight = "4px";
      }
    }

    const adjustedRect = el.getBoundingClientRect();
    const overflowBottom = adjustedRect.bottom - (window.innerHeight - 12);
    if (overflowBottom > 0) {
      const maxShiftUp = Math.max(0, adjustedRect.top - 12);
      const shiftUp = Math.min(overflowBottom, maxShiftUp);
      if (shiftUp > 0) {
        // Keep lower flyouts inside viewport so last items do not get clipped.
        el.style.transform = `translateY(-${shiftUp}px)`;
      }
    }
  });

  const shadow = "shadow-[0_8px_32px_-4px_rgba(15,23,42,0.15)]";
  const panelCls =
    depth === 0
      ? `absolute top-full left-0 z-[70] mt-2 min-w-[260px] rounded-2xl border border-slate-100 bg-white p-1.5 ${shadow}`
      : `absolute top-0 left-full z-[75] min-w-[240px] rounded-2xl border border-slate-100 bg-white p-1.5 ${shadow}`;
  const activeChildIndex = items.findIndex((item) => {
    if (!item.children?.length) return false;
    return isPathActive(pathname, item.href) || hasActiveDescendant(pathname, item.children);
  });
  const openChildIndex = hoveredIdx ?? (activeChildIndex >= 0 ? activeChildIndex : null);

  return (
    <ul ref={ulRef} className={panelCls}>
      {items.map((item, i) => {
        const name = item.name.replace(/\s+/g, " ").trim();
        const hasChildren = Boolean(item.children?.length);
        const isItemActive = isPathActive(pathname, item.href);
        const hasActiveChild = hasActiveDescendant(pathname, item.children);
        const isBranchActive = isItemActive || hasActiveChild;
        const rowCls = isBranchActive
          ? "bg-slate-100"
          : "hover:bg-slate-50";
        const textCls = isBranchActive ? "text-slate-900 font-medium" : "text-slate-700";

        return (
          <li
            key={name}
            className="relative"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className={`flex items-center rounded-xl transition-colors ${rowCls}`}>
              {item.href ? (
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={onClose}
                  className={`block flex-1 px-3.5 py-2.5 text-sm leading-snug ${textCls}`}
                >
                  {name}
                </Link>
              ) : (
                <span className={`block flex-1 px-3.5 py-2.5 text-sm leading-snug ${textCls}`}>
                  {name}
                </span>
              )}
              {hasChildren && (
                <ChevronRight
                  className={`mr-2.5 h-3.5 w-3.5 shrink-0 ${
                    isBranchActive ? "text-slate-700" : "text-slate-400"
                  }`}
                />
              )}
            </div>
            {hasChildren && openChildIndex === i && (
              <DesktopPanel items={item.children!} depth={depth + 1} onClose={onClose} pathname={pathname} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

// ─── Mobile: slide-in animation wrapper ──────────────────────────────────────
// Mounts slightly off-position then transitions to 0, giving a slide-in effect.
// `dir` controls whether it enters from the right (forward) or left (back).
function SlidePanel({
  dir,
  children,
}: {
  dir: "fwd" | "back";
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      style={{
        transform: ready ? "translateX(0)" : dir === "fwd" ? "translateX(52px)" : "translateX(-52px)",
        opacity: ready ? 1 : 0,
        transition: "transform 230ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 200ms ease",
      }}
    >
      {children}
    </div>
  );
}

// ─── Mobile: stack-based drill-down with slide + back button ─────────────────
// Mounted fresh each time the Services accordion opens, so stack always resets.
function MobileDrillDown({ onClose }: { onClose: () => void }) {
  const [stack, setStack] = useState<{ title: string; items: ServiceMenuItem[] }[]>([]);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [panelKey, setPanelKey] = useState(0);

  const currentItems = stack.length > 0 ? stack[stack.length - 1].items : servicesMenu;
  const currentTitle = stack.length > 0 ? stack[stack.length - 1].title : null;

  const drillInto = (item: ServiceMenuItem) => {
    if (!item.children?.length) return;
    setDir("fwd");
    setPanelKey((k) => k + 1);
    setStack((prev) => [
      ...prev,
      { title: item.name.replace(/\s+/g, " ").trim(), items: item.children! },
    ]);
  };

  const goBack = () => {
    setDir("back");
    setPanelKey((k) => k + 1);
    setStack((prev) => prev.slice(0, -1));
  };

  return (
    <div className="overflow-hidden">
      <SlidePanel key={panelKey} dir={dir}>
        <div className="pb-3">

          {/* ── Back button + current section title ── */}
          {currentTitle ? (
            <div className="mb-3 flex items-center gap-3 border-b border-slate-200 pb-3">
              <button
                type="button"
                onClick={goBack}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200"
                aria-label="Go back"
              >
                <ArrowLeft className="h-4 w-4 text-slate-900" />
              </button>
              <span className="truncate text-sm font-semibold text-slate-900">{currentTitle}</span>
            </div>
          ) : null}

          {/* ── Items for the current level ── */}
          <ul className="space-y-1">
            {currentItems.map((item) => {
              const name = item.name.replace(/\s+/g, " ").trim();
              const hasChildren = Boolean(item.children?.length);

              // Items WITH children → entire row is a drill-down button
              if (hasChildren) {
                return (
                  <li key={name}>
                    <button
                      type="button"
                      onClick={() => drillInto(item)}
                      className="group flex w-full items-center justify-between gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-slate-100"
                    >
                      <span className="flex-1 text-sm leading-snug text-slate-800">{name}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-slate-700" />
                    </button>
                  </li>
                );
              }

              // Items WITHOUT children → plain link (leaf node)
              return (
                <li key={name}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={onClose}
                      className="block rounded-xl px-2 py-2.5 text-sm leading-snug text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                      {name}
                    </Link>
                  ) : (
                    <span className="block px-2 py-2.5 text-sm leading-snug text-slate-500">
                      {name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

        </div>
      </SlidePanel>
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isServicesRoute = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    if (!isHomePage) { setScrolled(false); return; }
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [isHomePage]);

  // Close mobile services accordion when mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) setIsMobileServicesOpen(false);
  }, [isMenuOpen]);

  // Prevent background page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen && !isConsultationOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen, isConsultationOpen]);

  const clearCloseTimer = useCallback(() => {
    if (!closeTimerRef.current) return;
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  const closeServices = useCallback(() => {
    clearCloseTimer();
    setIsServicesOpen(false);
  }, [clearCloseTimer]);

  const openServices = useCallback(() => {
    clearCloseTimer();
    setIsServicesOpen(true);
  }, [clearCloseTimer]);

  const scheduleCloseServices = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      closeTimerRef.current = null;
    }, 120);
  }, [clearCloseTimer]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  // Click-outside closes the desktop dropdown
  useEffect(() => {
    if (!isServicesOpen) return;
    const handler = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) closeServices();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isServicesOpen, closeServices]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isLightBg = !isHomePage || scrolled || isMenuOpen;
  const linkCls = `text-md font-medium transition-colors ${
    isLightBg ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
  }`;
  const activeLinkCls = isLightBg ? "text-black font-semibold" : "text-white font-semibold";
  const linkClassFor = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
    return `${linkCls} ${isActive ? activeLinkCls : ""}`.trim();
  };

  const closeMobileMenu = () => setIsMenuOpen(false);
  const openConsultation = () => {
    closeServices();
    setIsMenuOpen(false);
    setIsConsultationOpen(true);
  };
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-1.5 ${
        isLightBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* ── Main row ──────────────────────────────────────────────── */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between">

        {/* Logo */}
        <div className="flex h-full shrink-0 items-center">
          <Link href="/" onClick={closeServices}>
            <Image
              src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"
              alt="Researcher Logo"
              width={150}
              height={100}
              className={`transition-all duration-300 ${
                isLightBg ? "invert-0 brightness-100" : "invert brightness-0"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Desktop nav pill */}
        <nav
          className={`hidden lg:flex items-center px-10 py-2.5 rounded-full border transition-all duration-300 ${
            isLightBg
              ? "bg-gray-100 border-gray-200"
              : "bg-white/5 border-white/10 backdrop-blur-md"
          }`}
        >
          <ul className="flex h-full items-center space-x-7">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={linkClassFor(link.href)} onClick={closeServices}>
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Services — nested dropdown lives inside this <li> */}
            <li
              ref={servicesRef}
              className="relative flex h-full items-center after:absolute after:left-0 after:right-0 after:top-full after:h-2 after:content-['']"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/services"
                  className={`${linkCls} ${isServicesRoute ? activeLinkCls : ""}`.trim()}
                  onClick={closeServices}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((p) => !p)}
                  className={`${linkCls} ${isServicesRoute ? activeLinkCls : ""}`.trim()}
                  aria-label="Toggle services menu"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Nested flyout — self-contained, overflow-safe */}
              {isServicesOpen && (
                <DesktopPanel items={servicesMenu} onClose={closeServices} pathname={pathname} />
              )}
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={linkClassFor(link.href)} onClick={closeServices}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex h-full items-center space-x-4">
          <button
            type="button"
            onClick={openConsultation}
            className={`hidden cursor-pointer sm:block px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              isLightBg
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Book a consultation
          </button>
          <button
            className={`lg:hidden p-2 ${isLightBg ? "text-black" : "text-white"}`}
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu (accordion) ────────────────────────────────── */}

      <div
        className={`fixed left-0 top-[76px] h-[calc(100dvh-76px)] w-full overflow-y-auto border-t border-slate-200 bg-white px-5 py-4 transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
          <ul className="space-y-1">

            {/* Nav links before Services */}
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name} className="border-b border-slate-200 last:border-0">
                <Link
                  href={link.href}
                  className="block py-3.5 text-lg font-medium text-slate-900"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Services accordion */}
            <li className="border-b border-slate-200">
              <div className="flex w-full items-center justify-between py-3.5">
                <Link
                  href="/services"
                  className="text-lg font-medium text-slate-900"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((p) => !p)}
                  className="text-slate-700"
                  aria-label="Toggle services menu"
                  aria-expanded={isMobileServicesOpen}
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isMobileServicesOpen && (
                <MobileDrillDown onClose={closeMobileMenu} />
              )}
            </li>

            {/* Nav links after Services */}
            {navLinks.slice(2).map((link) => (
              <li key={link.name} className="border-b border-slate-200 last:border-0">
                <Link
                  href={link.href}
                  className="block py-3.5 text-lg font-medium text-slate-900"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="pt-4">
              <button
                type="button"
                onClick={openConsultation}
                className="w-full rounded-full bg-black py-4 text-md font-bold text-white"
              >
                Book a consultation
              </button>
            </li>
          </ul>
      </div>
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
    </header>
  );
};

export default Header2;
