import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const outerBoxVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <>
      <Header />
      <motion.section
        className="contact-page"
        variants={outerBoxVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={itemVariants}>Contact Me</motion.h2>

          <motion.p variants={itemVariants}>
            <b>Email:</b>{' '}
            <a href="mailto:corsomontuori@gmail.com">corsomontuori@gmail.com</a>
          </motion.p>

          <motion.p variants={itemVariants}>
            <b>LinkedIn:</b>{' '}
            <a
              href="https://linkedin.com/in/corsomontuori"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/corsomontuori
            </a>
          </motion.p>

          <motion.p variants={itemVariants}>
            <b>GitHub:</b>{' '}
            <a
              href="https://github.com/Corsionio"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Corsionio
            </a>
          </motion.p>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}
