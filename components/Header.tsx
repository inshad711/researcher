"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Megaphone,
  BriefcaseBusiness,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface DropdownItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  tone: string;
  insight: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isDropdownOpen) setActiveIndex(0);
  }, [isDropdownOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isContactModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsContactModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isContactModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const dropdownItems: DropdownItem[] = [
    {
      title: 'Market Intelligence',
      description: 'Competitive, industry, and market insight services.',
      icon: <BarChart3 className="h-5 w-5 text-slate-700" />,
      href: '/services',
      tone: 'from-amber-100 to-amber-50',
      insight: 'Track market shifts before competitors react.',
    },
    {
      title: 'Communication Research',
      description: 'Brand and media effectiveness research.',
      icon: <Megaphone className="h-5 w-5 text-slate-700" />,
      href: '/services',
      tone: 'from-sky-100 to-cyan-50',
      insight: 'Measure how messaging lands across channels.',
    },
    {
      title: 'Marketing Consulting',
      description: 'Strategy and advisory for growth-focused teams.',
      icon: <BriefcaseBusiness className="h-5 w-5 text-slate-700" />,
      href: '/services',
      tone: 'from-emerald-100 to-lime-50',
      insight: 'Turn insight into execution-ready growth plans.',
    },
  ];

  const activeItem = dropdownItems[activeIndex];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="flex h-20 items-center justify-between">
          {/* <div className="group flex flex-shrink-0 cursor-pointer items-center gap-2">
            <Link href="/" className="relative flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M7 4L4 20" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 4L9 20" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <circle cx="13" cy="18" r="3" fill="#EF4444" />
              </svg>

              <span className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-red-500 sm:text-2xl">
                Researcher
              </span>
            </Link>
          </div> */}

          <div className="group flex flex-shrink-0 cursor-pointer items-center">
  <Link href="/" className="relative flex items-center">
    
    <Image
      src="/logo/13fb5d9e-e6b4-453a-974c-2ea5bdee18c2.png"   // put your logo inside public folder
      alt="Researcher Logo"
      width={150}
      height={100}
      className=""
      priority
    />

  </Link>
</div>

          <nav className="hidden h-full items-center space-x-7 md:flex">
            <Link href="/about" className="text-base font-semibold text-gray-700 transition-colors hover:text-black">
              About us
            </Link>

            <div
              className="relative flex h-full items-center"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`group flex cursor-pointer items-center gap-1 text-base font-semibold transition-colors ${
                  isDropdownOpen ? 'text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-3 w-[38rem] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.45)]">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Explore Services</p>
                    <Link href="/services" className="text-xs font-semibold text-slate-500 transition hover:text-slate-800">
                      View all
                    </Link>
                  </div>

                  <div className="grid grid-cols-5 gap-0">
                    <div className="col-span-2 border-r border-slate-100 p-4">
                      <div className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${activeItem.tone} p-4`}>
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow-sm">
                          {activeItem.icon}
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Live Preview</p>
                        <h4 className="mt-2 text-lg font-bold text-slate-900">{activeItem.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{activeItem.insight}</p>
                        <Link
                          href={activeItem.href}
                          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-800 transition hover:gap-2"
                        >
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-3 p-3">
                      <div className="space-y-1">
                        {dropdownItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={`group/item flex items-start gap-3 rounded-2xl p-3 transition-all duration-200 ${
                              activeIndex === idx ? 'bg-slate-100' : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone}`}>
                              {item.icon}
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-semibold text-slate-900">{item.title}</h4>
                              <p className="mt-1 text-sm leading-tight text-slate-500">{item.description}</p>
                            </div>
                            <ArrowRight className="mt-1 h-4 w-4 text-slate-400 opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="text-base font-semibold text-gray-700 transition-colors hover:text-black">
              Projects
            </Link>
            <Link href="/blog" className="text-base font-semibold text-gray-700 transition-colors hover:text-black">
              Blog
            </Link>
               <Link href="/contact" className="text-base font-semibold text-gray-700 transition-colors hover:text-black">
             Contact Us
            </Link>
          </nav>

          {/* <div className="hidden md:block">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 text-white transition-all hover:bg-zinc-800 active:scale-95"
            >
              <span className="text-sm font-semibold">Get Quotes</span>
              <div className="rounded-full border border-zinc-700 bg-zinc-800 p-1.5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div> */}
          <div className="hidden md:block">
  <button
    onClick={() => setIsContactModalOpen(true)}
    className="group flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#ff4d4d,#b336cc,#29abe2,#00ffc3)] py-2 pl-6 pr-2 text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
  >
    <span className="text-sm font-semibold">Get Quotes</span>
    {/* The inner icon circle has a slight blur/glass effect to look better against the gradient */}
    <div className="rounded-full border border-white/20 bg-black/20 p-1.5 backdrop-blur-sm transition-transform group-hover:translate-x-0.5">
      <ArrowRight className="h-4 w-4" />
    </div>
  </button>
</div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-md p-2 text-gray-600 transition hover:bg-gray-100 ${
                isMenuOpen ? 'invisible pointer-events-none' : ''
              }`}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/35 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobileMenu}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[86%] max-w-sm border-r border-gray-200 bg-white transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-4">
          <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 4L4 20" stroke="black" strokeWidth="3" strokeLinecap="round" />
              <path d="M12 4L9 20" stroke="black" strokeWidth="3" strokeLinecap="round" />
              <circle cx="13" cy="18" r="3" fill="#EF4444" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-900">Researcher</span>
          </Link>

          <button
            onClick={closeMobileMenu}
            className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 pb-6 pt-3">
          <div className="space-y-1">
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              About us
            </Link>

            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold text-gray-800 transition hover:bg-gray-50"
              aria-expanded={isMobileServicesOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMobileServicesOpen && (
              <div className="space-y-2 pb-2 pl-2">
                {dropdownItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-gray-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/projects"
              onClick={closeMobileMenu}
              className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              Projects
            </Link>

            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className="block rounded-xl px-3 py-3 text-base font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              Blog
            </Link>
          </div>

          <div className="mt-4 border-t border-gray-100 pt-4">
            <button
              onClick={() => {
                closeMobileMenu();
                setIsContactModalOpen(true);
              }}
              className="flex w-full items-center justify-between rounded-full bg-black px-6 py-3 text-white"
            >
              <span className="font-bold">Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute right-3 top-3 rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              aria-label="Close contact modal"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Contact Us</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Tell us about your project</h3>
            <p className="mt-2 text-sm text-slate-600">
              Share your requirements and we will follow up with the right research approach.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
              <textarea
                rows={4}
                placeholder="What do you need help with?"
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-zinc-800"
              >
                Send Inquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
