import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'O período de teste é realmente gratuito?',
    a: 'Sim, 100% grátis por 30 dias completos com acesso a todas as funcionalidades. Não pedimos cartão de crédito — só seu e-mail para criar a conta.',
  },
  {
    q: 'Como funciona o cancelamento?',
    a: 'Cancele a qualquer momento direto nas configurações da sua conta, sem burocracia, multa ou período mínimo de fidelidade.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Todos os dados são armazenados com criptografia e backups automáticos diários. Infraestrutura em nuvem com padrão de segurança bancário.',
  },
  {
    q: 'Quantos imóveis posso cadastrar?',
    a: 'Imóveis ilimitados. Não existe limite artificial — cadastre todo o seu portfólio sem preocupação.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim. O ImobiPro é responsivo e funciona em smartphone, tablet e computador. Sem precisar instalar nenhum aplicativo.',
  },
  {
    q: 'Que suporte está incluído?',
    a: 'Suporte via chat de segunda a sexta, 9h às 18h. Respondemos em menos de 4 horas no horário comercial, sem custo adicional.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-white py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-slate-800 font-medium text-sm pr-6">{q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
