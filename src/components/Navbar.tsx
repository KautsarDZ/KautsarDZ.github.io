"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Network, Terminal, User, Briefcase, Award, FolderGit2, Mail, Menu, X } from "lucide-react";
import { cvData } from "@/data/cvData";

const navLinks = [
  { name: "Tentang", href: "#about", icon: User },
  { name: "Live NOC", href: "#noc-terminal", icon: Terminal },
  { name: "Keahlian", href: "#skills", icon: Network },
  { name: "Pengalaman", href: "#experience", icon: Briefcase },
  { name: "Proyek", href: "#projects", icon: FolderGit2 },
  { name: "Sertifikasi", href: "#certifications", icon: Award },
  { name: "Kontak", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#344e64] to-[#4ee1d4] flex items-center justify-center text-[#15102a] font-bold text-xl shadow-lg shadow-[#4ee1d4]/20 group-hover:scale-105 transition-transform">
            K
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-[#e5fffa] group-hover:text-[#4ee1d4] transition-colors">
              Kautsar Harlan
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
              <span className="w-2 h-2 rounded-full bg-[#4ee1d4] animate-pulse" />
              <span>NOC & Network Engineer</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1a1329]/80 p-1.5 rounded-full border border-[#4ee1d4]/20 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#4ee1d4] text-[#15102a] font-semibold shadow-md shadow-[#4ee1d4]/30"
                    : "text-[#e5fffa]/80 hover:text-[#4ee1d4] hover:bg-[#344e64]/30"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#344e64] to-[#4ee1d4] text-[#15102a] hover:opacity-90 transition-opacity shadow-lg shadow-[#4ee1d4]/20 flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#1a1329] border border-[#4ee1d4]/30 text-[#e5fffa] hover:text-[#4ee1d4]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-nav border-t border-[#4ee1d4]/20 px-4 py-4 mt-2"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-[#e5fffa] hover:bg-[#344e64]/40 hover:text-[#4ee1d4] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#4ee1d4]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-[#4ee1d4] text-[#15102a]"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
