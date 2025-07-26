import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  X, 
  Star, 
  Building, 
  User, 
  Calendar,
  Search,
  Filter,
  Eye,
  MessageSquare
} from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  position: string;
  company: string;
  projectName: string;
  projectValue: string;
  duration: string;
  rating: number;
  testimonialText: string;
  image: string;
  date: string;
  category: 'commercial' | 'residential' | 'industrial';
  isActive: boolean;
  isFeatured: boolean;
  order: number;
}

const TestimonialsManager: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      clientName: 'د. عبدالله المحمود',
      position: 'الرئيس التنفيذي',
      company: 'مجموعة التطوير الملكي',
      projectName: 'برج الرياض التجاري',
      projectValue: '85 مليون دولار',
      duration: '36 شهراً',
      rating: 5,
      testimonialText: 'تجاوزت شركة أوج الدولية توقعاتنا في كل جانب من جوانب مشروع برج الرياض التجاري. اهتمامهم بالتفاصيل والتسليم في الوقت المحدد والجودة الاستثنائية جعلتهم شريكنا المفضل في البناء. تم إنجاز المشروع قبل الموعد المحدد بأسبوعين!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2024-01-15',
      category: 'commercial',
      isActive: true,
      isFeatured: true,
      order: 1
    },
    {
      id: '2',
      clientName: 'م. فاطمة الزهراء',
      position: 'مديرة المشاريع',
      company: 'شركة النور العقارية',
      projectName: 'مجمع النور السكني',
      projectValue: '45 مليون دولار',
      duration: '24 شهراً',
      rating: 5,
      testimonialText: 'أظهر فريق شركة أوج الدولية مهنية وخبرة لا مثيل لها طوال مشروع مجمعنا السكني. حلولهم المبتكرة والتزامهم بالاستدامة يتماشى تماماً مع رؤيتنا للمعيشة الحديثة في المملكة العربية السعودية.',
      image: 'https://images.pexels.com/photos/3760267/pexels-photo-3760267.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2023-11-28',
      category: 'residential',
      isActive: true,
      isFeatured: true,
      order: 2
    },
    {
      id: '3',
      clientName: 'محمد الراشد',
      position: 'مدير العمليات',
      company: 'التنمية الصناعية السعودية',
      projectName: 'المدينة الصناعية - المرحلة الأولى',
      projectValue: '120 مليون دولار',
      duration: '18 شهراً',
      rating: 5,
      testimonialText: 'خبرة شركة أوج الدولية في البناء الصناعي رائعة. نجحوا في تسليم مرفق التصنيع الخاص بنا مع بنية تحتية متطورة تدعم أهداف رؤية 2030. معرفتهم التقنية ومهارات إدارة المشاريع مثيرة للإعجاب حقاً.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2023-12-10',
      category: 'industrial',
      isActive: true,
      isFeatured: false,
      order: 3
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterRating, setFilterRating] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
    clientName: '',
    position: '',
    company: '',
    projectName: '',
    projectValue: '',
    duration: '',
    rating: 5,
    testimonialText: '',
    image: '',
    date: new Date().toISOString().split('T')[0],
    category: 'commercial',
    isActive: true,
    isFeatured: false,
    order: testimonials.length + 1
  });

  const categories = [
    { value: 'all', label: 'جميع الفئات' },
    { value: 'commercial', label: 'تجاري' },
    { value: 'residential', label: 'سكني' },
    { value: 'industrial', label: 'صناعي' }
  ];

  const ratings = [
    { value: 'all', label: 'جميع التقييمات' },
    { value: '5', label: '5 نجوم' },
    { value: '4', label: '4 نجوم' },
    { value: '3', label: '3 نجوم' },
    { value: '2', label: '2 نجوم' },
    { value: '1', label: '1 نجمة' }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.projectName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || testimonial.category === filterCategory;
    const matchesRating = filterRating === 'all' || testimonial.rating.toString() === filterRating;
    return matchesSearch && matchesCategory && matchesRating;
  });

  const handleSaveTestimonial = () => {
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? editingTestimonial : t));
      setEditingTestimonial(null);
    } else {
      const id = Date.now().toString();
      setTestimonials([...testimonials, { ...newTestimonial, id } as Testimonial]);
      setNewTestimonial({
        clientName: '',
        position: '',
        company: '',
        projectName: '',
        projectValue: '',
        duration: '',
        rating: 5,
        testimonialText: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        category: 'commercial',
        isActive: true,
        isFeatured: false,
        order: testimonials.length + 1
      });
      setShowAddModal(false);
    }
  };

  const handleDeleteTestimonial = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الشهادة؟')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const renderStars = (rating: number, interactive: boolean = false, onChange?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive && onChange ? () => onChange(index + 1) : undefined}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      commercial: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      residential: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      industrial: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    };
    return colors[category as keyof typeof colors];
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      commercial: 'تجاري',
      residential: 'سكني',
      industrial: 'صناعي'
    };
    return labels[category as keyof typeof labels];
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة الشهادات</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            إدارة شاملة لشهادات العملاء وتقييماتهم
          </p>
        </div>
        
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>إضافة شهادة جديدة</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="البحث في الشهادات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 pl-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
            />
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              {ratings.map(rating => (
                <option key={rating.value} value={rating.value}>
                  {rating.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4 space-x-reverse mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {testimonial.clientName}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.company}
                  </p>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

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

              <div className="relative mb-6">
                <MessageSquare className="absolute -top-2 -right-2 w-8 h-8 text-blue-200 dark:text-blue-800 opacity-50" />
                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed pr-6 italic">
                  "{testimonial.testimonialText}"
                </blockquote>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {testimonial.projectName}
                  </span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(testimonial.date).toLocaleDateString('ar-SA')}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(testimonial.category)}`}>
                    {getCategoryLabel(testimonial.category)}
                  </span>
                  {testimonial.isFeatured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-xs font-semibold">
                      مميزة
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    testimonial.isActive 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {testimonial.isActive ? 'نشط' : 'غير نشط'}
                  </span>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <button
                    onClick={() => setEditingTestimonial(testimonial)}
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Testimonial Modal */}
      {(showAddModal || editingTestimonial) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingTestimonial ? 'تعديل الشهادة' : 'إضافة شهادة جديدة'}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingTestimonial(null);
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Client Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">معلومات العميل</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    اسم العميل
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial ? editingTestimonial.clientName : newTestimonial.clientName}
                    onChange={(e) => {
                      if (editingTestimonial) {
                        setEditingTestimonial({ ...editingTestimonial, clientName: e.target.value });
                      } else {
                        setNewTestimonial({ ...newTestimonial, clientName: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                    placeholder="أدخل اسم العميل"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      المنصب
                    </label>
                    <input
                      type="text"
                      value={editingTestimonial ? editingTestimonial.position : newTestimonial.position}
                      onChange={(e) => {
                        if (editingTestimonial) {
                          setEditingTestimonial({ ...editingTestimonial, position: e.target.value });
                        } else {
                          setNewTestimonial({ ...newTestimonial, position: e.target.value });
                        }
                      }}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                      placeholder="المنصب الوظيفي"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الشركة
                    </label>
                    <input
                      type="text"
                      value={editingTestimonial ? editingTestimonial.company : newTestimonial.company}
                      onChange={(e) => {
                        if (editingTestimonial) {
                          setEditingTestimonial({ ...editingTestimonial, company: e.target.value });
                        } else {
                          setNewTestimonial({ ...newTestimonial, company: e.target.value });
                        }
                      }}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                      placeholder="اسم الشركة"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    رابط الصورة
                  </label>
                  <input
                    type="url"
                    value={editingTestimonial ? editingTestimonial.image : newTestimonial.image}
                    onChange={(e) => {
                      if (editingTestimonial) {
                        setEditingTestimonial({ ...editingTestimonial, image: e.target.value });
                      } else {
                        setNewTestimonial({ ...newTestimonial, image: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    التقييم
                  </label>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    {renderStars(
                      editingTestimonial ? editingTestimonial.rating : newTestimonial.rating || 5,
                      true,
                      (rating) => {
                        if (editingTestimonial) {
                          setEditingTestimonial({ ...editingTestimonial, rating });
                        } else {
                          setNewTestimonial({ ...newTestimonial, rating });
                        }
                      }
                    )}
                    <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
                      ({editingTestimonial ? editingTestimonial.rating : newTestimonial.rating || 5} من 5)
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">معلومات المشروع</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    اسم المشروع
                  </label>
                  <input
                    type="text"
                    value={editingTestimonial ? editingTestimonial.projectName : newTestimonial.projectName}
                    onChange={(e) => {
                      if (editingTestimonial) {
                        setEditingTestimonial({ ...editingTestimonial, projectName: e.target.value });
                      } else {
                        setNewTestimonial({ ...newTestimonial, projectName: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                    placeholder="أدخل اسم المشروع"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      قيمة المشروع
                    </label>
                    <input
                      type="text"
                      value={editingTestimonial ? editingTestimonial.projectValue : newTestimonial.projectValue}
                      onChange={(e) => {
                        if (editingTestimonial) {
                          setEditingTestimonial({ ...editingTestimonial, projectValue: e.target.value });
                        } else {
                          setNewTestimonial({ ...newTestimonial, projectValue: e.target.value });
                        }
                      }}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                      placeholder="مثال: 85 مليون دولار"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      المدة
                    </label>
                    <input
                      type="text"
                      value={editingTestimonial ? editingTestimonial.duration : newTestimonial.duration}
                      onChange={(e) => {
                        if (editingTestimonial) {
                          setEditingTestimonial({ ...editingTestimonial, duration: e.target.value });
                        } else {
                          setNewTestimonial({ ...newTestimonial, duration: e.target.value });
                        }
                      }}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                      placeholder="مثال: 36 شهراً"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الفئة
                  </label>
                  <select
                    value={editingTestimonial ? editingTestimonial.category : newTestimonial.category}
                    onChange={(e) => {
                      if (editingTestimonial) {
                        setEditingTestimonial({ ...editingTestimonial, category: e.target.value as any });
                      } else {
                        setNewTestimonial({ ...newTestimonial, category: e.target.value as any });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  >
                    <option value="commercial">تجاري</option>
                    <option value="residential">سكني</option>
                    <option value="industrial">صناعي</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    تاريخ الشهادة
                  </label>
                  <input
                    type="date"
                    value={editingTestimonial ? editingTestimonial.date : newTestimonial.date}
                    onChange={(e) => {
                      if (editingTestimonial) {
                        setEditingTestimonial({ ...editingTestimonial, date: e.target.value });
                      } else {
                        setNewTestimonial({ ...newTestimonial, date: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        checked={editingTestimonial ? editingTestimonial.isActive : newTestimonial.isActive}
                        onChange={(e) => {
                          if (editingTestimonial) {
                            setEditingTestimonial({ ...editingTestimonial, isActive: e.target.checked });
                          } else {
                            setNewTestimonial({ ...newTestimonial, isActive: e.target.checked });
                          }
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">نشط</span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        checked={editingTestimonial ? editingTestimonial.isFeatured : newTestimonial.isFeatured}
                        onChange={(e) => {
                          if (editingTestimonial) {
                            setEditingTestimonial({ ...editingTestimonial, isFeatured: e.target.checked });
                          } else {
                            setNewTestimonial({ ...newTestimonial, isFeatured: e.target.checked });
                          }
                        }}
                        className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">مميزة</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الترتيب
                    </label>
                    <input
                      type="number"
                      value={editingTestimonial ? editingTestimonial.order : newTestimonial.order}
                      onChange={(e) => {
                        if (editingTestimonial) {
                          setEditingTestimonial({ ...editingTestimonial, order: parseInt(e.target.value) });
                        } else {
                          setNewTestimonial({ ...newTestimonial, order: parseInt(e.target.value) });
                        }
                      }}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                نص الشهادة
              </label>
              <textarea
                value={editingTestimonial ? editingTestimonial.testimonialText : newTestimonial.testimonialText}
                onChange={(e) => {
                  if (editingTestimonial) {
                    setEditingTestimonial({ ...editingTestimonial, testimonialText: e.target.value });
                  } else {
                    setNewTestimonial({ ...newTestimonial, testimonialText: e.target.value });
                  }
                }}
                rows={4}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right resize-none"
                placeholder="أدخل نص الشهادة..."
              />
            </div>

            <div className="flex items-center justify-end space-x-4 space-x-reverse mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingTestimonial(null);
                }}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveTestimonial}
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Save className="w-4 h-4" />
                <span>{editingTestimonial ? 'حفظ التغييرات' : 'إضافة الشهادة'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsManager;