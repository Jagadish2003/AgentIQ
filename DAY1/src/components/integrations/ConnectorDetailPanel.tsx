import { CheckIcon, ChevronRight, ExternalLink, CMDBIcon, TicketIcon, LogIcon } from '../common/icons';
import { AccessItem } from '../../types/connector';

const ACCESS_ITEMS: AccessItem[] = [
  { icon: <CMDBIcon />,   label: 'CMDB items',       arrow: true  },
  { icon: <TicketIcon />, label: 'Incident Tickets',  arrow: false },
  { icon: <LogIcon />,    label: 'Change Logs',       arrow: false },
];

export default function ConnectorDetailPanel() {
  return (
    <div className="bg-panel border border-border rounded-2xl p-5">
      <h3 className="text-sm font-extrabold text-text mb-3.5" style={{ fontFamily: "'Syne', sans-serif" }}>
        ServiceNow Integration
      </h3>

      {/* Connected + timestamp */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5 bg-accent/10 border border-accent/30 px-3 py-1 rounded-lg">
          <CheckIcon />
          <span className="text-xs font-bold text-accent">Connected</span>
        </div>
        <span className="text-[11px] text-muted font-mono">3m ago</span>
      </div>

      {/* Learn more */}
      <button className="flex items-center gap-1 text-xs font-semibold text-muted hover:text-accent transition-colors mb-4">
        Learn More <ExternalLink />
      </button>

      {/* Access as */}
      <p className="text-[11px] font-semibold text-muted/60 tracking-widest font-mono mb-2.5">ACCESS AS:</p>

      <div className="flex flex-col gap-2 mb-4">
        {ACCESS_ITEMS.map((item, i) => (
          <div key={i}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors
              ${i === 0 ? 'bg-panel2 border border-border' : 'hover:bg-panel2'}`}
          >
            {item.icon}
            <span className="text-[13px] font-semibold text-text flex-1 font-sans">{item.label}</span>
            {item.arrow && <ChevronRight />}
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="w-full py-2.5 rounded-xl border border-border bg-panel2 hover:bg-border text-sm font-bold text-text transition-colors flex items-center justify-center gap-1.5">
        Configure & Sync <ExternalLink />
      </button>
    </div>
  );
}
