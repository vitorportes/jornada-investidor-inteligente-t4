import React from 'react';
import { landingContent } from '@/data/landingContent';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const MethodTimeline = () => {
  const { method } = landingContent;

  return (
    <section id="method" className="py-24 bg-premium-light overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            {method.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {method.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {method.steps.map((step) => (
            <div 
              key={step.id} 
              className="premium-card relative group flex flex-col h-full hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-50 group-hover:text-accent/10 transition-colors pointer-events-none">
                {step.id}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 font-bold text-xl border border-accent/20">
                  {step.id}
                </div>
                
                <h3 className="text-xl font-bold text-premium-dark mb-4 pr-12 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {step.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Passo Concluído</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {method.closing && (
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-premium-dark text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shrink-0 rotate-3">
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
