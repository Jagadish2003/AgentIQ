import React from 'react';
import { useNormalizationContext } from '../../context/NormalizationContext';

function pill(v: string) {
  const cls =
    v === 'HIGH'
      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
      : v === 'MEDIUM'
      ? 'border-amber-500/40 bg-amber-500/10 text-amber-200'
      : 'border-red-500/40 bg-red-500/10 text-red-200';
  return <span className={`rounded-full border px-2 py-0.5 text-xs ${cls}`}>{v}</span>;
}

export default function MappingTable() {
  const {
    filteredRows, selectedRowId, setSelectedRowId,
    search, setSearch,
    sources, sourceFilter, setSourceFilter,
    entities, entityFilter, setEntityFilter,
    sortMode, setSortMode,
  } = useNormalizationContext();

  return (
    <div className="rounded-xl border border-border bg-panel p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-semibold text-text whitespace-nowrap">Mapping Table</div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fields…"
            className="w-56 rounded-md border border-border bg-bg/30 px-3 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:border-[#00B4B4]"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <select
            className="w-full rounded-md border border-border bg-bg/30 px-3 py-2 text-sm text-text focus:outline-none focus:border-[#00B4B4]"
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
          >
            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            className="w-full rounded-md border border-border bg-bg/30 px-3 py-2 text-sm text-text focus:outline-none focus:border-[#00B4B4]"
            value={entityFilter}
            onChange={(e) => setEntityFilter(e.target.value)}
          >
            {entities.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
          <select
            className="w-full rounded-md border border-border bg-bg/30 px-3 py-2 text-sm text-text focus:outline-none focus:border-[#00B4B4]"
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as any)}
          >
            <option value="Confidence High→Low">Sort: Confidence High→Low</option>
            <option value="Source A→Z">Sort: Source A→Z</option>
          </select>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-[2fr_1fr_0.3fr_1.5fr_0.8fr] bg-bg/20 px-3 py-2 text-xs font-semibold text-text">
          <div>Source Field</div>
          <div>Source Type</div>
          <div className="text-center">→</div>
          <div>Common Field</div>
          <div>Confidence</div>
        </div>
        <div className="max-h-[460px] overflow-auto bg-bg/10">
          {filteredRows.map((r) => {
            const active = r.id === selectedRowId;
            return (
              <div
                key={r.id}
                onClick={() => setSelectedRowId(r.id)}
                className={`grid cursor-pointer grid-cols-[2fr_1fr_0.3fr_1.5fr_0.8fr] gap-2 border-t border-border/60 px-3 py-3 text-sm ${
                  active ? 'bg-panel2' : 'hover:bg-panel2'
                }`}
              >
                <div className="min-w-0">
                  <div className="text-text">{r.sourceSystem}.{r.sourceField}</div>
                  <div className="mt-0.5 text-xs text-muted">{r.commonEntity}</div>
                </div>
                <div className="text-muted">{r.sourceType}</div>
                <div className="text-center text-muted">→</div>
                <div className="text-text">{r.commonField}</div>
                <div>{pill(r.confidence)}</div>
              </div>
            );
          })}
          {filteredRows.length === 0 && (
            <div className="p-4 text-sm text-muted">No rows match your filters.</div>
          )}
        </div>
      </div>

      <div className="mt-3 text-xs text-muted">
        This is a transparency view: it shows exactly how source fields map into the common schema.
      </div>
    </div>
  );
}