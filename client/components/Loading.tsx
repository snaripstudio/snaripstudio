export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        {/* SnaripStudio Logo/Text */}
        <div className="loading-brand">
          <span className="brand-text">SnaripStudio</span>
        </div>

        {/* Subtle Loading Ring */}
        <div className="loading-ring">
          <div className="ring"></div>
        </div>
      </div>

      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: hsl(var(--background));
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
          margin-bottom: 2rem;
        }

        .brand-text {
          font-family: "Michroma", sans-serif;
          font-size: 1.5rem;
          color: hsl(var(--foreground));
          letter-spacing: 2px;
          opacity: 0;
          animation: brandSlideIn 0.8s ease-out 0.2s forwards;
        }

        /* Loading Ring Container */
        .loading-ring {
          width: 48px;
          height: 48px;
          margin: 0 auto;
          position: relative;
        }

        /* Subtle Ring Animation */
        .ring {
          width: 100%;
          height: 100%;
          border: 2px solid hsl(var(--border));
          border-top: 2px solid hsl(var(--primary));
          border-radius: 50%;
          animation: spin 1s linear infinite;
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
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .brand-text {
            font-size: 1.25rem;
            letter-spacing: 1px;
          }

          .loading-ring {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
