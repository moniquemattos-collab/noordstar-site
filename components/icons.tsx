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

export function IconQuestion({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4V16H6.5A2.5 2.5 0 0 1 4 13.5Z" />
      <path d="M9.5 8.3a2.2 2.2 0 1 1 3.3 1.9c-.8.5-1.3 1-1.3 1.9" />
      <circle cx="11.6" cy="13.7" r=".15" fill="currentColor" />
    </svg>
  );
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="6" />
      <path d="M8 12.5l2.7 2.7L16.5 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
