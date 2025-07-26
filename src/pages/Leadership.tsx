import React from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Leadership: React.FC = () => {
  const { t, language } = useLanguage();

  const leaders = [
    {
      name: language === 'ar' ? 'أحمد بن محمد الراشد' : 'Ahmed bin Mohammed Al-Rashid',
      position: t('ceoPosition'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: language === 'ar' 
        ? 'رؤيتنا تتجاوز البناء - نحن نبني الأساس لمستقبل المملكة العربية السعودية المزدهر. كل مشروع نقوم به يعكس التزامنا بالتميز وإيماننا الراسخ برؤية المملكة 2030.'
        : 'Our vision extends beyond construction – we are building the foundation for Saudi Arabia\'s prosperous future. Every project we undertake reflects our commitment to excellence and our unwavering belief in the Kingdom\'s Vision 2030.',
      experience: t('yearsExperienceCount'),
      specialty: t('strategicLeadership'),
      achievements: language === 'ar' 
        ? ['قاد مشاريع بناء بقيمة تزيد عن 2 مليار دولار', 'عضو المجلس الاستشاري لرؤية 2030', 'جائزة التميز الصناعي 2023']
        : ['Led $2B+ in construction projects', 'Vision 2030 Advisory Board Member', 'Industry Excellence Award 2023']
    },
    {
      name: language === 'ar' ? 'فاطمة الزهراء' : 'Fatima Al-Zahra',
      position: t('cooPosition'),
      image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: language === 'ar'
        ? 'الابتكار والتميز التشغيلي هما حجر الأساس لنجاحنا. نستفيد من التكنولوجيا المتطورة وأفضل الممارسات لتقديم مشاريع تتجاوز التوقعات وتضع معايير جديدة للصناعة.'
        : 'Innovation and operational excellence are the cornerstones of our success. We leverage cutting-edge technology and best practices to deliver projects that exceed expectations and set new industry standards.',
      experience: t('twentyYearsExperience'),
      specialty: t('operationsManagement'),
      achievements: language === 'ar'
        ? ['نفذت إدارة المشاريع المدعومة بالذكاء الاصطناعي', 'قللت الجداول الزمنية للمشاريع بنسبة 30%', 'قائدة شهادة ISO 9001:2015']
        : ['Implemented AI-driven project management', 'Reduced project timelines by 30%', 'ISO 9001:2015 Certification Lead']
    },
    {
      name: language === 'ar' ? 'محمد بن سلمان العتيبي' : 'Mohammed bin Salman Al-Otaibi',
      position: t('ctoPosition'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: language === 'ar'
        ? 'التكنولوجيا ليست مجرد أداة - إنها ميزتنا التنافسية. نتبنى التحول الرقمي لتعزيز كفاءة البناء والسلامة والاستدامة، مما يضع شركة أوج الدولية في المقدمة في ابتكار الصناعة.'
        : 'Technology is not just a tool – it\'s our competitive advantage. We embrace digital transformation to enhance construction efficiency, safety, and sustainability, positioning AWJ International at the forefront of industry innovation.',
      experience: t('eighteenYearsExperience'),
      specialty: t('constructionTechnology'),
      achievements: language === 'ar'
        ? ['رائد حلول المباني الذكية', 'خبير تنفيذ BIM', 'قائد تكنولوجيا البناء الأخضر']
        : ['Smart Building Solutions Pioneer', 'BIM Implementation Expert', 'Green Building Technology Leader']
    },
    {
      name: language === 'ar' ? 'نورا بنت عبدالله' : 'Noura bint Abdullah',
      position: t('cfoPosition'),
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: language === 'ar'
        ? 'الإدارة المالية والاستثمار الاستراتيجي يدفعان النمو المستدام. نحافظ على أعلى معايير النزاهة المالية بينما نستثمر في الابتكارات التي تقدم قيمة طويلة المدى لعملائنا وأصحاب المصلحة.'
        : 'Financial stewardship and strategic investment drive sustainable growth. We maintain the highest standards of financial integrity while investing in innovations that deliver long-term value for our clients and stakeholders.',
      experience: t('twentyTwoYearsExperience'),
      specialty: t('financialStrategy'),
      achievements: language === 'ar'
        ? ['حافظت على رضا العملاء بنسبة 98%', 'حققت نمواً سنوياً بنسبة 15%', 'حاملة شهادة CFA']
        : ['Maintained 98% client satisfaction', 'Achieved 15% YoY growth', 'CFA Charter Holder']
    },
    {
      name: language === 'ar' ? 'خالد الحربي' : 'Khalid Al-Harbi',
      position: t('cpoPosition'),
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: language === 'ar'
        ? 'كل مشروع يحكي قصة تحول وتقدم. تعمل فرقنا المتفانية بلا كلل لضمان أن كل معلم إنشائي يساهم في السرد الأكبر لرحلة التنمية في المملكة العربية السعودية.'
        : 'Every project tells a story of transformation and progress. Our dedicated teams work tirelessly to ensure that each construction milestone contributes to the greater narrative of Saudi Arabia\'s development journey.',
      experience: t('twentyFourYearsExperience'),
      specialty: t('largeScaleProjectManagement'),
      achievements: language === 'ar'
        ? ['سلم أكثر من 200 مشروع', 'سجل التسليم في الوقت المحدد 95%', 'محترف معتمد PMP']
        : ['200+ Projects Delivered', 'On-time delivery record 95%', 'PMP Certified Professional']
    },
    {
      name: language === 'ar' ? 'سارة المنصوري' : 'Sarah Al-Mansouri',
      position: t('chroPosition'),
      image: 'https://images.pexels.com/photos/3760267/pexels-photo-3760267.jpeg?auto=compress&cs=tinysrgb&w=400',
      message: language === 'ar'
        ? 'شعبنا هو أعظم أصولنا. نستثمر في تطوير المواهب، ونعزز ثقافة مكان العمل الشامل، ونمكن فرقنا من الوصول إلى إمكاناتهم الكاملة بينما يساهمون في أهداف المملكة الطموحة.'
        : 'Our people are our greatest asset. We invest in talent development, foster inclusive workplace culture, and empower our teams to reach their full potential while contributing to the Kingdom\'s ambitious goals.',
      experience: t('sixteenYearsExperience'),
      specialty: t('humanResources'),
      achievements: language === 'ar'
        ? ['جائزة أفضل مكان عمل 2023', 'معدل الاحتفاظ بالموظفين 92%', 'برامج تطوير القيادة']
        : ['Best Workplace Award 2023', '92% Employee Retention Rate', 'Leadership Development Programs']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('leadershipTeam')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            {t('visionaryLeaders')}
          </p>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('messagesFromLeaders')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('discoverVision')}
            </p>
          </div>

          <div className="space-y-20">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Leader Image */}
                <div className="lg:w-1/3">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl">
                      <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                          {leader.position}
                        </p>
                        
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                            <span className="font-medium">{t('experience')}:</span>
                            <span>{leader.experience}</span>
                          </div>
                          <div className="text-center">
                            <span className="font-medium">{t('specialty')}:</span>
                            <br />
                            <span>{leader.specialty}</span>
                          </div>
                        </div>

                        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                          <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300">
                            <Linkedin className="w-5 h-5" />
                          </button>
                          <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300">
                            <Mail className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leader Message & Achievements */}
                <div className="lg:w-2/3">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-16 h-16 text-blue-200 dark:text-blue-800 opacity-50">
                      <Quote className="w-full h-full" />
                    </div>
                    
                    <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
                      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                        "{leader.message}"
                      </blockquote>
                      
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          {t('keyAchievements')}
                        </h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Driven by Leadership */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('leadershipDrivenValues')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('leadershipValuesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('visionaryLeadership')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('visionaryLeadershipDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('commitmentToExcellence')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('commitmentToExcellenceDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg text-center border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('collaborativeSpirit')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('collaborativeSpiritDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('partnerWithProvenLeadership')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('experienceLeadershipDifference')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
            >
              {t('startYourProject')}
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              {t('learnMoreAboutUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;