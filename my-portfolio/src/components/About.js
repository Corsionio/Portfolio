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
        I’m a Computer Science B.S. graduate from Florida State University with a strong foundation in
        software testing, automation, and full-stack development. My technical skill set includes Python,
        JavaScript/TypeScript, C++, C#, SQL, and modern frameworks such as Django, React, and .NET, along
        with hands-on experience in cloud platforms and CI/CD workflows.
        <br /><br />
        I currently work as a Software Test Engineering Intern at VPT Inc., where I contribute to Mabl automated
        testing efforts and collaborate within Agile teams. I enjoy building reliable systems, improving
        software quality, and working across the development lifecycle to deliver scalable, maintainable
        solutions.
      </motion.p>

      <motion.div className="about-images" variants={itemVariants}>
        <div className="head-image">
          <img src="/images/portfolio.JPG" alt="Headshot" className="head-image" />
        </div>
      </motion.div>
    </motion.section>
  );
}
