"use client";

import { site } from "@/config/site";
import { Mail, MessageCircle, ShieldCheck, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function EnquirySection() {
  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left - contact */}
          <div className="reveal">
            <h2 className="font-display text-[32px] sm:text-[44px] font-bold leading-tight text-[#0B1F3A] text-balance">
              One conversation. A clearer view of what comes next.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-[#4A5568] prose-measure">
              Whether you are evaluating a financing requirement, improving
              financial visibility, addressing performance challenges or
              preparing for the next stage of growth, begin with the business
              issue that matters most.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 rounded-[14px] border border-[#E3E8F0] bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0EAFF]">
                  <span className="text-[14px] font-bold text-[#1D4ED8]">AV</span>
                </span>
                <div>
                  <p className="text-[13px] text-[#94A3B8]">Founder and Principal</p>
                  <p className="text-[16px] font-semibold text-[#0B1F3A]">{site.founderName}</p>
                </div>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-[14px] border border-[#E3E8F0] bg-white p-4 hover:shadow-soft transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5F0]">
                  <Mail className="w-5 h-5 text-[#0F766E]" />
                </span>
                <div>
                  <p className="text-[13px] text-[#94A3B8]">Email</p>
                  <p className="text-[16px] font-semibold text-[#0B1F3A]">{site.email}</p>
                </div>
              </a>

              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[14px] border border-[#E3E8F0] bg-white p-4 hover:shadow-soft transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5F0]">
                  <MessageCircle className="w-5 h-5 text-[#16A34A]" />
                </span>
                <div>
                  <p className="text-[13px] text-[#94A3B8]">WhatsApp</p>
                  <p className="text-[16px] font-semibold text-[#0B1F3A]">{site.whatsappDisplay}</p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-[16px] bg-[#EEF4FF] p-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" />
                <p className="text-[15px] font-semibold text-[#0B1F3A]">Engagement principle</p>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A5568]">
                Start with the business challenge, establish the facts, and agree
                on a practical scope before proceeding.
              </p>
            </div>
          </div>

          {/* Right - card linking to enquiry page */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-6 sm:p-8 shadow-soft">
              <span className="inline-block rounded-full bg-[#E0EAFF] px-3.5 py-1 text-[13px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                Prospective Client Enquiry
              </span>
              <h3 className="mt-3 text-[22px] font-bold font-display text-[#0B1F3A]">
                Let's understand your business
              </h3>
              <p className="mt-2 text-[15px] text-[#4A5568] leading-relaxed">
                Tell us a little about your business and the challenges you want to address. Our team will review your requirements and determine how QAP may be able to help.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-[15px] text-[#1B2A41]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDF5F0]">
                    <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  </span>
                  <span>Approx. 3–5 minutes</span>
                </div>
                <div className="flex items-center gap-2.5 text-[15px] text-[#1B2A41]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDF5F0]">
                    <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  </span>
                  <span>Your information is treated confidentially</span>
                </div>
                <div className="flex items-center gap-2.5 text-[15px] text-[#1B2A41]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDF5F0]">
                    <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  </span>
                  <span>Response within 1 business day</span>
                </div>
              </div>

              <Link
                href="/enquiry"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
              >
                Discuss Your Business <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
