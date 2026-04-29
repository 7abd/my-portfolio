"use client";
import  { useTransition, useState } from "react";
import Image from "next/image";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li><strong>Frontend:</strong> React, Next.js(App Router), TypeScript, Tailwind CSS</li>
          <li><strong>Backend:</strong>Supabase (Auth/Database),Next.js Route Handlers (Server-Side), REST APIs</li>
          <li><strong>Security:</strong> Web Crypto API (AES-GCM, PBKDF2)</li>
          <li><strong>Architecture:</strong> Zero-Knowledge Architecture, Context API (State Management),Scalable Systems</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
        <li className="font-bold text-cyan-300">Bachelor of Economics</li>
        <li className="text-sm text-gray-300">University Dhar el-Mehraz Fes, Morocco</li>
        <li className="mb-3 italic text-xs text-gray-400">
  Focus on Quantitative Analysis and Systematic Problem Solving.
        </li>
  
        <li className="font-bold text-cyan-300">Web Development Program</li>
        <li className="text-sm text-gray-300">Scrimba (Online) — 2024</li>
        <li className="mb-3 text-xs text-gray-400">
  100+ hours of project-based Software Engineering training.
        </li>
  
        <li className="font-bold text-cyan-300">Languages</li>
        <li className="text-sm">English, Arabic, French</li>
      </ul>
      ),
    },
    {
      title: "Approach",
      id: "certifications", 
      content: (
        <ul className="list-disc pl-2">
          <li><strong>Full-Stack Awareness:</strong> Leveraging Node/Express knowledge to build better frontend-backend integrations.</li>
          <li><strong>Security-First:</strong> Prioritizing data integrity through client-side encryption.</li>
          <li><strong>Modular Design:</strong> Writing reusable, maintainable components.</li>
        </ul>
      ),
    },
  ];
  

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabData = TAB_DATA.find((t) => t.id === tab) || TAB_DATA[0];

  return (
    <section className="text-white py-16 md:py-24 overflow-hidden" id="about">
      <div className="max-w-[1500px] mx-auto px-4 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
<div className="md:col-span-5 relative h-[400px] md:h-[600px] lg:h-[700px]">
   <div className="absolute top-0 bottom-0 
                   -left-4 sm:-left-16 md:-left-32 lg:-left-48 xl:-left-64
                   
                   w-[calc(100%+1rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+8rem)] lg:w-[calc(100%+12rem)] xl:w-[calc(100%+16rem)]
                   
                   rounded-r-2xl overflow-hidden border border-white/10 shadow-2xl">
      <Image
        src="/decoration6.png"
        alt="Developer workspace"
        fill
        className="object-fit"
        sizes="(max-width: 768px) 100vw, 50vw" 
        priority
      />
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent"></div>
    </div>
          </div>

          <div className="md:col-span-7 flex flex-col h-full justify-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">About Me</h2>
              <div className="h-1.5 w-24 bg-cyan-500 rounded-full"></div>
            </div>

            <div className="space-y-6 max-w-2xl">
              <p className="text-lg text-slate-300 leading-relaxed">
                I’m a frontend engineer focused on building 
                <span className="font-semibold text-white"> structured and secure </span> 
                web applications. I specialize in the React ecosystem, with experience integrating
                 backend services and implementing client-side encryption using browser APIs.
              </p>
              
              <p className="text-lg text-slate-400">
                From e-commerce platforms to 
                <span className="text-cyan-400 font-medium italic"> zero-knowledge encrypted vaults</span>, 
                I prioritize maintainable architecture over quick prototypes.
              </p>

              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                 <span className="flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                 </span>
                 <span className="text-xs uppercase tracking-widest text-cyan-100 font-bold">
                   Morocco &bull; Remote Worldwide
                 </span>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex gap-4 border-b border-white/10 mb-8">
                {TAB_DATA.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                      tab === item.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {item.title}
                    {tab === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500 animate-in fade-in zoom-in"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[160px] animate-in slide-in-from-top-4 duration-500">
                {currentTabData.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;