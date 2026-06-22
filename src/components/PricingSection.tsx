import React from 'react';
import { landingContent } from '@/data/landingContent';
import CTAButton from './CTAButton';
import { ShieldCheck, Info, CreditCard, Users, Coffee, BookOpen } from 'lucide-react';

const PricingSection = () => {
  const { pricing, guarantee } = landingContent;

  return (
    <section id="pricing" className="py-24 bg-premium-light">
      <div className="section-container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            Sua vaga na próxima imersão
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Um investimento único para transformar sua relação com o dinheiro e construir patrimônio com método.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-premium overflow-hidden border border-slate-100 flex flex-col md:flex-row relative">
            {/* Left Side: Offer Details */}
            <div className="p-8 md:p-12 flex-1 bg-premium-dark text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-premium-dark text-sm">
                    <Info className="w-5 h-5" />
                  </span>
                  O que está incluso:
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: "Imersão Presencial de 1 Dia", value: "R$ 497" },
                    { label: "Plantão de Dúvidas Pós-Imersão", value: "R$ 297" },
                    { label: "Grupo Exclusivo por 1 Mês", value: "R$ 147" },
                    { label: "Apostila do Método Carteira Inteligente", value: "R$ 97" },
                    { label: "Simulador de Aportes Mensais", value: "R$ 97" },
                    { label: "Estudos de Caso e Análises Reais", value: "R$ 97" },
                    { label: "Guia Primeiros Passos Fora da Poupança", value: "R$ 67" },
                    { label: "Planilha Carteira Inteligente", value: "R$ 47" },
                    { label: "Mini Treinamento Anti-Dica Quente", value: "R$ 47" },
                    { label: "Checklist de Avaliação de Produto Financeiro", value: "R$ 37" },
                    { label: "Mapa de Revisão Mensal da Carteira", value: "R$ 37" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs md:text-sm border-b border-white/5 pb-1.5">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-slate-500 line-through font-semibold font-mono tracking-tight">{item.value}</span>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center text-sm md:text-base font-bold pt-3 text-slate-200">
                    <span>Total:</span>
                    <span className="text-slate-500 line-through font-black font-mono tracking-tight">R$ 1.470</span>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-widest">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Price & CTA */}
            <div className="p-8 md:p-16 flex-1 flex flex-col justify-center items-center text-center bg-white relative">
              <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-slate-500 uppercase bg-slate-100 rounded-full">
                Valor Único Promocional
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-bold text-slate-400">R$</span>
                <span className="text-8xl font-black text-premium-dark tracking-tighter leading-none">{pricing.price}</span>
              </div>
              
              <p className="text-accent font-black text-lg mb-10 uppercase tracking-widest">
                {pricing.installments}
              </p>
              
              <CTAButton className="w-full mb-6 py-5 text-xl shadow-accent">
                {pricing.cta}
              </CTAButton>
              
              <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                {pricing.note}
              </p>
            </div>
          </div>

          {/* Guarantee / Policy Section */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-20 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                <ShieldCheck className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-premium-dark uppercase tracking-wider">
                  Política de Inscrição e Reembolso
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {guarantee.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
