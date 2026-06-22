'use client';

import React from 'react';
import CTAButton from './CTAButton';
import { landingContent } from '@/data/landingContent';
import { CheckCircle2, MapPin, Calendar, Clock, Hotel } from 'lucide-react';

const Hero = () => {
  const { hero, eventDetails } = landingContent;

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 md:pt-28 pb-20 px-4 bg-premium-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Refined Premium Event Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mb-12 animate-fade-in">
            <div className="flex items-center gap-4 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl group hover:border-accent/30 transition-all duration-500">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_10px_rgba(227,176,97,0.8)]"></span>
                </span>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Imersão presencial</span>
              </div>
              
              <div className="hidden sm:block w-px h-4 bg-white/10"></div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Macaé, RJ</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>15 de Agosto</span>
                </div>
              </div>
            </div>

            <div className="px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full shadow-[0_0_20px_rgba(227,176,97,0.1)]">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full animate-pulse"></span>
                Vagas Limitadas
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight max-w-5xl">
            {hero.headline}
          </h1>
          
           <p className="text-base md:text-lg font-medium text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            {hero.subheadline}
          </p>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl mb-12 aspect-video bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm relative overflow-hidden group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-accent transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-premium-black border-b-[10px] border-b-transparent ml-1"></div>
              </div>
              <p className="mt-6 text-white font-bold uppercase tracking-widest text-sm">Vídeo de Apresentação</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Bullets Points Card */}
          <div className="w-full max-w-3xl bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm mb-12">
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Durante a Jornada, você vai descobrir como:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
              {hero.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-slate-200 font-medium text-sm leading-snug">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Info Highlights - Positioned after Subheadline and Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 w-full max-w-5xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
              <MapPin className="w-6 h-6 text-accent mb-3" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Localização</span>
              <span className="text-white font-bold">{eventDetails.location}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
              <Hotel className="w-6 h-6 text-accent mb-3" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Local</span>
              <span className="text-white font-bold">{eventDetails.venue}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
              <Clock className="w-6 h-6 text-accent mb-3" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Horário</span>
              <span className="text-white font-bold">{eventDetails.time}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
              <Calendar className="w-6 h-6 text-accent mb-3" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Data</span>
              <span className="text-white font-bold">{eventDetails.date.split(',')[1]}</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 w-full">
            <CTAButton className="w-full md:w-auto min-w-[340px]">
              {hero.cta}
            </CTAButton>

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
