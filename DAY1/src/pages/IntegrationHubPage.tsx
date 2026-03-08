import TopNav              from '../components/common/TopNav';
import Toast               from '../components/common/Toast';
import HeroConnectorCard   from '../components/integrations/HeroConnectorCard';
import ConnectorGridSection from '../components/integrations/ConnectorGridSection';
import DiscoveryStartBar   from '../components/integrations/DiscoveryStartBar';
import RightPanel          from '../components/integrations/RightPanel';
import { ConnectorProvider, useConnector } from '../context/ConnectorContext';
import { NavItem } from '../types/connector';

const NAV_ITEMS: NavItem[] = [
  { label: 'Discovery Dashboard', path: '/integration-hub', active: true  },
  { label: 'Opportunity Map',     path: '/opportunity-map', active: false },
  { label: 'Reports',             path: '/reports',         active: false },
];

function PageContent() {
  const { confidence, toast } = useConnector();

  return (
    <div className="min-h-screen bg-bg font-sans">
      <TopNav navItems={NAV_ITEMS} />

      {/* Page header */}
      <div className="px-8 pt-7 pb-0">
        <p className="text-[11px] font-semibold text-muted/50 tracking-[0.08em] font-mono mb-1 uppercase">
          Screen 1 v3 · Integration Hub
        </p>
        <h1 className="text-2xl font-extrabold text-text tracking-tight mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
          Start here{' '}
          <span className="text-lg font-medium text-muted">(fastest to value)</span>
        </h1>
        <p className="text-sm text-muted">Connect 1 to start discovery</p>
      </div>

      {/* Main layout */}
      <div className="px-8 pt-5 pb-8 flex gap-5 items-start">
        {/* Left column */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <HeroConnectorCard />
          <ConnectorGridSection />
          <DiscoveryStartBar confidence={confidence} />
        </div>

        {/* Right column */}
        <RightPanel />
      </div>

      {/* Toast */}
      {toast && <Toast message={toast} onClose={() => {}} />}
    </div>
  );
}

export default function IntegrationHubPage() {
  return (
    <ConnectorProvider>
      <PageContent />
    </ConnectorProvider>
  );
}
