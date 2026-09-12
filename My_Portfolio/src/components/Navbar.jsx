import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">

        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span>B</span>havika
        </NavLink>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </motion.nav>
  );
}

export default Navbar;