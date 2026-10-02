export const BRAND = {
  name: "AZ Digital Services",
  shortName: "AZ",
  tagline: "Your Idea • Our Skills",
  taglineArabic: "فكرتك • مهاراتنا",
  taglineFrench: "Votre Idée • Nos Compétences",
  description: "Web, Mobile & Desktop Development • Design • Digital Marketing • Creative Services",
  heroTitle: "Your Idea.\nOur Digital Solutions.",
  heroSubtitle: "Web, Mobile & Desktop Development • Design • Digital Marketing • Creative Services",
  actionLineFrench: "Envoyez vos fichiers • Demandez un service • Parlons de votre projet",
  actionLineArabic: "أرسل ملفاتك • اطلب خدمتك • تواصل معنا",
  websiteUrl: "https://azdigitalservices.com",
};

/**
 * CONTACT CONFIGURATION
 * Centralized in @/config/contact.ts
 */
export {
  CONTACT_CONFIG,
  WHATSAPP_PHONE_PLACEHOLDER,
  WHATSAPP_DISPLAY_PLACEHOLDER,
  WHATSAPP_MESSAGE,
  WHATSAPP_LINK,
  GMAIL_EMAIL_PLACEHOLDER,
  GMAIL_SUBJECT,
  GMAIL_BODY,
  GMAIL_LINK,
} from "@/config/contact";

/**
 * QR CODE CONFIGURATION
 * The QR code targets the AZ Digital Services landing page URL.
 */
export const QR_CODE_PLACEHOLDER = "https://azdigitalservices.com";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitleEn?: string;
  category: "development" | "design" | "marketing" | "academic";
  iconName: string;
  summary: string;
  features: string[];
  gradient: string;
  accentColor: string;
  badge?: string;
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  // ==========================================
  // 💻 التطوير الرقمي (Digital Development)
  // ==========================================
  {
    id: "mobile-dev",
    number: "01",
    title: "تطوير تطبيقات الهاتف",
    subtitleEn: "Mobile App Development",
    category: "development",
    iconName: "Smartphone",
    summary: "برمجة وتطوير تطبيقات هواتف ذكية متكاملة لأنظمة Android و iOS بأداء سريع وواجهات مستخدم عصرية وسلسة.",
    features: [
      "تطبيقات Android و iOS أصلية وهجينة",
      "واجهات تفاعلية بتجربة مستخدم متميزة",
      "ربط السحابة وقواعد البيانات (Cloud Sync)",
      "نظام إشعارات وتنبيهات فورية للمستخدمين"
    ],
    gradient: "from-cyan-600/20 via-blue-500/10 to-transparent",
    accentColor: "#00F0FF",
    badge: "الأكثر طلبًا",
    popular: true
  },
  {
    id: "website-dev",
    number: "02",
    title: "تطوير مواقع الويب",
    subtitleEn: "Website Development",
    category: "development",
    iconName: "Globe",
    summary: "إنشاء مواقع إلكترونية عصرية متجاوبة وسريعة ومحسنة لمحركات البحث (SEO) تعزز تواجدك الرقمي ومبيعاتك.",
    features: [
      "مواقع متوافقة 100% مع الهواتف والشاشات",
      "سرعة تحميل فائقة وتوافق كامل مع SEO",
      "لوحات تحكم مرنة لإدارة المحتوى بسهولة",
      "حماية وأمان عالي وفق أفضل المعايير"
    ],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accentColor: "#38BDF8",
    badge: "حل أساسي",
    popular: true
  },
  {
    id: "web-apps",
    number: "03",
    title: "تطوير تطبيقات الويب",
    subtitleEn: "Web Applications",
    category: "development",
    iconName: "Layout",
    summary: "بناء منصات ويب متقدمة وأنظمة سحابية وبوابات عملاء مخصصة لإدارة العمليات والبيانات بكل كفاءة.",
    features: [
      "منصات سحابية تفاعلية مخصصة (SaaS)",
      "أنظمة التجارة الإلكترونية والدفع الرقمي",
      "بوابات عملاء ولوحات تحكم متقدمة",
      "واجهات برمجية RESTful APIs قوية وآمنة"
    ],
    gradient: "from-indigo-600/20 via-purple-500/10 to-transparent",
    accentColor: "#818CF8",
    badge: "منصات متقدمة"
  },
  {
    id: "desktop-apps",
    number: "04",
    title: "تطوير تطبيقات سطح المكتب",
    subtitleEn: "Desktop Applications",
    category: "development",
    iconName: "Monitor",
    summary: "برمجيات قوية لنظام Windows لإدارة الشركات والمخازن والفوترة ونقاط البيع بكفاءة واستقرار تام.",
    features: [
      "برامج تسيير المؤسسات والشركات (ERP / CRM)",
      "أنظمة نقاط البيع وإدارة المخزون والفوترة",
      "عمل موثوق بدون إنترنت (Offline-First)",
      "قواعد بيانات محلية مشفرة وسريعة الاستجابة"
    ],
    gradient: "from-sky-600/20 via-blue-500/10 to-transparent",
    accentColor: "#60A5FA",
    badge: "إدارة الأعمال"
  },

  // ==========================================
  // 🎨 التصميم والإبداع (Design & Creativity)
  // ==========================================
  {
    id: "graphic-design",
    number: "05",
    title: "التصميم الجرافيكي",
    subtitleEn: "Graphic Design",
    category: "design",
    iconName: "Palette",
    summary: "ابتكار هويات بصرية مميزة، شعارات احترافية، وبوسترات إعلانية تعكس جودة علامتك التجارية وتجذب العملاء.",
    features: [
      "تصميم الشعارات والهويات البصرية الكاملة",
      "بوسترات إعلانية وتصاميم سوشيال ميديا",
      "مطبوعات تسويقية وكتيّبات تجارية فاخرة",
      "تسليم ملفات فكتور ومصدرية عالية الدقة"
    ],
    gradient: "from-fuchsia-600/20 via-purple-500/10 to-transparent",
    accentColor: "#E879F9",
    badge: "هوية بصرية",
    popular: true
  },
  {
    id: "ui-design",
    number: "06",
    title: "تصميم واجهات التطبيقات",
    subtitleEn: "UI / UX Application Design",
    category: "design",
    iconName: "Layers",
    summary: "تصميم واجهات مستخدم حديثة وأنيقة وتجربة تفاعلية مريحة (UI/UX) تضمن سهولة استخدام التطبيق.",
    features: [
      "دراسة مسار المستخدم وتجربة الاستخدام (UX)",
      "تصميم واجهات عصرية بصرية جذابة (UI)",
      "أنظمة تصميم متكاملة (Design Systems)",
      "ملفات جاهزة للمطورين متوافقة مع Figma"
    ],
    gradient: "from-purple-600/20 via-cyan-500/10 to-transparent",
    accentColor: "#C084FC",
    badge: "تصميم عصري"
  },
  {
    id: "app-prototype",
    number: "07",
    title: "تصميم النماذج الأولية للتطبيقات",
    subtitleEn: "Application Prototype",
    category: "design",
    iconName: "Sparkles",
    summary: "تحويل فكرتك إلى نموذج تفاعلي وقابل للنقر (Prototype) لتجربة التطبيق وعرضه على الشركاء والمستثمرين.",
    features: [
      "محاكاة تفاعلية حية لتطبيق الهاتف أو الموقع",
      "اختبار تجربة المستخدم قبل البدء بالبرمجة",
      "عرض أولي مقنع للمستثمرين وأصحاب المشاريع",
      "توفير كبير في وقت وتكاليف التطوير المبكر"
    ],
    gradient: "from-cyan-600/20 via-purple-500/10 to-transparent",
    accentColor: "#22D3EE",
    badge: "نموذج تفاعلي"
  },
  {
    id: "powerpoint-design",
    number: "08",
    title: "تصميم عروض PowerPoint",
    subtitleEn: "PowerPoint Presentations",
    category: "design",
    iconName: "Presentation",
    summary: "تصميم شرائح PowerPoint راقية ومقنعة للاجتماعات، عروض الأعمال الاستثمارية، والمؤتمرات الكبرى.",
    features: [
      "تصميم احترافي مخصص لهوية شركتك",
      "مخططات ورسوم بيانية وانفوجرافيك مالي",
      "حركات انتقالية أنيقة وجاذبة للانتباه",
      "ملفات مفتوحة قابلة للتعديل والتقديم المباشر"
    ],
    gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    accentColor: "#FB923C",
    badge: "عروض تنفيذية"
  },
  {
    id: "canva-design",
    number: "09",
    title: "تصميم عروض Canva",
    subtitleEn: "Canva Presentations",
    category: "design",
    iconName: "FileCheck",
    summary: "قوالب وعروض تقديمية تفاعلية على منصة Canva بتصاميم حصرية تمكّنك من التعديل والمشاركة الفورية.",
    features: [
      "قوالب Canva حصرية وسهلة التعديل",
      "تنسيقات ملائمة للمشاركة والعرض المباشر",
      "ألوان وخطوط متناسقة تخدم هويتك",
      "روابط مشاركة سحابية فورية مع فريقك"
    ],
    gradient: "from-teal-600/20 via-cyan-500/10 to-transparent",
    accentColor: "#2DD4BF",
    badge: "مرونة وسرعة"
  },

  // ==========================================
  // 📱 التسويق الرقمي (Digital Marketing)
  // ==========================================
  {
    id: "advertising-promo",
    number: "10",
    title: "الإشهار والترويج",
    subtitleEn: "Advertising & Promotion",
    category: "marketing",
    iconName: "TrendingUp",
    summary: "إعداد استراتيجيات ترويجية متكاملة لزيادة الوعي بعلامتك التجارية وجذب عملاء جدد وتحقيق نمو حقيقي.",
    features: [
      "خطط ترويجية وحملات انتشار شاملة",
      "استهداف دقيق للشريحة المهتمة بمنتجك",
      "صناعة محتوى تسويقي إبداعي ومقنع",
      "تحليل مؤشرات الأداء ورفع معدل التحويل"
    ],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "#34D399",
    badge: "نمو الأعمال",
    popular: true
  },
  {
    id: "video-montage",
    number: "11",
    title: "مونتاج وتعديل الفيديوهات",
    subtitleEn: "Video Montage & Editing",
    category: "marketing",
    iconName: "Film",
    summary: "مونتاج سينمائي عالي الجودة، فيديوهات Reels وتيك توك سريعة وتفاعلية، وإعلانات مرئية تلفت الأنظار.",
    features: [
      "مونتاج فيديوهات إعلانية وتجارية جذابة",
      "محتوى ريلز وتيك توك وشورتس عالي التفاعل",
      "مؤثرات بصرية ومؤثرات صوتية متقنة",
      "تصحيح ألوان وإخراج بجودة 4K فائقة"
    ],
    gradient: "from-violet-600/20 via-pink-500/10 to-transparent",
    accentColor: "#A78BFA",
    badge: "محتوى مرئي",
    popular: true
  },
  {
    id: "photography",
    number: "12",
    title: "التصوير الفوتوغرافي",
    subtitleEn: "Photography",
    category: "marketing",
    iconName: "Camera",
    summary: "جلسات تصوير احترافية للمنتجات التجارية، مقرات العمل، والأحداث الرسمية لإبراز قيمتها الحقيقية.",
    features: [
      "تصوير منتجات تجارية بجودة استوديو",
      "تغطية احترافية للفعاليات والمؤتمرات",
      "معالجة رقمية متقدمة وإضاءة مدروسة",
      "تسليم صور جاهزة للنشر والطباعة مباشرة"
    ],
    gradient: "from-blue-600/20 via-teal-500/10 to-transparent",
    accentColor: "#38BDF8",
    badge: "تصوير احترافي"
  },
  {
    id: "sponsor-campaigns",
    number: "13",
    title: "Sponsor",
    subtitleEn: "Sponsored Campaigns",
    category: "marketing",
    iconName: "Megaphone",
    summary: "إدارة وضبط الحملات الإعلانية الممولة (Sponsor) على منصات التواصل للوصول لأكبر عدد من المهتمين.",
    features: [
      "إدارة ميزانيات الحملات الإعلانية الممولة",
      "استهداف جغرافي واهتمامات بدقة عالية",
      "A/B Testing لاختيار أفضل النماذج ربحية",
      "تقارير دورية شفافة بنسب العائد والوصول"
    ],
    gradient: "from-rose-600/20 via-amber-500/10 to-transparent",
    accentColor: "#F43F5E",
    badge: "إعلانات ممولة"
  },

  // ==========================================
  // 🎓 الخدمات الأكاديمية والمهنية (Academic & Professional)
  // ==========================================
  {
    id: "graduation-theses",
    number: "14",
    title: "مذكرات التخرج",
    subtitleEn: "Graduation Theses / Mémoires",
    category: "academic",
    iconName: "GraduationCap",
    summary: "مرافقة متكاملة لإنجاز مذكرات ومشاريع التخرج: صياغة المحتوى، تنسيق المستندات، وبرمجة النظم التقنية.",
    features: [
      "تنسيق تقني ومنهجي متوافق مع الجامعات",
      "برمجة وتطوير الأنظمة التقنية المصاحبة",
      "توثيق علمي وتدقيق شامل للمراجع",
      "مرافقة واستعداد كامل للمناقشة الشفهية"
    ],
    gradient: "from-amber-600/20 via-cyan-500/10 to-transparent",
    accentColor: "#FBBF24",
    badge: "دعم تخرج",
    popular: true
  },
  {
    id: "academic-research",
    number: "15",
    title: "البحوث",
    subtitleEn: "Research",
    category: "academic",
    iconName: "FileText",
    summary: "إعداد وتنسيق الأوراق العلمية والبحوث الأكاديمية وفق الأصول المنهجية المعتمدة في المجلات والمؤسسات.",
    features: [
      "صياغة أكاديمية رصينة ومحكمة",
      "تنسيق المعايير الدولية (IEEE, APA, Harvard)",
      "تنظيم الجداول والرسوم البيانية والمصادر",
      "مراجعة دقيقة لسلامة المنهجية والتوثيق"
    ],
    gradient: "from-emerald-600/20 via-sky-500/10 to-transparent",
    accentColor: "#34D399",
    badge: "بحث علمي"
  },
  {
    id: "defense-presentations",
    number: "16",
    title: "العروض التقديمية",
    subtitleEn: "Presentations",
    category: "academic",
    iconName: "Presentation",
    summary: "تصميم عروض تقديمية مميزة لمناقشات مذكرات التخرج تلخص جوهر المشروع بوضوح وتسلسل يثير إعجاب اللجنة.",
    features: [
      "تسلسل مرئي منطقي يسهل شرح البحث",
      "تصميم شرائح تفاعلية توضح أهم النتائج",
      "دعم متعدد اللغات (عربية، فرنسية، إنجليزية)",
      "جاهزية كاملة ليوم المناقشة والدفاع (Soutenance)"
    ],
    gradient: "from-indigo-600/20 via-purple-500/10 to-transparent",
    accentColor: "#818CF8",
    badge: "عروض مناقشة"
  },
  {
    id: "professional-documents",
    number: "17",
    title: "الوثائق المهنية",
    subtitleEn: "Professional Documents",
    category: "academic",
    iconName: "FileCheck",
    summary: "تصميم وتنسيق التقارير الرسمية، وثائق العمل، دراسات الجدوى، والسير الذاتية بأسلوب احترافي رفيع.",
    features: [
      "تقارير مهنية ودراسات جدوى مفصلة ومقنعة",
      "تنسيق سير ذاتية تنفيذية (Executive CVs)",
      "نماذج عقود ووثائق مؤسسية منظمة",
      "تصدير بصيغ PDF جاهزة للطباعة والمشاركة"
    ],
    gradient: "from-cyan-600/20 via-blue-500/10 to-transparent",
    accentColor: "#06B6D4",
    badge: "وثائق رسمية"
  }
];

export const WHY_AZ_FEATURES = [
  {
    id: "custom-solutions",
    title: "حلول مخصصة",
    description: "نصمم ونطور حلولًا تناسب احتياجاتك وفكرتك.",
    icon: "Lightbulb",
    emoji: "💡",
    accentColor: "#FBBF24"
  },
  {
    id: "modern-digital",
    title: "حلول رقمية عصرية",
    description: "نستخدم تقنيات حديثة لبناء تجارب رقمية سريعة وعملية.",
    icon: "Rocket",
    emoji: "🚀",
    accentColor: "#00F0FF"
  },
  {
    id: "creativity-design",
    title: "إبداع وتصميم",
    description: "نهتم بالتفاصيل والتصميم لتقديم هوية وتجربة احترافية.",
    icon: "Palette",
    emoji: "🎨",
    accentColor: "#E879F9"
  },
  {
    id: "direct-contact",
    title: "تواصل مباشر",
    description: "تواصل معنا مباشرة عبر WhatsApp أو Gmail لمناقشة مشروعك.",
    icon: "MessageCircle",
    emoji: "🤝",
    accentColor: "#34D399"
  },
  {
    id: "full-services",
    title: "خدمات متكاملة",
    description: "من الفكرة والتصميم إلى التطوير والتنفيذ.",
    icon: "Wrench",
    emoji: "🛠️",
    accentColor: "#38BDF8"
  },
  {
    id: "cross-platform",
    title: "حلول لمختلف المنصات",
    description: "تطبيقات الهاتف، مواقع الويب، تطبيقات الويب وتطبيقات سطح المكتب.",
    icon: "MonitorSmartphone",
    emoji: "📱",
    accentColor: "#818CF8"
  }
];

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  gradient: string;
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "enterprise-commerce",
    name: "Enterprise Commerce & Inventory Platform",
    category: "Web & Business Software",
    description: "A centralized web platform for real-time inventory management, multi-currency invoicing, and high-speed sales tracking.",
    details: "Engineered for high transactional throughput with instant visual analytics, role-based access control, exportable financial statements, and automated WhatsApp/email invoice dispatches.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API", "PostgreSQL"],
    features: ["Real-time KPI graphs", "Automated invoice generator", "Granular role management", "Multi-language UI"],
    deliverables: ["Cloud Web Application", "Executive Admin Panel", "Technical Documentation"],
    gradient: "from-blue-600/30 to-cyan-500/20"
  },
  {
    id: "delivery-tracking-app",
    name: "Fleet & On-Demand Delivery Mobile App",
    category: "Mobile Application",
    description: "Cross-platform mobile solution providing route optimization, driver telemetry, and live order dispatch.",
    details: "Built with fluid touch responsiveness, offline-first order sync, push notifications for status updates, and interactive map routing.",
    technologies: ["React Native", "TypeScript", "Firebase", "Geolocation", "Cloud Functions"],
    features: ["Live GPS map tracking", "Driver status toggle", "Customer signature capture", "Push alerts"],
    deliverables: ["Android APK / Play Store Ready", "iOS App Bundle", "Cloud Dispatch API"],
    gradient: "from-cyan-600/30 to-teal-500/20"
  },
  {
    id: "academic-defense-system",
    name: "Academic Thesis & Defense Presentation Suite",
    category: "Graduation & Academic",
    description: "An end-to-end master's graduation project suite with scientific manuscript formatting, demonstration software, and keynote deck.",
    details: "Complete technical solution crafted for academic excellence: structured strictly according to university criteria, accompanied by custom algorithms, test evaluations, and an executive presentation slide deck.",
    technologies: ["Python", "FastAPI", "LaTeX", "PowerPoint / Canva", "Data Analysis"],
    features: ["IEEE/APA document compliance", "Experimental benchmark charts", "Interactive demo UI", "Defense slide deck"],
    deliverables: ["Formatted Thesis Manuscript (PDF)", "Source Code Repository", "Defense Slide Deck"],
    gradient: "from-purple-600/30 to-indigo-500/20"
  },
  {
    id: "brand-creative-rebrand",
    name: "Commercial Brand Identity & Motion Showcase",
    category: "Creative & Graphic Design",
    description: "Complete visual rebranding including vector monogram, commercial product photography, social media kits, and promotional video montage.",
    details: "Holistic creative package developed to position the brand at a premium market tier, driving engagement across social media advertising campaigns.",
    technologies: ["Illustrator", "Photoshop", "Premiere Pro", "After Effects", "Figma"],
    features: ["Vector brand kit & typography", "High-retention 4K promo video", "Social media design grid", "Print billboard assets"],
    deliverables: ["Vector Master Files", "4K Video Reels", "Brand Identity Guidelines"],
    gradient: "from-pink-600/30 to-purple-600/20"
  }
];
