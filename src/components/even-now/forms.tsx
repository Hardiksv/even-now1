'use client';
import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Upload, ShieldCheck, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Site, Intro, Eyebrow } from './site';
import { diagnose } from '@/lib/even-now';
import procurementLogistics from '@/assets/procurement-logistics.jpg';
import procurementAudit from '@/assets/procurement-audit.jpg';
import { ProcurementTenStepTimeline, AuditScoreVisual } from './visuals';

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function Field({label,name,type='text',required=false,wide=false,options,placeholder,datalist}:{label:string,name:string,type?:string,required?:boolean,wide?:boolean,options?:string[],placeholder?:string,datalist?:string[]}){
  const [val, setVal] = useState('');
  const [focused, setFocused] = useState(false);
  
  const filtered = datalist ? datalist.filter(d => d.toLowerCase().includes(val.toLowerCase())) : [];

  return (
    <div className={`field relative ${wide?'sm:col-span-2':''}`}>
      <label className="block mb-2 text-sm font-medium">
        {label}{required?' *':''}
      </label>
      {options ? (
        <select name={name} required={required} defaultValue="" className="w-full">
          <option value="" disabled>Select an option</option>
          {options.map(x=><option key={x}>{x}</option>)}
        </select>
      ) : type==='textarea' ? (
        <textarea name={name} required={required} placeholder={placeholder} className="w-full"/>
      ) : datalist ? (
        <div className="relative">
          <input 
            name={name} 
            type={type} 
            required={required} 
            placeholder={placeholder} 
            autoComplete="off"
            value={val}
            className="w-full pr-10"
            onChange={e => { setVal(e.target.value); setFocused(true); }}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(()=>setFocused(false), 200)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 z-10"
            onMouseDown={(e) => {
              e.preventDefault();
              setFocused(!focused);
            }}
          >
            <ChevronDown size={18} className={`transition-transform duration-200 ${focused ? 'rotate-180' : ''}`} />
          </button>
          {focused && filtered.length > 0 && (
            <div className="absolute top-full left-0 w-full max-h-64 overflow-y-auto bg-card border border-border rounded-xl mt-2 z-50 shadow-xl p-2">
              {filtered.map(c => (
                <div 
                  key={c} 
                  className="px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-foreground cursor-pointer rounded-lg transition-colors font-medium"
                  onClick={() => {
                    setVal(c);
                    setFocused(false);
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className="w-full" />
      )}
    </div>
  );
}
const stages=['Business information','Business stage','Primary challenge','Current growth','Business problem','Your goal','Timeline','Diagnostic result'];
const options=[[],['Established and growing','Growth has plateaued','Scaling into new markets','Launching an existing product'],['Unclear positioning','Not enough demand','Low conversion','Inconsistent sales','Low repeat purchases','New market entry'],[],[],[],['Within 30 days','Within 90 days','In 3–6 months','Exploring options']];

export function AuditPage(){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [selected,setSelected]=useState('');
  const [complete,setComplete]=useState(false);

  const next=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(e.currentTarget).entries());
    setAnswers(old=>({...old,...Object.fromEntries(Object.entries(data).map(([k,v])=>[k,String(v)])),...(selected?{[stages[step]??'']:selected}:{})}));
    if(step===6)setComplete(true);
    setSelected('');
    setStep(Math.min(step+1,7));
  };
  
  const result=diagnose(answers['Primary challenge']??'');

  return (
    <Site>
      {/* Cinematic Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-[#050A18] overflow-hidden pt-32 pb-16 mt-10 border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">Business Growth Audit</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight mb-6 text-white">
            Where is your growth leaking?
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Answer a few questions about your business and we’ll identify the areas that deserve deeper attention before you commit to new activity.
          </p>
        </div>
      </section>

      <section className="section-space bg-secondary/10">
        <div className="container-shell">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Sticky Sidebar (Progress) */}
            <aside className="lg:w-1/3 shrink-0">
              <div className="sticky top-32 p-8 rounded-[2rem] bg-card text-foreground border border-border shadow-xl">
                <h3 className="text-xl font-bold tracking-tight mb-2 text-gold">A clearer starting point</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">A focused assessment of your commercial challenges and priorities.</p>
                
                <ol className="space-y-6 relative before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-border">
                  {stages.map((s,i)=>(
                    <li key={s} className={`relative flex items-center gap-4 transition-all duration-300 ${i===step?'text-foreground font-semibold scale-105':'text-muted-foreground'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] z-10 font-bold transition-all duration-500 ${
                        i < step 
                          ? 'bg-gold text-black shadow-[0_0_15px_rgba(193,155,62,0.4)]' 
                          : i === step 
                            ? 'bg-foreground text-background border-2 border-gold shadow-[0_0_15px_rgba(193,155,62,0.2)]' 
                            : 'bg-card border-2 border-border text-muted-foreground'
                      }`}>
                        {i < step ? <Check size={12} strokeWidth={3} /> : i + 1}
                      </div>
                      <span className="tracking-wide text-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
            
            {/* Form & Result Container */}
            <div className="lg:w-2/3">
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border min-h-[600px] flex flex-col justify-center relative overflow-hidden">
                
                {complete ? (
                  <div className="animate-in fade-in zoom-in-95 duration-700">
                    <div className="inline-flex items-center gap-3 mb-6 bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gold">Indicative Result</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6">Start with <span className="text-gold italic">{result.primary.toLowerCase()}</span>.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                      Your responses suggest a closer look at <strong className="text-foreground">{result.primary.toLowerCase()}</strong>, followed by <strong className="text-foreground">{result.secondary.toLowerCase()}</strong>. Increasing activity alone may not address the underlying constraint.
                    </p>
                    
                    <div className="mb-12">
                      <AuditScoreVisual primary={result.primary} secondary={result.secondary} risk={result.risk} />
                    </div>

                    <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                      <h3 className="text-xl font-medium mb-3">Recommended next step</h3>
                      <p className="text-muted-foreground leading-relaxed mb-8">Review your customer journey and commercial measures with a focused growth diagnosis.</p>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/contact?need=Growth%20Audit" className="group relative flex items-center justify-center gap-3 bg-foreground text-background px-8 h-14 rounded-full font-bold tracking-wide hover:bg-gold hover:text-black transition-all duration-300 w-full sm:w-auto">
                          <span>Discuss a deeper diagnosis</span>
                          <ArrowUpRight className="group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={18}/>
                        </Link>
                        <button type="button" onClick={()=>{setComplete(false);setStep(0);setAnswers({});setSelected('')}} className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-6 py-4">
                          Start again
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={next} key={step} className="animate-in fade-in slide-in-from-right-8 duration-500 h-full flex flex-col">
                    <div className="mb-10">
                      <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">Step 0{step+1}</span>
                      <h2 className="text-3xl md:text-4xl font-medium text-balance">{stages[step]}</h2>
                    </div>
                    
                    <div className="flex-grow">
                      {step===0 && (
                        <div className="grid sm:grid-cols-2 gap-6">
                          <Field label="Full name" name="name" required/>
                          <Field label="Work email" name="email" type="email" required/>
                          <Field label="Company" name="company" required/>
                          <Field label="Website" name="website" type="url" placeholder="https://"/>
                          <Field label="Role" name="role"/>
                          <Field label="Industry" name="industry" required/>
                          <Field label="Country" name="country" required datalist={COUNTRIES}/>
                          <Field label="Phone / WhatsApp" name="phone" type="tel"/>
                        </div>
                      )}
                      
                      {[1,2,6].includes(step) && (
                        <div className="grid gap-4">
                          {options[step]?.map(x=>(
                            <button 
                              key={x} 
                              type="button" 
                              onClick={()=>setSelected(x)} 
                              className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left font-medium text-lg ${selected===x?'bg-gold/10 border-gold text-gold shadow-md shadow-gold/10 scale-[1.02]':'bg-card border-border hover:border-gold/50 hover:bg-secondary/20'}`}
                              aria-pressed={selected===x}
                            >
                              {x}
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selected===x?'bg-gold text-black':'bg-secondary text-muted-foreground'}`}>
                                {selected===x?<Check size={14} strokeWidth={3}/>:<ArrowRight size={14}/>}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {step===3 && (
                        <div className="grid sm:grid-cols-2 gap-6">
                          <Field label="Annual revenue range" name="revenue" options={['Prefer not to say','Early revenue','Established revenue','Scaling revenue']}/>
                          <Field label="Marketing spend range" name="spend" options={['Prefer not to say','Limited investment','Regular investment','Significant investment']}/>
                          <Field label="Marketing team size" name="marketingTeam" type="number"/>
                          <Field label="Sales team size" name="salesTeam" type="number"/>
                          <Field label="Acquisition channels" name="channels" placeholder="Search, referrals, outbound…" wide required/>
                          <Field label="Primary market" name="market" required/>
                          <Field label="Target market" name="targetMarket"/>
                        </div>
                      )}
                      
                      {step===4 && (
                        <div className="h-full">
                           <Field label="What business problem needs attention in the next 90 days?" name="problem" type="textarea" required/>
                        </div>
                      )}
                      {step===5 && (
                        <div className="h-full">
                           <Field label="What would meaningful progress look like in 6–12 months?" name="goal" type="textarea" required/>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                      <button type="button" onClick={()=>{setStep(Math.max(0,step-1));setSelected(answers[stages[step-1]??'']??'')}} disabled={step===0} className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors ${step===0?'text-muted-foreground/30 cursor-not-allowed':'text-muted-foreground hover:text-foreground'}`}>
                        <ArrowLeft size={16}/> Back
                      </button>
                      
                      <button type="submit" disabled={[1,2,6].includes(step)&&!selected} className={`group inline-flex items-center gap-3 px-8 h-12 rounded-full font-bold tracking-wide transition-all duration-300 ${([1,2,6].includes(step)&&!selected)?'bg-secondary text-muted-foreground cursor-not-allowed':'bg-gold text-black hover:shadow-[0_0_20px_rgba(193,155,62,0.4)] hover:-translate-y-1'}`}>
                        {step===6?'View Diagnostic Result':'Continue'} 
                        <ArrowRight size={18} className={([1,2,6].includes(step)&&!selected)?'':"group-hover:translate-x-1 transition-transform"}/>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Site>
  );
}

export function ProcurementPage(){
  const router = useRouter();
  const [step,setStep]=useState(0);
  const [file,setFile]=useState('');
  const [error,setError]=useState('');
  const [formValues,setFormValues]=useState<Record<string,FormDataEntryValue>>({});

  function advance(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setFormValues({...formValues,...Object.fromEntries(new FormData(e.currentTarget).entries())});
    if(step<2)setStep(step+1);
    else router.push({to:'/thank-you',search:{type:'procurement'}});
  }

  return (
    <Site>
      {/* Cinematic Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-[#050A18] overflow-hidden pt-32 pb-16 mt-10 border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">Indian Sourcing & Procurement</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight mb-6 text-white text-balance">
            Start a Procurement Request.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Tell us what you need. We’ll assess whether India can provide a commercially viable supply opportunity.
          </p>
        </div>
      </section>

      <section className="section-space bg-secondary/10">
        <div className="container-shell">
          <div className="mb-16">
            <ProcurementTenStepTimeline />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3 shrink-0">
              <div className="sticky top-32 p-8 rounded-[2rem] bg-card text-foreground border border-border shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full"></div>
                <h3 className="text-xl font-bold tracking-tight mb-3 text-gold relative z-10">Requirement first</h3>
                <h2 className="text-3xl font-medium mb-4 relative z-10 leading-tight">A better assessment starts with better information.</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 relative z-10">Specification, quantity, compliance and destination are essential to understanding commercial fit.</p>
                
                <div className="relative rounded-2xl overflow-hidden mb-6 group">
                  <img src={procurementAudit} width={500} height={400} loading="lazy" alt="Corporate B2B consultant reviewing procurement blueprints and technical supply chain data" className="w-full h-64 object-cover object-[center_25%] transform group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gold/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>

                <div className="flex gap-4 items-start bg-secondary/30 p-4 rounded-xl border border-border shadow-sm">
                  <ShieldCheck size={24} className="shrink-0 text-gold"/>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">No savings or supplier availability is guaranteed. Landed-cost and certification feasibility remain to be assessed.</p>
                </div>
              </div>
            </aside>
            
            {/* Form Panel */}
            <div className="lg:w-2/3">
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border min-h-[600px] flex flex-col justify-center overflow-hidden">
                <form onSubmit={advance} className="h-full flex flex-col">
                  
                  <div className="mb-10">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gold mb-3">
                      <span>Step 0{step+1} / 03</span>
                      <span>{['Company details','Product requirements','Commercial requirements'][step]}</span>
                    </div>
                    <div className="flex gap-2 mb-8">
                      {[0,1,2].map(x=><span key={x} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${x<=step?'bg-gold':'bg-secondary'}`}/>)}
                    </div>
                  </div>
                  
                  <div key={step} className="animate-in fade-in slide-in-from-right-8 duration-500 flex-grow">
                    <h2 className="text-3xl md:text-4xl font-medium text-balance mb-8">{['Tell us about your company.','What do you need to source?','Define the commercial fit.'][step]}</h2>
                    
                    {step===0 && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Company" name="company" required/>
                        <Field label="Country" name="country" required datalist={COUNTRIES}/>
                        <Field label="Full name" name="name" required/>
                        <Field label="Position" name="position" required/>
                        <Field label="Corporate email" name="email" type="email" required/>
                        <Field label="Phone" name="phone" type="tel" required/>
                        <Field label="Website" name="website" type="url" wide/>
                      </div>
                    )}
                    
                    {step===1 && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Product / component" name="product" required wide/>
                        <Field label="Technical specification" name="specification" type="textarea" required wide/>
                        <Field label="Quantity and unit" name="quantity" required placeholder="e.g. 10,000 units"/>
                        <Field label="Annual requirement" name="annual"/>
                        <Field label="Required certification" name="certification" required placeholder="Standards, or needs assessment" wide/>
                        <Field label="Delivery destination" name="destination" required/>
                        <Field label="Required delivery date" name="date" type="date" required/>
                      </div>
                    )}
                    
                    {step===2 && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Current sourcing country" name="sourceCountry" datalist={COUNTRIES}/>
                        <Field label="Current supplier problem" name="supplierProblem"/>
                        <Field label="Current supplier price (include currency)" name="currentPrice"/>
                        <Field label="Target price (include currency)" name="targetPrice"/>
                        <Field label="Additional requirements" name="additional" type="textarea" wide/>
                        
                        <div className="sm:col-span-2 mt-4">
                          <label className="block text-sm font-medium mb-3">RFQ / specification document (optional)</label>
                          <label className="group flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl p-8 hover:border-gold hover:bg-gold/5 transition-colors cursor-pointer relative">
                            <Upload className="mb-3 text-muted-foreground group-hover:text-gold transition-colors" size={28}/>
                            <span className="text-sm font-medium mb-1">{file || 'Click to select a document'}</span>
                            <span className="text-xs text-muted-foreground">PDF, DOCX or XLSX · up to 10 MB</span>
                            <input type="file" accept=".pdf,.docx,.xlsx" className="absolute inset-0 opacity-0 cursor-pointer" onChange={e=>{const f=e.target.files?.[0];if(!f)return;if(f.size>10*1024*1024||!['pdf','docx','xlsx'].includes(f.name.split('.').pop()?.toLowerCase()??'')){setError('Please select a PDF, DOCX or XLSX file smaller than 10 MB.');e.target.value='';setFile('');return}setError('');setFile(f.name)}}/>
                          </label>
                          {error && <span role="alert" className="text-destructive text-sm mt-2 flex items-center gap-2"><ArrowRight size={14}/> {error}</span>}
                        </div>
                        
                        <label className="flex items-center gap-4 sm:col-span-2 mt-4 p-4 rounded-xl border border-border bg-secondary/20 hover:border-gold/30 transition-colors cursor-pointer group">
                          <div className="relative flex items-center justify-center w-5 h-5 rounded border border-muted-foreground group-hover:border-gold transition-colors">
                            <input type="checkbox" name="nda" className="opacity-0 absolute inset-0 cursor-pointer peer"/>
                            <Check size={14} strokeWidth={4} className="opacity-0 peer-checked:opacity-100 peer-checked:text-gold transition-opacity"/>
                          </div>
                          <span className="text-sm font-medium">NDA required before sharing further specifications</span>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                     <div></div>
                     
                     <div className="flex gap-4">
                       <button type="button" onClick={()=>setStep(step-1)} disabled={step===0} className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-colors ${step===0?'text-muted-foreground/30 cursor-not-allowed':'text-muted-foreground hover:text-foreground'}`}>
                         <ArrowLeft size={16}/> Back
                       </button>
                       <button type="submit" disabled={!!error} className={`group inline-flex items-center gap-3 px-8 h-12 rounded-full font-bold tracking-wide transition-all duration-300 ${error?'bg-secondary text-muted-foreground cursor-not-allowed':'bg-gold text-black hover:shadow-[0_0_20px_rgba(193,155,62,0.4)] hover:-translate-y-1'}`}>
                         {step===2?'Submit Request':'Continue'} 
                         <ArrowRight size={18} className={error?'':"group-hover:translate-x-1 transition-transform"}/>
                       </button>
                     </div>
                  </div>

                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Site>
  );
}

export function ContactPage({need=''}:{need?:string}){
  const router = useRouter();
  return (
    <Site>
      {/* Cinematic Hero */}
      <section className="relative min-h-[40vh] flex items-center bg-[#050A18] overflow-hidden pt-32 pb-16 mt-10 border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 w-full max-w-4xl text-center mx-auto">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gold"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">Talk to Even Now</span>
            <span className="w-8 h-[1px] bg-gold"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight mb-6 text-white text-balance">
            Let’s talk about the problem you’re trying to solve.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Business growth, procurement or a new market. Start with the commercial challenge that matters to you.
          </p>
        </div>
      </section>

      <section className="section-space bg-secondary/10">
        <div className="container-shell">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Sticky Sidebar */}
            <aside className="lg:w-1/3 shrink-0">
              <div className="sticky top-32 p-8 rounded-[2rem] bg-card text-foreground border border-border shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full"></div>
                <h3 className="text-xl font-bold tracking-tight mb-3 text-gold relative z-10">A purposeful conversation</h3>
                <h2 className="text-3xl font-medium mb-6 relative z-10 leading-tight">Start with context.<br/>Build toward clarity.</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-10 relative z-10">Share your business, your requirement and what a useful outcome would look like. We’ll review the information and determine the relevant next step.</p>
              </div>
            </aside>
            
            {/* Form Panel */}
            <div className="lg:w-2/3">
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h2 className="text-3xl font-medium mb-8">Your Details</h2>
                
                <form onSubmit={e=>{e.preventDefault();router.push({to:'/thank-you',search:{type:'contact'}});}}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Full name" name="name" required/>
                    <Field label="Company" name="company" required/>
                    <Field label="Work email" name="email" type="email" required/>
                    <Field label="Phone / WhatsApp" name="phone" type="tel"/>
                    <Field label="Website" name="website" type="url"/>
                    <Field label="Job title" name="title"/>
                    
                    <label className="field sm:col-span-2">
                      What do you need? *
                      <select name="need" defaultValue={need} required className="w-full">
                        <option value="" disabled>Select an enquiry type</option>
                        {['Growth Audit','Business Growth','D2C Growth','Market Access','Procurement','Supplier Representation','Other'].map(x=><option key={x}>{x}</option>)}
                      </select>
                    </label>
                    
                    <Field label="Budget (optional, include currency)" name="budget"/>
                    <Field label="Preferred meeting format" name="meeting" options={['Video call','Phone call','In-person discussion']}/>
                    <Field label="Tell us about your requirement" name="message" type="textarea" wide required/>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                     <div></div>
                     <button type="submit" className="group inline-flex items-center gap-3 bg-gold text-black px-8 h-14 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_30px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center overflow-hidden relative">
                       <span className="relative z-10">Send Enquiry</span>
                       <ArrowUpRight className="relative z-10 group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20}/>
                       <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
                     </button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Site>
  );
}

export function ThankYouPage({type}:{type:string}){
  return (
    <Site>
      <section className="relative min-h-[70vh] flex items-center bg-[#050A18] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/15 via-[#050A18] to-[#050A18] pointer-events-none"></div>
        <div className="container-shell relative z-10 max-w-2xl mx-auto text-center animate-in fade-in zoom-in-95 duration-1000">
          <div className="inline-flex p-5 bg-gold/10 border border-gold/20 rounded-full text-gold mb-8 shadow-[0_0_30px_rgba(193,155,62,0.2)]">
            <Check size={40} className="animate-pulse"/>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            We've received your enquiry.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto mb-10">
            Our team will review the information and determine the relevant next step. We will be in touch shortly.
          </p>
          <Link href="/" className="group inline-flex items-center gap-3 bg-gold text-black px-8 h-14 rounded-full font-bold tracking-wide shadow-xl shadow-gold/20 hover:shadow-[0_0_30px_rgba(193,155,62,0.4)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
             <span className="relative z-10">Return to Home</span>
             <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={20}/>
             <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
          </Link>
        </div>
      </section>
    </Site>
  );
}



