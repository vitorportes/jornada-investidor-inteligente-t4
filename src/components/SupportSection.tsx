import React from 'react';
import { landingContent } from '@/data/landingContent';
import { MessageCircle, ShieldCheck } from 'lucide-react';

const SupportSection = () => {
  const { support } = landingContent;

  return (
    <section id="support" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="max-w-5xl mx-auto p-8 md:p-16 bg-premium-light rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-12 relative group shadow-premium">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full"></div>
          
          <div className="w-24 h-24 bg-accent rounded-[2rem] flex items-center justify-center shrink-0 shadow-accent transition-transform duration-500">
            <MessageCircle className="w-12 h-12 text-premium-dark" />
          </div>
          
          <div className="text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest text-accent uppercase bg-white rounded-full border border-accent/10">
              <ShieldCheck className="w-3.5 h-3.5" />
              Acompanhamento Pós-Imersão
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-premium-dark leading-tight">
              A Jornada não termina quando a imersão acaba
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              {support.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
