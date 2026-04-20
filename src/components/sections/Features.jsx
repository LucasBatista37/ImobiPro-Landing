import { TrendingUp, Bell, Clock, Smartphone, BarChart3, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mais vendas, menos esforço',
    body: 'Com tudo organizado e visível, você fecha mais negócios sem trabalhar mais horas.',
    color: 'blue',
  },
  {
    icon: Bell,
    title: 'Nunca perca um lead',
    body: 'Histórico completo de cada contato. Saiba exatamente em que ponto está cada negociação.',
    color: 'violet',
  },
  {
    icon: Clock,
    title: 'Resposta mais rápida',
    body: 'Velocidade é o fator #1 na conversão. Com o ImobiPro, você responde antes da concorrência.',
    color: 'amber',
  },
  {
    icon: Smartphone,
    title: 'Trabalhe de qualquer lugar',
    body: 'Visite um imóvel e atualize as informações pelo celular em tempo real.',
    color: 'emerald',
  },
  {
    icon: BarChart3,
    title: 'Decisões baseadas em dados',
    body: 'Saiba quais imóveis têm mais interesse e onde focar seus esforços de venda.',
    color: 'blue',
  },
  {
    icon: ShieldCheck,
    title: 'Imagem profissional',
    body: 'Clientes percebem e preferem imobiliárias organizadas, ágeis e confiáveis.',
    color: 'emerald',
  },
];

const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600', hover: 'group-hover:bg-blue-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600', hover: 'group-hover:bg-violet-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600', hover: 'group-hover:bg-amber-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600', hover: 'group-hover:bg-emerald-600' },
};

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            O que muda na sua imobiliária
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Não são funcionalidades técnicas. São resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {benefits.map(({ icon: Icon, title, body, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 border border-slate-200 card-hover cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5 transition-colors ${c.hover}`}>
                  <Icon className={`h-5 w-5 ${c.icon} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-slate-900 font-semibold text-base">{title}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
