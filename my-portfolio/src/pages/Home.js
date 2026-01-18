import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Links from '../components/Links';

import './HomeSlider.css';

const sections = [
  { id: 0, Component: About, label: "About Me" },
  { id: 1, Component: Projects, label: "Projects" },
  { id: 2, Component: Skills, label: "Technical Skills" },
  { id: 3, Component: Certifications, label: "Certifications"},
  { id: 4, Component: Links, label: "Links"},
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200, // shorter distance to reduce lag
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeOut' }
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.22, ease: 'easeIn' }
  })
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // NEW

  const handlePrev = () => {
    if (isTransitioning) return; // prevent spam clicks
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: '70px' }}></div>
      <div className="slider-container">
        <button className="arrow left" onClick={handlePrev} disabled={isTransitioning}>
          <img src="/images/leftArrow.png" alt="Previous" className="arrow-image" />
        </button>

        <div className="slider-track">
          <AnimatePresence
            custom={direction}
            mode="wait"
            initial={false}
            onExitComplete={() => setIsTransitioning(false)}
          >
            <motion.div
              key={currentIndex}
              className="slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {(() => {
                const ActiveComponent = sections[currentIndex].Component;
                return <ActiveComponent isVisible={true} />;
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="arrow right" onClick={handleNext} disabled={isTransitioning}>
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
