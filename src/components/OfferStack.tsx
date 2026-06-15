import React from 'react';
import { landingContent } from '@/data/landingContent';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const OfferStack = () => {
  const { offer } = landingContent;

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Entrega Completa
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            {offer.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Tudo o que você precisa para sair da inércia e começar a investir com clareza, método e segurança total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offer.items.map((item, index) => (
            <div 
              key={index} 
              className="premium-card flex flex-col hover:border-accent/40 group h-full"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-accent group-hover:text-premium-dark transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-premium-dark leading-tight group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest">
                <span>Incluso na Inscrição</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferStack;
