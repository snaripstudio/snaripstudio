interface AnimatedBackgroundProps {
  color?: string;
}

const AnimatedBackground = ({ color = "#7B7481" }: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(135deg, ${color}40 0%, ${color}60 25%, ${color}80 50%, ${color}60 75%, ${color}40 100%)`
        }}
      />
      
      {/* Animated silk-like pattern overlay */}
      <div className="silk-pattern absolute inset-0 w-full h-full opacity-60" />
      
      {/* Floating particles */}
      <div className="particles-container absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .silk-pattern {
          background: 
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 0%, transparent 50%),
            radial-gradient(circle at 90% 20%, rgba(255,255,255,0.04) 0%, transparent 50%),
            linear-gradient(45deg, 
              transparent 30%, 
              rgba(255,255,255,0.02) 50%, 
              transparent 70%
            );
          background-size: 400px 400px, 300px 300px, 500px 500px, 200px 200px, 100% 100%;
          animation: silk-flow 20s ease-in-out infinite;
        }

        @keyframes silk-flow {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
            background-position: 0% 0%, 100% 100%, 50% 50%, 80% 20%, 0% 0%;
          }
          25% {
            transform: translate(-10px, -5px) rotate(1deg);
            background-position: 25% 25%, 75% 75%, 40% 60%, 70% 30%, 10% 10%;
          }
          50% {
            transform: translate(5px, -10px) rotate(-0.5deg);
            background-position: 50% 50%, 50% 50%, 30% 70%, 60% 40%, 20% 20%;
          }
          75% {
            transform: translate(-5px, 5px) rotate(0.5deg);
            background-position: 75% 25%, 25% 75%, 60% 40%, 90% 10%, 30% 30%;
          }
        }

        .particle {
          animation: float infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-10vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
