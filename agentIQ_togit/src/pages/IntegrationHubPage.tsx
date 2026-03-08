import React, { useMemo } from 'react';
import TopNav from '../components/common/TopNav';
import { useConnectorContext } from '../context/ConnectorContext';
import HeroConnectorSection from '../components/integrations/HeroConnectorSection';
import ConnectorGridSection from '../components/integrations/ConnectorGridSection';
import RightPanel from '../components/integrations/RightPanel';
import DiscoveryStartBar from '../components/integrations/DiscoveryStartBar';
import { useToast } from '../components/common/Toast';
import { useNavigate } from 'react-router-dom';

export default function IntegrationHubPage() {
  const { recommended, standard, selectedConnectorId, selectConnector, connectConnector, configureSync, confidence, recommendedConnectedCount, nextBestRecommendedId } = useConnectorContext();
  const { push } = useToast();
  const navigate = useNavigate();

  const selected = useMemo(() => [...recommended, ...standard].find(c => c.id === selectedConnectorId) ?? null, [recommended, standard, selectedConnectorId]);
  const next = useMemo(() => recommended.find(c => c.id === nextBestRecommendedId) ?? null, [recommended, nextBestRecommendedId]);
  const canStart = recommendedConnectedCount >= 1;

  void selected; void next; void canStart; void configureSync; void confidence; void navigate;

  return (
    <div className="min-h-screen bg-bg text-text">
      <TopNav />
      <div className="mx-auto max-w-6xl px-6 pt-5 pb-10">
        <div className="mb-1 text-xs text-muted">Screen 1 v3: Integration Hub</div>
        <div className="mb-0.5 text-2xl font-bold text-text">
          Start here <span className="font-normal text-muted">(fastest to value)</span>
        </div>
        <div className="mb-6 text-sm text-muted">Connect 1 to start discovery</div>

        <HeroConnectorSection
          connectors={recommended}
          selectedId={selectedConnectorId}
          onSelect={selectConnector}
          onPrimary={(id) => { connectConnector(id); push('Connector connected (mock).'); }}
          onSecondary={() => push('Data preview available in Sprint 2.')}
        />

        <ConnectorGridSection
          connectors={standard}
          selectedId={selectedConnectorId}
          onSelect={selectConnector}
          onPrimary={(id) => {
            const c = standard.find(x => x.id === id);
            if (!c) return;
            if (c.status === 'connected') push('Data preview available in Sprint 2.');
            else if (c.status === 'coming_soon') push('Connector coming soon.');
            else { connectConnector(id); push('Connector connected (mock).'); }
          }}
        />
      </div>
    </div>
  );
}