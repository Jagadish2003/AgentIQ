import { BadgeProps, BadgeVariant } from '../../types/connector';

const VARIANT_CLS: Record<BadgeVariant, string> = {
  default:   'bg-panel2 text-muted   border border-border',
  connected: 'bg-accent/10 text-accent border border-accent/30',
  regulated: 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/40',
  soon:      'bg-panel2 text-muted border border-border',
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide font-mono ${VARIANT_CLS[variant]}`}>
      {children}
    </span>
  );
}
