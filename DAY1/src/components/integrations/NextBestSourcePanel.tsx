import { ChevronRight } from '../common/icons';
import { useConnector } from '../../context/ConnectorContext';

export default function NextBestSourcePanel() {
  const { showToast } = useConnector();

  return (
    <div className="bg-panel2 border border-border rounded-2xl p-5 shadow-[0_4px_24px_rgba(51,209,198,0.06)]">
      <button
        onClick={() => showToast('Discovery run started!')}
        className="
          w-full py-3 rounded-xl mb-3
          bg-accent text-bg font-extrabold text-sm tracking-tight
          hover:bg-accent/90 active:scale-[0.98]
          transition-all duration-150 flex items-center justify-center gap-2
          shadow-[0_0_20px_rgba(51,209,198,0.25)]
        "
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Start Discovery Run <ChevronRight size={16} />
      </button>
      <div className="flex items-center gap-1.5 justify-center">
        <ChevronRight size={11} />
        <span className="text-[11.5px] text-muted font-sans">
          Connect 1 more source to reach{' '}
          <strong className="text-text">HIGH</strong>
        </span>
        <ChevronRight size={11} />
      </div>
    </div>
  );
}
