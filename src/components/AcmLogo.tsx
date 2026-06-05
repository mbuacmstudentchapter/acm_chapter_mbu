import React from "react";

interface AcmLogoProps {
  className?: string;
}

export default function AcmLogo({ className = "w-10 h-10" }: AcmLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} select-none filter drop-shadow-[0_2px_8px_rgba(0,114,206,0.15)]`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Diamond Gradient */}
        <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="60%" stopColor="#0072CE" />
          <stop offset="100%" stopColor="#003366" />
        </linearGradient>

        {/* Text Paths */}
        {/* Top Text Path (Clockwise along top, radius 42) */}
        <path
          id="acmLogoTopPath"
          d="M 11,50 A 39,39 0 0,1 89,50"
          fill="none"
        />
        {/* Bottom Text Path (Clockwise along bottom, radius 42) */}
        <path
          id="acmLogoBottomPath"
          d="M 11,50 A 39,39 0 0,0 89,50"
          fill="none"
        />
      </defs>

      {/* Outer Circle Ring */}
      <circle cx="50" cy="50" r="48" fill="white" stroke="#005CA9" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="37.5" fill="none" stroke="#005CA9" strokeWidth="1.2" />

      {/* Top Text: Association for Computing Machinery */}
      <text fill="#002D62" fontWeight="700" fontFamily="var(--font-plus-jakarta-sans), var(--font-inter), sans-serif">
        <textPath href="#acmLogoTopPath" startOffset="50%" textAnchor="middle" fontSize="4.6">
          Association for Computing Machinery
        </textPath>
      </text>

      {/* Bottom Text: MOHAN BABU UNIVERSITY */}
      <text fill="#002D62" fontWeight="700" fontFamily="var(--font-plus-jakarta-sans), var(--font-inter), sans-serif">
        <textPath href="#acmLogoBottomPath" startOffset="50%" textAnchor="middle" fontSize="5">
          MOHAN BABU UNIVERSITY
        </textPath>
      </text>

      {/* Inner Diamond (Rotated 45 degrees) */}
      <g transform="rotate(45 50 50)">
        <rect
          x="24"
          y="24"
          width="52"
          height="52"
          rx="4"
          fill="url(#diamondGrad)"
          stroke="#005CA9"
          strokeWidth="1.2"
        />
      </g>

      {/* Central White Circle */}
      <circle cx="50" cy="50" r="16.5" fill="white" stroke="#005CA9" strokeWidth="1" />

      {/* Central Text */}
      <text
        x="50"
        y="47"
        textAnchor="middle"
        fill="#002D62"
        fontSize="10"
        fontWeight="800"
        fontFamily="var(--font-outfit), var(--font-space-grotesk), sans-serif"
      >
        acm
      </text>
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="#0072CE"
        fontSize="5.5"
        fontWeight="700"
        fontFamily="var(--font-plus-jakarta-sans), var(--font-inter), sans-serif"
      >
        Chapter
      </text>
    </svg>
  );
}
