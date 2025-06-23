export const blogContent = {
  hero: {
    title: "Code & Life",
    description:
      "A collection of technical insights, lessons learned from building software, personal stories, and behind-the-scenes glimpses into my development process. Welcome to my little corner of the engineering world.",
    stats: [
      { number: "32", label: "Articles Written" },
      { number: "18K", label: "Developers Reading" },
      { number: "8", label: "Categories" },
    ],
  },

  filters: [
    { key: "all", label: "All Posts" },
    { key: "lessons", label: "Lessons Learned" },
    { key: "hobbies", label: "Life & Hobbies" },
    { key: "insights", label: "Tech Insights" },
    { key: "behind-scenes", label: "Behind the Scenes" },
  ],

  posts: [
    {
      id: 1,
      category: "lessons",
      title: "What I Learned from My First Microservices Failure",
      excerpt:
        "Building my first microservices architecture taught me more through failure than success. Here are the hard lessons that made me a better engineer.",
      date: "Dec 15, 2024",
      readTime: "7 min read",
      tags: ["Microservices", "Architecture", "Lessons Learned"],
      featured: true,
    },
    {
      id: 2,
      category: "hobbies",
      title: "Coffee, Code, and Creative Problem Solving",
      excerpt:
        "How my morning routine of brewing the perfect cup and tackling coding challenges sets the tone for my most productive development days.",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      tags: ["Productivity", "Personal", "Routine"],
      featured: false,
    },
    {
      id: 3,
      category: "insights",
      title: "The Art of Writing Clean, Maintainable Code",
      excerpt:
        "Exploring principles and practices that make code not just functional, but elegant, readable, and maintainable for years to come.",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      tags: ["Clean Code", "Best Practices", "Software Architecture"],
      featured: true,
    },
    {
      id: 4,
      category: "behind-scenes",
      title: "A Day in My Development Workflow",
      excerpt:
        "Take a peek behind the curtain of how I approach a typical day, from planning to deployment and everything in between.",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      tags: ["Workflow", "Day in Life", "Development"],
      featured: false,
    },
    {
      id: 5,
      category: "lessons",
      title: "Why I Stopped Chasing the Latest JavaScript Framework",
      excerpt:
        "The liberating realization that mastering fundamentals matters more than following every new framework that comes along.",
      date: "Nov 22, 2024",
      readTime: "6 min read",
      tags: ["JavaScript", "Frameworks", "Learning"],
      featured: false,
    },
    {
      id: 6,
      category: "hobbies",
      title: "Marathon Training Taught Me About Software Development",
      excerpt:
        "Unexpected parallels between long-distance running and software engineering that changed my approach to building systems.",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      tags: ["Personal Growth", "Endurance", "Development"],
      featured: false,
    },
    {
      id: 7,
      category: "insights",
      title: "Security is Not an Afterthought",
      excerpt:
        "Why building security from day one creates better software for everyone, not just users who are security-conscious.",
      date: "Nov 8, 2024",
      readTime: "9 min read",
      tags: ["Security", "Best Practices", "DevSecOps"],
      featured: true,
    },
    {
      id: 8,
      category: "behind-scenes",
      title: "My Home Office Setup for Deep Development Work",
      excerpt:
        "How I designed my workspace to minimize distractions and maximize focus for complex problem-solving and coding sessions.",
      date: "Oct 30, 2024",
      readTime: "4 min read",
      tags: ["Productivity", "Workspace", "Focus"],
      featured: false,
    },
  ],

  aboutBlog: {
    title: "About This Blog",
    description: [
      "This is my space to share the unfiltered truth about software engineering—the victories, failures, random insights, and everything in between. You'll find technical deep dives mixed with personal stories, learning adventures, and honest reflections on what I've discovered building software.",
      "I believe the best code comes from a full life, so I write about running marathons, perfecting coffee brewing techniques, debugging production issues at 3 AM, and how these experiences shape my approach to engineering challenges.",
    ],
    stats: {
      title: "Blog Stats",
      items: [
        { label: "First Post", value: "Jan 2023" },
        { label: "Posting Schedule", value: "Weekly" },
        { label: "Average Length", value: "6 min read" },
      ],
    },
    subscribe: {
      title: "Stay Updated",
      description:
        "Get notified when I publish new articles and technical insights.",
      buttonText: "Subscribe",
    },
  },
};
