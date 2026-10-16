"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects, categories, Project } from "@/data/projects";
import {
  Search,
  ExternalLink,
  Calendar,
  User,
  Tag,
  ArrowUpRight,
  Sparkles,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  LayoutGrid,
  ListFilter,
} from "lucide-react";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "directory">("grid");

  // Filtered list
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Top flagship projects
  const flagshipProjects = useMemo(() => {
    return projects.filter((p) => p.featured).slice(0, 4);
  }, []);

  // Modal navigation
  const currentIndex = activeProject
    ? filteredProjects.findIndex((p) => p.id === activeProject.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredProjects.length - 1) {
      setActiveProject(filteredProjects[currentIndex + 1]);
    } else if (filteredProjects.length > 0) {
      setActiveProject(filteredProjects[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveProject(filteredProjects[currentIndex - 1]);
    } else if (filteredProjects.length > 0) {
      setActiveProject(filteredProjects[filteredProjects.length - 1]);
    }
  };

  return (
    <div id="portfolio" className="bg-[#0C0D0E] text-[#F4F3EE]">

      {/* ========================================================
          1. SPOTLIGHT / FLAGSHIP FEATURE
      ======================================================== */}
      <section className="py-20 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Works // Selected Commissions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F4F3EE] tracking-tight">
                Crafted for Visibility & Market Impact
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60 font-sans leading-relaxed">
              From shelf-ready packaging under Kenyan regulatory standards to high-contrast retail storefront billboards and robotics championships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flagshipProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer rounded-sm border border-white/[0.08] hover:border-[#FFB700]/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141518]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-sm bg-[#0C0D0E]/80 backdrop-blur-md border border-white/10 text-white/90">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-[#FFB700] bg-[#0C0D0E]/80 backdrop-blur-md px-2 py-0.5 rounded-sm border border-[#FFB700]/20">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom overlay prompt */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FFB700] text-[#0C0D0E] font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-white/40 mb-2">
                      <span>Client: {project.client}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors mb-3 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/[0.06]">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-white/[0.04] text-white/70 border border-white/[0.05]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          2. THE COMPLETE PLATES GALLERY & DIRECTORY (ALL 28 ITEMS)
      ======================================================== */}
      <section id="plates" className="py-20 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Controls */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFB700] mb-2 block">
                  Archive // Plates Wall
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F4F3EE] tracking-tight">
                  All Works ({projects.length} Total)
                </h2>
              </div>

              {/* View Switcher & Search Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-[240px] sm:min-w-[280px]">
                  <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    type="text"
                    placeholder="Search 28 works, clients, tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-white/[0.04] border-white/10 text-xs font-mono placeholder:text-white/30 focus-visible:ring-[#FFB700] rounded-sm text-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-white/50 hover:text-white"
                    >
                      &times;
                    </button>
                  )}
                </div>

                <div className="flex items-center rounded-sm border border-white/10 p-0.5 bg-white/[0.03]">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-xs transition-colors ${
                      viewMode === "grid"
                        ? "bg-[#F4F3EE] text-[#0C0D0E] font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode("directory")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm font-mono text-xs transition-colors ${
                      viewMode === "directory"
                        ? "bg-[#F4F3EE] text-[#0C0D0E] font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <ListFilter className="w-3.5 h-3.5" />
                    <span>Directory</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Chips (Sydxcix tab format) */}
            <div className="flex flex-wrap gap-1.5 mt-6 items-center">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-sm font-mono text-xs transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#FFB700] text-[#0C0D0E] font-bold shadow-md shadow-[#FFB700]/20"
                        : "bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] ${
                        isActive ? "text-[#0C0D0E]/80" : "text-white/40"
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>


          {/* ----------------------------------------------------
              VIEW 1: MASONRY / VISUAL GRID (ALL 28 IMAGES)
          ---------------------------------------------------- */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group relative cursor-pointer rounded-sm border border-white/[0.08] hover:border-[#FFB700]/60 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Plate Image with strict containment */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#141518]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#0C0D0E] bg-[#FFB700] px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider">
                        <Maximize2 className="w-3.5 h-3.5" /> Expand Plate
                      </span>
                    </div>

                    {/* Top index pill */}
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-[#0C0D0E]/80 backdrop-blur-md border border-white/10 text-white/70">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Information block */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-mono text-[11px] text-white/40 mb-1.5">
                        <span className="text-[#FFB700]/80">{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <h4 className="font-display text-base font-bold text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors line-clamp-1 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-mono text-xs pt-3 mt-3 border-t border-white/[0.06] text-white/40">
                      <span className="truncate max-w-[180px]">
                        Client: {project.client}
                      </span>
                      <span className="text-[#FFB700] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                        Open &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}


          {/* ----------------------------------------------------
              VIEW 2: SYSTMEATIC PROJECT DIRECTORY TABLE
          ---------------------------------------------------- */}
          {viewMode === "directory" && (
            <div id="directory" className="border border-white/[0.08] rounded-sm bg-white/[0.01] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-white/[0.08] bg-white/[0.03] text-white/40 uppercase tracking-wider">
                      <th className="py-3 px-4 w-12 text-center">#</th>
                      <th className="py-3 px-4">Title</th>
                      <th className="py-3 px-4 hidden md:table-cell">Client</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4 hidden sm:table-cell">Year</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {filteredProjects.map((project, index) => (
                      <tr
                        key={project.id}
                        onClick={() => setActiveProject(project)}
                        className="group hover:bg-[#FFB700]/[0.08] transition-colors cursor-pointer"
                      >
                        <td className="py-4 px-4 text-center text-white/40 group-hover:text-[#FFB700]">
                          {String(index + 1).padStart(2, "0")}
                        </td>
                        <td className="py-4 px-4 font-sans font-bold text-sm text-[#F4F3EE] group-hover:text-[#FFB700] transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-black flex-shrink-0 border border-white/10 hidden sm:block">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-top"
                              />
                            </div>
                            <div>
                              <div className="font-display">{project.title}</div>
                              <div className="font-mono text-[11px] text-white/40 sm:hidden">
                                {project.client} &bull; {project.year}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white/60 hidden md:table-cell">
                          {project.client}
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2 py-0.5 rounded-sm bg-white/[0.05] border border-white/10 text-white/80 group-hover:border-[#FFB700]/30 text-[11px]">
                            {project.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-white/50 hidden sm:table-cell">
                          {project.year}
                        </td>
                        <td className="py-4 px-4 text-right text-[#FFB700] font-bold">
                          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            View &rarr;
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty Search Feedback */}
          {filteredProjects.length === 0 && (
            <div className="py-16 text-center border border-dashed border-white/10 rounded-sm">
              <p className="font-mono text-sm text-white/50 mb-3">
                No designs match your filter: "{searchQuery}"
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="font-mono text-xs border-white/20 text-[#FFB700] hover:bg-[#FFB700] hover:text-[#0C0D0E]"
              >
                Reset Filters
              </Button>
            </div>
          )}

        </div>
      </section>


      {/* ========================================================
          3. FULL DETAIL LIGHTBOX MODAL (HIGH-RES DISPLAY)
      ======================================================== */}
      <Dialog
        open={!!activeProject}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        {activeProject && (
          <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0C0D0E] border-white/10 p-6 sm:p-8 text-[#F4F3EE] rounded-sm">
            
            <DialogHeader className="text-left border-b border-white/[0.08] pb-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#FFB700]/40 text-[#FFB700] font-mono text-xs uppercase"
                  >
                    {activeProject.category}
                  </Badge>
                  <span className="font-mono text-xs text-white/50 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {activeProject.year}
                  </span>
                </div>

                {/* Modal pagination controls */}
                <div className="flex items-center gap-1 font-mono text-xs text-white/40">
                  <span>
                    {currentIndex + 1} of {filteredProjects.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white"
                    title="Previous Design"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white"
                    title="Next Design"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <DialogTitle className="font-display text-2xl sm:text-3xl font-extrabold text-[#F4F3EE]">
                {activeProject.title}
              </DialogTitle>
              <div className="font-mono text-xs text-white/60 flex items-center gap-2 mt-1">
                <User className="w-3.5 h-3.5 text-[#FFB700]" />
                <span>Client: {activeProject.client}</span>
              </div>
            </DialogHeader>

            {/* High-Resolution Artwork Presentation */}
            <div className="relative w-full max-h-[60vh] min-h-[300px] overflow-hidden rounded-sm bg-[#141518] border border-white/10 mb-6 flex items-center justify-center p-2">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[58vh] object-contain rounded-sm"
                priority
              />
            </div>

            {/* Project Concept & Details */}
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#FFB700] mb-2 flex items-center gap-1.5 font-bold">
                  <span>Design Concept & Execution</span>
                </h4>
                <DialogDescription className="font-sans text-base text-[#F4F3EE]/85 leading-relaxed">
                  {activeProject.description}
                </DialogDescription>
              </div>

              {/* Tags & Actions */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                    Disciplines & Tags:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-sm bg-white/[0.04] text-white/75 border border-white/[0.08]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={activeProject.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F3EE] font-mono text-xs uppercase tracking-wider border border-white/10 transition-colors"
                  >
                    <span>Inspect Raw File</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`mailto:charlesmuthui206@gmail.com?subject=Inquiry regarding ${encodeURIComponent(
                      activeProject.title
                    )}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-[#FFB700] hover:bg-[#ffc526] text-[#0C0D0E] font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Commission Similar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </DialogContent>
        )}
      </Dialog>

    </div>
  );
}
