import React from 'react';
import { OpportunityCandidate, Decision, ReviewAuditEvent } from '../../types/analystReview';

export default function ReasoningOverride({
  opp,
  audit,
  onOverrideText,
  onLockToggle,
  onDecision,
}: {
  opp: OpportunityCandidate | null;
  audit: ReviewAuditEvent[];
  onOverrideText: (v: string) => void;
  onLockToggle: () => void;
  onDecision: (d: Decision) => void;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-panel overflow-hidden h-full">

      {/* Header */}
      <div className="px-4 py-3 border-b border-border">
        <div className="text-sm font-semibold text-text">Reasoning Override</div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {!opp ? (
          <div className="text-xs text-muted">Select an opportunity to review.</div>
        ) : (
          <>
            {/* Approve / Reject */}
            <div className="grid grid-cols-2 gap-2">
              {/* Approve button */}
              <button
                onClick={() => onDecision('APPROVED')}
                className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-lg border transition-all
                  ${opp.decision === 'APPROVED'
                    ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300'
                    : 'bg-panel2 border-border text-text hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300'
                  }`}
              >
                {opp.decision === 'APPROVED' ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Approved
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Approve
                  </>
                )}
              </button>

              {/* Reject button */}
              <button
                onClick={() => onDecision('REJECTED')}
                className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-lg border transition-all
                  ${opp.decision === 'REJECTED'
                    ? 'bg-red-500/20 border-red-500/60 text-red-300'
                    : 'bg-panel2 border-border text-text hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-300'
                  }`}
              >
                {opp.decision === 'REJECTED' ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Rejected
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Reject
                  </>
                )}
              </button>
            </div>

            {/* Decision status badge */}
            {opp.decision !== 'UNREVIEWED' && (
              <div className={`text-xs text-center py-1.5 rounded-lg border
                ${opp.decision === 'APPROVED'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-300'
                }`}>
                This opportunity is marked as <strong>{opp.decision}</strong>
              </div>
            )}

            <div className="border-t border-border" />

            {/* Architect Override */}
            <div>
              <div className="text-xs font-semibold text-text mb-2">Architect Override</div>
              <textarea
                className="w-full rounded-lg border border-border bg-bg/30 text-xs p-3 text-text placeholder:text-muted resize-none leading-relaxed focus:outline-none focus:border-accent/50 disabled:opacity-50"
                rows={7}
                placeholder="Rewrite rationale in enterprise language…"
                value={opp.override.rationaleOverride}
                onChange={e => onOverrideText(e.target.value)}
                disabled={opp.override.isLocked}
              />
            </div>

            {/* Lock toggle */}
            <button
              onClick={onLockToggle}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-colors
                ${opp.override.isLocked
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  : 'bg-panel2 border-border text-muted hover:text-text'
                }`}
            >
              {opp.override.isLocked ? (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="2" />
                  <path d="M7 11V7a5 5 0 019.9-1" strokeWidth="2" />
                </svg>
              )}
              {opp.override.isLocked ? 'Override locked — click to unlock' : 'Lock override rationale'}
            </button>

            {/* Last updated */}
            {opp.override.updatedAt && (
              <div className="text-xs text-muted">
                Last updated: {new Date(opp.override.updatedAt).toLocaleString()}
              </div>
            )}

            <div className="border-t border-border" />

            {/* Required Data Permissions */}
            <div>
              <div className="text-xs font-semibold text-text mb-2">Required Data Permissions</div>
              <div className="space-y-1.5">
                {opp.permissions.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    {p.satisfied ? (
                      <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                    )}
                    <span className="flex-1 text-text">{p.label}</span>
                    {p.satisfied ? (
                      <span className="text-emerald-400">✓ Granted</span>
                    ) : p.required ? (
                      <span className="text-amber-400">◇ Missing</span>
                    ) : (
                      <span className="text-muted border border-border rounded px-1.5 py-0.5">Recommended</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Audit Trail */}
            <div>
              <div className="text-xs font-semibold text-text mb-2">Audit Trail</div>
              <div className="space-y-1">
                {audit.length === 0 ? (
                  <div className="text-xs text-muted">No audit events yet.</div>
                ) : (
                  audit.slice(0, 5).map(e => (
                    <div key={e.id} className="rounded-md border border-border bg-bg/20 px-3 py-2">
                      <div className="flex items-center justify-between text-xs text-muted mb-0.5">
                        <span>{e.tsLabel}</span>
                        <span>{e.by}</span>
                      </div>
                      <div className="text-xs text-text">{e.action}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}