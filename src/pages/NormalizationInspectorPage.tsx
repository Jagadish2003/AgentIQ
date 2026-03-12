import React from 'react';
import TopNav from '../components/common/TopNav';
import { useNormalizationContext } from '../context/NormalizationContext';
import ConfidenceBanner from '../components/normalization/ConfidenceBanner';
import SourcesEntitiesPanel from '../components/normalization/SourcesEntitiesPanel';
import MappingTable from '../components/normalization/MappingTable';
import FieldDetailsPanel from '../components/normalization/FieldDetailsPanel';
import { useNavigate } from 'react-router-dom';

export default function NormalizationInspectorPage() {
  const { confidence, counts } = useNormalizationContext();
  const nav = useNavigate();

  const total = counts.MAPPED + counts.AMBIGUOUS + counts.UNMAPPED;

  return (
    <div className="min-h-screen text-text">
      <TopNav />
      <div className="w-full px-8 py-6 pb-10">
        <div className="mb-4">
          <div className="text-2xl font-semibold">Normalization &amp; Mapping Inspector</div>
          <div className="mt-1 text-sm text-muted">
            Transparency view: inspect how fields from sources map into AgentIQ&apos;s common
            schema.
          </div>
        </div>

        <ConfidenceBanner conf={confidence} onAction={() => nav('/integration-hub')} />

        <div className="mt-4 flex gap-6">
          <div className="flex flex-col gap-4" style={{ flex: 3 }}>
            <div className="flex gap-6" style={{ height: '700px' }}>
              <div className="flex flex-col" style={{ flex: 1 }}>
                <SourcesEntitiesPanel />
              </div>

              <div className="flex flex-col" style={{ flex: 2 }}>
                <MappingTable />
              </div>
            </div>
            <div className="flex items-center gap-8 rounded-xl border border-border bg-panel px-6 py-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#00B4B4]" />
                <span className="font-semibold text-text">Mapped</span>
                <span className="font-bold text-text">{counts.MAPPED}</span>
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
          <div className="flex flex-col" style={{ flex: 1 }}>
            <FieldDetailsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}