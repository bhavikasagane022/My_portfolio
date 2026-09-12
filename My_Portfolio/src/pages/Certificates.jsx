import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

function Certificates() {

  const certificates = [
    {
      title: "Python Programming Language",
    //   organization: "Web Development Certification",
      year: "2026",
    },
    {
      title: "C Language",
    //   organization: "React Training Certification",
      year: "2025",
    },
    {
      title: "C++ Language",
    //   organization: "JavaScript Development Certification",
      year: "2025",
    },
  ];

  return (
    <section className="page-section">

      <SectionTitle
        title="Certificates"
        subtitle="My Achievements"
      />

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (
          <motion.div
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="certificate-icon">
              <FiAward />
            </div>

            <span>{certificate.year}</span>

            <h3>{certificate.title}</h3>

            <p>{certificate.organization}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Certificates;