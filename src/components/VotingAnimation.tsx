import { useState, useEffect } from "react";
import { CheckCircle2, Zap, Shield } from "lucide-react";

const VotingAnimation = () => {
  const [votes, setVotes] = useState<Array<{ id: number; delay: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newVote = {
        id: Date.now(),
        delay: 0,
      };
      setVotes((prev) => [...prev, newVote]);

      // Remove vote after animation completes
      setTimeout(() => {
        setVotes((prev) => prev.filter((v) => v.id !== newVote.id));
      }, 3000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
      {/* Animated background glow */}
      <div className="absolute inset-0 gradient-glow-primary blur-3xl rounded-full animate-glow-pulse"></div>
      <div className="absolute inset-0 gradient-glow-secondary blur-3xl rounded-full animate-glow-pulse" style={{ animationDelay: "1.5s" }}></div>

      {/* Digital grid lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-digital-line"
            style={{
              top: `${(i + 1) * 12.5}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main holographic ballot box */}
      <div className="relative z-10">
        <div className="relative">
          {/* Holographic slot with glow */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-3 bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-glow"></div>

          {/* Main box with futuristic design */}
          <div className="w-64 h-64 gradient-card rounded-3xl shadow-glow border-2 border-primary/50 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
            
            {/* Central holographic icon */}
            <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow animate-pulse">
              <CheckCircle2 className="w-14 h-14 text-background" strokeWidth={3} />
            </div>

            {/* Decorative tech elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/50 rounded-full shadow-glow animate-float">
              <Shield className="w-4 h-4 text-primary m-auto mt-1" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-secondary/50 rounded-full shadow-glow-secondary animate-float" style={{ animationDelay: "1s" }}>
              <Zap className="w-4 h-4 text-secondary m-auto mt-1" />
            </div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/70"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/70"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-secondary/70"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-secondary/70"></div>
          </div>

          {/* Slot detail glow */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-full blur-sm"></div>
        </div>

        {/* Animated holographic voting papers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
          {votes.map((vote) => (
            <div
              key={vote.id}
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-20 gradient-card rounded-lg shadow-glow border-2 border-primary/60 animate-vote-fall backdrop-blur-sm"
            >
              <div className="p-2 flex flex-col items-center justify-center h-full">
                <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full mb-1 shadow-glow"></div>
                <div className="w-16 h-1 bg-primary/50 rounded-full mb-1"></div>
                <div className="w-12 h-1 bg-secondary/50 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles with varied movements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-particle-drift"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 3)}s`,
              '--x': `${(i % 2 === 0 ? 1 : -1) * (30 + i * 10)}px`,
              '--y': `${(i % 3 === 0 ? 1 : -1) * (40 + i * 5)}px`,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VotingAnimation;
