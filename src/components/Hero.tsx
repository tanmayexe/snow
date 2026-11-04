export default function Hero() {
  const badges = [
    'ServiceNow Fundamentals',
    'Vyntra Pro Innovations Intern',
    'PDI Builder',
  ];

  return (
    <section id="home" className="pt-14">
      {/* Subtle geometric background */}
      <div className="relative overflow-hidden bg-[#f8faf9]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,123,88,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,123,88,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#007b58]/[0.04] to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#005689]/[0.03] to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="max-w-[680px]">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f5f0] border border-[#007b58]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007b58] animate-pulse" />
              <span className="text-xs font-medium text-[#007b58]">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1f2937] leading-tight tracking-tight mb-3">
              Tanmay Kumar Das
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl font-semibold text-[#007b58] mb-4">
              ServiceNow Developer & Platform Engineer
            </p>

            {/* Subtitle */}
            <p className="text-[15px] md:text-base text-[#4b5563] leading-relaxed mb-8 max-w-[560px]">
              Building scalable scoped applications, automating ITSM workflows, and enforcing enterprise security on the ServiceNow platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#pdi"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#007b58] text-white text-sm font-medium hover:bg-[#006649] shadow-[0_1px_2px_rgba(0,123,88,0.2)] transition-all duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
                View PDI Portfolio
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#d1d5db] text-[#1f2937] text-sm font-medium hover:bg-[#f4f5f7] hover:border-[#9ca3af] transition-all duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[#4b5563] text-sm font-medium hover:text-[#1f2937] hover:bg-[#f4f5f7] transition-all duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1 rounded-md bg-[#f4f5f7] border border-[#e5e7eb] text-xs font-medium text-[#4b5563]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Stats card (visible on md+) */}
          <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2">
            <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 w-[280px]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e5e7eb]">
                <div className="w-2 h-2 rounded-full bg-[#007b58]" />
                <span className="text-xs font-semibold text-[#1f2937] uppercase tracking-wide">Platform Stats</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Scoped Apps Built', value: '3+' },
                  { label: 'ACLs Engineered', value: '25+' },
                  { label: 'Custom Tables', value: '12+' },
                  { label: 'Business Rules', value: '40+' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-[13px] text-[#6b7280]">{stat.label}</span>
                    <span className="text-sm font-semibold text-[#007b58]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
