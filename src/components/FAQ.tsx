"use client";

import React from 'react';
import { landingContent } from '@/data/landingContent';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// Custom WhatsApp Icon since Lucide doesn't have it
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
        
        {/* WhatsApp CTA Section */}
        <div className="mt-16 p-10 bg-premium-light rounded-[2.5rem] border border-slate-100 shadow-sm text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-premium-dark mb-4">
              Ainda tem alguma dúvida específica?
            </h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Se você tem uma situação particular ou quer falar com a nossa equipe antes de garantir sua vaga, clique no botão abaixo.
            </p>
            
            <a 
              href="https://wa.me/5522992180488?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20Jornada%20Investidor%20Inteligente.%20" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-black uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group/btn"
            >
              <WhatsAppIcon className="w-6 h-6 transition-transform group-hover/btn:scale-110" />
              <span>Fale com a gente no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
