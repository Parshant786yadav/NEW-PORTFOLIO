import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parshant Yadav — SDE & Full-Stack AI Engineer | Portfolio",
  description:
    "Portfolio of Parshant Yadav — SDE and AI Engineer specializing in Next.js, Python, RAG pipelines, DocuMind AI, and Computer Vision. Available for engineering roles.",
  keywords: [
    "Parshant Yadav",
    "DocuMind AI",
    "SDE Portfolio",
    "Full Stack AI Engineer",
    "RAG Architecture",
    "Next.js Portfolio",
    "Python Developer Gurgaon",
    "Machine Learning Engineer",
  ],
  authors: [{ name: "Parshant Yadav", url: "https://parshantyadav.com" }],
  creator: "Parshant Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parshantyadav.com",
    title: "Parshant Yadav — SDE & Full-Stack AI Engineer",
    description:
      "Engineering production-ready AI systems, RAG architectures with pgvector, and high-performance Next.js applications.",
    siteName: "Parshant Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parshant Yadav — SDE & Full-Stack AI Engineer",
    description:
      "Engineering production-ready AI systems, RAG architectures with pgvector, and high-performance Next.js applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="bg-[#080b12] text-slate-100 font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
