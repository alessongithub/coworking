export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="220"
        height="45"
        viewBox="0 0 220 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        
        {/* Background circle for visual appeal */}
        <circle cx="22" cy="22" r="18" fill="url(#logoGradient2)" opacity="0.1" />
        
        {/* Icon/Shape */}
        <path
          d="M12 22 L22 12 L32 22 L22 32 Z"
          fill="url(#logoGradient)"
          opacity="0.8"
        />
        <circle cx="22" cy="22" r="6" fill="white" />
        
        {/* Text completo usando tspan para melhor controle */}
        <text
          x="45"
          y="30"
          fontSize="20"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5px"
        >
          <tspan fill="url(#logoGradient)">Hub Co </tspan>
          <tspan fill="#0369a1">working</tspan>
        </text>
      </svg>
    </div>
  )
}

