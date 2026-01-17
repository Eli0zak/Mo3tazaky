export const projectsData = {
    "zak-hunt": {
        id: "zak-hunt",
        title: "ZAK-Hunt",
        subtitle: "Multi-threaded Cybersecurity Reconnaissance Tool",
        gradient: "linear-gradient(135deg, var(--primary-blue), var(--accent-purple))",
        overview: "ZAK-Hunt is a powerful reconnaissance tool designed for cybersecurity professionals and ethical hackers. It integrates Nmap and Gobuster to provide comprehensive network security assessment and vulnerability exploration through an efficient multi-threaded architecture.",
        icon: "fas fa-image",
        screenshotLabel: "Screenshot Placeholder",
        keyFeatures: [
            "Multi-threaded scanning for improved performance",
            "Integration with Nmap for network discovery and security auditing",
            "Gobuster integration for directory and file enumeration",
            "Comprehensive vulnerability assessment capabilities",
            "Detailed reporting and logging",
            "User-friendly command-line interface"
        ],
        techStack: ["Python", "Nmap", "Gobuster", "Multi-threading", "Linux", "Bash Scripting"],
        useCases: [
            "Network security assessments and penetration testing",
            "Vulnerability discovery and exploitation research",
            "Web application security testing",
            "Educational purposes for cybersecurity students"
        ],
        links: [
            { label: "View on GitHub", url: "https://github.com/Eli0zak/zak-hunt", icon: "fab fa-github" }
        ]
    },
    "pettouch": {
        id: "pettouch",
        title: "PetTouch",
        subtitle: "Comprehensive Smart Pet Management Platform",
        gradient: "linear-gradient(135deg, var(--primary-blue), var(--accent-green))",
        overview: "PetTouch is an innovative web application designed to help pet owners manage their pets' information, safety, and health. Featuring cutting-edge NFC tag integration, a 'Lost Mode' to help find missing pets, and a comprehensive dashboard for medical records and reminders. The platform supports both Arabic and English to serve a wider audience.",
        icon: "fas fa-paw",
        screenshotLabel: "PetTouch Interface Screenshot",
        keyFeatures: [
            "Smart NFC Tag Integration for instant pet identification",
            "Digital Pet Profile with medical history and vaccination records",
            "'Lost Mode' with geolocation alerts",
            "Multilingual Support (Arabic & English) with i18n",
            "Responsive React Dashboard with Dark Mode support",
            "Secure Authentication and Data Storage via Supabase"
        ],
        techStack: ["React.js", "TypeScript", "Supabase (Auth & DB)", "Tailwind CSS", "i18next", "Leaflet Maps"]
    },
    "whatsapp-automation": {
        id: "whatsapp-automation",
        title: "WhatsApp Automation",
        subtitle: "Advanced Chrome Extension for Automated Messaging",
        gradient: "linear-gradient(135deg, var(--primary-blue), #25D366)",
        overview: "A powerful Chrome extension designed to streamline communication for businesses and educational institutions. This tool automates sending personalized WhatsApp messages from Excel sheets, featuring intelligent delay mechanisms to preventing banning, dynamic template variables, and progress tracking.",
        icon: "fab fa-whatsapp",
        screenshotLabel: "Extension Interface Screenshot",
        keyFeatures: [
            "Excel file parsing for contact lists",
            "Dynamic message templates with placeholders (e.g., {Name}, {Date})",
            "Intelligent random delays to simulate human behavior and avoid bans",
            "Real-time progress bar and status dashboard",
            "Pause/Resume functionality",
            "Chrome Storage integration for saving templates"
        ],
        techStack: ["JavaScript (ES6+)", "Chrome Extensions MVC", "SheetJS (XLSX)", "HTML5 & CSS3", "DOM Manipulation"]
    },
    "instant-academy": {
        id: "instant-academy",
        title: "Instant Academy CRM",
        subtitle: "Educational Institution Management System",
        gradient: "linear-gradient(135deg, var(--primary-blue), #FF6B6B)",
        overview: "A comprehensive Customer Relationship Management (CRM) system tailored for Instant Academy. This robust application handles student lifecycle management, session scheduling, automated reporting, and seamless Zoom integration for remote learning sessions.",
        icon: "fas fa-chart-bar",
        screenshotLabel: "CRM Dashboard Screenshot",
        keyFeatures: [
            "Student database & lead management",
            "Automated session scheduling & Zoom link generation",
            "Instructor dashboard for session tracking",
            "Financial reporting and payment status tracking",
            "Role-based access control (Admin, Instructor, Staff)",
            "Automated email/WhatsApp notifications"
        ],
        techStack: ["React", "Node.js", "PostgreSQL", "Zoom API", "Express.js", "Material UI"]
    }
};
