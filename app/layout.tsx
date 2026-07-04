import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Rafid Tahmid — Software & AI Engineer",
  description:
    "Mathematical and Computer Science student at Adelaide University building AI-driven automation, RAG pipelines, and full-stack web apps.",
  openGraph: {
    title: "Rafid Tahmid — Software & AI Engineer",
    description:
      "AI/LLM engineering, full-stack development, and real business impact. Portfolio of Rafid Tahmid.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
