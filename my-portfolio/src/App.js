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

  // General diamond creation/logic
  useEffect(() => {
    const newDiamonds = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newDiamonds.push({
          row,
          col,
          id: `${row}-${col}`,
          raised: false,
          ripple: false,
        });
      }
    }
    setDiamonds(newDiamonds);
  }, [cols, rows]);

  // Mouse hover logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setDiamonds((prev) =>
        prev.map((d) => {
          const x = d.col * diamondSpacing + (d.row % 2 ? diamondSpacing / 2 : 0) - 20;
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

  const handleClick = (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    const newDiamonds = [...diamonds];
    const buckets = {};

    // Group diamonds into distance bands (every 100px = 1 ripple layer)
    newDiamonds.forEach((d) => {
      const x = d.col * diamondSpacing + (d.row % 2 ? diamondSpacing / 2 : 0) - 20;
      const y = d.row * diamondSpacing;

      const dx = x - clickX;
      const dy = y - clickY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const band = Math.floor(distance / 100); // band size = 100px

      if (!buckets[band]) buckets[band] = [];
      buckets[band].push(d.id);
    });

    // Animate each band with delay
    Object.keys(buckets).forEach((bandStr) => {
      const band = parseInt(bandStr);
      const delay = band * 60; // 60ms between rings

      setTimeout(() => {
        setDiamonds((prev) =>
          prev.map((d) =>
            buckets[band].includes(d.id)
              ? { ...d, ripple: true }
              : d
          )
        );

        // Turn off ripple after 250ms
        setTimeout(() => {
          setDiamonds((prev) =>
            prev.map((d) =>
              buckets[band].includes(d.id)
                ? { ...d, ripple: false }
                : d
            )
          );
        }, 250);
      }, delay);
    });
  };



    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [diamonds, cols]);

  return (
    <div className="diamond-grid">
      {diamonds.map((d) => {
        const x = d.col * diamondSpacing + (d.row % 2 ? diamondSpacing / 2 : 0) - 20;
        const y = d.row * diamondSpacing;
        return (
          <div
            key={d.id}
            className="diamond-wrapper"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            <div
              className={`diamond ${
                d.raised || d.ripple ? 'raised' : ''
              }`}
            />
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
