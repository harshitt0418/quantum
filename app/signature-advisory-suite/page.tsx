"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FormProvider } from "@/components/form-context";
import {
  ArrowDown,
  ArrowRight,
  TrendingUp,
  Activity,
  Landmark,
  Calculator,
  Filter,
  GitBranch,
  Search,
  Award,
  Layers,
  ShieldCheck,
  FileText,
  DollarSign,
  BarChart3,
  CheckCircle2,
  PieChart,
  Settings2,
} from "lucide-react";
import Link from "next/link";

export default function SignatureAdvisorySuitePage() {
  const heroSteps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "Establish the current state of the business.",
      accent: "text-[#1D4ED8] bg-[#E0EAFF]",
    },
    {
      num: "02",
      title: "Quantify",
      desc: "Translate gaps into financial opportunity.",
      accent: "text-[#0F766E] bg-[#DDF5F0]",
    },
    {
      num: "03",
      title: "Prioritise",
      desc: "Focus on the highest-value levers.",
      accent: "text-[#16A34A] bg-[#DCFCE7]",
    },
    {
      num: "04",
      title: "Advise & Coordinate",
      desc: "Convert findings into practical action.",
      accent: "text-[#B45309] bg-[#FFF1D6]",
    },
    {
      num: "05",
      title: "Measure",
      desc: "Track outcomes against agreed targets.",
      accent: "text-[#6D28D9] bg-[#EAE4FF]",
    },
  ];

  const diagnosticOutputs = [
    {
      title: "Current-State Assessment",
      subtitle: "What is happening today?",
      icon: Activity,
      color: "text-[#1D4ED8] bg-[#E0EAFF]",
    },
    {
      title: "Quantified Value Pool",
      subtitle: "What could the opportunity be worth?",
      icon: Calculator,
      color: "text-[#0F766E] bg-[#DDF5F0]",
    },
    {
      title: "Priority Actions",
      subtitle: "Which opportunities deserve attention first?",
      icon: Filter,
      color: "text-[#16A34A] bg-[#DCFCE7]",
    },
    {
      title: "Action Roadmap",
      subtitle: "What should happen next?",
      icon: GitBranch,
      color: "text-[#B45309] bg-[#FFF1D6]",
    },
  ];

  const diagnosticLenses = [
    {
      num: "01",
      title: "Business Health & Value Index™",
      desc: "A cross-functional view of Revenue, EBITDA, Cash, Working Capital, Costs, Capital, Finance, Risk and Growth.",
      looksFor: "Value leakage, performance gaps and concentration of risk.",
      icon: Activity,
    },
    {
      num: "02",
      title: "Finance Maturity Assessment™",
      desc: "Reviews MIS, FP&A, controls, reporting, forecasting, dashboards and decision-support capabilities.",
      looksFor: "Visibility gaps, manual processes and weak decision support.",
      icon: Landmark,
    },
    {
      num: "03",
      title: "Working Capital Diagnostic™",
      desc: "Examines receivables, inventory, payables, cash conversion and working-capital financing.",
      looksFor: "Cash trapped in the operating cycle.",
      icon: DollarSign,
    },
    {
      num: "04",
      title: "Investment Readiness Assessment™",
      desc: "Reviews financial information, business plans, KPIs, valuation drivers, governance and investor materials.",
      looksFor: "Gaps that may affect financing or investor discussions.",
      icon: Award,
    },
    {
      num: "05",
      title: "Value Creation Diagnostic™",
      desc: "Identifies and quantifies value levers across revenue, margin, cost, working capital and capital allocation.",
      looksFor: "The highest-value opportunities available to the business.",
      icon: TrendingUp,
    },
    {
      num: "06",
      title: "90-Day Value Creation Roadmap™",
      desc: "Converts identified opportunities into initiatives, owners, KPIs, milestones and measurable targets.",
      looksFor: "A practical sequence from opportunity to action.",
      icon: GitBranch,
    },
    {
      num: "07",
      title: "CFO Advisory™",
      desc: "Assesses FP&A, cash flow, MIS, budgeting, forecasting, profitability, capital planning and decision support.",
      looksFor: "The financial infrastructure required for the next stage.",
      icon: BarChart3,
    },
    {
      num: "08",
      title: "Board Performance Dashboard™",
      desc: "Structures board-level reporting around Revenue, EBITDA, Cash, Capital, KPIs, Risks and Strategic Initiatives.",
      looksFor: "Decision-critical information that management and boards need.",
      icon: PieChart,
    },
    {
      num: "09",
      title: "Government Benefits Diagnostic™",
      desc: "Maps potentially relevant government schemes, incentives, procurement opportunities and available support mechanisms.",
      looksFor: "Eligible or potentially recoverable economic benefits.",
      icon: FileText,
    },
    {
      num: "10",
      title: "Regulatory Risk Assessment™",
      desc: "Reviews relevant labour, environmental, customs, corporate, trade and ESG compliance exposure.",
      looksFor: "Compliance gaps, documentation exposure and potential risk.",
      icon: ShieldCheck,
    },
  ];

  const pillars = [
    {
      num: "Pillar 01",
      title: "Capital Structure & Debt Advisory",
      desc: "Capital structuring, debt, credit, growth capital, strategic transactions and public-market readiness.",
      icon: Landmark,
      tint: "text-[#1D4ED8] bg-[#E0EAFF]",
      href: "/capital-structure-debt-advisory",
    },
    {
      num: "Pillar 02",
      title: "CFO & Governance",
      desc: "CFO leadership, FP&A, executive reporting, trade governance, treasury, controls and promoter finance.",
      icon: BarChart3,
      tint: "text-[#0F766E] bg-[#DDF5F0]",
      href: "/cfo-governance",
    },
    {
      num: "Pillar 03",
      title: "Government Incentives & Policy Monetization",
      desc: "Industrial policy, technology incentives, employment benefits, recovery of eligible claims and government coordination.",
      icon: FileText,
      tint: "text-[#16A34A] bg-[#DCFCE7]",
      href: "/government-incentives-policy-monetization",
    },
    {
      num: "Pillar 04",
      title: "Operations & Supply Chain Value Creation",
      desc: "Procurement, working capital, industrial assets, energy, manufacturing transformation, R&D and product improvement.",
      icon: Settings2,
      tint: "text-[#B45309] bg-[#FFF1D6]",
      href: "/operations-supply-chain-value-creation",
    },
  ];

  const methodologySteps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "Establish the current operating and financial baseline.",
      accent: "text-[#1D4ED8]",
    },
    {
      num: "02",
      title: "Quantify",
      desc: "Translate gaps and opportunities into financial terms.",
      accent: "text-[#0F766E]",
    },
    {
      num: "03",
      title: "Prioritise",
      desc: "Rank initiatives by potential value, feasibility and timing.",
      accent: "text-[#16A34A]",
    },
    {
      num: "04",
      title: "Advise & Coordinate",
      desc: "Support management, lenders, investors, specialists and other stakeholders where appropriate.",
      accent: "text-[#B45309]",
    },
    {
      num: "05",
      title: "Measure",
      desc: "Monitor agreed KPIs, milestones and financial outcomes.",
      accent: "text-[#6D28D9]",
    },
  ];

  return (
    <FormProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="flex-1">
          {/* ======================================================== */}
          {/* SECTION 1: HERO */}
          {/* ======================================================== */}
          <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#EEF4FF]/70 via-white to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D4ED8]/20 bg-[#E0EAFF] text-[#1D4ED8] text-[12px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  QAP Signature Advisory Suite™
                </div>

                <h1 className="font-display text-[38px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-tight leading-[1.08] text-[#0B1F3A]">
                  Diagnose the business.
                  <br />
                  <span className="text-[#1D4ED8]">
                    Quantify the opportunity.
                  </span>
                </h1>

                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#4A5568] max-w-3xl">
                  A structured suite of proprietary diagnostics designed to identify
                  where financial performance, capital, cash, operations, governance
                  and enterprise value can be improved.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#diagnostics"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1746B1] text-white font-semibold text-[16px] transition shadow-soft"
                  >
                    Explore the Diagnostics
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <Link
                    href="/enquiry"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition"
                  >
                    Discuss Your Business
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 5-Step Framework Cards */}
              <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {heroSteps.map((step) => (
                  <div
                    key={step.num}
                    className="rounded-2xl border border-[#E3E8F0] bg-white p-5 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition"
                  >
                    <span
                      className={`inline-block text-[11px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${step.accent}`}
                    >
                      {step.num}
                    </span>
                    <div className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                      {step.title}
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#64748B]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 2: BEYOND A FINANCIAL REVIEW */}
          {/* ======================================================== */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Beyond a Financial Review
                  </span>

                  <h2 className="mt-3 font-display text-[30px] sm:text-[40px] font-bold text-[#0B1F3A] leading-tight">
                    Find the value that{" "}
                    <span className="text-[#1D4ED8]">doesn't appear in the P&L.</span>
                  </h2>

                  <p className="mt-6 text-[#4A5568] text-[16px] leading-[1.7]">
                    Many business issues sit between functions. Excess inventory
                    becomes a financing problem. High procurement costs become a
                    margin problem. Weak forecasting becomes a liquidity problem.
                    Under-utilised assets become a capital-allocation problem.
                  </p>

                  <p className="mt-4 text-[#4A5568] text-[16px] leading-[1.7]">
                    QAP diagnostics connect these issues across finance, capital,
                    operations and governance so that opportunities can be
                    quantified rather than discussed only qualitatively.
                  </p>
                </div>

                {/* Right Diagnostic Output Card */}
                <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-7 sm:p-9 shadow-soft">
                  <span className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8]">
                    Diagnostic Output
                  </span>

                  <div className="mt-6 space-y-5">
                    {diagnosticOutputs.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start gap-4">
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-[16px] text-[#0B1F3A]">
                              {item.title}
                            </div>
                            <div className="text-[14px] text-[#64748B] mt-0.5">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 3: THE SUITE (10 DIAGNOSTIC LENSES) */}
          {/* ======================================================== */}
          <section
            id="diagnostics"
            className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                  The Suite
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A] leading-tight">
                  Ten diagnostic lenses.
                  <br />
                  <span className="text-[#1D4ED8]">One connected view.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  Each diagnostic examines a specific dimension of business
                  performance. The outputs can then feed into one or more of QAP's
                  four advisory pillars.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {diagnosticLenses.map((lens) => {
                  const Icon = lens.icon;
                  return (
                    <article
                      key={lens.num}
                      className="rounded-[20px] border border-[#E3E8F0] bg-white p-7 hover:border-[#1D4ED8]/30 hover:shadow-soft transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0EAFF] font-display font-bold text-[#1D4ED8] text-[14px]">
                            {lens.num}
                          </span>
                          <Icon className="w-5 h-5 text-[#94A3B8]" />
                        </div>

                        <h3 className="mt-6 font-display text-[19px] font-bold text-[#0B1F3A]">
                          {lens.title}
                        </h3>

                        <p className="mt-3 text-[14px] text-[#4A5568] leading-relaxed">
                          {lens.desc}
                        </p>
                      </div>

                      <div className="mt-6 rounded-xl bg-[#F8FAFC] border border-[#E3E8F0] p-3.5">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                          Looks for
                        </div>
                        <div className="mt-1 text-[13px] text-[#0B1F3A] font-medium leading-normal">
                          {lens.looksFor}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 4: FOUR ADVISORY PILLARS */}
          {/* ======================================================== */}
          <section id="pillars" className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                  From Diagnosis to Advisory
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  The diagnostics connect to{" "}
                  <span className="text-[#1D4ED8]">four advisory pillars.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  A diagnostic identifies the issue. The relevant QAP advisory pillar
                  provides the framework for addressing it.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <Link
                      key={pillar.num}
                      href={pillar.href}
                      className="rounded-[22px] border border-[#E3E8F0] bg-white p-8 hover:border-[#1D4ED8]/40 hover:shadow-soft transition group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <span
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.tint}`}
                          >
                            <Icon className="w-6 h-6" />
                          </span>

                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full">
                            {pillar.num}
                          </span>
                        </div>

                        <h3 className="mt-6 font-display text-[22px] font-bold text-[#0B1F3A] group-hover:text-[#1D4ED8] transition">
                          {pillar.title}
                        </h3>

                        <p className="mt-3 text-[15px] text-[#4A5568] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-[14px] font-semibold text-[#1D4ED8]">
                        Explore pillar
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 5: DIAGNOSTIC METHODOLOGY */}
          {/* ======================================================== */}
          <section
            id="methodology"
            className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Diagnostic Methodology
                  </span>

                  <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A] leading-tight">
                    From observation to{" "}
                    <span className="text-[#1D4ED8]">measurable action.</span>
                  </h2>

                  <p className="mt-5 text-[#4A5568] text-[16px] leading-[1.7] max-w-xl">
                    QAP diagnostics are designed to move beyond identifying problems.
                    The objective is to establish what is happening, quantify the
                    potential value, determine priorities and create a practical
                    path toward execution and measurement.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {methodologySteps.map((step) => (
                    <div
                      key={step.num}
                      className="rounded-2xl border border-[#E3E8F0] bg-white p-5 flex items-start gap-4 hover:border-[#CBD5E1] transition shadow-xs"
                    >
                      <div
                        className={`font-display font-extrabold text-[20px] ${step.accent} shrink-0 mt-0.5`}
                      >
                        {step.num}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[17px] text-[#0B1F3A]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[14px] text-[#64748B] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 6: ILLUSTRATIVE DIAGNOSTIC */}
          {/* ======================================================== */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Illustrative Diagnostic
                  </span>

                  <h2 className="mt-3 font-display text-[28px] sm:text-[34px] font-bold text-[#0B1F3A] leading-tight">
                    What a diagnostic can reveal
                  </h2>

                  <p className="mt-4 text-[#4A5568] text-[15px] leading-relaxed">
                    Consider an illustrative manufacturing business with strong
                    revenue growth but increasing pressure on cash.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="rounded-[22px] border border-[#E3E8F0] bg-white shadow-soft overflow-hidden">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E3E8F0]">
                      {/* Observation */}
                      <div className="p-7">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                          Observation
                        </div>

                        <div className="mt-3 font-display text-[30px] font-bold text-[#0B1F3A]">
                          ₹120Cr
                        </div>

                        <p className="mt-1 text-[13px] font-medium text-[#64748B]">
                          Illustrative annual revenue
                        </p>

                        <div className="mt-4 text-[13px] text-[#4A5568] leading-relaxed">
                          Revenue is growing, but receivables and inventory are
                          absorbing increasing amounts of cash.
                        </div>
                      </div>

                      {/* Diagnostic */}
                      <div className="p-7">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                          Diagnostic
                        </div>

                        <div className="mt-3 font-display text-[30px] font-bold text-[#1D4ED8]">
                          ₹8Cr
                        </div>

                        <p className="mt-1 text-[13px] font-medium text-[#64748B]">
                          Illustrative cash opportunity
                        </p>

                        <div className="mt-4 text-[13px] text-[#4A5568] leading-relaxed">
                          Working-capital analysis identifies potential cash trapped
                          across receivables, inventory and purchasing terms.
                        </div>
                      </div>

                      {/* Next Step */}
                      <div className="p-7">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
                          Next Step
                        </div>

                        <div className="mt-3 font-display text-[30px] font-bold text-[#16A34A]">
                          90 Days
                        </div>

                        <p className="mt-1 text-[13px] font-medium text-[#64748B]">
                          Illustrative roadmap
                        </p>

                        <div className="mt-4 text-[13px] text-[#4A5568] leading-relaxed">
                          Prioritised actions can then be assigned to management
                          owners and tracked against agreed KPIs.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 7: CTA BAND */}
          {/* ======================================================== */}
          <section className="py-20 sm:py-28 bg-[#1D4ED8] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/80">
                Start With the Right Question
              </span>

              <h2 className="mt-4 font-display text-[32px] sm:text-[46px] font-extrabold text-white leading-tight">
                What is your business{" "}
                <span className="underline decoration-white/40">leaving on the table?</span>
              </h2>

              <p className="mt-4 text-white/80 max-w-2xl mx-auto text-[16px] sm:text-[18px] leading-relaxed">
                Begin with a focused diagnostic and determine where financial,
                capital, operational or governance improvements may exist.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#EEF4FF] text-[#1D4ED8] font-bold text-[16px] transition shadow-soft"
                >
                  Discuss a Diagnostic
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/40 hover:bg-white/10 text-white font-semibold text-[16px] transition"
                >
                  Explore Advisory Services
                </a>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 8: DISCLOSURE */}
          {/* ======================================================== */}
          <section className="py-12 bg-white border-t border-[#E3E8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-[12px] leading-relaxed text-[#94A3B8]">
                <strong className="text-[#64748B]">
                  Illustrative examples and outcomes:
                </strong>{" "}
                The examples, transaction sizes, financial metrics and potential
                outcomes presented on these pages are illustrative and are intended
                to explain the types of situations QAP may support. They do not
                represent completed client engagements unless specifically identified
                as such. Actual outcomes depend on client circumstances, available
                information, commercial negotiations, financing terms, eligibility,
                third-party decisions, applicable laws and regulatory approvals.
                QAP provides advisory, introduction, support and coordination
                services and does not guarantee financing, investment, government
                incentives, regulatory approvals or financial outcomes.
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
