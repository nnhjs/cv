import { ModeToggle } from "@/components/mode-toogle";
import React from "react";

export function Header() {
  return (
    <header className="flex items-center justify-between pb-4">
      <h1 className="text-2xl font-bold underline decoration-pink-300 decoration-wavy">
        Resume
      </h1>
      <ModeToggle />
    </header>
  );
}
