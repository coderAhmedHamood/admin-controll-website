import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, Calendar, Building, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'د. عبدالله المحمود',
      position: 'الرئيس التنفيذي، مجموعة التطوير الملكي',
      company: 'مجموعة التطوير الملكي',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      category: 'commercial',
      project: 'برج الرياض التجاري',
      date: '2024-01-15',
      testimonial: 'تجاوزت شركة أوج الدولية توقعاتنا في كل جانب من جوانب مشروع برج الرياض التجاري. اهتمامهم بالتفاصيل والتسليم في الوقت المحدد والجودة الاستثنائية جعلتهم شريكنا المفضل في البناء. تم إنجاز المشروع قبل الموعد المحدد بأسبوعين!',
      projectValue: '85 مليون دولار',
      duration: '36 شهراً'
    },
    {
      id: 2,
      name: 'م. فاطمة الزهراء',
      position: 'مديرة المشاريع',
      company: 'شركة النور العقارية',
      image: 'https://images.pexels.com/photos/3760267/pexels-photo-3760267.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      category: 'residential',
      project: 'مجمع النور السكني',
      date: '2023-11-28',
      testimonial: 'أظهر فريق شركة أوج الدولية مهنية وخبرة لا مثيل لها طوال مشروع مجمعنا السكني. حلولهم المبتكرة والتزامهم بالاستدامة يتماشى تماماً مع رؤيتنا للمعيشة الحديثة في المملكة العربية السعودية.',
      projectValue: '45 مليون دولار',
      duration: '24 شهراً'
    },
    {
      id: 3,
      name: 'محمد الراشد',
      position: 'مدير العمليات',
      company: 'التنمية الصناعية السعودية',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      category: 'industrial',
      project: 'المدينة الصناعية - المرحلة الأولى',
      date: '2023-12-10',
      testimonial: 'خبرة شركة أوج الدولية في البناء الصناعي رائعة. نجحوا في تسليم مرفق التصنيع الخاص بنا مع بنية تحتية متطورة تدعم أهداف رؤية 2030. معرفتهم التقنية ومهارات إدارة المشاريع مثيرة للإعجاب حقاً.',
      projectValue: '120 مليون دولار',
      duration: '18 شهراً'
    },
    {
      id: 4,
      name: 'سارة المنصوري',
      position: 'مديرة التطوير',
      company: 'تطوير الوادي الأخضر',
      image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      category: 'commercial',
      project: 'مول الوادي الأخضر',
      date: '2023-10-20',
      testimonial: 'العمل مع شركة أوج الدولية في مول الوادي الأخضر كان تجربة استثنائية. إبداع فريقهم وخبرتهم التقنية والتزامهم بالجودة أدى إلى وجهة تسوق عالمية المستوى تجاوزت كل توقعاتنا.',
      projectValue: '65 مليون دولار',
      duration: '30 شهراً'
    },
    {
      id: 5,
      name: 'أحمد بن سلمان',
      position: 'الرئيس التنفيذي',
      company: 'عقارات الحدائق الملكية',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      category: 'residential',
      project: 'فلل الحدائق الملكية',
      date: '2024-02-05',
      testimonial: 'مشروع الفلل الفاخرة الذي نفذته شركة أوج الدولية يُظهر قدرتهم على تقديم حلول سكنية متميزة. كل تفصيلة تم صياغتها بعناية فائقة، والنتيجة النهائية شاهد على التزامهم بالتميز ورضا العملاء.',
      projectValue: '95 مليون دولار',
      duration: '28 شهراً'
    },
    {
      id: 6,
      name: 'د. نادية العتيبي',
      position: 'مديرة العمليات',
      company: 'هيئة التقنية السعودية',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      category: 'commercial',
      project: 'مركز التقنية للابتكار',
      date: '2023-09-15',
      testimonial: 'نهج شركة أوج الدولية في مشروع مركز التقنية كان مبتكراً ومتطلعاً للمستقبل. دمجوا تقنيات المباني الذكية والممارسات المستدامة التي تتماشى مع أهداف التحول الرقمي لدينا. عمل متميز!',
      projectValue: '78 مليون دولار',
      duration: '22 شهراً'
    }
  ];

  const categories = [
    { key: 'all', label: 'جميع المشاريع', count: testimonials.length },
    { key: 'commercial', label: 'تجاري', count: testimonials.filter(t => t.category === 'commercial').length },
    { key: 'residential', label: 'سكني', count: testimonials.filter(t => t.category === 'residential').length },
    { key: 'industrial', label: 'صناعي', count: testimonials.filter(t => t.category === 'industrial').length }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            شهادات عملائنا
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            اكتشف ما يقوله عملاؤنا عن تجربتهم مع شركة أوج الدولية
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">معدل رضا العملاء</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5.0</div>
              <div className="text-gray-600 dark:text-gray-400">التقييم المتوسط</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-400">العملاء السعداء</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-400">العملاء المتكررون</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.projectValue}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">قيمة المشروع</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonial.duration}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">المدة</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 dark:text-blue-800 opacity-50" />
                    <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6 italic">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {testimonial.project}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(testimonial.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Comments Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              آراء العملاء الأخيرة
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              تعليقات فورية من عملائنا الكرام
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      خالد الحربي
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      منذ يومين
                    </span>
                    <div className="flex space-x-1 rtl:space-x-reverse">
                      {renderStars(5)}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    "انتهيت للتو من الجولة النهائية في مقرنا الجديد. الاهتمام بالتفاصيل وجودة الصنعة استثنائية. شكراً لفريق أوج!"
                  </p>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <ThumbsUp className="w-4 h-4" />
                      <span>12</span>
                    </button>
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <MessageCircle className="w-4 h-4" />
                      <span>رد</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      ليلى القحطاني
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      منذ أسبوع
                    </span>
                    <div className="flex space-x-1 rtl:space-x-reverse">
                      {renderStars(5)}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    "مهارات إدارة المشاريع لدى الفريق متميزة. تم الوفاء بكل معلم في الموعد المحدد، والتواصل كان ممتازاً طوال العملية بأكملها."
                  </p>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <ThumbsUp className="w-4 h-4" />
                      <span>8</span>
                    </button>
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      <MessageCircle className="w-4 h-4" />
                      <span>رد</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            انضم إلى عملائنا الراضين
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            اختبر الفرق مع شركة أوج الدولية واكتشف لماذا يثق بنا العملاء في جميع أنحاء المملكة
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/register"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
            >
              سجل كعميل
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              احصل على عرض سعر
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;