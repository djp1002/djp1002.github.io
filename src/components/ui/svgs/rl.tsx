import type { SVGProps } from "react";

const RL = (props: SVGProps<SVGSVGElement>) => (
  // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="140" height="160" viewBox="0 0 140 160">

  {/* <!-- Agent --> */}
  <circle cx="30" cy="80" r="20" stroke="currentColor" strokeWidth="8" fill="none"/>
  <circle cx="24" cy="78" r="4" fill="currentColor"/>
  <circle cx="36" cy="78" r="4" fill="currentColor"/>
  <line x1="30" y1="64" x2="30" y2="45" stroke="currentColor" strokeWidth="8"/>
  <circle cx="30" cy="40" r="4" fill="currentColor"/>

  {/* <!-- Environment --> */}
  <circle cx="110" cy="80" r="22" stroke="currentColor" strokeWidth="5" fill="none"/>
  <ellipse cx="110" cy="80" rx="12" ry="22" stroke="currentColor" strokeWidth="3" fill="none"/>
  <line x1="88" y1="80" x2="132" y2="80" stroke="currentColor" strokeWidth="3"/>

  {/* <!-- Action (top, aligned) --> */}
  <path d="M46 52 C70 10, 90 10, 114 52"
        stroke="currentColor" strokeWidth="8" fill="none"/>
  <polygon points="119,45 105,50 116,60" fill="currentColor"/>

  {/* <!-- Reward (bottom, aligned) --> */}
  <path d="M114 108 C90 150, 70 150, 46 108"
        stroke="currentColor" strokeWidth="8" fill="none"/>
  <polygon points="42,118 56,112 42,100" fill="currentColor"/>

</svg>

);

export { RL };
