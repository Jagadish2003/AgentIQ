import React from 'react';

interface Props { onExport: () => void; }

export default function PilotRoadmapHeader({ onExport }: Props) {
  return (
    <div className="mb-3 flex items-start justify-between gap-3">
      <div>
        <div className="text-2xl font-semibold">Pilot Roadmap</div>
        <div className="mt-1 text-sm text-muted">
          30/60/90-day plan. Pilots fail due to access — this page makes readiness explicit.
        </div>
      </div>
      <button
        className="rounded-md border border-border bg-bg/20 px-3 py-2 text-sm text-text hover:bg-panel2"
        onClick={onExport}
      >
        Export Report
      </button>
    </div>
  );
}