import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import './HomeSlider.css';

const sections = [
  { id: 0, component: <About />, label: "About Me" },
  { id: 1, component: <Projects />, label: "Projects" },
  { id: 2, component: <Skills />, label: "Technical Skills" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <div className="slider-container">
        <button className="arrow left" onClick={handlePrev}>
          <img src="/images/leftArrow.png" alt="Previous" className="arrow-image" />
        </button>
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * (100 + (160 / 960) * 100)}%)` }}
        >
          {sections.map((section) => (
            <div className="slide" key={section.id}>
              {section.component}
            </div>
          ))}
        </div>
        
        <button className="arrow right" onClick={handleNext}>
          <img src="/images/rightArrow.png" alt="Next" className="arrow-image" />
        </button>
      </div>
      <Footer />
    </>
  );
}
