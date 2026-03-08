import { createContext, useContext, useState, ReactNode } from 'react';
import { SelectedCard } from '../types/connector';

interface ConnectorContextValue {
  selectedCard: SelectedCard;
  setSelectedCard: (c: SelectedCard) => void;
  confidence: number;
  toast: string | null;
  showToast: (msg: string) => void;
}

const ConnectorContext = createContext<ConnectorContextValue | undefined>(undefined);

export function ConnectorProvider({ children }: { children: ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<SelectedCard>('servicenow');
  const [confidence]                    = useState<number>(33);
  const [toast, setToast]               = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <ConnectorContext.Provider value={{ selectedCard, setSelectedCard, confidence, toast, showToast }}>
      {children}
    </ConnectorContext.Provider>
  );
}

export function useConnector(): ConnectorContextValue {
  const ctx = useContext(ConnectorContext);
  if (!ctx) throw new Error('useConnector must be inside ConnectorProvider');
  return ctx;
}
