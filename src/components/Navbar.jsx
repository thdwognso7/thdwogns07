import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="logo glow-text">
          CYBER<span>LOG</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/games">Games</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 1rem;
          margin: 1rem auto;
          width: 95%;
          max-width: 1100px;
          height: 70px;
          display: flex;
          align-items: center;
          z-index: 1000;
          padding: 0 1.5rem;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 !important;
        }
        .logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 2px;
        }
        .logo span {
          color: var(--accent-primary);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-links a {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-secondary);
          position: relative;
        }
        .nav-links a:hover {
          color: var(--accent-primary);
        }
        .nav-links a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--accent-primary);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px var(--glow-primary);
        }
        .nav-links a:hover:after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 1.2rem;
          }
          .logo {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
