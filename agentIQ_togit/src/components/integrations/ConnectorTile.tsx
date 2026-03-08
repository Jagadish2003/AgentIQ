import React from 'react';
import { Connector } from '../../types/connector';

const IconMap: Record<string, React.ReactNode> = {
  sap: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#374151" strokeWidth="1.3"/>
      <path d="M5.5 10.5V5.5h3a1.5 1.5 0 010 3H5.5" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5a6.5 6.5 0 00-2.06 12.67c.32.06.44-.14.44-.31v-1.1c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.53.71 1.9.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.7.25-1.28.67-1.73-.07-.16-.29-.82.06-1.7 0 0 .55-.18 1.8.67A6.3 6.3 0 018 5.5c.56 0 1.12.07 1.64.22 1.25-.85 1.8-.67 1.8-.67.35.88.13 1.54.06 1.7.42.45.67 1.03.67 1.73 0 2.48-1.51 3.03-2.95 3.19.23.2.44.6.44 1.2v1.79c0 .17.11.37.44.31A6.5 6.5 0 008 1.5z" stroke="#374151" strokeWidth="0.5" fill="#374151"/>
    </svg>
  ),
  slack: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="#374151" strokeWidth="1.3"/>
      <path d="M5.5 8h5M8 5.5v5" stroke="#374151" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  databricks: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L14.5 5.5V10.5L8 14.5L1.5 10.5V5.5L8 1.5Z" stroke="#374151" strokeWidth="1.3"/>
    </svg>
  ),
};

function TileIcon({ id }: { id: string }) {
  return (
    <span className="flex-shrink-0">
      {IconMap[id] ?? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="#374151" strokeWidth="1.3"/>
        </svg>
      )}
    </span>
  );
}

export default function ConnectorTile({
  connector, selected, onSelect, onPrimary
}: {
  connector: Connector;
  selected: boolean;
  onSelect: () => void;
  onPrimary: () => void;
}) {
  const isConnected = connector.status === 'connected';
  const isComingSoon = connector.status === 'coming_soon';

  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-xl border p-3 flex flex-col gap-2 bg-white transition-colors
        ${selected ? 'border-text/40 ring-1 ring-text/20' : 'border-border hover:border-text/30'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <TileIcon id={connector.id} />
          <span className="text-xs font-semibold text-text truncate">{connector.name}</span>
        </div>
        {isComingSoon && (
          <span className="text-[10px] border border-border text-muted px-1.5 py-0.5 rounded flex-shrink-0 bg-panel2">
            Regulated
          </span>
        )}
      </div>

      {isComingSoon ? (
        <div className="flex flex-col gap-1 flex-1">
          <div className="text-xs font-medium text-text">Coming soon</div>
          <div className="text-[11px] text-muted leading-tight">
            {connector.reads.slice(0, 3).join(', ')}
          </div>
          <div className="flex gap-1.5 mt-auto pt-1">
            <span className="text-[10px] border border-border text-muted px-2 py-0.5 rounded bg-panel2">Regulated</span>
            <span className="text-[10px] border border-border text-muted px-2 py-0.5 rounded bg-panel2">Coming soon</span>
          </div>
          <div className="flex items-center gap-1.5 pt-1">
            <span className="h-2 w-2 rounded-full bg-border flex-shrink-0" />
            <span className="text-[11px] text-muted truncate">Service Name</span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" className="text-text flex-shrink-0">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span className="text-[11px] text-muted">Connected</span>
          </div>

          {connector.reads.slice(0, 2).map(r => (
            <div key={r} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-border flex-shrink-0" />
              <span className="text-[11px] text-muted truncate">{r}</span>
            </div>
          ))}

          <button
            onClick={(e) => { e.stopPropagation(); onPrimary(); }}
            className="mt-auto w-full flex items-center justify-center gap-1.5 rounded-md border border-border bg-white px-2 py-1.5 text-[11px] font-medium text-text hover:bg-panel2 transition-colors"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" className="text-text">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            View data
          </button>
        </>
      )}
    </div>
  );
}