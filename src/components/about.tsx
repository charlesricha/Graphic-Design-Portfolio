"use client";

import Image from "next/image";
import { ArrowUpRight, Download, CheckCircle2, Award, Sparkles, Terminal } from "lucide-react";

export function About() {
  const tools = [
    { name: "Adobe Illustrator", level: "Mastery", role: "Vector systems, dielines & typography" },
    { name: "Adobe Photoshop", level: "Advanced", role: "Texture composition & color grading" },
    { name: "Blender 3D", level: "Proficient", role: "3D packaging renders & mascot art" },
    { name: "Figma", level: "Advanced", role: "Design systems & web layout mockups" },
    { name: "Print Production", level: "Specialist", role: "KEBS standards, CMYK & dielines" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0C0D0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-2 block flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Background // The Designer
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F4F3EE] tracking-tight">
            Craft is a Standard, Not a Mood.
          </h2>
        </div>

        {/* Profile Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Portrait Column with Real Charles Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm border border-white/10 p-2 bg-white/[0.02] shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#141518]">
                <Image
                  src="/profile/charles.png"
                  alt="Charles Muthui — Graphic Designer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-transparent opacity-40"></div>
              </div>

              {/* Status footer inside photo frame */}
              <div className="pt-3 pb-1 px-2 flex items-center justify-between font-mono text-xs text-white/50 border-t border-white/[0.08] mt-2">
                <span>Charles Muthui</span>
                <span className="text-[#FFB700]">Embu / Nairobi, KE</span>
              </div>
            </div>
          </div>

          {/* Narrative & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-white/80 font-sans text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                I am <strong className="text-[#F4F3EE]">Charles Muthui</strong>, a graphic designer and visual director based in Kenya. My work spans complete product packaging lines, retail commercial billboards, community tech event branding, and corporate identity systems.
              </p>
              <p>
                My philosophy is simple: <strong className="text-[#FFB700]">good design must function flawlessly in the physical world</strong>. That means ensuring beverage bottle labels adhere strictly to KEBS regulatory standards, storefront billboards maintain crystal clarity under midday sun, and robotics championship posters ignite genuine excitement across campus auditoriums.
              </p>
              <p>
                Whether crafting from scratch for early-stage ventures or engineering large-format assets for commercial distributors like Ramcotech and Diana General Shop, I approach every canvas with meticulous typography, rigorous color separation, and zero shortcuts.
              </p>
            </div>

            {/* Technical Toolbox */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-4 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Core Toolset & Technical Execution</span>
              </div>

              <div className="space-y-2.5">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-sm bg-white/[0.02] border border-white/[0.06] hover:border-[#FFB700]/30 transition-colors gap-1 sm:gap-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFB700]" />
                      <span className="font-display font-bold text-sm text-[#F4F3EE]">
                        {tool.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-white/50">
                      <span className="text-white/70">{tool.role}</span>
                      <span className="px-2 py-0.5 rounded-sm bg-white/[0.05] border border-white/10 text-[#FFB700] text-[10px] hidden sm:inline-block">
                        {tool.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="mailto:charlesmuthui206@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#FFB700] hover:bg-[#ffc526] text-[#0C0D0E] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#FFB700]/20"
              >
                <span>Hire Charles for Your Next Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] text-[#F4F3EE] font-mono text-xs uppercase tracking-wider border border-white/10 transition-colors"
              >
                <span>Browse Work Archive</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
