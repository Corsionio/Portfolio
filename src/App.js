import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Learning from './pages/Learning';
import './App.css';

function DiamondGrid() {
  const [diamonds, setDiamonds] = useState([]);
  const diamondSpacing = 80;
  const cols = Math.ceil(window.innerWidth / diamondSpacing) + 2;
  const rows = Math.ceil(window.innerHeight / diamondSpacing) + 2;

  useEffect(() => {
    const newDiamonds = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newDiamonds.push({ row, col, id: `${row}-${col}`, raised: false });
      }
    }
    setDiamonds(newDiamonds);
  }, [cols, rows]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setDiamonds((prev) =>
        prev.map((d) => {
          const x = d.col * diamondSpacing + (d.row % 2 ? diamondSpacing / 2 : 0) + 3; // The + 3 helps tracking seem more fluid
          const y = d.row * diamondSpacing;
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return {
            ...d,
            raised: distance < 100,
          };
        })
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [diamonds]);

  return (
    <div className="diamond-grid">
      {diamonds.map((d) => {
        const x = d.col * diamondSpacing + (d.row % 2 ? diamondSpacing / 2 : 0) - 30;
        const y = d.row * diamondSpacing;
        return (
          <div
            key={d.id}
            className="diamond-wrapper"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            <div className={`diamond ${d.raised ? 'raised' : ''}`} />
          </div>
        );
      })}
    </div>
  );
}




function App() {
  return (
    <Router>
      <div className="App">
        <DiamondGrid />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
