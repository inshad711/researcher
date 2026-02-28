"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  nationality: string;
  message: string;
  needCall: string;
  startLocation: string;
  contactTime: string;
};

const initialForm: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  nationality: "",
  message: "",
  needCall: "Yes",
  startLocation: "Any Part of UAE",
  contactTime: "Morning (9 AM - 12 PM)",
};

function CreativeSelect({
  label,
  options,
  name,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  name: keyof ContactFormState;
  value: string;
  onChange: (name: keyof ContactFormState, value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 text-left outline-none transition focus:border-slate-400 focus:bg-white"
      >
        <span className="text-sm text-slate-900">{value}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
            >
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(name, option);
                    setIsOpen(false);
                  }}
                  className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                  {option}
                  {value === option && <CheckCircle2 className="h-4 w-4 text-blue-600" />}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (notification?.type !== "success") return;
    const timer = window.setTimeout(() => setNotification(null), 3500);
    return () => window.clearTimeout(timer);
  }, [notification]);

  const setField = (name: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setNotification(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setForm(initialForm);
      setNotification({
        type: "success",
        message: "Thank you. Your request has been submitted successfully.",
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-[#fcfcfb] text-slate-900 pb-12 pt-32">
      <AnimatePresence>
        {notification?.type === "success" ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-slate-950/30 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="fixed left-1/2 top-1/2 z-[80] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-emerald-200 bg-white/95 p-6 text-center shadow-2xl"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <p className="text-lg font-semibold text-slate-900">Thank You</p>
              <p className="mt-1 text-sm text-slate-600">{notification.message}</p>
              <button
                type="button"
                onClick={() => setNotification(null)}
                className="mt-5 inline-flex rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Close
              </button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <section className="mx-auto max-w-6xl px-4">
        <header className="pt-5 pb-12 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-100 rounded-full">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-[38px] max-w-2xl mx-auto font-normal text-[#101010] leading-[42.2px] mb-5">
              Let&apos;s{" "}
              <span className="bg-[radial-gradient(circle_at_30%_50%,#D62872_0%,#F15A29_35%,#F6A623_60%,#2E9EE6_100%)] bg-clip-text text-transparent">
                Start
              </span>{" "}
              a Conversation.
            </h1>
            <p className=" font-sans max-w-xl mx-auto">
              Tell us about your requirements and our team will get back to you
              within 12 hours with a tailored solution.
            </p>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
          <aside className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 min-h-[600px] group/container">
            <div className="relative h-full w-full flex-grow">
              <Image
                src="/image/top-view-young-motivated-happy-hardworking-office-team-focused-one-issue-office-enviroment.webp"
                alt="Support team"
                fill
                className="object-cover transition-transform duration-1000 group-hover/container:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80" />

              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md border border-white/20">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Regional Support • 24/7
                  </span>
                </div>

                <div className="space-y-4 max-w-xs">
                  <h3 className="text-2xl font-semibold text-white mb-6">Get in touch</h3>

                  <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Us</p>
                      <p className="text-sm font-medium text-white">contact@yourdomain.com</p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call Support</p>
                      <p className="text-sm font-medium text-white">+971 00 000 0000</p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Our Presence</p>
                      <p className="text-sm font-medium text-white">UAE & Oman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="flex flex-col">
            <form onSubmit={onSubmit} className="h-full rounded-xl md:rounded-[1rem] border border-slate-200 bg-white py-6 px-4 md:p-10">
              <h1 className="text-3xl md:text-3xl font-medium mb-8 leading-tight text-slate-900">
                <span className="text-blue-900">Connect With Us</span>
              </h1>

              <AnimatePresence>
                {notification?.type === "error" ? (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {notification.message}
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="grid gap-2 md:gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Company (Optional)</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <CreativeSelect
                  label="Need Call"
                  options={["Yes", "No"]}
                  name="needCall"
                  value={form.needCall}
                  onChange={setField}
                />
                <CreativeSelect
                  label="I want to start in?"
                  options={[
                    "Any Part of UAE",
                    "Dubai",
                    "Sharjah",
                    "Abu Dhabi",
                    "Ajman",
                    "Ras Al Khaimah",
                    "Umm Al Quwain",
                    "Oman",
                  ]}
                  name="startLocation"
                  value={form.startLocation}
                  onChange={setField}
                />

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Nationality</label>
                  <input
                    type="text"
                    placeholder="Your Nationality"
                    value={form.nationality}
                    onChange={(e) => setField("nationality", e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>
                <CreativeSelect
                  label="When Contact Time"
                  options={["Morning (9 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 7 PM)", "Anytime"]}
                  name="contactTime"
                  value={form.contactTime}
                  onChange={setField}
                />
              </div>

              <div className="mt-5 space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you today?"
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  required
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-3.5 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-relaxed text-slate-400 max-w-[200px]">
                  Your data is encrypted and secure under our privacy guidelines.
                </p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-xl active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Submitting..." : "Submit Request"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>

      <section className="mt-10">
        <div className="overflow-hidden border border-slate-200 bg-white">
          <iframe
            title="Company location map"
            src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
            className="h-[350px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
