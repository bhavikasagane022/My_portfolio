import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h3>
            <span>B</span>havika
          </h3>

          <p>
            Frontend Developer & MCA Student
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Bhavika Sagane. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;