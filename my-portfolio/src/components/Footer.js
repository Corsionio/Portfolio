import React from 'react';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-links">
          <a href="https://linkedin.com/in/corsomontuori" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
          <a href="https://github.com/Corsionio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </span>
        <span className="footer-copyright">© {new Date().getFullYear()} Corso Montuori. All rights reserved.</span>
      </div>
    </footer>
  );
}