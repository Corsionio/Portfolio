import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const containerVariants = {
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

export default function Learning() {
  return (
    <>
      <Header />
      <motion.section
        className="Learning-page"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <h2>What I'm Studying Currently</h2>

        <motion.p variants={itemVariants}>
          <b>Languages:</b> Rust, Diving deeper into: Python
        </motion.p>
        <motion.p variants={itemVariants}>
          <b>Frameworks:</b> Angular
        </motion.p>
        <motion.p variants={itemVariants}>
          <b>Libraries:</b> Tensorflow, Diving deeper into: pyTorch
        </motion.p>
      </motion.section>
      <Footer />
    </>
  );
}
