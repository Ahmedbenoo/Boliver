import type { Locale } from "@/i18n/routing";
import type {
  FaqItem,
  HeroContent,
  ProcessStep,
  Service,
  WhyFeature,
} from "@/types";
import { heroData } from "../hero";
import { servicesData } from "../services";
import { processData } from "../process";
import { whyBoliveerData } from "../why-boliveer";
import { faqsData } from "../faqs";
import { clientsData } from "../clients";
import { portfolioData } from "../portfolio";
import { testimonialsData } from "../testimonials";
import { pricingData } from "../pricing";
import { blogData } from "../blog";

const heroDataAr: HeroContent = {
  headline: "ابنِ منتجات رقمية تنمّي أعمالك",
  subheadline:
    "Boliveer شريك للعلامات الطموحة في تصميم وتطوير وإطلاق برمجيات متميزة وحلول ذكاء اصطناعي وأنظمة نمو.",
  primaryCta: { label: "احجز استشارة مجانية", href: "/book-consultation" },
  secondaryCta: { label: "عرض الأعمال", href: "/portfolio" },
  stats: [
    { value: "+120", label: "مشروع منجز" },
    { value: "+8", label: "سنوات خبرة" },
    { value: "98%", label: "رضا العملاء" },
    { value: "24/7", label: "دعم مستمر" },
  ],
  trustBadges: ["جاهز ISO", "مستوى مؤسسي", "تسليم Agile", "محمي NDA"],
  floatingCards: [
    { title: "أتمتة AI", metric: "أسرع 3×", icon: "sparkles" },
    { title: "رفع التحويل", metric: "+42% متوسط", icon: "trending-up" },
    { title: "سرعة الإطلاق", metric: "MVP في 6 أسابيع", icon: "rocket" },
  ],
};

const servicesDataAr: Service[] = servicesData.map((service) => {
  const translations: Record<string, { title: string; description: string; features: string[] }> = {
    "web-development": {
      title: "تطوير المواقع",
      description: "مواقع وتطبيقات ويب عالية الأداء بأحدث الأطر.",
      features: ["Next.js و React", "CMS بدون رأس", "تحسين الأداء"],
    },
    "mobile-apps": {
      title: "تطبيقات الجوال",
      description: "تجارب جوال أصلية ومتعددة المنصات لـ iOS و Android.",
      features: ["React Native", "إطلاق المتاجر", "دعم بدون اتصال"],
    },
    "ai-solutions": {
      title: "حلول الذكاء الاصطناعي",
      description: "أتمتة ذكية وروبوتات محادثة وتكامل AI مخصص.",
      features: ["تكامل OpenAI", "أتمتة سير العمل", "تحليلات تنبؤية"],
    },
    "erp-systems": {
      title: "أنظمة ERP",
      description: "عمليات موحدة مع تخطيط موارد مؤسسي قابل للتوسع.",
      features: ["إدارة المخزون", "وحدات مالية", "صلاحيات حسب الدور"],
    },
    "crm-systems": {
      title: "أنظمة CRM",
      description: "منصات علاقات عملاء تعزز المبيعات والاحتفاظ.",
      features: ["مسار العملاء", "أتمتة البريد", "لوحة تحليلات"],
    },
    "digital-marketing": {
      title: "التسويق الرقمي",
      description: "حملات مدفوعة بالبيانات لزيادة الوصول والتحويل.",
      features: ["إعلانات مدفوعة", "تسويق المحتوى", "تحليلات"],
    },
    "seo": {
      title: "SEO",
      description: "تحسين محركات البحث لزيادة الزيارات العضوية.",
      features: ["SEO تقني", "تحسين المحتوى", "بناء الروابط"],
    },
    "ui-ux-design": {
      title: "تصميم UI/UX",
      description: "واجهات جميلة وسهلة الاستخدام تحول الزوار.",
      features: ["بحث المستخدم", "نماذج أولية", "أنظمة تصميم"],
    },
    "cloud-solutions": {
      title: "حلول سحابية",
      description: "بنية تحتية سحابية آمنة وقابلة للتوسع.",
      features: ["AWS / GCP", "DevOps", "مراقبة"],
    },
    "business-automation": {
      title: "أتمتة الأعمال",
      description: "أتمتة العمليات لتوفير الوقت وتقليل الأخطاء.",
      features: ["تكامل API", "سير عمل", "تقارير"],
    },
  };

  const t = translations[service.slug];
  if (!t) return service;

  return { ...service, title: t.title, description: t.description, features: t.features };
});

const processDataAr: ProcessStep[] = [
  { id: "1", slug: "idea", title: "الفكرة", description: "نفهم رؤيتك وأهدافك", icon: "lightbulb", sortOrder: 1 },
  { id: "2", slug: "planning", title: "التخطيط", description: "خارطة طريق واضحة وجدول زمني", icon: "map", sortOrder: 2 },
  { id: "3", slug: "design", title: "التصميم", description: "واجهات وتجربة مستخدم متميزة", icon: "palette", sortOrder: 3 },
  { id: "4", slug: "development", title: "التطوير", description: "برمجة Agile بجودة عالية", icon: "code", sortOrder: 4 },
  { id: "5", slug: "testing", title: "الاختبار", description: "ضمان الجودة والأمان", icon: "shield-check", sortOrder: 5 },
  { id: "6", slug: "launch", title: "الإطلاق", description: "نشر سلس ومراقبة", icon: "rocket", sortOrder: 6 },
  { id: "7", slug: "growth", title: "النمو", description: "دعم مستمر وتحسين", icon: "trending-up", sortOrder: 7 },
];

const whyBoliveerDataAr: WhyFeature[] = whyBoliveerData.map((item, i) => {
  const titles = ["خبرة مثبتة", "تسليم سريع", "فريق مخصص", "تقنيات حديثة", "دعم مستمر", "قابلية التوسع"];
  const descriptions = [
    "سنوات من المشاريع الناجحة عبر صناعات متعددة.",
    "منهجية Agile تضمن إطلاقاً سريعاً دون التضحية بالجودة.",
    "فريق من المطورين والمصممين مخصص لمشروعك.",
    "Next.js و React و AI وأحدث stack تقني.",
    "دعم 24/7 وصيانة بعد الإطلاق.",
    "بنية قابلة للنمو مع توسع عملك.",
  ];
  return { ...item, title: titles[i] ?? item.title, description: descriptions[i] ?? item.description };
});

const faqsDataAr: FaqItem[] = [
  {
    id: "1",
    question: "كم يستغرق المشروع عادةً؟",
    answer: "تختلف المدة حسب النطاق. صفحة هبوط 2–4 أسابيع، تطبيق ويب أو جوال 8–16 أسبوعاً. نقدم جدولاً تفصيلياً في مرحلة الاكتشاف.",
    sortOrder: 1,
  },
  {
    id: "2",
    question: "هل تعملون مع الشركات الناشئة والمؤسسات؟",
    answer: "نعم. نتشارك مع ناشئين و SMEs ومؤسسات في الرعاية الصحية والتجارة الإلكترونية والعقارات والتعليم وغيرها.",
    sortOrder: 2,
  },
  {
    id: "3",
    question: "هل يمكن دمج الذكاء الاصطناعي في منتجنا؟",
    answer: "بالتأكيد. نبني روبوتات محادثة وأتمتة وتحليلات تنبؤية وتكامل OpenAI مخصص لعملك.",
    sortOrder: 3,
  },
  {
    id: "4",
    question: "ماذا بعد الإطلاق؟",
    answer: "نقدم دعماً وصيانة ومراقبة أداء وتطوير ميزات لضمان استمرار نمو منتجك.",
    sortOrder: 4,
  },
  {
    id: "5",
    question: "كيف نبدأ؟",
    answer: "احجز استشارة مجانية. نناقش أهدافك وجدولك وميزانيتك ثم نقدم خطة مخصصة.",
    sortOrder: 5,
  },
];

export function getHeroData(locale: Locale): HeroContent {
  return locale === "ar" ? heroDataAr : heroData;
}

export function getServicesData(locale: Locale) {
  return locale === "ar" ? servicesDataAr : servicesData;
}

export function getProcessData(locale: Locale) {
  return locale === "ar" ? processDataAr : processData;
}

export function getWhyData(locale: Locale) {
  return locale === "ar" ? whyBoliveerDataAr : whyBoliveerData;
}

export function getFaqsData(locale: Locale) {
  return locale === "ar" ? faqsDataAr : faqsData;
}

export function getClientsData() {
  return clientsData;
}

export function getPortfolioData() {
  return portfolioData;
}

export function getTestimonialsData() {
  return testimonialsData;
}

export function getPricingData() {
  return pricingData;
}

export function getBlogData() {
  return blogData;
}
