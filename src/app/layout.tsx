import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Frontend Engineer | Resume`,
  description: RESUME_DATA.summary,
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
          <main className="container relative mx-auto overflow-auto p-4 md:p-16 md:pt-4 print:p-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
