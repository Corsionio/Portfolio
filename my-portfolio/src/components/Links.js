import { motion } from 'framer-motion';

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
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Links() {
  return (
    <>
      <motion.section
        className="links-page"
        variants={outerBoxVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2 
          variants={itemVariants} 
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          My Links
        </motion.h2>

        <motion.div
          className="links-container"
          variants={contentVariants}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}
        >
          <motion.a
            href="https://github.com/Corsionio"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src="/images/github.png"
              alt="GitHub"
              style={{ width: '60px', height: '60px' }}
            />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/corsomontuori"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              style={{ width: '70px', height: '60px' }}
            />
          </motion.a>
        </motion.div>
      </motion.section>
    </>
  );
}
