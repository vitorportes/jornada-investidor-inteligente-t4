import Hero from "@/components/Hero";
import MethodTimeline from "@/components/MethodTimeline";
import AudienceSection from "@/components/AudienceSection";
import ProductExplainer from "@/components/ProductExplainer";
import PainsAndDesires from "@/components/PainsAndDesires";
import OfferStack from "@/components/OfferStack";
import BonusCards from "@/components/BonusCards";
import PricingSection from "@/components/PricingSection";
import ProofSection from "@/components/ProofSection";
import AuthoritySection from "@/components/AuthoritySection";
import RationalArguments from "@/components/RationalArguments";
import ComparisonSection from "@/components/ComparisonSection";
import SupportSection from "@/components/SupportSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { landingContent } from "@/data/landingContent";
import CountdownTimer from "@/components/CountdownTimer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProductExplainer />
      <MethodTimeline />
      <AudienceSection />
      <ProofSection />
      <OfferStack />
      <BonusCards />
      <RationalArguments />
      <ComparisonSection />
      <AuthoritySection />
      <PricingSection />
      <SupportSection />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-24 bg-premium-dark text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] rounded-full"></div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-accent uppercase bg-white/5 rounded-full border border-white/10">
              <Zap className="w-3.5 h-3.5" />
              Sua Transformação Começa Aqui
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Você não precisa mais adiar sua <span className="text-accent">liberdade financeira.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Em apenas 1 dia, você pode sair da confusão absoluta e construir uma visão profissional sobre seus investimentos. 
              A Jornada foi criada para quem busca método, segurança e clareza total.
            </p>

            <CountdownTimer targetDate={landingContent.eventDetails.isoDate} className="w-full max-w-2xl mb-12 mx-auto" />
            
            <div className="flex flex-col items-center gap-8">
              <CTAButton className="w-full md:w-auto min-w-[340px] py-5 text-xl shadow-accent">
                GARANTIR MINHA VAGA AGORA
              </CTAButton>
              
              <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Ambiente Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Vagas Limitadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
