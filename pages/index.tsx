import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Container from "../src/components/Container";

const Home: NextPage = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  return (
    <div className="w-full">
      <Head>
        <title>{"Muhammad's Portfolio"}</title>
        <meta name="description" content="Muhammad - JavaScript Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isOverlayOpen && (
        <div className="overlay">
          <div className="overlay-glow overlay-glow-primary" />
          <div className="overlay-glow overlay-glow-secondary" />
          <div className="overlay-card">
            <button
              type="button"
              className="close-button"
              aria-label="Close overlay"
              onClick={() => setIsOverlayOpen(false)}
            >
              X
            </button>
            <span className="status-pill">New release is live</span>
            <h1>Portfolio&apos;ning yangi versiyasini ko&apos;ring</h1>
            <p>
              Tezroq, tozaroq va kuchliroq tajriba endi{" "}
              <strong>SAMUM.uz</strong> da.
            </p>
            <a href="https://samum.uz" className="cta-button">
              SAMUM.UZ ga o&apos;tish
            </a>
            <span className="hint">Current page archived version</span>
          </div>
        </div>
      )}
      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          padding: 20px;
          overflow: hidden;
          background: radial-gradient(
              circle at 20% 20%,
              rgba(14, 165, 233, 0.3),
              transparent 45%
            ),
            radial-gradient(
              circle at 80% 80%,
              rgba(34, 197, 94, 0.22),
              transparent 45%
            ),
            rgba(5, 9, 20, 0.68);
          backdrop-filter: blur(9px);
          animation: fadeIn 420ms ease-out;
        }

        .overlay-card {
          position: relative;
          width: min(620px, 100%);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: linear-gradient(
            160deg,
            rgba(8, 15, 35, 0.92),
            rgba(11, 30, 62, 0.86)
          );
          box-shadow: 0 35px 80px rgba(2, 10, 25, 0.5);
          padding: 34px 30px;
          text-align: center;
          color: #f8fbff;
          transform: translateY(8px) scale(0.98);
          animation: cardIn 600ms 80ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(7, 16, 34, 0.45);
          color: #dbeafe;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
          transition: background 180ms ease, transform 180ms ease;
        }

        .close-button:hover {
          background: rgba(15, 23, 42, 0.75);
          transform: scale(1.05);
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.16);
          color: #a7f3d0;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .status-pill::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 0 rgba(52, 211, 153, 0.7);
          animation: pulse 1.7s infinite;
        }

        h1 {
          margin: 0 0 12px;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.18;
          font-weight: 700;
        }

        p {
          margin: 0 auto;
          max-width: 42ch;
          color: rgba(232, 240, 255, 0.88);
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.6;
        }

        .cta-button {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 14px 24px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          color: #052e16;
          background: linear-gradient(120deg, #22c55e, #2dd4bf);
          box-shadow: 0 12px 26px rgba(45, 212, 191, 0.35);
          transition: transform 220ms ease, box-shadow 220ms ease,
            filter 220ms ease;
          animation: ctaFloat 2.4s ease-in-out infinite;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          filter: brightness(1.04);
          box-shadow: 0 18px 32px rgba(45, 212, 191, 0.42);
        }

        .hint {
          display: block;
          margin-top: 14px;
          font-size: 0.83rem;
          color: rgba(208, 222, 244, 0.75);
        }

        .overlay-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(8px);
          pointer-events: none;
        }

        .overlay-glow-primary {
          width: 260px;
          height: 260px;
          top: 8%;
          right: 6%;
          background: rgba(56, 189, 248, 0.38);
          animation: drift 9s ease-in-out infinite;
        }

        .overlay-glow-secondary {
          width: 200px;
          height: 200px;
          left: 5%;
          bottom: 8%;
          background: rgba(16, 185, 129, 0.28);
          animation: drift 7.5s ease-in-out infinite reverse;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes cardIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.75);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(52, 211, 153, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
          }
        }

        @keyframes ctaFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -16px, 0);
          }
        }

        @media (max-width: 640px) {
          .overlay-card {
            padding: 24px 18px;
            border-radius: 20px;
          }

          .cta-button {
            width: 100%;
          }
        }
      `}</style>
      <Container />
    </div>
  );
};

export default Home;
