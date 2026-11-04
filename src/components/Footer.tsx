interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-12 border-t ${darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Portfolio
            </a>
            <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building beautiful, functional web experiences with modern technologies. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm transition-colors hover:text-violet-500 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-github', label: 'GitHub' },
                { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
                { icon: 'fab fa-twitter', label: 'Twitter' },
                { icon: 'fab fa-dribbble', label: 'Dribbble' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-400 hover:bg-violet-600 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-violet-500 hover:text-white'
                  }`}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
            <p className={`mt-4 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              hello@johndoe.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Made with <span className="text-red-500">❤</span> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
