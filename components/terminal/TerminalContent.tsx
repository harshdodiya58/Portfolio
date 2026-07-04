"use client";

import React, { useRef, useEffect } from "react";
import { useTerminalStore } from "@/store/terminalStore";
import { TerminalInput } from "./TerminalInput";
import { motion } from "framer-motion";
import { TerminalBoot } from "./TerminalBoot";

export const TerminalContent = () => {
  const { history, isBooting, setBooting, addRecord } = useTerminalStore();
  const bottomRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when history changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleBootComplete = async () => {
    setBooting(false);
    // Add banner dynamically
    const { executeCommand } = await import("@/lib/commandEngine");
    const output = executeCommand("banner");
    addRecord({ command: "banner", output });
  };

  if (isBooting) {
    return <TerminalBoot onComplete={handleBootComplete} />;
  }

  return (
    <div className="h-full w-full overflow-y-auto p-4 sm:p-6 text-[15px] leading-relaxed">
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        {/* Render Command History */}
        {history.map((record) => (
          <div key={record.id} className="flex flex-col gap-1">
            {/* Command Echo */}
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[var(--color-text-main)] items-center">
              <div className="flex gap-1 items-center">
                <span className="text-[var(--color-accent-green)] font-bold shrink-0">guest@portfolio</span>
                <span className="text-[var(--color-text-secondary)] shrink-0">:</span>
                <span className="text-[var(--color-accent-blue)] font-bold shrink-0">~/portfolio</span>
                <span className="text-[var(--color-text-main)] shrink-0">$</span>
              </div>
              <span className="text-white">{record.command}</span>
            </div>
            
            {/* Command Output */}
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[var(--color-text-main)]"
            >
              {record.output}
            </motion.div>
          </div>
        ))}
        
        {/* Active Input Prompt */}
        <TerminalInput />
        
        {/* Invisible element to scroll to */}
        <div ref={bottomRef} className="h-4" />
      </div>
    </div>
  );
};
