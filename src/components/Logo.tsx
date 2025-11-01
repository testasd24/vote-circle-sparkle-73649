import voteLogo from "@/assets/vote-logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img 
        src={voteLogo} 
        alt="VoteSystem Logo" 
        className="w-12 h-12 object-contain"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        VoteSystem
      </span>
    </div>
  );
};

export default Logo;
