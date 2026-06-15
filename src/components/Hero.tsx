import React from 'react';
import CTAButton from './CTAButton';
import { landingContent } from '@/data/landingContent';
import { CheckCircle2, MapPin, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  const { hero } = landingContent;

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 px-4 bg-premium-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20 rounded-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {hero.trustLine}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight max-w-5xl">
            {hero.headline}
          </h1>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mb-12 aspect-video bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm relative overflow-hidden group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-accent transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-premium-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <p className="mt-6 text-white font-bold uppercase tracking-widest text-sm">Vídeo de Apresentação</p>
            </div>
            {/* Aesthetic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black/40 to-transparent pointer-events-none"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            {hero.subheadline}
          </p>

          <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col items-center gap-10 w-full">
            <CTAButton className="w-full md:w-auto min-w-[340px]">
              {hero.cta}
            </CTAButton>

            <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-semibold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Imersão Presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>1 Dia de Imersão</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Prática e Guiada</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-3xl bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              {hero.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-slate-200 font-medium text-sm leading-snug">{bullet}</span>
                </div>
              ))}
            </div>

            {hero.closing && (
              <div className="max-w-2xl mx-auto pt-10 border-t border-white/10">
                <p className="text-slate-400 italic text-lg leading-relaxed">
                  "{hero.closing}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
