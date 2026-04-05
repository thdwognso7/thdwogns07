import React from 'react';

const Games = () => {
  return (
    <div className="page-container fade-in">
      <div className="page-header container">
        <h1 className="glow-text">GAMING <span>HUB</span></h1>
        <p className="page-subtitle">Personal gaming chronicles, reviews, and insights into the world of digital worlds.</p>
      </div>

      <div className="container main-content">
        <div className="featured-game glass">
          <div className="game-overlay"></div>
          <div className="game-info">
            <span className="game-tag">Trending Now</span>
            <h2>Elden Ring: Shadow of the Erdtree - Mastery Guide</h2>
            <p>Exploring the vast new landscapes and conquering the new bosses with precision builds...</p>
            <button className="read-more">SEE FULL GUIDE</button>
          </div>
        </div>

        <div className="game-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="game-card glass">
              <div className="game-thumb"></div>
              <div className="game-card-content">
                <span className="rating">9.5/10</span>
                <h3>Game Title {i}: Advanced Mechanics</h3>
                <p>A deep dive into the underlying physics and AI systems of the latest RPG hit...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page-container {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .page-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .page-header h1 span {
          color: var(--accent-secondary);
        }
        .featured-game {
          width: 100%;
          height: 500px;
          margin-bottom: 5rem;
          position: relative;
          background: linear-gradient(135deg, #222, #444);
          display: flex;
          align-items: flex-end;
          padding: 4rem;
          overflow: hidden;
        }
        .game-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          z-index: 1;
        }
        .game-info {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }
        .game-tag {
          font-size: 0.8rem;
          color: #fff;
          background: var(--accent-secondary);
          padding: 0.2rem 0.8rem;
          border-radius: 4px;
          font-weight: 800;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .game-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .game-info p {
          color: #ccc;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        .game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .game-card {
           padding: 0;
           overflow: hidden;
           cursor: pointer;
           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .game-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-secondary);
          box-shadow: 0 0 20px rgba(188, 19, 254, 0.2);
        }
        .game-thumb {
          width: 100%;
          height: 180px;
          background: #111;
        }
        .game-card-content {
          padding: 1.5rem;
        }
        .rating {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-secondary);
          display: block;
          margin-bottom: 0.5rem;
        }
        .game-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
        }
        .game-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .read-more {
          background: #fff;
          color: #000;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 4px;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .read-more:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Games;
