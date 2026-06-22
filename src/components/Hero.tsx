'use client';

import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { landingContent } from '@/data/landingContent';
import { CheckCircle2, MapPin, Calendar, Clock, Hotel, Timer } from 'lucide-react';

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-2xl mb-12">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <Timer className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-xs font-black text-accent uppercase tracking-widest">Contagem Regressiva</span>
            </div>
            <p className="text-slate-300 font-medium text-sm md:text-base max-w-[240px]">
              O tempo está acabando para você garantir sua vaga na imersão.
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {[
              { label: 'D', value: timeLeft.days },
              { label: 'H', value: timeLeft.hours },
              { label: 'M', value: timeLeft.minutes },
              { label: 'S', value: timeLeft.seconds }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center">
                  <div className="text-2xl md:text-4xl font-black text-white tabular-nums">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</span>
                </div>
                {idx < 3 && (
                  <div className="text-xl md:text-2xl font-black text-white/20 mb-4">:</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight max-w-5xl">
            {hero.headline}
          </h1>
          
          <p className="text-lg md:text-xl font-medium text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed animate-fade-in">
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

          <CountdownTimer targetDate={eventDetails.isoDate} />

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
