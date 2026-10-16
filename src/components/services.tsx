"use client";

import { Package, Store, Palette, Trophy, Layers, CheckCircle } from "lucide-react";

const disciplines = [
  {
    num: "01",
    title: "Packaging & Bottle Label Engineering",
    description:
      "Full product packaging and bottle label design engineered to KEBS (Kenya Bureau of Standards) certification requirements. Precision dielines, mineral composition tables, barcode integration, and print-ready CMYK/Pantone separations.",
    icon: <Package className="w-6 h-6 text-[#FFB700]" />,
    deliverables: [
      "KEBS-compliant nutritional & mineral tables",
      "Curved bottle wrap & container dielines",
      "Factory-ready vector artwork & color separations",
      "Carton packaging & secondary retail box design",
    ],
  },
  {
    num: "02",
    title: "Commercial Storefronts & Billboard Signage",
    description:
      "High-impact large-format commercial banners designed for maximum roadside readability and foot-traffic conversion. Distinct category clusters (retail goods, groceries, services) with bold tonal contrast for harsh outdoor lighting.",
    icon: <Store className="w-6 h-6 text-[#FFB700]" />,
    deliverables: [
      "Retail shop fascia & billboard banners",
      "High-contrast category cluster layouts",
      "Large-format vector scaling without pixelation",
      "Eyelet, hem, and mounting margin specifications",
    ],
  },
  {
    num: "03",
    title: "Brand Identity Systems & Emblems",
    description:
      "Complete corporate and startup visual identities built from zero to one. Distinctive logos, balanced typography hierarchies, geometric icons, and adaptable collateral for physical merchandise and digital touchpoints.",
    icon: <Palette className="w-6 h-6 text-[#FFB700]" />,
    deliverables: [
      "Custom vector logo marks & emblems",
      "Typography & font pairing systems",
      "Comprehensive color palettes & usage rules",
      "Brand collateral, stationery & social kits",
    ],
  },
  {
    num: "04",
    title: "Event Visual Campaigns & Tech Posters",
    description:
      "High-energy visual direction for tech competitions, robotics tournaments, and community assemblies. Eye-catching layouts integrating 3D mascot art, QR-code ticketing, and formal certificates of merit.",
    icon: <Trophy className="w-6 h-6 text-[#FFB700]" />,
    deliverables: [
      "Robotics championships & hackathon flyers",
      "Certificates of Achievement with executive seals",
      "High-CTR YouTube thumbnails & social cards",
      "Community calendars & outreach campaign collateral",
    ],
  },
];

export function Services() {
  return (
    <section id="disciplines" className="py-24 bg-[#0C0D0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-2 block">
              Capabilities // Disciplines
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F4F3EE] tracking-tight">
              Design Disciplines & Technical Execution
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 font-sans leading-relaxed">
            Every project is engineered with print-floor precision, compliance with statutory packaging standards, and uncompromising graphic craft.
          </p>
        </div>

        {/* Disciplines Grid (Sydxcix numbered cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-[#FFB700]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-[#FFB700]">
                    {item.num}
                  </span>
                  <div className="p-2.5 rounded-sm bg-white/[0.04] border border-white/[0.08] group-hover:bg-[#FFB700]/10 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] space-y-2">
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                  Key Deliverables:
                </span>
                {item.deliverables.map((del) => (
                  <div
                    key={del}
                    className="flex items-center gap-2 font-mono text-xs text-white/60 group-hover:text-white/80 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#FFB700]/80 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
