import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import IntegrationHubPage from './pages/IntegrationHubPage';
import SourceIntakePlaceholder from './pages/SourceIntakePlaceholder';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/integration-hub" replace />} />
        <Route path="/integration-hub" element={<IntegrationHubPage />} />
        <Route path="/source-intake"   element={<SourceIntakePlaceholder />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
