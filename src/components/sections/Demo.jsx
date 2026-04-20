import { useState } from 'react';
import { Building2, Users, BarChart3, TrendingUp, Search, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'imoveis', label: 'Imóveis' },
  { id: 'leads', label: 'Leads' },
];

function DashboardContent() {
  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-900 font-semibold text-sm">Bom dia, João 👋</p>
          <p className="text-slate-400 text-xs">Segunda-feira, 20 de Abril</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bell className="h-4 w-4 text-slate-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Building2, label: 'Imóveis', value: '127', trend: '+8', color: 'blue' },
          { icon: Users, label: 'Leads', value: '43', trend: '+3', color: 'emerald' },
          { icon: TrendingUp, label: 'R$ Faturado', value: '1.2M', trend: '+12%', color: 'violet' },
        ].map(({ icon: Icon, label, value, trend, color }) => (
          <div key={label} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
            <div className={`w-7 h-7 rounded-lg bg-${color}-50 border border-${color}-100 flex items-center justify-center mb-2`}>
              <Icon className={`h-3.5 w-3.5 text-${color}-500`} />
            </div>
            <p className="text-slate-900 font-bold text-base">{value}</p>
            <p className="text-slate-400 text-xs">{label}</p>
            <p className={`text-${color}-500 text-xs font-semibold mt-0.5`}>{trend}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-slate-700 text-xs font-semibold">Leads por status</p>
          <span className="text-emerald-500 text-xs font-semibold">+24% vs mês anterior</span>
        </div>
        <div className="flex items-end gap-2 h-16">
          {[
            { h: 45, label: 'Novo', color: '#3b82f6' },
            { h: 30, label: 'Contato', color: '#8b5cf6' },
            { h: 55, label: 'Negoc.', color: '#f59e0b' },
            { h: 80, label: 'Fechado', color: '#10b981' },
            { h: 20, label: 'Perdido', color: '#ef4444' },
          ].map(({ h, label, color }) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm" style={{ height: `${h}%`, background: color, opacity: 0.85 }} />
              <span className="text-slate-400 text-[9px] hidden sm:block">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImoveisContent() {
  const items = [
    { name: 'Apt. 3Q — Moema', type: 'Venda', price: 'R$ 850.000', status: 'Ativo', statusColor: 'text-emerald-600 bg-emerald-50' },
    { name: 'Casa 4Q — Alphaville', type: 'Venda', price: 'R$ 1.200.000', status: 'Reservado', statusColor: 'text-amber-600 bg-amber-50' },
    { name: 'Studio — Pinheiros', type: 'Aluguel', price: 'R$ 3.500/mês', status: 'Ativo', statusColor: 'text-emerald-600 bg-emerald-50' },
    { name: 'Cobertura — Itaim', type: 'Venda', price: 'R$ 2.100.000', status: 'Vendido', statusColor: 'text-slate-500 bg-slate-100' },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 p-4 border-b border-slate-100">
        <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
          <Search className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-400 text-xs">Buscar imóveis...</span>
        </div>
        <button className="bg-blue-600 text-white text-xs px-3 py-2 rounded-lg font-medium">+ Novo</button>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((p) => (
          <div key={p.name} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Building2 className="h-3.5 w-3.5 text-blue-500" />
              </div>
              <div>
                <p className="text-slate-800 text-sm font-medium">{p.name}</p>
                <p className="text-slate-400 text-xs">{p.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-slate-900 text-sm font-semibold hidden sm:block">{p.price}</p>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${p.statusColor}`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadsContent() {
  const leads = [
    { initials: 'MT', name: 'Marcos Teixeira', interest: 'Apt. Moema', status: 'Novo', statusColor: 'text-blue-600 bg-blue-50', avatarBg: 'bg-blue-500', time: '2h' },
    { initials: 'AP', name: 'Ana Paula', interest: 'Casa Alphaville', status: 'Negociando', statusColor: 'text-violet-600 bg-violet-50', avatarBg: 'bg-violet-500', time: '1d' },
    { initials: 'RL', name: 'Roberto Lima', interest: 'Studio Pinheiros', status: 'Fechado', statusColor: 'text-emerald-600 bg-emerald-50', avatarBg: 'bg-emerald-500', time: '3d' },
    { initials: 'CS', name: 'Carla Silva', interest: 'Cobertura Itaim', status: 'Contato', statusColor: 'text-amber-600 bg-amber-50', avatarBg: 'bg-amber-500', time: '5h' },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 p-4 border-b border-slate-100">
        <div className="flex gap-1.5 text-xs">
          {['Todos', 'Novo', 'Negociando', 'Fechado'].map((f, i) => (
            <button key={f} className={cn('px-2.5 py-1 rounded-full font-medium transition-colors', i === 0 ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-100')}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {leads.map((l) => (
          <div key={l.name} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${l.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                {l.initials}
              </div>
              <div>
                <p className="text-slate-800 text-sm font-medium">{l.name}</p>
                <p className="text-slate-400 text-xs">{l.interest}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-xs hidden sm:block">{l.time}</span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${l.statusColor}`}>{l.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const contentMap = { dashboard: DashboardContent, imoveis: ImoveisContent, leads: LeadsContent };

export default function Demo() {
  const [active, setActive] = useState('dashboard');
  const Content = contentMap[active];

  return (
    <section id="demo" className="bg-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Demonstração
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Veja o sistema em ação
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Interface limpa e intuitiva. Sem curva de aprendizado.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex bg-slate-100 rounded-xl p-1 gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  'px-5 py-2 rounded-lg text-sm font-medium transition-all',
                  active === t.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Browser frame */}
        <div className="mt-6 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 h-10 bg-slate-50 border-b border-slate-200">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-md text-xs text-slate-400 px-3 py-1 text-center">
              app.imobipro.com.br/{active}
            </div>
          </div>

          <div key={active}>
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}
