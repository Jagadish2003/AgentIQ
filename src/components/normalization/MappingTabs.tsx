import React from 'react';
type Tab = 'MAPPED' | 'UNMAPPED' | 'AMBIGUOUS';

export default function MappingTabs({ active, counts, onTab }: { active: Tab; counts: Record<Tab, number>; onTab: (t: Tab) => void; }) {
  const tab = (id: Tab, label: string) => (
    <button
      onClick={() => onTab(id)}
      className={`rounded-md border px-3 py-2 text-sm font-semibold ${
        active === id ? 'border-accent/60 bg-panel2 text-text' : 'border-border bg-bg/20 text-muted hover:bg-panel2 hover:text-text'
      }`}
    >
      {label} ({counts[id]})
    </button>
  );

  return (
    <div className="flex flex-wrap gap-2">
      {tab('MAPPED','Mapped')}
      {tab('UNMAPPED','Unmapped')}
      {tab('AMBIGUOUS','Ambiguous')}
    </div>
  );
}
