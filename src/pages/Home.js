import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300, // coming from right if next, left if prev
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300, // fly out the opposite way
    opacity: 0,
    transition: { duration: 0.2 }
  })
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1); // moving left
    setCurrentIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1); // moving right
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <div className="slider-container">
        <button className="arrow left" onClick={handlePrev}>
          <img src="/images/leftArrow.png" alt="Previous" className="arrow-image" />
        </button>

        <div className="slider-track">
          <AnimatePresence custom={direction} mode="wait" initial={false}>
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
