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
  Landmark,
  FileText,
  Settings2,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function CapitalStructureDebtAdvisoryPage() {
  const subNav = [
    { label: "1.1 Strategic Capital", href: "#strategic-capital" },
    { label: "1.2 Debt & Credit", href: "#debt-credit" },
    { label: "1.3 Growth Capital", href: "#growth-capital" },
    { label: "1.4 M&A & Transactions", href: "#transactions" },
    { label: "1.5 IPO & Public Markets", href: "#ipo" },
  ];

  const capitalStack = [
    { label: "Senior Debt", val: "45%", color: "text-[#1D4ED8] bg-[#E0EAFF]" },
    { label: "Working Capital", val: "20%", color: "text-[#0F766E] bg-[#DDF5F0]" },
    { label: "Promoter / Equity", val: "25%", color: "text-[#16A34A] bg-[#DCFCE7]" },
    { label: "Growth / Alternative Capital", val: "10%", color: "text-[#B45309] bg-[#FFF1D6]" },
  ];

  const connectedPillars = [
    {
      title: "CFO & Governance",
      desc: "FP&A, cash flow, capital planning, banking relationships and board reporting.",
      href: "/cfo-governance",
      tag: "Pillar 02",
    },
    {
      title: "Government Incentives & Policy Monetization",
      desc: "Evaluate potentially relevant incentives that may affect project economics or capital requirements.",
      href: "/government-incentives-policy-monetization",
      tag: "Pillar 03",
    },
    {
      title: "Operations & Supply Chain Value Creation",
      desc: "Connect working-capital efficiency, inventory reduction and operational cash generation.",
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
          <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#EEF4FF]/70 via-white to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] text-[#64748B] mb-5">
                  <Link href="/#services" className="hover:text-[#1D4ED8] transition">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#0B1F3A] font-medium">Capital Structure & Debt Advisory</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1D4ED8]/20 bg-[#E0EAFF] text-[#1D4ED8] text-[12px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  Pillar 01 · Capital & Financing
                </div>

                <h1 className="font-display text-[36px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-tight leading-[1.08] text-[#0B1F3A]">
                  Capital Structure
                  <br />
                  <span className="text-[#1D4ED8]">& Debt Advisory</span>
                </h1>

                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#4A5568] max-w-3xl">
                  Helping businesses evaluate capital requirements, structure debt and equity, improve financing efficiency, support growth transactions and prepare for strategic capital events.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#strategic-capital"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D4ED8] hover:bg-[#1746B1] text-white font-semibold text-[16px] transition shadow-soft"
                  >
                    Explore Advisory Areas
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <Link
                    href="/enquiry"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition"
                  >
                    Discuss Your Requirement
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
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                    The Capital Question
                  </span>

                  <h2 className="mt-3 font-display text-[30px] sm:text-[40px] font-bold text-[#0B1F3A] leading-tight">
                    Capital should support{" "}
                    <span className="text-[#1D4ED8]">the business strategy.</span>
                  </h2>

                  <p className="mt-6 text-[#4A5568] text-[16px] leading-[1.7]">
                    Financing decisions affect liquidity, cost of capital, ownership, flexibility and the ability to invest. QAP helps management evaluate these trade-offs in the context of the company's operating model and growth plans.
                  </p>

                  <p className="mt-4 text-[#4A5568] text-[16px] leading-[1.7]">
                    The objective is not simply to raise capital. It is to evaluate the amount, type, timing and structure of capital required for the business.
                  </p>
                </div>

                {/* Right Capital Stack */}
                <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-7 sm:p-9 shadow-soft">
                  <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8]">
                    Illustrative Capital Stack
                  </div>

                  <div className="mt-6 space-y-3">
                    {capitalStack.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl border border-[#E3E8F0] bg-[#F8FAFC]"
                      >
                        <span className="font-semibold text-[15px] text-[#0B1F3A]">{item.label}</span>
                        <span className={`font-bold text-[14px] px-2.5 py-1 rounded-md ${item.color}`}>
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-[12px] leading-relaxed text-[#94A3B8]">
                    Illustrative structure only. Actual capital mix depends on business requirements, credit profile, asset base, investor appetite and financing terms.
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
                  className="hover:text-[#1D4ED8] transition"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* MODULES */}
          
          {/* Module 1.1 */}
          <section id="strategic-capital" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E0EAFF] font-display font-bold text-[#1D4ED8] text-[12px]">
                      1.1
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Strategic Capital Structuring
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Structure capital around cost, risk and growth.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#1D4ED8]/25 bg-gradient-to-br from-[#EEF4FF] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#1D4ED8] bg-[#E0EAFF]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Strategic Capital Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews leverage, financing cost, cash generation, capital allocation, ownership structure and potential funding alternatives.
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
                    Strategic Capital Structuring Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support management in evaluating financing alternatives, capital allocation priorities and potential balance-sheet changes.</p>
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
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Debt-to-Equity Optimization & WACC Reduction
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        A ₹30Cr debt-funded manufacturer evaluates a blended financing structure with illustrative borrowing cost moving from 12.5% toward 8.8%, subject to eligibility and lender terms.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Lower financing expense can improve cash generation and debt-service capacity.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Balance Sheet De-Leveraging & Capital Allocation
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        An auto-component business evaluates a sale-and-leaseback of non-core industrial land to fund a ₹20Cr expansion.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Potentially preserve liquidity for growth while reducing pressure on incremental equity funding.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Enterprise Valuation, Cap Table & ESOP Architecture
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        An industrial technology company evaluates a 7% ESOP pool ahead of a potential institutional capital raise.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A structured ownership framework can support alignment, retention and investor discussions.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Capital structure assessment</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Financing scenario model</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Capital allocation framework</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Management decision pack</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 1.2 */}
          <section id="debt-credit" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E0EAFF] font-display font-bold text-[#1D4ED8] text-[12px]">
                      1.2
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Debt Syndication, Loans & Credit Management
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Improve access to debt and credit.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#1D4ED8]/25 bg-gradient-to-br from-[#EEF4FF] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#1D4ED8] bg-[#E0EAFF]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Debt & Credit Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews debt capacity, cash flows, collateral, lender requirements, credit profile and refinancing opportunities.
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
                    Debt & Credit Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support the preparation, evaluation and coordination of debt-financing discussions with relevant financial institutions and capital providers.</p>
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
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Working Capital & Term Loan Syndication
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess borrowing requirements and support lender-ready financing cases.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹45Cr combined working-capital and term-loan requirement for a manufacturing business.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improved liquidity and potentially more efficient financing.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Credit Rating Advisory
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Prepare financial analysis and lender-facing information relevant to credit-rating discussions.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative borrower evaluates steps required to support a potential improvement from BBB- toward A-.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A stronger credit profile may support improved financing terms, subject to lender and rating-agency assessment.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Collateral Monetization
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate eligible inventory, receivables and asset-backed financing opportunities.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹12Cr inventory-backed financing line for an export-oriented textile business.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Unlock liquidity against qualifying operating assets.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="3" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Private Credit & Alternative Debt
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate non-traditional debt structures where conventional financing may not fully address the requirement.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹15Cr mezzanine requirement for a precision engineering company.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Potentially provide growth capital while preserving more equity ownership than an equivalent equity raise.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="4" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Secured Debt Structuring
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate refinancing and asset-backed debt structures.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹15Cr loan refinancing from a 13.5% structure toward an asset-backed facility at 8.95%, subject to terms.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Potential reduction in interest expense and improvement in debt-service capacity.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="5" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Unsecured Business Finance & Credit Enhancement
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess financing alternatives where collateral availability is limited.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹5Cr working-capital requirement for a growing MSME evaluating eligible credit-enhancement routes.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Potentially expand financing access without relying solely on additional promoter equity.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Debt capacity assessment</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Financing requirement model</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Lender discussion pack</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Refinancing / capital alternatives</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 1.3 */}
          <section id="growth-capital" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E0EAFF] font-display font-bold text-[#1D4ED8] text-[12px]">
                      1.3
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Growth Capital & Expansion
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Fund the next stage of growth.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#1D4ED8]/25 bg-gradient-to-br from-[#EEF4FF] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#1D4ED8] bg-[#E0EAFF]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Growth Capital & Expansion Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews project economics, capital requirement, funding mix, cash flows, expansion risks and potential capital sources.
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
                    Growth Capital & Expansion Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support project sponsors in evaluating expansion structures, financing alternatives and potential investor or lender discussions.</p>
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
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Greenfield & Brownfield Expansion
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Project finance modelling, CapEx analysis, funding requirements and lender-readiness support.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹25Cr greenfield manufacturing project in Sonipat.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve project-bankability analysis and funding readiness.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Industrial Corridor Capital Deployment
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate infrastructure, location, CapEx and financing considerations for industrial expansion.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹18Cr project along a major industrial corridor.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Better alignment between project CapEx, infrastructure requirements and available funding.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Angel / Family Office / Venture Financing
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Support capital strategy, investor materials, financial modelling and investor discussions.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹3Cr financing requirement for an industrial automation startup.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Extend runway and align capital with the company's growth milestones.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Project financial model</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Funding requirement analysis</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Capital structure scenarios</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Investor / lender discussion materials</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 1.4 */}
          <section id="transactions" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E0EAFF] font-display font-bold text-[#1D4ED8] text-[12px]">
                      1.4
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      M&A & Strategic Transactions
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Structure transactions around strategic value.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#1D4ED8]/25 bg-gradient-to-br from-[#EEF4FF] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#1D4ED8] bg-[#E0EAFF]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Strategic Transactions Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews transaction rationale, valuation, funding, ownership, synergies and key financial considerations.
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
                    M&A & Strategic Transactions Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support transaction preparation, financial analysis, valuation, negotiations and coordination with relevant transaction specialists.</p>
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
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Equity Capital Raising
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Capital requirement, valuation and investor materials.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    

                    
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Buy-Side M&A
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Target screening, valuation and financial diligence support.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    

                    
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Sell-Side M&A
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Business positioning, valuation and transaction preparation.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    

                    
                  </div>
                </div>
  

                <div key="3" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      JV & Strategic Partnerships
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Ownership, economics and strategic-partner structures.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    

                    
                  </div>
                </div>
  

                <div key="4" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Cross-Border Transactions
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Financial modelling, transaction structuring and specialist coordination.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    

                    
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Transaction financial model</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Valuation analysis</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Transaction / investor materials</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Transaction coordination support</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 1.5 */}
          <section id="ipo" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E0EAFF] font-display font-bold text-[#1D4ED8] text-[12px]">
                      1.5
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      IPO & Public Market Readiness
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Prepare the business for public markets.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#1D4ED8]/25 bg-gradient-to-br from-[#EEF4FF] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#1D4ED8] bg-[#E0EAFF]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP IPO Readiness Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews financial reporting, governance, capital structure, business metrics, management processes and public-market preparation requirements.
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
                    IPO & Public Markets Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support management in preparing for public-market requirements and coordinate with qualified transaction professionals where required.</p>
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
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      SME / Mainboard IPO Roadmap
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Map the financial, governance and operational preparation required for a potential public-market process.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹60Cr-revenue manufacturing business evaluating an SME IPO pathway.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Identify readiness gaps before formal transaction execution.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Pre-IPO Capital
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate potential pre-IPO financing requirements and capital-structure considerations.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative ₹6Cr pre-IPO placement evaluation.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Align capital requirements with the broader public-market preparation process.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      DRHP & Merchant Banker Coordination
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Support financial analysis, information preparation and coordination with qualified transaction professionals.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative management information pack prepared for transaction-professional review.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve information consistency and preparation discipline.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="3" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#1D4ED8]">
                      <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Governance & Public-Market Readiness
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess management reporting, controls, governance and financial visibility required for institutional scrutiny.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E293B] leading-relaxed">
                        Illustrative promoter-led business preparing its finance function for institutional reporting requirements.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve governance and reporting readiness before a potential listing process.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>IPO readiness assessment</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Financial / governance gap analysis</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>IPO preparation roadmap</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>Merchant banker coordination support</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* CONNECTED ADVISORY */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                  Connected Advisory
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  Capital decisions rarely exist{" "}
                  <span className="text-[#1D4ED8]">in isolation.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  A capital requirement may also involve working capital, procurement, government incentives, operational improvement, FP&A or governance. QAP can connect the relevant advisory areas where the situation requires it.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {connectedPillars.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="rounded-[22px] border border-[#E3E8F0] bg-white p-6 hover:border-[#1D4ED8]/40 hover:shadow-soft transition group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#E0EAFF] px-2.5 py-1 rounded-full">
                        {p.tag}
                      </span>
                      <h3 className="mt-4 font-display text-[18px] font-bold text-[#0B1F3A] group-hover:text-[#1D4ED8] transition">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[#64748B] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#1D4ED8]">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="py-20 sm:py-28 bg-[#1D4ED8] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/80">
                Capital Strategy
              </span>

              <h2 className="mt-4 font-display text-[32px] sm:text-[46px] font-extrabold text-white leading-tight">
                Evaluating a financing, expansion or transaction?
              </h2>

              <p className="mt-4 text-white/80 max-w-2xl mx-auto text-[16px] sm:text-[18px] leading-relaxed">
                Start with the capital requirement, the business economics and the available alternatives.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#EEF4FF] text-[#1D4ED8] font-bold text-[16px] transition shadow-soft"
                >
                  Discuss Your Requirement
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
                <strong className="text-[#64748B]">Illustrative examples and outcomes:</strong> The examples, transaction sizes, financial metrics and potential outcomes presented on this page are illustrative and are intended to explain the types of situations QAP may support. They do not represent completed client engagements unless specifically identified as such. Actual outcomes depend on client circumstances, available information, commercial negotiations, financing terms, eligibility, third-party decisions, applicable laws and regulatory approvals. QAP provides advisory, introduction, support and coordination services and does not guarantee financing, investment, government incentives, regulatory approvals or financial outcomes.
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
