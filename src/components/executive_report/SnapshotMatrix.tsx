import React from 'react';

interface Bubble {
  x: number;
  y: number;
  r: number;
}

interface SnapshotMatrixProps {
  bubbles: Bubble[];
}

export default function SnapshotMatrix({ bubbles }: SnapshotMatrixProps) {
  return (
    <div className="rounded-lg border border-border bg-bg/10 p-3">
      <div className="text-xs font-semibold text-text">EFFORT vs. IMPACT (snapshot)</div>
      <svg width="100%" height="260" viewBox="0 0 720 260" className="mt-2">
        <rect x="40" y="20" width="640" height="200" fill="none" stroke="rgba(255,255,255,0.12)" />
        <line x1="360" y1="20" x2="360" y2="220" stroke="rgba(255,255,255,0.10)" />
        <line x1="40" y1="120" x2="680" y2="120" stroke="rgba(255,255,255,0.10)" />

        <text x="60"  y="42"  fontSize="12" fill="rgba(255,255,255,0.70)">QUICK WINS</text>
        <text x="390" y="42"  fontSize="12" fill="rgba(255,255,255,0.70)">HIGH VALUE</text>
        <text x="60"  y="212" fontSize="12" fill="rgba(255,255,255,0.55)">LOW HANGING FRUIT</text>
        <text x="390" y="212" fontSize="12" fill="rgba(255,255,255,0.55)">LONG TERM</text>

        {bubbles.map((b, idx) => (
          <circle
            key={idx}
            cx={b.x}
            cy={b.y}
            r={b.r}
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.22)"
          />
        ))}
      </svg>
      <div className="mt-2 text-xs text-muted">
        Snapshot of the opportunity matrix at time of analysis.
      </div>
    </div>
  );
}