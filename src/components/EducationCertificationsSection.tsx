"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Calendar, CheckCircle2, ShieldCheck, BookOpen } from "lucide-react";
import { cvData } from "@/data/cvData";

export default function EducationCertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Education Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344e64]/30 border border-[#4ee1d4]/30 text-[#4ee1d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Education & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pendidikan & Sertifikasi
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
            Fondasi akademik di bidang Teknik Telekomunikasi dengan sertifikasi profesional dari Cisco, Google, dan BNSP.
          </p>
        </div>

        {/* Education Cards Row */}
        <div className="mb-16">
          <h3 className="text-base font-bold text-[#e5fffa] mb-5 flex items-center gap-2 pl-1">
            <BookOpen className="w-4 h-4 text-[#4ee1d4]" /> Riwayat Pendidikan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cvData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/50 transition-all flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#344e64]/50 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-[#4ee1d4] bg-[#344e64]/30 px-2 py-0.5 rounded border border-[#4ee1d4]/20 flex items-center gap-1">
                      <Calendar className="w-2.5 h-2.5" /> {edu.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                  <p className="text-sm font-semibold text-[#4ee1d4] mt-0.5">{edu.degree}</p>
                  {edu.major && (
                    <p className="text-xs text-[#94a3b8] mt-0.5">Jurusan: {edu.major}</p>
                  )}
                  {edu.description && (
                    <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-base font-bold text-[#e5fffa] mb-5 flex items-center gap-2 pl-1">
            <ShieldCheck className="w-4 h-4 text-[#4ee1d4]" /> Sertifikasi Resmi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cvData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="glass-card rounded-2xl p-6 border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/50 transition-all group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative Glow */}
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#4ee1d4]/5 group-hover:bg-[#4ee1d4]/10 blur-xl pointer-events-none transition-all" />

                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4ee1d4]/10 border border-[#4ee1d4]/30 group-hover:bg-[#4ee1d4] group-hover:text-[#15102a] flex items-center justify-center text-[#4ee1d4] transition-all">
                    <Award className="w-6 h-6" />
                  </div>
                  {cert.active && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                      <CheckCircle2 className="w-3 h-3" /> Active
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-white leading-snug mb-1 group-hover:text-[#4ee1d4] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-[#4ee1d4] mb-3">{cert.issuer}</p>

                <div className="flex flex-col gap-1 text-[11px] text-[#94a3b8] border-t border-[#4ee1d4]/10 pt-3 mt-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#4ee1d4]" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 mt-1 font-mono">
                      <span className="text-[#4ee1d4]">ID:</span>
                      <span className="truncate">{cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
