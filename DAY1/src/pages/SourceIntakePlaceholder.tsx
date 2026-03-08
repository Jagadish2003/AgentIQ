import { useNavigate } from 'react-router-dom';
import { ChevronRight } from '../components/common/icons';

export default function SourceIntakePlaceholder() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-4 font-sans">
      <p className="text-[11px] font-semibold text-muted/50 tracking-[0.08em] font-mono uppercase">
        Coming Soon
      </p>
      <h2 className="text-2xl font-extrabold text-text tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
        Source Intake
      </h2>
      <button
        onClick={() => navigate('/integration-hub')}
        className="flex items-center gap-1.5 px-4 py-2 mt-2 rounded-lg border border-border bg-panel text-sm font-semibold text-muted hover:text-text hover:bg-panel2 transition-colors"
      >
        <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}><ChevronRight /></span>
        Back to Integration Hub
      </button>
    </div>
  );
}
