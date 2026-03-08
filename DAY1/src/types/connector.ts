import { ReactNode } from 'react';

export type BadgeVariant = 'default' | 'connected' | 'regulated' | 'soon';
export type SelectedCard  = 'servicenow' | 'jira' | 'm365';
export type ConfidenceLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface StatItem {
  bold?: string;
  label: string;
  connected: boolean;
}

export interface ActionItem {
  label: string;
  onClick?: () => void;
}

export interface NavItem {
  label: string;
  path: string;
  active: boolean;
}

export interface AccessItem {
  icon: ReactNode;
  label: string;
  arrow: boolean;
}

export interface PrimaryCardProps {
  icon: ReactNode;
  title: string;
  stats: StatItem[];
  actions: ActionItem[];
  selected: boolean;
  onClick: () => void;
}

export interface CoverageCardProps {
  icon: ReactNode;
  title: string;
  objectLabel: string;
}

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

export interface ConfidenceSliderProps {
  value: number;
}

export interface ChevronRightProps {
  size?: number;
}
