import { UserX, FolderOpen, BarChart2, BadgeAlert } from 'lucide-react';

const pains = [
  {
    icon: UserX,
    title: 'Clientes que somem',
    body: 'Sem acompanhamento, leads esfriam antes de receber atenção. Cada cliente perdido é uma comissão que foi embora.',
  },
  {
    icon: FolderOpen,
    title: 'Informações espalhadas',
    body: 'Dados no WhatsApp, planilhas no PC, contratos na gaveta. Ninguém sabe onde está nada quando precisa.',
  },
  {
    icon: BarChart2,
    title: 'Gestão no escuro',
    body: 'Quantas vendas esse mês? Qual imóvel tem mais interesse? Sem dados concretos você gerencia no improviso.',
  },
  {
    icon: BadgeAlert,
    title: 'Imagem amadora',
    body: 'Clientes modernos esperam agilidade e profissionalismo. A concorrência organizada leva seus clientes.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-3">
            O problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Reconhece alguma dessas situações?
          </h2>
          <p className="text-slate-500 mt-4 text-lg leading-relaxed">
            A maioria das imobiliárias opera no improviso. Isso custa caro em clientes
            perdidos e oportunidades desperdiçadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {pains.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-slate-200 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-slate-900 font-semibold text-base">{title}</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
