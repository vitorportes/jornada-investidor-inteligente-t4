import React from 'react';
import { landingContent } from '@/data/landingContent';
import { Gift, Sparkles } from 'lucide-react';

const BonusCards = () => {
  const { bonus } = landingContent;

  return (
    <section id="bonus" className="py-24 bg-premium-dark text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            Oferta Especial
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Bônus Estratégicos Inclusos
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Ao garantir sua vaga hoje, você também recebe acesso a ferramentas exclusivas para acelerar sua jornada e consolidar seu aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonus.map((item, index) => (
            <div 
              key={index} 
              className="relative p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-20 transition-opacity rotate-12">
                <Gift className="w-32 h-32 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] text-accent uppercase bg-accent/10 rounded-lg">
                  Presente {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
                
                <div className="mt-10 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-4 h-4" />
                  <span>Acesso imediato pós-imersão</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusCards;
