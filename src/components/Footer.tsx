export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#e5e7eb] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#007b58] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#1f2937]">Tanmay Kumar Das</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-5">
            {['Home', 'PDI Portfolio', 'Skills', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-[12px] text-[#6b7280] hover:text-[#007b58] transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[12px] text-[#9ca3af]">
            © {new Date().getFullYear()} Tanmay Kumar Das. Built on ServiceNow PDI.
          </p>
        </div>
      </div>
    </footer>
  );
}
