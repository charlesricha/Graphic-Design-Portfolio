"use client";

import Link from "next/link";
import { ArrowUp, Mail, Linkedin, Instagram, Sparkles, Globe } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090A] border-t border-white/[0.08] text-[#F4F3EE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black text-[#F4F3EE] tracking-tight">
                Charles Muthui
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB700]"></span>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-sm leading-relaxed">
              Graphic designer and visual director crafting brand systems, KEBS-compliant packaging, and storefront billboard banners in Kenya.
            </p>
            <div className="pt-2 font-mono text-xs text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for select commissions & contract direction</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="#directory" className="text-white/60 hover:text-[#FFB700] transition-colors">
                  [01] Directory Index (28)
                </a>
              </li>
              <li>
                <a href="#plates" className="text-white/60 hover:text-[#FFB700] transition-colors">
                  [02] Plates Gallery
                </a>
              </li>
              <li>
                <a href="#disciplines" className="text-white/60 hover:text-[#FFB700] transition-colors">
                  [03] Disciplines & Capabilities
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-[#FFB700] transition-colors">
                  [04] About Charles
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#FFB700] transition-colors">
                  [05] Initiate Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact coordinates & socials */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[11px] text-white/40 uppercase tracking-widest block mb-3">
              Inquiries & Socials
            </span>
            <div className="font-mono text-xs space-y-2">
              <a
                href="mailto:charlesmuthui206@gmail.com"
                className="block text-white/80 hover:text-[#FFB700] transition-colors"
              >
                charlesmuthui206@gmail.com
              </a>
              <p className="text-white/40">
                Location: Nairobi / Embu, Kenya [EAT]
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="mailto:charlesmuthui206@gmail.com"
                className="p-2 rounded-sm bg-white/[0.04] hover:bg-[#FFB700] text-white/70 hover:text-[#0C0D0E] border border-white/[0.08] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-white/[0.04] hover:bg-[#FFB700] text-white/70 hover:text-[#0C0D0E] border border-white/[0.08] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-white/[0.04] hover:bg-[#FFB700] text-white/70 hover:text-[#0C0D0E] border border-white/[0.08] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-white/[0.04] hover:bg-[#FFB700] text-white/70 hover:text-[#0C0D0E] border border-white/[0.08] transition-colors font-mono text-xs font-bold"
                aria-label="Behance"
              >
                Bē
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Charles Muthui. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Designed with intention & craft.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#FFB700] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
