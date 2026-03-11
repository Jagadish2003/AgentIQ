import React from 'react';
import Button from '../common/Button';
import { EvidenceReview } from '../../types/partialResults';
import { Monitor } from 'lucide-react';

interface EvidenceViewerProps {
  evidence: EvidenceReview | null;
  positionLabel: string;
  onPrev: () => void;
  onNext: () => void;
  onApprove: () => void;
  onReject: () => void;
}

const EvidenceViewer: React.FC<EvidenceViewerProps> = ({
  evidence,
  positionLabel,
  onPrev,
  onNext,
  onApprove,
  onReject
}) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-panel p-5">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="text-xl font-semibold text-text pb-3">Evidence Viewer</div>
        <Monitor className="h-5 w-5 text-slate-400" />
      </div>

      {!evidence ? (
        <div className="mt-4 text-sm text-muted">Select an evidence snippet to view details.</div>
      ) : (
        <div className="mt-4 flex flex-1 flex-col gap-4">
          <div>
            <div className="mb-1 text-xs text-muted">{evidence.tsLabel}</div>
            <div className="text-sm font-semibold leading-snug text-text">{evidence.title}</div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border bg-bg/40 px-3 py-2 text-xs text-muted">
            <span>
              Source: <span className="font-semibold text-text">{evidence.source}</span>
            </span>
            <span>
              Confidence: <span className="font-semibold text-text">{evidence.confidence}</span>
            </span>
          </div>

          <div className="rounded-lg border border-border bg-bg/40 px-3 py-2 text-xs text-muted">
            Entity: {evidence.evidenceType}
          </div>

          <div className="text-sm leading-relaxed text-text">{evidence.snippet}</div>

          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded border border-border bg-bg/30 px-2 py-1">Source: {evidence.source}</span>
            <span className="rounded border border-border bg-bg/30 px-2 py-1">Type: {evidence.evidenceType}</span>
            <span className="rounded border border-border bg-bg/30 px-2 py-1">Decision: {evidence.decision}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onApprove}
              className="w-full rounded-lg bg-[#18A4A6] py-2 text-sm font-medium text-white transition hover:bg-[#159395]"
            >
              Approve
            </button>
            <Button variant="secondary" onClick={onReject}>
              Reject
            </Button>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted">
            <span>{'<<'}</span>
            <span>{positionLabel}</span>
            <span>{'>>'}</span>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-3">
            <Button variant="secondary" onClick={onPrev}>
              Prev
            </Button>
            <span className="text-xs text-muted">{positionLabel}</span>
            <Button variant="secondary" onClick={onNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvidenceViewer;