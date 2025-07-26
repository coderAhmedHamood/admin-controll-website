import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ar';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  // Navigation
  home: 'الرئيسية',
  services: 'الخدمات',
  projects: 'المشاريع',
  about: 'من نحن',
  contact: 'اتصل بنا',
  register: 'التسجيل كعميل',
  leadership: 'القيادة',
  testimonials: 'شهادات العملاء',
  faq: 'الأسئلة الشائعة',
  vision2030: 'رؤية 2030',
  
  // Company
  companyName: 'شركة أوج الدولية للمقاولات',
  tagline: 'التميز في البناء',
  
  // Homepage
  heroTitle: 'نبني المملكة العربية السعودية الغد',
  heroSubtitle: 'شركة أوج الدولية للمقاولات - شريكك الموثوق في التميز الإنشائي، متماشياً مع رؤية 2030',
  getStarted: 'ابدأ الآن',
  viewProjects: 'اطلع على المشاريع',
  viewOurWork: 'اطلع على أعمالنا',
  
  // About
  aboutTitle: 'حول شركة أوج الدولية',
  aboutText: 'مع أكثر من عقدين من التميز في صناعة البناء، تقف شركة أوج الدولية كمنارة للجودة والابتكار في المملكة العربية السعودية.',
  
  // Services
  servicesTitle: 'خدماتنا',
  servicesSubtitle: 'حلول إنشائية شاملة للمملكة العربية السعودية الحديثة',
  commercialConstruction: 'البناء التجاري',
  residentialProjects: 'المشاريع السكنية',
  industrialConstruction: 'البناء الصناعي',
  
  // Projects
  projectsTitle: 'مشاريعنا',
  projectsSubtitle: 'عرض التميز عبر مشاريع البناء المتنوعة',
  commercial: 'تجاري',
  residential: 'سكني',
  industrial: 'صناعي',
  completed: 'مكتمل',
  inProgress: 'قيد التنفيذ',
  planning: 'قيد التخطيط',
  
  // Contact
  contactTitle: 'اتصل بنا',
  contactSubtitle: 'تواصل مع فريق الخبراء لدينا',
  phone: 'الهاتف',
  email: 'البريد الإلكتروني',
  address: 'العنوان',
  
  // Footer
  quickLinks: 'روابط سريعة',
  contactInfo: 'معلومات الاتصال',
  allRightsReserved: 'جميع الحقوق محفوظة',
  
  // Stats
  projectsCompleted: 'المشاريع المنجزة',
  happyClients: 'العملاء السعداء',
  yearsExperience: 'سنوات الخبرة',
  successRate: 'معدل النجاح',
  
  // Admin Panel
  adminPanel: 'لوحة التحكم',
  dashboard: 'لوحة المعلومات',
  contentManagement: 'إدارة المحتوى',
  projectManagement: 'إدارة المشاريع',
  userManagement: 'إدارة المستخدمين',
  settings: 'الإعدادات',
  logout: 'تسجيل الخروج',
  login: 'تسجيل الدخول',
  
  // Dashboard
  totalProjects: 'إجمالي المشاريع',
  activeClients: 'العملاء النشطون',
  siteVisitors: 'زوار الموقع',
  testimonials: 'الشهادات',
  recentActivity: 'النشاط الأخير',
  upcomingTasks: 'المهام القادمة',
  quickActions: 'إجراءات سريعة',
  
  // Content Management
  editContent: 'تحرير المحتوى',
  saveChanges: 'حفظ التغييرات',
  preview: 'معاينة',
  publish: 'نشر',
  draft: 'مسودة',
  
  // Project Management
  addProject: 'إضافة مشروع',
  editProject: 'تحرير المشروع',
  deleteProject: 'حذف المشروع',
  projectDetails: 'تفاصيل المشروع',
  projectName: 'اسم المشروع',
  projectDescription: 'وصف المشروع',
  projectCategory: 'فئة المشروع',
  projectStatus: 'حالة المشروع',
  projectValue: 'قيمة المشروع',
  projectLocation: 'موقع المشروع',
  projectClient: 'عميل المشروع',
  projectDuration: 'مدة المشروع',
  
  // Common
  save: 'حفظ',
  cancel: 'إلغاء',
  edit: 'تعديل',
  delete: 'حذف',
  add: 'إضافة',
  search: 'بحث',
  filter: 'تصفية',
  all: 'الكل',
  loading: 'جاري التحميل...',
  success: 'تم بنجاح',
  error: 'خطأ',
  confirm: 'تأكيد',
  yes: 'نعم',
  no: 'لا',
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'ar', t }}>
      <div dir="rtl" className="font-arabic">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};