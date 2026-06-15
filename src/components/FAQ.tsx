"use client";

import React from 'react';
import { landingContent } from '@/data/landingContent';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const { faq } = landingContent;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            Suporte e Dúvidas
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas principais dúvidas sobre a imersão e tome sua decisão com total clareza.
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-accent/40 shadow-premium ring-1 ring-accent/10' : 'border-slate-100 shadow-sm'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-accent' : 'text-premium-dark'}`}>
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-accent text-premium-dark' : 'bg-slate-100 text-slate-400 group-hover:bg-accent/20 group-hover:text-accent'}`}>
                  {openIndex === index ? 
                    <Minus className="w-4 h-4" /> : 
                    <Plus className="w-4 h-4" />
                  }
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 md:p-8 pt-0 md:pt-0 text-slate-600 leading-relaxed text-base">
                  <div className="pt-4 border-t border-slate-50">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-premium-light rounded-3xl text-center">
          <p className="text-slate-600 font-medium mb-4">Ainda tem alguma dúvida específica?</p>
          <a 
            href="https://wa.me/SEU_NUMERO" 
            className="text-accent font-bold uppercase tracking-widest hover:underline flex items-center justify-center gap-2"
          >
            Falar com a equipe no WhatsApp
            <HelpCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
