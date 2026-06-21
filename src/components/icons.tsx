// Small, dependency-free inline SVG icons.
// Kept as React components (not an icon library) to avoid adding bundle
// weight for a handful of one-off icons.

export function ChartIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M6 32L14 20L20 26L28 14L34 22"
        stroke="#027ef9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 14H34V20"
        stroke="#027ef9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GridIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="2" stroke="#027ef9" strokeWidth="1.8" />
      <rect x="18" y="4" width="10" height="10" rx="2" stroke="#027ef9" strokeWidth="1.8" />
      <rect x="4" y="18" width="10" height="10" rx="2" stroke="#027ef9" strokeWidth="1.8" />
      <rect x="18" y="18" width="10" height="10" rx="2" stroke="#027ef9" strokeWidth="1.8" />
    </svg>
  );
}

export function TeamIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M22 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-12 0c2.21 0 4-1.79 4-4S12.21 6 10 6 6 7.79 6 10s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm12 0c-.33 0-.71.02-1.1.05 1.32.93 2.1 2.31 2.1 3.95v2h6v-2c0-2.66-5.33-4-7-4z"
        fill="#027ef9"
      />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="1.6" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8l10 6 10-6" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12h6m-3-3l3 3-3 3" />
    </svg>
  );
}

const featureIcons = {
  scan: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8m-4-4v4" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  gate: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  chart: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
} as const;

export type FeatureIconName = keyof typeof featureIcons;

export function FeatureIcon({ name }: { name: FeatureIconName }) {
  return featureIcons[name];
}
