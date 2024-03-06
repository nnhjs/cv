import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toogle";
import { Header } from "@/app/header";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Curriculum vitae`,
  description: RESUME_DATA.summary,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/avatar.png",
    },
  ],
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container relative mx-auto scroll-my-12 overflow-auto px-4 md:px-16 print:px-12">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
