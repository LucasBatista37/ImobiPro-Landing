import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
        outline: 'border border-current text-current',
        success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
        muted: 'bg-slate-700 text-slate-300',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
