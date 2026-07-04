"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_SEQUENCE = [
  "Initializing Portfolio...",
  "Loading Components...",
  "Loading Experience...",
  "Loading Projects...",
  "Connecting GitHub...",
  "Loading Resume...",
  "Starting Terminal...",
  "Ready."
];

interface TerminalBootProps {
  onComplete: () => void;
}

interface BootLine {
  text: string;
  time: string;
}

export const TerminalBoot: React.FC<TerminalBootProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<BootLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (currentIndex < BOOT_SEQUENCE.length) {
      const timeout = setTimeout(() => {
        setLines(prev => [
          ...prev, 
          { 
            text: BOOT_SEQUENCE[currentIndex], 
            time: new Date().toISOString().split('T')[1].substring(0, 8) 
          }
        ]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 300 + 100);
      
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, onComplete, mounted]);

  return (
    <div className="h-full w-full p-6 text-[15px] font-mono text-[var(--color-text-main)]">
      <div className="max-w-4xl mx-auto flex flex-col gap-1">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${idx === BOOT_SEQUENCE.length - 1 ? 'text-[var(--color-accent-green)]' : ''}`}
          >
            <span className="text-[var(--color-text-secondary)] mr-2">[{line.time}]</span>
            {line.text}
          </motion.div>
        ))}
        {currentIndex < BOOT_SEQUENCE.length && (
          <div className="flex">
            <span className="text-[var(--color-text-secondary)] mr-2" suppressHydrationWarning>
              [{mounted ? new Date().toISOString().split('T')[1].substring(0, 8) : "00:00:00"}]
            </span>
            <span className="w-2 h-4 bg-[var(--color-text-main)] cursor-blink ml-1 mt-1 inline-block"></span>
          </div>
        )}
      </div>
    </div>
  );
};
