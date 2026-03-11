import React from 'react';
import { Check, MoveRight, Square } from 'lucide-react';
import { Confidence } from '../../utils/confidence';

export default function DiscoveryStartBar({
  confidence,
  recommendedConnectedCount,
  recommendedTotal,
  canStart,
  onStart,
  onUpload
}: {
  confidence: Confidence;
  recommendedConnectedCount: number;
  recommendedTotal: number;
  canStart: boolean;
  onStart: () => void;
  onUpload: () => void;
}) {
  const step = confidence?.toLowerCase();
  const isLow = step === 'low';
  const isMedium = step === 'medium';
  const isHigh = step === 'high';

  const microcopy =
    confidence === 'LOW'
      ? 'Connect at least 1 source to start.'
      : confidence === 'MEDIUM'
        ? 'Connect one more Source to reach HIGH'
        : 'High confidence ready.';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-bg/80 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] backdrop-blur">
      <div className="w-full px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center text-sm">
            <div className="flex items-center">
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  isLow ? 'bg-accent shadow-[0_0_8px_3px_rgba(0,255,200,0.35)]' : 'bg-muted/40'
                }`}
              />
              <span className={`ml-2 ${isLow ? 'font-semibold text-text' : 'text-muted'}`}>Low</span>
            </div>

            <div className={`mx-3 h-[1px] w-16 transition-colors ${isMedium || isHigh ? 'bg-accent/50' : 'bg-border'}`} />

            <div className="flex items-center">
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  isMedium ? 'bg-accent shadow-[0_0_8px_3px_rgba(0,255,200,0.35)]' : 'bg-muted/40'
                }`}
              />
              <span className={`ml-2 ${isMedium ? 'font-semibold text-text' : 'text-muted'}`}>Medium</span>
            </div>

            <div className={`mx-3 h-[1px] w-16 transition-colors ${isHigh ? 'bg-accent/50' : 'bg-border'}`} />

            <div className="flex items-center">
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  isHigh ? 'bg-accent shadow-[0_0_8px_3px_rgba(0,255,200,0.35)]' : 'bg-muted/40'
                }`}
              />
              <span className={`ml-2 ${isHigh ? 'font-semibold text-text' : 'text-muted'}`}>High</span>
            </div>
          </div>

          <div className="text-sm text-muted">
            Connect: {recommendedConnectedCount} of {recommendedTotal} recommended
            <span className="mx-2">|</span>
            ReCx
          </div>

          <button
            onClick={onStart}
            disabled={!canStart}
            className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-6 py-2 text-sm font-medium text-black transition-all hover:bg-accent/90 disabled:opacity-50"
          >
            Start Discovery Run
            <MoveRight size={18} strokeWidth={2} />
          </button>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onUpload}
              className="rounded-md border border-border bg-panel2 px-4 py-2 text-sm text-text transition hover:bg-panel"
            >
              Upload Files Instead
            </button>

            <div className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm">
              <span className="flex items-start gap-2 text-sm text-muted">
                <Check size={16} className="mt-[2px] shrink-0 text-muted" />
                <span>Jira</span>
              </span>

              <span className="mx-1 text-border">|</span>

              <span className="flex items-center gap-1 text-muted">
                <Check size={16} className="mt-[2px] shrink-0 text-muted" />
                Connected
              </span>

              <span className="mx-1 text-border">|</span>

              <span className="flex items-center gap-1">
                <Square size={14} strokeWidth={2.5} />
                Microsoft 365
              </span>

              <span className="mx-1 text-border">|</span>

              <span className="flex items-center gap-1 text-muted">
                <Square size={14} strokeWidth={2.5} />
                Not Connected
              </span>
            </div>

            <div className="whitespace-nowrap text-sm text-muted">
              CONFIDENCE: <span className="font-semibold uppercase text-text">{confidence}</span>
            </div>
          </div>

          <div className="rounded-md bg-panel2 px-3 py-1.5 text-sm">{microcopy}</div>
        </div>
      </div>
    </div>
  );
}