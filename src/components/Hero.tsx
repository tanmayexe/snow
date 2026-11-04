import { useEffect, useState } from 'react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse ${
          darkMode ? 'bg-violet-600' : 'bg-violet-300'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          darkMode ? 'bg-cyan-600' : 'bg-cyan-300'
        }`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse ${
          darkMode ? 'bg-pink-600' : 'bg-pink-300'
        }`} style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.03] ${darkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 inline-block">
          <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500`}>
            <div className={`w-full h-full rounded-full flex items-center justify-center text-5xl ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              👨‍💻
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className={`text-lg mb-4 font-medium ${darkMode ? 'text-violet-400' : 'text-violet-600'}`}>
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>

        {/* Typing Effect */}
        <div className="text-xl sm:text-2xl md:text-3xl mb-8 h-10">
          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
            {typedText}
          </span>
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-violet-500 transition-opacity duration-100`}>
            |
          </span>
        </div>

        {/* Description */}
        <p className={`text-lg max-w-2xl mx-auto mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, great design, and user-centric solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:-translate-y-0.5 ${
              darkMode 
                ? 'border-gray-700 text-gray-300 hover:border-violet-500 hover:text-violet-400' 
                : 'border-gray-300 text-gray-700 hover:border-violet-500 hover:text-violet-600'
            }`}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center space-x-6">
          {[
            { icon: 'fab fa-github', href: '#', label: 'GitHub' },
            { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
            { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
            { icon: 'fab fa-dribbble', href: '#', label: 'Dribbble' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-400 hover:bg-violet-600 hover:text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-violet-500 hover:text-white'
              }`}
            >
              <i className={`${social.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className={`w-6 h-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
