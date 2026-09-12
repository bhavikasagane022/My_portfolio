import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import profileImage from "../assets/images/Profile.png";

function Home() {
  return (
    <section className="hero">

      <div className="hero-bg-circle circle-one"></div>
      <div className="hero-bg-circle circle-two"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-small">Hello, I'm</p>

          <h1>
            Bhavika <span>Sagane</span>
          </h1>

          <h2>
            <span>Frontend Developer</span> & MCA Student
          </h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly web applications
            using React, JavaScript, HTML and CSS.
          </p>

          <div className="hero-buttons">
            <Button href="/projects">
              View My Work
            </Button>

            <Link to="/contact" className="custom-btn secondary-btn">
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image">
            <img
    src={profileImage}
    alt="Bhavika Sagane"
    className="profile-photo"
  />
          </div>

          <motion.div
            className="floating-card card-one"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            HTML
          </motion.div>

          <motion.div
            className="floating-card card-two"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            React
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        className="scroll-down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FiArrowDown />
        <span>Scroll Down</span>
      </motion.div>

    </section>
  );
}

export default Home;