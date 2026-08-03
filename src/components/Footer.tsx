"use client";

import { ArrowUp, Heart, Network, Radio } from "lucide-react";
import { cvData } from "@/data/cvData";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[#4ee1d4]/15 bg-[#0f0b1f]/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#344e64] to-[#4ee1d4] flex items-center justify-center text-[#15102a] font-bold text-base">
              K
            </div>
            <div>
              <p className="text-sm font-bold text-[#e5fffa]">{cvData.personalInfo.name}</p>
              <p className="text-xs text-[#94a3b8]">NOC & Network Support Engineer</p>
            </div>
          </div>

          {/* Center: Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#94a3b8]">
            {["#about", "#skills", "#experience", "#projects", "#certifications", "#contact"].map((href) => {
              const label = href.replace("#", "").charAt(0).toUpperCase() + href.slice(2);
              return (
                <a key={href} href={href} className="hover:text-[#4ee1d4] transition-colors">
                  {label}
                </a>
              );
            })}
          </div>

          {/* Right: Back to Top + Copyright */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl glass-card border border-[#4ee1d4]/30 flex items-center justify-center text-[#4ee1d4] hover:bg-[#4ee1d4] hover:text-[#15102a] transition-all"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 pt-5 border-t border-[#4ee1d4]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#94a3b8]/60">
          <p>
            © {new Date().getFullYear()} {cvData.personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 fill-rose-500 text-rose-500 mx-0.5" /> using Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
