import React from 'react';
import { landingContent } from '@/data/landingContent';
import { XCircle, ArrowRightCircle } from 'lucide-react';

const PainsAndDesires = () => {
  const { painsAndDesires } = landingContent;

  return (
    <section id="pains" className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
            <XCircle className="w-3.5 h-3.5" />
            Chega de Confusão
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark leading-tight">
            Você ainda vive alguma dessas situações?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            A Jornada Investidor Inteligente foi desenhada para transformar esse ciclo de dúvida e medo em uma estratégia de clareza e resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {painsAndDesires.items.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-accent/40 hover:shadow-premium transition-all duration-300 flex items-start gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <XCircle className="w-4 h-4 text-slate-300 group-hover:text-red-500 transition-colors" />
                </div>
              </div>
              <p className="text-slate-700 font-semibold leading-relaxed group-hover:text-premium-dark transition-colors">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-premium-light p-8 md:p-12 rounded-[2.5rem] border border-slate-200 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full"></div>
          
          <div className="relative z-10 space-y-8">
            <p className="text-xl md:text-2xl text-premium-dark font-black leading-relaxed">
              O objetivo não é apenas investir. É sair da sensação de atraso e dependência para construir uma relação madura, consciente e estratégica com seu patrimônio.
            </p>
            
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 text-accent font-black uppercase tracking-[0.2em] text-sm animate-pulse">
                <span>Inicie sua transformação</span>
                <ArrowRightCircle className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainsAndDesires;
