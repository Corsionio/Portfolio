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

export default function Certifications({ isVisible }) {
  if (!isVisible) return null;

  return (
    <motion.section
      className="certifications"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={itemVariants}>My Certifications</motion.h2>

      <motion.div variants={containerVariants}>
        <motion.p variants={itemVariants}>
          <strong>Microsoft Certified: Azure Fundamentals (AZ-900)</strong>
        </motion.p>

        <motion.p variants={itemVariants}>
          ... Currently studying and working on AZ-104
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
