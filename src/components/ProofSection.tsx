import React from 'react';
import { landingContent } from '@/data/landingContent';
import { PlayCircle, MessageSquare, Quote, Star, Users } from 'lucide-react';

const ProofSection = () => {
  const { proofs } = landingContent;

  return (
    <section id="proof" className="py-24 bg-premium-light">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            {proofs.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            {proofs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proofs.items.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 group">
              {/* Vertical Video Placeholder (Shorts style) */}
              <div className="aspect-[9/16] bg-premium-dark rounded-[2rem] flex flex-col items-center justify-center p-8 text-center border-4 border-white shadow-premium relative cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors"></div>
                <PlayCircle className="w-16 h-16 text-accent mb-4 group-hover:scale-110 transition-transform relative z-10" />
                <p className="text-white font-black uppercase tracking-widest text-xs relative z-10">Ver Depoimento</p>
              </div>
              
              <div className="px-4">
                <p className="font-black text-premium-dark text-lg uppercase leading-tight">{item.name}</p>
                <p className="text-sm text-accent font-bold uppercase tracking-wider">{item.profession}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
            <Users className="w-5 h-5 text-accent" />
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Mais de 500 vidas impactadas pelo método</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
