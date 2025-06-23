export const contactContent = {
  hero: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always excited to collaborate on innovative software projects and help turn great ideas into reality. Whether you need a full-stack application, API development, cloud architecture, or technical consultation, I'd love to hear about your project.",
    stats: [
      { icon: "⚡", text: "24h Response Time" },
      { icon: "🌍", text: "Remote Friendly" },
      { icon: "📅", text: "Available for New Projects" },
    ],
  },

  form: {
    title: "Start a Conversation",
    fields: {
      name: { label: "Name", placeholder: "Your full name", required: true },
      email: {
        label: "Email",
        placeholder: "your.email@company.com",
        required: true,
      },
      company: {
        label: "Company",
        placeholder: "Your company name",
        required: false,
      },
      projectType: {
        label: "Project Type",
        options: [
          { value: "", label: "Select project type" },
          { value: "web-app", label: "Web Application" },
          { value: "mobile-app", label: "Mobile App" },
          { value: "api-development", label: "API Development" },
          { value: "cloud-architecture", label: "Cloud Architecture" },
          { value: "microservices", label: "Microservices" },
          { value: "consultation", label: "Technical Consultation" },
          { value: "other", label: "Other" },
        ],
      },
      budget: {
        label: "Budget Range",
        options: [
          { value: "", label: "Select budget range" },
          { value: "under-10k", label: "Under $10k" },
          { value: "10k-25k", label: "$10k - $25k" },
          { value: "25k-50k", label: "$25k - $50k" },
          { value: "50k-100k", label: "$50k - $100k" },
          { value: "over-100k", label: "$100k+" },
        ],
      },
      timeline: {
        label: "Timeline",
        options: [
          { value: "", label: "Select timeline" },
          { value: "asap", label: "ASAP" },
          { value: "1-month", label: "Within 1 month" },
          { value: "2-3-months", label: "2-3 months" },
          { value: "6-months", label: "6+ months" },
          { value: "flexible", label: "Flexible" },
        ],
      },
      message: {
        label: "Project Details",
        placeholder:
          "Tell me about your project, technical requirements, and any specific challenges you're facing...",
        required: true,
        rows: 6,
      },
    },
    submitText: "Send Message",
  },

  contactMethods: {
    title: "Get in Touch",
    methods: [
      {
        icon: "email",
        title: "Email",
        value: "sifat.syed@email.com",
        note: "Best for project inquiries",
      },
      {
        icon: "linkedin",
        title: "LinkedIn",
        value: "@sifatsyed",
        note: "Professional networking",
      },
      {
        icon: "github",
        title: "GitHub",
        value: "@sifatsyed",
        note: "Code samples & open source",
      },
    ],
  },

  availability: {
    title: "Current Availability",
    status: "Available for new projects",
    note: "I typically take on 1-2 major projects at a time to ensure quality and focus. Next availability starts in March 2024.",
  },

  expectations: {
    title: "What to Expect",
    steps: [
      {
        number: "01",
        title: "Quick Response",
        description: "I'll get back to you within 24 hours",
      },
      {
        number: "02",
        title: "Technical Discussion",
        description: "30-minute call to discuss technical requirements",
      },
      {
        number: "03",
        title: "Custom Proposal",
        description: "Detailed proposal with architecture & timeline",
      },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What's your development process like?",
        answer:
          "I follow agile development practices: requirements analysis, architecture design, iterative development, testing, and deployment. Every project starts with understanding your technical needs and business goals.",
      },
      {
        question: "How long do projects typically take?",
        answer:
          "It varies by scope: APIs (2-6 weeks), web applications (2-4 months), complex systems (4-8 months), microservices migration (3-6 months). I'll provide a detailed timeline in the proposal.",
      },
      {
        question: "Do you work with existing development teams?",
        answer:
          "Absolutely! I collaborate closely with existing teams, provide code reviews, architecture guidance, and can integrate seamlessly with your current development workflows and CI/CD processes.",
      },
      {
        question: "What technologies do you specialize in?",
        answer:
          "I specialize in Node.js, React, TypeScript, Python, AWS, Docker, Kubernetes, PostgreSQL, and MongoDB. I'm also experienced with microservices architecture and cloud-native development.",
      },
    ],
  },
};
