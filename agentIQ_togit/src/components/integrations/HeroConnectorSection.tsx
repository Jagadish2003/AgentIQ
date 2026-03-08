import React from 'react';
import { Connector } from '../../types/connector';
import HeroConnectorCard from './HeroConnectorCard';

export default function HeroConnectorSection({
  connectors, selectedId, onSelect, onPrimary, onSecondary
}: {
  connectors: Connector[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onPrimary: (id: string) => void;
  onSecondary: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-panel2 p-5 mb-6 shadow-sm">
      <div className="mb-4">
        <div className="text-sm font-semibold text-text">
          Start here <span className="font-normal text-muted">(fastest to value)</span>
        </div>
        <div className="text-xs text-muted mt-0.5">Connect 1 to start discovery</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {connectors.map(c => (
          <HeroConnectorCard
            key={c.id}
            connector={c}
            selected={selectedId === c.id}
            onSelect={() => onSelect(c.id)}
            onPrimary={() => onPrimary(c.id)}
            onSecondary={() => onSecondary(c.id)}
          />
        ))}
      </div>
    </div>
  );
}