import { Briefcase, Lightbulb, MessageSquare } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'ServiceNow Developer Intern',
      company: 'Vyntra Pro Innovations',
      period: 'May 2026 — Oct 2026',
      highlights: [
        'Built scoped applications with custom tables, Business Rules, and Script Includes',
        'Designed Flow Designer automations for approval routing and task generation',
        'Managed Update Sets with strict preview/commit hygiene across environments',
        'Participated in peer code reviews and platform best-practice discussions',
      ],
    },
    {
      role: 'AI/ML Intern',
      company: 'Infosys Springboard',
      period: '2025',
      highlights: [
        'Root cause analysis on model performance degradation',
        'Built API pipelines for data ingestion and preprocessing',
        'Applied ML techniques to structured datasets for pattern recognition',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-[#f8faf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Career</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Experience & Beyond the Code
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Professional experience and the ability to translate complex platform concepts into stakeholder-friendly language.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={14} className="text-[#6b7280]" />
              <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Experience Timeline</span>
            </div>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden card-hover"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-[#1f2937]">{exp.role}</h3>
                      <p className="text-sm text-[#007b58] font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs text-[#6b7280] font-medium bg-[#f4f5f7] px-2.5 py-1 rounded-md">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#007b58] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[13px] text-[#4b5563] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Translate Tech Card */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={14} className="text-[#6b7280]" />
              <span className="text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Communication</span>
            </div>
            <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden sticky top-20">
              <div className="px-6 py-4 border-b border-[#e5e7eb] bg-[#f8faf9]">
                <div className="flex items-center gap-2">
                  <Lightbulb size={14} className="text-[#b45309]" />
                  <span className="text-sm font-semibold text-[#1f2937]">Explaining Tech to Stakeholders</span>
                </div>
              </div>
              <div className="p-6 space-y-5">
                {/* Concept */}
                <div>
                  <p className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider mb-1.5">Technical Concept</p>
                  <div className="px-3 py-2.5 rounded-md bg-[#1E1E1E] border border-[#333]">
                    <code className="text-[13px] text-[#e5c07b] font-mono">Advanced Reference Qualifier</code>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-[#d1d5db]" />
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                </div>

                {/* Plain English */}
                <div>
                  <p className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider mb-1.5">Plain English Translation</p>
                  <div className="px-4 py-3 rounded-md bg-[#e8f5f0] border border-[#007b58]/15">
                    <p className="text-[13px] text-[#1f2937] leading-relaxed">
                      "It's like a <strong>bouncer at a club</strong> checking a dynamic guest list before letting someone into the dropdown menu, ensuring users only see assets that are <strong>actually available</strong>."
                    </p>
                  </div>
                </div>

                {/* Why it matters */}
                <div className="pt-4 border-t border-[#e5e7eb]">
                  <p className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider mb-1.5">Why This Matters</p>
                  <p className="text-[12px] text-[#4b5563] leading-relaxed">
                    Platform engineers who can translate technical concepts into business language reduce approval friction, accelerate stakeholder buy-in, and prevent misaligned expectations before they become rework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
