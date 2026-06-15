import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white py-16 px-4 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
              Jornada Investidor <span className="text-accent">Inteligente</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Uma imersão presencial focada em clareza, método e autonomia para quem deseja construir patrimônio com segurança.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Educação Financeira de Alto Nível</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div className="space-y-4">
              <h3 className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6">Navegação</h3>
              <ul className="space-y-3 text-sm font-medium text-slate-400">
                <li><a href="#explainer" className="hover:text-accent transition-colors">O Método</a></li>
                <li><a href="#offer" className="hover:text-accent transition-colors">O que você recebe</a></li>
                <li><a href="#pricing" className="hover:text-accent transition-colors">Inscrição</a></li>
                <li><a href="#faq" className="hover:text-accent transition-colors">Dúvidas</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6">Legal</h3>
              <ul className="space-y-3 text-sm font-medium text-slate-400">
                <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-xs font-medium">
            © {new Date().getFullYear()} Jornada Investidor Inteligente. Todos os direitos reservados.
          </p>
          <div className="text-center md:text-right">
            <p className="text-[10px] md:text-xs text-slate-600 max-w-[500px] leading-relaxed font-medium uppercase tracking-wider">
              AVISO LEGAL: Todo o conteúdo desta imersão é estritamente educacional. Luciano Mangueira e a Jornada Investidor Inteligente não realizam recomendações individualizadas de investimentos nem prometem rentabilidade garantida. A decisão final é sempre do investidor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
