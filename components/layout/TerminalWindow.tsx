"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminalStore } from "@/store/terminalStore";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import { TerminalContent } from "../terminal/TerminalContent";

export const TerminalWindow = () => {
  const { isMaximized, setMaximized, isClosed, setClosed } = useTerminalStore();
  const windowRef = useRef<HTMLDivElement>(null);
  
  if (isClosed) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center text-[var(--color-text-secondary)]">
        <p className="mb-4 text-xl">Terminal Session Ended</p>
        <button 
          onClick={() => setClosed(false)}
          className="px-4 py-2 rounded-md bg-[var(--color-surface)] border border-[var(--color-card)] hover:bg-[var(--color-card)] transition-colors"
        >
          Restart Session
        </button>
      </div>
    );
  }

  return (
    <motion.div
      ref={windowRef}
      drag={!isMaximized}
      dragMomentum={false}
      dragElastic={0}
      initial={{ scale: 0.95, opacity: 0, y: 10 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      className={`glass-panel flex flex-col shadow-2xl shadow-black/50 overflow-hidden absolute
        ${isMaximized 
          ? 'inset-0 !w-full !h-full !max-w-none !max-h-none !rounded-none z-50' 
          : 'inset-0 m-auto w-[90%] md:w-[85%] h-[85vh] max-w-[1200px] max-h-[800px] rounded-xl'}`}
      style={{
        zIndex: 10,
      }}
    >
      {/* Title Bar */}
      <div 
        className="h-12 flex items-center justify-between px-4 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-text-secondary)]/10 select-none cursor-grab active:cursor-grabbing"
      >
        {/* Traffic Lights */}
        <div className="flex items-center gap-2 w-20">
          <button 
            onClick={() => setClosed(true)}
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group"
          >
            <X size={10} className="opacity-0 group-hover:opacity-100 text-black/60" />
          </button>
          <button 
            className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center group"
          >
            <Minus size={10} className="opacity-0 group-hover:opacity-100 text-black/60" />
          </button>
          <button 
            onClick={() => setMaximized(!isMaximized)}
            className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center group"
          >
            {isMaximized ? (
              <Minimize2 size={10} className="opacity-0 group-hover:opacity-100 text-black/60" />
            ) : (
              <Maximize2 size={10} className="opacity-0 group-hover:opacity-100 text-black/60" />
            )}
          </button>
        </div>

        {/* Window Title */}
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] font-medium">
          guest@portfolio · zsh
        </div>

        {/* Empty space for flex balance */}
        <div className="w-20" />
      </div>

      {/* Terminal Content Area */}
      <div className="flex-1 relative overflow-hidden bg-black/40 backdrop-blur-3xl">
        <TerminalContent />
      </div>
    </motion.div>
  );
};
