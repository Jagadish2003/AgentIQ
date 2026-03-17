import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Stage {
  opportunities: unknown[];
  requiredPermissions: { required: boolean; satisfied: boolean; label: string }[];
}

interface PilotRoadmapHighlightsProps {
  stages: Stage[];
  blockerCount: number;
  overallReadiness: string;
}

export default function PilotRoadmapHighlights({
  stages,
  blockerCount,
  overallReadiness,
}: PilotRoadmapHighlightsProps) {
  const nav = useNavigate();

  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-text">Pilot Roadmap Highlights</div>
      <ul className="mt-3 list-disc pl-5 text-sm text-text">
        <li>{stages[0].opportunities.length} opportunities planned for the next 30 days.</li>
        <li>{stages[1].opportunities.length} opportunities planned for the next 60 days.</li>
        <li>{stages[2].opportunities.length} opportunities planned for the next 90 days.</li>
        {blockerCount > 0 && (
          <li>
            {blockerCount} required data permission{blockerCount > 1 ? 's' : ''} still missing — resolve
            before pilots start.
          </li>
        )}
        <li>
          Overall readiness: <span className="font-semibold">{overallReadiness}</span>.
        </li>
      </ul>
      <button
        className="mt-3 w-full rounded-md border border-border bg-bg/20 px-3 py-2 text-sm hover:bg-panel2"
        onClick={() => nav('/pilot-roadmap')}
      >
        Open Pilot Roadmap
      </button>
    </div>
  );
}