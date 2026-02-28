import type { SVGProps } from "react";

const OptimalControl = (props: SVGProps<SVGSVGElement>) => (
  // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">

    <path d="M20 40 Q60 95 100 40"
          stroke="currentColor" strokeWidth="8" fill="none"/>

    <path d="M30 42 Q60 82 90 42"
          stroke="currentColor" strokeWidth="3" fill="none"/>

     <path d="M60 12 L60 55"
        stroke="currentColor" strokeWidth="8" fill="none"/>

    <polygon points="60,60 50,40 70,40" fill="currentColor"/>

    <circle cx="60" cy="85" r="10" fill="currentColor"/>

  </svg>

);

export { OptimalControl };
