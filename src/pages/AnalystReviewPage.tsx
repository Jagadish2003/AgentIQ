import React from 'react';
import TopNav from '../components/common/TopNav';
import OpportunityList from '../components/analyst_review/OpportunityList';
import OpportunityDetail from '../components/analyst_review/OpportunityDetail';
import ReasoningOverride from '../components/analyst_review/ReasoningOverride';
import { useAnalystReviewContext } from '../context/AnalystReviewContext';
import { useToast } from '../components/common/Toast';

export default function AnalystReviewPage() {
  const {
    opportunities,
    selectedId,
    select,
    selected,
    setDecision,
    setOverrideText,
    toggleLock,
    audit,
  } = useAnalystReviewContext();

  const { push } = useToast();

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <TopNav />

      {/* Page title row */}
      <div className="px-6 pt-5 pb-3">
        <div className="text-2xl font-semibold text-text">Analyst Review</div>
        <div className="mt-1 text-sm text-muted">
          Deep-dive trust layer: validate and override AI rationale per opportunity before executive reporting.
        </div>
      </div>

      {/* 3-column grid — fills remaining viewport height */}
      <div className="flex-1 px-4 pb-4 overflow-hidden">
        <div
          className="grid h-full gap-4"
          style={{ gridTemplateColumns: '300px 1fr 320px', height: 'calc(100vh - 130px)' }}
        >
          <OpportunityList
            items={opportunities}
            selectedId={selectedId}
            onSelect={select}
            onCreate={() => push('Create Opportunity will be available in Sprint 2.')}
          />

          <OpportunityDetail
            opp={selected}
            audit={audit}
            onNavigate={() => push('Full detail view coming in Sprint 2.')}
          />

          <ReasoningOverride
            opp={selected}
            audit={audit}
            onOverrideText={setOverrideText}
            onLockToggle={() => { toggleLock(); push('Lock toggled.'); }}
            onDecision={(d) => {
              setDecision(d);
              push(`Decision set to ${d}.`);
            }}
          />
        </div>
      </div>
    </div>
  );
}