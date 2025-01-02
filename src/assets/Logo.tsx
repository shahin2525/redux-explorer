const Logo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4facfe" stopOpacity="1" />
        <stop offset="100%" stopColor="#00f2fe" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g fill="url(#gradient)">
      <path d="M50 15 Q60 35 50 55 Q40 35 50 15 Z" />
      <path d="M50 85 Q60 65 50 45 Q40 65 50 85 Z" />
      <path d="M15 50 Q35 60 55 50 Q35 40 15 50 Z" />
      <path d="M85 50 Q65 60 45 50 Q65 40 85 50 Z" />
    </g>
  </svg>
);

export default Logo;
