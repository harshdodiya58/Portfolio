"use client";

import React, { ReactNode } from "react";
import { useTerminalStore } from "@/store/terminalStore";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "./TerminalWindow";
import { CommandPalette } from "./CommandPalette";

export const Desktop = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center p-4 sm:p-8 md:p-12">
      {/* Animated Noise Background */}
      <div className="noise-bg" />
      
      {/* Soft Aurora / Gradient Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-accent-blue)]/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-accent-purple)]/10 blur-[150px] pointer-events-none mix-blend-screen" />
      
      {/* Terminal Window */}
      <TerminalWindow />

      {/* Command Palette */}
      <CommandPalette />
    </div>
  );
};
