import React from 'react';
import Button from '../common/Button';
import { OpportunityCandidate, Decision } from '../../types/analystReview';

export default function RationaleEditor({
  opp,
  onOverrideText,
  onOverrideReason,
  onSave,
  onLockToggle,
  onViewEvidence,
  onDecision
}: {
  opp: OpportunityCandidate | null;
  onOverrideText: (v: string) => void;
  onOverrideReason: (v: string) => void;
  onSave: () => void;
  onLockToggle: () => void;
  onViewEvidence: () => void;
  onDecision: (d: Decision) => void;
}) {
  if (!opp) {
    return (
      <div className="rounded-xl border border-border bg-panel p-4">
        <div className="text-sm font-semibold text-text">Rationale</div>
        <div className="mt-3 text-sm text-muted">Select an opportunity to review.</div>
      </div>
    );
  }

  const hasOverride = (opp.override.rationaleOverride ?? '').trim().length > 0;

  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-text">Rationale Editor</div>
        <label className="flex items-center gap-2 text-xs text-muted">
          <input type="checkbox" checked={opp.override.isLocked} onChange={onLockToggle} />
          Lock override
        </label>
      </div>

      <div className="mt-3 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">AI rationale (read-only)</div>
        <div className="mt-2 text-sm text-text">{opp.aiRationale}</div>
      </div>

      <div className="mt-3 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">Architect override (editable)</div>
        <textarea
          className="mt-2 h-28 w-full resize-none rounded-md border border-border bg-bg/30 p-3 text-sm text-text placeholder:text-muted"
          placeholder="If needed, rewrite the rationale in enterprise language…"
          value={opp.override.rationaleOverride}
          onChange={(e) => onOverrideText(e.target.value)}
          disabled={opp.override.isLocked}
        />
        <div className="mt-2 text-xs text-muted">
          If you change the rationale, you must provide an override reason.
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">Override reason</div>
        <input
          className="mt-2 w-full rounded-md border border-border bg-bg/30 px-3 py-2 text-sm text-text placeholder:text-muted"
          placeholder="Why are we overriding the AI rationale?"
          value={opp.override.overrideReason}
          onChange={(e) => onOverrideReason(e.target.value)}
          disabled={opp.override.isLocked}
        />
        {hasOverride && (opp.override.overrideReason ?? '').trim().length === 0 && (
          <div className="mt-2 text-xs text-amber-200">Required: override reason is missing.</div>
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="secondary" onClick={onSave} disabled={opp.override.isLocked}>
          Save Override
        </Button>
        <Button variant="ghost" onClick={onViewEvidence}>
          View Evidence
        </Button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="primary" onClick={() => onDecision('APPROVED')}>
          Approve
        </Button>
        <Button variant="danger" onClick={() => onDecision('REJECTED')}>
          Reject
        </Button>
      </div>

      <div className="mt-2 text-xs text-muted">
        Decision applies to the selected opportunity only.
      </div>

      {opp.override.updatedAt && (
        <div className="mt-2 text-xs text-muted">Last updated: {new Date(opp.override.updatedAt).toLocaleString()}</div>
      )}
    </div>
  );
}
