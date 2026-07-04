"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Zap,
  MessageCircle,
  Mail,
  Download,
  Github,
  Linkedin,
  Command,
} from "lucide-react";
import { NAV_ITEMS, PERSONAL, SOCIAL_LINKS } from "@/lib/constants";

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const scrollTo = useCallback((id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setSearch("");
  }, []);

  const commands: CommandItem[] = useMemo(
    () => [
      // Navigation
      {
        id: "nav-home",
        label: "Home",
        description: "Go to hero section",
        icon: <Home size={16} />,
        action: () => scrollTo("#hero"),
        category: "Navigation",
      },
      {
        id: "nav-about",
        label: "About",
        description: "Learn about me",
        icon: <User size={16} />,
        action: () => scrollTo("#about"),
        category: "Navigation",
      },
      {
        id: "nav-skills",
        label: "Skills",
        description: "View my skill galaxy",
        icon: <Code size={16} />,
        action: () => scrollTo("#skills"),
        category: "Navigation",
      },
      {
        id: "nav-experience",
        label: "Experience",
        description: "My work history",
        icon: <Briefcase size={16} />,
        action: () => scrollTo("#experience"),
        category: "Navigation",
      },
      {
        id: "nav-projects",
        label: "Projects",
        description: "View my work",
        icon: <FolderOpen size={16} />,
        action: () => scrollTo("#projects"),
        category: "Navigation",
      },
      {
        id: "nav-services",
        label: "Services",
        description: "What I offer",
        icon: <Zap size={16} />,
        action: () => scrollTo("#services"),
        category: "Navigation",
      },
      {
        id: "nav-testimonials",
        label: "Testimonials",
        description: "Kind words from clients",
        icon: <MessageCircle size={16} />,
        action: () => scrollTo("#testimonials"),
        category: "Navigation",
      },
      {
        id: "nav-contact",
        label: "Contact",
        description: "Get in touch",
        icon: <Mail size={16} />,
        action: () => scrollTo("#contact"),
        category: "Navigation",
      },
      // Actions
      {
        id: "action-resume",
        label: "Download Resume",
        description: "Get my CV",
        icon: <Download size={16} />,
        action: () => {
          window.open(PERSONAL.resumeUrl, "_blank");
          setIsOpen(false);
        },
        category: "Actions",
        shortcut: "⌘R",
      },
      {
        id: "action-email",
        label: "Send Email",
        description: `Mail to ${PERSONAL.email}`,
        icon: <Mail size={16} />,
        action: () => {
          window.open(`mailto:${PERSONAL.email}`, "_blank");
          setIsOpen(false);
        },
        category: "Actions",
      },
      // Social
      {
        id: "social-github",
        label: "GitHub",
        description: "View my repositories",
        icon: <Github size={16} />,
        action: () => {
          window.open(SOCIAL_LINKS[0]?.url, "_blank");
          setIsOpen(false);
        },
        category: "Social",
      },
      {
        id: "social-linkedin",
        label: "LinkedIn",
        description: "Connect on LinkedIn",
        icon: <Linkedin size={16} />,
        action: () => {
          window.open(SOCIAL_LINKS[1]?.url, "_blank");
          setIsOpen(false);
        },
        category: "Social",
      },
    ],
    [scrollTo]
  );

  const filtered = useMemo(() => {
    if (!search) return commands;
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, commands]);

  // Group by category
  const grouped = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filtered.forEach((cmd) => {
      if (!groups[cmd.category]) groups[cmd.category] = [];
      groups[cmd.category].push(cmd);
    });
    return groups;
  }, [filtered]);

  // Keyboard handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch("");
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-start justify-center pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setIsOpen(false);
              setSearch("");
            }}
          />

          {/* Palette */}
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-xl"
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <Search size={16} className="text-white/30" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                autoFocus
              />
              <kbd className="flex items-center gap-0.5 rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] text-white/30">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-2">
                  <p className="px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/25">
                    {category}
                  </p>
                  {items.map((cmd) => (
                    <button
                      key={cmd.id}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-white/[0.04]"
                      onClick={cmd.action}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/50">
                        {cmd.icon}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-white/80">{cmd.label}</p>
                        <p className="text-[11px] text-white/30">
                          {cmd.description}
                        </p>
                      </div>
                      {cmd.shortcut && (
                        <kbd className="font-mono text-[10px] text-white/20">
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </button>
                  ))}
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="py-8 text-center text-sm text-white/30">
                  No commands found.
                </p>
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-between border-t border-white/[0.04] px-4 py-2">
              <span className="font-mono text-[9px] text-white/20">
                Navigate with ↑↓ · Select with ↵
              </span>
              <div className="flex items-center gap-1">
                <Command size={10} className="text-white/20" />
                <span className="font-mono text-[9px] text-white/20">
                  K to toggle
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
