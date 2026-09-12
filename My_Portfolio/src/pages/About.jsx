import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import profileImage from "../assets/images/Profile.png";

function About() {
  return (
    <section className="page-section">

      <SectionTitle
        title="About Me"
        subtitle="Get To Know Me"
      />

      <div className="about-grid">

        <motion.div
          className="about-image-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
    src={profileImage}
    alt="Bhavika Sagane"
    className="about-photo"
  />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>
            I'm <span>Bhavika Sagane</span>
          </h3>

          <h4>MCA Student & Aspiring Frontend Developer</h4>

          <p>
            I am currently pursuing my Master's degree in Computer
            Applications (MCA). I am passionate about frontend development
            and enjoy creating modern, responsive and interactive websites.
          </p>

          <p>
            I have hands-on experience with HTML, CSS, JavaScript,
            Bootstrap and React.js. My goal is to start my career as a
            Frontend Developer and continuously improve my development
            skills.
          </p>

          <div className="about-info">

            <div>
              <strong>Name:</strong>
              <span>Bhavika Sagane</span>
            </div>

            <div>
              <strong>Role:</strong>
              <span>Frontend Developer</span>
            </div>

            <div>
              <strong>Education:</strong>
              <span>MCA</span>
            </div>

            <div>
              <strong>Location:</strong>
              <span>Nagpur, Maharashtra</span>
            </div>

          </div>

          <Button href="/projects">
            Explore My Projects
          </Button>
        </motion.div>

      </div>

    </section>
  );
}

export default About;