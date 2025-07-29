import React, { useState } from 'react';
import {
  Plus,
  Edit3,
  Trash2,
  Save,
  X,
  Star,
  Quote,
  Building,
  Search,
  DollarSign,
  Clock
} from 'lucide-react';

// 1. Interface Definition
interface Testimonial {
  id: string;
  clientName: string;
  clientPosition: string;
  company: string;
  projectName: string;
  projectValue: string;
  projectDuration: string;
  testimonialText: string;
  rating: number;
  date: string;
  clientImage: string;
  projectImage: string;
  isActive: boolean;
  order: number;
}

// Type for new testimonial data, omitting the 'id' which will be generated.
type NewTestimonialData = Omit<Testimonial, 'id'>;

// Initial data for testimonials
const initialTestimonials: Testimonial[] = [
    {
        id: '1',
        clientName: 'د. عبدالله المحمود',
        clientPosition: 'الرئيس التنفيذي',
        company: 'مجموعة التطوير الملكي',
        projectName: 'برج الرياض التجاري',
        projectValue: '85 مليون دولار',
        projectDuration: '36 شهراً',
        testimonialText: 'تجاوزت شركة أوج الدولية توقعاتنا في كل جانب من جوانب مشروع برج الرياض التجاري. اهتمامهم بالتفاصيل والتسليم في الوقت المحدد والجودة الاستثنائية جعلتهم شريكنا المفضل في البناء. تم إنجاز المشروع قبل الموعد المحدد بأسبوعين!',
        rating: 5,
        date: '2024-02-13',
        clientImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        projectImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        isActive: true,
        order: 1
      },
      {
        id: '2',
        clientName: 'م. فاطمة الزهراء',
        clientPosition: 'مديرة المشاريع',
        company: 'شركة النور العقارية',
        projectName: 'مجمع النور السكني',
        projectValue: '45 مليون دولار',
        projectDuration: '24 شهراً',
        testimonialText: 'أظهر فريق شركة أوج الدولية مهنية وخبرة لا مثيل لها طوال مشروع مجمعنا السكني. حلولهم المبتكرة والتزامهم بالاستدامة يتماشى تماماً مع رؤيتنا للمعيشة الحديثة في المملكة العربية السعودية.',
        rating: 5,
        date: '2023-11-28',
        clientImage: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400',
        projectImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        isActive: true,
        order: 2
      },
      {
        id: '3',
        clientName: 'محمد الراشد',
        clientPosition: 'مدير العمليات',
        company: 'التنمية الصناعية السعودية',
        projectName: 'المدينة الصناعية - المرحلة الأولى',
        projectValue: '120 مليون دولار',
        projectDuration: '18 شهراً',
        testimonialText: 'خبرة شركة أوج الدولية في البناء الصناعي رائعة. نجحوا في تسليم مرفق التصنيع الخاص بنا مع بنية تحتية متطورة تدعم أهداف رؤية 2030. معرفتهم التقنية ومهارات إدارة المشاريع مثيرة للإعجاب حقاً.',
        rating: 5,
        date: '2023-12-10',
        clientImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
        projectImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
        isActive: true,
        order: 3
      },
      {
        id: '4',
        clientName: 'سارة المنصوري',
        clientPosition: 'مديرة التطوير',
        company: 'تطوير الوادي الأخضر',
        projectName: 'مول الوادي الأخضر',
        projectValue: '65 مليون دولار',
        projectDuration: '30 شهراً',
        testimonialText: 'العمل مع شركة أوج الدولية في مول الوادي الأخضر كان تجربة استثنائية. إبداع فريقهم وخبرتهم التقنية والتزامهم بالجودة أدى إلى وجهة تسوق عالمية المستوى تجاوزت كل توقعاتنا.',
        rating: 5,
        date: '2023-10-20',
        clientImage: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
        projectImage: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800',
        isActive: true,
        order: 4
      }
];

const TestimonialsManagerNew: React.FC = () => {
  // 2. State Management
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<NewTestimonialData>({
    clientName: '', clientPosition: '', company: '', projectName: '',
    projectValue: '', projectDuration: '', testimonialText: '', rating: 5,
    date: new Date().toISOString().split('T')[0], clientImage: '', projectImage: '',
    isActive: true, order: testimonials.length + 1,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');

  // 3. Handlers
  const handleOpenAddModal = () => {
    setNewTestimonial({
        clientName: '', clientPosition: '', company: '', projectName: '',
        projectValue: '', projectDuration: '', testimonialText: '', rating: 5,
        date: new Date().toISOString().split('T')[0], clientImage: '', projectImage: '',
        isActive: true, order: testimonials.length + 1,
    });
    setEditingTestimonial(null);
    setShowAddModal(true);
  };

  const handleOpenEditModal = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingTestimonial(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: string | number | boolean = value;
    if (type === 'checkbox') {
        parsedValue = (e.target as HTMLInputElement).checked;
    } else if (type === 'number') {
        parsedValue = value ? parseInt(value, 10) : 0;
    }

    if (editingTestimonial) {
      setEditingTestimonial({ ...editingTestimonial, [name]: parsedValue });
    } else {
      setNewTestimonial({ ...newTestimonial, [name]: parsedValue });
    }
  };

  const handleSaveTestimonial = () => {
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? editingTestimonial : t));
    } else {
      const newId = `testimonial-${Date.now()}`;
      setTestimonials([...testimonials, { ...newTestimonial, id: newId }]);
    }
    handleCloseModal();
  };

  const handleDeleteTestimonial = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الشهادة؟')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  // 4. Rendering Helpers
  const renderStars = (rating: number, interactive = false, onStarClick: ((i: number) => void) | null = null) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} ${interactive ? 'cursor-pointer' : ''}`}
        fill="currentColor"
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));
  };

  // 5. Filtering Logic
  const filteredTestimonials = testimonials.filter(testimonial => {
    const searchTermLower = searchTerm.toLowerCase();
    const ratingMatch = filterRating === 'all' || testimonial.rating.toString() === filterRating;
    return ratingMatch && (
      testimonial.clientName.toLowerCase().includes(searchTermLower) ||
      testimonial.projectName.toLowerCase().includes(searchTermLower) ||
      testimonial.company.toLowerCase().includes(searchTermLower)
    );
  }).sort((a, b) => a.order - b.order);

  // 6. Modal Content
  let ModalContent = null;
  if (showAddModal) {
    const currentData = editingTestimonial || newTestimonial;
    const modalTitle = editingTestimonial ? 'تعديل شهادة' : 'إضافة شهادة جديدة';

    ModalContent = (
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4" dir="rtl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{modalTitle}</h2>
            <button onClick={handleCloseModal} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form fields */}
            <input name="clientName" value={currentData.clientName} onChange={handleInputChange} placeholder="اسم العميل" className="p-2 border rounded" />
            <input name="clientPosition" value={currentData.clientPosition} onChange={handleInputChange} placeholder="منصب العميل" className="p-2 border rounded" />
            <input name="company" value={currentData.company} onChange={handleInputChange} placeholder="الشركة" className="p-2 border rounded" />
            <input name="projectName" value={currentData.projectName} onChange={handleInputChange} placeholder="اسم المشروع" className="p-2 border rounded" />
            <input name="projectValue" value={currentData.projectValue} onChange={handleInputChange} placeholder="قيمة المشروع" className="p-2 border rounded" />
            <input name="projectDuration" value={currentData.projectDuration} onChange={handleInputChange} placeholder="مدة المشروع" className="p-2 border rounded" />
            <input name="date" type="date" value={currentData.date} onChange={handleInputChange} placeholder="التاريخ" className="p-2 border rounded" />
            <input name="order" type="number" value={currentData.order} onChange={handleInputChange} placeholder="الترتيب" className="p-2 border rounded" />
            <input name="clientImage" value={currentData.clientImage} onChange={handleInputChange} placeholder="رابط صورة العميل" className="p-2 border rounded md:col-span-2" />
            <input name="projectImage" value={currentData.projectImage} onChange={handleInputChange} placeholder="رابط صورة المشروع" className="p-2 border rounded md:col-span-2" />
            <textarea name="testimonialText" value={currentData.testimonialText} onChange={handleInputChange} placeholder="نص الشهادة" className="p-2 border rounded md:col-span-2" rows={4}></textarea>
            <div className="flex items-center space-x-2 space-x-reverse">
              <label>التقييم:</label>
              {renderStars(currentData.rating, true, (rating) => handleInputChange({ target: { name: 'rating', value: rating.toString(), type: 'number' } } as any))}
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
                <input type="checkbox" id="isActive" name="isActive" checked={currentData.isActive} onChange={handleInputChange} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="isActive">نشط</label>
            </div>
          </div>
          <div className="flex justify-end space-x-4 space-x-reverse mt-8">
            <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">إلغاء</button>
            <button onClick={handleSaveTestimonial} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 space-x-reverse">
              <Save className="w-4 h-4" />
              <span>حفظ</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 7. Main Component Render
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة الشهادات</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">إدارة شهادات العملاء وتقييماتهم للمشاريع</p>
        </div>
        <button onClick={handleOpenAddModal} className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <Plus className="w-4 h-4" />
          <span>إضافة شهادة جديدة</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="البحث في الشهادات..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pr-10 pl-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right" />
          </div>
          <select value={filterRating} onChange={(e) => setFilterRating(e.target.value)} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white">
            <option value="all">جميع التقييمات</option>
            <option value="5">5 نجوم</option>
            <option value="4">4 نجوم</option>
            <option value="3">3 نجوم</option>
            <option value="2">2 نجوم</option>
            <option value="1">1 نجمة</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
                <img src={testimonial.projectImage} alt={testimonial.projectName} className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute top-4 left-4 flex space-x-2 space-x-reverse">
                <button onClick={() => handleOpenEditModal(testimonial)} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
                  <Edit3 className="w-4 h-4 text-white" />
                </button>
                <button onClick={() => handleDeleteTestimonial(testimonial.id)} className="p-2 bg-red-500/20 backdrop-blur-sm rounded-lg hover:bg-red-500/30 transition-colors duration-200">
                  <Trash2 className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${testimonial.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {testimonial.isActive ? 'نشط' : 'غير نشط'}
                </span>
              </div>
              <div className="absolute -bottom-8 right-6">
                <div className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-lg">
                  <img src={testimonial.clientImage} alt={testimonial.clientName} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="pt-12 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1 space-x-reverse">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(testimonial.date).toLocaleDateString('ar-SA')}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{testimonial.clientName}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">{testimonial.clientPosition}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{testimonial.company}</p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 space-x-reverse mb-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.projectName}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <DollarSign className="w-3 h-3" />
                    <span>{testimonial.projectValue}</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Clock className="w-3 h-3" />
                    <span>{testimonial.projectDuration}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute top-0 right-0 w-6 h-6 text-blue-200 dark:text-blue-800" />
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pr-8">
                  {testimonial.testimonialText.length > 150 ? `${testimonial.testimonialText.substring(0, 150)}...` : testimonial.testimonialText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {ModalContent}
    </div>
  );
};

export default TestimonialsManagerNew;

