import { Link } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Aceitação dos termos',
    text: 'Ao criar uma conta no ImobiPro, você concorda com estes Termos de Uso. Se não concordar, não utilize o serviço. Estes termos regem o uso da plataforma ImobiPro e complementam nossa Política de Privacidade.',
  },
  {
    title: '2. Descrição do serviço',
    text: 'O ImobiPro é uma plataforma SaaS (Software as a Service) de gestão imobiliária que permite cadastrar imóveis, gerenciar leads, agendar visitas e acompanhar métricas. O serviço é oferecido mediante assinatura, com período de trial gratuito de 30 dias.',
  },
  {
    title: '3. Conta e responsabilidades',
    text: 'Você é responsável por manter a confidencialidade das suas credenciais de acesso e por todas as atividades realizadas em sua conta. Notifique-nos imediatamente em caso de suspeita de uso não autorizado. É proibido compartilhar credenciais entre múltiplos usuários em planos que não prevejam isso.',
  },
  {
    title: '4. Uso aceitável',
    text: 'Você se compromete a usar o ImobiPro apenas para fins legais e relacionados à gestão imobiliária legítima. É expressamente proibido: realizar engenharia reversa, utilizar o sistema para spam, violar direitos de terceiros, cadastrar dados falsos ou tentar comprometer a segurança da plataforma.',
  },
  {
    title: '5. Planos e pagamentos',
    text: 'O ImobiPro oferece planos mensais com cobrança recorrente via cartão de crédito (processado pelo Stripe). O trial de 30 dias não requer cartão. A assinatura é renovada automaticamente até que seja cancelada. O cancelamento pode ser feito a qualquer momento, com efeito no final do período pago.',
  },
  {
    title: '6. Dados e propriedade intelectual',
    text: 'Você retém a propriedade de todos os dados que inserir na plataforma (imóveis, leads, etc.). A ImobiPro concede a você uma licença limitada, não exclusiva, para usar o software. O código, design e marca ImobiPro são propriedade exclusiva da ImobiPro Tecnologia Ltda.',
  },
  {
    title: '7. Disponibilidade',
    text: 'Buscamos disponibilidade de 99,9% ao mês. Manutenções programadas serão comunicadas com antecedência. Não somos responsáveis por interrupções decorrentes de falhas em serviços de terceiros (AWS, Stripe, Cloudinary).',
  },
  {
    title: '8. Limitação de responsabilidade',
    text: 'O ImobiPro não se responsabiliza por danos indiretos, incidentais ou consequenciais. Nossa responsabilidade total em qualquer caso está limitada ao valor pago nos últimos 3 meses de assinatura.',
  },
  {
    title: '9. Rescisão',
    text: 'Podemos suspender ou encerrar sua conta em caso de violação destes termos, com ou sem aviso prévio. Em caso de encerramento por nossa iniciativa sem justa causa, reembolsaremos o valor proporcional ao período não utilizado.',
  },
  {
    title: '10. Alterações nos termos',
    text: 'Podemos atualizar estes termos com aviso prévio de 15 dias por e-mail. O uso continuado da plataforma após a data de vigência das alterações implica aceitação dos novos termos.',
  },
  {
    title: '11. Lei aplicável e foro',
    text: 'Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão dirimidas no foro da Comarca de São Paulo — SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja.',
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-600 rounded-lg p-1.5">
            <Building2 className="h-4 w-4 text-white" />
          </div>
          <span className="text-white font-bold text-lg">
            Imobi<span className="text-blue-400">Pro</span>
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Termos de Uso</h1>
        <p className="text-slate-400 text-sm mb-10">Última atualização: Junho de 2026</p>

        <div className="space-y-8">
          {sections.map(({ title, text }) => (
            <section key={title}>
              <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
            </section>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} ImobiPro — Todos os direitos reservados
        </div>
      </div>
    </div>
  );
}
