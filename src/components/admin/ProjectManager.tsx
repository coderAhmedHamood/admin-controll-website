import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  Calendar, 
  MapPin, 
  DollarSign,
  Users,
  Building,
  Search,
  Filter,
  MoreVertical,
  Save,
  X
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'commercial' | 'residential' | 'industrial';
  status: 'completed' | 'in-progress' | 'planning';
  completion: number;
  value: string;
  duration: string;
  location: string;
  client: string;
  image: string;
  startDate: string;
  endDate: string;
}

const ProjectManager: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'برج الرياض التجاري',
      description: 'برج متعدد الاستخدامات من 40 طابقاً يضم مساحات مكتبية متميزة ومنافذ تجارية فاخرة في قلب الرياض.',
      category: 'commercial',
      status: 'completed',
      completion: 100,
      value: '85 مليون دولار',
      duration: '36 شهراً',
      location: 'الرياض، المملكة العربية السعودية',
      client: 'شركة التطوير الملكي',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2021-01-15',
      endDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'مجمع النور السكني',
      description: 'مجمع سكني حديث يضم 200 شقة فاخرة ومرافق واسعة تشمل المسابح والحدائق.',
      category: 'residential',
      status: 'in-progress',
      completion: 75,
      value: '45 مليون دولار',
      duration: '24 شهراً',
      location: 'جدة، المملكة العربية السعودية',
      client: 'شركة النور العقارية',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2023-06-01',
      endDate: '2025-06-01'
    },
    {
      id: '3',
      title: 'المدينة الصناعية المرحلة الأولى',
      description: 'مرفق تصنيع ولوجستيات متطور يدعم أهداف التنمية الصناعية لرؤية 2030.',
      category: 'industrial',
      status: 'in-progress',
      completion: 60,
      value: '120 مليون دولار',
      duration: '18 شهراً',
      location: 'الدمام، المملكة العربية السعودية',
      client: 'التنمية الصناعية السعودية',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2023-01-01',
      endDate: '2024-07-01'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: 'commercial',
    status: 'planning',
    completion: 0,
    value: '',
    duration: '',
    location: '',
    client: '',
    image: '',
    startDate: '',
    endDate: ''
  });

  const categories = [
    { value: 'all', label: 'جميع الفئات' },
    { value: 'commercial', label: 'تجاري' },
    { value: 'residential', label: 'سكني' },
    { value: 'industrial', label: 'صناعي' }
  ];

  const statuses = [
    { value: 'all', label: 'جميع الحالات' },
    { value: 'completed', label: 'مكتمل' },
    { value: 'in-progress', label: 'قيد التنفيذ' },
    { value: 'planning', label: 'قيد التخطيط' }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      planning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
    };
    return colors[status as keyof typeof colors];
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      commercial: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      residential: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      industrial: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
    };
    return colors[category as keyof typeof colors];
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      completed: 'مكتمل',
      'in-progress': 'قيد التنفيذ',
      planning: 'قيد التخطيط'
    };
    return labels[status as keyof typeof labels];
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      commercial: 'تجاري',
      residential: 'سكني',
      industrial: 'صناعي'
    };
    return labels[category as keyof typeof labels];
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteProject = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleSaveProject = () => {
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
      setEditingProject(null);
    } else {
      const id = Date.now().toString();
      setProjects([...projects, { ...newProject, id } as Project]);
      setNewProject({
        title: '',
        description: '',
        category: 'commercial',
        status: 'planning',
        completion: 0,
        value: '',
        duration: '',
        location: '',
        client: '',
        image: '',
        startDate: '',
        endDate: ''
      });
      setShowAddModal(false);
    }
  };

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">إدارة المشاريع</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            إدارة جميع مشاريع البناء وتفاصيلها
          </p>
        </div>
        
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>إضافة مشروع جديد</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="البحث في المشاريع..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 pl-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
              />
            </div>
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
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Status and Category Badges */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {getStatusLabel(project.status)}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                  {getCategoryLabel(project.category)}
                </span>
              </div>

              {/* Actions Menu */}
              <div className="absolute top-4 left-4">
                <div className="relative group">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
                    <MoreVertical className="w-4 h-4 text-white" />
                  </button>
                  
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="flex items-center space-x-2 space-x-reverse w-full px-4 py-2 text-right text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>تعديل</span>
                    </button>
                    <button className="flex items-center space-x-2 space-x-reverse w-full px-4 py-2 text-right text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                      <span>عرض التفاصيل</span>
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="flex items-center space-x-2 space-x-reverse w-full px-4 py-2 text-right text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Value */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-900">{project.value}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-4 right-4 left-20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-medium">التقدم</span>
                  <span className="text-white text-sm font-bold">{project.completion}%</span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                {project.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse text-sm">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{project.location}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-sm">
                  <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{project.duration}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse text-sm">
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Project Modal */}
      {(showAddModal || editingProject) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingProject(null);
                }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  اسم المشروع
                </label>
                <input
                  type="text"
                  value={editingProject ? editingProject.title : newProject.title}
                  onChange={(e) => {
                    if (editingProject) {
                      setEditingProject({ ...editingProject, title: e.target.value });
                    } else {
                      setNewProject({ ...newProject, title: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                  placeholder="أدخل اسم المشروع"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  وصف المشروع
                </label>
                <textarea
                  value={editingProject ? editingProject.description : newProject.description}
                  onChange={(e) => {
                    if (editingProject) {
                      setEditingProject({ ...editingProject, description: e.target.value });
                    } else {
                      setNewProject({ ...newProject, description: e.target.value });
                    }
                  }}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right resize-none"
                  placeholder="أدخل وصف المشروع"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الفئة
                  </label>
                  <select
                    value={editingProject ? editingProject.category : newProject.category}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, category: e.target.value as any });
                      } else {
                        setNewProject({ ...newProject, category: e.target.value as any });
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
                    الحالة
                  </label>
                  <select
                    value={editingProject ? editingProject.status : newProject.status}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, status: e.target.value as any });
                      } else {
                        setNewProject({ ...newProject, status: e.target.value as any });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  >
                    <option value="planning">قيد التخطيط</option>
                    <option value="in-progress">قيد التنفيذ</option>
                    <option value="completed">مكتمل</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    قيمة المشروع
                  </label>
                  <input
                    type="text"
                    value={editingProject ? editingProject.value : newProject.value}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, value: e.target.value });
                      } else {
                        setNewProject({ ...newProject, value: e.target.value });
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
                    value={editingProject ? editingProject.duration : newProject.duration}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, duration: e.target.value });
                      } else {
                        setNewProject({ ...newProject, duration: e.target.value });
                      }
                    }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                    placeholder="مثال: 36 شهراً"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الموقع
                </label>
                <input
                  type="text"
                  value={editingProject ? editingProject.location : newProject.location}
                  onChange={(e) => {
                    if (editingProject) {
                      setEditingProject({ ...editingProject, location: e.target.value });
                    } else {
                      setNewProject({ ...newProject, location: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                  placeholder="مثال: الرياض، المملكة العربية السعودية"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  العميل
                </label>
                <input
                  type="text"
                  value={editingProject ? editingProject.client : newProject.client}
                  onChange={(e) => {
                    if (editingProject) {
                      setEditingProject({ ...editingProject, client: e.target.value });
                    } else {
                      setNewProject({ ...newProject, client: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                  placeholder="مثال: شركة التطوير الملكي"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  رابط الصورة
                </label>
                <input
                  type="url"
                  value={editingProject ? editingProject.image : newProject.image}
                  onChange={(e) => {
                    if (editingProject) {
                      setEditingProject({ ...editingProject, image: e.target.value });
                    } else {
                      setNewProject({ ...newProject, image: e.target.value });
                    }
                  }}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-right"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4 space-x-reverse mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingProject(null);
                }}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveProject}
                className="flex items-center space-x-2 space-x-reverse px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Save className="w-4 h-4" />
                <span>{editingProject ? 'حفظ التغييرات' : 'إضافة المشروع'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            لم يتم العثور على مشاريع
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            حاول تعديل معايير البحث أو التصفية
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            إضافة مشروعك الأول
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectManager;