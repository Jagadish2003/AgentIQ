import { ArrowUp, ServiceNowIcon, JiraIcon, M365Icon } from '../common/icons';
import { useConnector } from '../../context/ConnectorContext';
import { CONFIDENCE_LABELS, CONFIDENCE_POSITIONS, getConfidenceLabel } from '../../utils/confidence';

export default function HeroConnectorSection() {
  const { confidence } = useConnector();
  const level = getConfidenceLabel(confidence);

  return (
    <div className="bg-panel border border-border rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <ArrowUp />
        <span className="text-sm font-bold text-text" style={{ fontFamily: "'Syne', sans-serif" }}>Confidence</span>
        <div className="flex-1 relative h-5 flex items-center">
          <div className="w-full h-0.5 bg-border rounded relative">
            <div className="absolute left-0 h-full bg-accent rounded" style={{ width: `${confidence}%` }} />
          </div>
          <div className="absolute w-3.5 h-3.5 bg-accent rounded-full shadow-[0_0_6px_rgba(51,209,198,0.4)]"
            style={{ left: `calc(${confidence}% - 7px)` }} />
        </div>
      </div>

      <div className="flex justify-between mb-3">
        {CONFIDENCE_LABELS.map((l) => (
          <span key={l} className={`text-[10px] font-semibold tracking-widest font-mono
            ${confidence === CONFIDENCE_POSITIONS[l] ? 'text-accent' : 'text-muted/40'}`}>
            {l}
          </span>
        ))}
      </div>

      <p className="text-xs text-muted mb-3 font-sans">Connected of 3 recommended</p>

      {/* Ready card */}
      <div className="bg-panel2 border border-border rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-6 h-6 bg-bg border border-border rounded-md flex items-center justify-center">
            <ServiceNowIcon />
          </div>
          <div>
            <span className="text-xs font-semibold text-text">Ready to Start. </span>
            <span className="text-[10.5px] font-bold text-muted font-mono">SERVICE NOW</span>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {[
            { icon: <JiraIcon />,  label: 'Jira',          sub: undefined },
            { icon: <M365Icon />,  label: 'MICROSOFT 365', sub: 'Not Connected' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1 bg-panel border border-border px-2 py-0.5 rounded-md">
              {item.icon}
              <span className="text-[10.5px] font-semibold text-text font-mono">{item.label}</span>
              {item.sub && (
                <>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-[10px] text-muted font-mono">{item.sub}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-muted/50 font-mono text-center mt-3">
        Current level: <strong className="text-accent">{level.charAt(0) + level.slice(1).toLowerCase()}</strong>
      </p>
    </div>
  );
}
