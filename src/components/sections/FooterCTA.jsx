import { Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function FooterCTA() {
  return (
    <section className="bg-[#0c1120] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center px-4">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Comece agora
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Pronto para transformar
          <br />
          <span className="gradient-text-light">sua imobiliária?</span>
        </h2>
        <p className="text-slate-400 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
          Mais de 500 imobiliárias já escolheram o ImobiPro.
          Junte-se a elas e comece a vender mais hoje mesmo.
        </p>

        <a href="#pricing" className="inline-block mt-8">
          <Button
            size="lg"
            variant="white"
            className="rounded-full gap-2 h-14 text-base px-10 font-bold shadow-xl"
          >
            <Zap className="h-5 w-5" />
            Começar grátis — sem cartão
          </Button>
        </a>

        <div className="flex flex-wrap justify-center gap-5 mt-8">
          {['30 dias grátis', 'Cancele quando quiser', 'Suporte incluído'].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-slate-400 text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
