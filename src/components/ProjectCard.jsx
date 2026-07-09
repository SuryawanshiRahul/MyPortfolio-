import { FaEye, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <li className="project-item active">
      <div className="project-card">

        {/* Image */}

        <figure className="project-img">

          <div className="project-item-icon-box">
            <FaEye />
          </div>

          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />

        </figure>

        {/* Content */}

        <div className="project-content">

          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-description">
            {project.description}
          </p>

          {/* Technologies */}

          <div className="tech-stack">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="tech-badge"
              >
                {tech}
              </span>
            ))}

          </div>

          {/* Buttons */}

          <div className="project-buttons">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <FaGithub />

              <span>GitHub</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              <FaExternalLinkAlt />

              <span>Live Demo</span>
            </a>

          </div>

        </div>

      </div>
    </li>
  );
}

export default ProjectCard;