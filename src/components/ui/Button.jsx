import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-indigo-600 text-white hover:bg-indigo-700',
        outline: 'border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white',
        ghost: 'text-slate-400 hover:text-white hover:bg-slate-800',
        white: 'bg-white text-indigo-600 hover:bg-indigo-50',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-9 px-4 text-sm',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
