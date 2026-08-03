export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github?: string;
  summary: string;
  status: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Intermediate", "Experienced"
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  summary?: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  major?: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  badgeUrl?: string;
  credentialId?: string;
  active: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  highlights: string[];
  link?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
}

export const cvData: PortfolioData = {
  personalInfo: {
    name: "Kautsar Aldzikra Harlan",
    title: "Network Operations Center (NOC) & Support Engineer",
    location: "Cakung, East Jakarta, Indonesia",
    phone: "+62 896-6394-0508",
    email: "kautsar.al.dzikra.harlan.kerja@gmail.com",
    linkedin: "https://linkedin.com/in/kautsar-aldzikra-harlan",
    summary:
      "Telecommunication Engineering graduate with experience in Network Monitoring, VSAT Operations, LAN Troubleshooting, Linux Server Administration, MikroTik Configuration, Incident Analysis, Technical Support, and Operational Monitoring. Strong analytical and problem-solving skills developed through telecommunication internships, homelab projects, and business operations management. Seeking opportunities as Network Operations Center (NOC), IT Support, or Network Support Engineer.",
    status: "Available for NOC & IT Support Opportunities"
  },
  skillCategories: [
    {
      category: "Networking",
      description: "Network routing, switching, monitoring & satellite communication protocols.",
      iconName: "Network",
      skills: [
        { name: "Network Monitoring", level: "Advanced", featured: true },
        { name: "VSAT Operation", level: "Experienced", featured: true },
        { name: "LAN Troubleshooting", level: "Advanced", featured: true },
        { name: "Routing & Switching", level: "Advanced", featured: true },
        { name: "VLAN", level: "Advanced" },
        { name: "DHCP & NAT", level: "Advanced" },
        { name: "Firewall & QoS", level: "Experienced" },
        { name: "VPN & TCP/IP", level: "Advanced" }
      ]
    },
    {
      category: "Systems & Tools",
      description: "Linux administration, router OS, diagnostics, and IT management software.",
      iconName: "Server",
      skills: [
        { name: "MikroTik (Winbox)", level: "Advanced", featured: true },
        { name: "Linux (Ubuntu)", level: "Advanced", featured: true },
        { name: "SSH & PuTTY", level: "Advanced" },
        { name: "Wireshark", level: "Experienced", featured: true },
        { name: "Basic Router Configuration", level: "Advanced" },
        { name: "Excel / Office Reporting", level: "Advanced" }
      ]
    },
    {
      category: "Technical Support",
      description: "Hardware installation, remote troubleshooting, and CCTV deployment.",
      iconName: "Wrench",
      skills: [
        { name: "CCTV Installation & Config", level: "Experienced", featured: true },
        { name: "Hardware Troubleshooting", level: "Advanced", featured: true },
        { name: "Software Troubleshooting", level: "Advanced" },
        { name: "Remote Support", level: "Advanced", featured: true }
      ]
    }
  ],
  experiences: [
    {
      id: "mandha-sejati",
      company: "CV Mandha Sejati",
      role: "Operations Support (Madha Geprek)",
      period: "January 2025 – June 2026",
      type: "F&B Retail Business",
      summary: "Managed outlet operations, IT infrastructure, CCTV installations, and automated reporting systems.",
      responsibilities: [
        "Coordinated daily outlet operations and workforce activities to ensure smooth business continuity during high-demand periods.",
        "Developed Microsoft Excel–based reporting tools and dashboards to automate revenue calculations and monitor outlet performance.",
        "Managed inventory planning, procurement, and operational reporting to support business performance and cost control.",
        "Assisted in installing and configuring CCTV systems, Wi-Fi routers, and provided first-level troubleshooting for computers and network connectivity.",
        "Collaborated with the business owner to improve operational workflows and implement process improvements across business operations."
      ],
      skillsUsed: ["CCTV Config", "Wi-Fi Routers", "Excel Dashboards", "IT Support", "Operations"]
    },
    {
      id: "psn",
      company: "PT Pasifik Satelit Nusantara (PSN)",
      role: "Satellite Control Center Intern",
      period: "August 2023 – December 2023",
      type: "Satellite Communications",
      summary: "Monitored VSAT network telemetry, SLA targets, and Mobile VSAT system operations.",
      responsibilities: [
        "Monitored real-time VSAT network performance and satellite connectivity to maintain service availability in accordance with SLA targets.",
        "Performed Tracking, Telemetry & Command (TT&C) operations on Mobile VSAT systems to ensure stable satellite communications.",
        "Conducted first-level incident analysis and troubleshooting before escalating complex issues to Tier 2 Network Engineers.",
        "Assisted in developing Standard Operating Procedures (SOP) for LNA replacement, improving maintenance efficiency by 20%.",
        "Supported engineering teams in planning and deploying new VSAT antenna sites in Cikarang and Medan."
      ],
      skillsUsed: ["VSAT Monitoring", "TT&C Operations", "Incident Analysis", "SLA Monitoring", "SOP Development"]
    },
    {
      id: "telkomsel",
      company: "PT Telekomunikasi Seluler (Telkomsel)",
      role: "Network Engineer Intern",
      period: "January 2020 – February 2020",
      type: "Telecommunications",
      summary: "Deployed office network infrastructure, MikroTik configuration, and cellular signal drive tests.",
      responsibilities: [
        "Assisted in network deployment, internet installation, and basic network topology implementation for commercial office environments.",
        "Installed and configured MikroTik routers and network switches to support LAN connectivity and network performance.",
        "Performed network monitoring and first-level troubleshooting to identify and resolve connectivity issues.",
        "Supported drive test activities and assisted in analyzing cellular signal quality and network performance."
      ],
      skillsUsed: ["MikroTik Routers", "LAN Configuration", "Network Monitoring", "Drive Test Analysis", "Topology Design"]
    }
  ],
  education: [
    {
      institution: "Politeknik Negeri Jakarta (PNJ)",
      degree: "Diploma (D3) in Electrical Engineering – Telecommunication",
      period: "August 2021 – August 2024",
      description: "Focused on Telecommunication Networks, Signals, RF Systems, Satellite Communications, and Network Infrastructure."
    },
    {
      institution: "SMK Dinamika Pembangunan 1 Jakarta",
      degree: "Vocational High School Diploma",
      major: "Computer and Network Engineering (TKJ)",
      period: "June 2018 – June 2021",
      description: "Core foundation in Computer Hardware, Networking Fundamentals, Cisco Networking, Linux Administration, and Cable Crimping."
    }
  ],
  certifications: [
    {
      title: "Network Addressing and Basic Troubleshooting",
      issuer: "Cisco Networking Academy",
      issueDate: "26 July 2026",
      active: true
    },
    {
      title: "Google IT Support",
      issuer: "Google Career Certificates (Coursera)",
      issueDate: "23 July 2026",
      active: true
    },
    {
      title: "Certified Radio RF Planner – BNSP",
      issuer: "LSP Telekomunikasi Digital Indonesia",
      issueDate: "September 2024",
      expiryDate: "September 2027",
      active: true
    }
  ],
  projects: [
    {
      id: "vps-admin",
      title: "Linux VPS & Network Administration",
      category: "Server & Security",
      tools: ["Ubuntu Server", "SSH", "Winbox", "Port Forwarding", "UFW Firewall", "Service Monitoring"],
      description: "Production-grade Linux virtual private server setup for remote infrastructure management and network monitoring.",
      highlights: [
        "Deployed and managed an Ubuntu-based VPS for remote administration, network service monitoring, and connectivity troubleshooting.",
        "Configured SSH key authentication, UFW firewall rules, fail2ban, and port forwarding to enforce strict remote security."
      ]
    },
    {
      id: "homelab-sim",
      title: "Network Homelab & Simulation Infrastructure",
      category: "Network Engineering",
      tools: ["MikroTik", "Cisco Packet Tracer", "VMware", "VLAN", "DHCP", "NAT", "Subnetting"],
      description: "Comprehensive virtualized homelab testing static/dynamic routing, VLAN segregation, and network outage simulation.",
      highlights: [
        "Built networking lab environments to practice VLAN, DHCP, NAT, subnetting, static routing, and LAN troubleshooting.",
        "Simulated complex network scenarios to strengthen real-time incident troubleshooting and network topology resilience."
      ]
    }
  ]
};
