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
  Settings2,
  TrendingDown,
  DollarSign,
  Gauge,
  Eye,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function OperationsSupplyChainPage() {
  const subNav = [
    { label: "4.1 Operating Model", href: "#operating-model" },
    { label: "4.2 Procurement & Cost", href: "#procurement" },
    { label: "4.3 Working Capital & Logistics", href: "#working-capital" },
    { label: "4.4 Capacity & Efficiency", href: "#efficiency" },
    { label: "4.5 Transformation Execution", href: "#performance" },
  ];

  const operatingModelStack = [
    { label: "Process Friction & Operating Bottlenecks", desc: "Handoff failures, duplication and administrative delays", color: "text-[#1D4ED8] bg-[#E0EAFF]" },
    { label: "Procurement Leakage & Category Inefficiencies", desc: "Spend concentration, pricing disparities and supplier terms", color: "text-[#0F766E] bg-[#DDF5F0]" },
    { label: "Trapped Inventory & Working Capital Inefficiency", desc: "Excess inventory, slow SKU velocity and ordering cycles", color: "text-[#B45309] bg-[#FFF1D6]" },
    { label: "Asset Under-Utilization & Capacity Imbalances", desc: "Downtime, changeovers and yield loss across operations", color: "text-[#16A34A] bg-[#DCFCE7]" },
    { label: "Execution Gaps & Performance Management Discipline", desc: "Lagging KPIs, initiative tracking and value leakage", color: "text-[#6D28D9] bg-[#EAE4FF]" },
  ];

  const businessOutcomes = [
    {
      title: "Lower Cost",
      desc: "Procurement, logistics, process and operating-cost improvement.",
      icon: TrendingDown,
      color: "text-[#1D4ED8] bg-[#E0EAFF]",
    },
    {
      title: "Release Cash",
      desc: "Lower inventory and stronger working-capital discipline.",
      icon: DollarSign,
      color: "text-[#0F766E] bg-[#DDF5F0]",
    },
    {
      title: "Improve Throughput",
      desc: "Better utilization of capacity, people, assets and processes.",
      icon: Gauge,
      color: "text-[#B45309] bg-[#FFF1D6]",
    },
    {
      title: "Management Visibility",
      desc: "Clear operational KPIs connected directly to financial performance.",
      icon: Eye,
      color: "text-[#16A34A] bg-[#DCFCE7]",
    },
  ];

  const connectedPillars = [
    {
      title: "Capital Structure & Debt Advisory",
      desc: "Connect operational cash generation and funding requirements with capital decisions.",
      href: "/capital-structure-debt-advisory",
      tag: "Pillar 01",
    },
    {
      title: "CFO & Governance",
      desc: "Convert operating data into management reporting, planning and decision support.",
      href: "/cfo-governance",
      tag: "Pillar 02",
    },
    {
      title: "Government Incentives & Policy Monetization",
      desc: "Assess policy-linked opportunities that may support investment and operating economics.",
      href: "/government-incentives-policy-monetization",
      tag: "Pillar 03",
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
          <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF1D6]/50 via-white to-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="max-w-4xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] text-[#64748B] mb-5">
                  <Link href="/#services" className="hover:text-[#1D4ED8] transition">Services</Link>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#0B1F3A] font-medium">Operations & Supply Chain Value Creation</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B45309]/20 bg-[#FFF1D6] text-[#B45309] text-[12px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                  Pillar 04 · Operational Excellence
                </div>

                <h1 className="font-display text-[36px] sm:text-[54px] lg:text-[64px] font-extrabold tracking-tight leading-[1.08] text-[#0B1F3A]">
                  Operations & Supply Chain
                  <br />
                  <span className="text-[#B45309]">Value Creation</span>
                </h1>

                <p className="mt-6 text-[17px] sm:text-[19px] leading-[1.7] text-[#4A5568] max-w-3xl">
                  Turn operational complexity into measurable business value. We help businesses identify where cost, cash, capacity and service performance are being lost across procurement, inventory, logistics, production and operating processes.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#operating-model"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white font-semibold text-[16px] transition shadow-soft"
                  >
                    Explore Advisory Areas
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
            </div>
          </section>

          {/* THE QUESTION SECTION */}
          <section className="py-20 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#B45309]">
                    The Operating Value Question
                  </span>

                  <h2 className="mt-3 font-display text-[30px] sm:text-[40px] font-bold text-[#0B1F3A] leading-tight">
                    Where is operational performance being lost —{" "}
                    <span className="text-[#B45309]">and how much value can be recovered?</span>
                  </h2>

                  <p className="mt-6 text-[#4A5568] text-[16px] leading-[1.7]">
                    Growth can be constrained by more than revenue. Procurement leakage, excess inventory, inefficient logistics, low asset utilization, fragmented processes, weak planning and poor performance visibility can quietly erode margins and consume cash.
                  </p>

                  <p className="mt-4 text-[#4A5568] text-[16px] leading-[1.7]">
                    QAP approaches operations as a value-creation problem. We connect operational drivers to financial outcomes so management can see what is happening, quantify the opportunity, prioritize interventions and execute against measurable targets.
                  </p>
                </div>

                {/* Right Operating System Stack */}
                <div className="rounded-[24px] border border-[#E3E8F0] bg-white p-7 sm:p-9 shadow-soft">
                  <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8]">
                    From Operational Diagnosis to Financial Value
                  </div>

                  <div className="mt-6 space-y-3">
                    {operatingModelStack.map((item, idx) => (
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
                    Connecting shop-floor, warehouse and procurement execution directly to the board's P&L and balance sheet.
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
                  className="hover:text-[#B45309] transition"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* MODULES */}
          
          {/* Module 4.1 */}
          <section id="operating-model" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF1D6] font-display font-bold text-[#B45309] text-[12px]">
                      4.1
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Operating Model & Supply Chain Diagnostic
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Operating Model & Supply Chain Diagnostic
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Establish where the operating model is creating friction, cost, delay or service risk, and identify the highest-value intervention points across the end-to-end supply chain.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#B45309]/25 bg-gradient-to-br from-[#FFF1D6] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#B45309] bg-[#FFF1D6]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Operating Model Diagnostic™
                  </h3>
                  <div className="text-[13px] font-semibold text-[#0B1F3A] mt-1">Diagnose the operating system before prescribing solutions.</div>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    We assess process flows, organizational interfaces, supply-chain dependencies, decision rights, data visibility and operational bottlenecks to identify where performance is being constrained.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      End-to-End Process Mapping
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Map critical workflows to identify handoff failures, duplication, delays and operational bottlenecks.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A multi-location business maps procure-to-pay and order-to-delivery processes to identify duplicate approvals and manual handoffs.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Reduce process friction, cycle time and avoidable administrative effort.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Operating Model Design
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess roles, responsibilities, decision rights, governance and operating rhythms across functions and locations.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A growing enterprise reviews centralized versus local decision-making across procurement, operations and finance.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve accountability, decision speed and consistency of execution.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Supply Chain Performance
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Establish operational KPIs that connect service, cost, inventory, throughput and cash performance.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A business combines supplier, inventory, fulfillment and service metrics into a single operating performance framework.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Give management clearer visibility into operational and financial drivers.
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
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Operating model diagnostic</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>End-to-end process maps</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Supply chain performance assessment</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Bottleneck and value-leakage analysis</span>
                  </div>

                  <div key="4" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Operating KPI framework</span>
                  </div>

                  <div key="5" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Prioritized value-creation roadmap</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 4.2 */}
          <section id="procurement" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF1D6] font-display font-bold text-[#B45309] text-[12px]">
                      4.2
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Procurement & Cost Optimization
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Procurement & Cost Optimization
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Identify procurement leakage, supplier concentration, pricing inefficiencies and category-level opportunities that can improve margins and release cash.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#B45309]/25 bg-gradient-to-br from-[#FFF1D6] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#B45309] bg-[#FFF1D6]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Procurement Value Diagnostic™
                  </h3>
                  <div className="text-[13px] font-semibold text-[#0B1F3A] mt-1">Determine where procurement economics are leaking value.</div>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    We analyze spend categories, suppliers, pricing, payment terms, purchase patterns, specifications and sourcing structures to identify measurable procurement opportunities.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Spend & Category Analytics
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Analyze supplier and category spend to identify concentration, fragmentation, price variance and sourcing opportunities.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A manufacturer consolidates fragmented spend across raw materials, logistics and indirect procurement to identify category-level opportunities.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve purchasing leverage and identify addressable cost opportunities.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Supplier & Sourcing Strategy
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Develop supplier strategies, negotiation levers, alternate-source assessments and sourcing scenarios.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A business evaluates incumbent suppliers against alternate domestic and international sources before a major sourcing decision.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve supplier economics, resilience and negotiating position.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Cost & Commercial Optimization
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess pricing, specifications, payment terms, commercial structures and total-cost-of-ownership opportunities.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A procurement team reviews unit prices, freight, payment terms, quality costs and specifications rather than evaluating price alone.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve total landed cost and protect margin beyond headline purchase price.
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
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Spend cube / procurement diagnostic</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Category opportunity assessment</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Supplier segmentation</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Sourcing and negotiation roadmap</span>
                  </div>

                  <div key="4" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Procurement savings bridge</span>
                  </div>

                  <div key="5" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Procurement governance framework</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 4.3 */}
          <section id="working-capital" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF1D6] font-display font-bold text-[#B45309] text-[12px]">
                      4.3
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Inventory, Working Capital & Logistics
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Inventory, Working Capital & Logistics
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Improve the conversion of inventory and operating resources into cash while balancing working-capital efficiency with customer service and operational continuity.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#B45309]/25 bg-gradient-to-br from-[#FFF1D6] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#B45309] bg-[#FFF1D6]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Working Capital Diagnostic™
                  </h3>
                  <div className="text-[13px] font-semibold text-[#0B1F3A] mt-1">Find cash trapped inside the operating cycle.</div>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    We examine inventory levels, SKU behavior, receivables, purchasing cycles, logistics costs, order patterns and operating processes to identify avoidable cash consumption and service inefficiencies.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Inventory Optimization
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Assess SKU velocity, safety stock, slow-moving inventory, replenishment policies and inventory segmentation.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A distributor segments inventory by velocity, margin and service requirements to identify excess and slow-moving stock.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Release working capital while improving inventory discipline.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Logistics & Freight
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Review freight economics, routes, shipment patterns, network design and logistics service-cost trade-offs.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A multi-location business analyzes freight lanes, shipment frequency and carrier economics to identify avoidable logistics costs.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Lower logistics cost and improve network efficiency.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Cash Conversion
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Connect inventory, receivables, payables and operating-cycle decisions to measurable cash-release opportunities.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A business reviews inventory days, receivable days and supplier terms together rather than treating each working-capital component separately.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve cash conversion and reduce funding pressure from operations.
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
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Working-capital diagnostic</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Inventory segmentation</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>SKU / slow-moving inventory analysis</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Logistics cost assessment</span>
                  </div>

                  <div key="4" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Cash-release opportunity model</span>
                  </div>

                  <div key="5" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Working-capital improvement roadmap</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 4.4 */}
          <section id="efficiency" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF1D6] font-display font-bold text-[#B45309] text-[12px]">
                      4.4
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Production, Capacity & Process Efficiency
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Production, Capacity & Process Efficiency
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Improve throughput, capacity utilization and process economics by connecting operational constraints with financial performance.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#B45309]/25 bg-gradient-to-br from-[#FFF1D6] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#B45309] bg-[#FFF1D6]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Operational Efficiency Diagnostic™
                  </h3>
                  <div className="text-[13px] font-semibold text-[#0B1F3A] mt-1">Quantify where capacity and process economics are being lost.</div>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    We assess throughput, capacity utilization, downtime, process steps, productivity, yield, bottlenecks and resource allocation to identify improvement opportunities.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Capacity & Throughput
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Analyze bottlenecks, capacity utilization, throughput and production constraints across critical operating processes.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A plant evaluates bottlenecks and production scheduling before committing capital to additional equipment.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve throughput and utilization of existing capacity.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Process Productivity
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Identify process waste, manual activity, productivity gaps and opportunities for standardization or automation.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A business identifies repetitive manual activities across operations and assesses their suitability for standardization or automation.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Reduce process effort and improve consistency of execution.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Operational Economics
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Translate operational improvements into margin, capacity, cost-per-unit and investment economics.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A manufacturer compares the economics of process improvement, outsourcing and new-capacity investment.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve capital-allocation decisions and operating margins.
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
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Operational efficiency diagnostic</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Capacity and bottleneck assessment</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Process productivity analysis</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Improvement opportunity register</span>
                  </div>

                  <div key="4" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Automation / digitization assessment</span>
                  </div>

                  <div key="5" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Operational value-creation roadmap</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* Module 4.5 */}
          <section id="performance" className="py-16 sm:py-24 border-t border-[#E3E8F0] bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Module Header */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF1D6] font-display font-bold text-[#B45309] text-[12px]">
                      4.5
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#64748B]">
                      Performance Management & Transformation Execution
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-[26px] sm:text-[38px] font-bold text-[#0B1F3A] leading-tight">
                    Performance Management & Transformation Execution
                  </h2>

                  <p className="mt-3 text-[16px] text-[#4A5568] leading-relaxed max-w-3xl">
                    Convert operational improvement plans into measurable initiatives with ownership, milestones, financial tracking and management visibility.
                  </p>
                </div>

                {/* Diagnostic Card in Header */}
                <div className="lg:col-span-4 rounded-2xl border border-[#B45309]/25 bg-gradient-to-br from-[#FFF1D6] to-white p-6 shadow-soft">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md text-[#B45309] bg-[#FFF1D6]">
                    QAP Diagnostic
                  </span>
                  <h3 className="mt-3 font-display font-bold text-[17px] text-[#0B1F3A]">
                    QAP Performance Transformation Diagnostic™
                  </h3>
                  <div className="text-[13px] font-semibold text-[#0B1F3A] mt-1">Determine whether improvement initiatives are actually translating into value.</div>
                  <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed">
                    We assess performance-management routines, KPI definitions, initiative ownership, reporting structures, financial tracking and execution discipline.
                  </p>
                </div>
              </div>

              {/* Advisory Bar */}
              

              {/* Capabilities Grid */}
              <div className="mt-8">
                <div className="text-[12px] uppercase font-bold tracking-wider text-[#94A3B8] mb-4">
                  Capabilities & Advisory Levers
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  
                <div key="0" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      KPI & Performance Architecture
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Define operational and financial KPIs, ownership structures and management reporting aligned to business priorities.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A management team replaces fragmented operational reporting with a focused KPI architecture linked to financial performance.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve management visibility and accountability.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="1" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Transformation Roadmaps
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Translate identified opportunities into prioritized initiatives, milestones, owners, dependencies and implementation plans.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A business converts identified procurement, inventory and process opportunities into a sequenced transformation roadmap.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        Improve execution discipline and prioritize initiatives by value.
                      </p>
                    </div>
                  </div>
                </div>
  

                <div key="2" className="rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-soft hover:shadow-soft-lg transition flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#B45309]">
                      <span className="w-2 h-2 rounded-full bg-[#B45309]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">Capability</span>
                    </div>
                    <h4 className="mt-3 font-display text-[18px] font-bold text-[#0B1F3A]">
                      Value Tracking & Governance
                    </h4>
                    <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
                      Track financial and operational impact through initiative-level value bridges, dashboards and structured management reviews.
                    </p>
                  </div>

                  <div className="mt-5 space-y-3 pt-4 border-t border-[#F1F5F9]">
                    
                    <div className="rounded-xl bg-[#FFF1D6] border border-[#B45309]/15 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                        Illustrative Example
                      </div>
                      <p className="mt-1 text-[12px] text-[#78350F] leading-relaxed">
                        A transformation program tracks planned, realized and remaining value across individual initiatives.
                      </p>
                    </div>

                    
                    <div className="rounded-xl bg-[#DCFCE7] border border-[#16A34A]/20 p-3.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">
                        Potential Impact
                      </div>
                      <p className="mt-1 text-[12px] text-[#14532D] leading-relaxed">
                        A transformation program tracks planned, realized and remaining value across individual initiatives.
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
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  
                  <div key="0" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Performance management framework</span>
                  </div>

                  <div key="1" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>KPI and dashboard architecture</span>
                  </div>

                  <div key="2" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Transformation initiative register</span>
                  </div>

                  <div key="3" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Initiative-level value bridge</span>
                  </div>

                  <div key="4" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Management review cadence</span>
                  </div>

                  <div key="5" className="flex items-center gap-2 text-[13px] font-medium text-[#1E293B] bg-white rounded-xl px-3.5 py-2.5 border border-[#E2E8F0] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] shrink-0" />
                    <span>Transformation execution roadmap</span>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
  

          {/* BUSINESS OUTCOMES */}
          <section className="py-20 sm:py-28 border-t border-[#E3E8F0] bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#B45309]">
                  Business Outcomes
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  Operations improvement should show up{" "}
                  <span className="text-[#B45309]">in the economics of the business.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  The objective is not simply to make processes cleaner. It is to improve the financial and commercial performance generated by those processes.
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
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#B45309]">
                  Connected Advisory
                </span>

                <h2 className="mt-3 font-display text-[30px] sm:text-[44px] font-bold text-[#0B1F3A]">
                  Operational value is strongest when it connects{" "}
                  <span className="text-[#B45309]">to finance and capital decisions.</span>
                </h2>

                <p className="mt-4 text-[#4A5568] text-[16px] leading-relaxed">
                  Operations and supply-chain improvement directly influence working-capital requirements, debt capacity, project economics and executive reporting.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {connectedPillars.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="rounded-[22px] border border-[#E3E8F0] bg-white p-6 hover:border-[#B45309]/40 hover:shadow-soft transition group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] bg-[#FFF1D6] px-2.5 py-1 rounded-full">
                        {p.tag}
                      </span>
                      <h3 className="mt-4 font-display text-[18px] font-bold text-[#0B1F3A] group-hover:text-[#B45309] transition">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[#64748B] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#B45309]">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA BAND */}
          <section className="py-20 sm:py-28 bg-[#B45309] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-[12px] font-bold uppercase tracking-wider text-white/80">
                Start a Conversation
              </span>

              <h2 className="mt-4 font-display text-[32px] sm:text-[46px] font-extrabold text-white leading-tight">
                Find the operational value that is currently hidden in your business.
              </h2>

              <p className="mt-4 text-white/80 max-w-2xl mx-auto text-[16px] sm:text-[18px] leading-relaxed">
                If procurement, inventory, logistics, capacity, process efficiency or working capital is affecting performance, we can help structure the diagnostic and translate the findings into an actionable value-creation agenda.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/enquiry"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#FFF1D6] text-[#B45309] font-bold text-[16px] transition shadow-soft"
                >
                  Start a Conversation
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
                <strong className="text-[#64748B]">Illustrative Disclaimer:</strong> Examples, calculations and potential impacts shown on this page are illustrative and are intended to demonstrate the type of analysis that may be undertaken. Actual opportunities, savings, cash release, operational improvements and financial outcomes depend on the specific business, industry, cost structure, operating model, market conditions, data availability and implementation requirements. No specific outcome is guaranteed.
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
