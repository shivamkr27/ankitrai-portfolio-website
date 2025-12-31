import { Service, Project, Experience, MediaFeature, Skill, SpeakingItem } from './types';

export const HERO_CONTENT = {
  name: "Ankit Rai",
  title: "Cyber Security Expert | Founder, Codevirus Security",
  tagline: "Helping organizations secure systems, data & people.",
  intro: "An authority in cybersecurity with extensive experience training government bodies, banks, and corporations. Specialized in VAPT, Threat Intelligence, and secure infrastructure consulting.",
  location: "India (Serving Globally)"
};

export const TRUST_BADGES = [
  "GLG Expert",
  "Kolabtree Consultant",
  "ORCID Researcher",
  "Featured: Bharat Samachar",
  "Featured: India News"
];

export const SKILLS: Skill[] = [
  {
    title: "Penetration Testing (VAPT)",
    details: "Comprehensive vulnerability assessment and penetration testing to identify and exploit security weaknesses before malicious actors can."
  },
  {
    title: "Network Security Architecture",
    details: "Design and implementation of secure network infrastructures with advanced threat detection and prevention mechanisms."
  },
  {
    title: "Digital Forensics",
    details: "Expert analysis of digital evidence, incident investigation, and chain-of-custody procedures for legal and compliance purposes."
  },
  {
    title: "Incident Response",
    details: "Rapid containment and analysis of security incidents to minimize impact and prevent future occurrences."
  },
  {
    title: "Dark Web Intelligence",
    details: "Monitoring underground forums and marketplaces for threat intelligence and proactive risk mitigation."
  },
  {
    title: "Cloud Security (AWS/Azure)",
    details: "Securing cloud environments with identity management, encryption, and compliance frameworks for major cloud platforms."
  },
  {
    title: "Security Compliance (ISO 27001)",
    details: "Ensuring organizational adherence to international security standards and regulatory requirements."
  },
  {
    title: "Ethical Hacking Training",
    details: "Comprehensive training programs for security professionals and organizations on ethical hacking methodologies."
  }
];

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    title: "Cyber Security Consulting",
    icon: "ShieldAlert",
    description: "End-to-end security strategy for organizations.",
    details: "Comprehensive security consulting including risk assessment, policy development, and strategic planning to build robust defense systems.",
    targetAudience: "Startups, SMEs, Enterprises",
    outcome: "Robust security posture and compliance alignment."
  },
  {
    id: 'vapt',
    title: "VAPT (Vulnerability Assessment)",
    icon: "ScanEye",
    description: "Deep-dive penetration testing to find weak spots before hackers do.",
    details: "Thorough vulnerability scanning, exploitation testing, and detailed reporting with remediation recommendations.",
    targetAudience: "Banks, Fintech, SaaS Platforms",
    outcome: "Identified and patched critical vulnerabilities."
  },
  {
    id: 'training',
    title: "Corporate & Govt Training",
    icon: "Presentation",
    description: "Hands-on workshops for teams on latest threats.",
    details: "Customized training programs covering phishing awareness, secure coding practices, and incident response procedures.",
    targetAudience: "Government Bodies (ITBP, Police), Banks (Union Bank)",
    outcome: "Workforce aware of phishing, social engineering, and secure coding."
  },
  {
    id: 'darkweb',
    title: "Dark Web & Threat Intelligence",
    icon: "Ghost",
    description: "Monitoring the dark web for leaked credentials and brand threats.",
    details: "Continuous monitoring of underground sources for data breaches, credential leaks, and emerging threats to your organization.",
    targetAudience: "High-profile Individuals, Enterprises",
    outcome: "Proactive leak detection and risk mitigation."
  },
  {
    id: 'advisory',
    title: "Web & Digital Security Advisory",
    icon: "GlobeLock",
    description: "Security-first architecture for web applications.",
    details: "Security-by-design approach for web applications including secure coding reviews and architecture recommendations.",
    targetAudience: "Developers, CTOs",
    outcome: "Secure-by-design applications."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'exim',
    title: "EXIM Bank Network Security",
    category: "Assessment",
    problem: "Need for comprehensive network vulnerability assessment across branches.",
    solution: "Conducted rigorous VAPT and network architecture review.",
    result: "Hardened network infrastructure and closed 15+ critical gaps.",
    tags: ["Network Security", "VAPT", "Banking Compliance"]
  },
  {
    id: 'gallant',
    title: "Gallant Steels Security Audit",
    category: "Audit",
    problem: "Ensuring industrial control systems and IT integration security.",
    solution: "Performed IT/OT security assessment.",
    result: "Secured operational data flow and prevented potential ransomware entry points.",
    tags: ["SCADA Security", "Risk Assessment", "Industrial IoT"]
  },
  {
    id: 'unicode',
    title: "Unicode VAPT",
    category: "VAPT",
    problem: "Web application security validation required for compliance.",
    solution: "Black-box and Grey-box penetration testing.",
    result: "Achieved compliance certification readiness.",
    tags: ["Web App Sec", "Penetration Testing", "OWASP Top 10"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Founder",
    organization: "Codevirus Security",
    description: "Leading a team of security researchers and consultants helping global clients secure their digital assets."
  },
  {
    role: "Trainer & Consultant",
    organization: "Government & Banking Sector",
    description: "Delivered specialized training for ITBP, Union Bank, EXIM Bank, and various Police departments."
  },
  {
    role: "Keynote Speaker",
    organization: "Universities (IIT Kanpur, NIT Patna)",
    description: "Addressed students and faculty on the future of cybersecurity and ethical hacking."
  }
];

export const MEDIA: MediaFeature[] = [
  { outlet: "Veer Savarkar National Award", type: "Award", description: "Honored for contributions to national security awareness." },
  { outlet: "Radio Mirchi", type: "Radio", description: "Expert commentary on cyber safety for the general public." },
  { outlet: "India News / Bharat Samachar", type: "TV", description: "Panel expert discussing major cyber attacks and data breaches." }
];

export const SPEAKING_ITEMS: SpeakingItem[] = [
  {
    icon: "Users",
    title: "Workshops",
    description: "Hands-on technical training for teams and students.",
    details: "Interactive sessions covering practical cybersecurity techniques, tools, and real-world scenarios for skill development."
  },
  {
    icon: "Video",
    title: "Webinars",
    description: "Remote sessions covering current threat landscapes.",
    details: "Live online presentations discussing emerging threats, security trends, and best practices for remote audiences."
  },
  {
    icon: "Mic",
    title: "Keynotes",
    description: "Inspiring talks on security leadership and innovation.",
    details: "Motivational presentations on cybersecurity leadership, innovation in security, and future trends in digital defense."
  }
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ankitrai73",
  twitter: "https://x.com/AnkitRai73",
  medium: "#",
  substack: "#",
  orcid: "#"
};
