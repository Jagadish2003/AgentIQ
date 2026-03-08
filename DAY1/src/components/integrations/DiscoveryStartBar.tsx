import { useNavigate } from 'react-router-dom';
import { UploadArrow, JiraIcon, M365Icon } from '../common/icons';
import { CONFIDENCE_LABELS, CONFIDENCE_POSITIONS, getConfidenceLabel } from '../../utils/confidence';

interface Props { confidence: number }

export default function DiscoveryStartBar({ confidence }: Props) {
  const navigate = useNavigate();
  const level = getConfidenceLabel(confidence);

  return (
    <div className="bg-panel border border-border rounded-2xl px-5 py-4 flex items-center gap-5">

      {/* Slider */}
      <div className="flex-1 min-w-0">
        <div className="relative h-5 flex items-center">
          <div className="w-full h-0.5 bg-border rounded relative">
            <div className="absolute left-0 h-full bg-accent rounded" style={{ width: `${confidence}%` }} />
          </div>
          <div className="absolute w-4 h-4 bg-accent rounded-full shadow-[0_0_8px_rgba(51,209,198,0.5)]"
            style={{ left: `calc(${confidence}% - 8px)` }} />
        </div>
        <div className="flex justify-between mt-1">
          {CONFIDENCE_LABELS.map((l) => (
            <span key={l} className={`text-[10px] font-semibold tracking-widest font-mono ${confidence === CONFIDENCE_POSITIONS[l] ? 'text-accent' : 'text-muted/50'}`}>
              {l}
            </span>
          ))}
        </div>
      </div>

      <Divider />

      <div className="flex items-center gap-2.5 flex-shrink-0">
        <span className="text-xs text-muted font-sans">Connect: 1 of 3 recommended</span>
        <span className="text-[11px] font-semibold text-accent font-mono bg-accent/10 px-2 py-0.5 rounded">ReCx</span>
      </div>

      <Divider />

      <button
        onClick={() => navigate('/source-intake')}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-panel2 text-xs font-semibold text-text hover:bg-border transition-colors flex-shrink-0"
      >
        <UploadArrow /> Upload Files Instead
      </button>

      {/* Integration chips */}
      <div className="flex items-center gap-3">
        {[
          { icon: <JiraIcon />,  label: 'Jira' },
          { icon: <M365Icon />,  label: 'Microsoft 365' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
            {item.icon}
            <span className="text-xs font-semibold text-text">{item.label}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <span className="text-[11px] text-muted font-mono">Not Connected</span>
          </div>
        ))}
      </div>

      <Divider />

      <span className="text-[11.5px] font-semibold text-muted font-mono whitespace-nowrap flex-shrink-0">
        CONFIDENCE: <span className="text-accent">{level.charAt(0) + level.slice(1).toLowerCase()}</span>
      </span>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-10 bg-border flex-shrink-0" />;
}
