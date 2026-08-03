"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Server, Wrench, CheckCircle2, Star, Cpu, Radio, Shield, Terminal, HardDrive } from "lucide-react";
import { cvData, SkillCategory } from "@/data/cvData";

const categoryIcons: Record<string, any> = {
  Networking: Network,
  "Systems & Tools": Server,
  "Technical Support": Wrench,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...cvData.skillCategories.map((c) => c.category)];

  const filteredSkills = cvData.skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryName: cat.category,
      categoryIcon: categoryIcons[cat.category] || Cpu,
    }))
  ).filter((item) => activeCategory === "All" || item.categoryName === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344e64]/30 border border-[#4ee1d4]/30 text-[#4ee1d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keahlian & Kemampuan Teknis
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
            Kompetensi dalam pengoperasian jaringan telekomunikasi, konfigurasi perangkat lunak router/server, dan pemeliharaan teknis.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#4ee1d4] text-[#15102a] shadow-lg shadow-[#4ee1d4]/30 scale-105"
                    : "glass-card text-[#e5fffa]/80 hover:text-[#4ee1d4] hover:border-[#4ee1d4]/40"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat === "All" ? "Semua Keahlian" : cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComp = skill.categoryIcon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all border border-[#4ee1d4]/20"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#344e64]/40 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] group-hover:scale-110 group-hover:bg-[#4ee1d4] group-hover:text-[#15102a] transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      {skill.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                          <Star className="w-3 h-3 fill-current" /> Core Skill
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#4ee1d4] transition-colors mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#94a3b8]">{skill.categoryName}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#4ee1d4]/10 flex items-center justify-between">
                    <span className="text-xs text-[#4ee1d4] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {skill.level}
                    </span>
                    <div className="w-16 h-1.5 rounded-full bg-[#15102a] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.level === "Advanced"
                            ? "w-full bg-gradient-to-r from-[#344e64] to-[#4ee1d4]"
                            : "w-4/5 bg-[#4ee1d4]"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Skill Summary Banner */}
        <div className="mt-12 glass-card p-6 rounded-2xl border border-[#4ee1d4]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#4ee1d4]/10 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] shrink-0">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Butuh Keahlian Khusus Jaringan atau VSAT?</h4>
              <p className="text-xs text-[#94a3b8]">Memiliki pemahaman mendalam tentang Telemetry & Command (TT&C), LNA, routing, dan troubleshooting jaringan.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#344e64]/40 hover:bg-[#4ee1d4] hover:text-[#15102a] text-[#e5fffa] text-xs font-semibold transition-all border border-[#4ee1d4]/30 shrink-0"
          >
            Diskusi Kebutuhan Tim
          </a>
        </div>

      </div>
    </section>
  );
}
