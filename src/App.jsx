import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Games from './pages/Games';
import About from './pages/About';

const Footer = () => (
  <footer className="footer container glass">
    <p>&copy; 2026 CYBERLOG. Build with <span>Wonkwang Mastery</span>.</p>
    <div className="footer-links">
      <a href="https://github.com/thdwognso7/-.git" target="_blank" rel="noreferrer">GitHub</a>
      <a href="#">X (Twitter)</a>
      <a href="#">Discord</a>
    </div>
    <style jsx>{`
      .footer {
        margin: 5rem auto 2rem;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 12px;
      }
      .footer p span { color: var(--accent-primary); font-weight: 800; }
      .footer-links { display: flex; gap: 1.5rem; }
      .footer-links a { font-size: 0.9rem; color: var(--text-secondary); }
      .footer-links a:hover { color: var(--accent-primary); }
      @media (max-width: 600px) {
        .footer { flex-direction: column; gap: 1rem; text-align: center; }
      }
    `}</style>
  </footer>
);

function App() {
  return (
    <Router basename="/-">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
