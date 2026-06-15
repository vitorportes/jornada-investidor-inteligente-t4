import React from 'react';
import { landingContent } from '@/data/landingContent';
import { TrendingUp, Info, AlertTriangle, PieChart, Users, ShieldAlert, BarChart3 } from 'lucide-react';

const RationalArguments = () => {
  const { rationalArguments } = landingContent;

  const getIcon = (index: number) => {
    const iconClass = "w-6 h-6 text-accent";
    switch (index) {
      case 0: return <Info className={iconClass} />;
      case 1: return <Users className={iconClass} />;
      case 2: return <PieChart className={iconClass} />;
      case 3: return <TrendingUp className={iconClass} />;
      case 4: return <BarChart3 className={iconClass} />;
      case 5: return <ShieldAlert className={iconClass} />;
      default: return <Info className={iconClass} />;
    }
  };

  return (
    <section id="rational" className="py-24 bg-premium-black text-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
            <BarChart3 className="w-3.5 h-3.5" />
            Dados e Realidade
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Por que você precisa de um método?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            O problema atual não é a falta de informação, mas o excesso de ruído que impede você de tomar decisões claras e seguras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rationalArguments.map((arg, index) => (
            <div 
              key={index} 
              className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-premium-dark transition-all duration-300">
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                {arg.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {arg.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent/30"></div>
          <p className="text-slate-400 italic text-sm md:text-base leading-relaxed">
            "A Jornada Investidor Inteligente não promete rentabilidade garantida. O objetivo é estritamente educacional. A decisão final sobre seus investimentos será sempre sua, agora amparada por clareza, método e total autonomia."
          </p>
        </div>
      </div>
    </section>
  );
};

export default RationalArguments;
