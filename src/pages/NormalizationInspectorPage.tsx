import React from 'react';
import TopNav from '../components/common/TopNav';
import { useNormalizationContext } from '../context/NormalizationContext';
import ConfidenceBanner from '../components/normalization/ConfidenceBanner';
import MappingTabs from '../components/normalization/MappingTabs';
import SourcesEntitiesPanel from '../components/normalization/SourcesEntitiesPanel';
import MappingTable from '../components/normalization/MappingTable';
import FieldDetailsPanel from '../components/normalization/FieldDetailsPanel';
import { useNavigate } from 'react-router-dom';

export default function NormalizationInspectorPage() {
  const { confidence, activeTab, setActiveTab, counts } = useNormalizationContext();
  const nav = useNavigate();

  const total = counts.MAPPED + counts.AMBIGUOUS + counts.UNMAPPED;

  return (
    <div className="min-h-screen text-text">
      <TopNav />
      <div className="w-full px-8 py-6 pb-10">
        <div className="mb-4">
          <div className="text-2xl font-semibold">Normalization & Mapping Inspector</div>
          <div className="mt-1 text-sm text-muted">
            Transparency view: inspect how fields from sources map into AgentIQ's common schema.
          </div>
        </div>

        <ConfidenceBanner conf={confidence} onAction={() => nav('/integration-hub')} />

        <div className="mt-4">
          <MappingTabs active={activeTab} counts={counts} onTab={setActiveTab} />
        </div>

        {/* Outer: left section (card1 narrow + card2 wide) + right card3 */}
        <div className="mt-4 flex gap-6">

          {/* Left: card1 (narrow) + card2 (wide) + summary bar */}
          <div className="flex flex-col gap-4" style={{ flex: 3 }}>
            <div className="flex gap-6">
              {/* Card 1 — narrow */}
              <div style={{ flex: 1 }}>
                <SourcesEntitiesPanel />
              </div>
              {/* Card 2 — wide */}
              <div style={{ flex: 2 }}>
                <MappingTable />
              </div>
            </div>

            {/* Summary bar */}
            <div className="rounded-xl border border-border bg-panel px-6 py-3 flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#00B4B4]" />
                <span className="font-semibold text-text">Mapped</span>
                <span className="text-text font-bold">{counts.MAPPED}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-muted">{counts.UNMAPPED}</span>
                <span className="text-muted">Unmapped</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-muted">{counts.AMBIGUOUS}</span>
                <span className="text-muted">Ambiguous</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-muted">Total</span>
                <span className="font-bold text-text">{total}</span>
              </div>
            </div>
          </div>

          {/* Right: card3 — stretches to match left total height */}
          <div className="flex flex-col" style={{ flex: 1 }}>
            <FieldDetailsPanel />
          </div>

        </div>
      </div>
    </div>
  );
}