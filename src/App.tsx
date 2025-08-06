import React, { useState, useRef } from 'react';
import { 
  Database, 
  FileText, 
  Play, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  X,
  Sun,
  Moon,
  Zap,
  Shield,
  Cloud,
  Warehouse,
  GitBranch,
  Settings
} from 'lucide-react';

function App() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('interview-questions');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const studyScrollRef = useRef<HTMLDivElement>(null);
  const resumeScrollRef = useRef<HTMLDivElement>(null);

  // Navigation sections
  const navigationSections = [
    { id: 'interview-questions', label: 'Interview Questions' },
    { id: 'reference-videos', label: 'Reference Videos' },
    { id: 'resumes', label: 'Resumes' }
  ];

  // Topic pills data
  const topicPills = [
    { id: 'apache-spark', label: 'Apache Spark', icon: Zap, color: 'from-orange-500 to-red-500' },
    { id: 'cloud-platforms', label: 'Cloud Platforms', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'data-warehousing', label: 'Data Warehousing', icon: Warehouse, color: 'from-purple-500 to-pink-500' },
    { id: 'etl-pipelines', label: 'ETL Pipelines', icon: GitBranch, color: 'from-green-500 to-emerald-500' }
  ];

  // Video categories data
  const videoCategories = [
    {
      id: 'pipeline-building',
      title: 'Pipeline Building',
      description: 'Learn to build robust data pipelines with modern tools',
      icon: Settings,
      gradient: 'from-blue-500 to-blue-700',
      videoCount: 8,
      videos: [
        {
          id: 1,
          title: 'Apache Airflow Complete Tutorial',
          thumbnail: 'https://img.youtube.com/vi/K9AnJ9_ZAXE/maxresdefault.jpg',
          duration: '45:30',
          category: 'Pipeline',
          url: 'https://youtube.com/watch?v=K9AnJ9_ZAXE'
        },
        {
          id: 2,
          title: 'Building ETL with Python',
          thumbnail: 'https://img.youtube.com/vi/dvviIUKwH7o/maxresdefault.jpg',
          duration: '32:15',
          category: 'ETL',
          url: 'https://youtube.com/watch?v=dvviIUKwH7o'
        }
      ]
    },
    {
      id: 'end-to-end-projects',
      title: 'End-to-End Projects',
      description: 'Complete project walkthroughs from start to finish',
      icon: FileText,
      gradient: 'from-purple-500 to-purple-700',
      videoCount: 6,
      videos: [
        {
          id: 3,
          title: 'Complete Data Engineering Project',
          thumbnail: 'https://img.youtube.com/vi/WpQECq5Hx9g/maxresdefault.jpg',
          duration: '1:15:30',
          category: 'Project',
          url: 'https://youtube.com/watch?v=WpQECq5Hx9g'
        }
      ]
    }
  ];

  const studyMaterials = [
    {
      title: 'Data Pipeline Patterns',
      description: 'Comprehensive guide to modern data pipeline architectures and best practices',
      filename: 'data_pipeline_patterns.pdf',
      pages: 45,
      category: 'Architecture'
    },
    {
      title: 'Spark Interview Questions',
      description: 'Essential Apache Spark questions with detailed explanations and code examples',
      filename: 'spark_interview_questions.pdf',
      pages: 32,
      category: 'Interview'
    },
    {
      title: 'Data Warehouse Best Practices',
      description: 'Industry-standard approaches to designing and maintaining data warehouses',
      filename: 'warehouse_best_practices.pdf',
      pages: 58,
      category: 'Warehousing'
    },
    {
      title: 'ETL vs ELT Guide',
      description: 'Complete comparison of ETL and ELT approaches with real-world examples',
      filename: 'etl_vs_elt_guide.pdf',
      pages: 28,
      category: 'Processing'
    }
  ];

  const resumeTemplates = [
    {
      title: 'Senior Data Engineer',
      description: 'Professional template for experienced data engineers with 5+ years experience',
      filename: 'senior_data_engineer_resume.pdf',
      experience: '5+ Years',
      category: 'Senior'
    },
    {
      title: 'Junior Data Engineer',
      description: 'Entry-level template perfect for new graduates and career changers',
      filename: 'junior_data_engineer_resume.pdf',
      experience: '0-2 Years',
      category: 'Junior'
    },
    {
      title: 'Data Architect',
      description: 'Leadership-focused template for data architecture and strategy roles',
      filename: 'data_architect_resume.pdf',
      experience: '8+ Years',
      category: 'Leadership'
    }
  ];

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 320;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openVideoPopup = (categoryId: string) => {
    setSelectedVideoCategory(categoryId);
    setIsVideoPopupOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
    setSelectedVideoCategory(null);
  };

  const selectedCategory = videoCategories.find(cat => cat.id === selectedVideoCategory);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode 
    ? 'bg-slate-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  const headerClasses = isDarkMode
    ? 'bg-slate-900/95 border-slate-800'
    : 'bg-white/95 border-gray-200';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${headerClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Data Prep Hub</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'text-blue-500'
                      : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className={`p-6 rounded-3xl ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-lg'} transition-colors duration-300`}>
              <Database className="w-16 h-16 text-blue-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Data Engineering Prep Hub
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Master data engineering interviews with curated questions and expert tutorials
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Daily Updates
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Free Access
            </div>
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {topicPills.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <button
                  key={topic.id}
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${topic.color} text-white rounded-full font-medium hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <IconComponent className="w-5 h-5" />
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeSection === 'interview-questions' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Study Materials</h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive guides and documentation to master data engineering concepts
              </p>
            </div>

            <div className="relative">
              <button 
                onClick={() => scroll(studyScrollRef, 'left')}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900 shadow-lg'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => scroll(studyScrollRef, 'right')}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900 shadow-lg'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div 
                ref={studyScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              >
                {studyMaterials.map((material, index) => (
                  <div 
                    key={index}
                    className={`flex-none w-80 rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' 
                        : 'bg-white border-gray-200 hover:border-blue-500/50 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <FileText className="w-8 h-8 text-blue-500" />
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-sm rounded-full">
                        {material.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {material.title}
                    </h3>
                    
                    <p className={`mb-4 line-clamp-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {material.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-sm flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FileText className="w-4 h-4" />
                        {material.pages} pages
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedPdf(material.filename)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'reference-videos' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Video Tutorials</h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Learn from industry professionals with hands-on tutorials and real-world examples
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div 
                    key={category.id}
                    onClick={() => openVideoPopup(category.id)}
                    className={`relative rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl h-64 flex flex-col justify-between ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800' 
                        : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-10 h-10 text-blue-500" />
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-sm rounded-full">
                          {category.videoCount} videos
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">
                        {category.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {category.description}
                      </p>
                    </div>
                    
                    <div className={`flex items-center text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span>Click to explore</span>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'resumes' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Resume Templates</h2>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Professional resume templates tailored for data engineering roles
              </p>
            </div>

            <div className="relative">
              <button 
                onClick={() => scroll(resumeScrollRef, 'left')}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900 shadow-lg'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => scroll(resumeScrollRef, 'right')}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700/80 text-white' : 'bg-white/80 hover:bg-white text-gray-900 shadow-lg'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div 
                ref={resumeScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              >
                {resumeTemplates.map((template, index) => (
                  <div 
                    key={index}
                    className={`flex-none w-80 rounded-2xl p-6 border transition-all duration-500 hover:scale-105 h-80 ${
                      isDarkMode 
                        ? 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50' 
                        : 'bg-white border-gray-200 hover:border-purple-500/50 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-xl">
                        <FileText className="w-8 h-8 text-purple-500" />
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-500 text-sm rounded-full">
                        {template.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {template.title}
                    </h3>
                    
                    <p className={`mb-4 line-clamp-3 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {template.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-sm flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <FileText className="w-4 h-4" />
                        {template.experience}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedPdf(template.filename)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Template
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Category Popup */}
      {isVideoPopupOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <div className={`p-6 border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500 rounded-xl">
                    <selectedCategory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedCategory.title}</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedCategory.description}</p>
                  </div>
                </div>
                <button 
                  onClick={closeVideoPopup}
                  className={`p-2 rounded-xl transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCategory.videos.map((video) => (
                  <div 
                    key={video.id}
                    className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                        {video.duration}
                      </div>
                      <div className="absolute bottom-3 left-3 px-2 py-1 bg-blue-500/80 text-white text-xs rounded">
                        {video.category}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="text-lg font-semibold mb-2 line-clamp-2">
                        {video.title}
                      </h4>
                      
                      <a 
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors duration-300"
                      >
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Popup */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl max-w-md w-full p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">Download PDF</h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Click the button below to download the selected PDF file.
              </p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className={`flex-1 px-4 py-2 border rounded-lg transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <a 
                  href={`/files/${selectedPdf}`}
                  download
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center"
                  onClick={() => setSelectedPdf(null)}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;