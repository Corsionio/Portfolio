import React from 'react';export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Corso Montuori. All rights reserved.</p>
      <p>
        <a href="https://linkedin.com/in/corsomontuori" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
        <a href="https://github.com/Corsionio" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </footer>
  );
}
