"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FormProvider } from "@/components/form-context";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Activity,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Eye,
  Zap,
  DollarSign
} from "lucide-react";
import Link from "next/link";

export default function CFOGovernancePage() {
  const subNav = [
    { label: "2.1 CFO Office & FP&A", href: "#cfo-office" },
    { label: "2.2 Cash Flow & Working Capital", href: "#cash" },
    { label: "2.3 MIS & Performance", href: "#mis" },
    { label: "2.4 Governance, Controls & Board", href: "#governance" },
    { label: "2.5 Strategic Finance & Transaction Readiness", href: "#strategic-finance" },
  ];

  const operatingSystem = [
    { label: "Planning & Forecasting (FP&A)", desc: "AOP, budgeting, rolling forecasts and business drivers", color: "text-[#1D4ED8] bg-[#E0EAFF]" },
    { label: "Cash & Working Capital Control", desc: "Liquidity visibility, 13-week cash flow and working capital", color: "text-[#0F766E] bg-[#DDF5F0]" },
    { label: "Management Reporting & KPIs (MIS)", desc: "Decision-ready dashboards and variance root cause", color: "text-[#16A34A] bg-[#DCFCE7]" },
    { label: "Governance, Controls & Board Reporting", desc: "Approval matrices, controls and stakeholder confidence", color: "text-[#B45309] bg-[#FFF1D6]" },
    { label: "Strategic Finance & Transaction Readiness", desc: "Financial models, business cases and valuation planning", color: "text-[#6D28D9] bg-[#EAE4FF]" },
  ];

  const businessOutcomes = [
    {
      title: "Better Visibility",
      desc: "Clearer visibility into performance, cash, forecast and operating drivers.",
      icon: Eye,
      color: "text-[#1D4ED8] bg-[#E0EAFF]",
    },
    {
      title: "Stronger Cash Control",
      desc: "More disciplined management of liquidity and working-capital drivers.",
      icon: DollarSign,
      color: "text-[#0F766E] bg-[#DDF5F0]",
    },
    {
      title: "Faster Decisions",
      desc: "Management information structured around key business drivers.",
      icon: Zap,
      color: "text-[#B45309] bg-[#FFF1D6]",
    },
    {
      title: "Greater Readiness",
      desc: "Preparedness for lenders, investors, audits and strategic milestones.",
      icon: ShieldCheck,
      color: "text-[#16A34A] bg-[#DCFCE7]",
    },
  ];

  const connectedPillars = [
    {
      title: "Capital Structure & Debt Advisory",
      desc: "Connect CFO planning with debt, financing, capital allocation and strategic capital decisions.",
      href: "/capital-structure-debt-advisory",
      tag: "Pillar 01",
    },
    {
      title: "Government Incentives & Policy Monetization",
      desc: "Embed incentive tracking into FP&A, cash-flow management, MIS and governance.",
      href: "/government-incentives-policy-monetization",
      tag: "Pillar 03",
    },
    {
      title: "Operations & Supply Chain Value Creation",
      desc: "Convert operating data into management reporting, planning and decision support.",
      href: "/operations-supply-chain-value-creation",
      tag: "Pillar 04",
    },
    {
      title: "Signature Advisory Suite",
      desc: "Our integrated diagnostic suite covering all four pillars in a single engagement.",
      href: "/signature-advisory-suite",
      tag: "Integrated",
    },
  ];

  return (
    <FormProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#DDF5F0]/50 via-white to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] text-[#64748B] mb-5">
                  <Link href="/#services" className="hover:text-[#1D4ED8] transition">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#0B1F3A] font-medium">CFO & Governance</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0F766E]/20 bg-[#DDF5F0] text-[#0F766E] text-[12px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                  Pillar 02 · Finance Leadership
                </div>

                <h1 className="font-display text-[36px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-tight leading-[1.08] text-[#0B1F3A]">
                  CFO & Governance
                </h1>

                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#4A5568] max-w-3xl">
                  Building the financial operating system behind better decisions, stronger cash control, management visibility, governance and strategic readiness.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#cfo-office"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white font-semibold text-[16px] transition shadow-soft"
                  >
                    Explore Advisory Areas
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <Link
                    href="/enquiry"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition"
                  >
                    Discuss Your CFO Requirement
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* THE QUESTION SECTION */}
          <section className="py-20 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#0F766E]">
                    The CFO Question
                  </span>

                  <h2 className="mt-3 font-display text-[30px] sm:text-[40px] font-bold text-[#0B1F3A] leading-tight">
                    Is finance giving management{" "}
                    <span className="text-[#0F766E]">enough control and visibility?</span>
                  </h2>

                  <p className="mt-6 text-[#4A5568] text-[16px] leading-[1.7]">
                    Growing businesses often have accounting processes, but not necessarily a fully integrated CFO function. Management may have financial statements without a forward-looking view of cash, margins, working capital, business-unit performance or capital requirements.
                  </p>

                  <p className="mt-4 text-[#4A5568] text-[16px] leading-[1.7]">
                    QAP's CFO & Governance offering is designed to build that management layer: planning, performance, cash, reporting, controls, governance and strategic finance working together as one operating system.
                  </p>
                </div>

                {/* Right Operating System Stack */}
                <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-7 sm:p-9 shadow-soft">
                  <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8]">
                    Illustrative CFO Operating System
                  </div>

                  <div className="mt-6 space-y-3">
                    {operatingSystem.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[#E3E8F0] bg-[#F8FAFC]"
                      >
                        <div className="font-semibold text-[15px] text-[#0B1F3A]">{item.label}</div>
                        <div className="text-[13px] text-[#64748B] mt-0.5">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[12px] leading-relaxed text-[#94A3B8]">
                    A connected finance architecture that turns raw data into proactive management control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SUB-NAV STRIP */}
          <div className="sticky top-[69px] z-40 border-y border-[#E3E8F0] bg-white/95 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-[#64748B]">
              <span className="text-[#0B1F3A] font-semibold">Advisory Areas:</span>
              {subNav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="hover:text-[#0F766E] transition"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* MODULES */}
          
          {/* Module 2.1 */}
          <section id="cfo-office" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDF5F0] font-display font-bold text-[#0F766E] text-[12px]">
                      2.1
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      CFO Office & FP&A
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Build a finance function that looks forward.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#0F766E]/25 bg-gradient-to-br from-[#DDF5F0] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#0F766E] bg-[#DDF5F0]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP CFO Office Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews planning maturity, forecasting quality, management cadence, finance ownership, reporting responsibilities and decision-support gaps.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A]">
                  <Activity className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#16A34A]">
                    QAP Advisory
                  </div>
                  <h3 className="mt-0.5 font-display text-[17px] font-bold text-[#0B1F3A]">
                    CFO Office & FP&A Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Provide an integrated CFO layer covering annual operating plans, budgets, rolling forecasts, scenario planning, management reviews and financial decision support.</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      AOP & Budgeting
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Illustrative ₹100Cr business moving from static departmental budgets to driver-based planning.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Better linkage between commercial assumptions, resource allocation and financial outcomes.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Rolling Forecasts
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Monthly reforecasting of sales pipeline, backlog, volume, pricing and cost assumptions.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Management sees emerging deviations earlier rather than waiting for year-end results.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Management Review Cadence
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Monthly review covering revenue, gross margin, SG&A, workforce productivity and cash.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Creates a repeatable decision cadence instead of fragmented financial discussions.
                      </p>
                    </div>
                  </div>
                </div>
  
                </div>
              </div>

              {/* Deliverables */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFC] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Typical Deliverables
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Annual operating plan</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Driver-based budget</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Rolling forecast model</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>MBR / QBR pack</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 2.2 */}
          <section id="cash" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDF5F0] font-display font-bold text-[#0F766E] text-[12px]">
                      2.2
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Cash Flow & Working Capital
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Turn working capital into a managed financial lever.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Illustrative ₹120Cr O2C process reviewed for receivables and cash-conversion improvement.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#0F766E]/25 bg-gradient-to-br from-[#DDF5F0] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#0F766E] bg-[#DDF5F0]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Cash Conversion Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews cash conversion, receivables ageing, inventory intensity, supplier terms, payment cycles and liquidity visibility.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A]">
                  <Activity className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#16A34A]">
                    QAP Advisory
                  </div>
                  <h3 className="mt-0.5 font-display text-[17px] font-bold text-[#0B1F3A]">
                    Cash Flow & Working Capital Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Design cash forecasting, working-capital improvement and cash-governance mechanisms aligned to the operating model.</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Receivables & O2C
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Illustrative ₹120Cr O2C process reviewed for receivables and cash-conversion improvement.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Illustrative ₹120Cr O2C process reviewed for receivables and cash-conversion improvement.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Reduce cash trapped in delayed billing, collections and unresolved customer issues.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Inventory & Procurement
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Multi-location inventory and procurement review across a distributed operating network.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Multi-location inventory and procurement review across a distributed operating network.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve liquidity while protecting service levels and operating continuity.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Cash Forecasting
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Weekly 13-week cash visibility for a business with uneven collections and supplier cycles.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Weekly 13-week cash visibility for a business with uneven collections and supplier cycles.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Identify liquidity pressure before it becomes a funding or operating problem.
                      </p>
                    </div>
                  </div>
                </div>
  
                </div>
              </div>

              {/* Deliverables */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFC] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Typical Deliverables
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>13-week cash flow model</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Working-capital diagnostic</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>O2C / P2P analysis</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Cash improvement roadmap</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 2.3 */}
          <section id="mis" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDF5F0] font-display font-bold text-[#0F766E] text-[12px]">
                      2.3
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      MIS & Performance Management
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Make management reporting decision-ready.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Revenue, volume, price, gross margin, SG&A, productivity and cash metrics linked into one view.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#0F766E]/25 bg-gradient-to-br from-[#DDF5F0] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#0F766E] bg-[#DDF5F0]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Performance Intelligence Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews MIS quality, KPI architecture, reporting frequency, variance analysis, data ownership and management decision usefulness.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A]">
                  <Activity className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#16A34A]">
                    QAP Advisory
                  </div>
                  <h3 className="mt-0.5 font-display text-[17px] font-bold text-[#0B1F3A]">
                    MIS, KPI & Performance Management Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Develop management reporting around the financial and operating drivers that actually influence revenue, margin, productivity, cash and growth.</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      KPI Architecture
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Revenue, volume, price, gross margin, SG&A, productivity and cash metrics linked into one view.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Revenue, volume, price, gross margin, SG&A, productivity and cash metrics linked into one view.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Management can distinguish financial outcomes from their underlying operating drivers.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Variance & Root Cause
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Revenue variance separated into volume, pricing, mix and customer effects.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Revenue variance separated into volume, pricing, mix and customer effects.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Management focuses corrective action on the actual economic drivers.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      BI & Management Dashboards
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Power BI or equivalent dashboard connecting financial results with operational KPIs.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Power BI or equivalent dashboard connecting financial results with operational KPIs.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Reduce fragmented reporting and improve the speed of management review.
                      </p>
                    </div>
                  </div>
                </div>
  
                </div>
              </div>

              {/* Deliverables */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFC] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Typical Deliverables
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Monthly MIS pack</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>KPI scorecard</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Variance bridge</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Management dashboard</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 2.4 */}
          <section id="governance" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDF5F0] font-display font-bold text-[#0F766E] text-[12px]">
                      2.4
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Governance, Controls & Board Support
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Build governance that gives stakeholders confidence.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Delegation-of-authority framework across procurement, payments, hiring and capex.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#0F766E]/25 bg-gradient-to-br from-[#DDF5F0] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#0F766E] bg-[#DDF5F0]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Governance & Control Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews approval frameworks, financial controls, reporting governance, board information, compliance processes and management accountability.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A]">
                  <Activity className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#16A34A]">
                    QAP Advisory
                  </div>
                  <h3 className="mt-0.5 font-display text-[17px] font-bold text-[#0B1F3A]">
                    Governance, Controls & Board Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Establish practical governance mechanisms covering financial authority, controls, management reporting, board materials and decision documentation.</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Financial Controls
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Delegation-of-authority framework across procurement, payments, hiring and capex.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Delegation-of-authority framework across procurement, payments, hiring and capex.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Clearer accountability and stronger financial discipline as the organization scales.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Board & Investor Reporting
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Monthly board pack covering P&L, cash, KPIs, risks, initiatives and forecast.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Monthly board pack covering P&L, cash, KPIs, risks, initiatives and forecast.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Give stakeholders a consistent view of performance, risks and management actions.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Banking & Covenant Support
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Covenant tracking connected to forecast cash flow and debt-service requirements.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Covenant tracking connected to forecast cash flow and debt-service requirements.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve lender readiness and visibility around financing obligations.
                      </p>
                    </div>
                  </div>
                </div>
  
                </div>
              </div>

              {/* Deliverables */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFC] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Typical Deliverables
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Board reporting pack</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Delegation-of-authority matrix</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Control framework</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Covenant / lender reporting</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 2.5 */}
          <section id="strategic-finance" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DDF5F0] font-display font-bold text-[#0F766E] text-[12px]">
                      2.5
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Strategic Finance & Transaction Readiness
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Prepare finance for the next strategic event.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Illustrative ₹50Cr expansion decision evaluated through revenue, margin, capex and cash scenarios.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#0F766E]/25 bg-gradient-to-br from-[#DDF5F0] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#0F766E] bg-[#DDF5F0]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Strategic Finance Readiness Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews financial model quality, valuation drivers, transaction data readiness, capital requirements, investor materials and strategic decision support.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#16A34A]">
                  <Activity className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#16A34A]">
                    QAP Advisory
                  </div>
                  <h3 className="mt-0.5 font-display text-[17px] font-bold text-[#0B1F3A]">
                    Strategic Finance & Transaction Readiness Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support management with business cases, financial modelling, valuation, capital planning and transaction preparation, while coordinating with specialist legal, tax, accounting or transaction professionals where required.</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Financial Modelling & Business Cases
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Illustrative ₹50Cr expansion decision evaluated through revenue, margin, capex and cash scenarios.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Illustrative ₹50Cr expansion decision evaluated through revenue, margin, capex and cash scenarios.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Make strategic investment decisions using quantified financial scenarios.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Valuation & Capital Planning
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      DCF and multiple-based valuation for a business considering external capital.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        DCF and multiple-based valuation for a business considering external capital.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Give promoters and stakeholders a structured financial basis for capital discussions.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0F766E]">
                      <span className="w-2 h-2 rounded-full bg-[#0F766E]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Fundraising & Transaction Readiness
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Investor-ready financial model and KPI package supporting a strategic capital discussion.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DDF5F0] border border-[#0F766E]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#134E4A] leading-relaxed">
                        Investor-ready financial model and KPI package supporting a strategic capital discussion.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Reduce financial-readiness gaps before entering a formal transaction process.
                      </p>
                    </div>
                  </div>
                </div>
  
                </div>
              </div>

              {/* Deliverables */}
              
              <div className="mt-8 rounded-2xl border border-[#E3E8F0] bg-[#F8FAFC] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  Typical Deliverables
                </div>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Integrated financial model</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Business case / investment memo</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Valuation analysis</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0" />
                    <span>Transaction-readiness pack</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* BUSINESS OUTCOMES */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0F766E]">
                  Business Outcomes
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  Finance becomes a{" "}
                  <span className="text-[#0F766E]">management system.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  The objective is to create a finance function that management can use to plan, monitor, challenge and act, rather than simply record historical performance.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessOutcomes.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="rounded-[22px] border border-[#E3E8F0] bg-white p-7 shadow-soft flex flex-col justify-between"
                    >
                      <div>
                        <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${b.color}`}>
                          <Icon className="w-6 h-6" />
                        </span>

                        <h3 className="mt-5 font-display text-[20px] font-bold text-[#0B1F3A]">
                          {b.title}
                        </h3>

                        <p className="mt-2 text-[14px] text-[#64748B] leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CONNECTED ADVISORY */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0F766E]">
                  Connected Advisory
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  CFO advisory can connect directly{" "}
                  <span className="text-[#0F766E]">to the wider agenda.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  Financial discipline is the baseline for capital structuring, operating improvements and government incentives realization.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {connectedPillars.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="rounded-[22px] border border-[#E3E8F0] bg-white p-6 hover:border-[#0F766E]/40 hover:shadow-soft transition group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] bg-[#DDF5F0] px-2.5 py-1 rounded-full">
                        {p.tag}
                      </span>
                      <h3 className="mt-4 font-display text-[18px] font-bold text-[#0B1F3A] group-hover:text-[#0F766E] transition">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[#64748B] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#0F766E]">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="py-20 sm:py-28 bg-[#0F766E] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/80">
                Finance Leadership
              </span>

              <h2 className="mt-4 font-display text-[32px] sm:text-[46px] font-extrabold text-white leading-tight">
                Build the financial operating system your business needs.
              </h2>

              <p className="mt-4 text-white/80 max-w-2xl mx-auto text-[16px] sm:text-[18px] leading-relaxed">
                Move finance beyond historical accounting and turn it into the forward-looking command center of your enterprise.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#DDF5F0] text-[#0F766E] font-bold text-[16px] transition shadow-soft"
                >
                  Discuss Your CFO Requirement
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/40 hover:bg-white/10 text-white font-semibold text-[16px] transition"
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </section>

          {/* DISCLOSURE */}
          <section className="py-12 bg-white border-t border-[#E3E8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                <strong className="text-[#64748B]">Illustrative examples and outcomes:</strong> The examples, metrics, timelines and potential outcomes presented on this page are illustrative only and are intended to demonstrate the types of advisory QAP provides. They do not constitute guarantees of savings, liquidity improvements, profitability or financing outcomes. Actual results depend on data quality, management action, market dynamics and third-party decisions.
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </FormProvider>
  );
}
