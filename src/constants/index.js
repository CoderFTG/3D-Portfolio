const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Frontend Developer",
    modelPath: "/models/tailwind.glb",
    scale: 50,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Signalist- Track real-time stock prices, get personalized alerts and explore detailed company insights",
    imgPath: "/images/exp1.png",
    link: "https://signalist-stock-tracker-app-lyart.vercel.app/",
    logoPath: "/images/logo1.png",
    title: "Signalist - Stock Tracker App",
    date: "December 2025 - January 2026",
    responsibilities: [
      "Architected a real-time financial intelligence platform using Next.js and TypeScript, achieving 91%+ type safety coverage to ensure a robust, production-grade codebase.",
      "Orchestrated an event-driven backend using Inngest, automating complex workflows such as scheduled market summaries and threshold-triggered email alerts via Nodemailer.",
      "Integrated the Gemini AI engine to synthesize raw financial data into actionable sentiment analysis and personalized investment insights, bridging the gap between quantitative data and qualitative advice.",
      "Deployed a responsive, high-performance UI with Shadcn and Tailwind CSS, featuring interactive candlestick charts that visualize live market trends from the Finnhub API.",
      "Implemented secure, scalable authentication patterns using Better Auth, ensuring data privacy for personalized user watchlists and configuration settings.",
    ],
  },
  {
    review:
      "A Real Software-as-a-Service app with AI features and payments & credits system that you might even turn into a side income or business idea.",
    imgPath: "/images/exp2.png",
    link: "https://imaginify-seven-phi.vercel.app/",
    logoPath: "/images/logo2.png",
    title: "Imaginify - AI Image Enhancer",
    date: "January 2026 - February 2026",
    responsibilities: [
      "Engineered a production-ready AI SaaS platform using Next.js and TypeScript, achieving 90%+ type safety for scalable and maintainable code architecture.",
      "Integrated advanced Cloudinary AI services to power 5+ complex image transformations, including generative fill, object removal, and intelligent background extraction.",
      "Implemented a secure, credit-based monetization system using Stripe for payments and webhooks, handling real-time transaction processing and user balance updates.",
      "Orchestrated robust authentication and authorization flows with Clerk, ensuring secure route protection and seamless user session management.",
      "Optimized data persistence using MongoDB, designing efficient schemas to store user transformation history, credit logs, and transaction metadata.",
    ],
  },
  {
    review:
      "LMS SaaS app featuring user authentication, subscriptions, and payments using Next.js, Supabase, and Stripe — also integrates Vapi AI voice agent for seamless, interactive learning sessions.",
    imgPath: "/images/exp3.png",
    link: "https://converso-saas-app-one.vercel.app/",
    logoPath: "/images/logo3.png",
    title: "Converso - LMS SaaS App",
    date: "January 2026 - February 2026",
    responsibilities: [
      "Architected a scalable Learning Management System (LMS) using Next.js 14 and Supabase, leveraging PostgreSQL for real-time data synchronization and robust relational storage.",
      "Integrated the Vapi AI voice engine to power interactive, low-latency conversational agents, enabling users to practice subjects with responsive AI tutors.",
      "Implemented a secure, multi-tier subscription model with Stripe and Clerk, managing complex user entitlements, billing cycles, and role-based access control (RBAC).",
      "Engineered a resilient error-tracking system using Sentry, providing real-time performance monitoring and automated alerts to maintain 99.9% system uptime.",
      "Developed a modular frontend architecture with Shadcn UI and Tailwind CSS, ensuring a consistent, accessible design system across 15+ application views.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};