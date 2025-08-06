import React, { useState, useRef, useEffect } from 'react';
import { 
  Database, 
  FileText, 
  Play, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  X,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Target,
  TrendingUp,
  Settings
} from 'lucide-react';

function App() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string | null>(null);
  const studyScrollRef = useRef<HTMLDivElement>(null);
  const resumeScrollRef = useRef<HTMLDivElement>(null);

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
        },
        {
          id: 3,
          title: 'Data Pipeline with Apache Kafka',
          thumbnail: 'https://img.youtube.com/vi/R873BlNVUB4/maxresdefault.jpg',
          duration: '38:45',
          category: 'Streaming',
          url: 'https://youtube.com/watch?v=R873BlNVUB4'
        },
        {
          id: 4,
          title: 'Docker for Data Engineers',
          thumbnail: 'https://img.youtube.com/vi/3c-iBn73dDE/maxresdefault.jpg',
          duration: '28:20',
          category: 'DevOps',
          url: 'https://youtube.com/watch?v=3c-iBn73dDE'
        }
      ]
    },
    {
      id: 'end-to-end-projects',
      title: 'End-to-End Projects',
      description: 'Complete project walkthroughs from start to finish',
      icon: Target,
      gradient: 'from-purple-500 to-purple-700',
      videoCount: 6,
      videos: [
        {
          id: 5,
          title: 'Complete Data Engineering Project',
          thumbnail: 'https://img.youtube.com/vi/WpQECq5Hx9g/maxresdefault.jpg',
          duration: '1:15:30',
          category: 'Project',
          url: 'https://youtube.com/watch?v=WpQECq5Hx9g'
        },
        {
          id: 6,
          title: 'Real-time Analytics Dashboard',
          thumbnail: 'https://img.youtube.com/vi/MqZgoNaBDAQ/maxresdefault.jpg',
          duration: '52:45',
          category: 'Analytics',
          url: 'https://youtube.com/watch?v=MqZgoNaBDAQ'
        },
        {
          id: 7,
          title: 'AWS Data Lake Implementation',
          thumbnail: 'https://img.youtube.com/vi/iXLVwa94vUc/maxresdefault.jpg',
          duration: '48:20',
          category: 'Cloud',
          url: 'https://youtube.com/watch?v=iXLVwa94vUc'
        }
      ]
    },
    {
      id: 'scenario-questions',
      title: 'Scenario Based Questions',
      description: 'Practice with real interview scenarios and solutions',
      icon: BookOpen,
      gradient: 'from-green-500 to-green-700',
      videoCount: 12,
      videos: [
        {
          id: 8,
          title: 'Data Engineering Interview Questions',
          thumbnail: 'https://img.youtube.com/vi/qWru-b6m030/maxresdefault.jpg',
          duration: '35:15',
          category: 'Interview',
          url: 'https://youtube.com/watch?v=qWru-b6m030'
        },
        {
          id: 9,
          title: 'System Design for Data Engineers',
          thumbnail: 'https://img.youtube.com/vi/f03UEq8U2F8/maxresdefault.jpg',
          duration: '42:30',
          category: 'System Design',
          url: 'https://youtube.com/watch?v=f03UEq8U2F8'
        },
        {
          id: 10,
          title: 'SQL Interview Challenges',
          thumbnail: 'https://img.youtube.com/vi/uAgtOCF6Idk/maxresdefault.jpg',
          duration: '28:45',
          category: 'SQL',
          url: 'https://youtube.com/watch?v=uAgtOCF6Idk'
        }
      ]
    },
    {
      id: 'career-guidance',
      title: 'Career Guidance',
      description: 'Professional development and career advancement tips',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-orange-700',
      videoCount: 10,
      videos: [
        {
          id: 11,
          title: 'Data Engineer Career Path 2024',
          thumbnail: 'https://img.youtube.com/vi/qWru-b6m030/maxresdefault.jpg',
          duration: '25:30',
          category: 'Career',
          url: 'https://youtube.com/watch?v=qWru-b6m030'
        },
        {
          id: 12,
          title: 'Salary Negotiation for Tech',
          thumbnail: 'https://img.youtube.com/vi/fyn4ITKy3p4/maxresdefault.jpg',
          duration: '18:45',
          category: 'Career',
          url: 'https://youtube.com/watch?v=fyn4ITKy3p4'
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
    },
    {
      title: 'Streaming Architecture',
      description: 'Real-time data processing architectures using Kafka, Spark Streaming, and more',
      filename: 'streaming_architecture.pdf',
      pages: 42,
      category: 'Streaming'
    },
    {
      title: 'Data Quality & Governance',
      description: 'Framework for ensuring data quality and implementing governance policies',
      filename: 'data_quality_governance.pdf',
      pages: 36,
      category: 'Governance'
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
    },
    {
      title: 'ML Engineer',
      description: 'Specialized template for machine learning and AI engineering positions',
      filename: 'ml_engineer_resume.pdf',
      experience: '3+ Years',
      category: 'ML/AI'
    },
    {
      title: 'Data Analyst',
      description: 'Analytics-focused template for data analysis and business intelligence roles',
      filename: 'data_analyst_resume.pdf',
      experience: '2+ Years',
      category: 'Analytics'
    },
    {
      title: 'DevOps Engineer',
      description: 'Infrastructure-focused template for DevOps and platform engineering roles',
      filename: 'devops_engineer_resume.pdf',
      experience: '4+ Years',
      category: 'DevOps'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm animate-float">
                <Database className="w-16 h-16 text-blue-300" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
                Data Engineering
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Prep Hub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Your comprehensive resource for data engineering interviews, study materials, and career advancement
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow">
                Start Learning
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
                View Resources
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Study Materials Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FileText className="w-12 h-12 text-blue-400 animate-gentle-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Study Materials
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive guides and documentation to master data engineering concepts
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={() => scroll(studyScrollRef, 'left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 scroll-button-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => scroll(studyScrollRef, 'right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 scroll-button-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={studyScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {studyMaterials.map((material, index) => (
                <div 
                  key={index}
                  className="flex-none w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 card-hover animate-fade-in-up"
                  style={{ 
                    scrollSnapAlign: 'start',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <FileText className="w-8 h-8 text-blue-400" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {material.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {material.title}
                  </h3>
                  
                  <p className="text-blue-200 mb-4 line-clamp-3 leading-relaxed">
                    {material.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-blue-300 text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {material.pages} pages
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedPdf(material.filename)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 button-press"
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

      {/* Video Tutorials Section - Only Category Segments */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Play className="w-12 h-12 text-red-400 animate-gentle-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Video Tutorials
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Learn from industry professionals with hands-on tutorials and real-world examples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.id}
                  onClick={() => openVideoPopup(category.id)}
                  className={`relative bg-gradient-to-br ${category.gradient} rounded-2xl p-8 cursor-pointer transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fade-in-up h-64 flex flex-col justify-between`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-10 h-10 text-white" />
                      <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                        {category.videoCount} videos
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-white/90 text-sm font-medium">
                    <span>Click to explore</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resume Templates Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FileText className="w-12 h-12 text-purple-400 animate-gentle-bounce" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resume Templates
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Professional resume templates tailored for data engineering roles
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={() => scroll(resumeScrollRef, 'left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 scroll-button-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={() => scroll(resumeScrollRef, 'right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 scroll-button-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={resumeScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {resumeTemplates.map((template, index) => (
                <div 
                  key={index}
                  className="flex-none w-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 card-hover animate-fade-in-up h-80"
                  style={{ 
                    scrollSnapAlign: 'start',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <FileText className="w-8 h-8 text-purple-400" />
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {template.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {template.title}
                  </h3>
                  
                  <p className="text-purple-200 mb-4 line-clamp-3 leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-purple-300 text-sm flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {template.experience}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedPdf(template.filename)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 button-press"
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Have questions or need personalized guidance? Let's connect!
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm">contact@dataengineeringhub.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                
                <div className="flex gap-4">
                  <button className="flex-1 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 button-press">
                    <Linkedin className="w-6 h-6" />
                    LinkedIn
                  </button>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30">
                  <h4 className="text-lg font-semibold text-white mb-2">Office Hours</h4>
                  <div className="space-y-2 text-blue-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Monday - Friday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">9:00 AM - 6:00 PM PST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Category Popup */}
      {isVideoPopupOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-backdrop">
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden popup-slide-in">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-r ${selectedCategory.gradient} rounded-xl`}>
                    <selectedCategory.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedCategory.title}</h3>
                    <p className="text-blue-200">{selectedCategory.description}</p>
                  </div>
                </div>
                <button 
                  onClick={closeVideoPopup}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCategory.videos.map((video) => (
                  <div 
                    key={video.id}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden hover:from-white/15 hover:to-white/10 transition-all duration-300 transform hover:scale-105"
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
                      <h4 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {video.title}
                      </h4>
                      
                      <a 
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-backdrop">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 popup-slide-in">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">Download PDF</h3>
              <p className="text-gray-600 mb-6">
                Click the button below to download the selected PDF file.
              </p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedPdf(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
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