import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

function Education() {
  const education = [
    {
      year: "2025 - Present",
      title: "Master of Computer Applications",
      institute: "MCA",
      description:
        "Currently pursuing MCA with focus on web development and modern technologies.",
    },
    {
      year: "2022 - 2025",
      title: "Bachelor of Computer Applications",
      institute: "BCA",
      description:
        "Completed BCA with practical experience in web development, programming and databases.",
    },
  ];

  return (
    <section className="page-section">

      <SectionTitle
        title="Education"
        subtitle="My Academic Journey"
      />

      <div className="timeline">

        {education.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <h4>{item.institute}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Education;