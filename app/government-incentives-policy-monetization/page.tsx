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
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Coins,
  Scale
} from "lucide-react";
import Link from "next/link";

export default function GovernmentIncentivesPage() {
  const subNav = [
    { label: "3.1 Incentive Discovery", href: "#incentive-discovery" },
    { label: "3.2 Investment & Capital", href: "#investment-incentives" },
    { label: "3.3 Tax, Export & Operating", href: "#tax-export" },
    { label: "3.4 Policy Monetization", href: "#policy-monetization" },
    { label: "3.5 Claims & Compliance", href: "#claims-compliance" },
  ];

  const incentiveStack = [
    { label: "Capital Subsidies & Capex Support", desc: "Upfront and milestone grants on machinery, technology and civil assets", color: "text-[#16A34A] bg-[#DCFCE7]" },
    { label: "Interest Subvention & Finance Benefits", desc: "Rebates and lower borrowing costs on project term debt", color: "text-[#0F766E] bg-[#DDF5F0]" },
    { label: "State Industrial Policy Packages", desc: "Stamp duty exemptions, power subsidies, land rebates and SGST benefits", color: "text-[#B45309] bg-[#FFF1D6]" },
    { label: "Tax, Export & Technology Benefits", desc: "Duty drawbacks, R&D credits, export incentives and green transition support", color: "text-[#1D4ED8] bg-[#E0EAFF]" },
    { label: "Claims Recovery & Ongoing Compliance", desc: "Milestone management, compliance documentation and claim realization", color: "text-[#6D28D9] bg-[#EAE4FF]" },
  ];

  const businessOutcomes = [
    {
      title: "Lower Effective Cost",
      desc: "Identify eligible benefits that may reduce investment or operating costs.",
      icon: Coins,
      color: "text-[#16A34A] bg-[#DCFCE7]",
    },
    {
      title: "Better Project Economics",
      desc: "Incorporate incentive value into project returns, payback and investment decisions.",
      icon: TrendingUp,
      color: "text-[#1D4ED8] bg-[#E0EAFF]",
    },
    {
      title: "Cash Flow Support",
      desc: "Structured recovery of eligible government incentives and claims.",
      icon: DollarSign,
      color: "text-[#0F766E] bg-[#DDF5F0]",
    },
    {
      title: "Management Visibility",
      desc: "Clear tracking of qualification thresholds, documentation and compliance.",
      icon: Scale,
      color: "text-[#B45309] bg-[#FFF1D6]",
    },
  ];

  const connectedPillars = [
    {
      title: "Capital Structure & Debt Advisory",
      desc: "Integrate incentive economics with financing requirements, debt capacity and capital allocation.",
      href: "/capital-structure-debt-advisory",
      tag: "Pillar 01",
    },
    {
      title: "CFO & Governance",
      desc: "Embed incentive tracking into FP&A, cash-flow management, MIS and governance.",
      href: "/cfo-governance",
      tag: "Pillar 02",
    },
    {
      title: "Operations & Supply Chain Value Creation",
      desc: "Connect policy-linked technology, power and infrastructure incentives with operational plans.",
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
          <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#DCFCE7]/50 via-white to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] text-[#64748B] mb-5">
                  <Link href="/#services" className="hover:text-[#1D4ED8] transition">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#0B1F3A] font-medium">Government Incentives & Policy Monetization</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#16A34A]/20 bg-[#DCFCE7] text-[#16A34A] text-[12px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  Pillar 03 · Policy Monetization
                </div>

                <h1 className="font-display text-[36px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-tight leading-[1.08] text-[#0B1F3A]">
                  Government Incentives
                  <br />
                  <span className="text-[#16A34A]">& Policy Monetization</span>
                </h1>

                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#4A5568] max-w-3xl">
                  Government policy should become measurable business value. Build a structured view of central, state, sector-specific and policy-linked incentives based on investment, capex, exports and operating profile.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#incentive-discovery"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-[16px] transition shadow-soft"
                  >
                    Explore Advisory Areas
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <Link
                    href="/enquiry"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[#0B1F3A] font-semibold text-[16px] transition"
                  >
                    Discuss Your Opportunity
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
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#16A34A]">
                    The Policy Question
                  </span>

                  <h2 className="mt-3 font-display text-[30px] sm:text-[40px] font-bold text-[#0B1F3A] leading-tight">
                    Government policy should become{" "}
                    <span className="text-[#16A34A]">measurable business value.</span>
                  </h2>

                  <p className="mt-6 text-[#4A5568] text-[16px] leading-[1.7]">
                    Central and state governments offer substantial policy support, capital subsidies, production-linked incentives, interest subvention, export benefits and industrial packages to promote investment, manufacturing and employment.
                  </p>

                  <p className="mt-4 text-[#4A5568] text-[16px] leading-[1.7]">
                    However, navigating eligibility thresholds, multi-tier approvals, documentation requirements and claim cycles can be challenging. QAP structures the process into a clear roadmap from discovery to realization.
                  </p>
                </div>

                {/* Right Incentive Stack */}
                <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-7 sm:p-9 shadow-soft">
                  <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8]">
                    Illustrative Incentive Value Stack
                  </div>

                  <div className="mt-6 space-y-3">
                    {incentiveStack.map((item, idx) => (
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
                    Connecting central and state policy schemes directly to the company's capital allocation and operating model.
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
                  className="hover:text-[#16A34A] transition"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* MODULES */}
          
          {/* Module 3.1 */}
          <section id="incentive-discovery" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCFCE7] font-display font-bold text-[#16A34A] text-[12px]">
                      3.1
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Incentive Discovery & Eligibility
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Find the incentives the business can actually use.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#16A34A]/25 bg-gradient-to-br from-[#DCFCE7] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#16A34A] bg-[#DCFCE7]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Incentive Opportunity Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Maps the business profile against relevant incentive categories, eligibility conditions, investment thresholds, timelines and documentation requirements.
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
                    Incentive Mapping & Eligibility Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Translate the company's investment and operating profile into a prioritized incentive opportunity map and identify the financial relevance of each opportunity.</p>
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
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Central & State Incentive Mapping
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A ₹40Cr manufacturing expansion is screened across investment, employment, electricity, capital subsidy and state industrial-policy categories.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Reduce the risk of overlooking material policy-linked economic benefits.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Eligibility & Scheme Screening
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A company planning a new facility tests whether its proposed ₹25Cr capex qualifies under multiple investment and sector thresholds.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Align investment decisions with eligibility requirements before capital is committed.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Incentive Economics & ROI
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A project model compares ₹50Cr capex with different incentive scenarios to determine the potential effect on project IRR and payback.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Make policy benefits part of the investment decision rather than treating them as an afterthought.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Incentive opportunity map</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Eligibility matrix</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Incentive value model</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Priority action plan</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 3.2 */}
          <section id="investment-incentives" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCFCE7] font-display font-bold text-[#16A34A] text-[12px]">
                      3.2
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Investment & Capital Incentives
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Build incentives into the investment case.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Illustrative ₹30Cr expansion assessed for potential capital support linked to qualifying investment.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#16A34A]/25 bg-gradient-to-br from-[#DCFCE7] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#16A34A] bg-[#DCFCE7]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Investment Incentive Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Evaluates how available incentives may affect project cost, financing requirements, returns, cash flows and investment timing.
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
                    Investment Incentive Structuring
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Integrate eligible policy benefits into capex planning, project finance, business cases and investment decisions.</p>
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
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Capital Subsidies & Investment Support
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate eligible capital expenditure support and investment-linked incentives for expansion, modernization and new facilities.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Illustrative ₹30Cr expansion assessed for potential capital support linked to qualifying investment.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Reduce effective project cost where eligible benefits are successfully realized.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Interest & Financing-linked Support
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess interest subsidies, financing support and other mechanisms that may reduce the effective cost of capital.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A ₹15Cr term-loan requirement is assessed for potentially eligible interest support under an applicable scheme.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Potentially improve financing economics and project cash flow.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Employment & Workforce Incentives
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Identify policy benefits connected to employment creation, workforce development, skilling and eligible hiring commitments.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A new facility planning 250 incremental employees evaluates applicable workforce-linked policy benefits.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Improve the economics of expansion while aligning workforce plans with available policy support.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Incentive economics</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Project impact model</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Funding interaction analysis</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Investment decision pack</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 3.3 */}
          <section id="tax-export" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCFCE7] font-display font-bold text-[#16A34A] text-[12px]">
                      3.3
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Tax, Export & Operating Benefits
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Capture policy value across the operating model.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    A growing enterprise evaluates whether its proposed location, investment and activity meet requirements for applicable fiscal support.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#16A34A]/25 bg-gradient-to-br from-[#DCFCE7] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#16A34A] bg-[#DCFCE7]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Operating Incentive Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews recurring and transaction-linked policy opportunities across tax, exports, imports, power, employment and operations.
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
                    Tax, Export & Operating Incentive Advisory
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Assess policy-linked benefits that may affect recurring operating costs, export economics, working capital and transaction profitability.</p>
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
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Tax & Fiscal Incentive Assessment
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Review potentially applicable tax-linked and fiscal incentives and incorporate them into financial planning.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A growing enterprise evaluates whether its proposed location, investment and activity meet requirements for applicable fiscal support.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Improve after-tax project and business economics where benefits are available.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Export & Trade-linked Opportunities
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess eligible export, trade and customs-related opportunities that may affect landed cost, realization and working capital.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        An export-oriented manufacturer reviews policy support across exports, imported inputs and qualifying operating activities.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Potentially improve export competitiveness and cash conversion.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Power, Infrastructure & Operating Benefits
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Evaluate location and operating-policy benefits affecting electricity, infrastructure and other recurring costs.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A plant expansion compares locations using eligible infrastructure and operating incentives alongside normal commercial costs.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Incorporate policy economics into location and operating decisions.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Tax & incentive assessment</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Export opportunity review</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Operating benefit model</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Financial impact analysis</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 3.4 */}
          <section id="policy-monetization" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCFCE7] font-display font-bold text-[#16A34A] text-[12px]">
                      3.4
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Policy Monetization & Execution
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Move from eligibility to realization.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    A proposed ₹60Cr facility is converted into a project investment case with qualifying capex, employment and milestone assumptions.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#16A34A]/25 bg-gradient-to-br from-[#DCFCE7] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#16A34A] bg-[#DCFCE7]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Policy Monetization Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Converts identified incentives into a practical realization roadmap covering economics, ownership, documentation, milestones and management accountability.
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
                    Policy Monetization & Implementation Support
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Support management in converting identified policy opportunities into structured actions, financial value and measurable realization milestones.</p>
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
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Application & Business Case Structuring
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Translate the investment plan and financial case into a structured incentive application framework.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A proposed ₹60Cr facility is converted into a project investment case with qualifying capex, employment and milestone assumptions.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Create a clearer financial and operational basis for incentive realization.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Milestone & Claim Management
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Structure milestones, qualifying expenditure, documentation and claim requirements around the approved incentive framework.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A multi-year expansion tracks qualifying capex, employment and operational milestones against the approved framework.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Reduce leakage caused by missed milestones or incomplete supporting documentation.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Incentive Tracking & Value Realization
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Establish management dashboards to track approved, claimed, received and outstanding incentive value.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A business tracks ₹5Cr of identified policy opportunities through eligibility, approval, claim and realization stages.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Give management visibility over the value actually converted from policy opportunities.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Monetization roadmap</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Application framework</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Milestone tracker</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Value realization dashboard</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 3.5 */}
          <section id="claims-compliance" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DCFCE7] font-display font-bold text-[#16A34A] text-[12px]">
                      3.5
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Claims, Documentation & Compliance
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Protect the value after approval.
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Capex invoices, fixed-asset records, employment data and project milestones are mapped into a claim-support framework.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#16A34A]/25 bg-gradient-to-br from-[#DCFCE7] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#16A34A] bg-[#DCFCE7]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Incentive Compliance Diagnostic™
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    Reviews documentation, financial evidence, qualifying conditions, reporting requirements and potential compliance gaps.
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
                    Incentive Compliance & Governance
                  </h3>
                  <p className="mt-1 text-[13px] text-[#64748B]">Establish a management framework for tracking eligibility, documentation, claims, approvals, receipts and ongoing obligations.</p>
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
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Documentation & Evidence Framework
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Structure financial and operational evidence required to support incentive claims and ongoing eligibility.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Capex invoices, fixed-asset records, employment data and project milestones are mapped into a claim-support framework.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Improve auditability and reduce avoidable documentation gaps.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Claim Readiness & Review
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Review the financial and operational readiness of claims before submission or management review.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A ₹3Cr incentive claim is reviewed against qualifying expenditure, supporting records and applicable conditions.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Improve claim quality and management visibility before filing.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#16A34A]">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Incentive Governance Dashboard
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Track identified, approved, claimed, received and at-risk incentive value through a management reporting framework.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A multi-location group consolidates incentive status across projects, states and business units.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#EEF4FF] border border-[#1D4ED8]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#1E3A8A] leading-relaxed">
                        Create accountability for the financial value of policy opportunities.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Documentation matrix</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Claim readiness review</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Compliance tracker</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0" />
                    <span>Incentive governance dashboard</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* BUSINESS OUTCOMES */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#16A34A]">
                  Business Outcomes
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  Convert policy complexity into{" "}
                  <span className="text-[#16A34A]">financial visibility.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  The objective is not simply to identify schemes. It is to connect government policy with investment decisions, operating economics, cash flows and management accountability.
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
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#16A34A]">
                  Connected Advisory
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  Policy value connects with{" "}
                  <span className="text-[#16A34A]">the wider business.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  Government incentives are most valuable when integrated with capital planning, finance, operations and strategic decisions.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {connectedPillars.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="rounded-[22px] border border-[#E3E8F0] bg-white p-6 hover:border-[#16A34A]/40 hover:shadow-soft transition group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-full">
                        {p.tag}
                      </span>
                      <h3 className="mt-4 font-display text-[18px] font-bold text-[#0B1F3A] group-hover:text-[#16A34A] transition">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[#64748B] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#16A34A]">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="py-20 sm:py-28 bg-[#16A34A] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/80">
                Policy Value Assessment
              </span>

              <h2 className="mt-4 font-display text-[32px] sm:text-[46px] font-extrabold text-white leading-tight">
                Is your business capturing the policy value available to it?
              </h2>

              <p className="mt-4 text-white/80 max-w-2xl mx-auto text-[16px] sm:text-[18px] leading-relaxed">
                We can assess your investment profile, operating footprint, growth plans and potential incentive opportunities and convert the findings into a practical action roadmap.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#DCFCE7] text-[#16A34A] font-bold text-[16px] transition shadow-soft"
                >
                  Discuss Your Opportunity
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
                <strong className="text-[#64748B]">Illustrative Disclaimer:</strong> Examples, percentages, incentive values and financial outcomes shown on this page are illustrative only and do not represent guaranteed benefits, approvals, savings or eligibility. Actual incentives depend on applicable laws, regulations, government schemes, scheme-specific conditions, location, sector, investment, documentation, timing and approval by the relevant authority. QAP advisory does not constitute a government approval, tax opinion or legal opinion.
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
