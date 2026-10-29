"use client";

import { TrendingUp, Landmark, Network, ArrowRight, ArrowDown } from "lucide-react";

export function ValueFrameworkFlowchart() {
  const chainSteps = [
    {
      id: "numbers",
      title: "Numbers",
      label: "Input Data",
      desc: "Financial data & baseline metrics",
      badge: "01",
    },
    {
      id: "decisions",
      title: "Decisions",
      label: "Strategic Analysis",
      desc: "Capital priorities & strategic choices",
      badge: "02",
    },
    {
      id: "action",
      title: "Action",
      label: "Execution",
      desc: "Operating discipline & roadmap",
      badge: "03",
    },
    {
      id: "value",
      title: "Measurable Value",
      label: "Outcome",
      desc: "Sustainable growth & enterprise value",
      badge: "04",
      highlight: true,
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Financial Performance",
      desc: "Margins, forecasting and cash visibility",
      icon: TrendingUp,
      tint: "text-[#2DD4BF] bg-[#2DD4BF]/15 border-[#2DD4BF]/30",
    },
    {
      num: "02",
      title: "Capital Efficiency",
      desc: "Funding, debt and capital allocation",
      icon: Landmark,
      tint: "text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/30",
    },
    {
      num: "03",
      title: "Institutional Readiness",
      desc: "Governance, reporting and scalable systems",
      icon: Network,
      tint: "text-[#A78BFA] bg-[#A78BFA]/15 border-[#A78BFA]/30",
    },
  ];

  return (
    <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0B1F3A] via-[#0E274A] to-[#0B1F3A] p-6 sm:p-10 lg:p-12 text-white shadow-soft-lg overflow-hidden relative">
      {/* Background glow accents */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#1D4ED8]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2DD4BF]/10 blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
        <div>
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#38BDF8]">
            THE QAP VALUE FRAMEWORK
          </span>
          <h3 className="mt-1 font-display text-[24px] sm:text-[30px] font-bold leading-tight text-white">
            From insight to measurable action
          </h3>
        </div>
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#16A34A]" />
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-white/60">
            Flowchart
          </span>
        </div>
      </div>

      {/* Section Subheader */}
      <div className="mt-8 text-center sm:text-left">
        <span className="text-[13px] font-bold uppercase tracking-widest text-white/50">
          THE BUSINESS VALUE CHAIN
        </span>
      </div>

      {/* Flowchart: Step-by-Step Chain */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {chainSteps.map((step, i) => (
          <div key={step.id} className="relative flex flex-col">
            <div
              className={`flex-1 rounded-2xl border p-5 transition-all ${
                step.highlight
                  ? "border-[#38BDF8] bg-[#38BDF8]/10 shadow-[0_0_24px_rgba(56,189,248,0.15)] ring-1 ring-[#38BDF8]/40"
                  : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    step.highlight
                      ? "bg-[#38BDF8] text-[#0B1F3A]"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  Step {step.badge}
                </span>
                <span className="text-[11px] font-medium text-white/50">{step.label}</span>
              </div>

              <h4
                className={`mt-4 text-[22px] font-extrabold font-display leading-tight ${
                  step.highlight ? "text-[#38BDF8]" : "text-white"
                }`}
              >
                {step.title}
              </h4>
              <p className="mt-1 text-[13px] text-white/70 leading-relaxed">{step.desc}</p>
            </div>

            {/* Desktop Connector Arrow between steps */}
            {i < chainSteps.length - 1 && (
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-6 h-6 rounded-full bg-[#0E274A] border border-white/20 text-[#38BDF8] shadow-sm">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}

            {/* Mobile Connector Arrow between steps */}
            {i < chainSteps.length - 1 && (
              <div className="flex md:hidden items-center justify-center py-2 text-[#38BDF8]">
                <ArrowDown className="w-5 h-5 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Flowchart Branching Connector */}
      <div className="my-8 hidden md:flex flex-col items-center">
        {/* Vertical line down from Value Chain */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#38BDF8] to-[#1D4ED8]" />

        <div className="my-2 rounded-full border border-[#38BDF8]/30 bg-[#0B1F3A]/90 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] shadow-sm">
          Branches into Core Advisory Pillars
        </div>

        {/* SVG Flowchart Fork */}
        <svg viewBox="0 0 900 48" fill="none" className="w-full h-10 text-[#38BDF8]">
          {/* Vertical down */}
          <path d="M450 0 V16" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          {/* Horizontal crossbar */}
          <path d="M150 16 H750" stroke="currentColor" strokeWidth="2" />
          {/* 3 drops with arrows */}
          <path d="M150 16 V40 M145 34 L150 42 L155 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M450 16 V40 M445 34 L450 42 L455 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M750 16 V40 M745 34 L750 42 L755 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Mobile Flowchart Connector */}
      <div className="my-6 flex md:hidden flex-col items-center">
        <div className="w-0.5 h-6 bg-[#38BDF8]" />
        <span className="my-2 rounded-full border border-[#38BDF8]/30 bg-[#0B1F3A] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#38BDF8]">
          Branches into Core Pillars
        </span>
        <ArrowDown className="w-5 h-5 text-[#38BDF8]" />
      </div>

      {/* Flowchart Pillars (3 Output Nodes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.num}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:border-white/30 hover:bg-white/[0.08] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${p.tint}`}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-display text-[22px] font-bold text-white/40 group-hover:text-white/80 transition">
                    {p.num}
                  </span>
                </div>

                <h4 className="mt-4 text-[19px] font-bold font-display text-white group-hover:text-[#38BDF8] transition">
                  {p.title}
                </h4>
                <p className="mt-2 text-[14px] text-white/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-white/50">
                <span>Core Pillar {p.num}</span>
                <span className="flex items-center gap-1 text-[#38BDF8]">
                  Measurable Impact <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
