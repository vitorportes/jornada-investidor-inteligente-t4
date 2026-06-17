import React from 'react';
import Image from 'next/image';
import { landingContent } from '@/data/landingContent';
import { GraduationCap, Award, Building2, UserCheck } from 'lucide-react';

const AuthoritySection = () => {
  const { authority } = landingContent;

  return (
    <section id="authority" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
                <UserCheck className="w-3.5 h-3.5" />
                Quem Conduz a Jornada
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-premium-dark mb-4 leading-tight">
                {authority.name}
              </h2>
              <div className="h-1.5 w-20 bg-accent rounded-full mb-8"></div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                {authority.bio.split('\n\n').map((paragraph, idx) => {
                  const isQuote = paragraph.startsWith('"') && paragraph.endsWith('"');
                  
                  if (isQuote) {
                    return (
                      <blockquote key={idx} className="relative py-8 px-12 bg-premium-light rounded-2xl border-l-4 border-accent italic font-medium text-premium-dark leading-relaxed">
                        <span className="absolute top-2 left-4 text-6xl text-accent/10 font-serif select-none">"</span>
                        <span className="relative z-10">{paragraph.replace(/"/g, '')}</span>
                        <span className="absolute -bottom-6 right-8 text-6xl text-accent/10 font-serif select-none">"</span>
                      </blockquote>
                    );
                  }
                  
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {authority.credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-premium-light rounded-2xl border border-slate-100 group hover:border-accent/40 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-premium-dark transition-all">
                    {index === 0 ? <GraduationCap className="w-6 h-6 text-accent group-hover:text-premium-dark" /> : 
                     index === 3 ? <Building2 className="w-6 h-6 text-accent group-hover:text-premium-dark" /> :
                     <Award className="w-6 h-6 text-accent group-hover:text-premium-dark" />}
                  </div>
                  <span className="text-sm font-bold text-premium-dark leading-tight">{cred}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative">
              {/* Decorative elements behind photo */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl border-8 border-white">
                <Image 
                  src="/media/sobre-mim.jpeg" 
                  alt={authority.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/60 via-transparent to-transparent"></div>
                
                {/* Float Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                  <p className="font-bold text-lg mb-1">{authority.name}</p>
                  <p className="text-accent text-sm font-bold uppercase tracking-wider">{authority.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
