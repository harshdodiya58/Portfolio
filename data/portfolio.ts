export const portfolioData = {
  personalInfo: {
    fullName: "Harsh Dodiya",
    title: "Full Stack Developer",
    location: "Anand, Gujarat",
    email: "dodiyaharsh692@gmail.com",
    resumeLink: "https://harshdodiya.vercel.app/resume.pdf",
    about: "Motivated Full Stack Developer with hands-on experience in the MERN stack, building scalable web applications. Skilled in developing end-to-end solutions, including responsive frontend interfaces, backend APIs, and database management, with a strong focus on solving real-world problems.",
  },
  socials: {
    github: "https://github.com/harshdodiya58",
    linkedin: "https://linkedin.com/in/harsh-dodiya",
    instagram: "https://instagram.com/harshdodiya58",
    twitter: "https://twitter.com/harshdodiya58",
  },
  skills: {
    frontend: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Framer Motion", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "RESTful APIs", level: 75 },
    ],
    database: [
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "MySQL", level: 65 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 85 },
    ],
  },
  projects: [
    {
      name: "Dayflow - HR Management System",
      description: "Developed a full-stack HR Management System with secure JWT authentication and role-based access control for Admin and HR users. Implemented employee management, attendance tracking, leave management, payroll processing, notifications, and internal messaging modules.",
      problem: "Managing employee attendance, leave, payroll, and internal communications is complex and often fragmented across multiple systems.",
      solution: "Built scalable backend APIs using Next.js API Routes with PostgreSQL and Prisma ORM, delivering a responsive UI using Next.js, React, Tailwind CSS, and Framer Motion.",
      techStack: ["Next.js", "React", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/harshdodiya58/Dayflow",
      live: null,
      stars: 6,
      forks: 2,
    },
    {
      name: "Personal Finance Tracker",
      description: "Built a full-stack personal finance application featuring a real-time dashboard, category-wise budget tracking, transaction CRUD, and an investment portfolio with automatic profit/loss calculation.",
      problem: "Users struggle to track their spending patterns, manage budgets, and gain insights into their financial health across multiple asset domains.",
      solution: "Engineered a secure backend with JWT authentication, bcrypt password hashing, and role-protected REST API routes. Implemented interactive Recharts visualizations (income vs. expense trends, category breakdowns) and smooth Framer Motion animations.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Recharts", "Framer Motion"],
      github: "https://github.com/harshdodiya58/finance-tracker",
      live: null,
      stars: 4,
      forks: 1,
    },
  ],
  experience: [
    {
      company: "Feeltech Solution",
      role: "Full Stack Developer Intern",
      location: "Hybrid-Ahmedabad, Gujarat",
      duration: "May 2025 – June 2025",
      details: [
        "Developed full-stack web modules integrating React.js, PHP, and MongoDB, delivering responsive user interfaces and scalable backend functionality.",
        "Designed and optimized RESTful APIs while improving database query performance, resulting in faster application response times.",
        "Collaborated with the development team to implement new features, resolve bugs, and maintain clean, well-documented code following industry best practices."
      ],
    },
    {
      company: "Charotar Gas Sahakari Mandali Ltd.",
      role: "Web Designing Intern",
      location: "Anand, Gujarat",
      duration: "May 2021",
      details: [
        "Built responsive and user-friendly static web pages using HTML and CSS.",
        "Assisted in improving website layouts, styling consistency, and cross-browser compatibility to enhance the overall user experience."
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Charotar University of Science and Technology (CHARUSAT)",
      location: "Changa, Gujarat",
      duration: "2024 - 2027",
      details: "Bachelor of Technology in Computer Science and Engineering - 8.06 CGPA",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Bhailalbhai & Bhikhabhai Institute of Technology (BBIT)",
      location: "Anand, Gujarat",
      duration: "2021 - 2024",
      details: "Diploma in Computer Engineering - 8.74 CGPA",
    },
  ],
  achievements: [
    {
      title: "IBM DevOps, Cloud, and Agile Foundations",
      issuer: "IBM Coursera",
      description: "Professional certification covering DevOps lifecycle, cloud computing essentials, and Agile methodologies.",
    },
    {
      title: "MERN Stack Specialization",
      issuer: "IBM Packt",
      description: "Comprehensive training on building full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    },
    {
      title: "Data Structures & Algorithms using Java",
      issuer: "IIT Kharagpur - NPTEL",
      description: "Advanced course covering foundational and complex data structures, search/sort algorithms, and Java implementations.",
    },
    {
      title: "Design & Analysis of Algorithms",
      issuer: "IIT Madras - NPTEL",
      description: "Advanced study of algorithmic design techniques, time/space complexity analysis, and mathematical proofs.",
    },
  ]
};
