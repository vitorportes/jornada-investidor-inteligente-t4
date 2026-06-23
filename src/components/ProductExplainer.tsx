import React from 'react';
import Image from 'next/image';
import { landingContent } from '@/data/landingContent';
import { Lightbulb, Target, ShieldCheck, Zap } from 'lucide-react';

const ProductExplainer = () => {
  const { productExplainer } = landingContent;
  
  const icons = [Lightbulb, Target, ShieldCheck];

  return (
    <section id="explainer" className="py-24 bg-premium-light overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="w-full lg:flex-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl z-0"></div>
              
              <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/media/concept/imersao.png" 
                  alt="Luciano Mangueira na Jornada Investidor Inteligente"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
              
              {/* Floating badge over image */}
              <div className="absolute -bottom-6 right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl z-20 flex items-center gap-2.5 sm:gap-3 border border-slate-100">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-premium-dark" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Experiência</p>
                  <p className="text-sm font-black text-premium-dark">Prática e Presencial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
              <Zap className="w-3.5 h-3.5" />
              Conceito da Imersão
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-premium-dark leading-tight">
              {productExplainer.title}
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-xl md:text-2xl text-premium-dark font-bold leading-relaxed">
                {productExplainer.description}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {productExplainer.details}
              </p>
            </div>

            {/* Pillars as a list */}
            <div className="space-y-6 mb-10">
              {productExplainer.pillars.map((pillar, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-premium-dark transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-premium-dark text-lg mb-1">{pillar.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplainer;
