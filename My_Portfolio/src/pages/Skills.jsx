import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import SectionTitle from "../components/SectionTitle";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "90%" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "85%" },
    { name: "JavaScript", icon: <FaJs />, level: "80%" },
    { name: "React.js", icon: <FaReact />, level: "75%" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "85%" },
    { name: "Git", icon: <FaGitAlt />, level: "75%" },
    { name: "GitHub", icon: <FaGithub />, level: "75%" },
    { name: "Python", icon: <FaPython />, level: "65%" },
    { name: "MySQL", icon: <SiMysql />, level: "70%" },
  ];

  return (
    <section className="page-section">

      <SectionTitle
        title="My Skills"
        subtitle="What I Know"
      />

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="skill-bar">
              <motion.div
                className="skill-progress"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              ></motion.div>
            </div>

            <span>{skill.level}</span>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;