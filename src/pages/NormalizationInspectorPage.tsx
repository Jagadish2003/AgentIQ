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

  return (
    <div className="min-h-screen text-text">
      <TopNav />
      <div className="mx-auto max-w-6xl px-4 py-6 pb-10">
        <div className="mb-4">
          <div className="text-2xl font-semibold">Normalization & Mapping Inspector</div>
          <div className="mt-1 text-sm text-muted">
            Transparency view: inspect how fields from sources map into AgentIQ’s common schema.
          </div>
        </div>

        <ConfidenceBanner conf={confidence} onAction={() => nav('/integration-hub')} />

        <div className="mt-4">
          <MappingTabs active={activeTab} counts={counts} onTab={setActiveTab} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[360px_1fr_360px]">
          <SourcesEntitiesPanel />
          <MappingTable />
          <FieldDetailsPanel />
        </div>
      </div>
    </div>
  );
}
