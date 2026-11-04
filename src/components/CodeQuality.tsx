import { XCircle, CheckCircle2 } from 'lucide-react';

export default function CodeQuality() {
  return (
    <section id="code-quality" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Code Quality</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            Writing Performant Server-Side Logic
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Common anti-pattern vs. optimized approach — the difference between N+1 queries and platform-native aggregation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* BAD */}
          <div className="rounded-lg border border-red-200 bg-white overflow-hidden">
            <div className="px-5 py-3 border-b border-red-200 bg-red-50 flex items-center gap-2">
              <XCircle size={14} className="text-red-500" />
              <span className="text-xs font-semibold text-red-700">Bad Practice — Querying Inside a Loop</span>
            </div>
            <div className="bg-[#1E1E1E] p-5 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-6 text-[#d4d4d4]">
                <code>
                  <span className="text-[#6b7280]">{`// BAD: Querying inside a loop`}</span>{'\n'}
                  <span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'inc'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideRecord'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'incident'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'query'}</span><span className="text-[#abb2bf]">{'();'}</span>{'\n'}
                  <span className="text-[#c678dd]">{'while'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'next'}</span><span className="text-[#abb2bf]">{'()) {'}</span>{'\n'}
                  {'   '}<span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'usr'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideRecord'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'sys_user'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  {'   '}<span className="text-[#e5c07b]">{'usr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'get'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'caller_id'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  {'   '}<span className="text-[#e5c07b]">{'gs'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'info'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'usr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'name'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#abb2bf]">{'}'}</span>
                </code>
              </pre>
            </div>
            <div className="px-5 py-3 border-t border-red-200 bg-red-50">
              <p className="text-[12px] text-red-700">
                <strong>Problem:</strong> For every incident row, a separate database query fires to fetch the user. With 1,000 incidents, that's 1,001 queries.
              </p>
            </div>
          </div>

          {/* GOOD */}
          <div className="rounded-lg border border-green-200 bg-white overflow-hidden">
            <div className="px-5 py-3 border-b border-green-200 bg-green-50 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <span className="text-xs font-semibold text-green-700">Good Practice — Dot-Walking & GlideAggregate</span>
            </div>
            <div className="bg-[#1E1E1E] p-5 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-6 text-[#d4d4d4]">
                <code>
                  <span className="text-[#6b7280]">{`// GOOD: GlideAggregate for counts`}</span>{'\n'}
                  <span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'count'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideAggregate'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'incident'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'count'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addAggregate'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'COUNT'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'count'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'query'}</span><span className="text-[#abb2bf]">{'();'}</span>{'\n'}
                  {'\n'}
                  <span className="text-[#6b7280]">{`// Use dot-walking in lists/reports`}</span>{'\n'}
                  <span className="text-[#6b7280]">{`// instead of looping queries`}</span>{'\n'}
                  <span className="text-[#e5c07b]">{'inc'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'caller_id'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'name'}</span>
                </code>
              </pre>
            </div>
            <div className="px-5 py-3 border-t border-green-200 bg-green-50">
              <p className="text-[12px] text-green-700">
                <strong>Result:</strong> Single aggregate query for counts. Dot-walking resolves references at the database level — zero extra queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
