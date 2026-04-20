import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const stats = [
  { value: '500+', label: 'imobiliárias ativas' },
  { value: 'R$ 2.4M', label: 'em negociação hoje' },
  { value: '98%', label: 'de satisfação' },
];

const checks = [
  '30 dias grátis, sem cartão',
  'Configuração em 5 minutos',
  'Cancele quando quiser',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#0c1120] overflow-hidden"
      style={{ marginTop: '-1px' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-400 text-xs font-semibold tracking-wide">
                +500 imobiliárias já usam o ImobiPro
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] tracking-tight">
              Venda mais imóveis
              <br />
              com{' '}
              <span className="gradient-text-light">mais organização</span>
            </h1>

            <p className="text-slate-400 text-lg mt-5 leading-relaxed max-w-lg">
              Centralize imóveis, leads e negociações em um só lugar. Pare de perder clientes
              por falta de controle e feche mais negócios todo mês.
            </p>

            <ul className="mt-6 space-y-2">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="#pricing">
                <Button size="lg" className="rounded-full gap-2 px-7 shadow-lg shadow-blue-500/25 w-full sm:w-auto">
                  <Zap className="h-4 w-4" />
                  Começar grátis agora
                </Button>
              </a>
              <a href="#demo">
                <Button size="lg" variant="ghost" className="rounded-full gap-1.5 text-slate-300 hover:text-white hover:bg-white/10 w-full sm:w-auto">
                  Ver demonstração
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 h-9 bg-[#1a2234] border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <div className="flex-1 mx-3 bg-[#0d1627] rounded text-xs text-slate-500 px-3 py-0.5 text-center">
                  app.imobipro.com.br
                </div>
              </div>

              {/* App content */}
              <div className="p-4 space-y-3">
                {/* Top stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Imóveis', value: '127', color: 'text-blue-400' },
                    { label: 'Leads', value: '43', color: 'text-emerald-400' },
                    { label: 'Fechados', value: '12', color: 'text-violet-400' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#1a2234] rounded-lg p-3">
                      <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="bg-[#1a2234] rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs font-medium">Leads por mês</span>
                    <span className="text-emerald-400 text-xs font-semibold">+24%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-14">
                    {[35, 55, 42, 68, 80, 62, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 6
                            ? 'linear-gradient(to top, #2563eb, #60a5fa)'
                            : '#1e3a5f',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Lead list */}
                <div className="bg-[#1a2234] rounded-lg divide-y divide-white/5">
                  {[
                    { name: 'Marcos Teixeira', status: 'Novo', color: 'bg-blue-500' },
                    { name: 'Ana Paula', status: 'Negociando', color: 'bg-violet-500' },
                    { name: 'Roberto Lima', status: 'Fechado', color: 'bg-emerald-500' },
                  ].map((l) => (
                    <div key={l.name} className="flex items-center justify-between px-3 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-6 h-6 rounded-full ${l.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                          {l.name[0]}
                        </div>
                        <span className="text-slate-300 text-xs">{l.name}</span>
                      </div>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        l.status === 'Novo' ? 'bg-blue-500/15 text-blue-400' :
                        l.status === 'Negociando' ? 'bg-violet-500/15 text-violet-400' :
                        'bg-emerald-500/15 text-emerald-400'
                      }`}>{l.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
