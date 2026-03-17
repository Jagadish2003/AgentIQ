import React, { useMemo } from 'react';
import TopNav from '../components/common/TopNav';
import { useToast } from '../components/common/Toast';
import { useAnalystReviewContext } from '../context/AnalystReviewContext';
import { useConnectorContext } from '../context/ConnectorContext';
import { buildPilotRoadmap } from '../utils/buildRoadmap';
import StatCard from '../components/executive_report/StatCard';
import SnapshotMatrix from '../components/executive_report/SnapshotMatrix';
import KeyInsights from '../components/executive_report/KeyInsights';
import TopQuickWins from '../components/executive_report/TopQuickWins';
import PilotRoadmapHighlights from '../components/executive_report/PilotRoadmapHighlights';

const SNAPSHOT_BUBBLES = [
  { x: 90, y: 55, r: 18 },
  { x: 160, y: 75, r: 14 },
  { x: 240, y: 45, r: 14 },
  { x: 300, y: 85, r: 14 },
  { x: 460, y: 50, r: 12 },
  { x: 430, y: 150, r: 10 },
  { x: 520, y: 140, r: 10 },
];

export default function ExecutiveReportPage() {
  const { push } = useToast();
  const { opportunities } = useAnalystReviewContext();
  const { connectors } = useConnectorContext();

  const connectedCount = useMemo(
    () => connectors.filter(c => c.tier === 'recommended' && c.status === 'connected').length,
    [connectors]
  );

  const roadmap = useMemo(() => buildPilotRoadmap(opportunities), [opportunities]);

  const blockerCount = useMemo(() => {
    const required = roadmap.stages.flatMap(s => s.requiredPermissions).filter(p => p.required);
    const missing = required.filter(p => !p.satisfied);
    const uniq = new Map();
    for (const p of missing) uniq.set(p.label, true);
    return uniq.size;
  }, [roadmap]);

  const quickWins = useMemo(() => (
    opportunities
      .filter(o => o.tier === 'Quick Win')
      .slice()
      .sort((a, b) => ((b.impact - b.effort) - (a.impact - a.effort)) || (b.impact - a.impact))
      .slice(0, 5)
  ), [opportunities]);

  return (
    <div className="min-h-screen text-text">
      <TopNav />

      {/* ✅ SAME CONTAINER AS PILOT ROADMAP */}
      <div className="w-full px-8 py-6 pb-10">

        {/* ✅ HEADER (MATCHED) */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Executive Report</h1>
            <p className="mt-1 text-sm text-muted">
              Internal Demo Gate stub: exports are toasts; narrative is hardcoded.
            </p>
          </div>

          {/* 🔁 Same style as Pilot button */}
          <button
            className="rounded-md bg-panel px-4 py-2 text-sm text-text hover:bg-panel2"
            onClick={() => push('Export Report (stub)')}
          >
            Export Report
          </button>
        </div>

        {/* ✅ INFO BAR (MATCHES PILOT STYLE) */}
        <div className="mb-4 rounded-xl bg-panel px-4 py-3 text-sm text-muted">
          Overview of confidence, sources, and prioritized quick wins across the roadmap.
        </div>

        {/* ✅ STAT CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <StatCard title="Overall Confidence" value={roadmap.overallReadiness} />
          <StatCard title="Sources Analyzed" value={`${connectedCount} Connected`} />
          <StatCard title="Top Opportunities" value={`${quickWins.length} Quick Wins`} />
          <StatCard title="Pilot Roadmap" value="30/60/90 Days" />
        </div>

        {/* ✅ MAIN CONTENT */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <KeyInsights />
            <SnapshotMatrix bubbles={SNAPSHOT_BUBBLES} />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            <TopQuickWins quickWins={quickWins} />
            <PilotRoadmapHighlights
              stages={roadmap.stages}
              blockerCount={blockerCount}
              overallReadiness={roadmap.overallReadiness}
            />
          </div>

        </div>

      </div>
    </div>
  );
}