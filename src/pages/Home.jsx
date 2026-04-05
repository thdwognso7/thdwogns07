import React from 'react';

const Home = () => {
  return (
    <div className="home-container fade-in">
      <section className="hero">
        <h1 className="hero-title glow-text">
          ADVANCED <br />
          <span>COMPUTING</span> & <br />
          GAMING
        </h1>
        <p className="hero-subtitle">
          Exploring the limits of performance and digital entertainment.
        </p>
        <div className="hero-stats glass">
          <div className="stat-item">
            <span className="stat-value">60+</span>
            <span className="stat-label">FPS</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">4K</span>
            <span className="stat-label">RES</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">RTX</span>
            <span className="stat-label">ON</span>
          </div>
        </div>
      </section>

      <section className="featured-posts">
        <h2 className="section-title">Latest Updates</h2>
        <div className="post-grid">
          {[1, 2, 3].map((id) => (
            <div key={id} className="post-card glass">
              <div className="post-image-placeholder"></div>
              <div className="post-content">
                <span className="post-tag">News</span>
                <h3 className="post-title">Project Delta: The Future of High-End Gaming</h3>
                <p className="post-desc">Exploring how next-gen hardware transforms the gaming landscape...</p>
                <button className="read-more">READ MORE <span>→</span></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .home-container {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 8rem;
        }
        .hero-title {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .hero-title span {
          color: var(--accent-primary);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 3rem;
        }
        .hero-stats {
          display: flex;
          padding: 2rem 4rem;
          gap: 3rem;
          align-items: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent-primary);
        }
        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          letter-spacing: 2px;
        }
        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-color);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .post-card {
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        .post-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 30px rgba(0, 242, 255, 0.1);
        }
        .post-image-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(45deg, #111, #222);
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        .post-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--accent-secondary);
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        .post-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .post-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .read-more {
          background: none;
          border: none;
          color: var(--accent-primary);
          font-weight: 800;
          font-size: 0.8rem;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-stats { 
            padding: 1.5rem;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
