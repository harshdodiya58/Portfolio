"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminalStore } from "@/store/terminalStore";
import { Search, Terminal, Code, User, Briefcase, Mail } from "lucide-react";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { setClosed, setMaximized, isMaximized, addRecord } = useTerminalStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearch("");
    }
  }, [isOpen]);

  const executeAction = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  const executeTerminalCommand = (cmd: string) => {
    setClosed(false);
    // Add command to terminal history dynamically
    import("@/lib/commandEngine").then(({ executeCommand }) => {
      const output = executeCommand(cmd);
      addRecord({ command: cmd, output });
    });
    setIsOpen(false);
  };

  const commands = [
    { id: "about", name: "About Me", icon: <User size={16} />, action: () => executeTerminalCommand("about") },
    { id: "projects", name: "View Projects", icon: <Code size={16} />, action: () => executeTerminalCommand("projects") },
    { id: "experience", name: "Experience", icon: <Briefcase size={16} />, action: () => executeTerminalCommand("experience") },
    { id: "contact", name: "Contact Info", icon: <Mail size={16} />, action: () => executeTerminalCommand("contact") },
    { id: "toggle-max", name: "Toggle Fullscreen", icon: <Terminal size={16} />, action: () => setMaximized(!isMaximized) },
  ];

  const filteredCommands = commands.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-[20%] left-[50%] w-[90%] max-w-[600px] bg-[var(--color-surface)]/90 backdrop-blur-xl border border-[var(--color-card)] rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center px-4 py-3 border-b border-[var(--color-card)]">
              <Search size={20} className="text-[var(--color-text-secondary)] mr-3" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search commands..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-white font-mono placeholder:text-[var(--color-text-secondary)]"
              />
              <div className="flex gap-1 text-[10px] text-[var(--color-text-secondary)] font-mono border border-[var(--color-card)] rounded px-1.5 py-0.5 ml-2 bg-black/20">
                ESC
              </div>
            </div>
            
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map(cmd => (
                  <button
                    key={cmd.id}
                    onClick={() => executeAction(cmd.action)}
                    className="w-full flex items-center px-3 py-2.5 rounded-lg text-left text-white hover:bg-[var(--color-accent-blue)]/20 hover:text-[var(--color-accent-blue)] transition-colors group cursor-pointer"
                  >
                    <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-blue)] mr-3 transition-colors">
                      {cmd.icon}
                    </span>
                    <span className="font-mono text-sm">{cmd.name}</span>
                  </button>
                ))
              ) : (
                <div className="px-3 py-8 text-center text-[var(--color-text-secondary)] font-mono text-sm">
                  No commands found.
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
