import React from 'react';
import { landingContent } from '@/data/landingContent';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const MethodTimeline = () => {
  const { method } = landingContent;

  return (
    <section id="method" className="py-24 bg-premium-light overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            {method.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {method.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {method.steps.map((step) => (
            <div 
              key={step.id} 
              className="premium-card relative group flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 overflow-hidden !p-0 border border-slate-200 shadow-sm bg-white"
            >
              {/* Module Image - Adjusted height for better balance */}
              {step.imageUrl && (
                <div className="relative h-60 md:h-64 w-full overflow-hidden">
                  <Image 
                    src={step.imageUrl} 
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              )}
              
              {/* Content area - More prominent title and badge */}
              <div className="relative z-10 flex flex-col p-5 bg-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center font-bold text-lg border border-accent/20 shrink-0">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-bold text-premium-dark leading-tight group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {method.closing && (
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-premium-dark text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shrink-0 mt-2">
                  <ArrowRight className="w-8 h-8 text-premium-dark" />
                </div>
                <p className="text-lg md:text-xl italic leading-relaxed text-slate-200">
                  "{method.closing}"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MethodTimeline;
