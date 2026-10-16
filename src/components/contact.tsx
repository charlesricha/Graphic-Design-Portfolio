"use client";

import { useState } from "react";
import { Mail, Phone, ArrowUpRight, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Packaging & Label Design");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Design Inquiry] ${projectType} - from ${name}`;
    const body = `Hi Charles,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Scope & Message:\n${message}\n\nSent from your portfolio site.`;
    const mailto = `mailto:charlesmuthui206@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const projectTypes = [
    "Packaging & Label Design",
    "Storefront Billboard & Retail Signage",
    "Brand Identity & Logo Design",
    "Event Campaign Posters & Certificates",
    "Other Commercial Design",
  ];

  return (
    <section id="contact" className="py-24 bg-[#0C0D0E] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sydxcix Statement & Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-2 block flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Initiate Project // Contact
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F4F3EE] tracking-tight leading-tight">
                Let’s make it exceptional.
              </h2>
              <p className="mt-4 font-sans text-base text-white/70 leading-relaxed">
                Starting a new consumer product, launching a retail storefront, or needing high-voltage posters for an upcoming event? I’m available for commissions and consulting.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <a
                href="mailto:charlesmuthui206@gmail.com"
                className="group flex items-center justify-between p-4 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-[#FFB700] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/5 group-hover:bg-[#FFB700]/10 text-[#FFB700]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Email Directly
                    </div>
                    <div className="font-mono text-sm text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors">
                      charlesmuthui206@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#FFB700] transition-colors" />
              </a>

              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-[#FFB700] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/5 group-hover:bg-[#FFB700]/10 text-[#FFB700]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                      WhatsApp & Call
                    </div>
                    <div className="font-mono text-sm text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors">
                      Nairobi / Embu, Kenya
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#FFB700] transition-colors" />
              </a>
            </div>

            {/* Assurance details */}
            <div className="p-4 rounded-sm bg-white/[0.01] border border-white/[0.05] space-y-2 font-mono text-xs text-white/50">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#FFB700]" />
                <span>Fast turnaround & print-ready packaging dielines</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#FFB700]" />
                <span>Direct collaboration with print houses & fabricators</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Editorial Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-white/[0.02] border border-white/[0.08] relative">
              
              <h3 className="font-display text-2xl font-bold text-[#F4F3EE] mb-2">
                Send Project Brief
              </h3>
              <p className="font-sans text-sm text-white/60 mb-8">
                Fill in the details below. This will prepare a direct email brief straight to Charles's inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase text-white/60">
                      Your Name / Company *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Sky Peak Co."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-sm font-sans focus-visible:ring-[#FFB700] rounded-sm text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase text-white/60">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-sm font-sans focus-visible:ring-[#FFB700] rounded-sm text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase text-white/60">
                    Project Type / Scope *
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 bg-[#141518] border border-white/10 text-sm font-sans rounded-sm text-white focus:outline-none focus:border-[#FFB700]"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#141518] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase text-white/60">
                    Project Description & Target Timeline *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Describe your design goals, target audience, dimensions, or specific requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/[0.03] border-white/10 text-sm font-sans focus-visible:ring-[#FFB700] rounded-sm text-white"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFB700] hover:bg-[#ffc526] text-[#0C0D0E] font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-[#FFB700]/20"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Project Message &rarr;</span>
                </Button>

                {submitted && (
                  <p className="font-mono text-xs text-emerald-400 text-center pt-2">
                    Message prepared! Your email client has been opened.
                  </p>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
