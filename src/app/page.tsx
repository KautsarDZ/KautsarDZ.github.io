import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NocTerminalWidget from "@/components/NocTerminalWidget";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationCertificationsSection from "@/components/EducationCertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NocTerminalWidget />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationCertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
