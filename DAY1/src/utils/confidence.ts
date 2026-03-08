import { ConfidenceLevel } from '../types/connector';

export const CONFIDENCE_POSITIONS: Record<ConfidenceLevel, number> = {
  LOW: 0, MEDIUM: 50, HIGH: 100,
};
export const CONFIDENCE_LABELS: ConfidenceLevel[] = ['LOW', 'MEDIUM', 'HIGH'];

export function getConfidenceLabel(value: number): ConfidenceLevel {
  if (value <= 20) return 'LOW';
  if (value <= 65) return 'MEDIUM';
  return 'HIGH';
}
