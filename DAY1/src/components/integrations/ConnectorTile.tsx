import { PrimaryCardProps } from '../../types/connector';

export default function ConnectorTile({ icon, title, stats, actions, selected, onClick }: PrimaryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex-1 min-w-0 rounded-xl p-4 cursor-pointer transition-all duration-150
        border bg-panel2
        ${selected
          ? 'border-accent shadow-[0_0_0_1px_#33D1C6,0_4px_16px_rgba(51,209,198,0.12)]'
          : 'border-border hover:border-muted/40'}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3.5">
        {icon}
        <span className="text-[15px] font-bold text-text" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </span>
      </div>

      {/* Stats */}
      <div className="mb-3.5 space-y-1.5">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.connected ? 'bg-accent' : 'bg-border'}`} />
            <span className="text-[13px] text-muted font-sans">
              {s.bold && <strong className="text-text font-bold">{s.bold} </strong>}
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); a.onClick?.(); }}
            className={`
              px-3 py-1.5 rounded-lg text-xs font-semibold font-sans
              border border-border transition-all duration-100
              ${i === 0
                ? 'bg-panel text-text hover:bg-border hover:border-muted/40'
                : 'bg-transparent text-muted hover:bg-panel hover:text-text'}
            `}
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}
