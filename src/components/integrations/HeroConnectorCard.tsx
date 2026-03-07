import React from 'react';
import { Connector } from '../../types/connector';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function HeroConnectorCard({
  connector, selected, onSelect, onPrimary, onSecondary
}: { connector: Connector; selected: boolean; onSelect: ()=>void; onPrimary: ()=>void; onSecondary: ()=>void }) {
  const isConnected = connector.status === 'connected';
  const primaryLabel = isConnected ? 'Configure & Sync' : (connector.status === 'coming_soon' ? 'Coming soon' : 'Connect');

  return (
    <div onClick={onSelect} className={`cursor-pointer rounded-xl border ${selected ? 'border-accent/60 bg-panel2' : 'border-border bg-panel'} p-4 shadow-sm hover:bg-panel2`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-text">{connector.name}</div>
          <div className="mt-1 text-sm text-muted">{connector.category}</div>
        </div>
        <Badge status={connector.status} />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {connector.metrics.slice(0,2).map(m => (
          <div key={m.label} className="rounded-lg border border-border bg-bg/30 p-3">
            <div className="text-xs text-muted">{m.label}</div>
            <div className="mt-1 text-lg font-semibold text-text">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-muted">Last synced: <span className="text-text">{isConnected ? connector.lastSynced : '—'}</span></div>
        <div className="text-xs text-muted">Signal: <span className="text-text">{connector.signalStrength}</span></div>
      </div>

      <div className="mt-4 flex gap-2">
        <Button onClick={(e)=>{e.stopPropagation(); onPrimary();}} disabled={connector.status==='coming_soon'} variant="primary" className="flex-1">
          {primaryLabel}
        </Button>
        <Button onClick={(e)=>{e.stopPropagation(); onSecondary();}} variant="secondary" className="flex-1" disabled={!isConnected} title={!isConnected ? 'Connect to enable data preview' : undefined}>
          View data
        </Button>
      </div>
    </div>
  );
}
