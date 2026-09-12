import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  live,
}) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />

        <div className="project-overlay">
          <a href={github} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>

          <a href={live} target="_blank" rel="noreferrer">
            <FiExternalLink />
          </a>
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tech-list">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;