import React from 'react';
import { landingContent } from '@/data/landingContent';
import { AlertCircle, Target, Users } from 'lucide-react';

const AudienceSection = () => {
  const { audience } = landingContent;

  return (
    <section id="audience" className="py-24 bg-premium-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent blur-[120px] rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
            <Target className="w-3.5 h-3.5" />
            Perfil do Participante
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {audience.title}
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Se você se identifica com uma ou mais dessas situações, a Jornada é o seu próximo passo estratégico para assumir o controle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audience.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-6 rounded-2xl border border-white/10 flex gap-4 hover:border-accent/50 transition-all duration-300 hover:bg-white/10 group h-full"
            >
              <div className="shrink-0 mt-1">
                <AlertCircle className="w-5 h-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">{item}</p>
            </div>
          ))}
        </div>

        {audience.note && (
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="p-8 md:p-10 bg-accent rounded-3xl text-premium-dark flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-accent/20">
              <div className="w-16 h-16 bg-premium-dark/10 rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-premium-dark" />
              </div>
              <div>
                <p className="text-lg md:text-xl font-black leading-relaxed">
                  {audience.note}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AudienceSection;
