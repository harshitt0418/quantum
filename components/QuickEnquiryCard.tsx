"use client";

import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function QuickEnquiryCard() {
  return (
    <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-6 sm:p-8 shadow-soft">
      <span className="inline-block rounded-full bg-[#E0EAFF] px-3.5 py-1 text-[13px] font-bold uppercase tracking-wider text-[#1D4ED8]">
        Prospective Client Enquiry
      </span>
      <h3 className="mt-3 text-[22px] font-bold font-display text-[#0B1F3A]">
        Discuss your business
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
        Open Enquiry Form <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
