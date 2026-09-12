import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section className="page-section">

      <SectionTitle
        title="Contact Me"
        subtitle="Let's Work Together"
      />

      <div className="contact-grid">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h3>Let's create something amazing together.</h3>

          <p>
            I'm currently looking for opportunities where I can
            improve my skills and contribute to real-world projects.
          </p>

          <div className="contact-item">
            <FiMail />
            <div>
              <strong>Email</strong>
              <span>bhavikasagane3@gmail.com</span>
            </div>
          </div>

          <div className="contact-item">
            <FiPhone />
            <div>
              <strong>Phone</strong>
              <span>+91 7249807783</span>
            </div>
          </div>

          <div className="contact-item">
            <FiMapPin />
            <div>
              <strong>Location</strong>
              <span>Nagpur, Maharashtra</span>
            </div>
          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
            <FiSend />
          </motion.button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;