"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useTerminalStore } from "@/store/terminalStore";
import { executeCommand } from "@/lib/commandEngine";

export const TerminalInput = () => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { history, currentDirectory, addRecord } = useTerminalStore();

  // Focus input automatically when clicked anywhere in the window
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Don't steal focus from elements that need it
      if ((e.target as Element)?.closest?.('.no-focus-steal')) return;
      
      // Don't focus if selecting text
      if (window.getSelection()?.toString() !== "") return;
      inputRef.current?.focus();
    };

    document.addEventListener("click", handleGlobalClick);
    // Initial focus
    setTimeout(() => inputRef.current?.focus(), 100);

    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent focus switching
      const availableCommands = [
        "help", "whoami", "about", "skills", "projects", "experience",
        "education", "contact", "resume", "clear", "history", "theme",
        "date", "pwd", "banner", "neofetch", "cat", "ls", "sudo", "coffee", "joke", "play"
      ];

      const currentInput = input.toLowerCase();
      // Find matching commands
      const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput));

      if (matches.length === 1) {
        // Complete if exactly one match
        setInput(matches[0] + " ");
      } else if (matches.length > 1) {
        setInput(matches[0]);
      }
    } else if (e.key === "Enter") {
      const command = input.trim();
      if (command) {
        // Execute the command and get the output ReactNode
        const output = executeCommand(command);
        addRecord({ command, output });
      } else {
        // Empty command
        addRecord({ command: "", output: null });
      }
      setInput("");
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex);
          const cmd = history[history.length - 1 - nextIndex].command;
          setInput(cmd);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        const cmd = history[history.length - 1 - nextIndex].command;
        setInput(cmd);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 text-[var(--color-text-main)] mt-1 items-center">
      <div className="flex gap-1 items-center">
        <span className="text-[var(--color-accent-green)] font-bold shrink-0">Harsh@portfolio</span>
        <span className="text-[var(--color-text-secondary)] shrink-0">:</span>
        <span className="text-[var(--color-accent-blue)] font-bold shrink-0">{currentDirectory}</span>
        <span className="text-[var(--color-text-main)] shrink-0">$</span>
      </div>
      <div className="relative flex-1 flex items-center min-w-[150px]">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent outline-none border-none caret-transparent text-transparent z-10 font-mono"
          autoComplete="off"
          spellCheck="false"
          autoFocus
        />
        {/* Custom blinking cursor simulation */}
        <div className="absolute inset-0 pointer-events-none flex items-center">
          <span className="text-[var(--color-text-main)] whitespace-pre font-mono">{input}</span>
          <span className={`w-[8px] h-[1em] bg-[var(--color-text-main)] inline-block ml-[1px] ${isFocused ? 'cursor-blink' : 'opacity-50'}`} />
        </div>
      </div>
    </div>
  );
};
