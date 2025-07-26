import React from 'react';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: t('riyadhBusinessTower'),
      category: t('commercial'),
      status: t('completed'),
      completion: 100,
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('riyadhBusinessTowerDesc'),
      location: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      duration: language === 'ar' ? '36 شهراً' : '36 months',
      client: language === 'ar' ? 'شركة التطوير الملكي' : 'Royal Development Corp',
      value: '$85M'
    },
    {
      title: t('alNoorResidentialComplex'),
      category: t('residential'),
      status: t('inProgress'),
      completion: 75,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('alNoorResidentialComplexDesc'),
      location: language === 'ar' ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      duration: language === 'ar' ? '24 شهراً' : '24 months',
      client: language === 'ar' ? 'شركة النور العقارية' : 'Al Noor Properties',
      value: '$45M'
    },
    {
      title: t('industrialCityPhase1'),
      category: t('industrial'),
      status: t('inProgress'),
      completion: 60,
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('industrialCityPhase1Desc'),
      location: language === 'ar' ? 'الدمام، المملكة العربية السعودية' : 'Dammam, Saudi Arabia',
      duration: language === 'ar' ? '18 شهراً' : '18 months',
      client: language === 'ar' ? 'التنمية الصناعية السعودية' : 'Saudi Industrial Development',
      value: '$120M'
    },
    {
      title: t('greenValleyMall'),
      category: t('commercial'),
      status: t('completed'),
      completion: 100,
      image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('greenValleyMallDesc'),
      location: language === 'ar' ? 'الخبر، المملكة العربية السعودية' : 'Khobar, Saudi Arabia',
      duration: language === 'ar' ? '30 شهراً' : '30 months',
      client: language === 'ar' ? 'تطوير الوادي الأخضر' : 'Green Valley Developments',
      value: '$65M'
    },
    {
      title: t('royalGardensVillas'),
      category: t('residential'),
      status: t('planning'),
      completion: 15,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('royalGardensVillasDesc'),
      location: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      duration: language === 'ar' ? '28 شهراً' : '28 months',
      client: language === 'ar' ? 'عقارات الحدائق الملكية' : 'Royal Gardens Estate',
      value: '$95M'
    },
    {
      title: t('techHubInnovationCenter'),
      category: t('commercial'),
      status: t('inProgress'),
      completion: 40,
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: t('techHubInnovationCenterDesc'),
      location: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      duration: language === 'ar' ? '22 شهراً' : '22 months',
      client: language === 'ar' ? 'هيئة التقنية السعودية' : 'Saudi Tech Authority',
      value: '$78M'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case t('completed'):
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case t('inProgress'):
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case t('planning'):
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case t('commercial'):
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case t('residential'):
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case t('industrial'):
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('projectsTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status and Category Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Value */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-gray-900">{project.value}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">
                        {language === 'ar' ? 'التقدم' : 'Progress'}
                      </span>
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
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                      <Users className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{project.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('projectImpactStatistics')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('projectImpactDesc')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">$488M</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{t('totalProjectValue')}</div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5,000+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{t('jobsCreated')}</div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{t('onTimeDelivery')}</div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{t('citiesServed')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('yourProjectCouldBeNext')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('joinOurPortfolio')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
            >
              {t('startYourProject')}
            </a>
            <a
              href="/register"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
            >
              {t('registerAsClient')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;