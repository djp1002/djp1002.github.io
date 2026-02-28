import type { SVGProps } from "react";

const ClassicalControl = (props: SVGProps<SVGSVGElement>) => (
  // <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <svg {...props} xmlns="http://www.w3.org/2000/svg"  width="320" height="240" className="size-8" viewBox="0 0 160 120">

  <line x1="10" y1="60" x2="28" y2="60" stroke="currentColor" strokeWidth="5"/>
  <polygon points="32,60 26,56 26,64" fill="currentColor"/>
  <text x="12" y="52" fill="currentColor" fontSize="20" fontFamily="Arial">r</text>

  <circle cx="40" cy="60" r="7" stroke="currentColor" strokeWidth="5" fill="none"/>
  <text x="36" y="50" fill="currentColor" fontSize="20" fontFamily="Arial">+</text>
  <text x="22" y="82" fill="currentColor" fontSize="20" fontFamily="Arial">−</text>

  <rect x="55" y="40" width="35" height="40" rx="4" stroke="currentColor" strokeWidth="5" fill="none"/>
  <text x="58" y="65" fill="currentColor" fontSize="15" fontFamily="Arial">C(s)</text>

  <rect x="105" y="40" width="35" height="40" rx="4" stroke="currentColor" strokeWidth="5" fill="none"/>
  <text x="108" y="65" fill="currentColor" fontSize="15" fontFamily="Arial">G(s)</text>

  <line x1="47" y1="60" x2="55" y2="60" stroke="currentColor" strokeWidth="5"/>
  <line x1="90" y1="60" x2="105" y2="60" stroke="currentColor" strokeWidth="5"/>

  <line x1="140" y1="60" x2="152" y2="60" stroke="currentColor" strokeWidth="5"/>
  <polygon points="156,60 150,56 150,64" fill="currentColor"/>
  <text x="150" y="52" fill="currentColor" fontSize="20" fontFamily="Arial">y</text>

  <path d="M150 60 V95 H40 V67" stroke="currentColor" strokeWidth="5" fill="none"/>
  <polygon points="40,67 36,73 44,73" fill="currentColor"/>

</svg>

);

export { ClassicalControl };
