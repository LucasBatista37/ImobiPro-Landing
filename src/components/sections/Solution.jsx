import { CheckCircle2, ArrowRight, Building2, Users, TrendingUp, Bell } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const points = [
  'Feito para o mercado imobiliário brasileiro',
  'Interface simples — sem treinamento necessário',
  'Funciona no celular, tablet e computador',
  'Dados seguros com backup automático diário',
];

export default function Solution() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — UI mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-50 to-violet-50 rounded-3xl" />

            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 rounded-md p-1">
                    <Building2 className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-600 text-xs font-medium">Online</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Building2, label: 'Imóveis', value: '127', sub: '+8 novos', color: 'blue' },
                    { icon: Users, label: 'Leads', value: '43', sub: '3 hoje', color: 'emerald' },
                    { icon: TrendingUp, label: 'Fechados', value: 'R$ 1.2M', sub: 'este mês', color: 'violet' },
                  ].map(({ icon: Icon, label, value, sub, color }) => (
                    <div key={label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <Icon className={`h-4 w-4 text-${color}-500 mb-2`} />
                      <p className="text-slate-900 font-bold text-sm">{value}</p>
                      <p className="text-slate-400 text-xs">{label}</p>
                      <p className={`text-${color}-500 text-xs mt-1 font-medium`}>{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Notification item */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3.5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <Bell className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-sm font-medium">Novo lead recebido</p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Marcos Teixeira — interesse em Apartamento 3 quartos, Moema
                    </p>
                    <p className="text-blue-500 text-xs mt-1.5 font-medium cursor-pointer">
                      Ver lead →
                    </p>
                  </div>
                </div>

                {/* Property list */}
                <div className="space-y-2">
                  {[
                    { name: 'Apto 3Q — Moema', price: 'R$ 850k', status: 'Ativo', dot: 'bg-emerald-400' },
                    { name: 'Casa 4Q — Alphaville', price: 'R$ 1.2M', status: 'Reservado', dot: 'bg-amber-400' },
                    { name: 'Studio — Pinheiros', price: 'R$ 420k', status: 'Vendido', dot: 'bg-slate-400' },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${p.dot} shrink-0`} />
                        <span className="text-slate-700 text-sm">{p.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-900 text-sm font-semibold">{p.price}</span>
                        <span className="text-slate-400 text-xs">{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              A solução
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Um sistema pensado para
              <br />
              <span className="gradient-text">quem vende imóveis</span>
            </h2>
            <p className="text-slate-500 mt-5 text-lg leading-relaxed">
              O ImobiPro não é um CRM genérico adaptado. É uma ferramenta construída
              especificamente para imobiliárias e corretores brasileiros.
            </p>

            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <a href="#pricing" className="inline-block mt-8">
              <Button size="lg" className="rounded-full gap-2 shadow-md shadow-blue-500/20">
                Experimentar grátis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
