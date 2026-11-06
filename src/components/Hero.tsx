import { Monitor, Download, Github } from 'lucide-react';

export default function Hero() {
  const badges = [
    'ServiceNow Fundamentals',
    'Vyntra Pro Innovations Intern',
    'PDI Builder',
  ];

  return (
    <section id="home" className="pt-14">
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
                <Monitor size={14} />
                View PDI Portfolio
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#d1d5db] text-[#1f2937] text-sm font-medium hover:bg-[#f4f5f7] hover:border-[#9ca3af] transition-all duration-150"
              >
                <Download size={14} />
                Download Resume
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[#4b5563] text-sm font-medium hover:text-[#1f2937] hover:bg-[#f4f5f7] transition-all duration-150"
              >
                <Github size={14} />
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

          {/* Right side - Stats card (visible on lg+) */}
          <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2">
            <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 w-[280px]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#e5e7eb]">
                <div className="w-2 h-2 rounded-full bg-[#007b58]" />
                <span className="text-xs font-semibold text-[#1f2937] uppercase tracking-wide">Platform Stats</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Scoped Apps Built', value: '3' },
                  { label: 'ACLs Engineered', value: '25+' },
                  { label: 'Custom Tables', value: '12+' },
                  { label: 'Business Rules', value: '40+' },
                  { label: 'REST Integrations', value: '4' },
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
