import React, { ReactNode } from "react";
import { useTerminalStore } from "@/store/terminalStore";
import { portfolioData } from "@/data/portfolio";
import { SnakeGame } from "@/components/terminal/commands/SnakeGame";

// Command components will be imported here
// import { HeroSection } from "@/components/terminal/commands/HeroSection";

export const executeCommand = (commandStr: string): ReactNode => {
  const args = commandStr.trim().split(/\s+/);
  const cmd = args[0].toLowerCase();

  if (cmd === "play" && args[1] === "snake") {
    return <SnakeGame />;
  }

  switch (cmd) {
    case "help":
      return (
        <div className="flex flex-col gap-2 my-2 text-[var(--color-text-secondary)]">
          <p className="text-[var(--color-accent-blue)] font-bold mb-2 glitch uppercase tracking-widest text-lg">--- NEW: Try 'play snake' to play a game! ---</p>
          <p className="text-[var(--color-text-main)] font-semibold mb-1">Available commands:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div><span className="text-[var(--color-accent-green)]">play snake</span> - Play Terminal Snake! 🐍</div>
            <div><span className="text-[var(--color-accent-green)]">skills</span> - View skills 🚀</div>
            <div><span className="text-[var(--color-accent-green)]">whoami</span> - About me</div>
            <div><span className="text-[var(--color-accent-green)]">about</span> - Read about.md</div>
            <div><span className="text-[var(--color-accent-green)]">projects</span> - View projects</div>
            <div><span className="text-[var(--color-accent-green)]">experience</span> - Work history</div>
            <div><span className="text-[var(--color-accent-green)]">education</span> - Education info</div>
            <div><span className="text-[var(--color-accent-green)]">contact</span> - Contact info</div>
            <div><span className="text-[var(--color-accent-green)]">resume</span> - View resume</div>
            <div><span className="text-[var(--color-accent-green)]">clear</span> - Clear terminal</div>
            <div><span className="text-[var(--color-accent-green)]">history</span> - Command history</div>
            <div><span className="text-[var(--color-accent-green)]">theme</span> - Toggle themes</div>
            <div><span className="text-[var(--color-accent-green)]">date</span> - Current date</div>
            <div><span className="text-[var(--color-accent-green)]">pwd</span> - Print working dir</div>
            <div><span className="text-[var(--color-accent-green)]">banner</span> - Show banner</div>
            <div><span className="text-[var(--color-accent-green)]">neofetch</span> - System info</div>
          </div>
          <p className="mt-2 text-sm italic">Try &apos;sudo hire harsh&apos; for a surprise.</p>
        </div>
      );

    case "clear":
      // We must handle this via a small timeout to let the state update
      setTimeout(() => {
        useTerminalStore.getState().clearHistory();
      }, 10);
      return null;

    case "pwd":
      return <div className="my-1 text-[var(--color-text-main)]">/home/Harsh/portfolio</div>;

    case "date":
      return <div className="my-1 text-[var(--color-text-secondary)]">{new Date().toString()}</div>;

    case "echo":
      return <div className="my-1 text-[var(--color-text-main)]">{args.slice(1).join(" ")}</div>;

    case "whoami":
      if (args.length > 1) {
        return <div className="my-1 text-[var(--color-accent-red)]">whoami: extra operand {args[1]}</div>;
      }
      return renderWhoami();

    case "about":
    case "cat":
      if (cmd === "cat") {
        const file = args[1];
        if (!file) return <div className="my-1 text-[var(--color-accent-red)]">cat: missing operand</div>;
        if (file === "about.md") return renderAbout();
        if (file === "experience.log") return renderExperience();
        if (file === "education.md") return renderEducation();
        if (file === "resume.txt") return <div className="my-1 text-[var(--color-text-main)]">Fetching resume from {portfolioData.personalInfo.resumeLink}...</div>;
        if (file === "projects.json") return renderProjects();
        return <div className="my-1 text-[var(--color-accent-red)]">cat: {file}: No such file or directory</div>;
      }
      if (cmd === "about") return renderAbout();
      break;

    case "skills":
    case "stack":
      return renderSkills();

    case "projects":
    case "ls":
      if (cmd === "ls" && args[1] && args[1].includes("projects")) return renderProjects();
      if (cmd === "projects") return renderProjects();
      if (cmd === "ls") {
        return (
          <div className="flex gap-4 my-2 text-[var(--color-accent-blue)] font-semibold">
            <span>projects/</span>
            <span>certificates/</span>
            <span className="text-[var(--color-text-main)] font-normal">about.md</span>
            <span className="text-[var(--color-text-main)] font-normal">experience.log</span>
            <span className="text-[var(--color-text-main)] font-normal">education.md</span>
          </div>
        );
      }
      break;

    case "experience":
      return renderExperience();

    case "education":
      return renderEducation();

    case "contact":
      return renderContact();

    case "sudo":
      if (args[1] === "hire" && args[2] === "harsh") {
        return (
          <div className="my-4 p-4 border border-[var(--color-accent-green)]/30 bg-[var(--color-accent-green)]/10 rounded-md animate-pulse">
            <h3 className="text-xl text-[var(--color-accent-green)] font-bold mb-2">🎉 Access Granted!</h3>
            <p className="text-[var(--color-text-main)]">Preparing onboarding documents for Harsh Dodiya...</p>
            <p className="mt-2 text-[var(--color-text-secondary)]">Please reach out at <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-[var(--color-accent-blue)] hover:underline">{portfolioData.personalInfo.email}</a> to finalize the offer.</p>
          </div>
        );
      }
      return <div className="my-1 text-[var(--color-accent-red)]">Permission denied. You are not in the sudoers file.</div>;

    case "coffee":
      return (
        <div className="my-2 text-[var(--color-accent-yellow)]">
          <pre className="font-mono text-xs">
            {`
      ( (
       ) )
    ........
    |      |]
    \\      /
     \`----'
`}
          </pre>
          <div className="mt-2 text-[var(--color-text-main)]">Brewing a fresh cup of coffee... Enjoy! ☕</div>
        </div>
      );

    case "joke":
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "I would tell you a UDP joke, but you might not get it."
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      return <div className="my-2 text-[var(--color-accent-green)]">{randomJoke}</div>;

    case "banner":
      return renderBanner();

    case "neofetch":
      return <Neofetch />;

    case "resume":
      return (
        <div className="my-4 glass-panel p-6 rounded-xl border border-[var(--color-card)] inline-block">
          <h3 className="text-xl text-[var(--color-text-main)] font-bold mb-2">Harsh_Resume.pdf</h3>
          <p className="text-[var(--color-text-secondary)] mb-4">View or download my professional resume.</p>
          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="bg-[var(--color-accent-blue)] text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
              View PDF
            </a>
            <a href="/resume.pdf" download className="bg-[var(--color-surface)] border border-[var(--color-card)] text-[var(--color-text-main)] px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-card)] transition-colors">
              Download
            </a>
          </div>
        </div>
      );

    case "history":
      const historyItems = useTerminalStore.getState().history;
      return (
        <div className="my-2 flex flex-col font-mono text-[var(--color-text-secondary)]">
          {historyItems.map((item, idx) => (
            <div key={item.id} className="flex gap-4">
              <span className="w-8 text-right">{idx + 1}</span>
              <span className="text-[var(--color-text-main)]">{item.command}</span>
            </div>
          ))}
        </div>
      );

    case "theme":
      // Toggle a simple light mode class for demonstration
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('light');
        const isLight = document.documentElement.classList.contains('light');
        return <div className="my-1 text-[var(--color-accent-green)]">Theme switched to {isLight ? 'Light' : 'Dark'} mode.</div>;
      }
      return <div className="my-1 text-[var(--color-text-secondary)]">Theme switching is not available on the server.</div>;

    default:
      return (
        <div className="my-1">
          <span className="text-[var(--color-accent-red)]">hd: command not found: {cmd}</span>
          <div className="text-[var(--color-text-secondary)] text-sm mt-1">Type <span className="text-[var(--color-accent-green)]">help</span> to see available commands.</div>
        </div>
      );
  }
};

// Extracted render functions (these would ideally be separate components)

const renderBanner = () => (
  <div className="my-4 overflow-x-auto w-full no-scrollbar">
    <pre className="text-[var(--color-accent-green)] font-mono text-[8px] sm:text-[10px] md:text-xs leading-[1.2] w-fit">
      {`
  _    _                _       _____            _ _             
 | |  | |              | |     |  __ \\          | (_)            
 | |__| | __ _ _ __ ___| |__   | |  | | ___   __| |_ _   _  __ _ 
 |  __  |/ _\` | '__/ __| '_ \\  | |  | |/ _ \\ / _\` | | | | |/ _\` |
 | |  | | (_| | |  \\__ \\ | | | | |__| | (_) | (_| | | |_| | (_| |
 |_|  |_|\\__,_|_|  |___/_| |_| |_____/ \\___/ \\__,_|_|\\__, |\\__,_|
                                                      __/ |      
                                                     |___/       
`}
    </pre>
    <div className="text-[var(--color-text-secondary)] mt-2 text-sm whitespace-normal w-full">
      Welcome to my interactive terminal portfolio. Type <span className="text-[var(--color-accent-green)]">help</span> to get started.
    </div>
  </div>
);

const Neofetch = () => {
  const [uptime, setUptime] = React.useState("0 mins, 0 secs");
  const [resolution, setResolution] = React.useState("1920x1080");
  const [os, setOs] = React.useState("macOS Sonoma (Web Edition)");
  const [memory, setMemory] = React.useState("512 MB / 8192 MB");

  React.useEffect(() => {
    // Dynamic uptime
    const startTime = Date.now();
    const updateTime = () => {
      const diffMs = Date.now() - startTime;
      const diffMins = Math.floor(diffMs / 60000);
      const diffSecs = Math.floor((diffMs % 60000) / 1000);
      setUptime(`${diffMins} min${diffMins !== 1 ? 's' : ''}, ${diffSecs} sec${diffSecs !== 1 ? 's' : ''}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Dynamic resolution
    if (typeof window !== 'undefined') {
      setResolution(`${window.screen.width}x${window.screen.height}`);
      
      // Dynamic OS based on userAgent
      const ua = window.navigator.userAgent;
      if (ua.indexOf("Windows") !== -1) setOs("Windows 11 (Web Edition)");
      else if (ua.indexOf("Mac") !== -1) setOs("macOS Sequoia (Web Edition)");
      else if (ua.indexOf("Linux") !== -1) setOs("Linux (Web Edition)");
      else if (ua.indexOf("Android") !== -1) setOs("Android (Web Edition)");
      else if (ua.indexOf("iPhone") !== -1) setOs("iOS (Web Edition)");

      // Dynamic memory
      const perf = window.performance as any;
      if (perf && perf.memory) {
        const updateMem = () => {
          const used = Math.round(perf.memory.usedJSHeapSize / 1048576);
          const limit = Math.round(perf.memory.jsHeapSizeLimit / 1048576);
          setMemory(`${used} MB / ${limit} MB (JS Heap)`);
        };
        updateMem();
        const memInterval = setInterval(updateMem, 2000);
        return () => {
          clearInterval(interval);
          clearInterval(memInterval);
        };
      }
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 flex flex-col sm:flex-row gap-8 font-mono text-sm items-start">
      {/* Cool ASCII Logo */}
      <div className="text-[var(--color-accent-blue)] font-bold whitespace-pre leading-tight drop-shadow-[0_0_8px_var(--color-accent-blue)] animate-pulse">
        {`
       .──────────────────.
      /                    \\
     |   .--------------.   |
     |   |  __   __     |   |
     |   | |  | |  \\    |   |
     |   | |--| |   |   |   |
     |   | |  | |__/    |   |
     |   |              |   |
     |   '--------------'   |
      \\                    /
       '──────────────────'
          \\_________/
          /_________\\
         /__________\\
`}
      </div>
      
      {/* Neofetch Details */}
      <div className="flex flex-col gap-1.5 text-[var(--color-text-secondary)]">
        <div className="font-bold text-[var(--color-accent-green)] text-lg mb-1 tracking-wider drop-shadow-[0_0_6px_var(--color-accent-green)]">Harsh@portfolio</div>
        <div className="text-[var(--color-card)] tracking-widest h-1 font-bold">=================</div>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">OS</span>
          <span className="text-[var(--color-text-main)]">: {os}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Host</span>
          <span className="text-[var(--color-text-main)]">: Vercel / Next.js 16.2.10</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Kernel</span>
          <span className="text-[var(--color-text-main)]">: React 19 Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Uptime</span>
          <span className="text-[var(--color-accent-green)] font-semibold">: {uptime}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Packages</span>
          <span className="text-[var(--color-text-main)]">: 1024 (npm)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Shell</span>
          <span className="text-[var(--color-text-main)]">: hd-shell v1.5</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Resolution</span>
          <span className="text-[var(--color-text-main)]">: {resolution}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">WM</span>
          <span className="text-[var(--color-text-main)]">: Framer Motion Compositor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Terminal</span>
          <span className="text-[var(--color-text-main)]">: React DOM / Tailwind CSS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">CPU</span>
          <span className="text-[var(--color-text-main)]">: Harsh Dodiya Neural Net v3.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[var(--color-accent-blue)] font-semibold w-24">Memory</span>
          <span className="text-[var(--color-accent-purple)] font-semibold">: {memory}</span>
        </div>
        
        {/* Glow Color blocks */}
        <div className="flex gap-2 mt-4">
          <div className="w-5 h-5 rounded-full bg-black border border-neutral-700 shadow-md"></div>
          <div className="w-5 h-5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
          <div className="w-5 h-5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
          <div className="w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]"></div>
          <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
          <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
          <div className="w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
          <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>
    </div>
  );
};

const renderWhoami = () => (
  <div className="my-4">
    <h1 className="text-4xl font-bold text-[var(--color-text-main)] mb-2 tracking-tight">{portfolioData.personalInfo.fullName}</h1>
    <h2 className="text-xl text-[var(--color-accent-blue)] mb-4">{portfolioData.personalInfo.title}</h2>
    <div className="flex flex-col gap-1 text-[var(--color-text-secondary)]">
      <div className="flex gap-2"><span className="w-24 text-[var(--color-text-main)]">Location:</span> {portfolioData.personalInfo.location}</div>
      <div className="flex gap-2"><span className="w-24 text-[var(--color-text-main)]">Status:</span> <span className="text-[var(--color-accent-green)]">Available for hire</span></div>
    </div>
  </div>
);

const renderAbout = () => (
  <div className="my-4 max-w-2xl text-[var(--color-text-secondary)]">
    <h3 className="text-xl text-[var(--color-text-main)] font-semibold mb-2"># Developer Story</h3>
    <p className="leading-relaxed whitespace-pre-wrap">{portfolioData.personalInfo.about}</p>
  </div>
);

const renderSkills = () => (
  <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
    {Object.entries(portfolioData.skills).map(([category, skills]) => (
      <div key={category} className="glass-panel p-4 rounded-xl border border-[var(--color-card)]">
        <h4 className="text-[var(--color-text-main)] capitalize font-semibold mb-3 border-b border-[var(--color-card)] pb-2">{category}</h4>
        <div className="flex flex-col gap-2">
          {skills.map(skill => (
            <div key={skill.name} className="flex justify-between items-center group">
              <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-main)] transition-colors">{skill.name}</span>
              <div className="w-24 h-1.5 bg-black/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-accent-blue)] rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const renderProjects = () => (
  <div className="my-4 grid grid-cols-1 gap-4">
    {portfolioData.projects.map((project, idx) => (
      <div key={idx} className="glass-panel p-5 rounded-xl border border-[var(--color-card)] hover:border-[var(--color-accent-blue)]/50 transition-colors group">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl text-[var(--color-text-main)] font-bold group-hover:text-[var(--color-accent-blue)] transition-colors">{project.name}</h3>
          <div className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1">⭐ {project.stars}</span>
            <span className="flex items-center gap-1">🍴 {project.forks}</span>
          </div>
        </div>
        <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-1 text-xs rounded-md bg-[var(--color-surface)] text-[var(--color-accent-green)] border border-[var(--color-card)]">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
          View on GitHub
        </a>
      </div>
    ))}
  </div>
);

const renderExperience = () => (
  <div className="my-4 border-l-2 border-[var(--color-card)] pl-4 ml-2 flex flex-col gap-6">
    {portfolioData.experience.map((exp, idx) => (
      <div key={idx} className="relative">
        <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent-purple)] shadow-[0_0_10px_var(--color-accent-purple)]" />
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
          <h3 className="text-lg font-bold text-[var(--color-text-main)]">{exp.role}</h3>
          <span className="text-[var(--color-text-secondary)] text-sm font-mono">{exp.duration}</span>
        </div>
        <div className="text-[var(--color-accent-blue)] mb-2 font-medium">{exp.company} — {exp.location}</div>
        <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-1">
          {exp.details.map((detail, i) => (
            <li key={i} className="leading-relaxed">{detail}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const renderEducation = () => (
  <div className="my-4 border-l-2 border-[var(--color-card)] pl-4 ml-2 flex flex-col gap-6">
    {portfolioData.education.map((edu, idx) => (
      <div key={idx} className="relative">
        <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent-yellow)] shadow-[0_0_10px_var(--color-accent-yellow)]" />
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
          <h3 className="text-lg font-bold text-[var(--color-text-main)]">{edu.degree}</h3>
          <span className="text-[var(--color-text-secondary)] text-sm font-mono">{edu.duration}</span>
        </div>
        <div className="text-[var(--color-accent-green)] mb-2 font-medium">{edu.institution} — {edu.location}</div>
        <p className="text-[var(--color-text-secondary)]">{edu.details}</p>
      </div>
    ))}
  </div>
);

const renderContact = () => (
  <div className="my-4 max-w-md glass-panel p-6 rounded-xl border border-[var(--color-card)]">
    <h3 className="text-xl text-[var(--color-text-main)] font-bold mb-4">Let&apos;s Connect</h3>
    <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
      <div className="flex items-center justify-between group">
        <span>Email</span>
        <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-[var(--color-text-main)] group-hover:text-[var(--color-accent-blue)] transition-colors">{portfolioData.personalInfo.email}</a>
      </div>
      <div className="flex items-center justify-between group">
        <span>GitHub</span>
        <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] group-hover:text-[var(--color-accent-blue)] transition-colors">github.com/harshdodiya58</a>
      </div>
      <div className="flex items-center justify-between group">
        <span>LinkedIn</span>
        <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] group-hover:text-[var(--color-accent-blue)] transition-colors">LinkedIn Profile</a>
      </div>
    </div>
  </div>
);
