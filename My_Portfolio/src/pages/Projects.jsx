import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ChaleChalo from "../assets/Projects/ChaleCholo.png";
import Bite from "../assets/Projects/Bite-Box.png"; 
import Obrelo from "../assets/Projects/Obrelo.png";
import ShopKart from "../assets/Projects/ShopKart.png";


function Projects() {

  const projects = [
  

    {
      image:
        Bite,
      title: "Bite-Box",
      description:
        "A responsive food ordering website with attractive UI, product sections and interactive JavaScript features.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/bhavikasagane022/Bite-box-food-app.git",
      live: "https://bite-box-food-app-one.vercel.app/",
    },

    {
      image:
        ChaleChalo,
      title: "ChaleChalo",
      description:
        "A modern travel website featuring an engaging design and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap "],
      github: "https://github.com/bhavikasagane022/Chalochale_.git",
      live: "https://chalochale.vercel.app/",
    },

    {
      image:
        Obrelo,
      title: "Oberlo – E-Commerce Website",
      description:
        "A responsive e-commerce website inspired by Oberlo, designed to showcase products with a clean, user-friendly interface using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/",
      // live: "https://github.com/",
    },

    {
      image:
        ShopKart,
      title: "ShopKart",
      description:
        "A responsive e-commerce website built with React.js, featuring product listings, navigation, and a user-friendly interface for an online shopping experience..",
      technologies: ["React", "HTML", "CSS", "JAVASCRIPT"],
      github: "https://github.com/bhavikasagane022/ShopKart.git",
      live: "https://github.com/",
    }
  ];

  return (
    <section className="page-section">

      <SectionTitle
        title="My Projects"
        subtitle="Recent Work"
      />

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;