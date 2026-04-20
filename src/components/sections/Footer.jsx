import { Building2 } from 'lucide-react';

const cols = {
  Produto: [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Preços', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contato', href: '#' },
  ],
  Legal: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080e1a] border-t border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="max-w-xs">
            <a href="#hero" className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-lg p-1.5">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Imobi<span className="text-blue-400">Pro</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Gestão completa para imobiliárias e corretores autônomos. Feito no Brasil.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Sistema operacional · 99.9% uptime</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-10">
            {Object.entries(cols).map(([col, items]) => (
              <div key={col}>
                <p className="text-slate-300 font-semibold text-sm mb-4">{col}</p>
                {items.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-slate-500 hover:text-slate-300 text-sm mb-2.5 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} ImobiPro. Todos os direitos reservados.</p>
          <p className="text-slate-600 text-xs">Feito com ❤️ para o mercado imobiliário brasileiro.</p>
        </div>
      </div>
    </footer>
  );
}
