import React from 'react';
import { Connector } from '../../types/connector';
import ConnectorTile from './ConnectorTile';

export default function ConnectorGridSection({
  connectors, selectedId, onSelect, onPrimary
}: { connectors: Connector[]; selectedId: string | null; onSelect:(id:string)=>void; onPrimary:(id:string)=>void }) {
  return (
    <div className="mt-6">
      <div className="mb-3">
        <div className="text-sm font-semibold text-text">Add more coverage</div>
        <div className="text-xs text-muted">Add sources to improve confidence and evidence coverage.</div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {connectors.map(c => (
          <ConnectorTile key={c.id} connector={c} selected={selectedId===c.id} onSelect={()=>onSelect(c.id)} onPrimary={()=>onPrimary(c.id)} />
        ))}
      </div>
    </div>
  );
}
