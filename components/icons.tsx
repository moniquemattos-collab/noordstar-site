type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconDashboard({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <rect x="13" y="10" width="8" height="11" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

export function IconMatrix({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M3 3v18h18" />
      <circle cx="8" cy="16" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="14" cy="10" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18" cy="6" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="11" cy="14" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBalance({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M12 3v18M12 6l-7 3 3.5 6.5L12 13m0-7l7 3-3.5 6.5L12 13" />
    </svg>
  );
}

export function IconRoadmap({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M3 12h18" />
      <circle cx="6" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconChecklist({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
    </svg>
  );
}

export function IconDecision({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M5 3v18" />
      <path d="M5 4h11l-3 4 3 4H5" />
    </svg>
  );
}
