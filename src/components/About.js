import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About({ isVisible }) {
  return (
    <motion.section
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>About Me</motion.h2>

      <motion.p variants={itemVariants}>
        I’m a Computer Science B.S. Graduate from Florida State University with a strong background
        in full-stack development, software design, and Agile collaboration. I’ve led C++ and Blazor projects,
        mentored peers in best practices, and built Python apps ranging from song mood boards to AI-powered quizzes.
        My background in customer service enhances my ability to communicate clearly and effectively with team members, clients, and stakeholders in any setting.
      </motion.p>

      <motion.div className="about-images" variants={itemVariants}>
        <div className="head-image">
          <img src="/images/portfolio.JPG" alt="Headshot" className="head-image" />
        </div>
      </motion.div>
    </motion.section>
  );
}
