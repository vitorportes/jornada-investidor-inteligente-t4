'use client';

import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = "w-full max-w-2xl mb-12" }: CountdownTimerProps) => {
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
    <div className={className}>
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

export default CountdownTimer;
