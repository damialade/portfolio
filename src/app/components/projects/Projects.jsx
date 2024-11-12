"use client";
import { useState } from "react";
import "./Projects.css";
import Image from "next/image";
import Link from "next/link";
import { CgMoreO } from "react-icons/cg";
import { FaLink, FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const Projects = ({ projectsData }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (projectId) => {
    setSelectedProjectId(projectId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProjectId(null);
  };

  //scroll contact form to view
  const contactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="projects-container">
      <div className="title">
        <h1>Projects</h1>
        <button className="contact-button" onClick={contactClick}>
          Contact Me
        </button>
      </div>

      <div className="portfolio-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="project-image"
              />
              <div className="overlay"></div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tools">{project.tools.join(", ")}</p>
              <div className="project-links">
                <div
                  className="link"
                  onClick={() => handleOpenModal(project.id)}
                >
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
      {/* Modal */}
      {showModal && (
        <ProjectModal
          projectId={selectedProjectId}
          projectsData={projectsData}
          show={showModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Projects;
