import React, { useState } from 'react';
import { 
  Database, 
  FileText, 
  Play, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink,
  Linkedin,
  Settings,
  Code,
  Target,
  TrendingUp,
  Wrench
} from 'lucide-react';

function App() {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('');

  // Video categories with their respective videos
  const videoCategories = {
    'Pipeline Building': [
      {
        title: 'Complete Data Engineering Roadmap 2024',
        thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '45:30',
        category: 'Pipeline',
        url: 'https://youtube.com/watch?v=example1'
      },
      {
        title: 'Building Real-time Data Pipeline with Kafka',
        thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '32:15',
        category: 'Streaming',
        url: 'https://youtube.com/watch?v=example2'
      },
      {
        title: 'Apache Spark for Big Data Processing',
        thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '28:45',
        category: 'Processing',
        url: 'https://youtube.com/watch?v=example3'
      },
      {
        title: 'Data Warehouse Design Patterns',
        thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '38:20',
        category: 'Warehouse',
        url: 'https://youtube.com/watch?v=example4'
      }
    ],
    'End-to-End Projects': [
      {
        title: 'End-to-End Data Pipeline Project',
        thumbnail: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '1:15:30',
        category: 'Project',
        url: 'https://youtube.com/watch?v=example5'
      },
      {
        title: 'Real-time Analytics Dashboard',
        thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '52:10',
        category: 'Analytics',
        url: 'https://youtube.com/watch?v=example6'
      },
      {
        title: 'ETL Pipeline with Python and Airflow',
        thumbnail: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '43:25',
        category: 'ETL',
        url: 'https://youtube.com/watch?v=example7'
      }
    ],
    'Scenario Based Questions': [
      {
        title: 'Data Engineering Interview Questions',
        thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '35:45',
        category: 'Interview',
        url: 'https://youtube.com/watch?v=example8'
      },
      {
        title: 'System Design for Data Engineers',
        thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '48:30',
        category: 'System Design',
        url: 'https://youtube.com/watch?v=example9'
      },
      {
        title: 'Handling Data Quality Issues',
        thumbnail: 'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '25:15',
        category: 'Quality',
        url: 'https://youtube.com/watch?v=example10'
      },
      {
        title: 'Scaling Data Pipelines',
        thumbnail: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '41:20',
        category: 'Scaling',
        url: 'https://youtube.com/watch?v=example11'
      }
    ],
    'Career Guidance': [
      {
        title: 'How to Become a Data Engineer in 2024',
        thumbnail: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '22:30',
        category: 'Career',
        url: 'https://youtube.com/watch?v=example12'
      },
      {
        title: 'Data Engineer Salary Guide',
        thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '18:45',
        category: 'Salary',
        url: 'https://youtube.com/watch?v=example13'
      },
      {
        title: 'Building Your Data Engineering Portfolio',
        thumbnail: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
        duration: '31:10',
        category: 'Portfolio',
        url: 'https://youtube.com/watch?v=example14'
      }
    ]
  };

  const studyMaterials = [
    {
      title: 'Data Pipeline Design Patterns',
      description: 'Comprehensive guide to modern data pipeline architectures and best practices',
      icon: Database,
      filename: 'data_pipeline_patterns.pdf',
      pages: 45,
      category: 'Architecture'
    },
    {
      title: 'Spark Interview Questions & Answers',
      description: 'Complete collection of Apache Spark interview questions with detailed explanations',
      icon: Code,
      filename: 'spark_interview_questions.pdf',
      pages: 32,
      category: 'Interview Prep'
    },
    {
      title: 'Data Warehouse Best Practices',
      description: 'Industry-standard practices for designing and maintaining data warehouses',
      icon: Database,
      filename: 'warehouse_best_practices.pdf',
      pages: 28,
      category: 'Best Practices'
    },
    {
      title: 'ETL vs ELT: Complete Guide',
      description: 'Detailed comparison and implementation strategies for ETL and ELT processes',
      icon: Settings,
      filename: 'etl_vs_elt_guide.pdf',
      pages: 22,
      category: 'Methodology'
    },
    {
      title: 'Streaming Data Architecture',
      description: 'Real-time data processing patterns and streaming architecture designs',
      icon: TrendingUp,
      filename: 'streaming_architecture.pdf',
      pages: 38,
      category: 'Streaming'
    },
    {
      title: 'Data Quality & Governance',
      description: 'Framework for implementing data quality controls and governance policies',
      icon: Target,
      filename: 'data_quality_governance.pdf',
      pages: 41,
      category: 'Governance'
    }
  ];

  const resumeTemplates = [
    {
      title: 'Senior Data Engineer Resume',
      description: 'Professional template for experienced data engineers with 5+ years',
      icon: FileText,
      filename: 'senior_data_engineer_resume.pdf',
      experience: '5+ Years',
      category: 'Senior Level'
    },
    {
      title: 'Junior Data Engineer Resume',
      description: 'Entry-level template perfect for new graduates and career changers',
      icon: FileText,
      filename: 'junior_data_engineer_resume.pdf',
      experience: '0-2 Years',
      category: 'Entry Level'
    },
    {
      title: 'Data Architect Resume',
      description: 'Leadership-focused template for data architecture and strategy roles',
      icon: FileText,
      filename: 'data_architect_resume.pdf',
      experience: '8+ Years',
      category: 'Leadership'
    },
    {
      title: 'ML Engineer Resume',
      description: 'Specialized template for machine learning and AI engineering positions',
      icon: FileText,
      filename: 'ml_engineer_resume.pdf',
      experience: '3+ Years',
      category: 'ML/AI'
    },
    {
      title: 'Data Analyst Resume',
      description: 'Analytics-focused template for data analysis and business intelligence roles',
      icon: FileText,
      filename: 'data_analyst_resume.pdf',
      experience: '2+ Years',
      category: 'Analytics'
    },
    {
      title: 'DevOps Engineer Resume',
      description: 'Infrastructure-focused template for data platform and DevOps roles',
      icon: FileText,
      filename: 'devops_engineer_resume.pdf',
      experience: '4+ Years',
      category: 'DevOps'
    }
  ];

  const openVideoPopup = (category: string) => {
    setSelectedVideoCategory(category);
    setIsVideoPopupOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
    setSelectedVideoCategory('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border-b border-white/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg animate-pulse-glow">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Data Engineering Prep Hub
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Master data engineering with curated study materials, video tutorials, and professional resume templates. 
              Everything you need to excel in your data engineering career.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Study Materials Section */}
        <section className="animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Study Materials</h2>
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive guides and documentation to build your data engineering expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyMaterials.map((material, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <material.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                    {material.pages} pages
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {material.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {material.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                    {material.category}
                  </span>
                  <a 
                    href={`/files/${material.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium button-press"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-red-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Video Tutorials</h2>
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Learn from industry professionals with hands-on tutorials and real-world examples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pipeline Building Category */}
            <div 
              onClick={() => openVideoPopup('Pipeline Building')}
              className="group cursor-pointer bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 h-64 relative overflow-hidden card-hover animate-fade-in-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-medium animate-pulse-glow">
                8 videos
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl w-fit group-hover:bg-blue-500/30 transition-all duration-300">
                    <Wrench className="w-8 h-8 text-blue-400 animate-wiggle" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Pipeline Building
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  Learn to build robust data pipelines with modern tools and best practices
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <span>Explore Category</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              {/* Animated background elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full animate-gentle-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            {/* End-to-End Projects Category */}
            <div 
              onClick={() => openVideoPopup('End-to-End Projects')}
              className="group cursor-pointer bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 h-64 relative overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium animate-pulse-glow">
                6 videos
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl w-fit group-hover:bg-purple-500/30 transition-all duration-300">
                    <Code className="w-8 h-8 text-purple-400 animate-bounce" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  End-to-End Projects
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  Complete project walkthroughs from data ingestion to visualization
                </p>
                <div className="flex items-center text-purple-400 text-sm font-medium">
                  <span>Explore Category</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full animate-gentle-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            {/* Scenario Based Questions Category */}
            <div 
              onClick={() => openVideoPopup('Scenario Based Questions')}
              className="group cursor-pointer bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 h-64 relative overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium animate-pulse-glow">
                12 videos
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <div className="p-3 bg-green-500/20 rounded-xl w-fit group-hover:bg-green-500/30 transition-all duration-300">
                    <Target className="w-8 h-8 text-green-400 animate-wiggle" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                  Scenario Based Questions
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  Real interview scenarios and problem-solving techniques
                </p>
                <div className="flex items-center text-green-400 text-sm font-medium">
                  <span>Explore Category</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full animate-gentle-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            {/* Career Guidance Category */}
            <div 
              onClick={() => openVideoPopup('Career Guidance')}
              className="group cursor-pointer bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 h-64 relative overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs font-medium animate-pulse-glow">
                10 videos
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl w-fit group-hover:bg-orange-500/30 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-orange-400 animate-bounce" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                  Career Guidance
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  Navigate your data engineering career path with expert advice
                </p>
                <div className="flex items-center text-orange-400 text-sm font-medium">
                  <span>Explore Category</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full animate-gentle-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
        </section>

        {/* Resume Templates Section */}
        <section className="animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Resume Templates</h2>
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Professional resume templates tailored for different data engineering roles and experience levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeTemplates.map((template, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <template.icon className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">
                    {template.experience}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                  {template.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                    {template.category}
                  </span>
                  <a 
                    href={`/files/${template.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium button-press"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Video Category Popup */}
      {isVideoPopupOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-backdrop popup-backdrop">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700/50 popup-slide-in">
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedVideoCategory}</h3>
                <p className="text-slate-400 mt-1">
                  {videoCategories[selectedVideoCategory as keyof typeof videoCategories]?.length || 0} videos available
                </p>
              </div>
              <button
                onClick={closeVideoPopup}
                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200 button-press"
              >
                <X className="w-6 h-6 text-slate-400 hover:text-white" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoCategories[selectedVideoCategory as keyof typeof videoCategories]?.map((video, index) => (
                  <div key={index} className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 card-hover">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md">
                          {video.category}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                        {video.title}
                      </h4>
                      <a 
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
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

      {/* LinkedIn Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center space-x-3 button-press scroll-button-shadow"
        >
          <Linkedin className="w-6 h-6" />
          <span className="hidden group-hover:block text-sm font-medium pr-2 animate-fade-in-up">
            Connect with me
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;