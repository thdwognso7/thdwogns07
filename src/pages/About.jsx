import React from 'react';

const About = () => {
  return (
    <div className="page-container fade-in">
      <div className="container profile-section glass">
        <div className="profile-header">
           <div className="profile-img">
             <span>W/Q</span>
           </div>
           <div className="profile-info">
             <h1 className="glow-text">ABOUT <span>WONKWANG ME</span></h1>
             <p className="profile-tagline">Computer Science Student & High-End Tech Enthusiast</p>
           </div>
        </div>
        
        <div className="profile-details">
          <div className="bio-card">
            <h3>Who am I?</h3>
            <p>I am a member of the Wonkwang University Class of '26, deeply immersed in the world of high-performance computing and next-gen gaming. My journey started with building my first PC and has evolved into a passion for software development and technical research.</p>
          </div>
          
          <div className="skills-card">
            <h3>Special Interests</h3>
            <div className="skill-tags">
              <span className="skill-tag">Hardware Overclocking</span>
              <span className="skill-tag">React Development</span>
              <span className="skill-tag">Game Engine Research</span>
              <span className="skill-tag">Performance Tuning</span>
              <span className="skill-tag">Cyber-Aesthetics</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          padding-top: 5rem;
          padding-bottom: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
        }
        .profile-section {
          max-width: 900px;
          padding: 4rem;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 4rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 3rem;
        }
        .profile-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #000;
          box-shadow: 0 0 30px var(--glow-primary);
        }
        .profile-info h1 span {
          color: var(--accent-primary);
        }
        .profile-tagline {
           font-size: 1.2rem;
           color: var(--text-secondary);
           margin-top: 0.5rem;
        }
        .profile-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .bio-card h3, .skills-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--accent-primary);
        }
        .bio-card p {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
          }
          .profile-details {
            grid-template-columns: 1fr;
          }
           .profile-section {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
