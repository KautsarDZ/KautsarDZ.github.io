"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Tag, ChevronRight, X, ExternalLink, CheckCircle2, Cpu, Server } from "lucide-react";
import { cvData, ProjectItem } from "@/data/cvData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344e64]/30 border border-[#4ee1d4]/30 text-[#4ee1d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> Homelab & Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyek & Lab Mandiri
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
            Proyek jaringan dan infrastruktur server mandiri yang memperkuat skill NOC dan System Administration secara nyata.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/50 transition-all group flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Top Visual Bar */}
              <div className="bg-gradient-to-r from-[#15102a] to-[#1c1538] px-6 py-5 border-b border-[#4ee1d4]/10">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4ee1d4]/10 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] group-hover:bg-[#4ee1d4] group-hover:text-[#15102a] transition-all">
                    {index === 0 ? <Server className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs text-[#4ee1d4] bg-[#344e64]/30 border border-[#4ee1d4]/20 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#4ee1d4] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Highlight Bullets */}
                <ul className="space-y-2">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4ee1d4] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-[#15102a] text-[#4ee1d4] text-[11px] font-mono border border-[#4ee1d4]/20 flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5" /> {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4ee1d4] mt-2 group-hover:gap-2.5 transition-all">
                  <span>Lihat Detail</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail Popup */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center z-50 px-4 py-10"
                onClick={() => setSelectedProject(null)}
              >
                <div
                  className="glass-card rounded-3xl w-full max-w-lg p-8 border border-[#4ee1d4]/40 shadow-2xl shadow-[#4ee1d4]/10 relative overflow-hidden max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#4ee1d4]/10 blur-2xl pointer-events-none" />

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#15102a] border border-[#4ee1d4]/20 flex items-center justify-center text-[#94a3b8] hover:text-[#e5fffa] hover:border-[#4ee1d4]/50 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs text-[#4ee1d4] bg-[#344e64]/30 border border-[#4ee1d4]/20 font-mono">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">{selectedProject.title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{selectedProject.description}</p>

                  <h4 className="text-sm font-bold text-[#e5fffa] mb-3">Highlights & Pencapaian</h4>
                  <ul className="space-y-3 mb-6">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                        <CheckCircle2 className="w-4 h-4 text-[#4ee1d4] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-sm font-bold text-[#e5fffa] mb-3">Tools & Teknologi</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg bg-[#15102a] text-[#4ee1d4] text-xs font-mono border border-[#4ee1d4]/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4ee1d4] text-[#15102a] text-xs font-bold w-fit hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" /> Lihat Proyek
                    </a>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
