"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, X } from "lucide-react";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  needCall: string;
  startLocation: string;
};

const initialForm: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  needCall: "Yes",
  startLocation: "Any Part of UAE",
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
    <div className="relative space-y-2">
      <label className="ml-1 text-sm font-semibold text-slate-700">{label}</label>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-2 text-left outline-none transition focus:border-slate-400 focus:bg-white"
      >
        <span className="text-sm text-slate-900">{value}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <div className="fixed inset-0 z-[95]" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 z-[100] mt-2 max-h-60 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
            >
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(name, option);
                    setIsOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-50 hover:text-black"
                >
                  <span>{option}</span>
                  {value === option ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : null}
                </button>
              ))}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setNotification(null);
      setIsSending(false);
    }
  }, [isOpen]);

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
      onClose();
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
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/45 backdrop-blur-[2px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[95] flex items-start justify-center overflow-y-auto px-3 py-4 sm:items-center sm:px-4 sm:py-4"
          >
            <div className="relative w-full max-w-[500px] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2.5 shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:p-3 md:px-6 md:py-4">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 rounded-full cursor-pointer p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close consultation modal"
              >
                <X className="h-5 w-5" />
              </button>

              <form onSubmit={onSubmit} className="rounded-xl bg-white py-1">
                <h1 className="mb-4 text-2xl font-medium leading-tight text-slate-900 sm:mb-5 sm:text-[28px]">
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

                <div className="grid gap-2.5 sm:gap-3 md:grid-cols-2 md:gap-4">
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={form.fullName}
                      onChange={(e) => setField("fullName", e.target.value)}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-2 outline-none transition focus:border-slate-400 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-700">Work Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-2 outline-none transition focus:border-slate-400 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-700">Phone</label>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-2 outline-none transition focus:border-slate-400 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-semibold text-slate-700">Company (Optional)</label>
                    <input
                      type="text"
                      placeholder="Your company"
                      value={form.company}
                      onChange={(e) => setField("company", e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-2 outline-none transition focus:border-slate-400 focus:bg-white"
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
                </div>

                <div className="mt-4 space-y-2">
                  <label className="ml-1 text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you today?"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    required
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/30 px-4 py-2 outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-full text-[11px] leading-relaxed text-slate-400 sm:max-w-[190px]">
                    Your data is encrypted and secure under our privacy guidelines.
                  </p>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-black hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSending ? "Submitting..." : "Submit Request"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
