import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Save, 
  X, 
  HelpCircle, 
  Search,
  Filter,
  Eye,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'projects' | 'pricing' | 'timeline' | 'quality';
  isActive: boolean;
  order: number;
  createdDate: string;
  updatedDate: string;
  views: number;
}

const FAQManager: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'ما هي أنواع مشاريع البناء التي تتعامل معها شركة أوج الدولية؟',
      answer: 'تتخصص شركة أوج الدولية في مجموعة واسعة من مشاريع البناء بما في ذلك المباني التجارية والتطويرات السكنية والمرافق الصناعية ومشاريع البنية التحتية وأعمال التجديد. لدينا خبرة واسعة في مباني المكاتب ومراكز التسوق والفلل الفاخرة ومصانع التصنيع والمستودعات ومشاريع الأشغال العامة.',
      category: 'general',
      isActive: true,
      order: 1,
      createdDate: '2024-07-26',
      updatedDate: '2024-07-26',
      views: 0
    },
    {
      id: '2',
      question: 'منذ متى تعمل شركة أوج الدولية في السوق؟',
      answer: '',
      category: 'general',
      isActive: true,
      order: 2,
      createdDate: '2024-07-26',
      updatedDate: '2024-07-26',
      views: 0
    },
    {
      id: '3',
      question: 'هل أنتم متماشون مع رؤية المملكة العربية السعودية 2030؟',
      answer: '',
      category: 'general',
      isActive: true,
      order: 3,
      createdDate: '2024-07-26',
      updatedDate: '2024-07-26',
      views: 0
    },
    {
      id: '4',
      question: 'ما هي تدابير السلامة التي تطبقونها في مواقع البناء؟',
      answer: '',
      category: 'quality',
      isActive: true,
      order: 4,
      createdDate: '2024-07-26',
      updatedDate: '2024-07-26',
      views: 0
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [newFAQ, setNewFAQ] = useState<Partial<FAQ>>({
    question: '',
    answer: '',
    category: 'general',
    isActive: true,
    order: faqs.length + 1,
    createdDate: new Date().toISOString().split('T')[0],
    updatedDate: new Date().toISOString().split('T')[0],
    views: 0
  });

  const categories = [
    { value: 'all', label: 'جميع الفئات' },
    { value: 'general', label: 'عام' },
    { value: 'services', label: 'الخدمات' },
    { value: 'projects', label: 'المشاريع' },
    { value: 'pricing', label: 'التسعير' },
    { value: 'timeline', label: 'الجدول الزمني' },
    { value: 'quality', label: 'معايير الجودة' }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSaveFAQ = () => {
    if (editingFAQ) {
      setFaqs(faqs.map(f => f.id === editingFAQ.id ? { ...editingFAQ, updatedDate: new Date().toISOString().split('T')[0] } : f));
      setEditingFAQ(null);
    } else {
      const id = Date.now().toString();
      setFaqs([...faqs, { ...newFAQ, id } as FAQ]);
      setNewFAQ({
        question: '',
        answer: '',
        category: 'general',
        isActive: true,
        order: faqs.length + 1,
        createdDate: new Date().toISOString().split('T')[0],
        updatedDate: new Date().toISOString().split('T')[0],
        views: 0
      });
      setShowAddModal(false);
    }
  };

  const handleDeleteFAQ = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا السؤال؟')) {
      setFaqs(faqs.filter(f => f.id !== id));
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      general: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      services: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      projects: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      pricing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      timeline: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      quality: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    };
    return colors[category as keyof typeof colors];
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      general: 'عام',
      services: 'الخدمات',
      projects: 'المشاريع',
      pricing: 'التسعير',
      timeline: 'الجدول الزمني',
      quality: 'معايير الجودة'
    };
    return labels[category as keyof typeof labels];
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة الأسئلة الشائعة</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            إدارة شاملة للأسئلة الشائعة وإجاباتها
          </p>
        </div>
        
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>إضافة سؤال جديد</span>
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي الأسئلة</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{faqs.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">الأسئلة النشطة</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{faqs.filter(f => f.isActive).length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">إجمالي المشاهدات</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{faqs.reduce((sum, faq) => sum + faq.views, 0)}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
              <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">متوسط المشاهدات</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {Math.round(faqs.reduce((sum, faq) => sum + faq.views, 0) / faqs.length)}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
              <Filter className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="البحث في الأسئلة والإجابات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10 pl-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
            />
          </div>

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
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 space-x-reverse mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(faq.category)}`}>
                      {getCategoryLabel(faq.category)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      faq.isActive 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                    }`}>
                      {faq.isActive ? 'نشط' : 'غير نشط'}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {faq.views} مشاهدة
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="text-right w-full"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </button>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse mr-4">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => setEditingFAQ(faq)}
                    className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteFAQ(faq.id)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {expandedFAQ === faq.id && (
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <span>تم الإنشاء: {new Date(faq.createdDate).toLocaleDateString('ar-SA')}</span>
                      <span>آخر تحديث: {new Date(faq.updatedDate).toLocaleDateString('ar-SA')}</span>
                    </div>
                    <span>الترتيب: {faq.order}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit FAQ Modal */}
      {(showAddModal || editingFAQ) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingFAQ ? 'تعديل السؤال' : 'إضافة سؤال جديد'}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingFAQ(null);
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  السؤال
                </label>
                <input
                  type="text"
                  value={editingFAQ ? editingFAQ.question : newFAQ.question}
                  onChange={(e) => {
                    if (editingFAQ) {
                      setEditingFAQ({ ...editingFAQ, question: e.target.value });
                    } else {
                      setNewFAQ({ ...newFAQ, question: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                  placeholder="أدخل السؤال"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الإجابة
                </label>
                <textarea
                  value={editingFAQ ? editingFAQ.answer : newFAQ.answer}
                  onChange={(e) => {
                    if (editingFAQ) {
                      setEditingFAQ({ ...editingFAQ, answer: e.target.value });
                    } else {
                      setNewFAQ({ ...newFAQ, answer: e.target.value });
                    }
                  }}
                  rows={6}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right resize-none"
                  placeholder="أدخل الإجابة التفصيلية"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الفئة
                  </label>
                  <select
                    value={editingFAQ ? editingFAQ.category : newFAQ.category}
                    onChange={(e) => {
                      if (editingFAQ) {
                        setEditingFAQ({ ...editingFAQ, category: e.target.value as any });
                      } else {
                        setNewFAQ({ ...newFAQ, category: e.target.value as any });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  >
                    {categories.slice(1).map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ترتيب العرض
                  </label>
                  <input
                    type="number"
                    value={editingFAQ ? editingFAQ.order : newFAQ.order}
                    onChange={(e) => {
                      if (editingFAQ) {
                        setEditingFAQ({ ...editingFAQ, order: parseInt(e.target.value) });
                      } else {
                        setNewFAQ({ ...newFAQ, order: parseInt(e.target.value) });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                    min="1"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <label className="flex items-center space-x-2 space-x-reverse">
                    <input
                      type="checkbox"
                      checked={editingFAQ ? editingFAQ.isActive : newFAQ.isActive}
                      onChange={(e) => {
                        if (editingFAQ) {
                          setEditingFAQ({ ...editingFAQ, isActive: e.target.checked });
                        } else {
                          setNewFAQ({ ...newFAQ, isActive: e.target.checked });
                        }
                      }}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">سؤال نشط</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 space-x-reverse mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingFAQ(null);
                }}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveFAQ}
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Save className="w-4 h-4" />
                <span>{editingFAQ ? 'حفظ التغييرات' : 'إضافة السؤال'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQManager;