import { useState } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with real-time inventory, payment processing, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and natural language processing.',
      image: '🤖',
      tags: ['Next.js', 'Python', 'OpenAI', 'WebSocket'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    {
      title: 'Finance Dashboard',
      description: 'Interactive financial analytics dashboard with real-time data visualization and reporting.',
      image: '📊',
      tags: ['React', 'D3.js', 'TypeScript', 'REST API'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-and-drop, real-time sync, and team features.',
      image: '✅',
      tags: ['Vue.js', 'Firebase', 'Tailwind', 'PWA'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      title: 'REST API Service',
      description: 'Scalable microservices architecture with authentication, rate limiting, and documentation.',
      image: '🔌',
      tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      category: 'backend',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media App',
      description: 'Mobile-first social platform with real-time feeds, messaging, and content sharing.',
      image: '💬',
      tags: ['React Native', 'GraphQL', 'AWS', 'Redis'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of projects I've worked on recently
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                  : darkMode
                    ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-900/80 border border-gray-800 hover:border-violet-500/50' 
                  : 'bg-white border border-gray-200 hover:border-violet-300 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 flex items-center justify-center relative overflow-hidden ${
                darkMode 
                  ? 'bg-gradient-to-br from-violet-900/30 to-cyan-900/30' 
                  : 'bg-gradient-to-br from-violet-50 to-cyan-50'
              }`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a href={project.link} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href={project.github} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-800 text-violet-400' 
                          : 'bg-violet-50 text-violet-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
