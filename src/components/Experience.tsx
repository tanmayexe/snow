export default function Experience() {
  const experiences = [
    {
      role: 'ServiceNow Developer Intern',
      company: 'Vyntra Pro Innovations',
      period: '2024 — Present',
      type: 'Internship',
      highlights: [
        'Developed 3+ scoped applications on a Personal Developer Instance (PDI) for the portfolio',
        'Engineered 25+ ACLs implementing field-level and record-level security with query-based rules',
        'Built custom Service Portal widgets with AngularJS and Server-Side scripting',
        'Automated ITSM workflows using Flow Designer, reducing manual process steps by 80%',
        'Configured CMDB identification and reconciliation rules for automated CI discovery',
      ],
    },
    {
      role: 'Platform Development (Academic Projects)',
      company: 'Self-Directed Learning',
      period: '2023 — 2024',
      type: 'Learning',
      highlights: [
        'Completed ServiceNow Fundamentals certification and on-demand training courses',
        'Built ICU Net Banking scoped application with 4 custom tables extending the task table',
        'Implemented Before/After Business Rules for state management and data validation',
        'Created Script Includes for reusable server-side logic following best practices',
        'Practiced Update Set management and application versioning workflows',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Career</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Experience & Education
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Professional experience and hands-on platform engineering work.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
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
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      exp.type === 'Internship'
                        ? 'bg-[#e8f5f0] text-[#007b58]'
                        : 'bg-[#eff6ff] text-[#005689]'
                    }`}>
                      {exp.type}
                    </span>
                    <span className="text-xs text-[#6b7280] font-medium">{exp.period}</span>
                  </div>
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
      </div>
    </section>
  );
}
