import React from 'react';
import { Connector } from '../../types/connector';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function ConnectorDetailPanel({ connector, onConfigure }: { connector: Connector | null; onConfigure: ()=>void }) {
  if (!connector) {
    return <div className="rounded-xl border border-border bg-panel p-4 text-sm text-muted">Select a connector to view details.</div>;
  }
  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-base font-semibold text-text">{connector.name}</div>
          <div className="mt-1 text-sm text-muted">{connector.category}</div>
        </div>
        <Badge status={connector.status} />
      </div>

      <div className="mt-3 text-xs text-muted">Last sync: <span className="text-text">{connector.status==='connected' ? connector.lastSynced : '—'}</span></div>

      <div className="mt-3">
        <div className="text-xs font-semibold text-text">Reads</div>
        <ul className="mt-2 space-y-1 text-sm text-muted">
          {connector.reads.slice(0,3).map(r => (
            <li key={r} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent/70" />{r}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <Button variant="primary" className="w-full" onClick={onConfigure} disabled={connector.status==='coming_soon'}>Configure & Sync</Button>
      </div>
    </div>
  );
}
