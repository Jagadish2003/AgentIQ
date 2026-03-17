import React from 'react';

export default function KeyInsights() {
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-text">Key Insights</div>
      <div className="mt-2 text-sm text-text">
        AgentIQ identified high-ROI "agentic moments" from operational signals (tickets + systems of record).
        Start with 2–3 quick wins in the next 30 days, prove measurable cycle-time reduction, then expand
        evidence coverage and productionize governance in the 60–90 day window.
      </div>

      <div className="mt-4 rounded-lg border border-border bg-bg/20 p-3">
        <div className="text-xs font-semibold text-text">What leadership should do next</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-text">
          <li>Approve the top 2 quick wins and confirm success metrics.</li>
          <li>Grant required permissions for 30-day pilots (read-only first).</li>
          <li>Assign an executive sponsor and implementation owner per pilot.</li>
          <li>Schedule a 2-week checkpoint with evidence and governance sign-off.</li>
        </ul>
      </div>
    </div>
  );
}