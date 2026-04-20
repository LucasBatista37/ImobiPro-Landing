import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    initials: 'RM',
    name: 'Ricardo Mendes',
    role: 'Diretor',
    company: 'Mendes Imóveis • São Paulo',
    quote: 'Em 2 meses usando o ImobiPro, minha taxa de conversão de leads dobrou. Antes eu tinha tudo em planilha e perdia cliente todo dia. Agora tenho controle total.',
    color: 'bg-blue-500',
  },
  {
    initials: 'CF',
    name: 'Carla Ferreira',
    role: 'Corretora autônoma',
    company: 'Belo Horizonte • MG',
    quote: 'Precisava de algo simples, sem complicação. O ImobiPro configurei em minutos e funciona perfeitamente no celular. Não consigo mais imaginar trabalhar sem ele.',
    color: 'bg-violet-500',
  },
  {
    initials: 'JS',
    name: 'João Souza',
    role: 'Sócio-fundador',
    company: 'Souza & Oliveira Imóveis • Curitiba',
    quote: 'O dashboard nos deu uma visão clara da pipeline que nunca tivemos. Minha equipe parou de perder informação e cada corretor sabe exatamente o que fazer.',
    color: 'bg-emerald-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Quem usa, recomenda
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Mais de 500 imobiliárias já transformaram sua gestão com o ImobiPro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map(({ initials, name, role, company, quote, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-7 border border-slate-200 card-hover flex flex-col"
            >
              <Quote className="h-6 w-6 text-blue-200 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{quote}"</p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{role} · {company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 py-6 border-y border-slate-200">
          {[
            { label: '4.9/5', sub: 'avaliação média' },
            { label: '500+', sub: 'imobiliárias ativas' },
            { label: '98%', sub: 'renovam a assinatura' },
            { label: '<4h', sub: 'tempo de suporte' },
          ].map(({ label, sub }) => (
            <div key={sub} className="text-center">
              <p className="text-slate-900 font-bold text-xl">{label}</p>
              <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
