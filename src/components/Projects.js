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

export default function Projects({ isVisible }) {
  if (!isVisible) return null; // Don't render anything unless this slide is active

  return (
    <motion.section
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={itemVariants}>My Projects</motion.h2>

      <motion.ul variants={containerVariants}>
        <motion.li variants={itemVariants}>
          <strong>AI Code Quiz Generator</strong> – Django, OpenAI, PostgreSQL, Microsoft Azure, Python
          <br />
          <a
            href="https://codequestions-h0bkfkbvckdwaxfv.eastus-01.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </motion.li>

        <motion.li variants={itemVariants}>
          <strong>Spotify Mood Board</strong> – Flask, Spotify API, Microsoft Azure, Python
          <br />
          <a
            href="https://spotifymoods.azurewebsites.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
        </motion.li>

        <motion.li variants={itemVariants}>
          <strong>Learning Management System</strong> – .NET 8, Blazor, C#
          <br />
          <a
            href="https://github.com/Corsionio/Capstone-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}
