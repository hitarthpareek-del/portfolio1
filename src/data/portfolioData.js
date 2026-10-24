import quoterxDashboard from '../../data/quoterx-dashboard.png'
import quoterxLogin from '../../data/quoterx-login.png'
import aiNutritionApp from '../../data/ai-nutrition-app.png'
import esignLogin from '../../data/esign-login.png'
import chatDemo from '../../data/chat-demo.png'
import chatLogin from '../../data/chat-login.png'

export const developerInfo = {
  name: 'Hitarth Pareek',
  displayName: 'HITARTH PAREEK',
  footerSignature: 'Hitarth Pareek.',
  role: 'FULL-STACK WEB DEVELOPER & SYSTEMS ARCHITECT',
  tagline: 'Turning Ambitious Businesses Into Market Leaders With High-Converting Websites & Custom Web Platforms.',
  location: 'JAIPUR, INDIA · WORLDWIDE',
  email: 'hitarthpareek10@gmail.com',
  phone: '+91-9001662817',
  whatsappNumber: '919001662817',
  availability: 'Available for New Client Projects',
  heroPitch:
    'While your competitors capture leads online 24/7, businesses without a modern website lose high-paying customers every single day. I engineer ultra-fast websites, custom SaaS dashboards, and automated portals that build instant authority and multiply your revenue.',
  aboutParagraphs: [
    'I’m Hitarth Pareek, a Full-Stack Web Developer and Systems Architect specializing in scalable React.js, Node.js, TypeScript, MongoDB, and Firebase platforms designed to grow revenue and eliminate manual bottlenecks.',
    'Having engineered production web systems for Medicca and Vefes Engineering, I help business owners, healthcare leaders, and fast-growing companies replace slow spreadsheets and outdated pages with high-trust digital products — from automated quotation CRMs and paperless eSign portals to AI analytics dashboards.',
    'Every system I build combines Awwwards-grade visual polish with enterprise backend reliability: JWT security, real-time Socket.io communication, cloud media pipelines, and conversion-focused UX proven to cut manual workload by 60% and boost client inquiries by up to 35%.'
  ],
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hitarth-pareek' }
  ]
}

export const whyWebsiteStats = {
  eyebrow: '[ MARKET REALITY · WHY YOUR BUSINESS NEEDS A WEBSITE NOW ]',
  headline: 'Every Day Without a High-Converting Website, Your Competitors Are Closing Your Customers.',
  subheadline:
    'In 2026, word-of-mouth alone is a leaking bucket. Before a client ever calls you, requests a price quote, or visits your office, they search for you online. If you aren’t there — or if your site looks outdated — they immediately hire the competitor who looks ready to serve them.',
  stats: [
    {
      index: '[01]',
      value: '81%',
      numericValue: 81,
      prefix: '',
      suffix: '%',
      decimals: 0,
      label: 'Search Online First',
      title: '4 out of 5 buyers research online before contacting any business',
      description:
        '81% of customers and B2B buyers look up a business online before making a purchase decision. Without a professional website, your company is invisible to 4 out of 5 buyers.'
    },
    {
      index: '[02]',
      value: '75%',
      numericValue: 75,
      prefix: '',
      suffix: '%',
      decimals: 0,
      label: 'Instant Trust & Authority',
      title: 'Your website design decides whether clients trust your pricing',
      description:
        '75% of buyers judge a company’s credibility and pricing authority solely by its website design. A modern, custom web presence lets you command premium rates.'
    },
    {
      index: '[03]',
      value: '3.2×',
      numericValue: 3.2,
      prefix: '',
      suffix: '×',
      decimals: 1,
      label: 'Faster Revenue Growth',
      title: 'Digital-first businesses grow over 3× faster than offline peers',
      description:
        'Companies with automated lead capture, online quotation portals, and instant client onboarding expand across cities while offline businesses stay stuck in local price wars.'
    },
    {
      index: '[04]',
      value: '60%',
      numericValue: 60,
      prefix: '',
      suffix: '%',
      decimals: 0,
      label: 'Less Manual Busywork',
      title: 'Custom web portals eliminate repetitive WhatsApp & Excel chaos',
      description:
        'By replacing manual PDFs, phone follow-ups, and spreadsheets with custom web platforms (like QuoteRx and eSign), businesses save 60% of staff hours and close deals in minutes.'
    },
    {
      index: '[05]',
      value: '+35%',
      numericValue: 35,
      prefix: '+',
      suffix: '%',
      decimals: 0,
      label: 'Higher Lead Conversion',
      title: 'Engineered UX & smart forms turn casual visitors into paying clients',
      description:
        'Strategic call-to-actions, instant quote calculators, and frictionless inquiry flows increase client conversion rates by 25–35% from the exact same traffic.'
    },
    {
      index: '[06]',
      value: '24/7',
      numericValue: 24,
      prefix: '',
      suffix: '/7',
      decimals: 0,
      label: 'Non-Stop Sales Engine',
      title: 'Your best salesperson that never sleeps, takes leave, or misses a lead',
      description:
        'Even when your office is closed, your custom website showcases your work, calculates instant quotes, collects e-signatures, and books qualified client calls around the clock.'
    }
  ],
  comparison: {
    withoutWebsite: {
      title: 'Businesses Without a Modern Website',
      badge: 'LOSING CLIENTS DAILY',
      points: [
        'Invisible to 81% of high-intent buyers searching on Google & mobile',
        'Losing high-value orders to competitors who look more established online',
        'Wasting hours daily sending manual quotes over WhatsApp, email & Excel',
        'Zero lead capture after business hours — every evening and weekend is lost revenue',
        'Forced to compete on cheap prices because there is no digital brand authority'
      ]
    },
    withWebsite: {
      title: 'Businesses With a Custom Web Platform',
      badge: 'SCALING & DOMINATING',
      points: [
        'Captures, educates, and converts high-paying clients 24/7/365 automatically',
        'Commands instant market authority with a bespoke, lightning-fast web experience',
        'Automates quotations, document signing, and client dashboards in one workspace',
        'Tracks every lead, quote status (Sent / Won / Follow-up), and revenue metric live',
        'Turns your website from a static brochure into your highest-ROI growth engine'
      ]
    }
  }
}

export const projects = [
  {
    id: 'quoterx',
    index: '[01]',
    slug: 'quoterx-quotation-platform',
    title: 'QuoteRx — Enterprise Quotation & Revenue CRM',
    shortTitle: 'QuoteRx Platform',
    year: '[2026]',
    category: 'SAAS · FINTECH CRM',
    scope: 'Full-Stack Architecture · Quotation Engine · Role-Based Workspace',
    client: 'Enterprise Sales & Healthcare Operations',
    industry: 'B2B Sales & Quotation Automation',
    alignment: 'start',
    featuredMetric: '60% Faster Quote Turnaround · ₹38.1L+ Pipeline Tracked',
    summary:
      'A centralized B2B quotation management platform that empowers sales teams to create standardized quotes, track pipeline value (Won, Sent, Expired), schedule follow-ups, and close more deals from a single role-governed workspace.',
    primaryImage: quoterxDashboard,
    secondaryImage: quoterxLogin,
    images: [
      {
        src: quoterxDashboard,
        caption: 'QuoteRx Admin Workspace — Live KPI cards (Quotations, Won, ₹3,00,000 Won Value, PO/JKT Updates) & filterable pipeline table.'
      },
      {
        src: quoterxLogin,
        caption: 'QuoteRx Split-Screen Enterprise Login — Role-based access control with Administrator approval governance.'
      }
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs', 'Role-Based Access'],
    overview:
      'QuoteRx was engineered to solve one of the biggest revenue leaks in B2B companies: slow, inconsistent manual quotations scattered across spreadsheets and emails. Built with a clean, high-trust enterprise interface, QuoteRx centralizes the entire quote lifecycle — from draft creation and client assignment to follow-up tracking and won-deal conversion.',
    context:
      'Sales teams were losing deals because quotations took days to prepare, pricing lacked standardization, and managers had zero visibility into which quotes were pending follow-up or expiring. Businesses needed a dedicated internal platform where employees, managers, and administrators could collaborate in real time.',
    approach:
      'Designed a dual-experience architecture: a high-assurance split-screen authentication portal with administrator approval controls, leading into a data-rich workspace dashboard. Implemented real-time KPI aggregation cards (Total Quotations, Won Deals, Won Revenue Value in ₹, Lost Quotes, and Pending PO/JKT updates), time-window filtering (All, Last Month, Last Week), and one-click quote duplication and inspection.',
    outcome:
      'Reduced manual quotation preparation effort by 60%, eliminated pricing discrepancies across sales reps, and gave leadership instant visibility into ₹38,10,000+ of active quotation pipeline — directly accelerating deal closure rates.'
  },
  {
    id: 'ai-nutrition',
    index: '[02]',
    slug: 'ai-nutrition-dashboard',
    title: 'AI Nutrition — Intelligent Meal Telemetry & Health SaaS',
    shortTitle: 'AI Nutrition Web',
    year: '[2026]',
    category: 'AI SAAS · HEALTHTECH',
    scope: 'AI Integration · Interactive Dashboard · Health Analytics',
    client: 'Consumer Health & Wellness Platform',
    industry: 'HealthTech & Artificial Intelligence',
    alignment: 'center',
    featuredMetric: 'Natural-Language AI Meal Parsing · Real-Time Macro Scoring',
    summary:
      'An AI-powered nutrition and wellness web dashboard where users describe meals in plain everyday language (e.g., "2 chapati, dal, rice, salad") to receive instant calorie breakdowns, protein tracking, health scores, and personalized AI dietary recommendations.',
    primaryImage: aiNutritionApp,
    secondaryImage: null,
    images: [
      {
        src: aiNutritionApp,
        caption: 'AI Nutrition Dashboard — Visual KPI cards (Calories Today, Protein Intake, Meals Logged, Health Score), natural-language Meal Analyzer, and AI Recommendations engine.'
      }
    ],
    techStack: ['React.js', 'AI / LLM API', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Data Visualization'],
    overview:
      'Traditional calorie trackers fail because users hate searching through endless database dropdowns for regional or home-cooked meals. AI Nutrition removes all friction by letting users type naturally what they ate and leveraging AI to compute macros, health scores, and actionable guidance in seconds.',
    context:
      'Health-conscious users and nutrition coaches needed a modern web platform capable of understanding culturally diverse meals ("2 chapati, dal, rice, salad") and translating them into structured daily telemetry without tedious manual logging.',
    approach:
      'Crafted an inviting, high-clarity dashboard featuring photographic metric cards for Calories Today, Protein (g), Meals Logged, and overall Health Score. Paired a distraction-free natural-language prompt workspace with a high-contrast emerald gradient AI Recommendations panel and customizable Daily Goals progress tracker.',
    outcome:
      'Transformed a 5-minute manual food logging chore into a 5-second AI interaction, driving significantly higher daily user retention and making personalized nutrition accessible on any device.'
  },
  {
    id: 'esign-portal',
    index: '[03]',
    slug: 'esign-digital-signing-portal',
    title: 'eSign Portal — Secure Enterprise Document Signing Platform',
    shortTitle: 'eSign Portal',
    year: '[2026]',
    category: 'ENTERPRISE · LEGALTECH',
    scope: 'Digital Signature Workflow · Google OAuth · Paperless HR',
    client: 'Corporate HR & Legal Operations',
    industry: 'Enterprise Document Automation & Security',
    alignment: 'end',
    featuredMetric: '100% Paperless HR Workflows · Signing Requests in Seconds',
    summary:
      'A secure, organization-locked digital paper signing portal enabling HR and operations teams to generate signing requests in seconds, authenticate via enterprise Google Workspace accounts, and monitor real-time document execution status.',
    primaryImage: esignLogin,
    secondaryImage: null,
    images: [
      {
        src: esignLogin,
        caption: 'eSign Portal — Enterprise gateway featuring Google Workspace OAuth, quick "Fill Form" action, and 4 core pillars: Fast, Secure, Digital, Track.'
      }
    ],
    techStack: ['React.js', 'Google OAuth 2.0', 'Node.js', 'Express.js', 'MongoDB', 'Cloud Storage', 'Audit Trail'],
    overview:
      'eSign Portal eliminates physical printing, scanning, and courier delays for corporate agreements and HR onboarding documentation. Built around strict organizational access controls, it provides a seamless bridge between document generation, legally binding digital execution, and live status monitoring.',
    context:
      'HR and operations departments were bottlenecked by physical paperwork and fragmented email attachments when onboarding employees or approving vendor contracts. They needed a branded, zero-friction portal restricted strictly to authorized organization accounts.',
    approach:
      'Engineered a high-trust royal-blue enterprise interface highlighting the platform’s four operational guarantees — Fast (signing requests in seconds), Secure (Google Authentication protection), Digital (paperless HR documentation), and Track (live document status monitoring) — alongside a direct "Fill Form" workflow and one-click Google SSO.',
    outcome:
      'Cut document turnaround time from days to minutes, ensured 100% authorized access compliance via organization email verification, and completely digitized HR onboarding paperwork.'
  },
  {
    id: 'lets-chat',
    index: '[04]',
    slug: 'lets-chat-realtime-platform',
    title: "Let's Chat (ChitChat) — Real-Time Messaging & Media Workspace",
    shortTitle: "Let's Chat Platform",
    year: '[2026]',
    category: 'REAL-TIME WEB · SOCKET.IO',
    scope: 'Full-Stack Real-Time Chat · WebSockets · Cloud Media Sharing',
    client: 'Distributed Teams & Communities',
    industry: 'Real-Time Communications & Collaboration',
    alignment: 'center',
    featuredMetric: 'Sub-50ms WebSocket Messaging · Live Presence & Media Sharing',
    summary:
      'A full-stack real-time communication platform built with React, Socket.io, Node.js, MongoDB, and Zustand — featuring instant bi-directional messaging, live online/offline presence indicators, contact management, sound toggles, and Cloudinary image sharing.',
    primaryImage: chatDemo,
    secondaryImage: chatLogin,
    images: [
      {
        src: chatDemo,
        caption: "Let's Chat Live Workspace — Real-time conversation view with online/offline status badges, Chats/Contacts switcher, sound controls, and instant image sharing."
      },
      {
        src: chatLogin,
        caption: "Let's Chat Onboarding & Login — Dark glassmorphic UI with custom 3D illustration ('Connect anytime, anywhere · Free · Easy Setup · Private')."
      }
    ],
    techStack: ['React.js', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB', 'Zustand', 'JWT Auth', 'Cloudinary', 'Arcjet'],
    overview:
      "Let's Chat (ChitChat) is a production-grade real-time messaging web application engineered for speed, privacy, and zero-latency collaboration. From its welcoming 3D-illustrated authentication portal to its sleek messaging matrix, every interaction feels instantaneous.",
    context:
      'Modern businesses and communities need private, distraction-free communication channels that support instant text and rich screenshot/media sharing without relying on bloated third-party consumer chat apps.',
    approach:
      'Built a persistent WebSocket layer using Socket.io paired with Zustand state management on the frontend for flicker-free message rendering and live online/offline status synchronization. Integrated JWT authentication, Arcjet rate-limiting/security protection, audio notification controls, and Cloudinary pipelines for instant image uploads in chat.',
    outcome:
      'Delivers sub-50ms real-time message delivery, rock-solid session security, and a polished workspace UI that keeps teams connected anytime, anywhere.'
  }
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Conversion Audit',
    description:
      'We analyze your business model, competitors, and current bottlenecks to map out a high-ROI website or custom web platform strategy.'
  },
  {
    step: '02',
    title: 'Editorial UI/UX & System Design',
    description:
      'I craft a clean, mobile-first interface and database architecture tailored to earn instant buyer trust and maximize lead inquiries.'
  },
  {
    step: '03',
    title: 'Full-Stack Engineering & Automation',
    description:
      'Built with React, Node.js, and MongoDB — integrating quotation engines, eSign workflows, AI dashboards, or real-time communication.'
  },
  {
    step: '04',
    title: 'Launch, SEO & 24/7 Lead Capture',
    description:
      'Your platform goes live with sub-second load times, security hardening, and direct WhatsApp/CRM lead routing.'
  }
]

export const servicesList = [
  'Custom Business & Corporate Websites',
  'Full-Stack SaaS & Web Applications',
  'Quotation, CRM & Billing Automation',
  'Real-Time Chat & Client Portals',
  'AI-Powered Analytics Dashboards',
  'Digital Signature & HR Workflow Systems',
  'RESTful APIs & Cloud Database Architecture',
  'High-Conversion UI/UX Redesign'
]

export const focusExpertiseList = [
  'B2B & B2C Commercial Web Systems',
  'SaaS Platforms & Internal Tools',
  'FinTech & Quotation Engines',
  'AI & HealthTech Dashboards',
  'Real-Time Socket.io Applications',
  'Mobile & Cross-Platform (Flutter)',
  'Conversion & Speed Optimization'
]

export const technicalSkills = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++', 'C'],
  Frontend: ['React.js', 'Redux', 'Zustand', 'HTML5 & CSS3', 'Tailwind CSS', 'Ant Design', 'Flutter'],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Socket.io', 'JWT Auth', 'REST APIs'],
  Infrastructure: ['Docker Basics', 'API Horizontal Scaling', 'Cloudinary', 'Vercel', 'Render', 'GitHub', 'Postman']
}

export const experienceData = [
  {
    index: '[01]',
    role: 'Full-Stack Web Developer',
    company: 'Medicca',
    sector: 'Enterprise Healthcare & Business Systems',
    highlights: [
      {
        metric: '60%',
        text: 'Architected enterprise quotation & CRM workflows (QuoteRx) and paperless digital signing portals (eSign), cutting manual operational turnaround by 60%.'
      },
      {
        metric: '₹38.1L+',
        text: 'Built role-governed executive dashboards with live pipeline tracking, PO/JKT status visibility, and Google Workspace OAuth security.'
      },
      {
        metric: '100%',
        text: 'Digitized internal approval and HR document execution pipelines with real-time status tracking and zero paperwork delays.'
      }
    ]
  },
  {
    index: '[02]',
    role: 'Web Developer',
    company: 'Vefes Engineering',
    sector: 'Industrial & Cost Estimation Web Systems',
    highlights: [
      {
        metric: '40%',
        text: 'Developed scalable UI components in React connected to database-backed APIs, improving UI consistency and reducing styling issues by 40%.'
      },
      {
        metric: '60%',
        text: 'Built a full-stack cost estimation system (React + Express + MongoDB), automating pricing workflows, enabling data persistence, and reducing manual effort by 60%.'
      },
      {
        metric: '35%',
        text: 'Designed and implemented data-driven forms using React with database integration, improving submission success rates by 25–35% through robust validation and UX.'
      }
    ]
  }
]

export const educationData = {
  degree: 'Bachelor of Engineering in Computer Science',
  institution: 'University of Engineering and Management, Jaipur'
}

export const achievementsData = [
  { title: 'GATE Qualified 2025', subtitle: 'Graduate Aptitude Test in Engineering (Computer Science)' },
  { title: 'NET Qualified 2024', subtitle: 'National Eligibility Test Qualified' },
  { title: 'TCS NQT Prime Shortlisted', subtitle: 'Top-tier national coding & aptitude selection' },
  { title: 'GYT Hackathon Winner', subtitle: '1st Place — Rapid full-stack product innovation & execution' }
]

export const tickerItems = [
  'CUSTOM BUSINESS WEBSITES',
  'FULL-STACK SAAS PLATFORMS',
  'MEDICCA · VEFES ENGINEERING',
  '60% LESS MANUAL WORK',
  '+35% LEAD CONVERSIONS',
  'QUOTERX · AI NUTRITION · ESIGN · LET’S CHAT',
  'CALL / WHATSAPP: +91-9001662817',
  'GATE 2025 & NET 2024 QUALIFIED',
  'GYT HACKATHON WINNER'
]
