import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // Nav
            nav_hero: 'Home',
            nav_solutions: 'Projects',
            nav_timeline: 'Experience',
            nav_skills: 'Arsenal',
            nav_contact: 'Contact',

            // Hero
            hero_status: 'SYSTEM ONLINE',
            hero_operator_id: 'OPERATOR-001',
            hero_name: 'Moataz Zaky',
            hero_bio: 'A strategic Vibe Coder and Integrated Operator specializing in the Learning & Development (L&D) sector. I leverage advanced AI tools (Cursor, Claude, Gemini) to architect smart solutions and streamline complex business operations.',
            hero_cta: 'Explore My Work',
            hero_scroll: 'SCROLL TO EXPLORE',
            hero_titles: [
                'Enterprise Systems Engineer',
                'Integrated Operator',
                'Vibe Coder',
                'L&D Solutions Architect'
            ],
            stat_automation: '100',
            stat_automation_label: 'AI-Driven Output',
            stat_years: '3',
            stat_years_label: 'Years Experience',
            stat_platforms: '∞',
            stat_platforms_label: 'Solutions Architected',

            // Projects Section
            projects_title: 'Projects & Systems Registry',
            projects_subtitle: 'A comprehensive showcase of operational and technical projects built to raise efficiency and drive business growth.',

            // Timeline
            timeline_title: 'OPERATIONS TRAJECTORY',
            timeline_subtitle: 'A ground-up journey through operations, sales, and tech.',
            job1_title: 'Enterprise Systems Engineer & Sr. Ops Specialist',
            job1_company: 'Instant Software Solutions',
            job1_date: 'Dec 2025 – Present',
            job1_desc: 'Leading technical operations as a Senior Operations Specialist, building robust automated pipelines, and managing cross-functional integrations as an Enterprise Systems Engineer.',
            job2_title: 'Project Manager',
            job2_company: 'QUALIFIDERS',
            job2_date: 'Sep 2025 – Nov 2025',
            job2_desc: 'Spearheaded new business development initiatives and optimized internal pipeline tracking mechanics to streamline delivery cycles.',
            job3_title: 'Sales Manager & Coordinator',
            job3_company: 'Barah Co-working Space',
            job3_date: 'Jul 2024 – Oct 2025',
            job3_desc: 'Led the sales team, orchestrated scheduling workflows, and executed direct outbound sales processes to exceed acquisition targets.',
            job4_title: 'Integrated Operator & Vibe Coder',
            job4_company: 'Freelance / Independent Projects',
            job4_date: '2021 – Present',
            job4_desc: 'Leveraging AI tools to architect custom web applications and L&D operational systems. Specializing in Supabase and automation pipelines.',
            job5_title: 'Previous Roles',
            job5_company: 'Optical Soft | Teleperformance | Americana Group',
            job5_date: 'Jun 2023 – May 2025',
            job5_desc: 'Built a strong foundation in customer service, sales, and operations across diverse industries.',

            // Skills
            skills_title: 'THE INTEGRATED ARSENAL',
            skills_subtitle: 'Tools that power the operation.',
            skills_ops: 'Operations & L&D Logic',
            skills_ai: 'AI-Powered Vibe Coding',
            skills_secure: 'Secure Infrastructure',

            // Contact
            contact_title: 'ESTABLISH CONNECTION',
            contact_tagline: 'Need an Integrated Operator to streamline your L&D business?',
            contact_subtitle: '"Turning a big dream into a big reality."',
            contact_name: 'Your Name',
            contact_email: 'Your Email',
            contact_message: 'Your Message',
            contact_send: 'Send Transmission',
            contact_linkedin: 'LinkedIn',
            contact_github: 'GitHub',
            contact_email_link: 'Email',
            contact_whatsapp: 'WhatsApp',

            // Footer
            footer_copy: '© 2026 Moataz Zaky — Vibe Coder & Integrated Operator',
            footer_quote: '"Turning a big dream into a big reality."',
        }
    },
    ar: {
        translation: {
            // Nav
            nav_hero: 'الرئيسية',
            nav_solutions: 'المشاريع',
            nav_timeline: 'المسيرة',
            nav_skills: 'الترسانة',
            nav_contact: 'تواصل',

            // Hero
            hero_status: 'النظام يعمل',
            hero_operator_id: 'المشغل-٠٠١',
            hero_name: 'معتز زكي',
            hero_bio: 'مطور بأسلوب Vibe Coder ومشغل متكامل (Integrated Operator) متخصص في إيجاد حلول ذكية لقطاع التدريب والتطوير (L&D). بعتمد على أدوات الذكاء الاصطناعي زي Cursor و Claude و Gemini عشان أبني أنظمة متطورة وأبسط العمليات التشغيلية للشركات.',
            hero_cta: 'استكشف أعمالي',
            hero_scroll: 'مرر للاستكشاف',
            hero_titles: [
                'مهندس أنظمة مؤسسية',
                'المشغل المتكامل',
                'Vibe Coder',
                'مهندس حلول التدريب والتطوير'
            ],
            stat_automation: '100',
            stat_automation_label: 'إنتاجية بالذكاء الاصطناعي',
            stat_years: '3',
            stat_years_label: 'سنوات خبرة',
            stat_platforms: '∞',
            stat_platforms_label: 'حلول تم هندستها',

            // Projects Section
            projects_title: 'سجل المشاريع والأنظمة',
            projects_subtitle: 'استعراض شامل للمشاريع التشغيلية والتقنية التي قمت بتطويرها أو إدارتها لرفع الكفاءة ودعم نمو الأعمال.',

            // Timeline
            timeline_title: 'المسار المهني',
            timeline_subtitle: 'رحلة من الأسفل للأعلى في العمليات والمبيعات والتقنية.',
            job1_title: 'مهندس أنظمة مؤسسية وأخصائي عمليات أول (Senior Operations Specialist)',
            job1_company: 'Instant Software Solutions',
            job1_date: 'ديسمبر ٢٠٢٥ – الآن',
            job1_desc: 'قيادة العمليات التقنية كأخصائي عمليات أول، وهندسة مسارات الأتمتة وإدارة التكامل بين الأنظمة كمهندس أنظمة مؤسسية لتبسيط بيئة العمل.',
            job2_title: 'مدير مشاريع',
            job2_company: 'QUALIFIDERS',
            job2_date: 'سبتمبر ٢٠٢٥ – نوفمبر ٢٠٢٥',
            job2_desc: 'قيادة مبادرات تطوير الأعمال الجديدة وتحسين آليات تتبع المشاريع الداخلية لتسريع دورات التسليم والعمليات التكتيكية.',
            job3_title: 'مدير مبيعات ومنسق حجوزات',
            job3_company: 'Barah Co-working Space',
            job3_date: 'يوليو ٢٠٢٤ – أكتوبر ٢٠٢٥',
            job3_desc: 'قيادة فريق المبيعات، تنسيق مسارات الحجوزات، وتنفيذ عمليات المبيعات المباشرة لتحقيق أهداف الاستحواذ على العملاء وتجاوزها.',
            job4_title: 'المشغل المتكامل ومطور Vibe Coder',
            job4_company: 'عمل حر / مشاريع مستقلة',
            job4_date: '٢٠٢١ – الآن',
            job4_desc: 'استخدام أدوات الذكاء الاصطناعي لبناء تطبيقات ويب وأنظمة تشغيلية مخصصة، مع التركيز على قواعد بيانات Supabase ومسارات الأتمتة.',
            job5_title: 'أدوار سابقة',
            job5_company: 'Optical Soft | Teleperformance | Americana Group',
            job5_date: 'يونيو ٢٠٢٣ – مايو ٢٠٢٥',
            job5_desc: 'بناء أساس متين في خدمة العملاء والمبيعات والعمليات عبر قطاعات متنوعة.',

            // Skills
            skills_title: 'الترسانة المتكاملة',
            skills_subtitle: 'الأدوات التي تُشغّل العملية.',
            skills_ops: 'العمليات والمنطق البرمجي',
            skills_ai: 'التطوير بالذكاء الاصطناعي',
            skills_secure: 'البنية التحتية الآمنة',

            // Contact
            contact_title: 'أنشئ اتصالاً',
            contact_tagline: 'محتاج مشغل متكامل يسهل عمليات شركتك بذكاء؟',
            contact_subtitle: '"تحويل حلم كبير إلى واقع كبير."',
            contact_name: 'اسمك',
            contact_email: 'بريدك الإلكتروني',
            contact_message: 'رسالتك',
            contact_send: 'إرسال',
            contact_linkedin: 'لينكدإن',
            contact_github: 'جيتهاب',
            contact_email_link: 'بريد إلكتروني',
            contact_whatsapp: 'واتساب',

            // Footer
            footer_copy: '© 2026 معتز زكي — Vibe Coder ومشغل متكامل',
            footer_quote: '"تحويل حلم كبير إلى واقع كبير."',
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
