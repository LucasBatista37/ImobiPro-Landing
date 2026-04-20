import { CheckCircle2, Zap, ShieldCheck, Headphones, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
  'Imóveis ilimitados',
  'Leads e pipeline ilimitados',
  'Dashboard com relatórios',
  'Acesso pelo celular',
  'Importação de planilhas',
  'Múltiplos usuários (até 5)',
  'Suporte via chat',
  'Atualizações incluídas',
];

const trust = [
  { icon: ShieldCheck, label: 'Dados seguros com criptografia' },
  { icon: Headphones, label: 'Suporte em até 4 horas' },
  { icon: RefreshCw, label: 'Cancele quando quiser' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Simples e sem surpresas
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Um plano completo com tudo que você precisa para crescer.
          </p>
        </div>

        <div className="mt-10 max-w-md mx-auto">
          {/* Trial banner */}
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-5 text-center mb-4 shadow-lg shadow-blue-500/20">
            <p className="text-white font-bold text-2xl">30 dias totalmente grátis</p>
            <p className="text-blue-100 text-sm mt-1">Acesso completo. Sem cartão de crédito.</p>
          </div>

          {/* Pricing card */}
          <div className="bg-white rounded-2xl border-2 border-blue-500 p-8 shadow-xl relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
              ★ Mais popular
            </span>

            <div className="text-center mb-7">
              <p className="text-slate-500 text-sm">Após o período de teste:</p>
              <div className="mt-2 flex items-end justify-center gap-1">
                <span className="text-5xl font-bold text-slate-900">R$ 97</span>
                <span className="text-slate-400 text-lg mb-1">/mês</span>
              </div>
              <p className="text-slate-400 text-xs mt-1">Sem taxa de adesão · Cancele quando quiser</p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-slate-700 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://app.imobipro.com.br/register" className="block">
              <Button size="lg" className="w-full rounded-full gap-2 h-13 text-base shadow-md shadow-blue-500/25">
                <Zap className="h-5 w-5" />
                Começar meu teste grátis
              </Button>
            </a>

            <p className="text-center text-xs text-slate-400 mt-3">
              Ao criar conta você concorda com os Termos de Uso e Política de Privacidade.
            </p>
          </div>

          {/* Trust items */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-6">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500 text-sm">
                <Icon className="h-4 w-4 text-slate-400 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
