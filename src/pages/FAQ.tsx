import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { key: 'all', label: 'جميع الأسئلة' },
    { key: 'general', label: 'عام' },
    { key: 'services', label: 'الخدمات' },
    { key: 'projects', label: 'Project Management' },
    { key: 'pricing', label: 'التسعير' },
    { key: 'timeline', label: 'الجدول الزمني' },
    { key: 'quality', label: 'معايير الجودة' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'ما هي أنواع مشاريع البناء التي تتعامل معها شركة أوج الدولية؟',
      answer: 'تتخصص شركة أوج الدولية في مجموعة واسعة من مشاريع البناء بما في ذلك المباني التجارية والتطويرات السكنية والمرافق الصناعية ومشاريع البنية التحتية وأعمال التجديد. لدينا خبرة واسعة في مباني المكاتب ومراكز التسوق والفلل الفاخرة ومصانع التصنيع والمستودعات ومشاريع الأشغال العامة.'
    },
    {
      id: 2,
      category: 'general',
      question: 'منذ متى تعمل شركة أوج الدولية في السوق؟',
      answer: 'تخدم شركة أوج الدولية العملاء في المملكة العربية السعودية لأكثر من 24 عاماً منذ تأسيسها في عام 2000. خلال هذا الوقت، أنجزنا بنجاح أكثر من 200 مشروع وبنينا علاقات قوية مع العملاء عبر مختلف الصناعات.'
    },
    {
      id: 3,
      category: 'services',
      question: 'هل تقدمون خدمات التصميم والهندسة المعمارية؟',
      answer: 'نعم، نقدم خدمات التصميم والهندسة المعمارية الشاملة كجزء من نهجنا الخدمي الكامل. يضم فريقنا مهندسين معماريين ومهندسين ذوي خبرة يعملون بشكل تعاوني لإنشاء تصاميم مبتكرة وعملية وجذابة بصرياً تلبي متطلباتك المحددة وقوانين البناء المحلية.'
    },
    {
      id: 4,
      category: 'services',
      question: 'هل يمكن لشركة أوج الدولية التعامل مع المشاريع الصغيرة والكبيرة؟',
      answer: 'بالتأكيد! لدينا القدرة والموارد للتعامل مع المشاريع من جميع الأحجام، من التجديدات الصغيرة تحت 500 ألف دولار إلى المشاريع الضخمة التي تتجاوز 50 مليون دولار. نهجنا القابل للتوسع يضمن أن كل مشروع، بغض النظر عن حجمه، يحصل على نفس مستوى الاهتمام والجودة والخدمة المهنية.'
    },
    {
      id: 5,
      category: 'projects',
      question: 'كيف تضمنون إنجاز المشاريع في الوقت المحدد؟',
      answer: 'نستخدم منهجيات إدارة المشاريع المتقدمة، بما في ذلك الجدولة التفصيلية وتتبع المعالم المنتظم وإدارة المخاطر الاستباقية. يحافظ مديرو المشاريع لدينا على التواصل المستمر مع جميع أصحاب المصلحة ويستخدمون برامج متطورة لمراقبة التقدم. حققنا معدل تسليم في الوقت المحدد بنسبة 95% عبر جميع مشاريعنا.'
    },
    {
      id: 6,
      category: 'projects',
      question: 'ما هي برامج إدارة المشاريع التي تستخدمونها؟',
      answer: 'نستخدم برامج إدارة المشاريع الرائدة في الصناعة بما في ذلك Primavera P6 و Microsoft Project وأدوات BIM (نمذجة معلومات البناء). تمكننا هذه التقنيات من توفير تتبع المشاريع في الوقت الفعلي والتقارير التفصيلية والتواصل الشفاف مع عملائنا طوال عملية البناء.'
    },
    {
      id: 7,
      category: 'pricing',
      question: 'كيف تحددون أسعار المشاريع؟',
      answer: 'تستند أسعارنا إلى عدة عوامل بما في ذلك نطاق المشروع والمواد المطلوبة وتكاليف العمالة والجدول الزمني والتعقيد وظروف السوق الحالية. نقدم تقديرات مفصلة وشفافة تفصل جميع التكاليف. نقدم عقود بسعر ثابت وترتيبات التكلفة الإضافية حسب متطلبات المشروع.'
    },
    {
      id: 8,
      category: 'pricing',
      question: 'ما هي جداول الدفع التي تقدمونها؟',
      answer: 'نقدم جداول دفع مرنة مصممة خصيصاً لاحتياجات كل مشروع. عادة، نعمل مع مدفوعات مرتبطة بالمعالم مرتبطة بمراحل إنجاز المشروع. الترتيبات الشائعة تشمل دفعة مقدمة 10%، ومدفوعات التقدم بناءً على العمل المنجز، والدفعة النهائية عند إنجاز المشروع وموافقة العميل.'
    },
    {
      id: 9,
      category: 'timeline',
      question: 'كم من الوقت يستغرق مشروع البناء التجاري النموذجي؟',
      answer: 'يختلف الجدول الزمني بشكل كبير بناءً على حجم المشروع وتعقيده. المشاريع التجارية الصغيرة (أقل من 5 مليون دولار) تستغرق عادة 6-12 شهراً، والمشاريع المتوسطة (5-25 مليون دولار) تستغرق 12-24 شهراً، والمشاريع الكبيرة (أكثر من 25 مليون دولار) يمكن أن تستغرق 24-48 شهراً. نقدم تقديرات زمنية مفصلة خلال مرحلة التخطيط.'
    },
    {
      id: 10,
      category: 'timeline',
      question: 'هل يمكنكم تسريع الجداول الزمنية للمشاريع عند الحاجة؟',
      answer: 'نعم، يمكننا في كثير من الأحيان استيعاب الجداول الزمنية المعجلة من خلال استراتيجيات مثل زيادة القوى العاملة وتمديد ساعات العمل وتنفيذ المهام المتوازية والحصول على المواد المتميزة. ومع ذلك، نضمن دائماً عدم المساس بمعايير الجودة والسلامة، حتى مع الجداول الزمنية المعجلة.'
    },
    {
      id: 11,
      category: 'quality',
      question: 'ما هي تدابير مراقبة الجودة التي تطبقونها؟',
      answer: 'نطبق تدابير مراقبة الجودة الشاملة بما في ذلك التفتيش المنتظم في كل مرحلة بناء، واختبار المواد والتحقق منها، والالتزام بمعايير البناء الدولية، وعمليات التدقيق الجودة من طرف ثالث، والتوثيق التفصيلي لجميع الأعمال المنجزة. نحافظ على شهادة ISO 9001:2015 لإدارة الجودة.'
    },
    {
      id: 12,
      category: 'quality',
      question: 'هل تقدمون ضمانات على أعمال البناء؟',
      answer: 'نعم، نقدم ضمانات شاملة على جميع أعمال البناء لدينا. الأعمال الهيكلية تأتي عادة مع ضمان 10 سنوات، بينما الأنظمة الميكانيكية والكهربائية لها ضمانات 2-5 سنوات. نقدم أيضاً عقود صيانة ممتدة لضمان طول عمر وأداء مثالي لاستثمارك.'
    },
    {
      id: 13,
      category: 'general',
      question: 'هل أنتم متماشون مع رؤية المملكة العربية السعودية 2030؟',
      answer: 'بالتأكيد! تفخر شركة أوج الدولية بكونها مساهماً نشطاً في رؤية المملكة العربية السعودية 2030. ندمج ممارسات الاستدامة، وندعم تطوير المواهب المحلية، ونتبنى التحول الرقمي، ونركز على المشاريع التي تساهم في أهداف التنويع الاقتصادي والتقدم الاجتماعي للمملكة.'
    },
    {
      id: 14,
      category: 'services',
      question: 'هل تقدمون خدمات الصيانة بعد البناء؟',
      answer: 'نعم، نقدم خدمات الصيانة والدعم الشاملة بعد البناء. يشمل ذلك برامج الصيانة الوقائية وخدمات الإصلاح الطارئة وترقيات الأنظمة وأعمال التجديد. فريق الصيانة لدينا متاح على مدار الساعة طوال أيام الأسبوع لضمان بقاء ممتلكاتك في حالة مثلى.'
    },
    {
      id: 15,
      category: 'projects',
      question: 'كيف تتعاملون مع تغييرات أو تعديلات المشروع؟',
      answer: 'نفهم أن التغييرات أحياناً ضرورية أثناء البناء. لدينا عملية منظمة لأوامر التغيير تشمل تقييم التأثير على الجدول الزمني والميزانية، وإجراءات موافقة العميل، وتوثيق جميع التعديلات. نسعى لاستيعاب التغييرات المعقولة مع الحفاظ على سلامة المشروع.'
    },
    {
      id: 16,
      category: 'general',
      question: 'ما هي تدابير السلامة التي تطبقونها في مواقع البناء؟',
      answer: 'السلامة هي أولويتنا القصوى. نطبق بروتوكولات السلامة الشاملة بما في ذلك التدريب الإلزامي على السلامة لجميع العمال، وعمليات التفتيش المنتظمة للسلامة، واستخدام معدات السلامة المناسبة، والالتزام بمعايير OSHA، وإجراءات الاستجابة للطوارئ، والمراقبة المستمرة للسلامة. نحافظ على سجل سلامة ممتاز عبر جميع المشاريع.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            اعثر على إجابات للأسئلة الشائعة حول خدماتنا ومشاريعنا
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في الأسئلة الشائعة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-gray-900 dark:text-white text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {faqCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        openItem === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openItem === faq.id && (
                    <div className="px-8 pb-6">
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                لم يتم العثور على أسئلة
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                حاول تعديل البحث أو الفلتر
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              لا تزال لديك أسئلة؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              فريق الخبراء لدينا جاهز لمساعدتك في أي استفسارات إضافية قد تكون لديك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Chat */}
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                دعم الدردشة المباشرة
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                احصل على إجابات فورية من فريق الدعم لدينا
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300">
                ابدأ المحادثة
              </button>
            </div>

            {/* Phone Support */}
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                الدعم الهاتفي
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                تحدث مباشرة مع أحد خبرائنا
              </p>
              <a
                href="tel:+966111234567"
                className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-300"
              >
                اتصل الآن
              </a>
            </div>

            {/* Email Support */}
            <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                الدعم عبر البريد الإلكتروني
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                أرسل أسئلتك التفصيلية وسنرد عليك قريباً
              </p>
              <a
                href="mailto:info@awjcontracting.sa"
                className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-300"
              >
                أرسل بريد إلكتروني
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            مستعد لمناقشة مشروعك؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            سواء وجدت الإجابات التي تبحث عنها أو تحتاج إلى مزيد من المعلومات، فريقنا هنا لمساعدتك
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
            >
              تواصل مع خبرائنا
            </a>
            <a
              href="/register"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              سجل كعميل
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;