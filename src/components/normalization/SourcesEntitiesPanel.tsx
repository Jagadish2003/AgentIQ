import React from 'react';
import { useNormalizationContext } from '../../context/NormalizationContext';

export default function SourcesEntitiesPanel() {
  const { counts } = useNormalizationContext();
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-text">Coverage & Guidance</div>

      <div className="mt-3 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">Mapping coverage</div>
        <div className="mt-2 space-y-1 text-sm text-muted">
          <div>• Mapped: <span className="text-text font-semibold">{counts.MAPPED}</span></div>
          <div>• Ambiguous: <span className="text-text font-semibold">{counts.AMBIGUOUS}</span></div>
          <div>• Unmapped: <span className="text-text font-semibold">{counts.UNMAPPED}</span></div>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">How to use this screen</div>
        <div className="mt-2 text-sm text-muted">
          Start with <span className="text-text font-semibold">Unmapped</span> and <span className="text-text font-semibold">Ambiguous</span>.
          Fixing these early prevents scoring errors and avoids bad pilot recommendations.
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">Common pitfall</div>
        <div className="mt-2 text-sm text-muted">
          Owners and user fields often appear as groups in CMDB/tickets. Treat these as ambiguous until resolved.
        </div>
      </div>
    </div>
  );
}
