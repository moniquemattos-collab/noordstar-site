export function NorthStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <polygon points="12,2 14.2,9.8 22,12 14.2,14.2 12,22 9.8,14.2 2,12 9.8,9.8" />
    </svg>
  );
}
