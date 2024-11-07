import "./Projects.css";
import Image from "next/image";
import Link from "next/link";
import { CgMoreO } from "react-icons/cg";
import { FaLink, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/images/linkshareapp.jpg",
    title: "Project One",
    tools: ["React", "CSS"],
    githubLink: "https://github.com/yourusername/project-one",
    webLink: "https://yourusername.github.io/project-one",
  },
  {
    id: 2,
    image: "/images/designo.png",
    title: "Project Two",
    tools: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yourusername/project-two",
    webLink: "https://yourusername.github.io/project-two",
  },
  {
    id: 3,
    image: "/images/carentweb.png",
    title: "Project One",
    tools: ["React", "CSS"],
    githubLink: "https://github.com/yourusername/project-one",
    webLink: "https://yourusername.github.io/project-one",
  },
  {
    id: 4,
    image: "/images/carentadmin.png",
    title: "Project Two",
    tools: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yourusername/project-two",
    webLink: "https://yourusername.github.io/project-two",
  },
  // add more
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="title">
        <h1>Projects</h1>
        <button id="contact" className="contact-button">
          Contact Me
        </button>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="project-image"
              />
              <div className="overlay"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tools">{project.tools.join(", ")}</p>
              <div className="project-links">
                <div className="link">
                  <CgMoreO size={"2em"} />
                </div>
                <div className="dev-link">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link github-link"
                  >
                    <FaGithub size={"2em"} />
                  </Link>
                  <Link
                    href={project.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link web-link"
                  >
                    <FaLink size={"2em"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
