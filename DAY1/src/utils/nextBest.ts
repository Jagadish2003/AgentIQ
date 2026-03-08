import { SelectedCard } from '../types/connector';

export interface NextBestSuggestion {
  id: SelectedCard;
  label: string;
  reason: string;
}

export const NEXT_BEST_SOURCES: NextBestSuggestion[] = [
  { id: 'jira',  label: 'Jira & Confluence', reason: '5,847 records ready to ingest' },
  { id: 'm365',  label: 'Microsoft 365',      reason: 'Emails & Teams Chats available' },
];

export function getNextBestSource(current: SelectedCard): NextBestSuggestion | undefined {
  return NEXT_BEST_SOURCES.find((s) => s.id !== current);
}
