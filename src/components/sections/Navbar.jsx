import { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'Preços', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="bg-blue-600 rounded-lg p-1.5">
            <Building2 className="h-4 w-4 text-white" />
          </div>
          <span className={cn('font-bold text-lg transition-colors', scrolled ? 'text-slate-900' : 'text-white')}>
            Imobi<span className="text-blue-500">Pro</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className={cn(
              'hidden sm:block text-sm font-medium transition-colors',
              scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
            )}
          >
            Entrar
          </a>
          <a href="#pricing">
            <Button size="sm" className="rounded-full px-5 shadow-sm">
              Testar grátis
            </Button>
          </a>
          <button
            className={cn('md:hidden transition-colors', scrolled ? 'text-slate-600' : 'text-white')}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-700 hover:text-blue-600 text-sm font-medium py-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href="#" className="block text-center text-sm text-slate-600 py-2">Entrar</a>
            <a href="#pricing" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full rounded-full">Testar grátis</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
