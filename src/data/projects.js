export const projectsData = {
  "ioms": {
    id: "ioms",
    title: "IOMS - Institute Operations Management System",
    subtitle: "Full-Stack Educational Institute Management Platform",
    gradient: "linear-gradient(135deg, var(--primary-blue), #FF6B6B)",
    overview: "IOMS is a comprehensive web application built to manage all operational aspects of educational institutes like Instant Academy. It handles 100+ active student groups, Zoom account scheduling with smart conflict detection, financial tracking with visual traffic lights, and automated daily reporting — all built from scratch with Node.js and vanilla JavaScript.",
    icon: "fas fa-graduation-cap",
    screenshotLabel: "IOMS Dashboard",
    keyFeatures: [
      "Smart Zoom account capacity management (supports 2 parallel sessions per account)",
      "Financial Traffic Light system — color-coded payment status per group",
      "Role-based access control (Admin / Agent) with JWT auth",
      "Full CRUD for 100+ groups, schedules, tasks, and daily logs",
      "Advanced search, 5 themes, 20+ keyboard shortcuts, undo/redo",
      "Responsive across desktop, tablet, and mobile"
    ],
    techStack: ["Node.js", "Express.js", "SQL.js (SQLite)", "Vanilla JavaScript", "CSS3", "JWT", "bcrypt"],
    useCases: [
      "Managing Instant Academy's 100+ active student groups",
      "Automating Zoom session scheduling across 22 accounts",
      "Tracking instructor and student daily activity logs",
      "Financial monitoring and dues management"
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/Eli0zak/IOMS", icon: "fab fa-github" }
    ]
  },
  "zoom-automation": {
    id: "zoom-automation",
    title: "Zoom Recording Automation",
    subtitle: "100% Automated Zoom-to-Drive Pipeline via Zapier",
    gradient: "linear-gradient(135deg, var(--primary-blue), var(--accent-purple))",
    overview: "Built a full automation system at Instant Software Solutions that eliminates manual downloading and uploading of Zoom recordings. The system uses Zapier with a smart Webhook connected to 22 Zoom accounts. The moment a recording ends, it automatically identifies the correct student group folder from 100+ Google Drive folders using Dynamic Mapping and sends an instant notification — saving 2+ hours of daily manual work per team member.",
    icon: "fas fa-video",
    screenshotLabel: "Automation Flow Diagram",
    keyFeatures: [
      "Webhook listener connected to 22 Zoom accounts simultaneously",
      "Dynamic Mapping to identify the correct folder among 100+ Google Drive folders",
      "Instant notification system when recording is ready",
      "Zero human intervention — 0 errors, 0 manual uploads",
      "2+ hours saved daily per operations team member"
    ],
    techStack: ["Zapier", "Zoom API", "Google Drive API", "Webhooks", "Dynamic Mapping"],
    useCases: [
      "Automating recording uploads for Instant Academy's 100+ active groups",
      "Eliminating manual file transfers across 22 Zoom accounts",
      "Operations workflow optimization at scale"
    ],
    links: [
      { label: "View LinkedIn Post", url: "https://www.linkedin.com/in/moatazaky/", icon: "fab fa-linkedin" }
    ]
  },
  "whatsapp-crm-extension": {
    id: "whatsapp-crm-extension",
    title: "WhatsApp CRM Chrome Extension",
    subtitle: "Real-time Customer Data Sidebar Inside WhatsApp Web",
    gradient: "linear-gradient(135deg, var(--primary-blue), #25D366)",
    overview: "Designed and built a Chrome Extension that lives inside WhatsApp Web. When an agent opens a customer chat, it automatically reads the phone number, queries the company's database (Google Sheets or ERP), and displays the full customer profile in a sidebar — without leaving WhatsApp. Agents can also edit and update customer data directly from the extension, reducing average lookup time from 2 minutes to 0 seconds.",
    icon: "fab fa-whatsapp",
    screenshotLabel: "Extension Interface Screenshot",
    keyFeatures: [
      "Auto-detects customer phone number from active WhatsApp chat",
      "Fetches full customer profile from Google Sheets or ERP in real-time",
      "Inline data editing — update records without leaving WhatsApp",
      "Reduces context switching between tabs by 100%",
      "0% data entry errors — no manual copy-paste",
      "Response time doubled due to instant customer context"
    ],
    techStack: ["JavaScript (ES6+)", "Chrome Extensions API", "Google Sheets API", "DOM Manipulation", "CSS3"],
    useCases: [
      "Customer service teams using WhatsApp Business",
      "Operations agents needing instant customer lookup",
      "Companies with ERP/CRM integration needs"
    ],
    links: [
      { label: "View LinkedIn Post", url: "https://www.linkedin.com/in/moatazaky/", icon: "fab fa-linkedin" }
    ]
  },
  "pettouch": {
    id: "pettouch",
    title: "PetTouch",
    subtitle: "Smart NFC-Based Pet Management Platform",
    gradient: "linear-gradient(135deg, var(--primary-blue), var(--accent-green))",
    overview: "PetTouch is a full-stack web application that helps pet owners manage their pets' profiles, medical history, vaccinations, and safety using NFC tag technology. When someone scans the NFC tag on a pet's collar, they instantly see the pet's profile and can trigger a 'Lost Mode' alert. The platform is bilingual (Arabic & English) and features a responsive dashboard with dark mode support.",
    icon: "fas fa-paw",
    screenshotLabel: "PetTouch Interface Screenshot",
    keyFeatures: [
      "NFC Tag Integration for instant pet identification on scan",
      "Digital Pet Profile with full medical history and vaccinations",
      "'Lost Mode' with geolocation alerts for missing pets",
      "Bilingual support: Arabic (RTL) & English with i18next",
      "Supabase backend for real-time auth and database",
      "Interactive map with Leaflet.js for pet location tracking"
    ],
    techStack: ["React.js", "TypeScript", "Supabase", "Tailwind CSS", "i18next", "Leaflet.js"],
    useCases: [
      "Pet owners wanting digital health records",
      "Lost pet recovery via NFC scanning",
      "Vet clinics for streamlined pet data access"
    ],
    links: [
      { label: "Live Demo", url: "https://pettouchv1.vercel.app", icon: "fas fa-external-link-alt" },
      { label: "View on GitHub", url: "https://github.com/Eli0zak/pettouchv1", icon: "fab fa-github" }
    ]
  },
  "whatsapp-bulk-sender": {
    id: "whatsapp-bulk-sender",
    title: "WhatsApp Bulk Sender",
    subtitle: "Advanced Chrome Extension for Automated Personalized Messaging",
    gradient: "linear-gradient(135deg, #25D366, var(--accent-green))",
    overview: "A powerful Chrome Extension for automating personalized WhatsApp messages from Excel sheets. Used by educational institutions and businesses to send thousands of personalized messages with dynamic templates, intelligent random delays to simulate human behavior and avoid bans, and a real-time progress dashboard.",
    icon: "fas fa-paper-plane",
    screenshotLabel: "Extension Interface Screenshot",
    keyFeatures: [
      "Excel/XLSX file parsing for bulk contact lists",
      "Dynamic message templates with placeholders ({Name}, {Date}, {Code})",
      "Intelligent random delays to avoid WhatsApp detection and bans",
      "Real-time progress bar and per-contact status tracking",
      "Pause, Resume, and Stop controls during sending",
      "Chrome Storage integration for saving message templates"
    ],
    techStack: ["JavaScript (ES6+)", "Chrome Extensions MVC", "SheetJS (XLSX)", "HTML5", "CSS3"],
    useCases: [
      "Educational institutes sending enrollment notifications",
      "Businesses sending bulk personalized offers",
      "HR teams sending interview invitations at scale"
    ],
    links: [
      { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/moatazaky/", icon: "fab fa-linkedin" }
    ]
  },
  "zak-hunt": {
    id: "zak-hunt",
    title: "ZAK-Hunt",
    subtitle: "Multi-threaded Cybersecurity Reconnaissance Tool",
    gradient: "linear-gradient(135deg, var(--accent-purple), #ff4757)",
    overview: "ZAK-Hunt is a CLI-based Python tool for cybersecurity professionals and ethical hackers. It combines Nmap for network discovery and Gobuster for directory enumeration into a single multi-threaded reconnaissance workflow, with detailed reporting and logging for security assessments.",
    icon: "fas fa-shield-alt",
    screenshotLabel: "ZAK-Hunt CLI Output",
    keyFeatures: [
      "Multi-threaded scanning for dramatically improved performance",
      "Nmap integration for network discovery and port/service auditing",
      "Gobuster integration for directory and file enumeration",
      "Comprehensive vulnerability assessment and reporting",
      "Detailed output logging for documentation",
      "User-friendly CLI interface"
    ],
    techStack: ["Python", "Nmap", "Gobuster", "Multi-threading", "Linux", "Bash Scripting"],
    useCases: [
      "Penetration testing and network security assessments",
      "Bug bounty reconnaissance automation",
      "Web application security testing",
      "Cybersecurity students and CTF players"
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/Eli0zak/zak-hunt", icon: "fab fa-github" }
    ]
  },
  "software-master": {
    id: "software-master",
    title: "Software Master",
    subtitle: "Professional Software Agency Landing Platform",
    gradient: "linear-gradient(135deg, var(--primary-blue), var(--accent-orange))",
    overview: "A modern, high-performance landing and showcase platform built with TypeScript and React for a software agency. Features smooth animations, service showcases, and a lead generation system designed to convert visitors into clients.",
    icon: "fas fa-laptop-code",
    screenshotLabel: "Software Master Interface",
    keyFeatures: [
      "Modern responsive design with smooth scroll animations",
      "Services and portfolio showcase sections",
      "Performance-optimized with TypeScript",
      "Lead generation contact forms",
      "SEO-optimized structure"
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    useCases: [
      "Software agencies showcasing their work",
      "Tech consultancies building online presence"
    ],
    links: [
      { label: "View on GitHub", url: "https://github.com/Eli0zak/software-master", icon: "fab fa-github" }
    ]
  }
};
