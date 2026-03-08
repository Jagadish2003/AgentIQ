import ConnectorDetailPanel  from './ConnectorDetailPanel';
import HeroConnectorSection  from './HeroConnectorSection';
import NextBestSourcePanel   from './NextBestSourcePanel';

export default function RightPanel() {
  return (
    <div className="w-64 flex-shrink-0 flex flex-col gap-3.5">
      <ConnectorDetailPanel />
      <HeroConnectorSection />
      <NextBestSourcePanel />
    </div>
  );
}
