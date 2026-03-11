import React from 'react';
import { useNormalizationContext } from '../../context/NormalizationContext';

export default function FieldDetailsPanel() {
  const { selectedRow, relevantPermissions } = useNormalizationContext();

  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-text">Field Details</div>

      {!selectedRow ? (
        <div className="mt-3 text-sm text-muted">Select a row to view details.</div>
      ) : (
        <>
          <div className="mt-3 text-sm font-semibold text-text">{selectedRow.sourceSystem}.{selectedRow.sourceField}</div>
          <div className="mt-1 text-xs text-muted">Source: {selectedRow.sourceSystem} · {selectedRow.sourceType}</div>

          <div className="mt-3 rounded-lg border border-border bg-bg/20 p-3">
            <div className="text-xs font-semibold text-text">Mapped to</div>
            <div className="mt-1 text-sm text-text">{selectedRow.commonField}</div>
            {selectedRow.notes && <div className="mt-2 text-xs text-muted">{selectedRow.notes}</div>}
          </div>

          <div className="mt-3 rounded-lg border border-border bg-bg/20 p-3">
            <div className="text-xs font-semibold text-text">Sample values</div>
            <div className="mt-2 space-y-1 text-sm text-muted">
              {selectedRow.sampleValues.map((v, i) => <div key={i}>• {v}</div>)}
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-border bg-bg/20 p-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-text">Required Permissions</div>
              <div className="text-xs text-muted">Pilot risk often = access</div>
            </div>

            {relevantPermissions.length === 0 ? (
              <div className="mt-2 text-sm text-muted">No permissions defined for this source yet.</div>
            ) : (
              <div className="mt-2 space-y-2 text-sm text-muted">
                {relevantPermissions.map(p => (
                  <div key={p.id} className="flex items-center justify-between">
                    <span>{p.label}</span>
                    <span className={`text-xs ${p.satisfied ? 'text-emerald-300' : 'text-amber-200'}`}>
                      {p.satisfied ? 'Granted' : 'Missing'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
