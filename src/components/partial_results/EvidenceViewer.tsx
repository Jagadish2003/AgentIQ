import React from "react";
import Button from "../common/Button";
import { EvidenceReview } from "../../types/partialResults";
import { Monitor } from "lucide-react";

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
    <div className="rounded-xl border border-border bg-panel p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="text-sm font-semibold text-text">Evidence Viewer</div>
        <Monitor className="w-5 h-5 text-slate-400" />
      </div>

      {!evidence ? (
        <div className="mt-4 text-sm text-muted">
          Select an evidence snippet to view details.
        </div>
      ) : (
        <div className="flex flex-col flex-1 mt-4 gap-4">

          {/* Timestamp + Title */}
          <div>
            <div className="text-xs text-muted mb-1">{evidence.tsLabel}</div>
            <div className="text-sm font-semibold text-text leading-snug">{evidence.title}</div>
          </div>

          {/* Source row */}
          <div className="rounded-lg border border-border bg-bg/40 px-3 py-2 text-xs text-muted flex items-center gap-3">
            <span>
              Source:{" "}
              <span className="font-semibold text-text">{evidence.source}</span>
            </span>
            <span className="flex items-center gap-1">
              Entity:
              <span className="w-4 h-4 bg-bg rounded-sm" />
              <span className="w-4 h-4 bg-bg rounded-sm" />
            </span>
          </div>

          {/* Entity row */}
          <div className="rounded-lg border border-border bg-bg/40 px-3 py-2 text-xs text-muted">
            Entity: {evidence.evidenceType}
          </div>

          {/* Description */}
          <div className="text-sm text-text leading-relaxed">
            {evidence.snippet}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded border border-border bg-bg/30 px-2 py-1">Confluence</span>
            <span className="rounded border border-border bg-bg/30 px-2 py-1">Jira ONB-123</span>
          </div>

          {/* Approve / Reject */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onApprove}
              className="w-full rounded-lg bg-[#18A4A6] py-2 text-sm font-medium text-white hover:bg-[#159395] transition"
            >
              Approve
            </button>
            <Button variant="secondary" onClick={onReject}>
              Reject
            </Button>
          </div>

          {/* Global pagination */}
          <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted">
            <span>{"<<"}</span>
            <span>1 of 312</span>
            <span>{">>"}</span>
          </div>

          {/* Prev / Next navigation */}
          <div className="flex items-center justify-between border-t border-border pt-3">
            <Button variant="secondary" onClick={onPrev}>Prev</Button>
            <span className="text-xs text-muted">{positionLabel}</span>
            <Button variant="secondary" onClick={onNext}>Next</Button>
          </div>

        </div>
      )}
    </div>
  );
};

export default EvidenceViewer;