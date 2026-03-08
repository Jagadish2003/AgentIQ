import { ChevronRightProps } from '../../types/connector';

export const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronRight = ({ size = 14 }: ChevronRightProps) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExternalLink = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M7 1H11V5M11 1L5.5 6.5M4 2H2C1.45 2 1 2.45 1 3V10C1 10.55 1.45 11 2 11H9C9.55 11 10 10.55 10 10V8"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowUp = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UploadArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LogoMark = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 9L9 3L15 9L9 15L3 9Z" fill="none" stroke="#33D1C6" strokeWidth="1.8" />
    <path d="M9 6L12 9L9 12L6 9L9 6Z" fill="#33D1C6" />
  </svg>
);

export const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="6" r="3" stroke="#9FB3C8" strokeWidth="1.5" />
    <path d="M2 14C2 11.24 4.69 9 8 9s6 2.24 6 5" stroke="#9FB3C8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ServiceNowIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="10" stroke="#33D1C6" strokeWidth="1.5" />
    <path d="M7 11C7 8.79 8.79 7 11 7s4 1.79 4 4-1.79 4-4 4" stroke="#33D1C6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const JiraIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2L20 11L11 20L2 11L11 2Z" stroke="#9FB3C8" strokeWidth="1.5" />
    <path d="M11 7L15 11L11 15" stroke="#9FB3C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const M365Icon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2"  y="2"  width="8" height="8" rx="1.5" stroke="#9FB3C8" strokeWidth="1.5" />
    <rect x="12" y="2"  width="8" height="8" rx="1.5" stroke="#9FB3C8" strokeWidth="1.5" />
    <rect x="2"  y="12" width="8" height="8" rx="1.5" stroke="#9FB3C8" strokeWidth="1.5" />
    <rect x="12" y="12" width="8" height="8" rx="1.5" stroke="#9FB3C8" strokeWidth="1.5" />
  </svg>
);

export const SAPIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 10C3 6.13 6.13 3 10 3s7 3.13 7 7-3.13 7-7 7" stroke="#9FB3C8" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10" cy="10" r="3" stroke="#9FB3C8" strokeWidth="1.5" />
  </svg>
);

export const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34C5.73 16.37 5.27 14.82 5.27 14.82c-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.69 7.69 0 0110 5.97c.68 0 1.36.09 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C15.71 16.53 18 13.54 18 10c0-4.42-3.58-8-8-8z"
      fill="#9FB3C8" />
  </svg>
);

export const SlackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2"  y="8"  width="4" height="4" rx="2" stroke="#9FB3C8" strokeWidth="1.4" />
    <rect x="8"  y="2"  width="4" height="4" rx="2" stroke="#9FB3C8" strokeWidth="1.4" transform="rotate(90 10 4)" />
    <rect x="14" y="8"  width="4" height="4" rx="2" stroke="#9FB3C8" strokeWidth="1.4" />
    <rect x="8"  y="14" width="4" height="4" rx="2" stroke="#9FB3C8" strokeWidth="1.4" transform="rotate(90 10 16)" />
  </svg>
);

export const DataBricksIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L18 6.5V10L10 14.5L2 10V6.5L10 2Z" stroke="#1D2B45" strokeWidth="1.4" />
    <path d="M2 10L10 14.5L18 10"  stroke="#1D2B45" strokeWidth="1.4" />
    <path d="M10 14.5V18"          stroke="#1D2B45" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const CMDBIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="16" height="16" rx="3" stroke="#9FB3C8" strokeWidth="1.4" />
    <path d="M5 9H13M5 6H10M5 12H11" stroke="#9FB3C8" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const TicketIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M1 6.5V4C1 2.9 1.9 2 3 2H15C16.1 2 17 2.9 17 4V6.5C15.9 6.5 15 7.4 15 8.5S15.9 10.5 17 10.5V13C17 14.1 16.1 15 15 15H3C1.9 15 1 14.1 1 13V10.5C2.1 10.5 3 9.6 3 8.5S2.1 6.5 1 6.5Z"
      stroke="#9FB3C8" strokeWidth="1.4" />
  </svg>
);

export const LogIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M14 2H4C2.9 2 2 2.9 2 4V14C2 15.1 2.9 16 4 16H14C15.1 16 16 15.1 16 14V4C16 2.9 15.1 2 14 2Z"
      stroke="#9FB3C8" strokeWidth="1.4" />
    <path d="M5 6H13M5 9H10M5 12H11" stroke="#9FB3C8" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
