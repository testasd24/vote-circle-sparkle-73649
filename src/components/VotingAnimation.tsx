import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

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
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Main ballot box */}
      <div className="relative z-10">
        {/* Box body */}
        <div className="relative">
          {/* Box top slot */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"></div>

          {/* Main box */}
          <div className="w-64 h-64 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border-4 border-primary/30 flex items-center justify-center relative overflow-hidden">
            {/* Box design elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-secondary/10"></div>
            
            {/* Checkmark icon in center */}
            <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={3} />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
          </div>

          {/* Slot detail */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full"></div>
        </div>

        {/* Animated voting papers/cards falling into box */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
          {votes.map((vote) => (
            <div
              key={vote.id}
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-white to-blue-100 rounded-lg shadow-xl border-2 border-primary/40 animate-vote-fall"
            >
              <div className="p-2 flex flex-col items-center justify-center h-full">
                <div className="w-4 h-4 bg-primary rounded-full mb-1"></div>
                <div className="w-16 h-1 bg-muted rounded-full mb-1"></div>
                <div className="w-12 h-1 bg-muted rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VotingAnimation;
