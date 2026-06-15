import { Link } from 'react-router-dom';
import { Building2, ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Quem somos',
    text: 'O ImobiPro é uma plataforma SaaS de gestão imobiliária operada pela ImobiPro Tecnologia Ltda. ("nós", "nosso"). Este documento descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).',
  },
  {
    title: '2. Dados que coletamos',
    text: 'Coletamos dados fornecidos diretamente por você ao criar conta (nome, e-mail, nome da imobiliária), dados de uso do sistema (imóveis, leads, visitas) e, quando habilitado, dados de localização de imóveis para fins de geolocalização. Não coletamos dados sensíveis conforme definição da LGPD (art. 5º, II).',
  },
  {
    title: '3. Finalidade do tratamento',
    text: 'Seus dados são utilizados exclusivamente para: (a) prestação do serviço contratado; (b) envio de comunicações relacionadas à conta (verificação de e-mail, redefinição de senha); (c) melhoria do produto e suporte ao usuário; (d) cumprimento de obrigações legais.',
  },
  {
    title: '4. Base legal',
    text: 'O tratamento de dados é fundamentado em: consentimento (art. 7º, I) obtido no ato do cadastro; execução de contrato (art. 7º, V) para prestação do serviço; e legítimo interesse (art. 7º, IX) para segurança e prevenção de fraudes.',
  },
  {
    title: '5. Compartilhamento de dados',
    text: 'Seus dados podem ser compartilhados com: Stripe (processamento de pagamentos), Cloudinary (armazenamento de imagens), servidores de nuvem na AWS. Não vendemos nem cedemos seus dados a terceiros para fins publicitários.',
  },
  {
    title: '6. Retenção de dados',
    text: 'Mantemos seus dados enquanto a conta estiver ativa. Após solicitação de exclusão, anonimizamos os dados pessoais em até 30 dias, mantendo apenas registros necessários para obrigações legais e fiscais pelo prazo exigido em lei.',
  },
  {
    title: '7. Seus direitos (Art. 18 LGPD)',
    text: 'Você tem direito a: confirmar a existência do tratamento, acessar seus dados, corrigir dados incompletos, anonimizar ou excluir dados desnecessários, revogar o consentimento, e portabilidade dos dados. Para exercer esses direitos, entre em contato via contato@imobipro.com.br.',
  },
  {
    title: '8. Segurança',
    text: 'Adotamos medidas técnicas e administrativas para proteger seus dados: criptografia em trânsito (HTTPS/TLS 1.2+), hashing de senhas com bcrypt, tokens de autenticação com expiração, controle de acesso por tenant e registro de auditoria.',
  },
  {
    title: '9. Cookies',
    text: 'Utilizamos cookies estritamente necessários para funcionamento do sistema. Caso a analytics esteja habilitada (Google Analytics 4 / Meta Pixel), cookies de desempenho são utilizados mediante consentimento explícito.',
  },
  {
    title: '10. Alterações nesta política',
    text: 'Podemos atualizar esta política periodicamente. Notificaremos usuários por e-mail com antecedência mínima de 15 dias antes de alterações significativas.',
  },
  {
    title: '11. Contato — DPO',
    text: 'Para dúvidas, solicitações de direitos ou reclamações, entre em contato com nosso Encarregado de Dados (DPO): lgpd@imobipro.com.br. Você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD) em www.gov.br/anpd.',
  },
];

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidade</h1>
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
