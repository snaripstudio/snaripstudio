export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        {/* SnaripStudio Logo/Text */}
        <div className="loading-brand">
          <span className="brand-text">SnaripStudio</span>
        </div>

        {/* Creative Loading Animation */}
        <div className="loading-animation">
          {/* Orbiting Dots */}
          <div className="orbit-container">
            <div className="orbit-dot orbit-dot-1"></div>
            <div className="orbit-dot orbit-dot-2"></div>
            <div className="orbit-dot orbit-dot-3"></div>
            <div className="center-dot"></div>
          </div>

          {/* Pulsing Lines */}
          <div className="pulse-lines">
            <div className="pulse-line pulse-line-1"></div>
            <div className="pulse-line pulse-line-2"></div>
            <div className="pulse-line pulse-line-3"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="loading-dots">Loading</span>
        </div>
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
        }

        .loading-container {
          text-align: center;
          position: relative;
        }

        /* Brand Text */
        .loading-brand {
          margin-bottom: 3rem;
        }

        .brand-text {
          font-family: "Michroma", sans-serif;
          font-size: 2rem;
          color: #1a1a1a;
          letter-spacing: 2px;
          opacity: 0;
          animation: brandSlideIn 0.8s ease-out 0.2s forwards;
        }

        /* Loading Animation Container */
        .loading-animation {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 3rem;
        }

        /* Orbiting Dots */
        .orbit-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .orbit-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: linear-gradient(45deg, #ff5722, #ff8a50);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
          box-shadow: 0 2px 8px rgba(255, 87, 34, 0.3);
        }

        .orbit-dot-1 {
          animation: orbit 2s linear infinite;
          transform: translate(-6px, -6px) rotate(0deg) translateX(50px);
        }

        .orbit-dot-2 {
          animation: orbit 2s linear infinite;
          animation-delay: -0.66s;
          transform: translate(-6px, -6px) rotate(120deg) translateX(50px);
        }

        .orbit-dot-3 {
          animation: orbit 2s linear infinite;
          animation-delay: -1.33s;
          transform: translate(-6px, -6px) rotate(240deg) translateX(50px);
        }

        .center-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          background: linear-gradient(45deg, #ff5722, #ff8a50);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px rgba(255, 87, 34, 0.5);
          animation: centerPulse 1.5s ease-in-out infinite;
        }

        /* Pulsing Lines */
        .pulse-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .pulse-line {
          position: absolute;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #ff5722 50%,
            transparent 100%
          );
          opacity: 0.6;
        }

        .pulse-line-1 {
          width: 2px;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
          animation: verticalPulse 2s ease-in-out infinite;
        }

        .pulse-line-2 {
          width: 100%;
          height: 2px;
          top: 50%;
          transform: translateY(-50%);
          animation: horizontalPulse 2s ease-in-out infinite 0.5s;
        }

        .pulse-line-3 {
          width: 140px;
          height: 2px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          background: linear-gradient(
            90deg,
            transparent 0%,
            #ff5722 50%,
            transparent 100%
          );
          animation: diagonalPulse 2s ease-in-out infinite 1s;
        }

        /* Loading Text */
        .loading-text {
          font-family: "Inter", sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #666;
          letter-spacing: 1px;
        }

        .loading-dots::after {
          content: "";
          animation: dots 1.5s infinite;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes brandSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-6px, -6px) rotate(0deg) translateX(50px);
          }
          100% {
            transform: translate(-6px, -6px) rotate(360deg) translateX(50px);
          }
        }

        @keyframes centerPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 20px rgba(255, 87, 34, 0.5);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            box-shadow: 0 0 30px rgba(255, 87, 34, 0.8);
          }
        }

        @keyframes verticalPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translateX(-50%) scaleY(0.5);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scaleY(1);
          }
        }

        @keyframes horizontalPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translateY(-50%) scaleX(0.5);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-50%) scaleX(1);
          }
        }

        @keyframes diagonalPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) rotate(45deg) scaleX(0.5);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) rotate(45deg) scaleX(1);
          }
        }

        @keyframes dots {
          0%,
          20% {
            content: "";
          }
          40% {
            content: ".";
          }
          60% {
            content: "..";
          }
          80%,
          100% {
            content: "...";
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .brand-text {
            font-size: 1.5rem;
          }

          .loading-animation {
            width: 100px;
            height: 100px;
          }

          .orbit-dot-1,
          .orbit-dot-2,
          .orbit-dot-3 {
            transform: translate(-6px, -6px) rotate(0deg) translateX(40px);
          }

          .pulse-line-3 {
            width: 120px;
          }
        }
      `}</style>
    </div>
  );
}
