import React, { useMemo, useState } from 'react';
import { OpportunityCandidate, OpportunityTier } from '../../types/analystReview';

type SortMode = 'Priority' | 'Impact High→Low' | 'Effort Low→High';
type TierFilter = 'All' | OpportunityTier;

export default function OpportunityList({
  items,
  selectedId,
  onSelect,
  onCreate,
}: {
  items: OpportunityCandidate[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onCreate: () => void;
}) {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState<TierFilter>('All');
  const [sort, setSort] = useState<SortMode>('Priority');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = [...items];

    if (tier !== 'All') {
      list = list.filter(o => o.tier === tier);
    }
    if (q) {
      list = list.filter(o =>
        o.title.toLowerCase().includes(q) ||
        o.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'Impact High→Low') {
      list.sort((a, b) => b.impact - a.impact);
    } else if (sort === 'Effort Low→High') {
      list.sort((a, b) => a.effort - b.effort);
    } else {
      list.sort((a, b) => (b.impact - b.effort) - (a.impact - a.effort));
    }
    return list;
  }, [items, query, tier, sort]);

  const decisionIcon = (d: string) => {
    if (d === 'APPROVED') return (
      <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/60 flex items-center justify-center">
        <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
    if (d === 'REJECTED') return (
      <span className="shrink-0 w-4 h-4 rounded-full bg-red-500/20 border border-red-500/60 flex items-center justify-center">
        <svg className="w-2.5 h-2.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
    return <span className="shrink-0 w-4 h-4 rounded-full border border-border bg-bg/30" />;
  };

  const selectClass = "flex-1 text-xs border border-border rounded px-2 py-1.5 bg-panel text-text cursor-pointer outline-none focus:border-accent";

  return (
    <div className="flex flex-col rounded-xl border border-border bg-panel overflow-hidden h-full">

      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="text-sm font-semibold text-text">Opportunities</div>
        <div className="text-xs text-muted">{filtered.length} shown</div>
      </div>

      {/* Search */}
      <div className="px-3 py-2 border-b border-border">
        <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-1.5 bg-bg/30">
          <svg className="w-3.5 h-3.5 text-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search opportunities..."
            className="flex-1 text-xs bg-transparent outline-none text-text placeholder:text-muted"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-muted hover:text-text text-xs">✕</button>
          )}
        </div>
      </div>

      {/* Tier + Sort */}
      <div className="px-3 py-2 border-b border-border flex gap-2">
        <select value={tier} onChange={e => setTier(e.target.value as TierFilter)} className={selectClass}>
          <option value="All">All Tiers</option>
          <option value="Quick Win">Quick Win</option>
          <option value="Strategic">Strategic</option>
          <option value="Complex">Complex</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value as SortMode)} className={selectClass}>
          <option value="Priority">Sort: Priority</option>
          <option value="Impact High→Low">Impact ↓</option>
          <option value="Effort Low→High">Effort ↑</option>
        </select>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="px-4 py-8 text-xs text-muted text-center">No opportunities match your filters.</div>
        ) : (
          filtered.map(o => {
            const active = o.id === selectedId;
            return (
              <div
                key={o.id}
                onClick={() => onSelect(o.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 border-b border-border cursor-pointer transition-colors
                  ${active ? 'bg-accent/10 border-l-2 border-l-accent' : 'hover:bg-panel2'}`}
              >
                {decisionIcon(o.decision)}

                <div className="flex-1 min-w-0">
                  <div className={`text-xs truncate font-medium ${active ? 'text-accent' : 'text-text'}`}>
                    {o.title}
                  </div>
                  <div className="text-xs text-muted truncate">{o.category} · {o.tier}</div>
                </div>

                {active && (
                  <svg className="w-3 h-3 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Create Opportunity */}
      <div className="border-t border-border">
        <button
          onClick={onCreate}
          className="w-full px-4 py-2.5 text-xs text-text bg-panel2 hover:bg-border/40 flex items-center gap-1.5 transition-colors border-b border-border"
        >
          <span className="text-accent font-bold text-sm">+</span>
          <span>Create New Opportunity</span>
          <span className="ml-auto text-muted">▸</span>
        </button>
        <div className="px-4 py-2 text-xs text-muted leading-tight">
          Create Opportunity – Available in Sprint 2
        </div>
      </div>
    </div>
  );
}