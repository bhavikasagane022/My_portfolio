import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>{subtitle}</p>
      <h2>{title}</h2>
      <div className="title-line"></div>
    </motion.div>
  );
}

export default SectionTitle;