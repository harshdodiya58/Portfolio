export const portfolioData = {
  name: "Harsh Dodiya",
  role: "Web Developer (MERN Stack)",
  tagline: "Building scalable web applications with modern technologies",
  email: "dodiyaharsh692@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-dodiya-5b7864270/",
  github: "https://github.com/harshdodiya58/",
  resumeUrl: "/resume.pdf", // Resume file in public folder
  
  nav: [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "About", href: "#about" },
    { id: 3, label: "Skills", href: "#skills" },
    { id: 4, label: "Projects", href: "#projects" },
    { id: 5, label: "Education", href: "#education" },
    { id: 6, label: "Contact", href: "#contact" },
  ],
  
  summary: `I am a passionate B.Tech Computer Science Engineering student with a strong focus on Full Stack Development, particularly the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. My journey in software development has been driven by a genuine interest in building scalable, efficient, and user-centric web applications.

Currently in my 6th semester, I have dedicated significant time to mastering both frontend and backend technologies. I specialize in creating responsive user interfaces with React.js and Tailwind CSS, while building robust server-side solutions using Node.js and Express.js. My experience with MongoDB has enabled me to design and implement efficient database schemas for various projects.

What sets me apart is my commitment to continuous learning and my problem-solving approach. I thrive on turning complex requirements into clean, maintainable code. Whether it's implementing RESTful APIs, managing state in React applications, or optimizing database queries, I approach each challenge with enthusiasm and attention to detail.

My career goal is to secure a Full Stack Developer role where I can contribute to meaningful projects while continuing to grow as a developer. I am actively seeking internship opportunities and entry-level positions that will allow me to apply my skills in a professional setting and learn from experienced engineers.`,

  skills: {
    frontend: [
      { name: "React.js", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
    ],
    backend: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" },
    ],
    database: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
    ],
    tools: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "AgriSync-AI",
      description: "An intelligent agricultural management platform powered by AI. AgriSync integrates crop monitoring, soil analysis, weather prediction, and resource optimization to help farmers make data-driven decisions for better yields and sustainable farming practices.",
      problem: "Farmers struggle with outdated methods of crop management and lack real-time insights into soil conditions, weather patterns, and optimal resource allocation, leading to reduced productivity and wastage.",
      solution: "Built a comprehensive agricultural platform with AI-driven recommendations for crop management. Features include real-time soil monitoring, predictive weather analytics, irrigation optimization, and pest detection using machine learning algorithms.",
      techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "Machine Learning", "REST API"],
      githubUrl: "https://github.com/harshdodiya58/AgriSync-AI",
      liveUrl: "#",
      image: "project1",
    },
    {
      id: 2,
      title: "Pizzzy - Pizza Ordering Platform",
      description: "A modern e-commerce platform for pizza orders with real-time order tracking, customization options, and integrated payment processing. Users can browse menus, customize pizzas, track deliveries live, and manage their order history.",
      problem: "Traditional pizza ordering systems lacked real-time tracking, had limited customization options, and poor user experience, leading to customer dissatisfaction and cart abandonment.",
      solution: "Developed a full-stack pizza ordering application with responsive UI, real-time order status updates, extensive pizza customization, secure payment integration, and an analytics dashboard for restaurant management.",
      techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "WebSocket", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/harshdodiya58/pizzzy",
      liveUrl: "#",
      image: "project2",
    },
    {
      id: 3,
      title: "Car Booking & Rental System",
      description: "A comprehensive vehicle booking and rental management platform. Users can browse available vehicles, check pricing, make reservations, and manage bookings. Includes admin dashboard for vehicle management and rental analytics.",
      problem: "Car rental businesses needed a centralized digital platform to manage inventory, bookings, pricing, and customer information efficiently while providing a seamless user experience.",
      solution: "Created a full-featured car rental system with vehicle inventory management, dynamic pricing, booking calendar, automated email notifications, secure payment processing, and detailed rental reports.",
      techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Stripe"],
      githubUrl: "https://github.com/harshdodiya58/car-booking",
      liveUrl: "#",
      image: "project3",
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "A comprehensive financial management application for tracking expenses, income, investments, and budgets. Features include expense categorization, visual analytics, budget alerts, and monthly financial reports.",
      problem: "Users struggle to track their spending patterns, manage budgets, and gain insights into their financial health due to lack of accessible and intuitive financial tracking tools.",
      solution: "Built a personal finance dashboard with expense tracking, income management, budget creation, visual spending analytics using charts, recurring transaction automation, and financial goal tracking.",
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      githubUrl: "https://github.com/harshdodiya58/finance-tracker",
      liveUrl: "#",
      image: "project4",
    },
    {
      id: 5,
      title: "Textile Business Management System",
      description: "An enterprise resource planning system for textile businesses. Manages inventory, orders, production schedules, customer relationships, and financial transactions with comprehensive reporting capabilities.",
      problem: "Textile businesses struggled with manual inventory tracking, order management, and lack of real-time visibility into production and sales data, leading to inefficiencies and errors.",
      solution: "Developed a complete business management suite with inventory control, order processing, production scheduling, customer management, reporting analytics, and financial tracking for textile operations.",
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MySQL", "Admin Dashboard", "Reports"],
      githubUrl: "https://github.com/harshdodiya58/Textile-Business-Management-System",
      liveUrl: "#",
      image: "project5",
    },
    {
      id: 6,
      title: "Dayflow - Task Management App",
      description: "A productive task and workflow management application for organizing daily activities, setting priorities, and tracking progress. Includes team collaboration features, notifications, and progress visualization.",
      problem: "Individuals and teams struggle with task organization, deadline management, and collaboration without a unified, intuitive platform that syncs across devices.",
      solution: "Created a feature-rich task management system with task creation and categorization, priority setting, deadline tracking, progress visualization, team collaboration, reminders, and export capabilities.",
      techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Real-time Updates", "Responsive Design"],
      githubUrl: "https://github.com/harshdodiya58/Dayflow",
      liveUrl: "#",
      image: "project6",
    },
  ],

  education: {
    degree: "B.Tech in Computer Science Engineering",
    university: "CHARUSAT University",
    currentSemester: "6th Semester",
    status: "Pursuing",
  },
};
