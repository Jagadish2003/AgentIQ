import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Opportunity {
  id: string;
  title: string;
  category: string;
  impact: number;
  effort: number;
}

interface TopQuickWinsProps {
  quickWins: Opportunity[];
}

export default function TopQuickWins({ quickWins }: TopQuickWinsProps) {
  const nav = useNavigate();

  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="text-sm font-semibold text-text">Top Quick Wins</div>
      <div className="mt-3 space-y-2">
        {quickWins.map(o => (
          <button
            key={o.id}
            className="w-full rounded-md border border-border bg-bg/20 px-3 py-2 text-left hover:bg-panel2"
            onClick={() => nav('/opportunity-map')}
          >
            <div className="text-sm font-semibold text-text">{o.title}</div>
            <div className="mt-1 text-xs text-muted">
              {o.category} · Impact {o.impact}/10 · Effort {o.effort}/10
            </div>
          </button>
        ))}
      </div>
      <div className="mt-2 text-xs text-muted">Opens Opportunity Map (Screen 7).</div>
    </div>
  );
}