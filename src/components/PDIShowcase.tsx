import { useState } from 'react';

export default function PDIShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'ICU Net Banking', tag: 'Scoped Application' },
    { id: 1, label: 'HR Onboarding Flow', tag: 'ITSM Automation' },
    { id: 2, label: 'CMDB Discovery', tag: 'ITOM Integration' },
  ];

  return (
    <section id="pdi" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 rounded-full bg-[#007b58]" />
            <span className="text-xs font-semibold text-[#007b58] uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937] tracking-tight">
            PDI Project Showcase
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2 max-w-[600px]">
            Scoped applications and platform solutions built on my Personal Developer Instance.
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

        {/* Tab Content */}
        {activeTab === 0 && <ProjectOne />}
        {activeTab === 1 && <ProjectTwo />}
        {activeTab === 2 && <ProjectThree />}
      </div>
    </section>
  );
}

/* ===================== PROJECT 1: ICU Net Banking ===================== */
function ProjectOne() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Project Header Card */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">Scoped Application</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#005689]">Security</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">ITSM</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937]">ICU Net Banking Platform</h3>
              <p className="text-sm text-[#6b7280] mt-1">x_icu_banking scope</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#f4f5f7] text-xs font-medium text-[#4b5563]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                Active PDI
              </span>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="p-6 bg-[#f8faf9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#007b58]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007b58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1f2937] mb-1">Problem Statement</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Retail banking operations needed a unified workspace for approvals and a secure self-service portal for customers. The existing process relied on manual email chains and lacked audit trails for compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ERD Diagram */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="text-sm font-semibold text-[#1f2937]">Entity Relationship Diagram</span>
          </div>
          <span className="text-xs text-[#6b7280]">4 custom tables extending <code className="px-1.5 py-0.5 rounded bg-[#f4f5f7] text-[#007b58] font-mono text-[11px]">task</code></span>
        </div>
        <div className="p-6 bg-[#fafbfc]">
          <ERDDiagram />
        </div>
      </div>

      {/* ACL Callout */}
      <div className="rounded-lg border-l-[3px] border-l-[#007b58] border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#007b58] flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
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

      {/* Code Snippet */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-3 border-b border-[#e5e7eb] flex items-center justify-between bg-[#f8faf9]">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="text-xs font-semibold text-[#1f2937]">Before Business Rule</span>
            <span className="text-xs text-[#6b7280]">— State Rollback Prevention</span>
          </div>
          <span className="text-[11px] font-mono text-[#6b7280]">JavaScript</span>
        </div>
        <div className="bg-[#1e1e2e] p-5 overflow-x-auto">
          <pre className="code-block text-[13px] leading-6">
            <code>
              <span className="text-[#6b7280]">// State Rollback Prevention (Before Business Rule)</span>{'\n'}
              <span className="text-[#c678dd]">if</span> <span className="text-[#abb2bf]">(</span><span className="text-[#e5c07b]">previous</span><span className="text-[#abb2bf]">.</span><span className="text-[#e06c75]">u_state</span> <span className="text-[#56b6c2]">==</span> <span className="text-[#98c379]">'approved'</span> <span className="text-[#56b6c2]">&amp;&amp;</span> <span className="text-[#e5c07b]">current</span><span className="text-[#abb2bf]">.</span><span className="text-[#e06c75]">u_state</span> <span className="text-[#56b6c2]">==</span> <span className="text-[#98c379]">'submitted'</span><span className="text-[#abb2bf]">) {'{'}</span>{'\n'}
              {'    '}<span className="text-[#e5c07b]">gs</span><span className="text-[#abb2bf]">.</span><span className="text-[#61afef]">addErrorMessage</span><span className="text-[#abb2bf]">(</span><span className="text-[#98c379]">'Approved records cannot be moved back to submitted.'</span><span className="text-[#abb2bf]">);</span>{'\n'}
              {'    '}<span className="text-[#e5c07b]">current</span><span className="text-[#abb2bf]">.</span><span className="text-[#61afef]">setAbortAction</span><span className="text-[#abb2bf]">(</span><span className="text-[#d19a66]">true</span><span className="text-[#abb2bf]">);</span>{'\n'}
              <span className="text-[#abb2bf]">{'}'}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

/* ===================== ERD Diagram Component ===================== */
function ERDDiagram() {
  const tables = [
    {
      name: 'x_icu_banking_account',
      label: 'Account',
      extends: 'task',
      fields: ['u_account_number', 'u_account_type', 'u_balance', 'u_status', 'u_holder'],
      color: '#007b58',
    },
    {
      name: 'x_icu_banking_card',
      label: 'Card',
      extends: 'task',
      fields: ['u_card_number', 'u_card_type', 'u_expiry', 'u_limit', 'u_account'],
      color: '#005689',
    },
    {
      name: 'x_icu_banking_transaction',
      label: 'Transaction',
      extends: 'task',
      fields: ['u_amount', 'u_type', 'u_reference', 'u_status', 'u_account'],
      color: '#7c3aed',
    },
    {
      name: 'x_icu_banking_loan',
      label: 'Loan',
      extends: 'task',
      fields: ['u_principal', 'u_interest_rate', 'u_tenure', 'u_status', 'u_account'],
      color: '#b45309',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tables.map((table, idx) => (
        <div key={table.name} className="relative">
          <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            {/* Table Header */}
            <div className="px-3 py-2 border-b border-[#e5e7eb]" style={{ backgroundColor: `${table.color}08` }}>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: table.color }} />
                <span className="text-[11px] font-bold text-[#1f2937] uppercase tracking-wide">{table.label}</span>
              </div>
              <p className="text-[10px] font-mono text-[#6b7280] mt-0.5 truncate">{table.name}</p>
            </div>
            {/* Extends Badge */}
            <div className="px-3 py-1.5 border-b border-[#e5e7eb] bg-[#f8faf9]">
              <span className="text-[10px] font-medium text-[#007b58]">
                extends → <code className="font-mono">task</code>
              </span>
            </div>
            {/* Fields */}
            <div className="p-2 space-y-0.5">
              {table.fields.map((field) => (
                <div key={field} className="flex items-center gap-1.5 px-1.5 py-1 rounded hover:bg-[#f4f5f7]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                  <span className="text-[11px] font-mono text-[#4b5563]">{field}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Relationship connector (visible on larger screens) */}
          {idx < 3 && (
            <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-[#d1d5db]" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ===================== PROJECT 2: HR Onboarding ===================== */
function ProjectTwo() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#eff6ff] text-[#005689]">ITSM Automation</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">Flow Designer</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937]">HR Onboarding Automation Flow</h3>
              <p className="text-sm text-[#6b7280] mt-1">Automated employee onboarding with multi-department approvals</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#f8faf9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#005689]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#005689" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1f2937] mb-1">Problem Statement</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                New hire onboarding required manual coordination between HR, IT, and Facilities departments. Average onboarding time was 5+ business days with frequent missed steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flow Steps */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Flow Designer Steps</span>
        </div>
        <div className="p-6">
          <div className="space-y-0">
            {[
              { step: '1', title: 'Trigger: New Hire Record Created', desc: 'Flow triggers when HR creates a new employee record in the scoped HR table.', type: 'trigger' },
              { step: '2', title: 'Parallel Approval Actions', desc: 'Simultaneously routes to IT (laptop provisioning), Facilities (desk assignment), and Security (badge creation).', type: 'action' },
              { step: '3', title: 'Wait for All Approvals', desc: 'Flow pauses until all three departments approve. Timeout escalation after 48 hours.', type: 'logic' },
              { step: '4', title: 'Send Welcome Email + Create Tasks', desc: 'Generates Day-1 checklist, sends welcome communication, and creates follow-up tasks for manager.', type: 'action' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    item.type === 'trigger' ? 'bg-[#007b58] text-white' :
                    item.type === 'logic' ? 'bg-[#b45309] text-white' :
                    'bg-[#005689] text-white'
                  }`}>
                    {item.step}
                  </div>
                  {idx < 3 && <div className="w-px h-full min-h-[24px] bg-[#e5e7eb] mt-1" />}
                </div>
                <div className="pb-6">
                  <h4 className="text-sm font-semibold text-[#1f2937]">{item.title}</h4>
                  <p className="text-[13px] text-[#6b7280] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { metric: '80%', label: 'Reduction in onboarding time' },
          { metric: '0', label: 'Missed provisioning steps' },
          { metric: '3x', label: 'Faster approval cycles' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-[#e5e7eb] bg-white p-5 text-center">
            <div className="text-2xl font-bold text-[#007b58]">{item.metric}</div>
            <div className="text-xs text-[#6b7280] mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================== PROJECT 3: CMDB Discovery ===================== */
function ProjectThree() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="p-6 border-b border-[#e5e7eb]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">ITOM Integration</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e8f5f0] text-[#007b58]">CMDB</span>
              </div>
              <h3 className="text-xl font-bold text-[#1f2937]">CMDB Discovery & Reconciliation</h3>
              <p className="text-sm text-[#6b7280] mt-1">Automated CI discovery with identification & reconciliation rules</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#f8faf9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-[#b45309]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1f2937] mb-1">Problem Statement</h4>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                The CMDB had stale and duplicate CIs due to manual data entry. No automated discovery was in place, leading to incorrect dependency mapping and failed change impact analysis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IRE Rules Table */}
      <div className="rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <span className="text-sm font-semibold text-[#1f2937]">Identification Rules Configured</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f8faf9] border-b border-[#e5e7eb]">
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">CI Class</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Matcher Rules</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Reconciliation</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {[
                { class: 'cmdb_ci_server', matcher: 'name, serial_number', recon: 'DS → SCCM → Manual', status: 'Active' },
                { class: 'cmdb_ci_linux_server', matcher: 'name, ip_address', recon: 'Discovery → ServiceWatch', status: 'Active' },
                { class: 'cmdb_ci_db_instance', matcher: 'name, port, instance_id', recon: 'Discovery Only', status: 'Active' },
                { class: 'cmdb_ci_app_server', matcher: 'name, version, fqdn', recon: 'DS → Manual', status: 'Testing' },
              ].map((row) => (
                <tr key={row.class} className="hover:bg-[#f8faf9]">
                  <td className="px-6 py-3 font-mono text-[12px] text-[#1f2937]">{row.class}</td>
                  <td className="px-6 py-3 text-[13px] text-[#4b5563]">{row.matcher}</td>
                  <td className="px-6 py-3 text-[13px] text-[#4b5563]">{row.recon}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      row.status === 'Active' ? 'bg-[#e8f5f0] text-[#007b58]' : 'bg-[#fef3c7] text-[#92400e]'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { metric: '95%', label: 'CI data accuracy' },
          { metric: '2,400+', label: 'CIs auto-discovered' },
          { metric: '60%', label: 'Reduction in duplicate CIs' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-[#e5e7eb] bg-white p-5 text-center">
            <div className="text-2xl font-bold text-[#007b58]">{item.metric}</div>
            <div className="text-xs text-[#6b7280] mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
