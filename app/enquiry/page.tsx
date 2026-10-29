"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FormProvider } from "@/components/form-context";
import {
  Clock,
  Lock,
  ArrowRight,
  Check,
  Landmark,
  BarChart3,
  Factory,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Building,
} from "lucide-react";
import { useState, useId } from "react";
import Link from "next/link";

interface FormData {
  // 01 Contact details
  fullName: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
  website: string;

  // 02 Business profile
  industry: string;
  headOffice: string;
  revenue: string;
  organisationType: string;
  employees: string;

  // 03 How can QAP help
  advisoryAreas: string[];
  challenge: string;
  timeline: string;
  fundingRequirement: string;
  referral: string;

  // 04 Consent
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  designation: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  industry: "Manufacturing",
  headOffice: "",
  revenue: "₹25–100 crore",
  organisationType: "Privately held / promoter-led",
  employees: "51–200",
  advisoryAreas: [],
  challenge: "",
  timeline: "Within 1–3 months",
  fundingRequirement: "",
  referral: "",
  consent: false,
};

const industries = [
  "Manufacturing",
  "Energy & Infrastructure",
  "Real Estate",
  "Healthcare",
  "Technology & SaaS",
  "Retail & Consumer",
  "Logistics",
  "Financial Services",
  "Other",
];

const revenueOptions = [
  "Below ₹25 crore",
  "₹25–100 crore",
  "₹100–250 crore",
  "₹250–500 crore",
  "Above ₹500 crore",
  "Pre-revenue / early-stage",
  "Prefer not to disclose",
];

const organisationTypes = [
  "Privately held / promoter-led",
  "Family-owned business",
  "Private equity / investor-backed",
  "Publicly listed company",
  "Startup / early-stage venture",
  "Other",
];

const employeeRanges = ["1–10", "11–50", "51–200", "201–500", "Above 500"];

const advisoryCards = [
  {
    id: "capital",
    title: "Capital Structure & Debt Advisory",
    desc: "Debt restructuring, refinancing, capital raising, funding strategy and investment readiness",
    icon: Landmark,
    tint: "bg-[#E0EAFF] text-[#1D4ED8]",
  },
  {
    id: "cfo",
    title: "CFO & Governance",
    desc: "Financial planning, management reporting, cash-flow visibility, dashboards and governance",
    icon: BarChart3,
    tint: "bg-[#DDF5F0] text-[#0F766E]",
  },
  {
    id: "operations",
    title: "Operations & Supply Chain",
    desc: "Working capital, procurement, margins, operational efficiency and value creation",
    icon: Factory,
    tint: "bg-[#FFF1D6] text-[#B45309]",
  },
  {
    id: "regulatory",
    title: "Government & Regulatory",
    desc: "Government incentives, subsidies, policy benefits and regulatory considerations",
    icon: ShieldCheck,
    tint: "bg-[#EAE4FF] text-[#6D28D9]",
  },
];

const timelineOptions = [
  "Immediately",
  "Within 1–3 months",
  "Within 3–6 months",
  "Just exploring options",
];

const referralOptions = [
  "Select an option",
  "Google search",
  "LinkedIn",
  "Referral / Word of mouth",
  "Industry event / Conference",
  "WhatsApp",
  "Other",
];

export default function EnquiryPage() {
  const [data, setData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAdvisory = (title: string) => {
    setData((prev) => {
      const exists = prev.advisoryAreas.includes(title);
      return {
        ...prev,
        advisoryAreas: exists
          ? prev.advisoryAreas.filter((item) => item !== title)
          : [...prev.advisoryAreas, title],
      };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!data.designation.trim()) newErrors.designation = "Designation is required";
    if (!data.company.trim()) newErrors.company = "Company name is required";
    if (!data.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.phone.trim()) newErrors.phone = "Phone number is required";
    if (!data.industry) newErrors.industry = "Industry / sector is required";
    if (!data.headOffice.trim())
      newErrors.headOffice = "Head office location is required";
    if (!data.revenue) newErrors.revenue = "Please select annual revenue range";
    if (!data.challenge.trim())
      newErrors.challenge = "Please describe your key business challenge";
    if (!data.consent)
      newErrors.consent = "Please confirm your consent to proceed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstErr = document.querySelector("[data-error='true']");
      if (firstErr) {
        firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    console.log("Enquiry submitted:", data);
    window.location.href = "/?submitted=true#conversation";
  };

  return (
    <FormProvider>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <Header />

        <main className="flex-1 py-10 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {isSubmitted ? (
              <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-8 sm:p-14 shadow-soft text-center reveal">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DDF5F0]">
                  <CheckCircle2 className="w-10 h-10 text-[#16A34A]" />
                </div>
                <span className="mt-6 inline-block rounded-full bg-[#E0EAFF] px-3.5 py-1 text-[13px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                  Enquiry Received
                </span>
                <h1 className="mt-3 text-[30px] sm:text-[38px] font-bold font-display text-[#0B1F3A]">
                  Thank you, {data.fullName}.
                </h1>
                <p className="mt-3 text-[16px] sm:text-[18px] text-[#4A5568] max-w-xl mx-auto leading-relaxed">
                  We have received your enquiry for <strong>{data.company}</strong>. Our advisory team will review your business requirements and get back to you within 1 business day.
                </p>

                <div className="mt-8 mx-auto max-w-lg rounded-2xl border border-[#E3E8F0] bg-[#F8FAFC] p-6 text-left">
                  <h3 className="text-[14px] font-bold uppercase tracking-wide text-[#94A3B8] mb-3">
                    Enquiry Summary
                  </h3>
                  <div className="space-y-2 text-[14px]">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Contact:</span>
                      <span className="font-semibold text-[#0B1F3A]">{data.fullName} ({data.designation})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Email:</span>
                      <span className="font-semibold text-[#0B1F3A]">{data.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Industry:</span>
                      <span className="font-semibold text-[#0B1F3A]">{data.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Annual Revenue:</span>
                      <span className="font-semibold text-[#0B1F3A]">{data.revenue}</span>
                    </div>
                    {data.advisoryAreas.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-[#64748B]">Advisory Areas:</span>
                        <span className="font-semibold text-[#1D4ED8] text-right">
                          {data.advisoryAreas.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#1D4ED8] px-7 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
                  >
                    Return to Homepage
                  </Link>
                  <a
                    href="https://wa.me/919996307143?text=Hello%20Quantum%20Advisory%20Partners%2C%20I%20just%20submitted%20an%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#E3E8F0] bg-white px-7 py-3.5 text-[16px] font-semibold text-[#0B1F3A] hover:bg-[#F8FAFC] transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-6 sm:p-10 lg:p-12 shadow-soft">
                {/* Form Top Header */}
                <div>
                  <span className="inline-block rounded-full bg-[#E0EAFF] px-3.5 py-1 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Prospective Client Enquiry
                  </span>
                  <h1 className="mt-3 font-display text-[28px] sm:text-[38px] font-extrabold leading-tight text-[#0B1F3A]">
                    Let's understand your business.
                  </h1>
                  <p className="mt-2.5 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
                    Tell us a little about your business and the challenges you want to address. Our team will review your requirements and determine how QAP may be able to help.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] text-[#1D4ED8] font-medium">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#EEF4FF] px-3.5 py-1.5">
                      <Clock className="w-4 h-4 text-[#1D4ED8]" /> Approx. 3–5 minutes
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-[#EEF4FF] px-3.5 py-1.5">
                      <Lock className="w-4 h-4 text-[#1D4ED8]" /> Your information is treated confidentially
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-12">
                  {/* ============================================================ */}
                  {/* SECTION 01: Your contact details */}
                  {/* ============================================================ */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D4ED8] text-white text-[13px] font-bold">
                        01
                      </span>
                      <h2 className="text-[20px] sm:text-[22px] font-bold font-display text-[#0B1F3A]">
                        Your contact details
                      </h2>
                    </div>
                    <p className="mt-1 text-[14px] text-[#64748B] ml-10">
                      Who should we contact about this enquiry?
                    </p>

                    <div className="mt-6 grid sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div data-error={!!errors.fullName}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Full name <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <input
                          type="text"
                          value={data.fullName}
                          placeholder="Your full name"
                          onChange={(e) => {
                            setData({ ...data, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.fullName ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Designation */}
                      <div data-error={!!errors.designation}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Designation <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <input
                          type="text"
                          value={data.designation}
                          placeholder="e.g. Managing Director"
                          onChange={(e) => {
                            setData({ ...data, designation: e.target.value });
                            if (errors.designation) setErrors({ ...errors, designation: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.designation ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition`}
                        />
                        {errors.designation && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.designation}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div data-error={!!errors.company}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Company / organisation <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <input
                          type="text"
                          value={data.company}
                          placeholder="Business name"
                          onChange={(e) => {
                            setData({ ...data, company: e.target.value });
                            if (errors.company) setErrors({ ...errors, company: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.company ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition`}
                        />
                        {errors.company && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.company}</p>
                        )}
                      </div>

                      {/* Business Email */}
                      <div data-error={!!errors.email}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Business email <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <input
                          type="email"
                          value={data.email}
                          placeholder="name@company.com"
                          onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.email ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div data-error={!!errors.phone}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Phone number <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={data.phone}
                          placeholder="+91 ..."
                          onChange={(e) => {
                            setData({ ...data, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.phone}</p>
                        )}
                      </div>

                      {/* Website */}
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Company website
                        </label>
                        <input
                          type="text"
                          value={data.website}
                          placeholder="https://..."
                          onChange={(e) => setData({ ...data, website: e.target.value })}
                          className="w-full rounded-xl border border-[#E3E8F0] bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ============================================================ */}
                  {/* SECTION 02: Business profile */}
                  {/* ============================================================ */}
                  <div className="pt-8 border-t border-[#E3E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D4ED8] text-white text-[13px] font-bold">
                        02
                      </span>
                      <h2 className="text-[20px] sm:text-[22px] font-bold font-display text-[#0B1F3A]">
                        Business profile
                      </h2>
                    </div>
                    <p className="mt-1 text-[14px] text-[#64748B] ml-10">
                      This helps us understand the scale and nature of your business.
                    </p>

                    <div className="mt-6 space-y-6">
                      {/* Industry Dropdown */}
                      <div data-error={!!errors.industry}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Industry / sector <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={data.industry}
                            onChange={(e) => {
                              setData({ ...data, industry: e.target.value });
                              if (errors.industry) setErrors({ ...errors, industry: "" });
                            }}
                            className="w-full appearance-none rounded-xl border border-[#E3E8F0] bg-white px-4 py-3 text-[15px] text-[#0B1F3A] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition pr-10 cursor-pointer"
                          >
                            {industries.map((ind) => (
                              <option key={ind} value={ind}>
                                {ind}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        </div>
                      </div>

                      {/* Head Office Location */}
                      <div data-error={!!errors.headOffice}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Head office / primary business location <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <input
                          type="text"
                          value={data.headOffice}
                          placeholder="City, State, Country"
                          onChange={(e) => {
                            setData({ ...data, headOffice: e.target.value });
                            if (errors.headOffice) setErrors({ ...errors, headOffice: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.headOffice ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition`}
                        />
                        {errors.headOffice && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.headOffice}</p>
                        )}
                      </div>

                      {/* Annual revenue (radios) */}
                      <div data-error={!!errors.revenue}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-2.5">
                          Annual revenue <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <div className="space-y-2">
                          {revenueOptions.map((opt) => {
                            const selected = data.revenue === opt;
                            return (
                              <label
                                key={opt}
                                onClick={() => {
                                  setData({ ...data, revenue: opt });
                                  if (errors.revenue) setErrors({ ...errors, revenue: "" });
                                }}
                                className="group flex items-center gap-3 cursor-pointer py-1.5"
                              >
                                <div
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                                    selected
                                      ? "border-[#1D4ED8] bg-[#1D4ED8]"
                                      : "border-[#CBD5E1] group-hover:border-[#94A3B8]"
                                  }`}
                                >
                                  {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                                </div>
                                <span className={`text-[15px] ${selected ? "font-semibold text-[#0B1F3A]" : "text-[#4A5568]"}`}>
                                  {opt}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Organisation type (radios) */}
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-2.5">
                          Organisation type
                        </label>
                        <div className="space-y-2">
                          {organisationTypes.map((opt) => {
                            const selected = data.organisationType === opt;
                            return (
                              <label
                                key={opt}
                                onClick={() => setData({ ...data, organisationType: opt })}
                                className="group flex items-center gap-3 cursor-pointer py-1.5"
                              >
                                <div
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                                    selected
                                      ? "border-[#1D4ED8] bg-[#1D4ED8]"
                                      : "border-[#CBD5E1] group-hover:border-[#94A3B8]"
                                  }`}
                                >
                                  {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                                </div>
                                <span className={`text-[15px] ${selected ? "font-semibold text-[#0B1F3A]" : "text-[#4A5568]"}`}>
                                  {opt}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Number of employees (radios) */}
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-2.5">
                          Number of employees
                        </label>
                        <div className="space-y-2">
                          {employeeRanges.map((opt) => {
                            const selected = data.employees === opt;
                            return (
                              <label
                                key={opt}
                                onClick={() => setData({ ...data, employees: opt })}
                                className="group flex items-center gap-3 cursor-pointer py-1.5"
                              >
                                <div
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                                    selected
                                      ? "border-[#1D4ED8] bg-[#1D4ED8]"
                                      : "border-[#CBD5E1] group-hover:border-[#94A3B8]"
                                  }`}
                                >
                                  {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                                </div>
                                <span className={`text-[15px] ${selected ? "font-semibold text-[#0B1F3A]" : "text-[#4A5568]"}`}>
                                  {opt}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ============================================================ */}
                  {/* SECTION 03: How can QAP help? */}
                  {/* ============================================================ */}
                  <div className="pt-8 border-t border-[#E3E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D4ED8] text-white text-[13px] font-bold">
                        03
                      </span>
                      <h2 className="text-[20px] sm:text-[22px] font-bold font-display text-[#0B1F3A]">
                        How can QAP help?
                      </h2>
                    </div>
                    <p className="mt-1 text-[14px] text-[#64748B] ml-10">
                      Select all the advisory areas relevant to your business.
                    </p>

                    {/* Advisory Cards (Selectable) */}
                    <div className="mt-6 space-y-3">
                      {advisoryCards.map((card) => {
                        const Icon = card.icon;
                        const isSelected = data.advisoryAreas.includes(card.title);
                        return (
                          <div
                            key={card.id}
                            onClick={() => toggleAdvisory(card.title)}
                            className={`group flex items-start justify-between gap-4 rounded-2xl border p-4 sm:p-5 transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#1D4ED8] bg-[#EEF4FF]/50 shadow-soft"
                                : "border-[#E3E8F0] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFC]"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <span
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${card.tint}`}
                              >
                                <Icon className="w-5 h-5" />
                              </span>
                              <div>
                                <h3 className="text-[16px] sm:text-[17px] font-bold font-display text-[#0B1F3A]">
                                  {card.title}
                                </h3>
                                <p className="mt-1 text-[13px] sm:text-[14px] text-[#4A5568] leading-relaxed">
                                  {card.desc}
                                </p>
                              </div>
                            </div>
                            <div className="shrink-0 mt-1">
                              <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full border transition ${
                                  isSelected
                                    ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                                    : "border-[#CBD5E1] bg-white group-hover:border-[#94A3B8]"
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5" />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <p className="mt-3 text-[13px] text-[#64748B] font-medium">
                      {data.advisoryAreas.length} advisory area(s) selected
                    </p>

                    <div className="mt-6 space-y-6">
                      {/* Key Challenge Textarea */}
                      <div data-error={!!errors.challenge}>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Describe your key business challenge <span className="text-[#1D4ED8]">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={data.challenge}
                          placeholder="Briefly describe the situation, the support you need, or the outcome you want to achieve..."
                          onChange={(e) => {
                            setData({ ...data, challenge: e.target.value });
                            if (errors.challenge) setErrors({ ...errors, challenge: "" });
                          }}
                          className={`w-full rounded-xl border ${
                            errors.challenge ? "border-red-500 ring-1 ring-red-500" : "border-[#E3E8F0]"
                          } bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition resize-none`}
                        />
                        <p className="mt-1.5 text-[12px] text-[#94A3B8]">
                          Please avoid including passwords, bank account details or other sensitive personal information.
                        </p>
                        {errors.challenge && (
                          <p className="mt-1 text-[12px] text-red-500">{errors.challenge}</p>
                        )}
                      </div>

                      {/* When would you like to begin (radios) */}
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-2.5">
                          When would you like to begin?
                        </label>
                        <div className="space-y-2">
                          {timelineOptions.map((opt) => {
                            const selected = data.timeline === opt;
                            return (
                              <label
                                key={opt}
                                onClick={() => setData({ ...data, timeline: opt })}
                                className="group flex items-center gap-3 cursor-pointer py-1.5"
                              >
                                <div
                                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                                    selected
                                      ? "border-[#1D4ED8] bg-[#1D4ED8]"
                                      : "border-[#CBD5E1] group-hover:border-[#94A3B8]"
                                  }`}
                                >
                                  {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                                </div>
                                <span className={`text-[15px] ${selected ? "font-semibold text-[#0B1F3A]" : "text-[#4A5568]"}`}>
                                  {opt}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Funding requirement */}
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          Approximate funding or investment requirement (if applicable)
                        </label>
                        <input
                          type="text"
                          value={data.fundingRequirement}
                          placeholder="Optional — amount and currency"
                          onChange={(e) => setData({ ...data, fundingRequirement: e.target.value })}
                          className="w-full rounded-xl border border-[#E3E8F0] bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition"
                        />
                      </div>

                      {/* How did you hear about QAP */}
                      <div>
                        <label className="block text-[14px] font-semibold text-[#1B2A41] mb-1.5">
                          How did you hear about QAP?
                        </label>
                        <div className="relative">
                          <select
                            value={data.referral}
                            onChange={(e) => setData({ ...data, referral: e.target.value })}
                            className="w-full appearance-none rounded-xl border border-[#E3E8F0] bg-white px-4 py-3 text-[15px] text-[#0B1F3A] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition pr-10 cursor-pointer"
                          >
                            {referralOptions.map((opt) => (
                              <option key={opt} value={opt === "Select an option" ? "" : opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ============================================================ */}
                  {/* SECTION 04: Consent & submission */}
                  {/* ============================================================ */}
                  <div className="pt-8 border-t border-[#E3E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D4ED8] text-white text-[13px] font-bold">
                        04
                      </span>
                      <h2 className="text-[20px] sm:text-[22px] font-bold font-display text-[#0B1F3A]">
                        Consent & submission
                      </h2>
                    </div>
                    <p className="mt-1 text-[14px] text-[#64748B] ml-10">
                      Before sending your enquiry, please review the following.
                    </p>

                    <div className="mt-6" data-error={!!errors.consent}>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="pt-0.5">
                          <input
                            type="checkbox"
                            checked={data.consent}
                            onChange={(e) => {
                              setData({ ...data, consent: e.target.checked });
                              if (errors.consent) setErrors({ ...errors, consent: "" });
                            }}
                            className="h-5 w-5 rounded border-[#CBD5E1] text-[#1D4ED8] focus:ring-[#1D4ED8] cursor-pointer"
                          />
                        </div>
                        <span className="text-[14px] text-[#4A5568] leading-relaxed select-none">
                          I consent to Quantum Advisory Partners contacting me regarding this enquiry and acknowledge the QAP Privacy Policy.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 text-[12px] text-red-500 ml-8">{errors.consent}</p>
                      )}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-10 py-4 text-[16px] font-bold text-white hover:bg-[#1746B1] transition shadow-soft hover:shadow-soft-lg cursor-pointer"
                      >
                        Review enquiry <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </FormProvider>
  );
}
