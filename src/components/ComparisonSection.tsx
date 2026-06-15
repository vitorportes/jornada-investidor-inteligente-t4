import React from 'react';
import { landingContent } from '@/data/landingContent';
import { X, Check, Scale } from 'lucide-react';

const ComparisonSection = () => {
  const { comparison } = landingContent;

  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
            <Scale className="w-3.5 h-3.5" />
            Diferenciais
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            Por que a Jornada é o caminho mais rápido?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Compare o caminho comum de quem tenta aprender sozinho com a experiência guiada da imersão presencial.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] shadow-premium border border-slate-100 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-premium-dark text-white font-bold p-8 hidden md:grid">
            <div className="uppercase tracking-widest text-sm text-slate-400">Ponto de Contato</div>
            <div className="uppercase tracking-widest text-sm text-slate-400">O Mercado Comum</div>
            <div className="uppercase tracking-widest text-sm text-accent">Nossa Experiência</div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-8 gap-6 md:gap-8 items-center group hover:bg-premium-light transition-colors">
                <div className="font-black text-premium-dark text-lg md:text-base uppercase tracking-tight">{row.item}</div>
                
                <div className="flex items-start gap-3 text-slate-500">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-sm font-medium">{row.common}</span>
                </div>

                <div className="flex items-start gap-3 text-premium-dark font-bold bg-accent/5 md:bg-transparent p-4 md:p-0 rounded-2xl border border-accent/10 md:border-none">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-premium-dark" />
                  </div>
                  <span className="text-sm">{row.journey}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">A escolha é entre meses de confusão ou um dia de clareza.</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
