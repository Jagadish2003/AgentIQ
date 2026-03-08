import React from 'react';
type Variant = 'primary' | 'secondary' | 'ghost';

export default function Button({
  children, onClick, disabled, variant = 'primary', className = '', title
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  variant?: Variant;
  className?: string;
  title?: string;
}) {
  const base = 'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition border';
  const variants: Record<Variant, string> = {
    primary:   'bg-white border-border text-text hover:bg-panel2 disabled:opacity-40',
    secondary: 'bg-white border-border text-text hover:bg-panel2 disabled:opacity-40',
    ghost:     'border-transparent text-text hover:bg-panel2 disabled:opacity-40',
  };
  return (
    <button
      title={title}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}