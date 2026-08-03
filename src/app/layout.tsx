import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kautsar Aldzikra Harlan – NOC & Network Support Engineer",
  description:
    "Portfolio CV Kautsar Aldzikra Harlan – Lulusan Teknik Telekomunikasi PNJ dengan pengalaman di VSAT Operations, Network Monitoring, MikroTik, Linux VPS, dan IT Support. Open to NOC, Network Support, and IT Engineer opportunities.",
  keywords: [
    "NOC Engineer",
    "Network Support Engineer",
    "IT Support",
    "VSAT Operations",
    "MikroTik",
    "Linux Admin",
    "Telekomunikasi",
    "Kautsar Aldzikra Harlan",
    "PNJ",
    "Politeknik Negeri Jakarta",
  ],
  authors: [{ name: "Kautsar Aldzikra Harlan" }],
  openGraph: {
    title: "Kautsar Aldzikra Harlan – NOC & Network Support Engineer",
    description:
      "Portfolio CV Kautsar Aldzikra Harlan – Open to NOC, Network Support, and IT Support opportunities.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#15102a] text-[#e5fffa]">
        {children}
      </body>
    </html>
  );
}
