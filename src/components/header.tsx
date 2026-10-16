"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTimeString(`${formatter.format(now)} EAT`);
      } catch {
        setTimeString("");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Directory", href: "#directory", num: "01" },
    { label: "Plates", href: "#plates", num: "02" },
    { label: "Disciplines", href: "#disciplines", num: "03" },
    { label: "About", href: "#about", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C0D0E]/85 backdrop-blur-md border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Left: Designer Identity & Live Location/Time */}
          <div className="flex items-center gap-5">
            <Link href="/" className="group flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors">
                Charles Muthui
              </span>
              <span className="font-mono text-[11px] text-white/50 tracking-wider uppercase">
                Graphic Designer &bull; Packaging &bull; Print
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 font-mono text-xs text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB700]/80"></span>
              <span>Nairobi, Kenya</span>
              {timeString && (
                <span className="text-white/40 tracking-wider">
                  [{timeString}]
                </span>
              )}
            </div>
          </div>

          {/* Center: Monospace Nav Links (Sydxcix style) */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-[#F4F3EE] transition-colors"
              >
                <span className="text-white/30 text-[10px] group-hover:text-[#FFB700] transition-colors">
                  {item.num}
                </span>
                <span className="uppercase tracking-wider font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right: Availability Indicator & Say Hello */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-[11px] text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for collabs</span>
            </div>

            <a
              href="mailto:charlesmuthui206@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#F4F3EE] hover:bg-[#FFB700] text-[#0C0D0E] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Say hello</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="mailto:charlesmuthui206@gmail.com"
              className="px-3 py-1.5 rounded-sm bg-[#F4F3EE] text-[#0C0D0E] font-mono text-xs font-bold uppercase"
            >
              Hello &rarr;
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/80 hover:text-white rounded-sm border border-white/10 bg-white/5"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0C0D0E] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="font-mono text-xs text-white/50 pb-3 border-b border-white/10 flex items-center justify-between">
            <span>Nairobi, Kenya</span>
            {timeString && <span>{timeString}</span>}
          </div>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between font-mono text-sm uppercase tracking-wider text-white/80 hover:text-[#FFB700] py-2 border-b border-white/5"
              >
                <span>{item.label}</span>
                <span className="text-white/30 text-xs">{item.num}</span>
              </a>
            ))}
          </div>
          <div className="pt-2">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for projects & freelance</span>
            </div>
            <a
              href="mailto:charlesmuthui206@gmail.com"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#FFB700] text-[#0C0D0E] font-mono text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get in touch &bull; charlesmuthui206@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
