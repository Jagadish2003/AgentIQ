import React from 'react';
import { Connector } from '../../types/connector';

const IconMap: Record<string, React.ReactNode> = {
  servicenow: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#374151" strokeWidth="1.5"/>
      <path d="M9 5.5v3.5l2 2" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  jira_confluence: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L16 9L9 16L2 9L9 2Z" stroke="#374151" strokeWidth="1.5"/>
    </svg>
  ),
  microsoft_365: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1" stroke="#374151" strokeWidth="1.4"/>
      <rect x="10" y="2" width="6" height="6" rx="1" stroke="#374151" strokeWidth="1.4"/>
      <rect x="2" y="10" width="6" height="6" rx="1" stroke="#374151" strokeWidth="1.4"/>
      <rect x="10" y="10" width="6" height="6" rx="1" stroke="#374151" strokeWidth="1.4"/>
    </svg>
  ),
};

function ConnectorIcon({ id }: { id: string }) {
  return (
    <span className="flex-shrink-0">
      {IconMap[id] ?? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="2" stroke="#374151" strokeWidth="1.4"/>
        </svg>
      )}
    </span>
  );
}

export default function HeroConnectorCard({
  connector, selected, onSelect, onPrimary, onSecondary
}: {
  connector: Connector;
  selected: boolean;
  onSelect: () => void;
  onPrimary: () => void;
  onSecondary: () => void;
}) {
  const isConnected = connector.status === 'connected';
  const isNotConnected = connector.status === 'not_connected';
  const primaryLabel = isConnected ? 'Configure & Sync' : (connector.status === 'coming_soon' ? 'Coming soon' : 'Connect');

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-xl border p-4 flex flex-col gap-3 bg-white transition-colors
        ${selected ? 'border-text/40 ring-1 ring-text/20' : 'border-border hover:border-text/30'}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <ConnectorIcon id={connector.id} />
        <span className="text-sm font-semibold text-text">{connector.name}</span>
      </div>

      {/* Metrics */}
      <ul className="flex flex-col gap-1.5">
        {isNotConnected ? (
          <>
            <li className="flex items-center gap-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full border border-muted/50 flex-shrink-0" />
              Not connected
            </li>
            <li className="flex items-center gap-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full border border-muted/50 flex-shrink-0" />
              Last synced {connector.lastSynced}
            </li>
          </>
        ) : (
          connector.metrics.slice(0, 2).map(m => (
            <li key={m.label} className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-text/50 flex-shrink-0" />
              <span>
                <span className="font-semibold text-text">
                  {isNaN(Number(m.value)) ? m.value : Number(m.value).toLocaleString()}
                </span>{' '}
                <span className="text-muted">{m.label}</span>
              </span>
            </li>
          ))
        )}
      </ul>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={(e) => { e.stopPropagation(); onPrimary(); }}
          disabled={connector.status === 'coming_soon'}
          className="flex-1 rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-text hover:bg-panel2 transition-colors disabled:opacity-40"
        >
          {primaryLabel}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onSecondary(); }}
          disabled={!isConnected}
          className="flex-1 rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-text hover:bg-panel2 transition-colors disabled:opacity-40"
        >
          View data
        </button>
      </div>
    </div>
  );
}