import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import './HomeSlider.css';

const sections = [
  { id: 0, Component: About, label: "About Me" },
  { id: 1, Component: Projects, label: "Projects" },
  { id: 2, Component: Skills, label: "Technical Skills" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const translateValue = isMobile
    ? `-${currentIndex * 100}vw`
    : `-${currentIndex * (100 + (160 / 960) * 100)}%`;

  return (
    <>
      <Header />
      <div className="slider-container">
        <button className="arrow left" onClick={handlePrev}>
          <img src="/images/leftArrow.png" alt="Previous" className="arrow-image" />
        </button>
        <div
          className="slider-track"
          style={{ transform: `translateX(${translateValue})` }}
        >
          {sections.map((section) => (
            <div className="slide" key={section.id}>
              {currentIndex === section.id && <section.Component isVisible={true} />}
            </div>
          ))}
        </div>
        
        <button className="arrow right" onClick={handleNext}>
          <img src="/images/rightArrow.png" alt="Next" className="arrow-image" />
        </button>
      </div>
      <div className="slide-dots">
        {sections.map((section, index) => (
          <span
            key={section.id}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
