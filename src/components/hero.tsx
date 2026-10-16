"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Box, CheckCircle2 } from "lucide-react";

type PersonaKey = "anyone" | "clients" | "directors" | "startups" | "communities";

interface PersonaContent {
  label: string;
  headline: string;
  accentWord: string;
  subtext: string;
  focusTags: string[];
}

const personas: Record<PersonaKey, PersonaContent> = {
  anyone: {
    label: "Anyone",
    headline: "I craft brand identities from 0→1, packaging systems, and visual campaigns that endure.",
    accentWord: "0→1",
    subtext:
      "Graphic designer and visual artist based in Kenya. From Sky Peak purified water packaging to Diana General Shop retail banners, I combine bold typography, print engineering, and vibrant aesthetics.",
    focusTags: ["Packaging Design", "Storefront Banners", "Brand Identity", "Event Art"],
  },
  clients: {
    label: "Clients & Retailers",
    headline: "You have a product to launch and commercial shelves to conquer. I deliver graphics that sell on day one.",
    accentWord: "sell on day one",
    subtext:
      "Complete packaging certified for KEBS compliance, billboard storefront banners with roadside contrast, and marketing assets tailored to captivate East African consumer markets.",
    focusTags: ["KEBS Compliance", "Shelf-Ready Packaging", "Retail Billboards", "Rapid Turnaround"],
  },
  directors: {
    label: "Creative Directors",
    headline: "Craft is a standard, not a mood. Vector-pure typography, rigorous dielines, and disciplined execution.",
    accentWord: "Craft is a standard",
    subtext:
      "I design to the edge cases, deliver production-ready print dielines, structure systematic color spaces (CMYK & Pantone), and produce work your fabrication teams can run with immediately.",
    focusTags: ["Vector Precision", "Color Separation", "Print Dielines", "Typography Systems"],
  },
  startups: {
    label: "Startups & Brands",
    headline: "Launch with undeniable presence. Distinctive visual language that scales from zero to nationwide adoption.",
    accentWord: "undeniable presence",
    subtext:
      "Whether launching an ISP provider like Bubble Net, a commercial distributor like Ramcotech, or fresh consumer goods, I build identities that command authority.",
    focusTags: ["Brand Marks", "Visual Language", "Commercial Rollout", "Design Systems"],
  },
  communities: {
    label: "Tech Communities",
    headline: "High-voltage visual energy for robotics championships, developer summits, and hackathons.",
    accentWord: "High-voltage",
    subtext:
      "Official designer behind ALX Robotics Championships, ExtraBotics tournaments, and Google Developer Groups (GDG) Embu. Translating technical passion into iconic posters.",
    focusTags: ["Robotics Tournaments", "GDG Summits", "Event Posters", "Certificates of Merit"],
  },
};

export function Hero() {
  const [activePersona, setActivePersona] = useState<PersonaKey>("anyone");
  const content = personas[activePersona];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 border-b border-white/[0.08] bg-[#0C0D0E] overflow-hidden">
      {/* Background ambient texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#F4F3EE_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFB700]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Sydxcix Persona Selector Pill Group */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pt-4">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 mr-2 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#FFB700]" />
            For:
          </span>
          {(Object.keys(personas) as PersonaKey[]).map((key) => {
            const isActive = activePersona === key;
            return (
              <button
                key={key}
                onClick={() => setActivePersona(key)}
                className={`px-3.5 py-1.5 rounded-sm font-mono text-xs tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4F3EE] text-[#0C0D0E] font-bold shadow-md shadow-white/5"
                    : "bg-white/[0.04] hover:bg-white/[0.08] text-white/60 hover:text-white border border-white/[0.06]"
                }`}
              >
                {personas[key].label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Typography Manifesto */}
        <div className="max-w-5xl mb-12 min-h-[190px] sm:min-h-[160px] flex flex-col justify-center">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F3EE] tracking-tight leading-[1.12] transition-opacity duration-300">
            {content.headline}
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#F4F3EE]/70 font-sans max-w-3xl leading-relaxed">
            {content.subtext}
          </p>
        </div>

        {/* Focus Tags for Selected Persona */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest mr-1">
            Focus:
          </span>
          {content.focusTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#FFB700]"
            >
              <CheckCircle2 className="w-3 h-3 text-[#FFB700]/70" />
              {tag}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#plates"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#FFB700] hover:bg-[#ffc526] text-[#0C0D0E] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#FFB700]/20"
          >
            <span>Explore All 28 Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#directory"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-white/[0.05] hover:bg-white/[0.1] text-[#F4F3EE] border border-white/[0.12] font-mono text-xs uppercase tracking-wider transition-all duration-200"
          >
            <Layers className="w-4 h-4 text-[#FFB700]" />
            <span>Open Project Directory Index</span>
          </a>

          <a
            href="mailto:charlesmuthui206@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-white/60 hover:text-[#FFB700] font-mono text-xs uppercase tracking-wider transition-colors ml-auto hidden md:inline-flex"
          >
            <span>Direct Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Sydxcix Metrics & Tallies Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 pt-8 border-t border-white/[0.08]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              01 / ARCHIVE
            </span>
            <div className="font-display text-3xl font-black text-[#F4F3EE] flex items-baseline gap-1">
              28
              <span className="text-[#FFB700] text-xl">+</span>
            </div>
            <span className="font-sans text-xs text-white/60 mt-0.5">
              Commercial & Community Works
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              02 / COMPLIANCE
            </span>
            <div className="font-display text-3xl font-black text-[#F4F3EE] flex items-baseline gap-1">
              100<span className="text-[#FFB700] text-xl">%</span>
            </div>
            <span className="font-sans text-xs text-white/60 mt-0.5">
              KEBS Standard & Print Vectors
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              03 / PRACTICE
            </span>
            <div className="font-display text-3xl font-black text-[#F4F3EE] flex items-baseline gap-1">
              6<span className="text-[#FFB700] text-xl">+</span>
              <span className="text-sm font-mono text-white/40 ml-1">YRS</span>
            </div>
            <span className="font-sans text-xs text-white/60 mt-0.5">
              Graphic Design & Direction
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">
              04 / RANGE
            </span>
            <div className="font-display text-3xl font-black text-[#F4F3EE] flex items-baseline gap-1">
              360<span className="text-[#FFB700] text-xl">&deg;</span>
            </div>
            <span className="font-sans text-xs text-white/60 mt-0.5">
              Packaging, Storefronts & Posters
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center justify-between pt-8 text-white/30 font-mono text-[11px] uppercase tracking-widest">
          <span>Charles Muthui &bull; Portfolio 2026</span>
          <span className="flex items-center gap-1 text-[#FFB700]/70">
            Scroll to explore &darr;
          </span>
        </div>
      </div>
    </section>
  );
}
