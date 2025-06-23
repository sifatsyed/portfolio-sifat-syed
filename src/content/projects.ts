export const projectsContent = {
  hero: {
    title: "My Projects",
    description:
      "A collection of software engineering projects that showcase my approach to solving complex technical problems through scalable architecture, clean code, and innovative solutions.",
    stats: [
      { number: "20+", label: "Projects Built" },
      { number: "5", label: "Years Experience" },
      { number: "10M+", label: "Users Served" },
    ],
  },

  featured: {
    title: "Featured Projects",
    description:
      "Explore my most impactful work that demonstrates scalable architecture, performance optimization, and engineering excellence.",
    projects: [
      {
        id: "ecommerce-microservices",
        title: "E-Commerce Microservices Platform",
        category: "Microservices",
        year: "2024",
        description:
          "A scalable microservices architecture serving 2M+ users with 99.9% uptime. Built with Node.js, Docker, and Kubernetes, featuring auto-scaling and event-driven communication.",
        techStack: "Node.js, TypeScript, Docker, Kubernetes, PostgreSQL, Redis",
        tags: ["Node.js", "Docker", "Kubernetes", "Microservices", "AWS"],
        status: "Live",
        duration: "8 months",
        role: "Lead Developer",
      },
      {
        id: "realtime-analytics",
        title: "Real-time Analytics Dashboard",
        category: "Web Application",
        year: "2023",
        description:
          "A real-time analytics platform processing 10M+ events daily using React, WebSocket connections, and Apache Kafka. Reduced data processing latency by 75%.",
        techStack: "React, TypeScript, Node.js, Apache Kafka, PostgreSQL",
        tags: [
          "React",
          "TypeScript",
          "Apache Kafka",
          "WebSocket",
          "PostgreSQL",
        ],
        status: "Live",
        duration: "6 months",
        role: "Full Stack Developer",
      },
      {
        id: "ai-code-review",
        title: "AI-Powered Code Review Tool",
        category: "DevOps",
        year: "2023",
        description:
          "An automated code review system using machine learning algorithms and AST parsing. Integrated with GitHub Actions and reduced manual review time by 60%.",
        techStack: "Python, FastAPI, Machine Learning, GitHub Actions, Docker",
        tags: ["Python", "Machine Learning", "GitHub Actions", "AST", "CI/CD"],
        status: "Live",
        duration: "4 months",
        role: "Backend Developer",
      },
    ],
  },

  allProjects: [
    {
      id: "ecommerce-microservices",
      title: "E-Commerce Microservices Platform",
      category: "Microservices",
      year: "2024",
      description:
        "A scalable microservices architecture serving 2M+ users with 99.9% uptime. Built with Node.js, Docker, and Kubernetes, featuring auto-scaling and event-driven communication.",
      techStack: "Node.js, TypeScript, Docker, Kubernetes, PostgreSQL, Redis",
      tags: ["Node.js", "Docker", "Kubernetes", "Microservices", "AWS"],
      status: "Live",
      duration: "8 months",
      role: "Lead Developer",
    },
    {
      id: "realtime-analytics",
      title: "Real-time Analytics Dashboard",
      category: "Web Application",
      year: "2023",
      description:
        "A real-time analytics platform processing 10M+ events daily using React, WebSocket connections, and Apache Kafka. Reduced data processing latency by 75%.",
      techStack: "React, TypeScript, Node.js, Apache Kafka, PostgreSQL",
      tags: ["React", "TypeScript", "Apache Kafka", "WebSocket", "PostgreSQL"],
      status: "Live",
      duration: "6 months",
      role: "Full Stack Developer",
    },
    {
      id: "ai-code-review",
      title: "AI-Powered Code Review Tool",
      category: "DevOps",
      year: "2023",
      description:
        "An automated code review system using machine learning algorithms and AST parsing. Integrated with GitHub Actions and reduced manual review time by 60%.",
      techStack: "Python, FastAPI, Machine Learning, GitHub Actions, Docker",
      tags: ["Python", "Machine Learning", "GitHub Actions", "AST", "CI/CD"],
      status: "Live",
      duration: "4 months",
      role: "Backend Developer",
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure Automation",
      category: "DevOps",
      year: "2022",
      description:
        "Designed and implemented Infrastructure as Code using Terraform and AWS. Automated CI/CD pipelines reducing deployment time from hours to minutes.",
      techStack: "AWS, Terraform, Jenkins, Docker, Kubernetes",
      tags: ["AWS", "Terraform", "CI/CD", "DevOps", "Infrastructure"],
      status: "Live",
      duration: "5 months",
      role: "DevOps Engineer",
    },
    {
      id: "blockchain-wallet",
      title: "Cryptocurrency Wallet API",
      category: "Blockchain",
      year: "2022",
      description:
        "A secure blockchain wallet API supporting multiple cryptocurrencies. Implemented advanced security measures and achieved SOC 2 compliance.",
      techStack: "Node.js, Web3.js, Solidity, PostgreSQL, Redis",
      tags: ["Blockchain", "Security", "API", "Cryptography", "Node.js"],
      status: "Live",
      duration: "7 months",
      role: "Blockchain Developer",
    },
    {
      id: "social-media-api",
      title: "Social Media Platform API",
      category: "API",
      year: "2021",
      description:
        "A high-performance REST API serving 500K+ daily active users. Implemented efficient caching strategies and real-time notifications.",
      techStack: "Node.js, Express.js, MongoDB, Redis, Socket.io",
      tags: ["Node.js", "Express", "MongoDB", "Redis", "WebSocket"],
      status: "Live",
      duration: "9 months",
      role: "Backend Developer",
    },
  ],

  cta: {
    title: "Let's Build Something Amazing",
    description:
      "Have a technical challenge or software project in mind? I'd love to help bring your ideas to life with robust architecture and clean, scalable code.",
    buttons: [
      { text: "Start a Project", type: "primary" },
      { text: "Learn More About Me", type: "secondary", href: "/about" },
    ],
  },
};
