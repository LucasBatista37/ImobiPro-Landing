import { CheckCircle2, Zap, ShieldCheck, Headphones, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const APP_URL = import.meta.env.VITE_APP_URL ?? '';

const SHARED_FEATURES = [
  'Leads ilimitados',
  'Dashboard com relatórios',
  'Acesso pelo celular',
  'Upload de fotos dos imóveis',
  'API Key para integração com o site',
  'Suporte via email',
];

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 47,
    maxProperties: 30,
    description: 'Ideal para corretores autônomos',
    highlight: false,
    cta: 'Começar grátis',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 97,
    maxProperties: 150,
    description: 'Para imobiliárias em crescimento',
    highlight: true,
    cta: 'Começar grátis',
  },
  {
    id: 'unlimited',
    name: 'Ilimitado',
    price: 197,
    maxProperties: null,
    description: 'Para imobiliárias estabelecidas',
    highlight: false,
    cta: 'Começar grátis',
  },
];

const trust = [
  { icon: ShieldCheck, label: 'Dados criptografados' },
  { icon: Headphones, label: 'Suporte em até 4h' },
  { icon: RefreshCw, label: 'Cancele quando quiser' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Simples e sem surpresas
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            30 dias grátis em qualquer plano. Sem cartão de crédito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                'rounded-2xl p-7 border flex flex-col',
                plan.highlight
                  ? 'bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10 relative'
                  : 'bg-white border-slate-200 shadow-sm'
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                  ★ Mais popular
                </span>
              )}

              <div className="mb-6">
                <p className="text-slate-900 font-bold text-lg">{plan.name}</p>
                <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-900">R$ {plan.price}</span>
                  <span className="text-slate-400 mb-1">/mês</span>
                </div>
                <p className="text-slate-500 text-xs mt-1">
                  {plan.maxProperties
                    ? `até ${plan.maxProperties} imóveis`
                    : 'imóveis ilimitados'}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                <li className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                  {plan.maxProperties ? `Até ${plan.maxProperties} imóveis` : 'Imóveis ilimitados'}
                </li>
                {SHARED_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={`${APP_URL}/register`} className="block">
                <Button
                  size="lg"
                  className={cn(
                    'w-full rounded-full gap-2',
                    plan.highlight ? 'shadow-md shadow-blue-500/25' : ''
                  )}
                  variant={plan.highlight ? 'default' : 'outline'}
                >
                  {plan.highlight ? <Zap className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  {plan.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Todos os planos incluem 30 dias grátis · Cancele quando quiser · Sem taxa de adesão
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-500 text-sm justify-center">
              <Icon className="h-4 w-4 text-slate-400 shrink-0" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
