import React from 'react';
import { landingContent } from '@/data/landingContent';
import { Lightbulb, Target, ShieldCheck, Zap } from 'lucide-react';

const ProductExplainer = () => {
  const { productExplainer } = landingContent;

  return (
    <section id="explainer" className="py-24 bg-premium-light overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
              <Zap className="w-3.5 h-3.5" />
              Conceito da Imersão
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-premium-dark leading-tight">
              {productExplainer.title}
            </h2>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-premium-dark font-bold leading-relaxed">
                {productExplainer.description}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {productExplainer.details}
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-white rounded-2xl border-l-4 border-accent shadow-sm">
              <p className="text-slate-700 italic font-medium">
                "Não é sobre acertar o próximo grande ativo. É sobre saber proteger seu dinheiro e tomar decisões com clareza."
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="premium-card group hover:border-accent/40 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                <Lightbulb className="w-6 h-6 text-accent group-hover:text-premium-dark" />
              </div>
              <h3 className="font-bold text-premium-dark text-lg mb-2">Mentalidade</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Aprenda a pensar como um investidor institucional e abandone a mentalidade de apostador.</p>
            </div>
            
            <div className="premium-card group hover:border-accent/40 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                <Target className="w-6 h-6 text-accent group-hover:text-premium-dark" />
              </div>
              <h3 className="font-bold text-premium-dark text-lg mb-2">Diagnóstico</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Entenda sua realidade financeira real, perfil de risco e objetivos de curto, médio e longo prazo.</p>
            </div>
            
            <div className="premium-card sm:col-span-2 group hover:border-accent/40 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-accent group-hover:text-premium-dark" />
              </div>
              <h3 className="font-bold text-premium-dark text-lg mb-2">Segurança e Método</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Construa sua carteira com base em lógica, diversificação inteligente e autonomia, sem depender de "dicas quentes".</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplainer;
