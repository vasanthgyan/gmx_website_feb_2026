
import React from 'react';
import { 
  Bot, 
  Globe, 
  Users, 
  ShieldCheck, 
  Rocket,
  LayoutDashboard,
  Lock,
  UserPlus
} from 'lucide-react';
import { Service, CaseStudy, Metric, BlogPost, GccPhase, JobOpening } from './types';

export const COLORS = {
  primary: '#0066FF',
  accentTeal: '#2A9D8F',
  accentGold: '#E9C46A',
  accentCoral: '#F4A261',
  bg: '#0a0a0a',
  surface: '#111111',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/gyanmatrix/',
  twitter: 'https://twitter.com/gyanmatrix',
  facebook: 'https://www.facebook.com/GyanMatrix/',
};

export const METRICS: Metric[] = [
  { label: 'Engineers Scaled', value: '326', description: 'Elite engineering talent hired and managed in India.' },
  { label: 'Successful Exits', value: '3', description: 'Building high-value engineering assets for acquisition.' },
  { label: 'Fortune 500 Trust', value: 'Proven', description: 'Infrastructure and teams for global market leaders.' },
  { label: 'Years Proven', value: '10 Yrs', description: 'A decade of operational discipline and excellence.' },
];

export const TRUSTED_BRANDS = [
  'SOYOU', 
  'TALENTKEEPERS', 
  'TARGETX', 
  'FINANCIAL TIMES', 
  'GLOBALENGLISH', 
  'JOYN'
];

export const ENGAGEMENT_PROCESS = [
  { week: 'Week 1', title: 'Discovery', desc: 'Kickoff meeting, technical deep dive, access setup, goals and timeline.' },
  { week: 'Week 2-3', title: 'Team Assembly', desc: 'Shortlist candidates, you interview (optional), finalize selection.' },
  { week: 'Week 4', title: 'Onboarding', desc: 'Team intros, code walkthrough, process alignment, first sprint.' },
  { week: 'Week 5+', title: 'Delivery', desc: '2-week sprints, weekly syncs, monthly updates. Continuous value.' }
];

export const SERVICES: Service[] = [
  {
    id: 'ai-agent',
    title: 'AI Agent Development',
    description: 'Autonomous AI systems that work 24/7 handling customer service, sales automation, and domain-specific solutions.',
    problem: 'Manual processes slowing down enterprise scale and efficiency.',
    solution: 'End-to-end autonomous agent orchestration and RAG pipelines.',
    outcome: 'Transformation of operational overhead into autonomous intelligence.',
    icon: <Bot />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
  },
  {
    id: 'decision-intel',
    title: 'Decision Intelligence',
    description: 'AI-powered analytics that drive decisions through predictive engines, risk modeling, and optimization systems.',
    problem: 'Enterprise data remains siloed and descriptive rather than predictive.',
    solution: 'Custom ML models that turn raw data into executive-level predictive insights.',
    outcome: 'Increased accuracy in forecasting and strategic decision-making.',
    icon: <LayoutDashboard />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    id: 'ai-product',
    title: 'AI Product Development',
    description: 'End-to-end AI product from concept to scale: AI SaaS, AI APIs/platforms, and consumer AI apps.',
    problem: 'High failure rate of AI initiatives due to lack of production-grade engineering.',
    solution: 'Full-stack AI product engineering with production-ready MLOps.',
    outcome: 'Scalable, revenue-generating AI products deployed in months.',
    icon: <Rocket />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'gcc-setup',
    title: 'GCC Setup & Operations',
    description: 'Build your AI engineering center in India. We built NewsCorp\'s 300+ engineer unit from scratch.',
    problem: 'Complexity of legal, infra, and hiring in the Indian market.',
    solution: 'Build-Operate-Transfer (BOT) model with full operational transparency.',
    outcome: '60-70% cost savings and full control over your engineering asset.',
    icon: <Globe />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    id: 'staff-aug',
    title: 'Staff Augmentation',
    description: 'Flexible teams that scale: full-stack, DevOps, AI/ML engineers ready in 2-4 weeks.',
    problem: 'Time-to-hire for niche engineering talent is 3-6 months in US/UK.',
    solution: 'Overlapping timezone pods (Senior level) at India economics.',
    outcome: 'Rapid roadmap acceleration with 60% less cost than local hires.',
    icon: <Users />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    id: 'cybersecurity',
    title: 'Security & Infrastructure',
    description: 'Safeguard your digital assets with enterprise-grade protection and compliance management.',
    problem: 'Vulnerable cloud architectures and increasing threat landscapes.',
    solution: 'Comprehensive protection, threat detection, and SOC2 compliance readiness.',
    outcome: 'Secure, air-gapped engineering environments for sensitive data.',
    icon: <ShieldCheck />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'newscorp',
    client: 'News Corporation',
    title: 'Consolidating Global Operations for NewsCorp',
    challenge: 'Relied on numerous vendors with minimal control over efficiency and very high IT spend.',
    solution: 'Spun up a 300+ member team in India in 6 months, constructed office from shell in 60 days.',
    structure: 'Consolidated product teams and implemented AWS automation saving 76 man-hours monthly.',
    timeline: '6 months scaling phase.',
    results: ['$4M USD saved through cost optimization', '300+ Member team established', 'Hackathon-driven Data Science hiring'],
    impact: 'Established a cohesive, high-productivity innovation hub for Global Media and Information Services.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
  },
  {
    id: 'solvvy-zoom',
    client: 'Solvvy (acquired by Zoom)',
    title: 'Conversational AI Scale & Acquisition Success',
    challenge: 'Scaling a conversational AI startup from 2 to 20 members during a pandemic shift to remote work.',
    solution: 'Improved core products (Dashboard) and added Solution Engineers to support customers.',
    structure: 'Transitioned smooth professional integration post-acquisition by Zoom.',
    timeline: '2-year growth trajectory.',
    results: ['Team grew from 2 to 20 members', 'Successful acquisition by Zoom', 'Seamless integration into Zoom Contact Center'],
    impact: 'Drove the technical success and growth of a leading conversational AI startup.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    id: 'targetx',
    client: 'TargetX / Liaison',
    title: 'Empowering Growth via CRM Transformation',
    challenge: 'Migration from legacy AngularJS to ReactJS and scaling from a 3-member seed team across time zones.',
    solution: 'GyanMatrix operated as the primary staff augmentation center, owning product maintenance and new development.',
    structure: 'Scaled to 19+ members with nocturnal shift incentives to overlap with US teams.',
    timeline: 'Strategic growth partner.',
    results: ['60% boost in productivity', '4 New products developed', 'Successful tech stack migration'],
    impact: 'Accelerated higher-education CRM solutions and institutional success redesign.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'neonmob',
    client: 'NeonMob',
    title: 'Revolutionizing Performance for Digital Trading',
    challenge: 'API response times exceeding 2 seconds and lack of feature parity between web and iOS apps.',
    solution: 'Assembled a dedicated senior engineering team and architectural overhaul for low-latency delivery.',
    structure: 'Managed 130k+ users and optimized data analytics to inform product decisions.',
    timeline: 'Performance transformation.',
    results: ['User base increased to 300k', 'DAU rose from 800 to 7,000', 'API response <100ms achieved'],
    impact: 'Transformed NeonMob into a high-performance, stabilized digital card trading ecosystem.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    id: 'global-english',
    client: 'GlobalEnglish (Pearson)',
    title: 'Enterprise Learning Scale for Global Audiences',
    challenge: 'Needed a scalable solution to serve diverse global audiences with personalized learning paths.',
    solution: 'Built a robust Custom LMS with gamified learning, badges, and real-time progress analytics.',
    structure: 'Mobile-first design for on-the-go upskilling of corporate employees.',
    timeline: 'Scale transformation.',
    results: ['User engagement increased by 35%', 'Scaled to support 100,000+ users', 'Seamless corporate workflow integration'],
    impact: 'Strengthened communication and business outcomes for multinational organizations.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    id: 'wallstreet-english',
    client: 'Wall Street English',
    title: 'Digital Classroom Transformation from Legacy',
    challenge: 'Rigid training solutions and outdated technology limiting the ability to meet diverse student needs.',
    solution: 'Developed an interactive Digital Classroom with whiteboards, breakout sessions, and real-time notes.',
    structure: 'Migration to a common login system and unified teacher management.',
    timeline: 'Product lifecycle redesign.',
    results: ['Global accessibility for students', 'Higher retention and satisfaction', 'Scalable success for global audience'],
    impact: 'Transformed traditional English teaching methodology into a high-engagement digital platform.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'
  },
  {
    id: 'digri-ai',
    client: 'Digri.ai',
    title: 'AI-Driven Upskilling Ecosystem',
    challenge: 'Lack of practical skills and limited exposure to real-world challenges for students.',
    solution: 'AI-powered platform delivering personalized learning paths and automated coding practice.',
    structure: 'Integrated Placement ERP and real-time dashboards for actionable insights.',
    timeline: 'Launch and scale.',
    results: ['Enhanced placement rates', 'Reduced corporate hiring costs', 'Actionable dashboards for colleges'],
    impact: 'Bridges the gap between education and employment via intelligent results-driven ecosystems.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    id: 'fitness-saas',
    client: 'Fitness App Provider',
    title: 'End-to-End SaaS for Fitness Management',
    challenge: 'Fitness technology client needed an innovative, user-friendly platform for trainers and clients.',
    solution: 'Designed and implemented a comprehensive SaaS with diet/workout plans and chat functions.',
    structure: 'Full-cycle design from in-depth analysis to mobile app development.',
    timeline: 'Go-to-market acceleration.',
    results: ['Streamlined client data management', 'Personalized engagement tools', 'Successful market entry'],
    impact: 'Revolutionized how fitness trainers manage data and engage with clients globally.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80'
  },
  {
    id: 'english-cafe',
    client: 'EnglishCafe.com',
    title: 'Pioneering Social Media Language Platform',
    challenge: 'Scaling an interactive learning platform for a global audience (2006 era).',
    solution: 'Created a social learning ecosystem with patented live feedback tools (EC Toolbox).',
    structure: 'Built on Drupal with internal credit economy (EC Credits).',
    timeline: 'Legacy scale success.',
    results: ['Reached 250k organic users by 2008', 'Patented EC Toolbox feedback mechanism', 'Global reach (China, Japan, Korea)'],
    impact: 'Proven early success in gamified, social-driven language acquisition.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-first-gcc-us-market',
    title: 'The US Tech Talent Gap: Why 2026 is the Year of AI-First GCCs',
    excerpt: 'Silicon Valley is shifting from outsourcing to "Engineering Pods." Explore how US firms are leveraging India as their core AI laboratory.',
    category: 'US Market',
    date: 'March 14, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    id: 'uk-mid-market-scale',
    title: 'UK Mid-Market Blueprint: Scaling AI Engineering on a Budget',
    excerpt: 'How London-based tech firms are competing with giants by building lean, high-output AI centers in HSR Layout.',
    category: 'UK Insights',
    date: 'March 10, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
  },
  {
    id: 'mena-vision-2030-ai',
    title: 'MENA Vision 2030: Bridging Dubai and India via AI Capability Centers',
    excerpt: 'Strategic alignment between Middle Eastern capital and Indian engineering talent is creating the next generation of Sovereign AI.',
    category: 'MENA Strategy',
    date: 'March 05, 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80'
  },
  {
    id: 'cfo-guide-gcc-roi',
    title: 'The CFO’s Guide to GCC ROI: Beyond 70% Cost Savings',
    excerpt: 'Traditional outsourcing is a cost center. An AI-First GCC is a value center. We break down the long-term asset value of India-based teams.',
    category: 'Executive Insights',
    date: 'Feb 28, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
  },
  {
    id: 'cto-agentops-transformation',
    title: 'From DevOps to AgentOps: The CTO’s Infrastructure Roadmap',
    excerpt: 'Autonomous AI agents require a new kind of engineering culture. Learn how our teams bridge the gap between legacy code and agentic workflows.',
    category: 'AI Engineering',
    date: 'Feb 22, 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    id: 'chro-ai-talent-india',
    title: 'The CHRO Perspective: Why India is Winning the AI Talent War',
    excerpt: 'It’s no longer about volume; it’s about "Context-Aware" engineers. How we filter for the top 1% of problem solvers.',
    category: 'Executive Insights',
    date: 'Feb 15, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    id: 'ip-sovereignty-ai',
    title: 'IP Sovereignty: The Secret Weapon of the GCC Model',
    excerpt: 'In the age of LLMs, your data is your moat. Learn why owning the GCC means owning the future of your proprietary models.',
    category: 'GCC Strategy',
    date: 'Feb 10, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80'
  },
  {
    id: 'mlops-at-scale',
    title: 'MLOps at Scale: Building the Infrastructure for Global AI',
    excerpt: 'Productionizing AI is harder than prototyping it. A deep dive into the engineering pipelines used by our most successful partners.',
    category: 'AI Engineering',
    date: 'Feb 05, 2026',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
  },
  {
    id: 'bot-vs-eor-india',
    title: 'BOT vs. EOR: Which India Strategy Fits Your 2026 Roadmap?',
    excerpt: 'Choosing the right operational model is critical. We compare Build-Operate-Transfer with Employer of Record for rapid scaling.',
    category: 'GCC Strategy',
    date: 'Jan 30, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
  },
  {
    id: 'autonomous-agents-enterprise',
    title: 'Autonomous Agents: The New Workforce for Global Enterprise',
    excerpt: 'How our India-based R&D lab is building agents that handle 80% of routine executive decision-making.',
    category: 'AI Engineering',
    date: 'Jan 25, 2026',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    id: 'us-regulation-ai-offshore',
    title: 'US AI Act Compliance: Navigating Offshore Engineering Regulations',
    excerpt: 'A comprehensive guide for US legal teams on managing compliance and data residency in an Indian GCC.',
    category: 'US Market',
    date: 'Jan 20, 2026',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80'
  },
  {
    id: 'uk-fintech-gcc-blueprint',
    title: 'London Fintechs in India: A Blueprint for AI-First Scaling',
    excerpt: 'How UK fintech leaders are leveraging Bangalore as a 24/7 innovation lab for predictive banking.',
    category: 'UK Insights',
    date: 'Jan 15, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    id: 'saudi-arabia-neom-ai',
    title: 'Saudi Vision 2030: India’s Role in Building Neom’s AI Layer',
    excerpt: 'Exploring the technical corridor between Riyadh and Bangalore in the era of smart cities.',
    category: 'MENA Strategy',
    date: 'Jan 10, 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?auto=format&fit=crop&q=80'
  },
  {
    id: 'decision-intelligence-roi',
    title: 'Decision Intelligence: The Next Frontier for Global CEOs',
    excerpt: 'Why your 2026 strategy depends on your ability to turn raw data into autonomous predictive insights.',
    category: 'Executive Insights',
    date: 'Jan 05, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'agile-in-ai-pods',
    title: 'Agile 2.0: Managing AI Engineering Pods Across Timezones',
    excerpt: 'Overcoming the "hand-off" problem through synchronous engineering rituals and AI-driven collaboration.',
    category: 'AI Engineering',
    date: 'Dec 28, 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    id: 'the-death-of-outsourcing',
    title: 'The Death of Outsourcing: Long Live the AI-First GCC',
    excerpt: 'Why the era of "throwing code over the wall" is over, and what the replacement model looks like.',
    category: 'GCC Strategy',
    date: 'Dec 20, 2025',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
  },
  {
    id: 'us-enterprise-ai-security',
    title: 'Zero-Trust Architecture for US Labs in India',
    excerpt: 'Building highly secure, air-gapped engineering environments for sensitive US data processing.',
    category: 'US Market',
    date: 'Dec 15, 2025',
    readTime: '11 min',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    id: 'uk-r-and-d-tax-credits',
    title: 'UK R&D Tax Credits & India GCCs: A Strategic Synergy',
    excerpt: 'How UK firms can maximize innovation relief while leveraging offshore engineering density.',
    category: 'UK Insights',
    date: 'Dec 10, 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80'
  },
  {
    id: 'mena-sovereign-llms',
    title: 'Sovereign LLMs: Why MENA Leaders are Investing in Private AI',
    excerpt: 'The move toward localized, culturally aware models built by dedicated Indian pods.',
    category: 'MENA Strategy',
    date: 'Dec 05, 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc463867000?auto=format&fit=crop&q=80'
  },
  {
    id: 'scaling-from-3-to-300',
    title: 'The 3-to-300 Playbook: Scaling Your India Team without Quality Loss',
    excerpt: 'A step-by-step tactical guide based on 10 years of successful India-based scaling.',
    category: 'GCC Strategy',
    date: 'Nov 28, 2025',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
  }
];

export const LEADERSHIP = [
  { 
    name: "Sam Neff", 
    role: "Board of Director", 
    img: "https://gyanmatrix.com/wp-content/uploads/2022/09/sam.jpg",
    description: "Strategic guidance for global enterprise scale."
  },
  { 
    name: "Rajan Parasuraman", 
    role: "Co-Founder & CEO", 
    img: "https://gyanmatrix.com/wp-content/uploads/2020/06/Rajan-Parasuraman.jpeg",
    description: "Visionary leader driving AI engineering excellence."
  },
  { 
    name: "Vinoth Vanaraj", 
    role: "Co-Founder & Director Finance", 
    img: "https://gyanmatrix.com/wp-content/uploads/2020/06/Vinoth-Vanaraj.jpeg",
    description: "Expert in financial operations and GCC compliance."
  }
];

export const GCC_PHASES: GccPhase[] = [
  {
    title: "Phase 1: Setup",
    duration: "Months 1-6",
    description: "Legal entity formation, office space, IT infra, HR systems, and first 10-20 engineers hired.",
    deliverables: ["Legal Compliance", "Infra & IT", "Seed Team"]
  },
  {
    title: "Phase 2: Scale",
    duration: "Months 7-24",
    description: "Scaling to 20-100+ engineers, establishing engineering culture, maintaining <15% attrition.",
    deliverables: ["Rapid Hiring", "Culture Building", "Scale Execution"]
  },
  {
    title: "Phase 3: Transfer",
    duration: "Months 25-36",
    description: "Knowledge transfer to client team, full BOT handover, and successful exit achieved.",
    deliverables: ["Asset Transfer", "Handover Support", "IP Sovereignty"]
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'ai-eng-01',
    title: 'Senior AI Engineer',
    department: 'AI Engineering',
    type: 'Full-time',
    location: 'Bangalore (Hybrid)',
    description: 'Lead the development of RAG pipelines and custom agentic workflows for Fortune 500 clients.'
  }
];

export const INTERNSHIPS = [
  {
    id: 'int-01',
    title: 'AI Research Intern',
    duration: '6 Months',
    focus: 'LLM Fine-tuning & Optimization',
    perks: 'Mentorship, Real-world Projects, PPO potential'
  }
];
