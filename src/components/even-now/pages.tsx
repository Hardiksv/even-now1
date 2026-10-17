'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Quote, ArrowUpRight, ArrowLeft, Check, Sparkles, Target, Compass, TrendingUp, Globe2, Settings, Wrench, Leaf, Shirt, Beaker, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Site, Intro, Eyebrow, Method, Diagnostics, FinalCTA } from './site';
import port from '@/assets/commerce-port.jpg';
import leadership from '@/assets/leadership.jpg';
import d2cPackaging from '@/assets/d2c-packaging.jpg';
import shivayuLogo from '@/assets/shivayu-logo.png';
import decofixLogo from '@/assets/decofix-logo.png';
import {
  ApproachSixStageDiagram,
  CertificationTypographyBadges,
  D2CCustomerJourneyDiagram,
  InsightTypographicCover
} from './visuals';

export const serviceContent = {
 growth:{tag:'Business growth strategy',title:'Build a growth system, not another marketing plan.',description:'Your business may not need more marketing. It may need a better growth system. We connect business strategy, customer understanding and commercial execution.',heading:'A complete view of what drives growth.',items:[['Business & market','Business model, customer needs, market dynamics and competitor positioning.'],['Demand & acquisition','Channel strategy, content, acquisition economics and demand quality.'],['Sales & conversion','Funnel friction, sales processes, CRM and commercial decision-making.'],['Retention & distribution','Customer lifetime value, repeat business and routes to market.']],output:['Growth diagnosis','Opportunity map','Strategic priorities','Growth roadmap','Funnel recommendations','Measurement framework']},
 d2c:{tag:'D2C growth',title:'Understand the customer behind the conversion.',description:'D2C growth is not simply acquiring more traffic. It is understanding why customers notice, trust, consider, buy and return.',heading:'Better customer understanding. Better commercial decisions.',items:[['Consumer psychology','Understand the motivations, objections and trust signals behind a purchase.'],['Positioning & content','Create a differentiated proposition and relevant customer communication.'],['Acquisition & conversion','Align channel strategy, customer journeys and conversion opportunities.'],['Retention','Build a reason to return, not just an incentive to buy once.']],output:['Customer journey assessment','Positioning priorities','Acquisition review','Conversion opportunities','Retention strategy','Measurement framework']},
 about:{tag:'About Even Now',title:'Growth is rarely a single problem.',description:'Companies often treat marketing, sales, procurement, distribution and market expansion as separate activities. Even Now connects them into one commercial system.',heading:'One commercial mindset. A connected perspective.',items:[['Diagnosis before tactics','A better answer starts with a better understanding of the problem.'],['Systems over isolated activity','Growth depends on how each commercial function works with the next.'],['Commercial clarity','Priorities should connect to business outcomes, not activity for its own sake.'],['Evidence before promises','We value transparent assessment, realistic expectations and explicit responsibilities.']],output:['Founders & CEOs','Growth & commercial leaders','D2C businesses','International buyers','Procurement teams','Qualified Indian suppliers']},
} as const;

export function GrowthPage() {
  const c = serviceContent.growth;
  return (
    <>
      
      <section className="relative min-h-[75vh] flex items-center bg-[#050A18] overflow-hidden py-32 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">{c.tag}</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-white text-balance drop-shadow-2xl">
            {c.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 text-balance drop-shadow-md">
            {c.description}
          </p>
          <div className="flex justify-center">
            <Link href="/audit" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 h-16 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Request a Growth Audit</span>
              <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/20 border-b border-border/50">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group h-[500px]">
               <img src={leadership.src} alt="Business Leadership" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500">
                   <ArrowUpRight size={20}/>
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-2">Connecting strategy with execution.</h3>
                 <p className="text-gray-300 text-sm">A unified approach to business models, sales, and distribution.</p>
               </div>
            </div>
            
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">What we analyze</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
                {c.heading}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Most companies don't fail because of their product; they fail because of friction in their commercial engine. We break down the entire customer journey to find exactly where growth is leaking.
              </p>
              
              <div className="flex flex-col gap-6">
                {c.items.slice(0, 2).map(([name, desc]) => (
                  <div key={name} className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors shadow-sm">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(193,155,62,0.8)] shrink-0 animate-pulse"/>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{name}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            {c.items.slice(2, 4).map(([name, desc]) => (
              <div key={name} className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors shadow-sm">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(193,155,62,0.8)] shrink-0 animate-pulse"/>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{name}</h4>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/20 text-foreground">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">The Outputs</span>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1]">From diagnosis to a clear way forward.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {c.output.map(x=>(
              <div key={x} className="flex items-center gap-4 bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 group shadow-sm">
                <div className="p-2.5 rounded-full bg-gold/10 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all shadow-[0_0_15px_rgba(193,155,62,0)] group-hover:shadow-[0_0_15px_rgba(193,155,62,0.3)]">
                  <Check size={18} strokeWidth={3}/>
                </div>
                <span className="text-sm font-semibold tracking-wide text-left">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA 
        title="A connected system drives measurable growth."
        description="Find the friction in your customer journey."
        linkTo="/audit"
        linkText="Request a Growth Audit"
      />
    </>
  );
}

export function D2cPage() {
  const c = serviceContent.d2c;
  return (
    <>
      
      <section className="relative min-h-[75vh] flex items-center bg-[#050A18] overflow-hidden py-32 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">{c.tag}</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-white text-balance drop-shadow-2xl">
            {c.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 text-balance drop-shadow-md">
            {c.description}
          </p>
          <div className="flex justify-center">
            <Link href="/audit" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 h-16 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Request a D2C Audit</span>
              <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/20 border-b border-border/50">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">The D2C Ecosystem</span>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1]">Mapping the psychology of conversion.</h2>
          </div>
          
          <D2CCustomerJourneyDiagram />
          
          <div className="relative mt-16 rounded-3xl overflow-hidden shadow-2xl border border-border group h-[500px]">
            <img src={d2cPackaging.src} width={1200} height={600} loading="lazy" alt="Premium D2C luxury packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl font-medium text-white mb-3">Premium Brand Positioning</h3>
              <p className="text-gray-300 text-lg max-w-lg">How product presentation impacts the customer\'s perceived value and trust before they even checkout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-background border-b border-border/50">
        <div className="container-shell">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">What we analyze</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-12 max-w-3xl">
            {c.heading}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {c.items.map(([name, desc], idx) => (
              <div key={name} className="flex gap-5 p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm group">
                <div className="mt-1 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(193,155,62,0.8)] shrink-0 group-hover:scale-150 transition-transform duration-300"/>
                <div>
                  <h4 className="text-xl font-semibold mb-3">{name}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/30">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow className="text-gold justify-center">The Deliverables</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-foreground">Clear steps for retention and conversion.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {c.output.map(x=>(
              <div key={x} className="flex items-center gap-4 bg-background border border-border rounded-2xl p-6 hover:border-gold/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="p-2.5 rounded-full bg-gold/10 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all shadow-[0_0_15px_rgba(193,155,62,0)] group-hover:shadow-[0_0_15px_rgba(193,155,62,0.3)]">
                  <Check size={18} strokeWidth={3}/>
                </div>
                <span className="text-sm font-semibold tracking-wide text-left text-foreground">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA 
        title="Turn traffic into a reliable commercial asset."
        description="Map your customer psychology and conversion barriers."
        linkTo="/audit"
        linkText="Request a D2C Audit"
      />
    </>
  );
}

export function AboutPage() {
  const c = serviceContent.about;
  return (
    <>
      <section className="relative min-h-[75vh] flex items-center bg-[#050A18] overflow-hidden py-32 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">Vision · Mission · Founder's Purpose</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-white text-balance drop-shadow-2xl">
            {c.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 text-balance drop-shadow-md">
            {c.description}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 h-16 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Talk to Even Now</span>
              <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </Link>
            <Link href="/audit" className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 px-10 h-16 rounded-full font-bold tracking-wide backdrop-blur-md hover:scale-105 transition-all duration-300">
              Request an Audit <ArrowUpRight className="group-hover:translate-x-1 transition-transform" size={20}/>
            </Link>
          </div>
        </div>
      </section>

      {/* Prominent Founder's Words Quote Block */}
      <section className="section-space relative overflow-hidden bg-[#070D1E] text-white border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-[#070D1E] to-[#070D1E] pointer-events-none"></div>
        <div className="container-shell relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl border border-gold/20 bg-gradient-to-b from-[#0B1530]/80 via-[#070D1E]/90 to-[#050A18] p-8 sm:p-12 md:p-16 text-center shadow-2xl backdrop-blur-sm">
              
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-6 shadow-[0_0_20px_rgba(193,155,62,0.2)]">
                <Quote size={20} className="rotate-180" />
              </div>

              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gold"></span>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-gold">Founder’s Words</span>
                <span className="w-8 h-[1px] bg-gold"></span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.4] tracking-tight text-white/95 max-w-3xl mx-auto">
                “Whatever the situation, whatever the past, and whatever bottlenecks your business is facing—in sales, marketing, conversions, or operations, Even Now, we can find a way forward.”
              </blockquote>

              <div className="mt-6 md:mt-8 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gold">
                We can fix. We can grow. We can build. We can scale.
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center">
                <div className="w-8 h-[1px] bg-gold/50 mb-3"></div>
                <span className="font-sans font-bold tracking-[0.2em] text-sm uppercase flex items-center text-white">EVEN<span className="text-gold ml-1">NOW</span></span>
                <p className="text-xs text-gray-400 mt-1">Founder’s Motto & Stated Goals</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Founder's Purpose Section */}
      <section className="section-space bg-background border-b border-border/50">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Founder’s Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight mb-8 text-foreground">
                Past challenges do not have to define your future.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 border-l-2 border-gold/40 pl-6">
                Even Now was founded with a belief that a business’s past challenges do not have to define its future. Through consulting, auditing, collaboration, and connections between Indian and international businesses, the aim is to help companies move forward and contribute to a stronger Indian economy.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every bottleneck in an enterprise—whether in brand positioning, demand generation, sales velocity, or supply chain procurement—holds an opportunity for transformation when diagnosed with objective precision.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-6">
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold font-mono text-sm">01</span>
                  <h4 className="text-xl font-semibold">Auditing & Strategic Consulting</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-12">
                  Diagnosing commercial constraints across sales, marketing, conversions, and operations before prescribing solutions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold font-mono text-sm">02</span>
                  <h4 className="text-xl font-semibold">Indian & Global Bridge</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-12">
                  Connecting qualified Indian manufacturing and service capabilities with international commercial buyers and scale partners.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold font-mono text-sm">03</span>
                  <h4 className="text-xl font-semibold">Strengthening the Economy</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-12">
                  Fostering resilient commercial engines that generate lasting value, job creation, and tangible contributions to India’s economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Clients Showcase in About */}
      <section className="py-12 bg-[#060C1B] border-b border-border/50">
        <div className="container-shell flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold block mb-2">Selected Clients</span>
            <h3 className="text-2xl font-medium text-foreground">Trusted by Leading Enterprises</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-5">
            {/* Shivayu */}
            <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 shadow-sm">
              <div className="h-8 md:h-9 flex items-center justify-center overflow-hidden rounded-lg bg-[#003893] p-1.5 shadow-sm">
                <img src={shivayuLogo.src} alt="Shivayu Aerospace and Defence" className="h-full w-auto object-contain" />
              </div>
              <div className="border-l border-border pl-3">
                <p className="text-xs font-bold text-foreground">Shivayu</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Aerospace & Defence</p>
              </div>
            </div>

            {/* Decofix */}
            <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 shadow-sm">
              <div className="h-8 md:h-9 flex items-center justify-center overflow-hidden rounded-lg bg-white px-2.5 py-1 shadow-sm">
                <img src={decofixLogo.src} alt="Decofix" className="h-full w-auto object-contain" />
              </div>
              <div className="border-l border-border pl-3">
                <p className="text-xs font-bold text-foreground">Decofix®</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Adhesives & Materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Full Section */}
      <section className="section-space bg-secondary/20 border-b border-border/50">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Vision & Mission</span>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-foreground">
              Our Commitment to Enterprise Growth
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Vision Detailed Card */}
            <div className="relative p-10 md:p-12 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-bl-[120px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Vision</span>
                  <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">7,000 Milestone</span>
                </div>
                <h3 className="text-3xl font-medium mb-6 text-foreground group-hover:text-gold transition-colors">
                  To consult and audit 7,000 businesses across India and around the world.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Helping them overcome bottlenecks, unlock growth, and build stronger businesses that contribute to India’s economic progress.
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-border flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                <span>India & Global Scale</span>
                <span className="text-gold">Targeted Impact</span>
              </div>
            </div>

            {/* Mission Detailed Card */}
            <div className="relative p-10 md:p-12 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-bl-[120px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">Mission</span>
                  <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">Clear Execution</span>
                </div>
                <h3 className="text-3xl font-medium mb-6 text-foreground group-hover:text-gold transition-colors">
                  To identify commercial challenges and turn them into practical scale strategies.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To identify the challenges holding businesses back across sales, marketing, conversions, and operations, then turn those findings into clear, practical strategies that help businesses improve, grow, build, and scale.
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-border flex flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-secondary rounded-md border border-border text-foreground">We Can Fix</span>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-secondary rounded-md border border-border text-foreground">We Can Grow</span>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-secondary rounded-md border border-border text-foreground">We Can Build</span>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-secondary rounded-md border border-border text-foreground">We Can Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="section-space bg-secondary/10 border-b border-border/50">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Our Beliefs</span>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-balance">{c.heading}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {c.items.map(([name, desc], idx) => (
              <div key={name} className="relative p-10 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold font-mono">0{idx + 1}</span>
                  </div>
                  <h4 className="text-2xl font-semibold mb-4">{name}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-space bg-secondary/30">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Who we work with</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-8 text-foreground">For businesses with a meaningful commercial objective.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-gold/30 pl-6">
                We are not a social media agency, a supplier directory or a service that simply forwards contacts. Our focus is diagnosis, qualification and commercially relevant next steps.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {c.output.map(x=>(
                <div key={x} className="flex items-center gap-4 bg-background border border-border rounded-2xl p-5 hover:border-gold/50 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <div className="p-2 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Check size={16} strokeWidth={3}/>
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-foreground">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA 
        title="Let's discuss your commercial constraints."
        description="We connect business strategy with commercial execution."
        linkTo="/contact"
        linkText="Start a Conversation"
      />
    </>
  );
}

export function ApproachPage(){
  return (
    <>
      
      <section className="relative min-h-[85vh] flex items-center bg-[#050A18] overflow-hidden py-32 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-[#050A18] to-[#050A18] pointer-events-none"></div>

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

        <div className="container-shell relative z-10 w-full max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">The Even Now Methodology</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-8 text-white text-balance drop-shadow-2xl">
            Clarity before <span className="text-gold italic pr-2">activity.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-12 text-balance drop-shadow-md">
            We diagnose the commercial system before we prescribe the solution. Understand the problem. Identify the leverage. Build a coordinated commercial response.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 h-16 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto">
              <span className="relative z-10">Request a Commercial Audit</span>
              <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-background border-b border-border/50">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">The Problem with Growth</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight mb-8">
                Isolated activity rarely solves a connected problem.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  When growth slows, the instinct is to increase activity. More traffic, more leads, more outreach. But more traffic does not repair an unclear proposition, and more leads do not fix an inconsistent sales process.
                </p>
                <p>
                  We view growth as a <span className="text-foreground font-medium">connected commercial system</span>. If there is friction in your positioning, your acquisition costs rise. If there is friction in your sales process, your marketing ROI drops.
                </p>
                <p>
                  The Even Now approach isolates symptoms from constraints, ensuring that capital and effort are deployed against the actual bottleneck, not just the loudest symptom.
                </p>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border h-[600px] group">
              <img src={leadership.src} alt="Business Strategy Consulting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 max-w-sm">
                 <h3 className="text-3xl font-medium text-white mb-3">Systematic Diagnosis</h3>
                 <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-gold pl-4">We do not guess. We trace the customer journey from awareness to retention to find the exact point of failure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/30 border-b border-border/50">
        <div className="container-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Execution Framework</span>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-6">Six stages of commercial clarity.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We break down the entire commercial journey from initial assessment to ongoing measurement, ensuring no isolated activity happens without strategic alignment.
            </p>
          </div>
          
          <div className="bg-background rounded-[2rem] p-6 md:p-16 shadow-xl border border-border hover:border-gold/30 transition-colors duration-500">
            <ApproachSixStageDiagram />
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/20 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container-shell relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/3 shrink-0">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-6 h-[1px] bg-gold"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Our Diagnostics</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-6 text-foreground">How healthy is your commercial system?</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We interrogate every touchpoint. A failure to convert is rarely just a UI problem; it is often a positioning, trust, or pricing problem.
                </p>
                <Link href="/audit" className="inline-flex items-center gap-3 text-gold font-bold uppercase tracking-widest hover:text-foreground transition-colors group">
                  Start an assessment <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
                </Link>
              </div>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Proposition & Positioning', desc: 'Are you competing on value, or just racing to the bottom on price? We analyze market perception.' },
                { title: 'Customer Psychology', desc: 'What creates hesitation before purchase? We map the friction points in the buying decision.' },
                { title: 'Traffic & Demand', desc: 'Are you acquiring the right audience, or just generating expensive vanity metrics?' },
                { title: 'Sales & Conversion', desc: 'Where do qualified leads drop off? We audit the handoff between marketing and sales.' },
                { title: 'Pricing & Economics', desc: 'Is your pricing structure aligned with your perceived value and market reality?' },
                { title: 'Retention & Loyalty', desc: 'Why do customers leave? We build systems to increase LTV and reduce churn.' }
              ].map((item, idx) => (
                <div key={item.title} className="bg-card border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 group">
                  <div className="text-gold/60 font-mono text-sm mb-4 group-hover:text-gold transition-colors">0{idx + 1}</div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA 
        title="Ready to build a connected commercial system?" 
        description="Diagnose the system before you prescribe the solution." 
        linkTo="/audit" 
        linkText="Start your diagnosis" 
      />
    </>
  );
}

const continents=['Asia','Europe','North America','South America','Africa','Oceania'];

export function GlobalPage(){
  const [continent,setContinent]=useState('Europe');
  return (
    <>
      
      <section className="relative min-h-[75vh] flex items-center bg-[#050A18] overflow-hidden py-32 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">Global B2B Market Access</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-white text-balance drop-shadow-2xl">
            Source Better. Enter New Markets. Build Globally.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 text-balance drop-shadow-md">
            Even Now helps international companies access qualified Indian suppliers, manufacturing capabilities and procurement opportunities - from supplier discovery to commercial negotiation and market access.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/procurement" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-8 h-14 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto">
              <span className="relative z-10">Start a Procurement Request</span>
              <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
            </Link>
            <Link href="/contact?need=Market Access" className="group relative flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 h-14 rounded-full font-bold tracking-wide hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              <span>Talk to Our B2B Team</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18}/>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/20 border-b border-border/50">
        <div className="container-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group h-[550px] order-2 lg:order-1">
               <img src={port.src} alt="Container ship connecting international trade markets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500">
                   <Globe2 size={20}/>
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-2">Connecting global opportunity.</h3>
                 <p className="text-gray-300 text-sm">International demand meeting qualified Indian supply.</p>
               </div>
            </div>

            <div className="max-w-xl order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-6 h-[1px] bg-gold"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Connecting Opportunity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
                International demand. Qualified Indian supply.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The right supply opportunity must fit your product, specifications, certification requirements, volume and destination market. We evaluate landed-cost feasibility before commitment.
              </p>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-medium mb-4 text-foreground">Select your destination market:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {continents.map(c => (
                    <button 
                      key={c} 
                      onClick={() => setContinent(c)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${continent === c ? 'bg-gold text-black shadow-md shadow-gold/20 scale-105' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
                      aria-pressed={continent === c}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-background border border-border/50 animate-in fade-in slide-in-from-bottom-2 duration-500" key={continent}>
                  <h3 className="flex items-center gap-2 text-gold font-medium mb-2">
                    <Check size={16} /> {continent} Market Assessment
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Product and destination-specific sourcing, compliance and landed-cost feasibility. Country support is confirmed during assessment; this is not a claim of active operations throughout {continent}.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/20">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Supply Opportunities</span>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-6 text-foreground">Capability comes first.<br/>Commercial fit comes next.</h2>
            <p className="text-muted-foreground text-lg">Potential sourcing categories. Supplier availability and capability are assessed against your exact requirement.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Settings, title: 'Precision & Aerospace', desc: 'Access ISO-certified Tier-1 machining and fabrication partners with proven tight-tolerance capabilities.' },
              { icon: Wrench, title: 'Automotive Components', desc: 'Source high-quality OEM and aftermarket parts vetted for durability and international safety standards.' },
              { icon: Leaf, title: 'Agri-Tech & Food', desc: 'Connect with large-scale agricultural processors maintaining strict global hygiene and export certifications.' },
              { icon: Shirt, title: 'Textiles & Apparel', desc: 'Leverage deep textile heritage for both fast-fashion and specialized technical packaging.' },
              { icon: Beaker, title: 'Chemicals & Specialty', desc: 'Secure consistent, REACH-compliant raw materials from heavily audited and regulated facilities.' },
              { icon: Package, title: 'Machinery & Packaging', desc: 'Deploy heavy-duty industrial solutions and resilient packaging designed for complex global supply chains.' }
            ].map(item => (
              <div key={item.title} className="bg-card border border-border shadow-sm rounded-3xl p-8 hover:shadow-2xl hover:border-gold/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                 
                 <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none"></div>
                 
                 <div className="relative z-10 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                   <item.icon size={28} strokeWidth={1.5} />
                 </div>
                 <h3 className="relative z-10 text-xl font-medium text-foreground mb-4 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                 <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background border-b border-border/50">
        <div className="container-shell">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-gold"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Certification & quality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-6">Compliance before commitment.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We assess certification and compliance requirements against the specific product, application and destination market before supplier qualification.
            </p>
          </div>
          
          <div className="mb-16">
            <CertificationTypographyBadges />
          </div>

          <div className="relative p-10 md:p-14 rounded-[2rem] bg-white text-foreground overflow-hidden shadow-2xl border border-border">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-white to-white pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl">
              <h3 className="text-3xl md:text-4xl font-medium mb-4 text-balance leading-tight text-foreground">Could India create a procurement advantage for you?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Price is only one part of the equation. Freight, duties, quality, lead time, compliance and continuity all affect landed cost. Savings remain to be assessed until the full requirement and commercial terms are understood.
              </p>
              <Link href="/procurement" className="inline-flex items-center justify-center gap-3 bg-gold text-black px-8 h-14 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 group">
                Assess your sourcing opportunity <ArrowUpRight size={20} className="group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA title="Secure your commercial advantage." description="International sourcing requires capability, compliance, and control." linkTo="/procurement" linkText="Start a Procurement Request" />
    </>
  );
}

export const articles=[
  {slug:'growth-is-a-system',category:'Growth',title:'Growth is a system, not a channel.',summary:'Why isolated marketing activity rarely solves a connected commercial problem.',body:['When growth slows, increasing activity can feel like progress. But more traffic does not repair an unclear proposition, and more leads do not fix an inconsistent sales process.','Start by tracing the complete customer journey: positioning, demand, acquisition, conversion, sales, distribution and retention. Friction in any one stage changes the performance of the stages around it.','A useful diagnosis separates symptoms from constraints. The outcome is a clear set of priorities, with measures that connect each action to a commercial objective.']},
  {slug:'procurement-beyond-price',category:'Procurement',title:'The quote is not the landed cost.',summary:'A clearer framework for comparing an international sourcing opportunity.',body:['A supplier quotation is a starting point, not a complete procurement decision. Unit cost must be considered alongside freight, duties, inspection, payment terms, lead time and the consequences of failure.','Compare suppliers against the same specification, volume, destination and quality requirements. A lower price for a different requirement is not a like-for-like commercial advantage.','Keep potential savings as an open assessment until supplier qualification, compliance requirements and landed-cost assumptions have been verified.']},
  {slug:'trust-before-conversion',category:'D2C',title:'Trust comes before conversion.',summary:'Understanding the customer\'s hesitation is as important as generating their attention.',body:['Customers do not experience a conversion funnel as a dashboard. They encounter a product, form an impression and decide whether a claim is credible.','Look closely at the questions customers ask before buying. Product clarity, relevance, evidence and delivery expectations can matter more than another promotional incentive.','Acquisition, conversion and retention should reinforce one consistent promise. The strongest growth systems make that promise clear and deliver against it.']}
];

export function InsightsPage(){
  const [category,setCategory]=useState('All');
  return (
    <>
      
      <section className="relative min-h-[60vh] flex items-center bg-[#050A18] overflow-hidden py-32 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">Even Now Perspectives</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-white text-balance drop-shadow-2xl">
            Thinking that connects the dots.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto text-balance drop-shadow-md">
            Original frameworks and perspectives on business growth, customer decisions and international commercial opportunity.
          </p>
        </div>
      </section>

      <section className="section-space bg-secondary/20">
        <div className="container-shell">

          <div className="flex gap-3 flex-wrap mb-16 justify-center max-w-4xl mx-auto">
            {['All','Growth','Consumer Psychology','B2B','Market Access','Procurement','Sales','Strategy','D2C','International Trade'].map(x=>(
              <button 
                key={x} 
                onClick={()=>setCategory(x)} 
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${category === x ? 'bg-gold text-black shadow-xl shadow-gold/20 scale-105' : 'bg-secondary/40 border border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
                aria-pressed={category===x}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(a=>category==='All'||category===a.category).map(a=>(
              <article className="group flex flex-col bg-card border border-border rounded-[2rem] overflow-hidden hover:border-gold/40 hover:shadow-[0_20px_40px_-15px_rgba(193,155,62,0.15)] hover:-translate-y-2 transition-all duration-500" key={a.slug}>
                <Link href={`/insights/${a.slug}`} className="block relative overflow-hidden bg-[#050A18] p-8 min-h-[240px] flex flex-col justify-between">
                  
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none origin-bottom-left"></div>
                  
                  <div className="relative z-10 flex justify-between items-start mb-12">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                       <span className="w-4 h-[1px] bg-gold"></span>
                       {a.category} PERSPECTIVE
                     </span>
                     <span className="text-[10px] font-mono text-white/30 tracking-widest">EVEN NOW</span>
                  </div>
                  
                  <h3 className="relative z-10 text-2xl md:text-3xl font-medium text-white group-hover:text-gold transition-colors duration-300 leading-[1.1] text-balance">
                    {a.title}
                  </h3>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow bg-card">
                  <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">{a.summary}</p>
                  <Link href={`/insights/${a.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-gold transition-colors mt-auto">
                    Read Insight <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Apply these perspectives to your business." description="Identify what's holding your growth back today." linkTo="/audit" linkText="Request a Growth Audit" />
    </>
  );
}

export function ArticlePage({slug}:{slug:string}){
  const a=articles.find(a=>a.slug===slug);
  return (
    <>
      {a ? (
        <>
          
          <section className="relative bg-[#050A18] overflow-hidden pt-40 pb-24 border-b border-white/10 mt-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-[#050A18] to-[#050A18] pointer-events-none"></div>
            <div className="container-shell relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-gold">{a.category}</span>
                <span className="text-white/40 mx-2">·</span>
                <span className="text-xs font-medium uppercase tracking-widest text-white/70">Even Now Perspective</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-white text-balance">
                {a.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light text-balance border-l-2 border-gold/40 pl-6">
                {a.summary}
              </p>
            </div>
          </section>

          <article className="container-shell section-space bg-background">
            <div className="max-w-3xl mx-auto">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border mb-16 h-[400px] md:h-[500px]">
                <img src={leadership.src} width={1920} height={1024} alt="Executive business strategy and leadership" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:text-lg">
                {a.body.map((p, idx) => (
                  <p key={p} className={idx === 0 ? "text-xl text-foreground font-medium mb-10" : "mb-8"}>
                    {p}
                  </p>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-border">
                <Link href="/insights" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground hover:text-gold transition-colors">
                  <ArrowLeft size={16}/> Back to all insights
                </Link>
              </div>
            </div>
          </article>

          <FinalCTA title="Ready to move beyond the theory?" description="Bring connected commercial thinking to your specific challenge." linkTo="/contact" linkText="Start a Conversation"/>
        </>
      ) : (
        <section className="relative min-h-[60vh] flex items-center bg-[#050A18] overflow-hidden">
          <div className="container-shell text-center">
             <h1 className="text-5xl font-medium text-white mb-6">This insight is not available.</h1>
             <p className="text-xl text-gray-400 mb-10">Return to our current perspectives.</p>
             <Link href="/insights" className="inline-flex items-center justify-center gap-3 bg-gold text-black px-8 h-14 rounded-full font-bold tracking-wide hover:-translate-y-1 transition-all duration-300">
               View Insights <ArrowRight size={18}/>
             </Link>
          </div>
        </section>
      )}
    </>
  );
}

export function LegalPage({kind}:{kind:'privacy'|'terms'}){
  const isPrivacy = kind === 'privacy';
  return (
    <>
      
      <section className="relative pt-32 pb-20 bg-[#050A18] overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            {isPrivacy 
              ? 'Our commitment to protecting your privacy and managing your data responsibly.'
              : 'The terms and conditions governing your use of our website and services.'}
          </p>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell">
          <div className="flex flex-col md:flex-row gap-16 items-start">

            <aside className="w-full md:w-64 shrink-0 md:sticky md:top-32 flex flex-col gap-2">
              <Link href="/privacy" className={`px-5 py-4 rounded-xl text-sm font-medium transition-all ${isPrivacy ? 'bg-foreground text-background shadow-lg border border-border/50' : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'}`}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={`px-5 py-4 rounded-xl text-sm font-medium transition-all ${!isPrivacy ? 'bg-foreground text-background shadow-lg border border-border/50' : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'}`}>
                Terms of Use
              </Link>
            </aside>

            <div className="flex-1 max-w-4xl text-muted-foreground leading-relaxed">
              {isPrivacy ? (
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">1. Information We Collect</h2>
                    <p className="mb-4">As a business growth and procurement consultancy, Even Now collects information necessary to assess your commercial challenges. This includes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong className="text-foreground">Business Information:</strong> Company name, industry, revenue ranges, and market presence.</li>
                      <li><strong className="text-foreground">Contact Information:</strong> Names, corporate email addresses, and phone numbers.</li>
                      <li><strong className="text-foreground">Operational Data:</strong> Sourcing requirements, RFQs, supply chain bottlenecks, and growth audit responses submitted through our platform.</li>
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">2. How We Use Your Data</h2>
                    <p className="mb-4">Your data is strictly used to deliver and improve our consulting services. Specifically, we use it to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Conduct Business Growth Audits and provide indicative strategic results.</li>
                      <li>Assess the commercial viability of Indian sourcing and procurement requests.</li>
                      <li>Communicate with you regarding your enquiries and project scoping.</li>
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">3. Confidentiality and NDAs</h2>
                    <p className="mb-4">
                      We understand that commercial strategy and supply chain data are highly sensitive. Even Now operates under strict confidentiality. We do not sell, rent, or trade your business data to third-party marketers. Information is only shared with verified manufacturing partners in India when explicitly authorized by you during a procurement mandate, typically under a Non-Disclosure Agreement (NDA).
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">4. Data Security</h2>
                    <p className="mb-4">
                      We implement robust, industry-standard security measures to protect your operational data against unauthorized access, alteration, or disclosure. All data submitted through our Growth Audit and Procurement tools is encrypted in transit.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">5. Your Rights</h2>
                    <p className="mb-4">
                      You retain full rights to your personal and corporate data. You may request access to, modification, or deletion of the data we hold about your business at any time by contacting our commercial team.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">1. Scope of Services</h2>
                    <p className="mb-4">
                      Even Now provides strategic consulting, D2C growth advisory, and international procurement facilitation. The content, audits, and tools provided on this website are for informational and preliminary assessment purposes only and do not constitute a binding commercial mandate.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">2. Assessment, Not a Guarantee</h2>
                    <p className="mb-4">
                      Our frameworks and growth audits are designed to highlight commercial bottlenecks. However, website content does not guarantee specific financial outcomes, supplier availability, landed cost savings, or market success. All commercial engagements, fees, and liabilities will be governed by a separate, mutually signed Master Services Agreement (MSA).
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">3. Intellectual Property</h2>
                    <p className="mb-4">
                      All methodologies, diagnostic tools (including the Business Growth Audit), articles, frameworks, and design assets on this website are the exclusive intellectual property of Even Now. They may not be reproduced, distributed, or commercially exploited without our explicit written consent.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-500">
                    <h2 className="text-2xl font-medium text-foreground mb-4">4. Client Responsibilities</h2>
                    <p className="mb-4">
                      When submitting procurement requests or growth audits, you agree to provide accurate and authorized information. Even Now is not liable for assessments made based on incomplete or inaccurate data provided by the user.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-16 pt-10 border-t border-border">
                <p className="text-sm text-muted-foreground mb-8">
                  For further clarification on our {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}, please initiate a conversation with our team.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-3 bg-gold text-black px-8 h-14 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_30px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Contact Our Team</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"/>
                  <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

