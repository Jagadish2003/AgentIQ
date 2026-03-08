import Badge from '../common/Badge';
import { CheckIcon, SAPIcon, GitHubIcon, SlackIcon, DataBricksIcon } from '../common/icons';
import { CoverageCardProps } from '../../types/connector';
import { useConnector } from '../../context/ConnectorContext';

function CoverageCard({ icon, title, objectLabel }: CoverageCardProps) {
  const { showToast } = useConnector();
  return (
    <div className="flex-1 min-w-0 bg-panel2 border border-border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2.5">
        {icon}
        <span className="text-sm font-bold text-text" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</span>
      </div>
      <div className="flex items-center gap-1.5 mb-2 text-accent text-xs font-semibold">
        <CheckIcon /> Connected
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 bg-panel border border-border rounded-md mb-2.5">
        <div className="w-2.5 h-2.5 bg-border rounded-sm" />
        <span className="text-xs text-muted font-mono">{objectLabel}</span>
      </div>
      <button
        onClick={() => showToast(`Viewing data — ${title}`)}
        className="w-full py-1.5 rounded-lg border border-border bg-panel text-xs font-semibold text-text hover:bg-border transition-colors flex items-center justify-center gap-1.5"
      >
        <CheckIcon /> View data
      </button>
    </div>
  );
}

export default function ConnectorGridSection() {
  return (
    <div className="bg-panel border border-border rounded-2xl p-5">
      <h3 className="text-[15px] font-bold text-text mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
        Add more coverage
      </h3>
      <div className="flex gap-3">
        <CoverageCard icon={<SAPIcon />}    title="SAP"    objectLabel="Object 1" />
        <CoverageCard icon={<GitHubIcon />} title="GitHub" objectLabel="Object 2" />
        <CoverageCard icon={<SlackIcon />}  title="Slack"  objectLabel="Object 2" />

        {/* Databricks – Coming Soon */}
        <div className="flex-1 min-w-0 bg-bg border border-border rounded-xl p-4 relative opacity-70">
          <div className="absolute top-3 right-3">
            <Badge variant="regulated">Regulated</Badge>
          </div>
          <div className="flex items-center gap-2 mb-2.5">
            <DataBricksIcon />
            <span className="text-sm font-bold text-muted" style={{ fontFamily: "'Syne', sans-serif" }}>Databricks</span>
          </div>
          <p className="text-xs font-bold text-muted mb-1">Coming soon</p>
          <p className="text-[11.5px] text-muted/70 leading-relaxed mb-3">
            Deviations triage, Change control, Doc review
          </p>
          <div className="flex gap-1.5">
            {(['Regulated', 'Coming soon'] as const).map((lbl) => (
              <button key={lbl} disabled
                className="px-2.5 py-1 rounded-md border border-border bg-panel text-[11px] font-semibold text-muted/50 cursor-not-allowed">
                {lbl}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            {[0, 1].map((i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-border" />)}
            <span className="text-[11px] text-muted/50 font-mono">Service Name</span>
          </div>
        </div>
      </div>
    </div>
  );
}
