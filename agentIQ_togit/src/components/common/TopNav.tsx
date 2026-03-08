import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TopNav() {
  const loc = useLocation();
  const reportsActive = loc.pathname === '/reports';
  return (
    <div className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-3 gap-4">
        <Link
          to="/reports"
          className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
            reportsActive ? 'bg-panel2 text-text' : 'text-muted hover:text-text hover:bg-panel2'
          }`}
        >
          Reports
        </Link>
        <div className="h-8 w-8 rounded-full bg-panel2 border border-border flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted">
            <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}