import React, { useState, useEffect } from 'react';
import { FileText, Download, ExternalLink, Database, Cloud, Sun, Moon, Code, Cpu, Zap, Globe, User, Award, Briefcase, Menu, X, Linkedin, MessageCircle, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface PDFResource {
  id: string;
  title: string;
  filename: string;
  category: string;
  date: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  url: string;
  videoId: string;
  category: string;
}

interface Resume {
  id: string;
  title: string;
  filename: string;
  experience: string;
  skills: string[];
}

const pdfResources: PDFResource[] = [
  {
    id: '1',
    title: 'System Design Interview Questions',
    filename: 'https://drive.google.com/file/d/1sjaigz8gT977XjFqnAe9oDUtVCT34au9/view?usp=sharing',
    category: 'System Design',
    date: '2025-01-29'
  },
  {
    id: '2',
    title: 'Apache Spark Interview Questions',
    filename: '/files/spark_interview_questions.pdf',
    category: 'Big Data',
    date: '2025-01-28'
  },
  {
    id: '3',
    title: 'Data Warehouse Interview Questions',
    filename: '/files/warehouse_interview_questions.pdf',
    category: 'Warehousing',
    date: '2025-01-27'
  },
  {
    id: '4',
    title: 'ETL Pipeline Interview Questions',
    filename: '/files/etl_interview_questions.pdf',
    category: 'Processing',
    date: '2025-01-26'
  },
  {
    id: '5',
    title: 'Streaming Architecture Interview Questions',
    filename: '/files/streaming_interview_questions.pdf',
    category: 'Streaming',
    date: '2025-01-25'
  },
  {
    id: '6',
    title: 'Data Quality & Governance Questions',
    filename: '/files/data_quality_interview_questions.pdf',
    category: 'Governance',
    date: '2025-01-24'
  },
  {
    id: '7',
    title: 'Python for Data Engineering Questions',
    filename: '/files/python_data_engineering_questions.pdf',
    category: 'Programming',
    date: '2025-01-23'
  },
  {
    id: '8',
    title: 'SQL Advanced Interview Questions',
    filename: '/files/sql_advanced_questions.pdf',
    category: 'Database',
    date: '2025-01-22'
  }
];

const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Data Engineering Career Path',
    url: 'https://www.youtube.com/watch?v=xS82xt6wvzw',
    videoId: 'xS82xt6wvzw',
    category: 'Career'
  },
  {
    id: '2',
    title: 'Apache Kafka Deep Dive',
    url: 'https://www.youtube.com/watch?v=E8DTgn4cfcY',
    videoId: 'E8DTgn4cfcY',
    category: 'Streaming'
  },
  {
    id: '3',
    title: 'Building Data Pipelines',
    url: 'https://www.youtube.com/watch?v=DVviilX5p7Q',
    videoId: 'DVviilX5p7Q',
    category: 'Python'
  },
  {
    id: '4',
    title: 'Docker for Data Engineers',
    url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
    videoId: '3c-iBn73dDE',
    category: 'DevOps'
  },
  {
    id: '5',
    title: 'SQL Optimization Techniques',
    url: 'https://www.youtube.com/watch?v=BHwzDmr6d7s',
    videoId: 'BHwzDmr6d7s',
    category: 'SQL'
  },
  {
    id: '6',
    title: 'Data Lake Architecture',
    url: 'https://www.youtube.com/watch?v=mXVfq5bDKRI',
    videoId: 'mXVfq5bDKRI',
    category: 'Architecture'
  },
  {
    id: '7',
    title: 'Apache Airflow Tutorial',
    url: 'https://www.youtube.com/watch?v=K9AnJ9_ZAXE',
    videoId: 'K9AnJ9_ZAXE',
    category: 'Orchestration'
  },
  {
    id: '8',
    title: 'Real-time Analytics',
    url: 'https://www.youtube.com/watch?v=7wmmxJlBrOw',
    videoId: '7wmmxJlBrOw',
    category: 'Analytics'
  }
];

const resumes: Resume[] = [
  {
    id: '1',
    title: 'Senior Data Engineer Resume',
    filename: '/files/senior_data_engineer_resume.pdf',
    experience: '5+ Years',
    skills: ['Apache Spark', 'AWS', 'Python', 'SQL', 'Kafka']
  },
  {
    id: '2',
    title: 'Junior Data Engineer Resume',
    filename: '/files/junior_data_engineer_resume.pdf',
    experience: '1-2 Years',
    skills: ['Python', 'SQL', 'Docker', 'Git', 'ETL']
  },
  {
    id: '3',
    title: 'Data Architect Resume',
    filename: '/files/data_architect_resume.pdf',
    experience: '8+ Years',
    skills: ['System Design', 'Cloud Architecture', 'Big Data', 'Leadership']
  },
  {
    id: '4',
    title: 'ML Engineer Resume',
    filename: '/files/ml_engineer_resume.pdf',
    experience: '3-5 Years',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'MLOps', 'Data Science']
  },
  {
    id: '5',
    title: 'Data Analyst Resume',
    filename: '/files/data_analyst_resume.pdf',
    experience: '2-3 Years',
    skills: ['SQL', 'Tableau', 'Excel', 'Statistics', 'Business Intelligence']
  },
  {
    id: '6',
    title: 'DevOps Engineer Resume',
    filename: '/files/devops_engineer_resume.pdf',
    experience: '4-6 Years',
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'AWS', 'Infrastructure']
  },
  {
    id: '7',
    title: 'Cloud Data Engineer Resume',
    filename: '/files/cloud_data_engineer_resume.pdf',
    experience: '3-4 Years',
    skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Serverless']
  },
  {
    id: '8',
    title: 'Big Data Engineer Resume',
    filename: '/files/big_data_engineer_resume.pdf',
    experience: '6+ Years',
    skills: ['Hadoop', 'Spark', 'Hive', 'HBase', 'Scala']
  }
];

const LinkedInContact: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`transition-all duration-500 ${isExpanded ? 'transform translate-y-0' : 'transform translate-y-2'}`}>
        {isExpanded && (
          <div className={`mb-4 p-4 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-500 transform ${
            isDark 
              ? 'bg-slate-800/90 border-slate-700/50 text-white' 
              : 'bg-white/90 border-blue-200/50 text-gray-800'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              <MessageCircle className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className="font-semibold text-sm">Need Help?</span>
            </div>
            <p className={`text-xs mb-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Have questions about data engineering? Connect with me on LinkedIn!
            </p>
            <a
              href="https://www.linkedin.com/in/asjad-baig/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        )}
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center group ${
          isDark 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        } ${isExpanded ? 'rotate-45' : 'rotate-0'}`}
      >
        {isExpanded ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <Linkedin className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>
    </div>
  );
};

const HorizontalScrollSection: React.FC<{ 
  children: React.ReactNode; 
  title: string; 
  subtitle: string; 
  icon: React.ReactNode;
  isDark: boolean;
}> = ({ children, title, subtitle, icon, isDark }) => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {icon}
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors duration-700 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
        </div>
        <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto transition-colors duration-700 px-4 leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-blue-700/80'
        }`}>
          {subtitle}
        </p>
      </div>

      {/* 2-row grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </section>
  );
};

const PDFResourceCard: React.FC<{ resource: PDFResource; isDark: boolean }> = ({ resource, isDark }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resource.filename;
    link.download = resource.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 h-64 flex flex-col ${
      isDark 
        ? 'bg-slate-800/30 border-slate-700/30 hover:border-blue-400/40 hover:bg-slate-800/50' 
        : 'bg-white/70 border-blue-200/40 hover:border-blue-400/60 hover:bg-white/90 hover:shadow-blue-200/25'
    } backdrop-blur-md shadow-lg hover:shadow-xl`}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5' 
          : 'bg-gradient-to-br from-blue-500/5 to-sky-500/5'
      }`} />
      
      <div className="relative p-4 flex flex-col h-full">
        {/* Header with icon and date */}
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${
            isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100/80 text-blue-600'
          }`}>
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className={`w-3 h-3 ${isDark ? 'text-slate-400' : 'text-blue-600/70'}`} />
            <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-blue-600/70'}`}>
              {resource.date}
            </span>
          </div>
        </div>

        {/* Category badge */}
        <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 self-start ${
          isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-blue-50/80 text-blue-700'
        }`}>
          {resource.category}
        </div>

        {/* Content - grows to fill space */}
        <div className="flex-grow">
          <h3 className={`text-base font-semibold mb-2 leading-tight transition-colors duration-300 line-clamp-2 ${
            isDark ? 'text-white group-hover:text-blue-300' : 'text-gray-800 group-hover:text-blue-600'
          }`}>
            {resource.title}
          </h3>
          <p className={`text-sm leading-relaxed transition-colors duration-300 line-clamp-2 ${
            isDark ? 'text-slate-400' : 'text-blue-600/70'
          }`}>
            Comprehensive interview questions and answers for {resource.category.toLowerCase()} topics. Perfect for interview preparation.
          </p>
        </div>

        {/* Download button at bottom */}
        <button
          onClick={handleDownload}
          className={`mt-4 w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
            isDark 
              ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-400/30' 
              : 'bg-blue-100/80 hover:bg-blue-200/80 text-blue-600 border border-blue-300/50'
          }`}
        >
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download PDF</span>
        </button>
      </div>
    </div>
  );
};

const YouTubeVideoCard: React.FC<{ video: YouTubeVideo; isDark: boolean }> = ({ video, isDark }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

  const handleVideoClick = () => {
    window.open(video.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer h-64 flex flex-col ${
      isDark 
        ? 'bg-slate-800/30 border-slate-700/30 hover:border-red-400/40 hover:bg-slate-800/50' 
        : 'bg-white/70 border-blue-200/40 hover:border-red-400/60 hover:bg-white/90 hover:shadow-red-200/25'
    } backdrop-blur-md shadow-lg hover:shadow-xl`}
         onClick={handleVideoClick}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-red-500/5 to-pink-500/5' 
          : 'bg-gradient-to-br from-red-500/5 to-pink-500/5'
      }`} />
      
      <div className="relative">
        <div className="relative overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
            <div className="bg-red-500/90 group-hover:bg-red-500 rounded-full p-3 opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 active:scale-95">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
            </div>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ExternalLink className="w-5 h-5 text-white drop-shadow-lg" />
          </div>
        </div>
        
        <div className="relative p-3 flex-grow flex flex-col">
          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 transition-all duration-300 group-hover:scale-105 ${
            isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-blue-50/80 text-blue-700'
          }`}>
            {video.category}
          </div>
          <h3 className={`text-sm font-semibold leading-tight transition-colors duration-300 line-clamp-2 flex-grow ${
            isDark ? 'text-white group-hover:text-red-300' : 'text-gray-800 group-hover:text-red-600'
          }`}>
            {video.title}
          </h3>
          <p className={`text-xs mt-2 leading-relaxed transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-blue-600/70'}`}>
            Click to watch on YouTube
          </p>
        </div>
      </div>
    </div>
  );
};

const ResumeCard: React.FC<{ resume: Resume; isDark: boolean }> = ({ resume, isDark }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.filename;
    link.download = resume.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:rotate-1 flex-shrink-0 w-80 ${
      isDark 
        ? 'bg-slate-800/30 border-slate-700/30 hover:border-green-400/40 hover:bg-slate-800/50' 
        : 'bg-white/70 border-blue-200/40 hover:border-green-400/60 hover:bg-white/90 hover:shadow-green-200/25'
    } backdrop-blur-md shadow-lg hover:shadow-xl`}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-green-500/5 to-emerald-500/5' 
          : 'bg-gradient-to-br from-green-500/5 to-emerald-500/5'
      }`} />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-grow">
            <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
              isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100/80 text-green-600'
            }`}>
              <User className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium mb-2 transition-all duration-300 group-hover:scale-105 ${
                isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-blue-50/80 text-blue-700'
              }`}>
                <Briefcase className="w-3 h-3" />
                <span>{resume.experience}</span>
              </div>
              <h3 className={`text-lg font-semibold mb-2 leading-tight transition-colors duration-300 ${
                isDark ? 'text-white group-hover:text-green-300' : 'text-gray-800 group-hover:text-green-600'
              }`}>
                {resume.title}
              </h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {resume.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-md text-xs transition-all duration-300 hover:scale-105 ${
                      isDark ? 'bg-slate-600/50 text-slate-300' : 'bg-blue-100/60 text-blue-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
                {resume.skills.length > 3 && (
                  <span className={`px-2 py-1 rounded-md text-xs ${
                    isDark ? 'bg-slate-600/50 text-slate-400' : 'bg-blue-100/60 text-blue-600'
                  }`}>
                    +{resume.skills.length - 3} more
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-blue-600/70'}`}>
                Professional resume template
              </p>
            </div>
          </div>
          <button
            onClick={handleDownload}
            className={`flex-shrink-0 ml-4 p-3 rounded-xl transition-all duration-300 group-hover:scale-110 hover:rotate-12 active:scale-95 ${
              isDark 
                ? 'bg-green-500/20 hover:bg-green-500/30 text-green-400' 
                : 'bg-green-100/80 hover:bg-green-200/80 text-green-600'
            }`}
            title="Download Resume"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white'
        : 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 text-gray-900'
    }`}>
      {/* Subtle Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse animate-float ${
          isDark ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-sky-300 to-blue-400'
        }`} style={{ animationDuration: '8s' }} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse animate-float ${
          isDark ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-blue-300 to-sky-400'
        }`} style={{ animationDelay: '4s', animationDuration: '8s' }} />
      </div>

      {/* LinkedIn Contact Widget */}
      <LinkedInContact isDark={isDark} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-700 ${
        isDark 
          ? 'bg-slate-900/20 border-slate-700/30'
          : 'bg-white/40 border-blue-200/30'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Database className={`w-6 h-6 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <span className={`text-lg font-semibold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Data Prep Hub
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('materials')}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark ? 'text-slate-300 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Interview Questions
              </button>
              <button
                onClick={() => scrollToSection('videos')}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark ? 'text-slate-300 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Reference Videos
              </button>
              <button
                onClick={() => scrollToSection('resumes')}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isDark ? 'text-slate-300 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Resumes
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
                isDark 
                  ? 'bg-slate-800/40 hover:bg-slate-700/60 text-blue-300'
                  : 'bg-white/60 hover:bg-white/80 text-blue-600'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t transition-all duration-300 ${
              isDark ? 'border-slate-700/30' : 'border-blue-200/30'
            }`}>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('materials')}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isDark ? 'text-slate-300 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Interview Questions
                </button>
                <button
                  onClick={() => scrollToSection('videos')}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isDark ? 'text-slate-300 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Reference Videos
                </button>
                <button
                  onClick={() => scrollToSection('resumes')}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isDark ? 'text-slate-300 hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Resumes
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <header className={`relative backdrop-blur-sm border-b transition-all duration-700 mt-16 ${
        isDark 
          ? 'bg-slate-900/20 border-slate-700/30'
          : 'bg-white/40 border-blue-200/30'
      }`}>
        {/* Theme Toggle - Positioned absolutely in top right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
          <button
            onClick={toggleTheme}
            className={`p-2 sm:p-3 rounded-xl transition-all duration-500 hover:scale-110 hover:rotate-12 active:scale-95 group ${
              isDark 
                ? 'bg-slate-800/40 hover:bg-slate-700/60 text-blue-300 border border-slate-700/40 hover:border-blue-400/40'
                : 'bg-white/60 hover:bg-white/80 text-blue-600 border border-blue-200/40 hover:border-blue-400/40'
            } backdrop-blur-md shadow-lg hover:shadow-xl`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-180" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative group">
                  {/* Floating glow effect */}
                  <div className={`absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl ${
                    isDark 
                      ? 'bg-gradient-to-br from-blue-400/40 via-cyan-400/40 to-indigo-500/40' 
                      : 'bg-gradient-to-br from-sky-500/30 via-blue-500/30 to-indigo-600/30'
                  } animate-pulse`} style={{ animationDuration: '3s' }} />
                  
                  {/* Main floating container */}
                  <div className={`relative p-5 sm:p-6 rounded-3xl transition-all duration-700 group-hover:scale-110 animate-bounce ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800/40 via-blue-900/30 to-indigo-900/40 border border-blue-400/20 shadow-2xl shadow-blue-500/20'
                      : 'bg-gradient-to-br from-white/70 via-sky-50/90 to-blue-100/70 border border-blue-300/40 shadow-2xl shadow-blue-500/15'
                  } backdrop-blur-lg group-hover:shadow-3xl`} style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}>
                    <Database className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${
                      isDark ? 'text-blue-300 group-hover:text-cyan-300' : 'text-blue-600 group-hover:text-sky-700'
                    }`} />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className={`absolute top-0 left-0 w-2 h-2 rounded-full opacity-60 animate-ping ${
                    isDark 
                      ? 'bg-blue-400'
                      : 'bg-sky-500'
                  }`} style={{ animationDelay: '0s', animationDuration: '2s' }} />
                  <div className={`absolute top-2 right-1 w-1 h-1 rounded-full opacity-40 animate-ping ${
                    isDark 
                      ? 'bg-cyan-400'
                      : 'bg-blue-500'
                  }`} style={{ animationDelay: '1s', animationDuration: '3s' }} />
                  <div className={`absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full opacity-50 animate-ping ${
                    isDark 
                      ? 'bg-indigo-400'
                      : 'bg-indigo-500'
                  }`} style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
                </div>
              </div>
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-700 leading-tight sm:leading-tight lg:leading-tight ${
                isDark 
                  ? 'from-blue-300 via-cyan-300 to-indigo-300'
                  : 'from-sky-600 via-blue-600 to-indigo-600'
              }`}>
                Data Engineering Prep Hub
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl max-w-2xl mx-auto transition-colors duration-700 px-4 leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-blue-700/80'
              }`}>
                Master data engineering interviews with curated questions and expert tutorials
              </p>
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Zap className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 hover:scale-110 ${isDark ? 'text-yellow-400' : 'text-orange-500'}`} />
                  <span className={`text-xs sm:text-sm transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-blue-700/70'}`}>Daily Updates</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Globe className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 hover:scale-110 ${isDark ? 'text-green-400' : 'text-emerald-500'}`} />
                  <span className={`text-xs sm:text-sm transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-blue-700/70'}`}>Free Access</span>
                </div>
              </div>
             
             {/* Technology Tags Section */}
             <div className="mt-8 sm:mt-10">
               <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto px-4">
                 <div className={`group px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:rotate-1 active:scale-95 cursor-pointer ${
                   isDark 
                     ? 'bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 hover:border-orange-400/50' 
                     : 'bg-orange-100/80 hover:bg-orange-200/80 border border-orange-300/50 hover:border-orange-400/60 hover:shadow-orange-200/50'
                 } backdrop-blur-sm shadow-sm hover:shadow-md`}>
                   <div className="flex items-center space-x-1.5 sm:space-x-2">
                     <Zap className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                     <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-orange-300' : 'text-orange-700'}`}>
                       Apache Spark
                     </span>
                   </div>
                 </div>
                 
                 <div className={`group px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:-rotate-1 active:scale-95 cursor-pointer ${
                   isDark 
                     ? 'bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/50' 
                     : 'bg-blue-100/80 hover:bg-blue-200/80 border border-blue-300/50 hover:border-blue-400/60 hover:shadow-blue-200/50'
                 } backdrop-blur-sm shadow-sm hover:shadow-md`}>
                   <div className="flex items-center space-x-1.5 sm:space-x-2">
                     <Cloud className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                     <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                       Cloud Platforms
                     </span>
                   </div>
                 </div>
                 
                 <div className={`group px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:rotate-1 active:scale-95 cursor-pointer ${
                   isDark 
                     ? 'bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 hover:border-purple-400/50' 
                     : 'bg-purple-100/80 hover:bg-purple-200/80 border border-purple-300/50 hover:border-purple-400/60 hover:shadow-purple-200/50'
                 } backdrop-blur-sm shadow-sm hover:shadow-md`}>
                   <div className="flex items-center space-x-1.5 sm:space-x-2">
                     <Database className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                     <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                       Data Warehousing
                     </span>
                   </div>
                 </div>
                 
                 <div className={`group px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:-rotate-1 active:scale-95 cursor-pointer ${
                   isDark 
                     ? 'bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 hover:border-green-400/50' 
                     : 'bg-green-100/80 hover:bg-green-200/80 border border-green-300/50 hover:border-green-400/60 hover:shadow-green-200/50'
                 } backdrop-blur-sm shadow-sm hover:shadow-md`}>
                   <div className="flex items-center space-x-1.5 sm:space-x-2">
                     <Code className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                     <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                       ETL Pipelines
                     </span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Interview Questions Section */}
        <div id="materials">
          <HorizontalScrollSection
            title="Interview Questions"
            subtitle="I add 5 new PDFs daily with the latest interview questions. Track your progress with dates!"
            icon={<FileText className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`} />}
            isDark={isDark}
          >
            {pdfResources.map((resource, index) => (
              <div
                key={resource.id}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-fade-in-up"
              >
                <PDFResourceCard resource={resource} isDark={isDark} />
              </div>
            ))}
          </HorizontalScrollSection>
        </div>

        {/* YouTube Videos Section */}
        <div id="videos">
          <HorizontalScrollSection
            title="Video Tutorials"
            subtitle="Learn from industry professionals with hands-on tutorials and real-world examples"
            icon={<div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 ${
              isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100/80 text-red-600'
            }`}>
              <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-current border-y-[5px] sm:border-y-[8px] border-y-transparent ml-0.5 sm:ml-1" />
            </div>}
            isDark={isDark}
          >
            {youtubeVideos.map((video, index) => (
              <div
                key={video.id}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-fade-in-up"
              >
                <YouTubeVideoCard video={video} isDark={isDark} />
              </div>
            ))}
          </HorizontalScrollSection>
        </div>

        {/* Resumes Section */}
        <div id="resumes">
          <HorizontalScrollSection
            title="Resume Templates"
            subtitle="Professional resume templates tailored for data engineering roles at all experience levels"
            icon={<User className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`} />}
            isDark={isDark}
          >
            {resumes.map((resume, index) => (
              <div
                key={resume.id}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-fade-in-up"
              >
                <ResumeCard resume={resume} isDark={isDark} />
              </div>
            ))}
          </HorizontalScrollSection>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative backdrop-blur-sm border-t mt-16 sm:mt-20 lg:mt-24 transition-all duration-700 ${
        isDark 
          ? 'bg-slate-900/20 border-slate-700/30'
          : 'bg-white/40 border-blue-200/30'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <Database className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 hover:scale-110 hover:rotate-12 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-lg sm:text-xl font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Data Engineering Prep Hub
              </span>
            </div>
            <p className={`text-sm sm:text-base mb-2 sm:mb-3 transition-colors duration-700 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-blue-700/80'
            }`}>
              Empowering the next generation of data engineers
            </p>
            <p className={`text-xs sm:text-sm transition-colors duration-700 leading-relaxed flex items-center justify-center space-x-1 ${
              isDark ? 'text-slate-400' : 'text-blue-600/70'
            }`}>
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by Asjad</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;