import { motion } from "framer-motion";

function Button({ children, href, secondary = false }) {
  return (
    <motion.a
      href={href}
      className={`custom-btn ${secondary ? "secondary-btn" : ""}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default Button;