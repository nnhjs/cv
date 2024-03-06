import { ModeToggle } from "@/components/mode-toogle";
import React from "react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav>Blog</nav>
      <ModeToggle />
    </header>
  );
}
