
export const footerData = [
  {
    title: "Company",
    links: [
      { heading: "", title: "Home", src: "#" },
      { heading: "", title: "Services", src: "#services", target: "" },
      { heading: "", title: "Industries", src: "#industries", target: "" },
      { heading: "", title: "Portfolio", src: "#work", target: "" },
      { heading: "", title: "Contact", src: "#contact", target: "" },
    ],
  },
  {
    title: "Reach us out",
    links: [
      {
        heading: "For Projects",
        title: "solutions@induke.com",
        // src: "/",
        // target: "",
      },
      { heading: "For Jobs", title: "apply@induke.com" },
    ],
  },
  {
    title: "Follow us on Social Media",
    links: [
      {
        heading: "",
        title: "Linkedin",
        src: "https://www.linkedin.com",
        target: "blank",
      },
      {
        heading: "",
        title: "Facebook",
        src: "https://www.facebook.com",
        target: "blank",
      },
      {
        heading: "",
        title: "Instagram",
        src: "https://www.instagram.com",
        target: "blank",
      },
      {
        heading: "",
        title: "X",
        src: "https://x.com",
        target: "blank",
      },
    ],
  },
];

export const teamData = [
  {
    name: "Aqib Mehtab",
    role: "Co-Founder",
    bio: "Sets the vision and steers the ship, turning ambitious ideas into shipped products.",
    photo: "/aqib.jpg",
    accent: "#F37036",
    social: {
      linkedin: "https://www.linkedin.com/in/aqibmehtab/",
      github: "#",
      x: "#",
    },
  },
  {
    name: "Samar Ali",
    role: "Co-Founder",
    bio: "Blends strategy and design to make sure every product feels as good as it works.",
    photo: "/samar.jpeg",
    accent: "#007DC5",
    social: {
      linkedin: "https://www.linkedin.com/in/imsamarali/",
      github: "#",
      x: "#",
    },
  },
  {
    name: "Muhammad Sohaib Khan",
    role: "Co-Founder",
    bio: "Turns complex problems into clean, scalable code that just works in production.",
    photo: "/sohaib.jpeg",
    accent: "#8B5CF6",
    social: {
      linkedin: "https://www.linkedin.com/in/sohaibkhan100/",
      github: "#",
      x: "#",
    },
  },
];

export const industriesData = [
  {
    name: "E-commerce",
    description: "Storefronts, checkout flows, and marketplaces built to convert.",
    accent: "#F37036",
  },
  {
    name: "FinTech",
    description: "Secure, compliant platforms for payments, lending, and banking.",
    accent: "#007DC5",
  },
  {
    name: "Logistics",
    description: "Real-time tracking and fleet systems that keep supply chains moving.",
    accent: "#8B5CF6",
  },
  {
    name: "Healthcare",
    description: "Patient-first portals and tools built with compliance in mind.",
    accent: "#10B981",
  },
  {
    name: "Real Estate",
    description: "Listing platforms and CRMs that turn browsers into buyers.",
    accent: "#F59E0B",
  },
  {
    name: "EdTech",
    description: "Learning platforms that keep students engaged and progressing.",
    accent: "#EC4899",
  },
];

export const audienceData = [
  {
    name: "Startups",
    description: "Ship a first version fast without cutting corners you'll regret later.",
    accent: "#F37036",
  },
  {
    name: "SaaS Companies",
    description: "Add features and scale infrastructure without slowing your roadmap.",
    accent: "#007DC5",
  },
  {
    name: "Enterprises",
    description: "Modernize legacy systems with a team that respects your compliance needs.",
    accent: "#8B5CF6",
  },
  {
    name: "Agencies",
    description: "A dependable dev partner for overflow work and white-label delivery.",
    accent: "#10B981",
  },
  {
    name: "Solo Founders",
    description: "Turn a napkin sketch into a working product you can put in front of users.",
    accent: "#F59E0B",
  },
  {
    name: "Small Businesses",
    description: "Practical, right-sized software that doesn't overbuild for where you are.",
    accent: "#EC4899",
  },
];

export const servicesData = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web apps — database to UI — built fast and built to scale.",
    features: ["Next.js & React", "API & database design", "Performance tuning"],
    accent: "#F37036",
  },
  {
    title: "Full-Stack App Development",
    description: "Cross-platform mobile apps with a native feel, shipped from one codebase.",
    features: ["iOS & Android", "Backend integration", "App store launch"],
    accent: "#007DC5",
  },
  {
    title: "AI SaaS Product Development",
    description: "AI-native SaaS products designed, built, and shipped from scratch.",
    features: ["LLM-powered features", "Subscription billing", "Scalable infrastructure"],
    accent: "#8B5CF6",
  },
  {
    title: "AI Agents Development",
    description: "Autonomous agents that handle real workflows, not just chat.",
    features: ["Tool-calling agents", "RAG pipelines", "Workflow automation"],
    accent: "#10B981",
  },
  {
    title: "Motion Graphics",
    description: "Animated visuals that make your brand and product feel alive.",
    features: ["Brand animations", "Explainer videos", "UI motion design"],
    accent: "#F59E0B",
  },
  {
    title: "2D & 3D Animations",
    description: "Character and product animation for marketing, apps, and games.",
    features: ["2D character animation", "3D modeling & rendering", "Render-ready assets"],
    accent: "#EC4899",
  },
];

export const portfolioCategories = [
  "Marketplace",
  "Travel",
  "Streaming",
  "Education",
  "Health & Fitness",
  "Healthcare",
  "AI",
];

export const portfolioData = [
  {
    title: "Hotelnut",
    category: "Marketplace",
    tags: ["Marketplace", "Booking", "Responsive"],
    description:
      "A full-stack accommodation booking platform similar to Airbnb, with property listings, booking workflows, and a scalable architecture.",
    tech: ["Next.js", "React", "Node.js"],
    image: "/portfolio/hotelnut.jpg",
    accent: "#F37036",
    url: "https://hotelnut.vercel.app",
  },
  {
    title: "Muqamat",
    category: "Travel",
    tags: ["Travel", "Booking", "UI/UX"],
    description:
      "A modern flight booking platform with a responsive UI, seamless booking experience, and scalable frontend architecture.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/portfolio/muqamat.jpg",
    accent: "#007DC5",
  },
  {
    title: "Ability Stream",
    category: "Streaming",
    tags: ["Streaming", "Media", "Auth"],
    description:
      "A full-stack streaming platform with a modern UI, secure backend architecture, and scalable performance for media delivery.",
    tech: ["Next.js", "Node.js", "Tailwind CSS"],
    image: "/portfolio/ability-stream.jpg",
    accent: "#8B5CF6",
    url: "https://ability-stream-theta.vercel.app",
  },
  {
    title: "Islamia TV",
    category: "Streaming",
    tags: ["Streaming", "Education", "Firebase"],
    description:
      "A video streaming app delivering educational content, with personalized learning progress synced across devices and push notifications.",
    tech: ["Flutter", "Firebase", "REST API"],
    image: "/portfolio/islamia-tv.jpg",
    accent: "#10B981",
  },
  {
    title: "AH7 Fit",
    category: "Health & Fitness",
    tags: ["Fitness", "Wellness", "Mobile"],
    description:
      "A health and fitness app featuring workout plans, healthy recipes, fitness articles, and wellness tracking with a smooth, responsive UI.",
    tech: ["Flutter", "REST API", "Local Storage"],
    image: "/portfolio/ah7-fit.jpg",
    accent: "#F59E0B",
  },
  {
    title: "Doctor Simple",
    category: "Healthcare",
    tags: ["Healthcare", "Appointments", "Mobile"],
    description:
      "A healthcare app that lets users book appointments, request prescriptions, and manage healthcare services with secure API integration.",
    tech: ["Flutter", "REST API", "Push Notifications"],
    image: "/portfolio/doctor-simple.jpg",
    accent: "#EC4899",
  },
  {
    title: "Euphoni",
    category: "AI",
    tags: ["AI", "Meditation", "Wellness"],
    description:
      "An AI-powered meditation app offering personalized sessions, voice recording, audio playback, and customizable session lengths.",
    tech: ["Flutter", "AI Integration", "REST API"],
    image: "/portfolio/euphoni.jpg",
    accent: "#8B5CF6",
  },
  {
    title: "Thomas Keith Independent School",
    category: "Education",
    tags: ["Education", "School Management", "Analytics"],
    description:
      "A school management app enabling parents to track attendance, grades, assignments, timetables, and student progress with real-time notifications.",
    tech: ["Flutter", "Intercom", "Push Notifications"],
    image: "/portfolio/thomas-keith-school.jpg",
    accent: "#007DC5",
  },
  {
    title: "Lady Evelyn Independent School",
    category: "Education",
    tags: ["Education", "School Management", "Dashboard"],
    description:
      "A school management app giving parents real-time access to attendance reports, grades, assignments, timetables, and student performance.",
    tech: ["Flutter", "Intercom", "Push Notifications"],
    image: "/portfolio/lady-evelyn-school.jpg",
    accent: "#F37036",
  },
];

export const processData = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn your business, users, and constraints before proposing anything.",
    accent: "#F37036",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Scope, timeline, and technical approach get locked in together.",
    accent: "#007DC5",
  },
  {
    step: "03",
    title: "Design",
    description: "Wireframes and UI that get validated with you before build starts.",
    accent: "#8B5CF6",
  },
  {
    step: "04",
    title: "Development",
    description: "Iterative builds with regular check-ins, not a black box for months.",
    accent: "#10B981",
  },
  {
    step: "05",
    title: "Testing",
    description: "QA, performance, and edge cases covered before anything ships.",
    accent: "#F59E0B",
  },
  {
    step: "06",
    title: "Launch",
    description: "Deployed, monitored, and handed off with docs and support.",
    accent: "#EC4899",
  },
];

export const techStackData = [
  { name: "React", short: "Re", accent: "#007DC5" },
  { name: "Next.js", short: "N", accent: "#111111" },
  { name: "TypeScript", short: "TS", accent: "#3178C6" },
  { name: "Tailwind CSS", short: "TW", accent: "#06B6D4" },
  { name: "Node.js", short: "JS", accent: "#10B981" },
  { name: "PostgreSQL", short: "PG", accent: "#336791" },
  { name: "Figma", short: "Fi", accent: "#F37036" },
  { name: "AWS", short: "AWS", accent: "#F59E0B" },
];

export const whyChooseUsData = [
  {
    title: "Fast Delivery",
    description: "Working software in weeks, with momentum kept up through launch.",
    accent: "#F37036",
  },
  {
    title: "Clean Code",
    description: "Readable, tested, documented code your future team can build on.",
    accent: "#007DC5",
  },
  {
    title: "SEO Optimized",
    description: "Built to rank from day one, not retrofitted after the fact.",
    accent: "#8B5CF6",
  },
  {
    title: "Fully Responsive",
    description: "Pixel-considered on every screen, from mobile to ultrawide.",
    accent: "#10B981",
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed to handle your next round of growth, not just today.",
    accent: "#F59E0B",
  },
  {
    title: "Ongoing Support",
    description: "We stick around after launch — fixes, updates, and roadmap help.",
    accent: "#EC4899",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Whitfield",
    role: "Founder & CEO",
    company: "Hotelnut",
    review:
      "They took Hotelnut from a rough idea to a fully working booking platform in weeks. The architecture is clean and it hasn't needed a single emergency fix since launch.",
    rating: 5,
    accent: "#F37036",
  },
  {
    name: "Daniel Reyes",
    role: "Founder & CEO",
    company: "Ability Stream",
    review:
      "Ability Stream needed to handle real users from day one, and it did. Secure, fast, and the backend has held up under real traffic without issues.",
    rating: 5,
    accent: "#8B5CF6",
  },
  {
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "Muqamat",
    review:
      "Muqamat's booking flow feels effortless now. They rebuilt the entire frontend and somehow made a complicated flight search feel simple.",
    rating: 5,
    accent: "#007DC5",
  },
];

export const statsData = [
  { label: "Projects Delivered", value: 60, suffix: "+", accent: "#F37036" },
  { label: "Happy Clients", value: 45, suffix: "+", accent: "#007DC5" },
  { label: "Years Experience", value: 6, suffix: "+", accent: "#8B5CF6" },
  { label: "Client Satisfaction", value: 98, suffix: "%", accent: "#10B981" },
];

export const faqData = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs take 6-10 weeks depending on scope. Larger platform builds run longer — we'll give you a realistic timeline after the discovery call, not before.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Fixed-price for well-scoped projects, or monthly retainers for ongoing work and support. You'll always see the number before we start.",
  },
  {
    question: "How many rounds of revisions are included?",
    answer:
      "Design and development milestones each include structured feedback rounds. We're flexible on the number as long as we're converging, not restarting.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes — ongoing support and retainer plans are available so your product keeps running smoothly and gets improved after handoff.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "Regular async updates plus weekly calls, in whichever tool you already use — Slack, email, or your project tracker.",
  },
];
