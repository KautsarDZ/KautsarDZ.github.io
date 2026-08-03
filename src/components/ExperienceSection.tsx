"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, ChevronDown, CheckCircle, Tag } from "lucide-react";
import { cvData } from "@/data/cvData";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(cvData.experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344e64]/30 border border-[#4ee1d4]/30 text-[#4ee1d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Kerja & Magang
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
            Jejak langkah profesional dalam industri telekomunikasi satelit, seluler, serta manajemen operasional IT support.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#4ee1d4] via-[#344e64] to-[#15102a] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {cvData.experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  {/* Central Node Dot for Desktop */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#15102a] border-2 border-[#4ee1d4] flex items-center justify-center shadow-lg shadow-[#4ee1d4]/40">
                      <div className="w-2 h-2 rounded-full bg-[#4ee1d4] animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card Box */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] ${
                      isEven ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-6 border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/50 transition-all shadow-xl">
                      {/* Header */}
                      <div
                        onClick={() => toggleExpand(item.id)}
                        className="cursor-pointer select-none"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#344e64]/40 text-[#4ee1d4] text-xs font-mono border border-[#4ee1d4]/20 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {item.period}
                          </span>
                          <span className="text-xs text-[#94a3b8] font-medium">{item.type}</span>
                        </div>

                        <h3 className="text-lg font-bold text-white hover:text-[#4ee1d4] transition-colors flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#4ee1d4]" />
                          {item.company}
                        </h3>

                        <p className="text-sm font-semibold text-[#4ee1d4] mt-0.5">
                          {item.role}
                        </p>

                        {item.summary && (
                          <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                            {item.summary}
                          </p>
                        )}
                      </div>

                      {/* Expandable Responsibility Bullets */}
                      <div className="mt-4 pt-4 border-t border-[#4ee1d4]/10">
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="flex items-center justify-between w-full text-xs font-semibold text-[#e5fffa] hover:text-[#4ee1d4] transition-colors mb-2"
                        >
                          <span>Tanggung Jawab & Pencapaian ({item.responsibilities.length})</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#4ee1d4] transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 text-xs text-[#94a3b8] mt-3"
                          >
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle className="w-3.5 h-3.5 text-[#4ee1d4] shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}

                        {/* Skill Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {item.skillsUsed.map((sk) => (
                            <span
                              key={sk}
                              className="px-2 py-0.5 rounded bg-[#15102a] text-[#4ee1d4] text-[11px] font-mono border border-[#4ee1d4]/20 flex items-center gap-1"
                            >
                              <Tag className="w-2.5 h-2.5 text-[#4ee1d4]" /> {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
