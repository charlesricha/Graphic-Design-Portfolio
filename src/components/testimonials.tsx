"use client";

import { Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Charles delivered our complete bottle label and packaging for Sky Peak drinking water with total KEBS compliance. His attention to typography, mineral analysis layout, and mountain blue aesthetics immediately stood out on retail shelves.",
    client: "Sky Peak Company Ltd",
    role: "Product Operations & Quality Lead",
    project: "Sky Peak Purified Drinking Water Packaging",
    year: "2026",
  },
  {
    quote:
      "Our Diana General Shop storefront billboard needed to display gas refills, groceries, cosmetics, and footwear with crisp visibility for speeding motorists. Charles organized every cluster with bold contrast and perfect scaling.",
    client: "Diana General Shop",
    role: "Retail Proprietor",
    project: "Commercial Storefront Billboard Banner",
    year: "2025",
  },
  {
    quote:
      "The Extraordinary Robots Championship posters and winner certificates were electric. He captured the raw engineering energy of battle bots and soccerbots. Our attendance doubled thanks to his visual campaign.",
    client: "ALX Robotics Club & ExtraBotics",
    role: "Organizing Committee",
    project: "Robot Championship & SoccerBots Campaigns",
    year: "2025",
  },
  {
    quote:
      "Whether designing for campus orientation, IoT circuit workshops, or our Class of 2026 celebration, Charles consistently embodies Google Developer community standards with inventive 3D art and clean layout.",
    client: "Google Developer Group (GDG)",
    role: "Lead Organizer, University of Embu",
    project: "GDGoC Workshops & Community Branding",
    year: "2025–2026",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0C0D0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-2 block flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Endorsements // Client Feedback
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F4F3EE] tracking-tight">
              Trusted by Retailers, Brands & Tech Leaders
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 font-sans leading-relaxed">
            Real feedback from commercial clients, event coordinators, and tech communities across Kenya.
          </p>
        </div>

        {/* Testimonials Grid (Editorial cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-[#FFB700]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#FFB700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB700]" />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-white/40">
                    {t.year}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-[#FFB700]/30 mb-3" />
                <p className="font-sans text-base text-white/85 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#F4F3EE]">
                    {t.client}
                  </div>
                  <div className="font-mono text-xs text-white/50">
                    {t.role}
                  </div>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-sm bg-white/[0.04] text-[#FFB700] border border-white/[0.06] hidden sm:inline-block max-w-[200px] truncate">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
