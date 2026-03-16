import { cn } from '@/lib/utils';
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: 'dark' | 'light';
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, theme = 'dark', label, error, ...props }, ref) => {
    const base = 'w-full px-4 py-3 text-sm font-medium transition-all duration-200';
    const themes = {
      dark: 'input-gold text-white',
      light: 'input-light text-navy',
    };
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className={cn('text-sm font-600', theme === 'dark' ? 'text-white/70' : 'text-navy/70')}>
            {label}
          </label>
        )}
        <input ref={ref} className={cn(base, themes[theme], className)} {...props} />
        {error && <span className="text-red-400 text-xs">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: 'dark' | 'light';
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, theme = 'dark', label, error, ...props }, ref) => {
    const base = 'w-full px-4 py-3 text-sm font-medium transition-all duration-200 resize-none';
    const themes = {
      dark: 'input-gold text-white',
      light: 'input-light text-navy',
    };
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className={cn('text-sm font-600', theme === 'dark' ? 'text-white/70' : 'text-navy/70')}>
            {label}
          </label>
        )}
        <textarea ref={ref} className={cn(base, themes[theme], className)} {...props} />
        {error && <span className="text-red-400 text-xs">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
