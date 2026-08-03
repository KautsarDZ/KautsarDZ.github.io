"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Link2, Copy, CheckCheck, MessageSquare, Send, MapPin } from "lucide-react";
import { cvData } from "@/data/cvData";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Accent Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial-gradient rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(ellipse, rgba(78,225,212,0.35) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344e64]/30 border border-[#4ee1d4]/30 text-[#4ee1d4] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Terhubung
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2">
            Terbuka untuk peluang kerja sebagai NOC Engineer, IT Support, atau Network Support. Hubungi saya melalui kontak di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-5 border border-[#4ee1d4]/20 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#344e64]/40 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#94a3b8]">Lokasi</p>
                <p className="text-sm font-semibold text-white">{cvData.personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-5 border border-[#4ee1d4]/20 flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#344e64]/40 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#94a3b8]">Email</p>
                  <a href={`mailto:${cvData.personalInfo.email}`} className="text-sm font-semibold text-white hover:text-[#4ee1d4] transition-colors break-all">
                    {cvData.personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(cvData.personalInfo.email, "email")}
                className="p-2 rounded-lg bg-[#15102a] border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/60 text-[#94a3b8] hover:text-[#4ee1d4] transition-all shrink-0"
                title="Salin email"
              >
                {copiedField === "email" ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-card rounded-2xl p-5 border border-[#4ee1d4]/20 flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#344e64]/40 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#94a3b8]">Telepon / WhatsApp</p>
                  <a href={`tel:${cvData.personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-[#4ee1d4] transition-colors">
                    {cvData.personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(cvData.personalInfo.phone, "phone")}
                className="p-2 rounded-lg bg-[#15102a] border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/60 text-[#94a3b8] hover:text-[#4ee1d4] transition-all shrink-0"
                title="Salin nomor"
              >
                {copiedField === "phone" ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-5 border border-[#4ee1d4]/20 flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#344e64]/40 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] shrink-0">
                <Link2 className="w-5 h-5" />
              </div>
                <div>
                  <p className="text-xs text-[#94a3b8]">LinkedIn</p>
                  <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-[#4ee1d4] transition-colors">
                    Kautsar Aldzikra Harlan
                  </a>
                </div>
              </div>
              <a
                href={cvData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#15102a] border border-[#4ee1d4]/20 hover:border-[#4ee1d4]/60 text-[#94a3b8] hover:text-[#4ee1d4] transition-all shrink-0"
                title="Buka LinkedIn"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: Quick Message Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-[#4ee1d4]/20 h-full relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#4ee1d4]/8 blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4ee1d4]/10 border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Kirim Pesan Cepat</h3>
                  <p className="text-xs text-[#94a3b8]">Saya akan merespons dalam 1–2 hari kerja.</p>
                </div>
              </div>

              <form
                action={`mailto:${cvData.personalInfo.email}`}
                method="post"
                encType="text/plain"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#e5fffa]">Nama</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Anda"
                      className="px-4 py-3 rounded-xl bg-[#15102a] border border-[#344e64]/60 focus:border-[#4ee1d4] text-white text-sm outline-none transition-colors placeholder:text-[#94a3b8]/60"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#e5fffa]">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@perusahaan.com"
                      className="px-4 py-3 rounded-xl bg-[#15102a] border border-[#344e64]/60 focus:border-[#4ee1d4] text-white text-sm outline-none transition-colors placeholder:text-[#94a3b8]/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#e5fffa]">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Peluang kerja / Diskusi Teknis"
                    className="px-4 py-3 rounded-xl bg-[#15102a] border border-[#344e64]/60 focus:border-[#4ee1d4] text-white text-sm outline-none transition-colors placeholder:text-[#94a3b8]/60"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#e5fffa]">Pesan</label>
                  <textarea
                    name="body"
                    rows={4}
                    placeholder="Halo Kautsar, kami memiliki peluang untuk posisi NOC Engineer di perusahaan kami..."
                    className="px-4 py-3 rounded-xl bg-[#15102a] border border-[#344e64]/60 focus:border-[#4ee1d4] text-white text-sm outline-none resize-none transition-colors placeholder:text-[#94a3b8]/60"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4ee1d4] to-[#344e64] text-[#15102a] font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-98 transition-all shadow-lg shadow-[#4ee1d4]/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Kirim Pesan via Email
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
