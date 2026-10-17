'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X, ChartNoAxesCombined, Globe2, ChevronRight, Plus, Minus, Sun, Moon, Target, TrendingUp, Compass, Filter, Briefcase, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import logistics from '@/assets/logistics.jpg';
import port from '@/assets/commerce-port.jpg';
import factory from '@/assets/factory.jpg';
import leadership from '@/assets/leadership.jpg';
import { diagnosticAreas, method } from '@/lib/even-now';
import {
  HeroNetworkAnimation,
  TwoEnginesAbstractFunnel,
  TwoEnginesFactoryVisual,
  SystemProblemLeakDiagram,
  GlobalMapSVG,
  BuyerPrioritiesGrid
} from './visuals';
export const links = [{to:'/growth',label:'Growth'},{to:'/global-b2b',label:'Global B2B'},{to:'/approach',label:'Approach'},{to:'/insights',label:'Insights'}] as const;

let initialLoadDone = false;
export function InitialLoader() {
  const [state, setState] = useState<'loading' | 'exiting' | 'done'>(initialLoadDone ? 'done' : 'loading');

  useEffect(() => {
    if (initialLoadDone) return;
    document.body.style.overflow = 'hidden';
    const t1 = setTimeout(() => { setState('exiting'); initialLoadDone = true; }, 1500);
    const t2 = setTimeout(() => { setState('done'); document.body.style.overflow = ''; }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.style.overflow = ''; };
  }, []);

  if (state === 'done') return null;

  return (
    <div className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${state === 'exiting' ? 'opacity-0 -translate-y-12 pointer-events-none blur-sm' : 'opacity-100'}`}>
      <style>{`
        @keyframes trackingExpand {
          0% { letter-spacing: -0.1em; opacity: 0; filter: blur(12px); transform: scale(0.9); }
          100% { letter-spacing: 0.15em; opacity: 1; filter: blur(0px); transform: scale(1); }
        }
        @keyframes lineSweep { 0% { transform: translateX(-100%); width: 30%; } 50% { width: 70%; } 100% { transform: translateX(300%); width: 30%; } }
      `}</style>
      <div className="flex flex-col items-center gap-4">
        <span 
          className="font-sans text-2xl md:text-3xl font-bold uppercase text-foreground flex items-center"
          style={{ animation: 'trackingExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          EVEN<span className="text-gold ml-1.5">NOW</span>
        </span>
        <div className="w-32 h-[1px] bg-white/5 overflow-hidden relative rounded-full">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-gold to-transparent" style={{ animation: 'lineSweep 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}></div>
        </div>
      </div>
    </div>
  );
}
export function Brand() {
  return (
    <span className="font-sans font-bold tracking-[0.15em] text-xl uppercase flex items-center">
      EVEN<span className="text-gold ml-1">NOW</span>
    </span>
  );
}
export function Site({children}:{children:ReactNode}) {
 const [open,setOpen]=useState(false); const pathname=usePathname();
 const [isDark,setIsDark]=useState(true);
 useEffect(()=>{ setIsDark(document.documentElement.classList.contains('dark')); }, []);
 useEffect(()=>setOpen(false),[pathname]);
 const toggleTheme=()=>{const next=!isDark;setIsDark(next);document.documentElement.classList.toggle('dark',next);};
 
 const [scrolled, setScrolled] = useState(false);
 useEffect(() => {
   const handleScroll = () => setScrolled(window.scrollY > 20);
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return <><InitialLoader /><header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-background shadow-md border-border py-3' : 'bg-background border-transparent py-5'}`}><div className="container-shell header-inner flex items-center justify-between"><Link href="/" aria-label="Even Now home" className="hover:scale-105 transition-transform"><Brand/></Link><nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 bg-secondary/60 backdrop-blur-md border border-border/50 rounded-full px-2 py-1.5 shadow-sm">{links.map(l=><Link key={l.to} href={l.to} className={`text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${pathname===l.to?'bg-background shadow-md text-foreground':'text-muted-foreground hover:text-foreground hover:bg-secondary'}`}>{l.label}</Link>)}</nav><div className="flex items-center gap-4"><Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors">{isDark?<Sun size={18}/>:<Moon size={18}/>}</Button><div className="hidden lg:flex gap-3"><Button asChild variant="gold" className="rounded-full px-7 h-11 font-semibold shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5 transition-all duration-300"><Link href="/audit">Request an Audit <ArrowUpRight className="ml-1" size={16}/></Link></Button></div><Button variant="ghost" size="icon" className="mobile-menu lg:hidden rounded-full bg-secondary/50" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav aria-label="Mobile navigation" className="mobile-nav-panel absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2">{links.map(l=><Link key={l.to} href={l.to} className="text-lg font-medium">{l.label}</Link>)}<Link href="/contact" className="text-lg font-medium">Contact</Link><div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border"><Button asChild variant="gold" className="w-full justify-center rounded-full h-12"><Link href="/audit">Request an Audit <ArrowUpRight/></Link></Button></div></nav>}</div></header><main className="pt-[88px]">{children}</main><Footer/><div className="sticky-mobile"><Button asChild variant="outline" className="flex-1 rounded-full"><Link href="/procurement">Procurement</Link></Button><Button asChild variant="gold" className="flex-1 rounded-full shadow-lg"><Link href="/audit">Audit <ArrowUpRight/></Link></Button></div></>
}
export function Footer() {
  return (
    <footer className="bg-[#050A18] text-white pt-24 pb-8 border-t border-border/50 relative overflow-hidden mt-20">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-shell relative z-10">
        {/* Founder's Motto Closing Line */}
        <div className="pb-14 mb-16 border-b border-white/10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">The Even Now Motto</span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>
          <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic text-balance">
            “Whatever the bottlenecks your business is facing, Even Now, we can find a way forward. <span className="text-gold font-normal not-italic">We can fix. We can grow. We can build. We can scale.</span>”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300 origin-left mb-8 text-white">
              <Brand />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10 text-balance">
              Connecting strategy, commercial systems and global opportunity. We diagnose growth leaks and build engines that scale.
            </p>
            
            <Link href="/contact" className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/50 px-8 h-14 rounded-full font-bold tracking-wide transition-all duration-300">
              Let's start a conversation
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold transition-all duration-300" size={18}/>
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-2">Our Expertise</h4>
              {[
                { to: '/growth', label: 'Business Growth' },
                { to: '/global-b2b', label: 'Global B2B' },
                { to: '/d2c', label: 'D2C Growth' },
                { to: '/procurement', label: 'Procurement' },
              ].map(link => (
                <Link key={link.to} href={link.to} className="text-gray-400 hover:text-white text-sm font-medium transition-colors group flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-2">Company</h4>
              {[
                { to: '/approach', label: 'Our Approach' },
                { to: '/insights', label: 'Insights & Data' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link key={link.to} href={link.to} className="text-gray-400 hover:text-white text-sm font-medium transition-colors group flex items-center gap-2">
                  <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold mb-2">Connect</h4>
              <a href="https://www.linkedin.com/company/even-now/home/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm font-medium transition-colors group flex items-center gap-2">
                <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors group flex items-center gap-2">
                <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300"></span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Twitter / X</span>
              </a>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Even Now. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function Eyebrow({children,className=''}:{children:ReactNode,className?:string}){return <div className={`eyebrow ${className}`}>{children}</div>}
export function Reveal({children,className='',delay=0}:{children:ReactNode,className?:string,delay?:number}) {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return; const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){el.animate([{opacity:0,transform:'translateY(30px) scale(0.98)',filter:'blur(8px)'},{opacity:1,transform:'translateY(0) scale(1)',filter:'blur(0px)'}],{duration:900,delay:delay,easing:'cubic-bezier(0.16, 1, 0.3, 1)',fill:'both'});observer.unobserve(el)}})},{threshold:0.12});observer.observe(el);return()=>observer.disconnect()},[delay]);
 return <div ref={ref} className={className}>{children}</div>
}
export function Intro({tag,title,description,children}:{tag:string,title:string,description:string,children?:ReactNode}){return <section className="page-intro"><div className="container-shell reveal max-w-4xl"><Eyebrow>{tag}</Eyebrow><h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-balance">{title}</h1><p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">{description}</p>{children}</div></section>}
export function FinalCTA({
  title = "Your next growth opportunity\nmay already exist inside your business.",
  description = "The question is whether you know where to find it.",
  linkTo = "/audit",
  linkText = "Request a Growth Audit"
}: {
  title?: string;
  description?: string;
  linkTo?: string;
  linkText?: string;
}) {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background pointer-events-none"></div>
      <div className="container-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-4 mb-6 justify-center md:justify-start">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold">The next move</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15] whitespace-pre-line mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="shrink-0 w-full md:w-auto">
          <Link href={linkTo} className="group relative flex items-center justify-center gap-3 bg-gold text-black px-10 h-16 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_40px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full md:w-auto">
            <span className="relative z-10">{linkText}</span>
            <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Method(){
 const [selected,setSelected]=useState(0);
 return (
  <section className="section-space">
   <div className="container-shell">
    <Eyebrow>Our approach</Eyebrow>
    <h2 className="section-heading">Clarity before action. Systems before scale.</h2>
    <div className="mt-16 bg-secondary/20 rounded-2xl border border-border p-8 md:p-12 transition-all duration-300 hover:bg-secondary/30 hover:border-gold/30">
     <div className="flex overflow-x-auto hide-scrollbar border-b border-border gap-6 md:gap-12 pb-6">
      {method.map(([name],i)=>(
       <button key={name} className="flex flex-col items-start gap-3 group text-left min-w-[120px] pb-1 relative" onClick={()=>setSelected(i)} aria-expanded={selected===i}>
        <span className={`text-xs font-semibold tracking-widest transition-colors ${selected===i?'text-gold':'text-muted-foreground group-hover:text-foreground'}`}>0{i+1}</span>
        <h3 className={`text-lg transition-colors whitespace-nowrap ${selected===i?'text-foreground':'text-muted-foreground group-hover:text-foreground'}`}>{name}</h3>
        {selected===i && <span className="absolute bottom-[-25px] left-0 w-full h-[2px] bg-gold rounded-t-full" />}
       </button>
      ))}
     </div>
     <div className="mt-10 md:mt-16 min-h-[140px] flex items-center">
      {method.map(([name,desc],i)=>selected===i&&(
       <div key={name} className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-3xl">
        <h3 className="text-3xl md:text-4xl font-medium mb-4">{name}</h3>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{desc}</p>
       </div>
      ))}
     </div>
    </div>
    <Link href="/approach" className="text-cta mt-12 inline-flex">Explore our approach <ArrowRight size={16}/></Link>
   </div>
  </section>
 );
}
export function Diagnostics() {
  const [active, setActive] = useState<number>(0);
  const icons = [Target, TrendingUp, Compass, Filter, Briefcase, Repeat];

  return (
    <section className="dark-band section-space relative overflow-hidden bg-[#070D1E] text-on-dark border-y border-white/10">
      <div className="container-shell">
        <div className="flex justify-between items-end gap-8 flex-wrap mb-14">
          <div>
            <Eyebrow>Find the friction</Eyebrow>
            <h2 className="section-heading text-white">Growth rarely breaks<br/>in one place.</h2>
          </div>
          <p className="section-intro max-w-md text-dark-muted">
            We don't start with tactics. We start with diagnosis - evaluating the 6 dimensions that determine your commercial performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticAreas.map(([title, desc], i) => {
            const Icon = icons[i] ?? Target;
            const isSelected = active === i;
            return (
              <button
                key={title}
                type="button"
                onClick={() => setActive(i)}
                className={`text-left p-7 rounded-xl border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'border-gold bg-[#0C152F] shadow-[0_0_30px_rgba(193,155,62,0.2)] scale-[1.01]'
                    : 'border-white/10 bg-white/5 hover:border-gold/40 hover:bg-white/[0.07]'
                }`}
              >
                {isSelected && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-l-xl" />
                )}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`p-2.5 rounded-lg border transition-colors ${
                      isSelected 
                        ? 'bg-gold/20 text-gold border-gold/40' 
                        : 'bg-white/5 text-dark-muted border-white/10 group-hover:text-gold group-hover:border-gold/30'
                    }`}>
                      <Icon size={20} />
                    </span>
                    <span className={`text-xs font-mono font-bold tracking-wider ${
                      isSelected ? 'text-gold' : 'text-dark-muted'
                    }`}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className={`text-xl font-medium tracking-tight mb-3 transition-colors ${
                    isSelected ? 'text-white' : 'text-on-dark group-hover:text-white'
                  }`}>
                    {title}
                  </h3>
                  <p className="text-xs text-dark-muted leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest">
                  <span className={isSelected ? 'text-gold font-semibold' : 'text-dark-muted'}>
                    {isSelected ? 'Active Focus' : 'Diagnostic Pillar'}
                  </span>
                  <ArrowUpRight size={14} className={`transition-transform duration-300 ${
                    isSelected ? 'text-gold translate-x-0.5 -translate-y-0.5' : 'text-dark-muted opacity-0 group-hover:opacity-100'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-6">
          <div className="text-xs text-dark-muted flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"/>
            Select any dimension to focus your commercial audit
          </div>
          <Link href="/audit" className="group relative flex items-center justify-center gap-3 bg-gold text-black px-8 h-12 md:h-14 rounded-full font-bold tracking-wide shadow-lg shadow-gold/20 hover:shadow-[0_0_30px_rgba(193,155,62,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto">
            <span className="relative z-10">Request a Growth Audit</span>
            <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={18}/>
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}


