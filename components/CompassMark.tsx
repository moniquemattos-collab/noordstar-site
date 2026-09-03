export function CompassMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M15.2 8.8 13 13l-4.2 2.2L11 11l4.2-2.2Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
