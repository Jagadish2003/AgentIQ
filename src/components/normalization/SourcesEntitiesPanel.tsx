import React, { useMemo, useState } from 'react';
import { Search, AlertTriangle, Check, ChevronDown } from 'lucide-react';
import { useNormalizationContext } from '../../context/NormalizationContext';

type SourceItem = {
  id: string;
  name: string;
  status: 'warning' | 'ok';
};

type EntityItem = {
  id: string;
  name: string;
  count: number;
};

export default function SourcesEntitiesPanel() {
  const {
    rows,
    sources,
    entities,
    setSourceFilter,
    setEntityFilter,
  } = useNormalizationContext();

  const [search, setSearch] = useState('');
  const [entitiesExpanded, setEntitiesExpanded] = useState(true);
  const [selectedSources, setSelectedSources] = useState<Set<string>>(new Set());
  const [selectedEntities, setSelectedEntities] = useState<Set<string>>(new Set());

  // ── Derive items from rows ────────────────────────────────────────────────

  const sourceItems = useMemo<SourceItem[]>(() => {
    return sources
      .filter(s => s !== 'All Sources')
      .map(source => ({
        id: source.toLowerCase().replace(/\s+/g, '-'),
        name: source,
        status: rows.some(r => r.sourceSystem === source && r.status !== 'MAPPED')
          ? 'warning'
          : 'ok',
      }));
  }, [rows, sources]);

  const entityItems = useMemo<EntityItem[]>(() => {
    return entities
      .filter(e => e !== 'All Entities')
      .map(entity => ({
        id: entity.toLowerCase().replace(/\s+/g, '-'),
        name: entity,
        // Count respects active source selection so badge numbers stay accurate
        count: rows.filter(r => {
          const sourceMatch = selectedSources.size === 0 || selectedSources.has(r.sourceSystem);
          return sourceMatch && r.commonEntity === entity;
        }).length,
      }));
  }, [entities, rows, selectedSources]);

  const filteredSources = useMemo(() => {
    const q = search.trim().toLowerCase();
    return q ? sourceItems.filter(s => s.name.toLowerCase().includes(q)) : sourceItems;
  }, [search, sourceItems]);

  // ── Filter helpers ────────────────────────────────────────────────────────

  const pushSourceFilter = (next: Set<string>) =>
    setSourceFilter(next.size === 0 ? 'All Sources' : Array.from(next).join(','));

  const pushEntityFilter = (next: Set<string>) =>
    setEntityFilter(next.size === 0 ? 'All Entities' : Array.from(next).join(','));

  const toggleSource = (name: string) => {
    const next = new Set(selectedSources);
    next.has(name) ? next.delete(name) : next.add(name);
    setSelectedSources(next);
    pushSourceFilter(next);
  };

  const toggleEntity = (name: string) => {
    const next = new Set(selectedEntities);
    next.has(name) ? next.delete(name) : next.add(name);
    setSelectedEntities(next);
    pushEntityFilter(next);
  };

  const clearSources = () => {
    setSelectedSources(new Set());
    pushSourceFilter(new Set());
  };

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="rounded-xl border border-border bg-panel p-4 h-full flex flex-col gap-3">

      <div className="text-xl font-semibold text-text">Sources &amp; Entities</div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search sources..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-md border border-border bg-bg/30 px-3 py-2 pr-10 text-sm text-text placeholder:text-muted hover:bg-bg/50 hover:border-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none"
        />
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted pointer-events-none" />
      </div>

      {/* ── Sources ── */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between px-1 mb-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Sources</p>
          {selectedSources.size > 0 && (
            <button
              onClick={clearSources}
              className="text-xs text-muted hover:text-text transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {filteredSources.map(source => {
          const selected = selectedSources.has(source.name);
          return (
            <div
              key={source.id}
              className={`flex items-center justify-between rounded-md px-2 py-2 border border-transparent text-sm transition-colors ${
                selected ? 'bg-panel2 border-border/60' : 'hover:bg-panel2/50'
              }`}
            >
              <span className="flex items-center gap-2 min-w-0">
                <input
                  type="checkbox" title="toggle"
                  className="accent-blue-500 cursor-pointer"
                  checked={selected}
                  onChange={() => toggleSource(source.name)}
                />
                <span className="text-text truncate select-none">{source.name}</span>
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {source.status === 'warning' ? (
                  <AlertTriangle size={14} className="text-amber-400" />
                ) : (
                  <Check size={13} strokeWidth={2.5} className="text-emerald-400" />
                )}
              </div>
            </div>
          );
        })}

        {filteredSources.length === 0 && (
          <div className="px-2 py-2 text-sm text-muted">No sources match your search.</div>
        )}
      </div>

      <div className="border-t border-border" />

      {/* ── Common Entities ── */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between mb-1">
          <button
            type="button"
            onClick={() => setEntitiesExpanded(v => !v)}
            className="flex items-center justify-between w-full px-1 text-muted hover:text-text transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-widest">Common Entities</span>
            <ChevronDown
              size={13}
              strokeWidth={2}
              style={{
                transform: entitiesExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>
        </div>

        {entitiesExpanded && (
          <>
            {entityItems.map(entity => {
              const selected = selectedEntities.has(entity.name);
              return (
                <div
                  key={entity.id}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 border border-transparent text-sm transition-colors ${
                    selected ? 'bg-panel2 border-border/60' : 'hover:bg-panel2/50'
                  }`}
                >
                  <span className="flex items-center gap-2 flex-1 min-w-0">
                    <input
                      type="checkbox" title="toggle"
                      className="accent-blue-500 cursor-pointer"
                      checked={selected}
                      onChange={() => toggleEntity(entity.name)}
                    />
                    <span className="text-text select-none truncate">{entity.name}</span>
                  </span>
                  <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted font-medium">
                    {entity.count}
                  </span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}