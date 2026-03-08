import { ReactNode } from 'react';
import ConnectorTile from './ConnectorTile';
import { useConnector } from '../../context/ConnectorContext';
import { SelectedCard, StatItem, ActionItem } from '../../types/connector';
import { ServiceNowIcon, JiraIcon, M365Icon } from '../common/icons';

interface ConnectorDef {
  id: SelectedCard;
  icon: ReactNode;
  title: string;
  stats: StatItem[];
  actions: ActionItem[];
}

const CONNECTORS: ConnectorDef[] = [
  {
    id: 'servicenow', icon: <ServiceNowIcon />, title: 'ServiceNow',
    stats: [
      { bold: '2,847', label: 'Incidents',    connected: true  },
      { label: '312 CMDB items',               connected: false },
    ],
    actions: [{ label: 'Configure & Sync' }, { label: 'View data' }],
  },
  {
    id: 'jira', icon: <JiraIcon />, title: 'Jira & Confluence',
    stats: [
      { bold: '5,847', label: 'Records ingested', connected: true },
      { label: 'Emails – Teams Chats',             connected: true },
    ],
    actions: [{ label: 'Configure & Sync' }, { label: 'View data' }],
  },
  {
    id: 'm365', icon: <M365Icon />, title: 'Microsoft 365',
    stats: [
      { label: 'Not connected',         connected: false },
      { label: 'Last synced 2 hrs ago', connected: true  },
    ],
    actions: [{ label: 'Connect' }, { label: 'View data' }],
  },
];

export default function HeroConnectorCard() {
  const { selectedCard, setSelectedCard, showToast } = useConnector();

  return (
    <div className="bg-panel border border-border rounded-2xl p-5">
      <h2 className="text-[17px] font-extrabold text-text mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
        Start here{' '}
        <span className="text-sm font-medium text-muted">(fastest to value)</span>
      </h2>
      <p className="text-[13px] text-muted mb-4">Connect 1 to start discovery</p>

      <div className="flex gap-3">
        {CONNECTORS.map((c) => (
          <ConnectorTile
            key={c.id}
            icon={c.icon}
            title={c.title}
            stats={c.stats}
            selected={selectedCard === c.id}
            onClick={() => setSelectedCard(c.id)}
            actions={c.actions.map((a) => ({
              ...a,
              onClick: () => showToast(`${a.label} — ${c.title}`),
            }))}
          />
        ))}
      </div>
    </div>
  );
}
