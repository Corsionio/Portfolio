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

export default function Skills({ isVisible }) {
  return (
    <motion.section
      className="skills"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
    >
      <motion.h2 variants={itemVariants}>Technical Skills</motion.h2>

      <motion.p variants={itemVariants}>
        <strong>Languages:</strong> Python, C/C++, SQL (mySQL, PostgreSQL), JavaScript/TypeScript, C#, Java, HTML/CSS, Ruby
      </motion.p>

      <motion.p variants={itemVariants}>
        <strong>Frameworks:</strong> Django, Flask, FastAPI, .NET, Blazor, Spring, <b><u>React</u></b>
      </motion.p>

      <motion.p variants={itemVariants}>
        <strong>Tools:</strong> Git, Github, Microsoft Azure, Docker, AWS, Google Cloud Platform, Unix, VS Code, 
        Visual Studio, pyCharm, Ubuntu, SSH, Linux, Machine Learning, Statistical Analysis, CI/CD, DevTools, DevOps
      </motion.p>

      <motion.p variants={itemVariants}>
        <strong>Libraries:</strong> NumPy, pandas, pyTorch, OpenAI, Matplotlib, dotenv, json, C++ STL
      </motion.p>
    </motion.section>
  );
}
