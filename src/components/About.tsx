interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className={`rounded-2xl overflow-hidden p-8 ${
              darkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="relative">
                <div className={`w-full aspect-square rounded-xl flex items-center justify-center ${
                  darkMode ? 'bg-gradient-to-br from-violet-900/30 to-cyan-900/30' : 'bg-gradient-to-br from-violet-100 to-cyan-100'
                }`}>
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className={`text-sm font-mono ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {'{ passion: "coding", coffee: true }'}
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              A passionate developer building the web of tomorrow
            </h3>
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building scalable applications 
              that deliver exceptional user experiences.
            </p>
            <p className={`mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through blog posts and mentoring. I believe in continuous 
              learning and pushing the boundaries of what's possible on the web.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'John Doe' },
                { label: 'Email', value: 'hello@johndoe.com' },
                { label: 'Location', value: 'San Francisco, CA' },
                { label: 'Availability', value: 'Open to work' },
              ].map((info) => (
                <div key={info.label}>
                  <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{info.label}</span>
                  <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{info.value}</p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-800 hover:border-violet-500/50' 
                  : 'bg-white border border-gray-200 hover:border-violet-300 shadow-sm'
              }`}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
