import { ReactNode, MouseEvent } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';
type Size    = 'sm' | 'md';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const VARIANT_CLS: Record<Variant, string> = {
  primary:   'bg-accent text-bg border border-accent hover:bg-accent/90',
  secondary: 'bg-panel2 text-text border border-border hover:bg-border',
  ghost:     'bg-transparent text-text border border-border hover:bg-panel2',
  dark:      'bg-panel text-text border border-border hover:bg-panel2',
};

const SIZE_CLS: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
};

export default function Button({
  children, variant = 'secondary', size = 'md',
  fullWidth = false, disabled = false, onClick, className = '',
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold
        font-sans transition-all duration-150 cursor-pointer
        ${VARIANT_CLS[variant]} ${SIZE_CLS[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
