import React from 'react';
import Button from '../common/Button';
import { Confidence } from '../../utils/confidence';

function Pill({ label, active }: { label: string; active: boolean }) {
  return <span className={`rounded-full border px-2 py-0.5 text-xs ${active ? 'border-accent/60 bg-accent/15 text-text' : 'border-border bg-panel2 text-muted'}`}>{label}</span>;
}

export default function DiscoveryStartBar({
  confidence, recommendedConnectedCount, recommendedTotal, canStart, onStart, onUpload
}: { confidence: Confidence; recommendedConnectedCount: number; recommendedTotal: number; canStart: boolean; onStart: ()=>void; onUpload: ()=>void }) {
  const microcopy = confidence==='LOW' ? 'Connect at least 1 source to start.' : confidence==='MEDIUM' ? 'Connect 1 more source to reach High.' : 'High confidence ready.';
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Pill label="Low" active={confidence==='LOW'} />
            <Pill label="Medium" active={confidence==='MEDIUM'} />
            <Pill label="High" active={confidence==='HIGH'} />
            <span className="ml-2 text-xs text-muted">Connected: <span className="text-text">{recommendedConnectedCount}</span> of <span className="text-text">{recommendedTotal}</span> recommended</span>
          </div>
          <div className="text-xs text-muted">{microcopy}</div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={onUpload}>Upload Files Instead</Button>
          <Button variant="primary" onClick={onStart} disabled={!canStart} title={!canStart ? 'Connect at least one source to continue' : undefined}>Start Discovery Run</Button>
        </div>
      </div>
    </div>
  );
}
