import {
  Project,
  Experience,
  Skill,
  Service,
  Testimonial,
  NavItem,
  StatCounter,
  SocialLink,
} from "@/types";

// ─── Personal Info ────────────────────────────────────────────
export const PERSONAL = {
  name: "Harsh Dodiya",
  firstName: "Harsh",
  lastName: "Dodiya",
  title: "Creative Developer & Full Stack Engineer",
  email: "harsh@dodiya.dev",
  phone: "+91 98765 43210",
  location: "Gujarat, India",
  tagline: "I craft digital experiences that push boundaries.",
  bio: "I design and build precise, beautiful software — from immersive web experiences to scalable full-stack platforms. Obsessed with the intersection of design, code, and motion.",
  availability: "Available for freelance & full-time",
  resumeUrl: "#",
};

// ─── Navigation ───────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero", number: "01" },
  { label: "About", href: "#about", number: "02" },
  { label: "Skills", href: "#skills", number: "03" },
  { label: "Experience", href: "#experience", number: "04" },
  { label: "Projects", href: "#projects", number: "05" },
  { label: "Services", href: "#services", number: "06" },
  { label: "Testimonials", href: "#testimonials", number: "07" },
  { label: "Contact", href: "#contact", number: "08" },
];

// ─── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/harshdodiya", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harshdodiya",
    icon: "linkedin",
  },
  { name: "Twitter", url: "https://twitter.com/harshdodiya", icon: "twitter" },
  {
    name: "Instagram",
    url: "https://instagram.com/harshdodiya",
    icon: "instagram",
  },
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS: StatCounter[] = [
  { label: "Projects Completed", value: 30, suffix: "+" },
  { label: "Cups of Coffee", value: 2847, suffix: "" },
  { label: "Lines of Code", value: 150, suffix: "K+" },
  { label: "Technologies", value: 25, suffix: "+" },
];

// ─── Skills ───────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 5, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", level: 5, color: "#ffffff" },
  { name: "TypeScript", category: "Frontend", level: 4, color: "#3178C6" },
  { name: "Tailwind CSS", category: "Frontend", level: 5, color: "#06B6D4" },
  { name: "Framer Motion", category: "Frontend", level: 4, color: "#FF0080" },
  { name: "Three.js", category: "Frontend", level: 3, color: "#049EF4" },
  { name: "GSAP", category: "Frontend", level: 4, color: "#88CE02" },

  // Backend
  { name: "Node.js", category: "Backend", level: 5, color: "#339933" },
  { name: "Express", category: "Backend", level: 4, color: "#ffffff" },
  { name: "FastAPI", category: "Backend", level: 3, color: "#009688" },
  { name: "Django", category: "Backend", level: 3, color: "#092E20" },
  { name: "GraphQL", category: "Backend", level: 3, color: "#E10098" },

  // Database
  { name: "PostgreSQL", category: "Database", level: 4, color: "#4169E1" },
  { name: "MongoDB", category: "Database", level: 4, color: "#47A248" },
  { name: "Redis", category: "Database", level: 3, color: "#DC382D" },
  { name: "Prisma", category: "Database", level: 4, color: "#2D3748" },

  // AI
  { name: "OpenAI API", category: "AI", level: 4, color: "#412991" },
  { name: "LangChain", category: "AI", level: 3, color: "#1C3C3C" },
  { name: "TensorFlow", category: "AI", level: 2, color: "#FF6F00" },
  { name: "Python ML", category: "AI", level: 3, color: "#3776AB" },

  // DevOps
  { name: "Docker", category: "DevOps", level: 4, color: "#2496ED" },
  { name: "GitHub Actions", category: "DevOps", level: 4, color: "#2088FF" },
  { name: "Nginx", category: "DevOps", level: 3, color: "#009639" },

  // Cloud
  { name: "AWS", category: "Cloud", level: 3, color: "#FF9900" },
  { name: "Vercel", category: "Cloud", level: 5, color: "#ffffff" },
  { name: "Firebase", category: "Cloud", level: 4, color: "#FFCA28" },
  { name: "Supabase", category: "Cloud", level: 4, color: "#3FCF8E" },

  // Languages
  { name: "JavaScript", category: "Languages", level: 5, color: "#F7DF1E" },
  { name: "Python", category: "Languages", level: 4, color: "#3776AB" },
  { name: "Rust", category: "Languages", level: 2, color: "#DEA584" },
  { name: "Go", category: "Languages", level: 2, color: "#00ADD8" },

  // Tools
  { name: "Git", category: "Tools", level: 5, color: "#F05032" },
  { name: "Figma", category: "Tools", level: 4, color: "#F24E1E" },
  { name: "VS Code", category: "Tools", level: 5, color: "#007ACC" },
  { name: "Postman", category: "Tools", level: 4, color: "#FF6C37" },
];

// ─── Experience ───────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Developer",
    company: "TechVision Labs",
    period: "2023 — Present",
    description:
      "Leading development of enterprise SaaS platforms. Architected microservices handling 10M+ requests/day. Built real-time collaboration features and AI-powered analytics dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    type: "work",
  },
  {
    id: "exp-2",
    role: "Frontend Engineer",
    company: "DesignFlow Studio",
    period: "2022 — 2023",
    description:
      "Crafted award-winning web experiences for Fortune 500 clients. Implemented complex animations and 3D interactions. Reduced page load times by 60%.",
    technologies: [
      "React",
      "Three.js",
      "GSAP",
      "Framer Motion",
      "Tailwind CSS",
    ],
    type: "work",
  },
  {
    id: "exp-3",
    role: "Freelance Developer",
    company: "Independent",
    period: "2021 — 2022",
    description:
      "Delivered 15+ projects for startups and agencies. Specialized in interactive landing pages, e-commerce platforms, and mobile-first web applications.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "Vercel",
    ],
    type: "freelance",
  },
  {
    id: "exp-4",
    role: "Software Engineering Intern",
    company: "InnovateTech",
    period: "2020 — 2021",
    description:
      "Built internal tools and dashboards. Contributed to the company's design system. Developed automated testing pipeline that caught 40% more bugs.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Jest"],
    type: "internship",
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "NeuralChat AI",
    subtitle: "AI-Powered Communication Platform",
    description:
      "A real-time AI communication platform with voice agents, smart routing, and natural language processing. Handles 50K+ concurrent users.",
    image: "/projects/neuralchat.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "WebSocket",
      "PostgreSQL",
      "Redis",
    ],
    github: "https://github.com/harshdodiya/neuralchat",
    liveDemo: "https://neuralchat.demo.dev",
    featured: true,
    category: "AI / Full Stack",
    caseStudy: {
      overview:
        "NeuralChat is a next-generation communication platform that leverages AI to transform how teams collaborate. Built with scalability and real-time performance at its core.",
      problem:
        "Traditional chat platforms lack intelligent features. Teams waste time on repetitive tasks, miss important messages, and struggle with information overload.",
      solution:
        "We built an AI-first platform that understands context, prioritizes messages, automates responses, and provides real-time voice agents for customer support.",
      architecture:
        "Microservices architecture with Next.js frontend, Node.js API gateway, Python ML services, PostgreSQL for persistence, Redis for caching and pub/sub.",
      features: [
        "Real-time voice AI agents",
        "Smart message prioritization",
        "Context-aware auto-replies",
        "Multi-language support",
        "End-to-end encryption",
        "Custom workflow automation",
      ],
      metrics: [
        { label: "Concurrent Users", value: "50K+" },
        { label: "Response Time", value: "<100ms" },
        { label: "Uptime", value: "99.9%" },
        { label: "Messages/Day", value: "2M+" },
      ],
      futureImprovements: [
        "Video calling integration",
        "Advanced analytics dashboard",
        "Mobile native apps",
        "Plugin marketplace",
      ],
    },
  },
  {
    id: "proj-2",
    title: "QuantumDash",
    subtitle: "Real-time Analytics Dashboard",
    description:
      "Enterprise-grade analytics dashboard with real-time data visualization, custom widgets, and AI-powered insights.",
    image: "/projects/quantumdash.jpg",
    techStack: [
      "React",
      "D3.js",
      "Node.js",
      "GraphQL",
      "TimescaleDB",
      "Docker",
    ],
    github: "https://github.com/harshdodiya/quantumdash",
    liveDemo: "https://quantumdash.demo.dev",
    featured: true,
    category: "Data Viz / Full Stack",
    caseStudy: {
      overview:
        "QuantumDash provides enterprise teams with real-time insights through beautiful, interactive data visualizations and AI-powered anomaly detection.",
      problem:
        "Existing analytics tools are either too complex or too simple. Teams need a balance of power and usability with real-time capabilities.",
      solution:
        "A modular dashboard system with drag-and-drop widgets, real-time streaming data, and machine learning for predictive analytics.",
      architecture:
        "React frontend with D3.js visualizations, GraphQL API layer, Node.js microservices, TimescaleDB for time-series data.",
      features: [
        "Real-time data streaming",
        "Custom widget builder",
        "AI anomaly detection",
        "Collaborative dashboards",
        "Export & reporting",
        "Role-based access control",
      ],
      metrics: [
        { label: "Data Points/sec", value: "100K" },
        { label: "Dashboard Load", value: "<2s" },
        { label: "Widget Types", value: "30+" },
        { label: "Active Teams", value: "500+" },
      ],
      futureImprovements: [
        "Natural language queries",
        "Automated report generation",
        "Slack/Teams integration",
        "Mobile companion app",
      ],
    },
  },
  {
    id: "proj-3",
    title: "VeloxCommerce",
    subtitle: "Next-Gen E-Commerce Platform",
    description:
      "A blazing-fast e-commerce platform with AI product recommendations, 3D product views, and seamless checkout experience.",
    image: "/projects/veloxcommerce.jpg",
    techStack: [
      "Next.js",
      "Stripe",
      "Prisma",
      "PostgreSQL",
      "Three.js",
      "Vercel",
    ],
    github: "https://github.com/harshdodiya/veloxcommerce",
    liveDemo: "https://veloxcommerce.demo.dev",
    featured: true,
    category: "E-Commerce / 3D",
    caseStudy: {
      overview:
        "VeloxCommerce redefines online shopping with 3D product visualization, AI-powered recommendations, and sub-second page loads.",
      problem:
        "E-commerce platforms are slow, generic, and fail to provide the tactile experience of in-store shopping.",
      solution:
        "We combined Three.js 3D product views with AI recommendations and edge-deployed Next.js for an unmatched shopping experience.",
      architecture:
        "Next.js with ISR, Prisma ORM with PostgreSQL, Stripe for payments, Vercel Edge Functions, Three.js for 3D views.",
      features: [
        "3D product visualization",
        "AI recommendations",
        "One-click checkout",
        "Real-time inventory",
        "Multi-currency support",
        "AR try-on (beta)",
      ],
      metrics: [
        { label: "Page Load", value: "<1s" },
        { label: "Conversion Rate", value: "+35%" },
        { label: "Products", value: "10K+" },
        { label: "Lighthouse", value: "98" },
      ],
      futureImprovements: [
        "Full AR experience",
        "Voice shopping",
        "Social commerce",
        "Live shopping streams",
      ],
    },
  },
  {
    id: "proj-4",
    title: "DevSync",
    subtitle: "Developer Collaboration Tool",
    description:
      "Real-time code collaboration platform with pair programming, code review, and integrated project management.",
    image: "/projects/devsync.jpg",
    techStack: [
      "React",
      "TypeScript",
      "WebRTC",
      "Node.js",
      "MongoDB",
      "Socket.io",
    ],
    github: "https://github.com/harshdodiya/devsync",
    featured: false,
    category: "Developer Tools",
  },
  {
    id: "proj-5",
    title: "ArtifyAI",
    subtitle: "AI Art Generation Platform",
    description:
      "An AI-powered art generation platform that transforms text prompts into stunning visual art using diffusion models.",
    image: "/projects/artifyai.jpg",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Stable Diffusion",
      "Redis",
      "AWS",
    ],
    github: "https://github.com/harshdodiya/artifyai",
    liveDemo: "https://artifyai.demo.dev",
    featured: false,
    category: "AI / Creative",
  },
];

// ─── Services ─────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "svc-1",
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks. From blazing-fast landing pages to complex enterprise platforms.",
    icon: "code",
    features: [
      "Next.js & React Applications",
      "API Development",
      "Database Architecture",
      "Performance Optimization",
    ],
  },
  {
    id: "svc-2",
    title: "UI/UX Design",
    description:
      "Premium interfaces that merge aesthetics with usability. Every pixel intentional, every interaction delightful.",
    icon: "palette",
    features: [
      "Interface Design",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    id: "svc-3",
    title: "AI Integration",
    description:
      "Intelligent features powered by the latest AI models. From chatbots to recommendation engines to voice agents.",
    icon: "brain",
    features: [
      "LLM Integration",
      "Voice AI Agents",
      "Recommendation Systems",
      "RAG Pipelines",
    ],
  },
  {
    id: "svc-4",
    title: "Creative Development",
    description:
      "Interactive experiences that push the boundaries of web technology. 3D scenes, WebGL shaders, and cinematic motion.",
    icon: "sparkles",
    features: [
      "Three.js & WebGL",
      "Motion Design",
      "Interactive Experiences",
      "Generative Art",
    ],
  },
];

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVision Labs",
    quote:
      "Harsh is one of those rare developers who combines technical excellence with genuine creative vision. He doesn't just build features — he crafts experiences.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: "test-2",
    name: "Marcus Rivera",
    role: "Head of Product",
    company: "DesignFlow Studio",
    quote:
      "Working with Harsh was transformative for our product. His attention to detail and performance obsession resulted in a 60% improvement in our Core Web Vitals.",
    avatar: "/avatars/marcus.jpg",
  },
  {
    id: "test-3",
    name: "Aisha Patel",
    role: "CTO",
    company: "InnovateTech",
    quote:
      "Harsh has an incredible ability to take complex requirements and turn them into elegant, scalable solutions. His code is clean, well-documented, and a joy to maintain.",
    avatar: "/avatars/aisha.jpg",
  },
  {
    id: "test-4",
    name: "James Wright",
    role: "Founder",
    company: "StartupForge",
    quote:
      "We hired Harsh for a 2-week project and ended up working together for 6 months. His work quality and proactive communication exceeded every expectation.",
    avatar: "/avatars/james.jpg",
  },
  {
    id: "test-5",
    name: "Elena Volkov",
    role: "Design Director",
    company: "PixelCraft Agency",
    quote:
      "The animations and interactions Harsh created for our client's website won a CSS Design Award. He truly understands the art of motion on the web.",
    avatar: "/avatars/elena.jpg",
  },
  {
    id: "test-6",
    name: "David Kim",
    role: "Engineering Manager",
    company: "CloudScale Inc",
    quote:
      "Harsh's full-stack skills are impressive, but what sets him apart is his understanding of user experience. Every feature he builds feels intuitive and polished.",
    avatar: "/avatars/david.jpg",
  },
];

// ─── Skill Categories with Colors ─────────────────────────────
export const SKILL_CATEGORIES = {
  Frontend: { color: "#60A5FA", glow: "rgba(96, 165, 250, 0.4)" },
  Backend: { color: "#34D399", glow: "rgba(52, 211, 153, 0.4)" },
  Database: { color: "#F472B6", glow: "rgba(244, 114, 182, 0.4)" },
  AI: { color: "#A78BFA", glow: "rgba(167, 139, 250, 0.4)" },
  DevOps: { color: "#FB923C", glow: "rgba(251, 146, 60, 0.4)" },
  Cloud: { color: "#38BDF8", glow: "rgba(56, 189, 248, 0.4)" },
  Languages: { color: "#FBBF24", glow: "rgba(251, 191, 36, 0.4)" },
  Tools: { color: "#E879F9", glow: "rgba(232, 121, 249, 0.4)" },
} as const;
