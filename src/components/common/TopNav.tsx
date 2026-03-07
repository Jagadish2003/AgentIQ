import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const items = [{ to: '/integration-hub', label: 'Integration Hub' }, { to: '/reports', label: 'Reports' }];

export default function TopNav() {
  const loc = useLocation();
  return (
    <div className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-accent/20" />
          <div className="font-semibold text-text">AgentIQ</div>
        </div>
        <div className="flex items-center gap-1">
          {items.map(i => {
            const active = loc.pathname === i.to;
            return (
              <Link key={i.to} to={i.to} className={`rounded-md px-3 py-2 text-sm ${active ? 'bg-panel2 text-text' : 'text-muted hover:bg-panel2 hover:text-text'}`}>
                {i.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <div className="h-8 w-8 rounded-full bg-panel2" />
          Admin
        </div>
      </div>
    </div>
  );
}
