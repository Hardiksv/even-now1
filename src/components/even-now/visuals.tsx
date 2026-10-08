'use client';
import { useState, useEffect } from 'react';
import { ShieldCheck, Award, Factory, Coins, Clock, FileText, MessageSquare, RefreshCw, ChevronRight, Check } from 'lucide-react';

/**
 * 1. HOME HERO ANIMATED NETWORK NODES
 * Interactive canvas/SVG animated node network for Hero section (No photos).
 */
export function HeroNetworkAnimation() {
  const nodes = [
    { id: 'pos', label: 'Positioning', x: 20, y: 35, gold: true },
    { id: 'dem', label: 'Demand', x: 40, y: 25, gold: false },
    { id: 'acq', label: 'Acquisition', x: 60, y: 45, gold: false },
    { id: 'con', label: 'Conversion', x: 35, y: 70, gold: true },
    { id: 'sal', label: 'Sales', x: 75, y: 30, gold: false },
    { id: 'pro', label: 'Procurement', x: 80, y: 75, gold: true },
    { id: 'mac', label: 'Market Access', x: 65, y: 80, gold: false },
    { id: 'ret', label: 'Retention', x: 15, y: 75, gold: false },
  ];

  const edges = [
    ['pos', 'dem'], ['dem', 'acq'], ['acq', 'sal'],
    ['pos', 'con'], ['con', 'sal'], ['sal', 'pro'],
    ['pro', 'mac'], ['sal', 'ret'], ['con', 'ret']
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A1128] opacity-80 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C19B3E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#374151" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Connecting Lines */}
        {edges.map(([fromId, toId], i) => {
          const from = nodes.find(n => n.id === fromId)!;
          const to = nodes.find(n => n.id === toId)!;
          return (
            <line
              key={i}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="url(#edgeGrad)"
              strokeWidth="0.3"
              strokeDasharray="1 1"
              className="animate-pulse"
              style={{ animationDuration: `${3 + (i % 3)}s` }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map(n => (
          <g key={n.id} className="transition-transform duration-700 hover:scale-125">
            <circle
              cx={`${n.x}%`}
              cy={`${n.y}%`}
              r={n.gold ? "1.5" : "0.9"}
              fill={n.gold ? "#C19B3E" : "#4B5563"}
              className={n.gold ? "animate-ping opacity-75" : ""}
              style={{ animationDuration: '4s' }}
            />
            <circle
              cx={`${n.x}%`}
              cy={`${n.y}%`}
              r={n.gold ? "1.2" : "0.7"}
              fill={n.gold ? "#C19B3E" : "#9CA3AF"}
            />
          </g>
        ))}
      </svg>

      {/* Floating HTML Labels */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {nodes.map(n => (
          <div
            key={n.id}
            className={`absolute text-[10px] tracking-widest uppercase px-2 py-1 rounded backdrop-blur-md border ${
              n.gold 
                ? 'text-[#C19B3E] border-[#C19B3E]/40 bg-[#0A1128]/80 shadow-[0_0_12px_rgba(193,155,62,0.2)]' 
                : 'text-gray-400 border-gray-800 bg-[#0A1128]/60'
            }`}
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%, -160%)' }}
          >
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 2. TWO ENGINES VISUAL A - ABSTRACT GROWTH FUNNEL
 */
export function TwoEnginesAbstractFunnel() {
  return (
    <div className="w-full h-44 my-5 relative rounded-xl border border-gold/30 bg-[#050A18] p-5 flex flex-col justify-between overflow-hidden group shadow-inner">
      <div className="flex justify-between items-center z-10">
        <span className="text-[10px] uppercase tracking-widest text-gold font-bold">SYSTEM GROWTH ENGINE</span>
        <span className="text-[10px] font-mono text-gray-400">01 / DIAGNOSIS</span>
      </div>

      <svg className="w-full h-24 my-auto z-10" viewBox="0 0 300 90" fill="none">
        <defs>
          <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C19B3E" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C19B3E" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        
        {/* Background Grid Lines */}
        <line x1="0" y1="20" x2="300" y2="20" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3"/>
        <line x1="0" y1="50" x2="300" y2="50" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3"/>
        <line x1="0" y1="80" x2="300" y2="80" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="3 3"/>

        {/* Funnel Guidelines */}
        <path d="M10 15 L100 40 L200 48 L290 75" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M10 75 L100 48 L200 40 L290 15" stroke="#334155" strokeWidth="1" strokeDasharray="2 2"/>
        
        {/* Growth Curve Fill */}
        <path d="M10 65 Q 90 25, 160 58 T 290 15 L 290 85 L 10 85 Z" fill="url(#funnelGrad)"/>

        {/* Glowing Trendline */}
        <path d="M10 65 Q 90 25, 160 58 T 290 15" stroke="#C19B3E" strokeWidth="2.5" fill="none"/>

        {/* Key Nodes */}
        <circle cx="10" cy="65" r="3.5" fill="#94A3B8"/>
        <circle cx="160" cy="58" r="4" fill="#C19B3E"/>
        <circle cx="290" cy="15" r="4.5" fill="#C19B3E"/>

        {/* Floating Labels with exact Anchoring */}
        <text x="10" y="52" fill="#94A3B8" fontSize="8" fontWeight="600">POSITIONING</text>
        <text x="160" y="44" fill="#C19B3E" fontSize="8" fontWeight="700" textAnchor="middle">CONVERSION</text>
        <text x="290" y="26" fill="#C19B3E" fontSize="8" fontWeight="700" textAnchor="end">REVENUE UNLOCK</text>
      </svg>

      <div className="flex justify-between items-center text-[10px] text-gray-400 z-10 border-t border-white/10 pt-2">
        <span>Positioning → Sales System</span>
        <span className="text-gold font-semibold">Continuous Optimization</span>
      </div>
    </div>
  );
}

/**
 * 2. TWO ENGINES VISUAL B - GLOBAL B2B FACTORY & SUPPLY
 */
export function TwoEnginesFactoryVisual({ factoryImg }: { factoryImg: string }) {
  return (
    <div className="w-full h-44 my-5 relative rounded-xl border border-gold/30 bg-[#050A18] overflow-hidden group shadow-inner flex flex-col justify-between p-5">
      {/* Background Image with Overlay */}
      <img src={factoryImg} alt="Precision manufacturing & automated industrial factory" className="absolute inset-0 w-full h-full object-cover filter saturate-[0.85] contrast-[1.1] transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/65 to-[#050A18]/45" />

      {/* Top Header Overlay */}
      <div className="flex justify-between items-center z-10 relative">
        <span className="text-[10px] uppercase tracking-widest text-gold font-bold bg-[#050A18]/80 backdrop-blur-md px-2 py-0.5 rounded border border-gold/30">
          GLOBAL SUPPLY ENGINE
        </span>
        <span className="text-[10px] font-mono text-gray-300 bg-[#050A18]/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
          02 / B2B TRADE
        </span>
      </div>

      {/* Center Sourcing Indicator */}
      <div className="z-10 relative my-auto">
        <div className="inline-flex items-center gap-2 bg-[#050A18]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/40 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping"/>
          <span className="text-xs text-white font-medium tracking-wide">QUALIFIED INDIAN SUPPLY CAPABILITY</span>
        </div>
      </div>

      {/* Bottom Footer Overlay */}
      <div className="flex justify-between items-center text-[10px] text-gray-300 z-10 relative border-t border-white/20 pt-2">
        <span>Verified Sourcing & RFQ</span>
        <span className="text-gold font-semibold">Landed Cost Feasibility</span>
      </div>
    </div>
  );
}

/**
 * 3. PROBLEM SECTION LEAK FLOW DIAGRAM
 */
export function SystemProblemLeakDiagram() {
  const steps = [
    { name: 'Positioning', leak: false },
    { name: 'Demand', leak: false },
    { name: 'Acquisition', leak: false },
    { name: 'Conversion', leak: true, note: 'Revenue Leak Point' },
    { name: 'Sales', leak: false },
    { name: 'Distribution', leak: false },
    { name: 'Retention', leak: false },
  ];

  return (
    <div className="w-full my-6 bg-midnight/60 border border-border rounded-xl p-6">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Diagnostic System Chain</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {steps.map((s, i) => (
          <div
            key={s.name}
            className={`p-3 rounded border text-center transition-all ${
              s.leak
                ? 'border-gold bg-gold/10 text-foreground font-medium shadow-[0_0_15px_rgba(193,155,62,0.25)]'
                : 'border-border bg-secondary/20 text-muted-foreground'
            }`}
          >
            <div className="text-[10px] text-muted-foreground tracking-wider mb-1">0{i + 1}</div>
            <div className={`text-xs font-semibold ${s.leak ? 'text-gold' : ''}`}>{s.name}</div>
            {s.leak && (
              <div className="mt-2 text-[9px] uppercase tracking-widest bg-gold text-midnight px-1.5 py-0.5 rounded font-bold">
                Leak Point
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 5. GLOBAL B2B WORLD MAP SVG
 */
export function GlobalMapSVG() {
  return (
    <div className="relative w-full h-full min-h-[350px] rounded-xl overflow-hidden border border-black/10 bg-[#f5f5f7] shadow-2xl flex flex-col">
      {/* macOS Title Bar */}
      <div className="h-10 w-full bg-[#f5f5f7]/95 backdrop-blur-md flex items-center px-4 gap-2 border-b border-black/10 shrink-0 z-20">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative flex-1 bg-[#080E20] p-6 md:p-8 flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4 z-10">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Global Connectivity Map</span>
            <h4 className="text-lg font-medium text-white mt-1">India Supply Hub & International Demand</h4>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"/>
            <span className="text-[10px] uppercase tracking-widest text-gray-300 font-mono">India Hub Active</span>
          </div>
        </div>

      {/* Abstract Map Nodes SVG */}
      <svg className="w-full h-auto flex-1 my-6 drop-shadow-lg" viewBox="0 0 600 240" fill="none">
        {/* World Grid Lines */}
        <line x1="0" y1="60" x2="600" y2="60" stroke="#1E293B" strokeWidth="0.5"/>
        <line x1="0" y1="120" x2="600" y2="120" stroke="#1E293B" strokeWidth="0.5"/>
        <line x1="0" y1="180" x2="600" y2="180" stroke="#1E293B" strokeWidth="0.5"/>
        <line x1="150" y1="0" x2="150" y2="240" stroke="#1E293B" strokeWidth="0.5"/>
        <line x1="300" y1="0" x2="300" y2="240" stroke="#1E293B" strokeWidth="0.5"/>
        <line x1="450" y1="0" x2="450" y2="240" stroke="#1E293B" strokeWidth="0.5"/>

        {/* India (Hub) */}
        <g>
          <circle cx="450" cy="140" r="10" fill="#C19B3E" fillOpacity="0.3" className="animate-pulse"/>
          <circle cx="450" cy="140" r="5" fill="#C19B3E"/>
          <text x="450" y="165" fill="#C19B3E" fontSize="11" textAnchor="middle" fontWeight="bold">INDIA (HUB)</text>
        </g>

        {/* Europe */}
        <circle cx="280" cy="80" r="4.5" fill="#94A3B8"/>
        <text x="280" y="65" fill="#94A3B8" fontSize="10" textAnchor="middle">Europe</text>
        <path d="M450 140 Q 360 90, 280 80" stroke="#C19B3E" strokeWidth="1.5" strokeDasharray="4 4"/>

        {/* North America */}
        <circle cx="80" cy="90" r="4.5" fill="#94A3B8"/>
        <text x="80" y="75" fill="#94A3B8" fontSize="10" textAnchor="middle">North America</text>
        <path d="M450 140 Q 250 60, 80 90" stroke="#C19B3E" strokeWidth="1.5" strokeDasharray="4 4"/>

        {/* Middle East & Africa */}
        <circle cx="350" cy="150" r="4.5" fill="#94A3B8"/>
        <text x="350" y="170" fill="#94A3B8" fontSize="10" textAnchor="middle">Middle East</text>
        <path d="M450 140 L 350 150" stroke="#C19B3E" strokeWidth="1.5" strokeDasharray="4 4"/>

        {/* East Asia */}
        <circle cx="540" cy="90" r="4.5" fill="#94A3B8"/>
        <text x="540" y="75" fill="#94A3B8" fontSize="10" textAnchor="middle">East Asia</text>
        <path d="M450 140 Q 500 100, 540 90" stroke="#C19B3E" strokeWidth="1.5" strokeDasharray="4 4"/>

        {/* Oceania */}
        <circle cx="550" cy="200" r="4.5" fill="#94A3B8"/>
        <text x="550" y="215" fill="#94A3B8" fontSize="10" textAnchor="middle">Oceania</text>
        <path d="M450 140 Q 510 170, 550 200" stroke="#C19B3E" strokeWidth="1.5" strokeDasharray="4 4"/>
      </svg>

      <div className="text-[10px] text-gray-400">
        Connected global procurement vectors mapped across Asia, Europe, Americas, Africa & Oceania.
      </div>
      </div>
    </div>
  );
}

/**
 * 6. BUYER PRIORITIES GRID (8 Cards with icons)
 */
export function BuyerPrioritiesGrid() {
  const priorities = [
    { title: 'Quality Assurance', desc: 'Strict inspection against technical drawing specifications.', icon: ShieldCheck },
    { title: 'Certification Scope', desc: 'Verified ISO, CE, RoHS & destination market standards.', icon: Award },
    { title: 'Production Capacity', desc: 'Assessed factory scale, machinery, and MOQ compliance.', icon: Factory },
    { title: 'Landed Economics', desc: 'Comprehensive freight, duty & total cost assessment.', icon: Coins },
    { title: 'Supply Reliability', desc: 'Track record of on-time delivery & production stability.', icon: Clock },
    { title: 'Documentation', desc: 'Complete export compliance, mill certs & batch traceability.', icon: FileText },
    { title: 'Clear Communication', desc: 'Direct technical dialogue & transparent milestone reporting.', icon: MessageSquare },
    { title: 'Business Continuity', desc: 'Long-term risk mitigation & multi-facility options.', icon: RefreshCw },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {priorities.map((p, i) => {
        const Icon = p.icon;
        return (
          <div key={p.title} className="p-5 rounded-lg border border-border bg-card hover:border-gold/50 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <span className="p-2 rounded bg-gold/10 text-gold"><Icon size={20} /></span>
              <span className="text-[10px] font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h4 className="font-medium text-base mb-1">{p.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * 7. APPROACH PAGE - 6 STAGE HORIZONTAL SYSTEM DIAGRAM
 */
export function ApproachSixStageDiagram() {
  const stages = [
    { name: 'Discover', desc: 'Understand business model, customer needs & constraints.' },
    { name: 'Diagnose', desc: 'Pinpoint exact friction eroding conversion & growth.' },
    { name: 'Prioritize', desc: 'Rank commercial opportunities by feasibility & ROI.' },
    { name: 'Design', desc: 'Build an integrated strategy & commercial roadmap.' },
    { name: 'Deploy', desc: 'Execute positioning, sales, and procurement systems.' },
    { name: 'Measure', desc: 'Track landed outcomes & compound performance.' },
  ];

  return (
    <div className="w-full my-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="w-8 h-[1px] bg-gold"></span>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">6-Stage Commercial Methodology</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((s, i) => (
          <div key={s.name} className="group relative p-8 rounded-3xl bg-card border border-border hover:border-gold/40 shadow-sm hover:shadow-[0_0_40px_rgba(193,155,62,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            {/* Massive subtle watermark number */}
            <div className="absolute -bottom-4 -right-2 text-9xl font-black text-foreground/[0.03] group-hover:text-gold/[0.05] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 select-none pointer-events-none">
              0{i + 1}
            </div>
            
            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold font-bold mb-6 border border-gold/20 group-hover:bg-gold group-hover:text-black transition-colors duration-500">
                {i + 1}
              </span>
              <h4 className="text-2xl font-medium mb-3 text-foreground group-hover:text-gold transition-colors duration-300">{s.name}</h4>
              <p className="text-muted-foreground leading-relaxed pr-4">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 10. TYPOGRAPHY CERTIFICATION CARDS
 */
export function CertificationTypographyBadges() {
  const badges = [
    { name: 'ISO 9001 / 14001', detail: 'Quality & Environmental Management Systems', icon: ShieldCheck },
    { name: 'CE Mark / RoHS', detail: 'EU Health, Safety & Environmental Standard', icon: Award },
    { name: 'IATF 16949', detail: 'Automotive Quality Management System', icon: ShieldCheck },
    { name: 'AS9100 Aerospace', detail: 'Aviation, Space & Defense Quality', icon: Award },
    { name: 'HACCP & GMP', detail: 'Food Safety & Good Manufacturing Practice', icon: ShieldCheck },
    { name: 'REACH & BIS', detail: 'Chemical Registration & Indian Standards', icon: Award },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {badges.map(b => (
        <div key={b.name} className="group relative p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-gold/40 transition-all duration-500 overflow-hidden flex items-start gap-5">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/15 transition-colors duration-500 pointer-events-none"></div>
          <div className="shrink-0 p-3 rounded-xl bg-secondary/50 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-500">
            <b.icon size={22} strokeWidth={2} />
          </div>
          <div>
            <div className="text-base font-bold tracking-wide text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{b.name}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{b.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * 11. PROCUREMENT 10-STEP TIMELINE
 */
export function ProcurementTenStepTimeline() {
  const steps = [
    'Requirement', 'Research', 'Qualification', 'RFQ', 'Compare',
    'Negotiate', 'Verify', 'Agreement', 'Procure', 'Scale'
  ];

  return (
    <div className="w-full my-6 p-6 rounded-xl border border-border bg-secondary/20">
      <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">10-Step Procurement Workflow</div>
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
        {steps.map((step, i) => (
          <div key={step} className="p-2.5 rounded border border-border bg-background text-center">
            <span className="text-[10px] font-mono text-gold block">0{i + 1}</span>
            <span className="text-xs font-medium text-foreground">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 12. D2C CUSTOMER JOURNEY DIAGRAM
 */
export function D2CCustomerJourneyDiagram() {
  const stages = [
    { title: 'Notice', desc: 'Brand Positioning & Awareness' },
    { title: 'Trust', desc: 'Social Proof & Product Clarity' },
    { title: 'Consider', desc: 'Frictionless Offer & Value' },
    { title: 'Buy', desc: 'Optimized Conversion Funnel' },
    { title: 'Return', desc: 'Retention & Compounding LTV' },
  ];

  return (
    <div className="w-full my-8 p-6 rounded-xl border border-border bg-midnight text-on-dark">
      <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">D2C Customer Decision Journey</div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {stages.map((s, i) => (
          <div key={s.title} className="p-4 rounded border border-white/10 bg-white/5 text-center">
            <span className="text-xs font-mono text-gold block mb-1">STAGE 0{i + 1}</span>
            <h4 className="text-lg font-medium text-white mb-1">{s.title}</h4>
            <p className="text-xs text-dark-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 13. AUDIT RESULT DIAGNOSTIC SCORE MATRIX (UI ONLY - NO PHOTO)
 */
export function AuditScoreVisual({ primary, secondary, risk }: { primary: string, secondary: string, risk: string }) {
  return (
    <div className="my-6 p-6 rounded-xl border border-gold/40 bg-midnight text-on-dark">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Commercial Diagnosis Scorecard</span>
          <h4 className="text-xl font-medium text-white mt-1">System Assessment Matrix</h4>
        </div>
        <div className="text-right">
          <span className="text-xs text-dark-muted block">Risk Evaluation</span>
          <span className="text-sm font-semibold text-gold">{risk}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded border border-white/10 bg-white/5">
          <span className="text-xs text-dark-muted block mb-1">Primary Growth Constraint</span>
          <div className="text-xl font-medium text-gold">{primary}</div>
          <p className="text-xs text-dark-muted mt-2">Highest leverage area requiring immediate positioning or system redesign.</p>
        </div>
        <div className="p-4 rounded border border-white/10 bg-white/5">
          <span className="text-xs text-dark-muted block mb-1">Secondary Bottleneck</span>
          <div className="text-xl font-medium text-white">{secondary}</div>
          <p className="text-xs text-dark-muted mt-2">Secondary commercial system to align following primary constraint resolution.</p>
        </div>
      </div>
    </div>
  );
}

/**
 * 15. INSIGHT TYPOGRAPHIC COVER
 */
export function InsightTypographicCover({ category, title }: { category: string, title: string }) {
  return (
    <div className="w-full h-48 rounded-lg bg-midnight border border-border p-6 flex flex-col justify-between relative overflow-hidden group hover:border-gold transition-colors">
      <div className="flex justify-between items-center z-10">
        <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">{category} · PERSPECTIVE</span>
        <span className="text-[10px] font-mono text-dark-muted">EVEN NOW</span>
      </div>
      <h3 className="text-lg font-medium text-white leading-snug z-10 group-hover:text-gold transition-colors line-clamp-2">{title}</h3>
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border border-gold/10 pointer-events-none"/>
    </div>
  );
}


