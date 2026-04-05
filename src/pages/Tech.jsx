import React from 'react';

const Tech = () => {
  return (
    <div className="page-container fade-in">
      <div className="page-header container">
        <h1 className="glow-text">HIGH-TECH <span>EXPLORATION</span></h1>
        <p className="page-subtitle">Deep dives into computing hardware, software optimization, and the latest IT trends.</p>
      </div>

      <div className="container content-grid">
        <aside className="sidebar glass">
          <h3>Categories</h3>
          <ul className="category-list">
            <li className="active">All Topics</li>
            <li>Hardware</li>
            <li>Custom PC Builds</li>
            <li>Software & Tools</li>
            <li>AI & Computing</li>
          </ul>
        </aside>

        <main className="main-content">
          {[1, 2, 3].map((item) => (
            <article key={item} className="tech-article glass">
              <div className="article-meta">
                <span className="date">April 5, 2026</span>
                <span className="read-time">10 min read</span>
              </div>
              <h2>Building the Ultimate 4K Gaming Machine: 2026 Edition</h2>
              <p>Selecting the perfect components for a high-end workstation that doubles as a gaming powerhouse. From the latest RTX 50-series cards to DDR6 memory...</p>
              <div className="article-footer">
                <div className="tags">
                  <span className="tag">#Hardware</span>
                  <span className="tag">#PCBuild</span>
                </div>
                <button className="read-more">CONTINUE READING</button>
              </div>
            </article>
          ))}
        </main>
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
          color: var(--accent-primary);
        }
        .page-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 700px;
          margin: 1.5rem auto 0;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .sidebar {
          padding: 2rem;
          position: sticky;
          top: 100px;
        }
        .sidebar h3 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          color: var(--accent-primary);
          text-transform: uppercase;
        }
        .category-list {
          list-style: none;
        }
        .category-list li {
          padding: 0.75rem 0;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .category-list li:hover, .category-list li.active {
          color: var(--accent-primary);
          padding-left: 0.5rem;
        }
        .tech-article {
          padding: 2.5rem;
          margin-bottom: 2.5rem;
        }
        .article-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.8rem;
          color: var(--accent-secondary);
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .tech-article h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        . tech-article p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .tags {
          display: flex;
          gap: 1rem;
        }
        .tag {
          font-size: 0.75rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }
        .read-more {
          background: none;
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 800;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }
        .read-more:hover {
          background: var(--accent-primary);
          color: #000;
          box-shadow: 0 0 15px var(--glow-primary);
        }
        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: relative;
            top: 0;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Tech;
