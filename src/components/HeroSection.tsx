"use client";

import { motion } from "framer-motion";
import { Download, Mail, Link2, MapPin, Radio, ShieldCheck, Cpu, ArrowUpRight, Terminal } from "lucide-react";
import confetti from "canvas-confetti";
import { cvData } from "@/data/cvData";

export default function HeroSection() {
  const handleDownloadCv = () => {
    // Trigger festive confetti celebrate effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4ee1d4", "#344e64", "#e5fffa"]
    });

    // Create an anchor element to download the original PDF file
    const link = document.createElement("a");
    link.href = "/ENCV_Kautsar Aldzikra Harlan_082026.pdf";
    link.download = "ENCV_Kautsar Aldzikra Harlan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pulse Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1329] border border-[#4ee1d4]/30 shadow-md shadow-[#4ee1d4]/10 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ee1d4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ee1d4]"></span>
              </span>
              <span className="text-xs font-medium text-[#e5fffa]">
                {cvData.personalInfo.status}
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            >
              Halo, Saya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee1d4] via-[#75f0e3] to-[#344e64]">
                {cvData.personalInfo.name}
              </span>
            </motion.h1>

            {/* Role Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 text-lg md:text-xl font-medium text-[#4ee1d4] mb-6"
            >
              <span className="flex items-center gap-1.5">
                <Radio className="w-5 h-5 text-[#4ee1d4] animate-pulse" />
                {cvData.personalInfo.title}
              </span>
              <span className="hidden sm:inline text-[#344e64]">•</span>
              <span className="flex items-center gap-1 text-[#94a3b8] text-sm md:text-base">
                <MapPin className="w-4 h-4 text-[#4ee1d4]" />
                {cvData.personalInfo.location}
              </span>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-2xl"
            >
              Lulusan <strong className="text-[#e5fffa]">Teknik Telekomunikasi</strong> dengan pengalaman spesifik dalam{" "}
              <span className="text-[#4ee1d4] underline decoration-[#4ee1d4]/40 underline-offset-4">Network Monitoring</span>,{" "}
              <span className="text-[#4ee1d4] underline decoration-[#4ee1d4]/40 underline-offset-4">Operasi VSAT</span>, troubleshooting LAN, administrasi Linux VPS, dan konfigurasi MikroTik. Siap berkontribusi di bidang Network Operations Center (NOC) & Support Engineering.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleDownloadCv}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4ee1d4] to-[#344e64] text-[#15102a] font-bold text-sm shadow-xl shadow-[#4ee1d4]/25 hover:shadow-[#4ee1d4]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Unduh CV (PDF)</span>
              </button>

              <a
                href={cvData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl glass-card text-[#e5fffa] font-medium text-sm hover:text-[#4ee1d4] hover:border-[#4ee1d4]/50 transition-all flex items-center justify-center gap-2"
              >
                <Link2 className="w-4 h-4 text-[#4ee1d4]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={`mailto:${cvData.personalInfo.email}`}
                className="px-5 py-3.5 rounded-xl glass-card text-[#e5fffa] font-medium text-sm hover:text-[#4ee1d4] hover:border-[#4ee1d4]/50 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#4ee1d4]" />
                <span>Email</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#4ee1d4]/15 w-full max-w-xl"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4ee1d4]">3+</span>
                <span className="text-xs text-[#94a3b8] mt-1">Pengalaman Industri & Intern</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4ee1d4]">3</span>
                <span className="text-xs text-[#94a3b8] mt-1">Sertifikasi Resmi (Cisco, Google, BNSP)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4ee1d4]">100%</span>
                <span className="text-xs text-[#94a3b8] mt-1">Komitmen SLA & Network Uptime</span>
              </div>
            </motion.div>

          </div>

          {/* Right Card / NOC Avatar Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4ee1d4] to-[#344e64] rounded-3xl blur-xl opacity-30 animate-pulse" />

              <div className="relative glass-card p-6 sm:p-8 rounded-3xl overflow-hidden border border-[#4ee1d4]/30">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#4ee1d4]/15">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-[#4ee1d4] flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" /> noc.kautsar.dev
                  </span>
                </div>

                {/* Network Engineer Card Info */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#15102a] via-[#344e64] to-[#4ee1d4] p-1 shadow-xl">
                      <div className="w-full h-full bg-[#15102a] rounded-xl flex items-center justify-center text-3xl font-black text-[#4ee1d4]">
                        KH
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg bg-[#4ee1d4] text-[#15102a] flex items-center justify-center font-bold text-xs shadow-md">
                      ✓
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{cvData.personalInfo.name}</h3>
                  <p className="text-xs text-[#4ee1d4] font-medium mb-4">D3 Teknik Telekomunikasi (PNJ)</p>

                  {/* Highlights Pill Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded-lg bg-[#344e64]/40 border border-[#4ee1d4]/20 text-[11px] text-[#e5fffa] flex items-center gap-1">
                      <Radio className="w-3 h-3 text-[#4ee1d4]" /> VSAT Operation
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#344e64]/40 border border-[#4ee1d4]/20 text-[11px] text-[#e5fffa] flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-[#4ee1d4]" /> MikroTik RouterOS
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#344e64]/40 border border-[#4ee1d4]/20 text-[11px] text-[#e5fffa] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#4ee1d4]" /> Linux VPS Admin
                    </span>
                  </div>

                  {/* Quick Homelab Status Box */}
                  <div className="w-full bg-[#15102a]/80 p-3.5 rounded-xl border border-[#4ee1d4]/20 text-left font-mono text-xs text-[#94a3b8]">
                    <div className="flex justify-between items-center mb-1 text-[#e5fffa]">
                      <span className="text-[#4ee1d4]">$ status --net</span>
                      <span className="text-[10px] text-emerald-400">ONLINE</span>
                    </div>
                    <p className="text-[11px]">Latency: &lt;12ms | SLA: 99.9%</p>
                    <p className="text-[11px] text-[#4ee1d4]/80">Primary Skills: Cisco, MikroTik, Linux</p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
