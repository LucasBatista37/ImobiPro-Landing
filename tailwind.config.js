/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: [
    'text-blue-500', 'text-violet-500', 'text-emerald-500', 'text-amber-500',
    'text-blue-600', 'text-violet-600', 'text-emerald-600', 'text-amber-600',
    'text-blue-400', 'text-violet-400', 'text-emerald-400', 'text-amber-400',
    'bg-blue-50', 'bg-violet-50', 'bg-emerald-50', 'bg-amber-50',
    'bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500',
    'bg-blue-600', 'bg-violet-600', 'bg-emerald-600', 'bg-amber-600',
    'border-blue-100', 'border-violet-100', 'border-emerald-100', 'border-amber-100',
    'group-hover:bg-blue-600', 'group-hover:bg-violet-600', 'group-hover:bg-emerald-600', 'group-hover:bg-amber-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
