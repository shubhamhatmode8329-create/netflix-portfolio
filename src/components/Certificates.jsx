import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  ['Tata Data Visualization Job Simulation','Tata / Forage','https://www.theforage.com/simulations/tata/data-visualisation-p5xo'],
  ['Data Analytics Job Simulation','Deloitte / Forage','https://www.theforage.com/simulations/deloitte/data-analytics-s5zy'],
  ['Data Science Job Simulation','BCG / Forage','https://www.theforage.com/simulations/bcg/data-science-ccdz'],
  ['Tata Data Analyst Certification','Tata / Forage','https://www.theforage.com/simulations?companies=tata'],
  ['Tata Cyber Security Job Simulation','Tata / Forage','https://www.theforage.com/simulations?companies=tata'],
  ['Cybersecurity Job Simulation','Mastercard / Forage','https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye'],
  ['Software Engineering Job Simulation','HPE / Forage','https://www.theforage.com/simulations/hewlett-packard-enterprise/software-engineering-pcij'],
  ['Technology Job Simulation & Tech Explorer','Deloitte / Forage','https://www.theforage.com/simulations/deloitte-au/technology-fz0w'],
  ['Tata ESG Job Simulation','Tata / Forage','https://www.theforage.com/simulations?companies=tata'],
  ['Career Catalyst: Advisory Job Simulation','KPMG / Forage','https://www.theforage.com/simulations?companies=kpmg'],
  ['The Private Bank Job Simulation','Bank of America / Forage','https://www.theforage.com/simulations?companies=bank-of-america'],
  ['Off-Premise Sales Job Simulation','Red Bull / Forage','https://www.theforage.com/simulations?companies=red-bull'],
  ['Customer Service Job Simulation','Forage','https://www.theforage.com/'],
  ['Interview Preparation Job Simulation','Ashurst / Forage','https://www.theforage.com/'],
];

export default function Certificates(){
  const ref=useRef(null); const cards=useRef([]);
  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.fromTo(cards.current,{y:70,opacity:0,filter:'blur(8px)'},{y:0,opacity:1,filter:'blur(0px)',duration:0.8,stagger:0.07,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 75%',toggleActions:'play none none reverse'}});
    },ref); return ()=>ctx.revert();
  },[]);
  return <section id="certificates" ref={ref} className="relative w-full bg-[#050505] text-white py-28 px-6 md:px-12 overflow-hidden select-none">
    <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"/>
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div><div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-red-600/40 text-[11px] font-mono uppercase tracking-widest"><span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"/><span className="text-red-500 font-bold">EPISODE 04</span><span className="text-white/40">|</span><span>LEARNING CREDITS</span></div><h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4">CERTIFICATIONS <span className="text-red-600">&</span> SIMULATIONS.</h2></div>
        <p className="text-white/50 text-sm max-w-sm">Industry-style virtual experiences across data, cybersecurity, technology, business and professional development.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {certificates.map(([title,issuer,url],i)=><a ref={el=>cards.current[i]=el} key={title} href={url} target="_blank" rel="noreferrer" className="group relative p-5 rounded-xl bg-[#111]/90 backdrop-blur-xl border border-white/10 hover:border-red-600/60 hover:bg-[#151515] transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background:'radial-gradient(320px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.12), transparent 70%)'}} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mouse-x',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--mouse-y',`${e.clientY-r.top}px`)}}/>
          <div className="relative z-10 flex items-center gap-4"><span className="text-xs font-mono text-red-500">{String(i+1).padStart(2,'0')}</span><div className="flex-1"><h3 className="text-sm md:text-base font-bold group-hover:text-red-400 transition-colors">{title}</h3><p className="text-[11px] text-white/40 mt-1">{issuer}</p></div><span className="text-white/30 group-hover:text-red-500 transition-colors">↗</span></div>
        </a>)}
      </div>
    </div>
  </section>
}
