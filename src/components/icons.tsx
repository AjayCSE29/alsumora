type IconProps = {
  className?: string;
};

const baseProps = {
  'aria-hidden': true,
  focusable: false,
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
} as const;

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 4.25 6 7.75l3.5-3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" {...baseProps}>
      <circle cx="8.75" cy="8.75" r="5.5" />
      <path d="m13 13 4 4" strokeLinecap="round" />
    </svg>
  );
}



export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" {...baseProps}>
      <path d="M2.5 6h15M2.5 10h15M2.5 14h15" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" {...baseProps}>
      <path d="m4.5 4.5 11 11M15.5 4.5l-11 11" strokeLinecap="round" />
    </svg>
  );
}

export function FilterIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" {...baseProps}>
      <path d="M3 6h14M5.5 10h9M8 14h4" strokeLinecap="round" />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.2" {...baseProps}>
      <rect x="2.75" y="2.75" width="5.5" height="5.5" />
      <rect x="11.75" y="2.75" width="5.5" height="5.5" />
      <rect x="2.75" y="11.75" width="5.5" height="5.5" />
      <rect x="11.75" y="11.75" width="5.5" height="5.5" />
    </svg>
  );
}
