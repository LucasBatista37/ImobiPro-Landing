import { UserPlus, Upload, TrendingUp } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: UserPlus,
    title: 'Cadastre sua imobiliária',
    body: 'Crie sua conta e configure tudo em menos de 5 minutos. Sem precisar de suporte técnico ou instalação.',
    color: 'blue',
  },
  {
    n: '02',
    icon: Upload,
    title: 'Importe seus dados',
    body: 'Traga imóveis e leads de planilhas ou outros sistemas. Nossa importação é simples e não perde nenhum dado.',
    color: 'violet',
  },
  {
    n: '03',
    icon: TrendingUp,
    title: 'Venda mais',
    body: 'Acompanhe cada lead na pipeline, defina follow-ups e feche mais negócios com clareza e agilidade.',
    color: 'emerald',
  },
];

const colorMap = {
  blue: { num: 'text-blue-600', bg: 'bg-blue-600', light: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600' },
  violet: { num: 'text-violet-600', bg: 'bg-violet-600', light: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600' },
  emerald: { num: 'text-emerald-600', bg: 'bg-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600' },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Comece a usar em 5 minutos
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Sem complicação, sem necessidade de suporte técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 relative">
          {/* Connector line */}
          <div className="absolute top-9 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px border-t-2 border-dashed border-slate-200 hidden md:block" />

          {steps.map(({ n, icon: Icon, title, body, color }) => {
            const c = colorMap[color];
            return (
              <div key={n} className="flex flex-col items-center text-center relative">
                <div className={`w-16 h-16 rounded-2xl ${c.light} border ${c.border} flex items-center justify-center mb-5 relative z-10`}>
                  <Icon className={`h-7 w-7 ${c.icon}`} />
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${c.bg} text-white text-xs font-bold flex items-center justify-center`}>
                    {n[1]}
                  </span>
                </div>
                <h3 className="text-slate-900 font-semibold text-lg">{title}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xs">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
