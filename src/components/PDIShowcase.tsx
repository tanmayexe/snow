import { useState } from 'react';
import {
  Shield, Database, GitBranch, Workflow, CheckCircle2, AlertTriangle,
  FileCode2, Server, Globe, Lock, Activity, BarChart3, Layers,
  BookOpen, ChevronRight, ExternalLink, Zap, Users, Clock, Target
} from 'lucide-react';

export default function PDIShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'ICU Net Banking', tag: 'Scoped App', difficulty: 'Advanced' },
    { id: 1, label: 'Campus Asset Loaner', tag: 'Foundation', difficulty: 'Foundation' },
    { id: 2, label: 'Facilities Complaint Desk', tag: 'Core', difficulty: 'Core' },
  ];

  return (
    <section id="pdi" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            PDI Project Showcase
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[700px]">
            End-to-end scoped applications built on my Personal Developer Instance — from data modeling and security to automation and integration.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-[#e5e7eb] mb-8">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                  activeTab === tab.id
                    ? 'text-[#007b58]'
                    : 'text-[#6b7280] hover:text-[#4b5563]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab.label}
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                    activeTab === tab.id
                      ? 'bg-[#e8f5f0] text-[#007b58]'
                      : 'bg-[#f4f5f7] text-[#6b7280]'
                  }`}>
                    {tab.tag}
                  </span>
                </span>
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007b58] rounded-t" />
                )}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 0 && <ICUBanking />}
        {activeTab === 1 && <CampusAsset />}
        {activeTab === 2 && <FacilitiesDesk />}
      </div>
    </section>
  );
}

/* ===================== Code Block Component ===================== */
function CodeBlock({ title, language, children }: { title: string; language: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
      <div className="px-5 py-3 border-b border-[#e5e7eb] flex items-center justify-between bg-[#f8faf9]">
        <div className="flex items-center gap-2">
          <FileCode2 size={14} className="text-[#6b7280]" />
          <span className="text-xs font-semibold text-[#1f2937]">{title}</span>
        </div>
        <span className="text-[11px] font-mono text-[#6b7280]">{language}</span>
      </div>
      <div className="bg-[#1E1E1E] p-5 overflow-x-auto">
        <pre className="font-mono text-[13px] leading-6 text-[#d4d4d4]">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

/* ===================== PROJECT 1: ICU Net Banking ===================== */
function ICUBanking() {
  const [blogOpen, setBlogOpen] = useState<number | null>(null);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Project Header */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">Scoped Application</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#005689]">Security</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">ITSM</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#f3e8ff] text-[#7c3aed]">REST Integration</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fce7f3] text-[#be185d]">ATF</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937]">ICU Net Banking Platform</h3>
              <p className="text-sm text-[#6b7280] mt-1">
                End-to-end retail banking on ServiceNow — self-service account origination, tracked approvals, zero-touch downstream automation, and audited integrations.
              </p>
              <p className="text-xs text-[#9ca3af] mt-2 italic">
                Solo developer · ServiceNow scoped application · Flow Designer · Service Portal · Now Workspace · REST in/out · ATF
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#f4f5f7] text-xs font-medium text-[#4b5563]">
                <Clock size={12} />
                Active PDI
              </span>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="p-6 bg-[#f8faf9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#007b58]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={16} className="text-[#007b58]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1f2937] mb-1">The Problem</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Account opening at ICU Bank lived in email and spreadsheets. Customers applied by message; clerks re-typed details; managers approved from inboxes with no record of who approved what; debit cards were issued from memory; and nobody could answer <em>"what's happening with my account?"</em> Every request meant days of manual work, silent delays, and errors — like invalid PAN numbers — reaching the core system.
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="p-6 border-t border-[#e5e7eb]">
          <h4 className="text-sm font-semibold text-[#1f2937] mb-4 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-[#007b58]" />
            The Solution
          </h4>
          <p className="text-sm text-[#4b5563] mb-4">A scoped ServiceNow application covering the full lifecycle:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: Globe, title: 'Customer Portal', desc: 'Branded self-service request form (Record Producer) with live validation' },
              { icon: Shield, title: 'Tracked Approval', desc: 'Group approval via Flow Designer with a digital signature: who approved, when, plus a full execution log' },
              { icon: Zap, title: 'Zero-Touch Automation', desc: 'Account numbering, debit-card issuance, holder + ops emails, and a 15-business-day approval clock — all triggered by one state change' },
              { icon: Lock, title: 'Audited Integrations', desc: 'Inbound Table API behind a least-privilege service account; outbound approval webhook with an Integration Log' },
              { icon: Activity, title: 'Proof & Quality', desc: 'ATF regression suite, a four-chart manager dashboard, and 25+ ACLs enforcing holder data isolation' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg border border-[#e5e7eb] bg-[#f8faf9]">
                <item.icon size={16} className="text-[#007b58] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#1f2937]">{item.title}</p>
                  <p className="text-[12px] text-[#6b7280] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2">
          <GitBranch size={14} className="text-[#6b7280]" />
          <span className="text-sm font-semibold text-[#1f2937]">Architecture Flow</span>
        </div>
        <div className="p-6 bg-[#fafbfc]">
          <div className="flex flex-wrap items-center gap-2 text-[12px]">
            {[
              { label: 'Portal (Record Producer)', color: '#007b58' },
              { label: 'Account Table', color: '#005689' },
              { label: 'Flow: Group Approval', color: '#7c3aed' },
              { label: 'State = Approved', color: '#007b58' },
              { label: 'BR2 Card + BR4 Event', color: '#b45309' },
              { label: 'Webhook + Log', color: '#005689' },
            ].map((step, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-md border font-medium" style={{ borderColor: step.color + '40', color: step.color, backgroundColor: step.color + '08' }}>
                  {step.label}
                </span>
                {i < 5 && <ChevronRight size={12} className="text-[#9ca3af]" />}
              </span>
            ))}
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-md border border-[#e5e7eb] bg-white">
              <p className="text-[12px] font-semibold text-[#1f2937] mb-1">Inbound</p>
              <p className="text-[11px] text-[#6b7280]">Table API POST as <code className="px-1 py-0.5 rounded bg-[#f4f5f7] text-[#007b58] font-mono text-[10px]">icu.integration</code> (scoped role + one-table create ACL)</p>
            </div>
            <div className="p-3 rounded-md border border-[#e5e7eb] bg-white">
              <p className="text-[12px] font-semibold text-[#1f2937] mb-1">Security Layer</p>
              <p className="text-[11px] text-[#6b7280]">ACL layer — holders read only their own rows, proven by <em>"rows removed by security constraints"</em></p>
            </div>
          </div>
        </div>
      </div>

      {/* ERD Diagram */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database size={14} className="text-[#6b7280]" />
            <span className="text-sm font-semibold text-[#1f2937]">Data Model — Entity Relationship</span>
          </div>
          <span className="text-xs text-[#6b7280]">4 custom tables extending <code className="px-1.5 py-0.5 rounded bg-[#f4f5f7] text-[#007b58] font-mono text-[11px]">task</code></span>
        </div>
        <div className="p-6 bg-[#fafbfc]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'x_icu_banking_account', label: 'Account', fields: ['u_account_number', 'u_account_type', 'u_balance', 'u_status', 'u_holder', 'pan_number'], color: '#007b58' },
              { name: 'x_icu_banking_card', label: 'Card', fields: ['u_card_number', 'u_card_type', 'u_expiry', 'u_limit', 'u_account'], color: '#005689' },
              { name: 'x_icu_banking_transaction', label: 'Transaction', fields: ['u_amount', 'u_type', 'u_reference', 'u_status', 'u_account'], color: '#7c3aed' },
              { name: 'x_icu_banking_loan', label: 'Loan', fields: ['u_principal', 'u_interest_rate', 'u_tenure', 'u_status', 'u_account'], color: '#b45309' },
            ].map((table) => (
              <div key={table.name} className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="px-3 py-2 border-b border-[#e5e7eb]" style={{ backgroundColor: `${table.color}08` }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: table.color }} />
                    <span className="text-[11px] font-bold text-[#1f2937] uppercase tracking-wide">{table.label}</span>
                  </div>
                  <p className="text-[10px] font-mono text-[#6b7280] mt-0.5 truncate">{table.name}</p>
                </div>
                <div className="px-3 py-1.5 border-b border-[#e5e7eb] bg-[#f8faf9]">
                  <span className="text-[10px] font-medium text-[#007b58]">extends → <code className="font-mono">task</code></span>
                </div>
                <div className="p-2 space-y-0.5">
                  {table.fields.map((field) => (
                    <div key={field} className="flex items-center gap-1.5 px-1.5 py-1 rounded hover:bg-[#f4f5f7]">
                      <div className="w-2.5 h-2.5 rounded-sm border border-[#d1d5db]" />
                      <span className="text-[11px] font-mono text-[#4b5563]">{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACL Callout */}
      <div className="rounded-lg border-l-[3px] border-l-[#007b58] border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#007b58] flex items-center justify-center flex-shrink-0">
              <Shield size={14} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1f2937] mb-1.5">The ACL Matrix</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Engineered <strong className="text-[#1f2937]">25+ field-level and record-level Access Control Lists (ACLs)</strong>. Used query-based ACLs for strict data isolation rather than relying solely on Portal Widget filters, ensuring security at the database layer.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Field-Level ACLs', 'Record-Level ACLs', 'Query-Based Rules', 'Role Hierarchy', 'Data Isolation'].map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#e8f5f0] text-[#007b58]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Key Highlights</span>
        </div>
        <div className="p-6 grid sm:grid-cols-2 gap-4">
          {[
            { num: '1', title: 'Self-Service Front Door', desc: 'Eight-field producer form; variables map to fields with zero scripting; the server stamps holder and state.' },
            { num: '2', title: 'Approval with a Signature', desc: 'Email approval replaced by a flow; every step visible in the execution log.' },
            { num: '3', title: 'Automation Chain', desc: 'One state change triggers numbering, card, emails, SLA completion and external notification; no re-typing anywhere.' },
            { num: '4', title: 'Security by Platform, Not by Page', desc: 'Read ACLs key accounts to holders, proven by "rows removed by security constraints", not by widget filters.' },
            { num: '5', title: 'Integrations with Receipts', desc: 'Inbound Table API (201/401 evidenced); outbound webhook logged outside any success check.' },
            { num: '6', title: 'Tested & Observable', desc: 'ATF suite (mandatory fields; submit-sets-state) and a manager dashboard: state, type, demand over time, SLA attainment.' },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#007b58] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.num}
              </span>
              <div>
                <p className="text-[13px] font-semibold text-[#1f2937]">{item.title}</p>
                <p className="text-[12px] text-[#6b7280] leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decision Log */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Decision Log</span>
        </div>
        <div className="divide-y divide-[#e5e7eb]">
          {[
            { title: 'One PAN rule, three callers.', desc: 'The regex lives only in ICUBankUtils.validatePAN; the client script (via GlideAjax), BR5 and the import transform all call it. Change it once, every route moves.' },
            { title: 'ACLs, not filters.', desc: 'Hiding rows in the UI is decoration; enforcing them in the platform is security.' },
            { title: 'Deactivated, not deleted.', desc: 'When the flow took over approval, the old UI Actions were deactivated and documented — a deactivated record shows a decision; a deleted one looks like something missing.' },
            { title: 'Log every call.', desc: 'The Integration Log row is written whether the webhook succeeds or fails.' },
            { title: 'Service account, never admin.', desc: 'The integration logs in as icu.integration — web-service-only, one role, one-table create ACL. Switch-off-able without locking out a human.' },
          ].map((item, i) => (
            <div key={i} className="px-6 py-4 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#007b58] flex-shrink-0 mt-2" />
              <div>
                <p className="text-[13px] font-semibold text-[#1f2937]">{item.title}</p>
                <p className="text-[12px] text-[#6b7280] leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Snippets */}
      <CodeBlock title="Before Business Rule — State Rollback Prevention" language="JavaScript">
        <span className="text-[#6b7280]">{`// State Rollback Prevention (Before Business Rule)`}</span>{'\n'}
        <span className="text-[#c678dd]">{'if'}</span>{' '}<span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'previous'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'u_state'}</span>{' '}<span className="text-[#56b6c2]">{'=='}</span>{' '}<span className="text-[#98c379]">{"'approved'"}</span>{' '}<span className="text-[#56b6c2]">{'&&'}</span>{' '}<span className="text-[#e5c07b]">{'current'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'u_state'}</span>{' '}<span className="text-[#56b6c2]">{'=='}</span>{' '}<span className="text-[#98c379]">{"'submitted'"}</span><span className="text-[#abb2bf]">{') {'}</span>{'\n'}
        {'    '}<span className="text-[#e5c07b]">{'gs'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addErrorMessage'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'Approved records cannot be moved back to submitted.'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        {'    '}<span className="text-[#e5c07b]">{'current'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'setAbortAction'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#d19a66]">{'true'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#abb2bf]">{'}'}</span>
      </CodeBlock>

      <CodeBlock title="Integration Log — Write Outside Success Check" language="JavaScript">
        <span className="text-[#6b7280]">{`// The row is written whether the call worked or not`}</span>{'\n'}
        <span className="text-[#e5c07b]">{'logGr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'setValue'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'http_status'"}</span><span className="text-[#abb2bf]">{', '}</span><span className="text-[#e5c07b]">{'status'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#e5c07b]">{'logGr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'setValue'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'message'"}</span><span className="text-[#abb2bf]">{', ('}</span><span className="text-[#e5c07b]">{'status'}</span>{' '}<span className="text-[#56b6c2]">{'=='}</span>{' '}<span className="text-[#d19a66]">{'200'}</span><span className="text-[#abb2bf]">{') ? '}</span><span className="text-[#98c379]">{"'Success'"}</span>{' '}<span className="text-[#abb2bf]">{' : '}</span><span className="text-[#98c379]">{"'Failed'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#e5c07b]">{'logGr'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'insert'}</span><span className="text-[#abb2bf]">{'();'}</span>
      </CodeBlock>

      {/* Metrics */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Metrics</span>
        </div>
        <div className="p-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { value: 'Days → min', label: 'Per account' },
            { value: '0', label: 'Manual re-keying' },
            { value: '100%', label: 'Approvals with who/when' },
            { value: '4', label: 'Tables' },
            { value: '25+', label: 'ACLs' },
            { value: '5', label: 'Business Rules' },
            { value: '1', label: 'Approval Flow' },
            { value: '2', label: 'REST Integrations' },
            { value: '2', label: 'ATF Tests' },
            { value: '4', label: 'Reports' },
          ].map((m) => (
            <div key={m.label} className="text-center p-3 rounded-md bg-[#f8faf9] border border-[#e5e7eb]">
              <div className="text-lg font-bold text-[#007b58]">{m.value}</div>
              <div className="text-[11px] text-[#6b7280] mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts / Write-ups */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2">
          <BookOpen size={14} className="text-[#6b7280]" />
          <span className="text-sm font-semibold text-[#1f2937]">Engineering Write-Ups</span>
        </div>
        <div className="divide-y divide-[#e5e7eb]">
          {[
            {
              title: 'One Rule, Three Callers',
              excerpt: 'Every project grows a rule that appears twice. Ours was PAN validation: once in a browser client script, once in a server business rule. Two copies means the day the format changes, someone fixes one and ships a bug.',
              lesson: "Duplication isn't a style problem. It's a decision about who fixes the bug twice.",
            },
            {
              title: 'Client Checks Are Courtesy, Server Checks Are Control',
              excerpt: 'Our account form validates PAN format as you type: a GlideAjax call to the Script Include, an inline error, the field cleared. Users love it. It is also, security-wise, worth nothing.',
              lesson: 'Put validation where the data has no choice but to pass. Everything else is user experience.',
            },
            {
              title: 'Log Every Call, Not Just the Successes',
              excerpt: 'When an account is approved, our flow calls an external webhook and then writes one row to an Integration Log table. The important line is the least dramatic one.',
              lesson: 'Receipts for failures are what turn "I think it sent" into an answer.',
            },
          ].map((post, i) => (
            <div key={i} className="px-6 py-5">
              <button
                onClick={() => setBlogOpen(blogOpen === i ? null : i)}
                className="w-full text-left flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="text-sm font-semibold text-[#1f2937]">{post.title}</h4>
                  <p className="text-[12px] text-[#6b7280] mt-1 line-clamp-2">{post.excerpt}</p>
                </div>
                <ChevronRight size={16} className={`text-[#9ca3af] flex-shrink-0 mt-1 transition-transform duration-200 ${blogOpen === i ? 'rotate-90' : ''}`} />
              </button>
              {blogOpen === i && (
                <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                  <p className="text-[13px] text-[#4b5563] leading-relaxed mb-3">{post.excerpt}</p>
                  {i === 0 && (
                    <div className="bg-[#1E1E1E] rounded-md p-4 overflow-x-auto mb-3">
                      <pre className="font-mono text-[12px] leading-5 text-[#d4d4d4]">
                        <code>
                          <span className="text-[#e5c07b]">{'validatePAN'}</span><span className="text-[#abb2bf]">{': '}</span><span className="text-[#c678dd]">{'function'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e06c75]">{'pan'}</span><span className="text-[#abb2bf]">{') {'}</span>{'\n'}
                          {'    '}<span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'pattern'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#98c379]">{'/^[A-Z]'}</span><span className="text-[#abb2bf]">{'{'}</span><span className="text-[#d19a66]">{'5'}</span><span className="text-[#abb2bf]">{'}'}</span><span className="text-[#98c379]">{'[0-9]'}</span><span className="text-[#abb2bf]">{'{'}</span><span className="text-[#d19a66]">{'4'}</span><span className="text-[#abb2bf]">{'}'}</span><span className="text-[#98c379]">{'[A-Z]'}</span><span className="text-[#abb2bf]">{'{'}</span><span className="text-[#d19a66]">{'1'}</span><span className="text-[#abb2bf]">{'}'}</span><span className="text-[#98c379]">{'$/'}</span><span className="text-[#abb2bf]">{';'}</span>{'\n'}
                          {'    '}<span className="text-[#c678dd]">{'return'}</span>{' '}<span className="text-[#e5c07b]">{'pattern'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'test'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e06c75]">{'pan'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                          <span className="text-[#abb2bf]">{'},'}</span>{'\n'}
                          <span className="text-[#e5c07b]">{'ajaxValidatePAN'}</span><span className="text-[#abb2bf]">{': '}</span><span className="text-[#c678dd]">{'function'}</span><span className="text-[#abb2bf]">{'() {'}</span>{'\n'}
                          {'    '}<span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'pan'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#abb2bf]">{'this.'}</span><span className="text-[#61afef]">{'getParameter'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'sysparm_pan'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                          {'    '}<span className="text-[#c678dd]">{'return'}</span>{' '}<span className="text-[#abb2bf]">{'this.'}</span><span className="text-[#61afef]">{'validatePAN'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e06c75]">{'pan'}</span><span className="text-[#abb2bf]">{') ? '}</span><span className="text-[#98c379]">{"'true'"}</span>{' '}<span className="text-[#abb2bf]">{': '}</span><span className="text-[#98c379]">{"'false'"}</span><span className="text-[#abb2bf]">{';'}</span>{'\n'}
                          <span className="text-[#abb2bf]">{'}'}</span>
                        </code>
                      </pre>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="bg-[#1E1E1E] rounded-md p-4 overflow-x-auto mb-3">
                      <pre className="font-mono text-[12px] leading-5 text-[#d4d4d4]">
                        <code>
                          <span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'utils'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'ICUBankUtils'}</span><span className="text-[#abb2bf]">{'();'}</span>{'\n'}
                          <span className="text-[#c678dd]">{'if'}</span>{' '}<span className="text-[#abb2bf]">{'(!'}</span><span className="text-[#e5c07b]">{'utils'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'validatePAN'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'current'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'getValue'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'pan_number'"}</span><span className="text-[#abb2bf]">{')) {'}</span>{'\n'}
                          {'    '}<span className="text-[#e5c07b]">{'gs'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addErrorMessage'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'PAN is not in a valid format.'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                          {'    '}<span className="text-[#e5c07b]">{'current'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'setAbortAction'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#d19a66]">{'true'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
                          <span className="text-[#abb2bf]">{'}'}</span>
                        </code>
                      </pre>
                    </div>
                  )}
                  <div className="flex items-start gap-2 p-3 rounded-md bg-[#e8f5f0] border border-[#007b58]/10">
                    <Target size={14} className="text-[#007b58] flex-shrink-0 mt-0.5" />
                    <p className="text-[12px] font-medium text-[#007b58]">
                      <strong>The lesson:</strong> {post.lesson}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== PROJECT 2: Campus Asset Loaner ===================== */
function CampusAsset() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">Data Model</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#005689]">Server-Side Logic</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">Security</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#f3e8ff] text-[#7c3aed]">Flow Automation</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937]">Campus Asset Loaner</h3>
              <p className="text-sm text-[#6b7280] mt-1">
                A digital system to handle asset requests, approvals, due dates, and real-time asset tracking — replacing a paper register at the front desk.
              </p>
            </div>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">Foundation</span>
          </div>
        </div>

        {/* Problem */}
        <div className="p-6 bg-[#f8faf9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#005689]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={16} className="text-[#005689]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1f2937] mb-1">The Business Problem</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                A training institute ran asset lending on a paper register at the front desk. Assets were quietly disappearing, there was zero visibility into inventory, and the entire process relied on a single receptionist. They needed a digital system to handle requests, approvals, due dates, and real-time asset tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Solution & Architecture</span>
        </div>
        <div className="p-6 space-y-4">
          {[
            {
              icon: Database,
              title: 'Data Model',
              desc: 'Created a standalone u_loanable_asset table and a u_loan_request table that extends the out-of-the-box task table.',
              color: '#007b58',
            },
            {
              icon: Layers,
              title: 'Architectural Decision',
              desc: 'Extending Task inherited the Activity Stream, SLA support, and state management for free, avoiding redundant custom development.',
              color: '#005689',
            },
            {
              icon: Server,
              title: 'Server-Side Enforcement',
              desc: 'Built a Before Business Rule using setAbortAction(true) to prevent double-bookings. Because it is server-side, it blocks invalid data whether it comes from the UI, an Import Set, or a REST API.',
              color: '#7c3aed',
            },
            {
              icon: GitBranch,
              title: 'State Synchronization',
              desc: 'Implemented an After Business Rule to flip asset status between "Available" and "On Loan".',
              color: '#b45309',
            },
            {
              icon: Workflow,
              title: 'Automation',
              desc: 'Flow Designer routes "Laptop" requests to the borrower\'s manager for approval. Rejections automatically cancel the loan and free the asset.',
              color: '#007b58',
            },
            {
              icon: Lock,
              title: 'Security',
              desc: 'Configured ACLs so "Asset Custodians" can write to the asset table, but borrowers can only read their own records (tested strictly via User Impersonation).',
              color: '#005689',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg border border-[#e5e7eb] bg-[#f8faf9]">
              <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + '15' }}>
                <item.icon size={16} style={{ color: item.color }} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#1f2937]">{item.title}</p>
                <p className="text-[12px] text-[#6b7280] leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Model Visual */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2">
          <Database size={14} className="text-[#6b7280]" />
          <span className="text-sm font-semibold text-[#1f2937]">Data Model</span>
        </div>
        <div className="p-6 bg-[#fafbfc]">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="px-3 py-2 border-b border-[#e5e7eb] bg-[#007b58]/[0.05]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-[#007b58]" />
                  <span className="text-[11px] font-bold text-[#1f2937] uppercase tracking-wide">Loanable Asset</span>
                </div>
                <p className="text-[10px] font-mono text-[#6b7280] mt-0.5">u_loanable_asset</p>
              </div>
              <div className="p-2 space-y-0.5">
                {['u_asset_name', 'u_asset_type', 'u_serial_number', 'u_status', 'u_condition'].map((f) => (
                  <div key={f} className="flex items-center gap-1.5 px-1.5 py-1 rounded hover:bg-[#f4f5f7]">
                    <div className="w-2.5 h-2.5 rounded-sm border border-[#d1d5db]" />
                    <span className="text-[11px] font-mono text-[#4b5563]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="px-3 py-2 border-b border-[#e5e7eb] bg-[#005689]/[0.05]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-[#005689]" />
                  <span className="text-[11px] font-bold text-[#1f2937] uppercase tracking-wide">Loan Request</span>
                </div>
                <p className="text-[10px] font-mono text-[#6b7280] mt-0.5">u_loan_request</p>
              </div>
              <div className="px-3 py-1.5 border-b border-[#e5e7eb] bg-[#f8faf9]">
                <span className="text-[10px] font-medium text-[#007b58]">extends → <code className="font-mono">task</code></span>
              </div>
              <div className="p-2 space-y-0.5">
                {['u_requested_asset', 'u_borrower', 'u_due_date', 'u_approval_status', 'u_return_date'].map((f) => (
                  <div key={f} className="flex items-center gap-1.5 px-1.5 py-1 rounded hover:bg-[#f4f5f7]">
                    <div className="w-2.5 h-2.5 rounded-sm border border-[#d1d5db]" />
                    <span className="text-[11px] font-mono text-[#4b5563]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code: Double-booking Prevention */}
      <CodeBlock title="Before Business Rule — Double-Booking Prevention" language="JavaScript">
        <span className="text-[#6b7280]">{`// Server-side enforcement: blocks from UI, Import Set, or REST API`}</span>{'\n'}
        <span className="text-[#c678dd]">{'var'}</span>{' '}<span className="text-[#e5c07b]">{'existingLoan'}</span>{' '}<span className="text-[#56b6c2]">{'='}</span>{' '}<span className="text-[#c678dd]">{'new'}</span>{' '}<span className="text-[#e5c07b]">{'GlideRecord'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'u_loan_request'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#e5c07b]">{'existingLoan'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addQuery'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'u_requested_asset'"}</span><span className="text-[#abb2bf]">{', '}</span><span className="text-[#e5c07b]">{'current'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#e06c75]">{'u_requested_asset'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#e5c07b]">{'existingLoan'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addQuery'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'u_approval_status'"}</span><span className="text-[#abb2bf]">{', '}</span><span className="text-[#98c379]">{"'approved'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#e5c07b]">{'existingLoan'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'query'}</span><span className="text-[#abb2bf]">{'();'}</span>{'\n'}
        <span className="text-[#c678dd]">{'if'}</span>{' '}<span className="text-[#abb2bf]">{'('}</span><span className="text-[#e5c07b]">{'existingLoan'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'hasNext'}</span><span className="text-[#abb2bf]">{'()) {'}</span>{'\n'}
        {'    '}<span className="text-[#e5c07b]">{'gs'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'addErrorMessage'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#98c379]">{"'This asset is already on loan.'"}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        {'    '}<span className="text-[#e5c07b]">{'current'}</span><span className="text-[#abb2bf]">{'.'}</span><span className="text-[#61afef]">{'setAbortAction'}</span><span className="text-[#abb2bf]">{'('}</span><span className="text-[#d19a66]">{'true'}</span><span className="text-[#abb2bf]">{');'}</span>{'\n'}
        <span className="text-[#abb2bf]">{'}'}</span>
      </CodeBlock>
    </div>
  );
}

/* ===================== PROJECT 3: Facilities Complaint Desk ===================== */
function FacilitiesDesk() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">Service Portal</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#005689]">Service Catalog</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">No-Code Routing</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#f3e8ff] text-[#7c3aed]">Knowledge Deflection</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937]">Facilities Complaint Desk</h3>
              <p className="text-sm text-[#6b7280] mt-1">
                A structured intake system replacing chaotic WhatsApp/email complaints with tracked, prioritized, and routed facility cases.
              </p>
            </div>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">Core</span>
          </div>
        </div>

        {/* Problem */}
        <div className="p-6 bg-[#f8faf9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#92400e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle size={16} className="text-[#92400e]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1f2937] mb-1">The Business Problem</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Facilities complaints arrived chaotically via WhatsApp, email, and word-of-mouth. Urgent issues (like water leaks) were buried behind trivial ones, the same broken tap was reported five times, and management had no metrics on resolution times or team workloads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Architecture */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Solution & Architecture</span>
        </div>
        <div className="p-6 space-y-4">
          {[
            {
              icon: Globe,
              title: 'Service Portal Intake',
              desc: 'Built a Record Producer (not a standard Catalog Item) to write directly to a custom u_facilities_case table, bypassing the unnecessary REQ/RITM chain for simple facility complaints.',
              color: '#007b58',
            },
            {
              icon: Workflow,
              title: 'No-Code Routing (Data Lookup)',
              desc: 'Built a Data Lookup Matrix mapping "Issue Type" to "Assignment Group" and "Priority". Allows the Facilities Manager to change routing rules by simply editing a spreadsheet row, without requiring a developer to deploy code.',
              color: '#005689',
            },
            {
              icon: BookOpen,
              title: 'Knowledge Deflection',
              desc: 'Authored and attached standard KB articles (e.g., "How to reset a tripped breaker") to the Record Producer, surfacing self-service solutions before the user submits a ticket.',
              color: '#7c3aed',
            },
            {
              icon: Clock,
              title: 'Schedule-Aware SLAs',
              desc: 'Implemented 4-hour (Urgent) and 2-day (Normal) Resolution SLAs tied to an 8-5 weekday schedule to prevent false weekend breaches.',
              color: '#b45309',
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg border border-[#e5e7eb] bg-[#f8faf9]">
              <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + '15' }}>
                <item.icon size={16} style={{ color: item.color }} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#1f2937]">{item.title}</p>
                <p className="text-[12px] text-[#6b7280] leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Architectural Decision */}
      <div className="rounded-lg border-l-[3px] border-l-[#005689] border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#005689] flex items-center justify-center flex-shrink-0">
              <Target size={14} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1f2937] mb-1.5">Key Architectural Decision: Data Lookup vs Business Rule</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed mb-3">
                <strong className="text-[#1f2937]">Decision:</strong> Using a Data Lookup instead of a Business Rule for ticket routing.
              </p>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                <strong className="text-[#1f2937]">Trade-off/Reasoning:</strong> A Business Rule requires a developer to edit and deploy code every time the business changes its mind. A Data Lookup separates business logic from application code, empowering the Facilities Manager to own and edit the routing matrix themselves.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Lookup Matrix Visual */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Data Lookup Matrix — Routing Rules</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f8faf9] border-b border-[#e5e7eb]">
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Issue Type</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Assignment Group</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {[
                { type: 'Water Leak / Flooding', group: 'Emergency Maintenance', priority: 'Critical' },
                { type: 'Electrical / Power', group: 'Electrical Team', priority: 'High' },
                { type: 'HVAC / Temperature', group: 'HVAC Team', priority: 'Normal' },
                { type: 'Cleanliness', group: 'Housekeeping', priority: 'Low' },
                { type: 'Furniture / Fixtures', group: 'Carpentry Team', priority: 'Normal' },
              ].map((row) => (
                <tr key={row.type} className="hover:bg-[#f8faf9]">
                  <td className="px-6 py-3 text-[13px] text-[#1f2937]">{row.type}</td>
                  <td className="px-6 py-3 text-[13px] text-[#4b5563]">{row.group}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.priority === 'Critical' ? 'bg-red-50 text-red-700' :
                      row.priority === 'High' ? 'bg-orange-50 text-orange-700' :
                      row.priority === 'Normal' ? 'bg-blue-50 text-blue-700' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      {row.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio Visuals to Include */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2">
          <ExternalLink size={14} className="text-[#6b7280]" />
          <span className="text-sm font-semibold text-[#1f2937]">Portfolio Visuals</span>
        </div>
        <div className="p-6 grid sm:grid-cols-3 gap-4">
          {[
            { title: 'Dynamic Form', desc: 'Service Portal form showing the "Floor" dropdown appearing only after a "Building" is selected (Catalog UI Policy).' },
            { title: 'Data Lookup Matrix', desc: 'The routing rules table showing Issue Type → Assignment Group → Priority mapping.' },
            { title: 'SLA Timer Test', desc: 'The "4:55 PM Friday" test — SLA timer paused on a weekend, proving schedule-awareness works.' },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg border border-[#e5e7eb] bg-[#f8faf9]">
              <p className="text-[12px] font-semibold text-[#1f2937] mb-1">{item.title}</p>
              <p className="text-[11px] text-[#6b7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
