import { GitBranch, ToggleLeft, Gauge } from 'lucide-react';

export default function UnderTheHood() {
  const decisions = [
    {
      icon: GitBranch,
      title: 'Instance Hygiene & Update Sets',
      description: 'Strict adherence to preview/commit hygiene, batching related configurations, and documenting manual steps for seamless L2 support handover.',
      color: '#007b58',
    },
    {
      icon: ToggleLeft,
      title: 'UI Policy vs. Client Script',
      description: 'Judgment call: Zero-code UI Policies for simple mandatory/read-only states. onChange Client Scripts reserved for complex GlideAjax calls and dynamic DOM manipulation.',
      color: '#005689',
    },
    {
      icon: Gauge,
      title: 'GlideRecord Optimization',
      description: 'Avoiding queries inside while(gr.next()) loops. Utilizing GlideAggregate for counts and addEncodedQuery() for performance.',
      color: '#7c3aed',
    },
  ];

  return (
    <section id="architecture" className="py-16 md:py-20 bg-[#f8faf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Architecture</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Under the Hood
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Key architectural decisions that shape platform quality, maintainability, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {decisions.map((decision) => (
            <div
              key={decision.title}
              className="rounded-lg border border-[#e5e7eb] bg-white p-6 card-hover"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: decision.color + '12' }}>
                <decision.icon size={20} style={{ color: decision.color }} />
              </div>
              <h3 className="text-sm font-bold text-[#1f2937] mb-2">{decision.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">{decision.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
