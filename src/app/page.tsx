import Link from 'next/link';
import { ArrowUpRight, Quote, ChevronRight, Globe2, ChartNoAxesCombined, Sparkles, Building2, TrendingUp, Compass } from 'lucide-react';
import { Eyebrow, Reveal } from '@/components/even-now/site';
import { HeroNetworkAnimation, GlobalMapSVG } from '@/components/even-now/visuals';
import leadership from '@/assets/leadership.jpg';
import port from '@/assets/commerce-port.jpg';
import logistics from '@/assets/logistics.jpg';
import shivayuLogo from '@/assets/shivayu-transparent.png';
import decofixLogo from '@/assets/decofix-white.png';

export default function Page(){
 return (
    <>
   <section className="relative min-h-[90vh] md:min-h-[800px] flex items-center bg-[#050A18] overflow-hidden isolate">
    
    <div className="absolute inset-0 z-0 opacity-80">
      <HeroNetworkAnimation />
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/80 to-transparent z-0 pointer-events-none"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent z-0 pointer-events-none"></div>
    
    <div className="container-shell reveal relative z-10 w-full py-20 mt-10">
     <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
       <span className="w-12 h-[1px] bg-gold"></span>
       <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gold">Business Growth. Global Market Access.</span>
      </div>
      
      <h1 className="text-6xl md:text-7xl lg:text-[84px] font-medium leading-[1.05] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 text-balance drop-shadow-2xl">
       Find Where Your<br/>Growth Is <span className="text-gold relative inline-block">Leaking.<svg className="absolute -bottom-1 left-0 w-full opacity-70" viewBox="0 0 200 8" fill="none"><path d="M0 4 Q 100 8 200 4" stroke="#C19B3E" strokeWidth="3" strokeLinecap="round"/></svg></span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-12 border-l-2 border-gold/40 pl-6 text-balance drop-shadow-md">
       Even Now helps companies diagnose growth problems, build stronger commercial systems and access new markets through strategy, sales, procurement and business development.
      </p>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-16">
       <Link href="/audit" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 h-16 rounded-full font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] transition-all duration-300 overflow-hidden w-full sm:w-auto">
        <span className="relative z-10">Request a Growth Audit</span>
        <ArrowUpRight className="relative z-10 group-hover:rotate-12 transition-transform" size={20}/>
        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
       </Link>
       
       <Link href="/global-b2b" className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 px-10 h-16 rounded-full font-bold tracking-wide backdrop-blur-md hover:scale-105 transition-all duration-300 w-full sm:w-auto">
        Explore Global B2B <ArrowUpRight className="group-hover:translate-x-1 transition-transform" size={20}/>
       </Link>
      </div>
     </div>
    </div>
   </section>
   
   {/* Selected Clients & Strategic Collaborations Strip */}
   <section className="border-y border-white/10 bg-[#070D1E] py-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.04] to-transparent pointer-events-none"></div>
    <div className="container-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-5">
      
      {/* Eyebrow Label */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
        <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-300">
          Selected Clients & Strategic Collaborations
        </span>
      </div>

      {/* Clean, Uniform Client Logo Showcase */}
      <div className="flex items-center justify-center md:justify-end gap-4 sm:gap-6 flex-wrap">
        
        {/* Shivayu Aerospace & Defence */}
        <div 
          title="Shivayu Aerospace & Defence"
          className="group flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(193,155,62,0.18)] hover:-translate-y-0.5 cursor-pointer"
        >
          <img 
            src={shivayuLogo.src} 
            alt="Shivayu Aerospace and Defence" 
            className="h-6 sm:h-7 w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Decofix */}
        <div 
          title="Decofix"
          className="group flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(193,155,62,0.18)] hover:-translate-y-0.5 cursor-pointer"
        >
          <img 
            src={decofixLogo.src} 
            alt="Decofix" 
            className="h-6 sm:h-7 w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          />
        </div>

      </div>
    </div>
   </section>

   <section className="section-space">
    <Reveal className="container-shell">
     <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
      <div className="max-w-2xl">
       <Eyebrow>One partner. Two commercial engines.</Eyebrow>
       <h2 className="text-4xl md:text-5xl font-medium tracking-tight mt-6 leading-[1.15]">Two growth problems.<br/>One commercial mindset.</h2>
      </div>
      <div className="lg:max-w-md lg:justify-self-end">
       <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-gold/50 pl-5">Whether growth is stuck inside your business or waiting in a new market, we connect the right strategy, systems and relationships.</p>
      </div>
     </div>
     
     <div className="grid md:grid-cols-2 gap-8">
      
      <Link href="/growth" className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold/30 transition-all duration-500 flex flex-col">

       <div className="relative h-64 w-full overflow-hidden">
        <img src={leadership.src} alt="Business Growth Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-lg group-hover:scale-110 transition-transform duration-500">
            <ChartNoAxesCombined size={22}/>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">01 / Build from within</span>
        </div>
       </div>

       <div className="p-8 md:p-10 flex-1 flex flex-col bg-card">
        <h3 className="text-3xl font-medium mb-4 group-hover:text-gold transition-colors">Business Growth</h3>
        <p className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base">Find what's holding your business back. Build a growth system that connects positioning, demand, sales, conversion and retention.</p>
        
        <div className="flex flex-wrap gap-2 mt-8 mb-8">
         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary text-foreground rounded-md border border-border/50">Growth Strategy</span>
         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary text-foreground rounded-md border border-border/50">Sales Systems</span>
         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary text-foreground rounded-md border border-border/50">D2C Growth</span>
        </div>

        <div className="text-sm font-semibold text-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
         Explore Business Growth <ArrowUpRight size={16}/>
        </div>
       </div>
      </Link>

      <Link href="/global-b2b" className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold/30 transition-all duration-500 flex flex-col">
       
       <div className="relative h-64 w-full overflow-hidden">
        <img src={port.src} alt="Global B2B & Procurement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
        
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-lg group-hover:scale-110 transition-transform duration-500">
            <Globe2 size={22}/>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">02 / Expand beyond borders</span>
        </div>
       </div>

       <div className="p-8 md:p-10 flex-1 flex flex-col bg-card">
        <h3 className="text-3xl font-medium mb-4 group-hover:text-gold transition-colors">Global B2B & Procurement</h3>
        <p className="text-muted-foreground leading-relaxed flex-1 text-sm md:text-base">Connect international demand with qualified Indian supply. Navigate market access, supplier qualification and commercial procurement.</p>
        
        <div className="flex flex-wrap gap-2 mt-8 mb-8">
         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary text-foreground rounded-md border border-border/50">Market Access</span>
         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary text-foreground rounded-md border border-border/50">Supplier Sourcing</span>
         <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-secondary text-foreground rounded-md border border-border/50">Procurement</span>
        </div>

        <div className="text-sm font-semibold text-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
         Explore Global B2B <ArrowUpRight size={16}/>
        </div>
       </div>
      </Link>
     </div>
    </Reveal>
   </section>

   {/* Founder's Words Quote Block */}
   <section className="section-space relative overflow-hidden bg-[#050A18] text-white border-y border-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
    <div className="container-shell relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-gold/20 bg-gradient-to-b from-[#0B1530]/80 via-[#070D1E]/90 to-[#050A18] p-8 sm:p-12 md:p-16 text-center shadow-2xl backdrop-blur-sm">
          
          <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-6 shadow-[0_0_20px_rgba(193,155,62,0.2)]">
            <Quote size={20} className="rotate-180" />
          </div>

          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gold">Founder’s Words</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal leading-[1.5] tracking-tight text-white/95 max-w-3xl mx-auto">
            “Whatever the situation, whatever the past, and whatever bottlenecks your business is facing—in sales, marketing, conversions, or operations, Even Now, we can find a way forward. <span className="text-gold font-semibold">We can fix. We can grow. We can build. We can scale.</span>”
          </blockquote>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center">
            <div className="w-8 h-[1px] bg-gold/50 mb-3"></div>
            <span className="font-sans font-bold tracking-[0.2em] text-sm uppercase flex items-center text-white">EVEN<span className="text-gold ml-1">NOW</span></span>
          </div>

        </div>
      </div>
    </div>
   </section>

   {/* Vision & Mission Section */}
   <section className="section-space bg-secondary/20 border-b border-border/50">
    <Reveal className="container-shell">
      <div className="max-w-3xl mb-12">
        <Eyebrow>Vision · Mission</Eyebrow>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Vision</h3>
            </div>
            <p className="text-lg md:text-xl text-foreground font-normal leading-relaxed">
              To consult and audit 7,000 businesses across India and around the world—helping them overcome bottlenecks, unlock growth, and build stronger businesses that contribute to India’s economic progress.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Mission</h3>
            </div>
            <p className="text-lg md:text-xl text-foreground font-normal leading-relaxed">
              To identify the challenges holding businesses back across sales, marketing, conversions, and operations, then turn those findings into clear, practical strategies that help businesses improve, grow, build, and scale.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
   </section>

   <section className="system-strip">
    <div className="container-shell system-inner">
     <span className="system-label">Growth is a connected system</span>
     <div className="system-chain">{['Positioning','Demand','Acquisition','Conversion','Sales','Distribution','Retention'].map((s,i)=><span key={s} className="flex items-center gap-5">{s}{i<6&&<ChevronRight size={12} className="text-muted-foreground"/>}</span>)}</div>
    </div>
   </section>

   <section className="section-space">
    <Reveal className="container-shell editorial-split">
     <div>
      <Eyebrow>The System Problem</Eyebrow>
      <h2 className="section-heading">Growth rarely breaks<br/>in one place.</h2>
      <p className="section-intro mt-6">Most growth problems aren't visibility problems - they're system problems. A brand can run more campaigns, post more content, and still leak revenue at the exact same points: unclear positioning, a broken customer journey, a sales process with no follow-through, retention left to chance.</p>
      <Link href="/audit" className="text-cta">Find My Growth Leak <ArrowUpRight size={16}/></Link>
     </div>
     <div>
      <div className="relative rounded-xl overflow-hidden border border-black/10 bg-[#f5f5f7] shadow-2xl dark:border-white/10 group">
       
       <div className="h-10 w-full bg-[#f5f5f7]/95 backdrop-blur-md flex items-center px-4 gap-2 absolute top-0 left-0 right-0 z-20 border-b border-black/10">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
       </div>
       
       <div className="pt-10">
        <div className="relative navy-image-overlay !rounded-none">
         <img className="w-full aspect-[4/3] md:aspect-[16/11] object-cover" src={logistics.src} width={1920} height={1024} loading="lazy" alt="Premium representation of global supply chain strategy and market access"/>
        </div>
       </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
       <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
       We diagnose five dimensions that determine growth.
      </p>
     </div>
    </Reveal>
   </section>

   <section className="section-space">
    <Reveal className="container-shell editorial-split items-center">
     <div className="w-full relative order-2 md:order-1">
      <GlobalMapSVG />
     </div>
     <div className="order-1 md:order-2">
      <Eyebrow>Indian supply. International demand.</Eyebrow>
      <h2 className="section-heading">The world is looking<br/>for better supply.<br/><span className="text-muted-foreground">India has the capability.</span></h2>
      <p className="section-intro mt-6">From discovery to qualification and commercial agreement, we help assess the right Indian supply opportunity for your specific requirements.</p>
      <Link href="/global-b2b" className="text-cta mt-8 inline-flex">Explore Global B2B <ArrowUpRight size={16}/></Link>
     </div>
    </Reveal>
   </section>

   <section className="section-space">
    <div className="container-shell mb-10">
     <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
      
      <div className="relative z-10 max-w-xl">
       <div className="flex items-center gap-4 mb-6">
        <span className="w-8 h-[1px] bg-gold"></span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">India Advantage</span>
       </div>
       <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
        Could India create a procurement advantage for you?
       </h2>
       <p className="text-sm text-muted-foreground mt-5 leading-relaxed max-w-md">
        We assess landed-cost and commercial feasibility rather than making blanket savings claims. Tell us what you need to source.
       </p>
      </div>
      
      <div className="relative z-10 shrink-0 w-full md:w-auto">
       <Link href="/procurement" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-8 md:px-10 h-14 md:h-16 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full md:w-auto">
        <span className="relative z-10">Start a Procurement Request</span>
        <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
       </Link>
      </div>
     </div>
    </div>
   </section>

    </>
  );
}
