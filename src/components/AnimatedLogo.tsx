const AnimatedLogo = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Outer rotating ring */}
      <div className="absolute w-full h-full animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(199 89% 48%)"
            strokeWidth="3"
            strokeDasharray="30 10"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Middle rotating ring */}
      <div className="absolute w-5/6 h-5/6 animate-spin-reverse">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(180 89% 58%)"
            strokeWidth="4"
            strokeDasharray="20 15"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Inner static ring with glow */}
      <div className="absolute w-3/4 h-3/4 animate-pulse-glow">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(14,165,233,0.6)]">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="hsl(199 89% 68%)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Center circle with gradient */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(14,165,233,0.5)]" />
      
      {/* Small decorative dots */}
      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2 animate-pulse-glow" />
      <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-4 right-8 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute w-2 h-2 bg-cyan-300 rounded-full top-8 left-4 animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AnimatedLogo;
