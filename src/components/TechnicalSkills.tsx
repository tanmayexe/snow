export default function TechnicalSkills() {
  const skillGroups = [
    {
      category: 'ServiceNow Platform',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      skills: [
        { name: 'Scoped Applications', level: 92 },
        { name: 'Business Rules / Script Includes', level: 95 },
        { name: 'Flow Designer / Workflow', level: 88 },
        { name: 'ACLs & Security', level: 90 },
        { name: 'Service Portal / Widgets', level: 85 },
        { name: 'Integration Hub / REST', level: 82 },
      ],
    },
    {
      category: 'Development & Scripting',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'GlideRecord / GlideSystem', level: 95 },
        { name: 'HTML / CSS / AngularJS', level: 80 },
        { name: 'REST / SOAP APIs', level: 85 },
        { name: 'Update Sets / CICD', level: 88 },
      ],
    },
    {
      category: 'ITSM & ITOM Modules',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      skills: [
        { name: 'Incident / Problem / Change', level: 92 },
        { name: 'CMDB / Discovery', level: 85 },
        { name: 'Service Catalog', level: 88 },
        { name: 'Performance Analytics', level: 75 },
        { name: 'Event Management', level: 72 },
      ],
    },
  ];

  const certifications = [
    { name: 'ServiceNow Certified System Administrator', year: '2024' },
    { name: 'ServiceNow Fundamentals', year: '2023' },
    { name: 'ITIL v4 Foundation', year: '2023' },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-[#f8faf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Competencies</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Technical Skills & Certifications
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Core platform expertise and development capabilities across the ServiceNow ecosystem.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden card-hover"
            >
              <div className="px-5 py-4 border-b border-[#e5e7eb] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#e8f5f0] text-[#007b58] flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#1f2937]">{group.category}</h3>
              </div>
              <div className="p-5 space-y-3.5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] text-[#4b5563]">{skill.name}</span>
                      <span className="text-[11px] font-medium text-[#6b7280]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#f4f5f7] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#007b58] transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            <span className="text-sm font-semibold text-[#1f2937]">Certifications & Training</span>
          </div>
          <div className="divide-y divide-[#e5e7eb]">
            {certifications.map((cert) => (
              <div key={cert.name} className="px-6 py-3.5 flex items-center justify-between hover:bg-[#f8faf9]">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#007b58]" />
                  <span className="text-sm text-[#1f2937]">{cert.name}</span>
                </div>
                <span className="text-xs text-[#6b7280] font-medium">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
